import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { actinvoicesAccountabilityActInvoicesForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'FILE_TYPE' : new FormControl(dataItem.FILE_TYPE  ,   Validators.required ) ,
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  ,   Validators.required ) ,
'INVOICE_DATE' : new FormControl(dataItem.INVOICE_DATE  ,   Validators.required ) ,
'STATUS' : new FormControl(dataItem.STATUS  , ) ,
'SUPPLIER' : new FormControl(dataItem.SUPPLIER  , ) ,
'INVOICE_AMOUNT' : new FormControl(dataItem.INVOICE_AMOUNT  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'INVOICE_NUMBER' : new FormControl(dataItem.INVOICE_NUMBER  ,   Validators.required ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-accountability-act-invoices-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './accountability-act-invoices-form.component.html',
  styleUrls: ['./accountability-act-invoices-form.component.scss']
})


export class ActInvoicesAccountabilityActInvoicesFormFormComponent {
  public title =  this.starServices.getNLS([],"accountability_ACT_INVOICES_FORM.actinvoicesAccountabilityActInvoicesForm.component_title","Act Invoices Accountability Act Invoices Form");
  public routineName = "ActInvoicesAccountabilityActInvoicesFormForm";
  private insertCMD = "INSERT_ACT_INVOICES";
  private updateCMD = "UPDATE_ACT_INVOICES";
  private deleteCMD =   "DELETE_ACT_INVOICES";
  private getCMD = "GET_ACT_INVOICES_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public  isFILE_TYPEEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = {isFILE_TYPEreadOnly : false , isFILE_NAMEreadOnly : false , isINVOICE_NUMBERreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="FILE_TYPE";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-accountability-act-invoices-form';
  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

   constructor(public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1,  public starServices: starServices) {
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;
      this.componentConfig.enabled = true;

  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.WHEN_NEW_FORM_INSTANCE();
  }
   async ngOnInit() {
        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });


this.form = createFormGroup(
        this.formInitialValues
    );
    //this.executeQuery (this.form);
    
    //let Choice_cd = this.starlib1.get_application_property(this, 'Current_Form');
    //let P_Form_Ver = '1.0';
    // await this.starlib1.invoke_form(this.routineName);
    // await this.starlib1.global_program(Choice_cd, P_Form_Ver);

    

    this.onChanges();
    this.setlookupArrDef();
    this.form.reset(this.formInitialValues);
    this.onNew(this.form);

 // Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
         if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
         }
      }
   });


    //this.PRE_BLOCK();
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new actinvoicesAccountabilityActInvoicesForm();   
    @Input() public set detail_Input(form: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ActInvoicesAccountabilityActInvoicesFormForm form.FILE_TYPE :' + form.FILE_TYPE);
    if ( (form.FILE_TYPE != "") &&   (typeof form.FILE_TYPE != "undefined"))
    {
      this.masterKey = form.FILE_TYPE;
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
         this.form.reset();
        this.masterKey = "";
        
      }
    }
  }
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") &&   (typeof form.FILE_TYPE != "undefined") &&   (form.FILE_TYPE != ""))
    {
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";
      }
    }
  }

  get f():any { return this.form.controls; }

   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
    this.starServices.callGetSaveAttachemts("fetch", data,this);
    if (typeof data !== "undefined") {
      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data,this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }
   public commonCallStarNotify(data:any){
    let componentConfig = new componentConfigDef();
      let masterParams = {
        data: data
      }

      let masterKeyArr = [data['FILE_TYPE']];
      let masterKeyNameArr = ['FILE_TYPE'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.masterKeyNameArr[i] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);
   }

    async executeQuery( form: any ) {
      if (typeof form == "undefined")
        return;
     await this.PRE_QUERY(form);
     if (this.FORM_TRIGGER_FAILURE == true)
         return;
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause ;
      this.isSearch = true;
    }
    this.starServices.executeQuery_form(form, this); // Fuad: this should be form, and not this.form.value
  }

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
  }
   public fetchLookupsCallBack() {

      if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
   }

  public onNew(e:any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0)
    {
      for (let i = 0; i< this.masterKeyNameArr.length; i++){
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else
    {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }

    this.starServices.onNew_form ( e , this);
    this.setRequired();
    this.setInitialValues();
    this.WHEN_CREATE_RECORD();
    //this.KEY_CRREC();

  }
   public setInitialValues() {
    
  
    //this.form.patchValue({ 'GSM_OPERATOR': 'N' });
    this.form.markAsPristine();
    this.form.markAsUntouched();

   }
   public setRequired() {
   //this.form.controls['GOVERNATE'].setValidators([Validators.required]);
   }



  async onRemove( form:any) {
    await this.PRE_DELETE(form.value);
    //await this.KEY_DELREC();
     if (this.FORM_TRIGGER_FAILURE) 
       return;

    this.starServices.onRemove_form(form,this);
  }

  async  enterQuery (form : any){
    
    this.starServices.enterQuery_form ( form, this);

    await this.KEY_ENTQRY();
  }

    async callBackPost_Insert(NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
         this.saveCompletedOutput.emit(this.form.value);
      }
   }
   async callBackPost_Update( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:",  " NewVal:", NewVal);
      this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
   }

   async callBackPost_Remove( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:",  " NewVal:", NewVal);
      this.commonCallStarNotify("");
      await this.POST_DELETE(NewVal);
   }

   async saveChanges(form: any) {
      this.FORM_TRIGGER_FAILURE = false;
      this.Body = [];
        
     


         this.form.markAllAsTouched();
   
          await this.WHEN_VALIDATE_RECORD(form.value);
         if (this.FORM_TRIGGER_FAILURE)
            return;

      //this.starServices.beginTrans();

      if (this.isNew == true) {
         this.disableEmitSave = true;
          await this.PRE_INSERT(form.value);
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      else {
       
             await this.PRE_UPDATE(form.value);
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      if (this.form.valid == false){
         let invalid = this.starlib1.getInvalidControls(this);
          this.FORM_TRIGGER_FAILURE = true;
          this.starServices.endTrans(this, false);
          return;
      }

     
      if (!this.FORM_TRIGGER_FAILURE) {
	        await this.KEY_COMMIT();
	      if (this.FORM_TRIGGER_FAILURE == true){
		this.starServices.endTrans(this, false);
		 return;
		}
         this.starServices.callGetSaveAttachemts("save","",this);
         this.starServices.saveChanges_form(form, this);
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FILE_TYPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFILE_TYPE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FILE_NAME\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFILE_NAME"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"STATUS\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSTATUS"}];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrFILE_TYPE = [];

public lkpArrFILE_NAME = [];

public lkpArrSTATUS = [];

public lkpArrGetFILE_TYPE(CODE: any): any {
var rec = this.lkpArrFILE_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFILE_NAME(CODE: any): any {
var rec = this.lkpArrFILE_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSTATUS(CODE: any): any {
var rec = this.lkpArrSTATUS.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('SUPPLIER').valueChanges.subscribe(val => {
});
this.form.get('INVOICE_AMOUNT').valueChanges.subscribe(val => {
});
this.form.get('LOGNAME').valueChanges.subscribe(val => {
});
this.form.get('INVOICE_NUMBER').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("ActInvoicesAccountabilityActInvoicesFormForm ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.form);
        ComponentConfig.masterSaved = null;
      }
      if (ComponentConfig.masterKey != null) {

        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.masterKeyArr != null) {
        this.masterKeyArr = ComponentConfig.masterKeyArr;
      }
      if (ComponentConfig.masterKeyNameArr != null) {
        this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      }
      if (ComponentConfig.masterParams != null) {
        this.masterParams = ComponentConfig.masterParams;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.form)

      }
      if (ComponentConfig.masterReadCompleted != null) {
        this.isSearch = false;
        this.isChild = true;
        this.executeQuery(this.form.value)
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
      if ( ComponentConfig.isChild == true)
      {
          this.isChild = true;
      }
      if (ComponentConfig.languageChanged != null) {
        this.userLang =  ComponentConfig.languageChanged;
        this.setlookupArrDef();
      }


    }
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  
  WHEN_NEW_FORM_INSTANCE(){
    
    
  }
  WHEN_CREATE_RECORD(){
    

  }
   KEY_ENTQRY(){
    

  }
   KEY_DELREC(){
    

  }
   async WHEN_VALIDATE_RECORD(formGroup){
    

  }
  async  PRE_UPDATE(formGroup){

  }
  async  POST_UPDATE(formGroup){
    
    
  }
  async KEY_COMMIT(){
   

}
 async ON_CLICK(formGroup){
     

}
  async  PRE_INSERT(formGroup){
    
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    
   
  }
  async  POST_QUERY(formGroup){
    
    
  }
  async  PRE_DELETE(formGroup:any){
    

  }
  async POST_DELETE(formGroup:any){
    

  }



async WHEN_VALIDATE_ITEM_FILE_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['FILE_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('FILE_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_FILE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('FILE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_INVOICE_DATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['INVOICE_DATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('INVOICE_DATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_STATUS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['STATUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('STATUS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_SUPPLIER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['SUPPLIER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('SUPPLIER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_INVOICE_AMOUNT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['INVOICE_AMOUNT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('INVOICE_AMOUNT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGDATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGDATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('LOGDATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGNAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGNAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('LOGNAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_INVOICE_NUMBER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['INVOICE_NUMBER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('INVOICE_NUMBER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 } 
 async onValueChange_FILE_TYPE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FILE_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_FILE_NAME(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FILE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_INVOICE_DATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_INVOICE_DATE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_STATUS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_STATUS(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_SUPPLIER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SUPPLIER(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_INVOICE_AMOUNT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INVOICE_AMOUNT(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_LOGDATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LOGDATE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_LOGNAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LOGNAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_INVOICE_NUMBER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INVOICE_NUMBER(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 }

// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig!: componentConfigDef;
  public filterCode!: string;
  public showCodeDetails:boolean=false;

// For Attachments and images
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig!: componentConfigDef;
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

 public async att_img_saveFormCompleted(field_id){
  console.log("att_img_saveFormCompleted:",  field_id, this.form.value[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.value[field_id]);
}
public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field)
    console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
      this.form.get(field).value)
      
  console.log("getAtt_data:this.form:",this.form, this.form.value[field]);
  let val = this.form.value[field];
  console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}

}


