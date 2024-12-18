import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { starServices } from 'starlib';
import { formArea, componentConfigDef } from '@modeldir/model';


const createFormGroup = dataItem => new FormGroup({
  'FORM_NAME': new FormControl(dataItem.FORM_NAME, Validators.required),
  'PAGE_NO': new FormControl(dataItem.PAGE_NO, Validators.required),
  'AREA_NO': new FormControl(dataItem.AREA_NO, Validators.required),
  'AREA_TYPE': new FormControl(dataItem.AREA_TYPE),
  'AREA_TITLE': new FormControl(dataItem.AREA_TITLE),
  'AREA_HELP': new FormControl(dataItem.AREA_HELP),
  'LOGNAME': new FormControl(dataItem.LOGNAME),
  'LOGDATE': new FormControl(dataItem.LOGDATE),
  'AREA_PROTECTED': new FormControl(dataItem.AREA_PROTECTED)
}, { updateOn: 'blur' });

declare function getParamConfig(): any;
@Component({
  selector: 'app-dsp-form-area-form',
  templateUrl: './dsp-form-area-form.component.html',
  styleUrls: ['./dsp-form-area-form.component.css']
})

export class DspFormAreaFormComponent {
  @ViewChild("focusElement") focusElement: ElementRef<HTMLDivElement>

  public title = "Area properties";
  private insertCMD = "INSERT_DSP_FORM_AREA";
  private updateCMD = "UPDATE_DSP_FORM_AREA";
  private deleteCMD = "DELETE_DSP_FORM_AREA";
  private getCMD = "GET_DSP_FORM_AREA_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public form: FormGroup;
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  private CurrentRec = 0;
  public executeQueryresult: any;
  public isSearch: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isFORM_NAMEEnable: boolean = true;
  private Body = [];
  private isNew: boolean;
  public primarKeyReadOnlyArr = { isFORM_NAMEreadOnly: false, isPAGE_NOreadOnly: false, isAREA_NOreadOnly: false };
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public masterKey = "";
  public masterKeyName = "FORM_NAME";
  public formattedWhere = null;
  public submitted = false;
  currentArea

  //@Input()
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public starServices: starServices) {
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  public ngOnInit(): void {
    this.form = createFormGroup(
      this.formInitialValues
    );
    //this.executeQuery (this.form);
    this.onChanges();
    this.starServices.fetchLookups(this, this.lookupArrDef);
    this.form.reset(this.formInitialValues);
    this.isNew = true;

    this.form.valueChanges.pipe(
      distinctUntilChanged(),
      // debounceTime(500)
    ).subscribe(() => {
      if (this.currentArea && this.currentArea && this.currentArea["AREA_NO"] == this.form.value["AREA_NO"] && this.objectDifference(this.currentArea, this.form.value).length > 0) {
        this.saveChanges(this.form)
        this.saveCompletedOutput.emit({
          type: "area",
          updating: true,
          data: this.form.value
        })
      }
    })
  }

  objectDifference(obj1, obj2) {
    let diff = []
    Object.keys(obj1).forEach(key => {
      if (!key.includes('_NEW') && !key.includes('_QUERY') && obj1[key] != obj2[key]) diff.push(key)
    })

    return diff
  }

  private formInitialValues = new formArea();

  @Input() public set executeQueryInput(form: any) {
    if ((typeof form != "undefined") && form.type == "area" && (typeof form.data.FORM_NAME != "undefined") && (form.data.FORM_NAME != "")) {
      this.isFORM_NAMEEnable = false;
      this.isSearch = true;
      this.currentArea = JSON.parse(JSON.stringify(form.data))
      this.executeQuery(form.data);
      this.isChild = false;
    }
    else {

      if (typeof this.form != "undefined") {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";
      }
    }
  }

  get f():any { return this.form.controls; }
  public executeQuery(form: any): void {
    this.starServices.executeQuery_form(form, this);
  }

  private addToBody(NewVal) {
    this.Body.push(NewVal);
  }

  public onCancel(e): void {
    this.starServices.onCancel_form(e, this);
  }

  public onNew(e): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length", this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0) {
      for (var i = 0; i < this.masterKeyNameArr.length; i++) {
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }
    this.starServices.onNew_form(e, this);
  }

  public onRemove(form): void {
    this.starServices.onRemove_form(form, this);
  }

  public enterQuery(form: any): void {

    this.starServices.enterQuery_form(form, this);
  }

  public saveChanges(form: any): void {
    this.currentArea = form.value
    this.Body = [];
    this.starServices.saveChanges_form(form, this);
  }

  public goRecord(target: any): void {
    this.starServices.goRecord(target, this);
  }

  public userLang = "EN";
  public lookupArrDef = [{
    "statment": "SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='AREA_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrAREA_TYPE"
  }];

  public lkpArrAREA_TYPE = [];

  public lkpArrGetAREA_TYPE(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrAREA_TYPE.find(x => x.CODE === CODE);
    return rec;
  }

  onChanges(): void {
    this.form.get('AREA_TYPE').valueChanges.subscribe(val => {
      //this.lookupArrDef =[];
      //this.starServices.fetchLookups(this, this.lookupArrDef);
    });
  }


  public printScreen() {
    window.print();
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("dsp-form-area-form ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      if (ComponentConfig.masterSaved != null && ComponentConfig.masterSaved == true) {
        this.focusElement.nativeElement.focus()
        setTimeout(() => {
          this.saveChanges(this.form);
          ComponentConfig.masterSaved = null;

          if (ComponentConfig.formMode == "area_new")
            this.saveCompletedOutput.emit({
              type: ComponentConfig.formMode,
              data: this.form.value
            })
        }, 200)
      }
      if (ComponentConfig.masterKey != null) {
        this.isFORM_NAMEEnable = false;
        //this.isPAGE_NOEnable  = false;

        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.masterKeyArr != null) {
        this.masterKeyArr = ComponentConfig.masterKeyArr;
      }
      if (ComponentConfig.masterKeyNameArr != null) {
        this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;

        this.formInitialValues.FORM_NAME = this.masterKeyArr[this.masterKeyNameArr.indexOf("FORM_NAME")]
        this.formInitialValues.PAGE_NO = this.masterKeyArr[this.masterKeyNameArr.indexOf("PAGE_NO")]
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.form)

      }

    }
  }


}


