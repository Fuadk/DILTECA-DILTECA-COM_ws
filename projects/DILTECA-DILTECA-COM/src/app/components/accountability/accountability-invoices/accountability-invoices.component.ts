import { Component, OnInit, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { actinvoicesAccountabilityActInvoicesGrid, componentConfigDef } from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { getDate } from '@progress/kendo-date-math';

const createFormGroup = (dataItem: any) => new FormGroup({
  'FILE_TYPE': new FormControl(dataItem.FILE_TYPE,),
  'FILE_NAME': new FormControl(dataItem.FILE_NAME,),
  'INVOICE_NUMBER': new FormControl(dataItem.INVOICE_NUMBER,),
  'SUPPLIER': new FormControl(dataItem.SUPPLIER,),
  'INVOICE_DATE': new FormControl(dataItem.INVOICE_DATE,),
  'INVOICE_AMOUNT': new FormControl(dataItem.INVOICE_AMOUNT,),
  'STATUS': new FormControl(dataItem.STATUS,),
  'LOGNAME': new FormControl(dataItem.LOGNAME,),
  'LOGDATE': new FormControl(dataItem.LOGDATE,)
});

declare function getParamConfig(): any;

@Component({

  selector: 'app-accountability-invoices',
  templateUrl: './accountability-invoices.component.html',
  styleUrls: ['./accountability-invoices.component.scss']
})
export class AccountabilityInvoicesComponent implements OnInit {
  public title = '';
  public routineName = "AccountabilityInvoices";
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title = this.starServices.getNLS([], "accountability_invoices.accountability_invoices.component_title", "Invoices");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = true;
  public submitted = false;
  public isPhonePortrait = false;
  public isSearch!: boolean;
  public routineAuth = "AccountabilityInvoices";
  public paramConfig;

  public componentConfig: componentConfigDef;

  public grid_0_ACT_INVOICES: actinvoicesAccountabilityActInvoicesGrid;
  public ACT_INVOICESGrid_0Config: componentConfigDef;
  public form2!: FormGroup;
  public PDFfileName = this.title + ".PDF";
  private Body: any = [];
  public gap: any = {
    rows: 2,
    columns: 2,
  };
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  private formInitialValues: any = new actinvoicesAccountabilityActInvoicesGrid();
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName);
    this.responsive.observe([Breakpoints.HandsetPortrait]).subscribe((state: BreakpointState) => { this.isPhonePortrait = false; if (state.matches) { this.isPhonePortrait = true; } });
    this.form2 = createFormGroup(
      this.formInitialValues
    );
    this.paramConfig = getParamConfig();
    //this.onChanges();
    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
    this.setlookupArrDef();


    this.grid_0_ACT_INVOICES = new actinvoicesAccountabilityActInvoicesGrid();
    this.ACT_INVOICESGrid_0Config = new componentConfigDef();
    this.ACT_INVOICESGrid_0Config.isMaster = true;
    this.ACT_INVOICESGrid_0Config.routineAuth = this.routineAuth;
    //this.ACT_INVOICESGrid_0Config.showToolBar = false;
    this.ACT_INVOICESGrid_0Config.gridHeight = "500";
  }
  public readCompletedHandler(form_ACT_INVOICES) {
    let masterKeyArr = [form_ACT_INVOICES.FILE_TYPE, form_ACT_INVOICES.FILE_NAME, form_ACT_INVOICES.INVOICE_NUMBER];
    let masterKeyNameArr = ["FILE_TYPE", "FILE_NAME", "INVOICE_NUMBER"];
  }
  public clearCompletedHandler(form_ACT_INVOICES) {
  }
  public saveCompletedHandler(form_ACT_INVOICES) {
  }
  private addToBody(NewVal: any) {
    this.Body.push(NewVal);
  }
  get f(): any { return this.form2.controls; }
  public executeQuery(form: any): void {
    // let date1 = form.INVOICE_DATE;
    // if (date1 != null) {
    //   let date1Loc = new Date(date1).toString();
    //   var array = date1Loc.split("GMT");
    //   date1Loc = array[0] + "GMT+0000";
    //   let invDate = new Date(date1Loc);
    //   let dateVal1 = this.starServices.FORMAT_ISO(invDate);
    //   form.INVOICE_DATE = dateVal1
    // }

    if (this.form2.invalid) {
      this.submitted = true;
      this.starServices.showOkMsg(this, this.starServices.fieldsRequiredMsg, "Error");
      return;
    }

    let Page = null;
    Page = this.starServices.formatWhere(form);

    this.ACT_INVOICESGrid_0Config = new componentConfigDef();
    this.ACT_INVOICESGrid_0Config.formattedWhere = Page;
  }
  public onCancel(e: any): void {
    this.starServices.onCancel_form(e, this);
    this.ACT_INVOICESGrid_0Config = new componentConfigDef();
    this.ACT_INVOICESGrid_0Config.clearComponent = true;
  }
  public enterQuery(form: any): void {
    this.starServices.enterQuery_form(form, this);
  }
  public userLang = "EN";
  public lookupArrDef: any = [];
  public setlookupArrDef() {
    this.lookupArrDef = [{
      "statment": "SELECT FILE_NAME CODE, FILE_NAME CODETEXT_LANG  FROM ACT_FILE_DEF   WHERE FILE_TYPE = \"INVOICE\" order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrFILE_NAME"
    }];
    this.starServices.fetchLookups(this, this.lookupArrDef);
  }

  public lkpArrFILE_NAME = [];

  public lkpArrGetFILE_TYPE(CODE: any): any {
    var rec = this.lkpArrFILE_NAME.find((x: any) => x.CODE === CODE);
    return rec;
  }

  public printScreen() {
    window.print();
  }
}
