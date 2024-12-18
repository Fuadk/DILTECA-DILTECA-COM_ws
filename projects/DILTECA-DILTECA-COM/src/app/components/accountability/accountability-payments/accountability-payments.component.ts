import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { actpaymentAccountabilityActPaymentGrid  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
 const createFormGroup = (dataItem:any) => new FormGroup({
'FILE_TYPE' : new FormControl(dataItem.FILE_TYPE  , ) ,
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  , ) ,
'PAYMENT_NUMBER' : new FormControl(dataItem.PAYMENT_NUMBER  , ) ,
'PAYMENT_DATE' : new FormControl(dataItem.PAYMENT_DATE  , ) ,
'PAYMENT_DESCRIPTION' : new FormControl(dataItem.PAYMENT_DESCRIPTION  , ) ,
'PAYMENT_AMOUNT' : new FormControl(dataItem.PAYMENT_AMOUNT  , ) ,
'STATUS' : new FormControl(dataItem.STATUS  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});

declare function getParamConfig():any;

@Component({

  selector: 'app-accountability-payments',
  templateUrl: './accountability-payments.component.html',
  styleUrls: ['./accountability-payments.component.scss']
})
export class AccountabilityPaymentsComponent implements OnInit {
  public title = '';
  public routineName = "AccountabilityPayments";
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"accountability_payments.accountability_payments.component_title","Payments");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = true;
  public  submitted =  false;
  public isPhonePortrait = false;
  public isSearch!: boolean;
  public routineAuth = "AccountabilityPayments";
  public paramConfig; 

  public componentConfig: componentConfigDef;

  public grid_0_ACT_PAYMENT : actpaymentAccountabilityActPaymentGrid;
  public  ACT_PAYMENTGrid_0Config : componentConfigDef;
  public  form!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  private Body:any =[];
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  private formInitialValues:any =   new actpaymentAccountabilityActPaymentGrid();   
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );
      this.responsive       .observe([Breakpoints.HandsetPortrait])       .subscribe((state: BreakpointState) => {       this.isPhonePortrait = false;         if (state.matches) {        this.isPhonePortrait = true;         }       });       this.form = createFormGroup(
        this.formInitialValues
    );
    this.paramConfig = getParamConfig();
    //this.onChanges();
    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
    this.setlookupArrDef();


   this.grid_0_ACT_PAYMENT = new actpaymentAccountabilityActPaymentGrid();
   this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
   this.ACT_PAYMENTGrid_0Config.isMaster = true;
   this.ACT_PAYMENTGrid_0Config.routineAuth = this.routineAuth;
   this.ACT_PAYMENTGrid_0Config.showToolBar = false;
   this.ACT_PAYMENTGrid_0Config.gridHeight = "250";
  }
    public readCompletedHandler( form_ACT_PAYMENT) {
    let masterKeyArr = [form_ACT_PAYMENT.FILE_TYPE,form_ACT_PAYMENT.FILE_NAME,form_ACT_PAYMENT.PAYMENT_NUMBER];
    let masterKeyNameArr = ["FILE_TYPE","FILE_NAME","PAYMENT_NUMBER"];
  }
  public clearCompletedHandler( form_ACT_PAYMENT) {
  }
  public saveCompletedHandler( form_ACT_PAYMENT) {
  }
  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }
 get f():any { return this.form.controls; }
  public  executeQuery( form: any ): void {
    if (this.form.invalid)
    {
      this.submitted =  true;
      this.starServices.showOkMsg(this,this.starServices.fieldsRequiredMsg,"Error");
      return;
    }

    let Page =null;
    Page =  this.starServices.formatWhere(form);
    
   this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
   this.ACT_PAYMENTGrid_0Config.formattedWhere = Page;
 }
  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
   this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
   this.ACT_PAYMENTGrid_0Config.clearComponent = true;
 }
  public enterQuery (form : any): void{
    this.starServices.enterQuery_form ( form, this);
 }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[/**/];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public printScreen(){
  window.print();
}
 }
