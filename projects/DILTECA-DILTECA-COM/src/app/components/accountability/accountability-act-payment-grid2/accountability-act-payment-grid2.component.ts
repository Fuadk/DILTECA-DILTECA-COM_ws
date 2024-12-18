import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2,EventEmitter,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor  } from '@progress/kendo-data-query';

import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult ,RowClassArgs} from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { IntlService } from "@progress/kendo-angular-intl";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {   actpaymentAccountabilityActPaymentGrid2 , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'FILE_TYPE' : new FormControl(dataItem.FILE_TYPE  ,   Validators.required ) ,
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  ,   Validators.required ) ,
'PAYMENT_NUMBER' : new FormControl(dataItem.PAYMENT_NUMBER  ,   Validators.required ) ,
'PAYMENT_DATE' : new FormControl(dataItem.PAYMENT_DATE  ,   Validators.required ) ,
'PAYMENT_DESCRIPTION' : new FormControl(dataItem.PAYMENT_DESCRIPTION  , ) ,
'PAYMENT_AMOUNT' : new FormControl(dataItem.PAYMENT_AMOUNT  , ) ,
'STATUS' : new FormControl(dataItem.STATUS  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});

const createFormGroup2 = (dataItem:any) => new FormGroup({
  'FILE_TYPE' : new FormControl(dataItem.FILE_TYPE  ,   Validators.required ) ,
  'FILE_NAME' : new FormControl(dataItem.FILE_NAME  ,   Validators.required ) ,
  'INVOICE_NUMBER' : new FormControl(dataItem.INVOICE_NUMBER  ,   Validators.required ) ,
  'SUPPLIER' : new FormControl(dataItem.SUPPLIER  , ) ,
  'INVOICE_DATE' : new FormControl(dataItem.INVOICE_DATE  ,   Validators.required ) ,
  'INVOICE_AMOUNT' : new FormControl(dataItem.INVOICE_AMOUNT  , ) ,
  'STATUS' : new FormControl(dataItem.STATUS  , ) ,
  'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
  'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
  });
  


const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-accountability-act-payment-grid2',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './accountability-act-payment-grid2.component.html',
  styleUrls: ['./accountability-act-payment-grid2.component.scss'
],
  
  styles: [
    `.button-notification {
          padding: 10px 5px;
          font-size: 1em;
          color: #313536;
      }
      .kendo-pdf-export {
        font-family: "DejaVu Sans", "Arial", sans-serif;
        font-size: 12px;
      }
      `
    ]
})

export class ActPaymentAccountabilityActPaymentGrid2GridComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
 
 public grid!: GridComponent;
 
 //@Input()    
 public showToolBar = true;
  public removedRec=[];
  public groups: GroupDescriptor[] = [];
  public view!: any[];
  public formGroup!: FormGroup;
  public formGroup2: FormGroup; 
  private editedRowIndex!: number;
  private docClickSubscription: any;
  private isNew!: boolean;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  
  			public  isFILE_TYPEEnable : boolean = true; 
public  isFILE_NAMEEnable : boolean = true; 
public  isPAYMENT_NUMBEREnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "400";

  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="FILE_TYPE";
  private insertCMD = "INSERT_ACT_PAYMENT";
  private updateCMD = "UPDATE_ACT_PAYMENT";
  private deleteCMD =   "DELETE_ACT_PAYMENT";
  private getCMD = "GET_ACT_PAYMENT_QUERY";

  private insertCMD1 = "INSERT_ACT_PAYMENT";
  private updateCMD1 = "UPDATE_ACT_PAYMENT";
  private deleteCMD1 =   "DELETE_ACT_PAYMENT";
  private getCMD1 = "GET_ACT_PAYMENT_QUERY";

  public  executeQueryresult:any;
  public  executeQueryresult2:any;
  //public title =  this.starServices.getNLS([],"accountability_ACT_PAYMENT_GRID2.actpaymentAccountabilityActPaymentGrid2.component_title","Act Payment Accountability Act Payment Grid2");
  public title =  "Payments";
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isFILE_TYPEreadOnly : false , isFILE_NAMEreadOnly : false , isPAYMENT_NUMBERreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;
  public createFormGroupGrid2 = createFormGroup2;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-accountability-act-payment-grid2';

  private Body:any =[];
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,  private starlib1: Starlib1, public starServices: starServices, private renderer: Renderer2) {
      this.router = router;
      this.paramConfig = getParamConfig();
      this.componentConfig = new componentConfigDef(); 
      //this.componentConfig.gridHeight =  "500";
      this.componentConfig.showTitle = true;
      this.componentConfig.queryable  = true;
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
  public ngOnInit(): void {
      this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.setlookupArrDef();
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
    console.log("this.grid:", this.grid, this.grid2)
  }
 
  
    public ngOnDestroy(): void {
        this.docClickSubscription();
   // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();

    }

   callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

//Next part for filtering
   public state: State = {
  };
  
    public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      let out = process(this.executeQueryresult.data , this.state);
      this.grid.data = out;
  }

  @Input() public set detail_Input(grid: any) {
    if ( (grid.FILE_TYPE != "") &&   (typeof grid.FILE_TYPE != "undefined"))
    {
      this.masterKey = grid.FILE_TYPE;
      
      this.isSearch = true;
      this.executeQuery(grid);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.grid != "undefined")
      {
        //this.isChild = false;
        this.grid.data = null;
        this.masterKey = "";
        
      }
    }
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }

  
  private gridInitialValues:any = new actpaymentAccountabilityActPaymentGrid2();   

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup)
      if (this.paramConfig.DEBUG_FLAG) console.log("debug:this.formGroup.valid:", this.formGroup.valid, this.formGroup);

    if (!this.uploadimage && this.formGroup && this.formGroup.valid &&
        !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link')) {
        this.saveCurrent();
    }
  }
  

  public addHandler(): void {
    this.isNew = true;
    this.starServices.addHandler_grid(this)
    this.setRequired();
    if (this.isSearch != true){
      this.setInitialValues();
    }
    this.editableMode = true;

  }
   public setInitialValues() {
   
   }
   public setRequired() {
   }

 async cellClickHandler(event:any ) {

    if (event.isEdited || (this.formGroup && !this.formGroup.valid)) {
        return;
    }
    this.editableMode = false;
    if (this.isNew) {
        event.rowIndex += 1;
	this.editableMode = true;
    }
    if (!this.saveCurrent())
      return;
    this.formGroup = createFormGroup(event.dataItem);
    if (this.componentConfig.enabled && this.componentConfig.updateable) {
      this.editedRowIndex = event.rowIndex;
      this.grid.editRow(event.rowIndex, this.formGroup);
    }
    await this.ON_CLICK(this.formGroup.value, event.rowIndex);
    this.readCompletedOutput.emit(this.formGroup.value);

     let componentConfig = new componentConfigDef();
      let masterParams = {
        data: this.formGroup.value
      }

      let masterKeyArr = [this.formGroup.value['FILE_TYPE']];
      let masterKeyNameArr = ['FILE_TYPE'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.[masterKeyNameArr[i]] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);
}


  public enterQuery (grid : GridComponent): void{
     this.editableMode = true;
    this.starServices.enterQuery_grid( grid, this);
  }
  

   async callBackFunction(data:any) {
    console.log("grid2:callBackFunction:", this.grid2)
      if (data.total === 0)
         return;

      let GridData:any;
      GridData = Object.assign([], this.grid.data);
      for (let i = 0; i < GridData.data.length; i++){
        await this.starServices.callGetSaveAttachemts("fetch", GridData.data[i],this); 
        this.POST_QUERY(GridData.data[i], i);
         this.starServices.att_img_populateArrs(GridData.data[i],this);
         await this.starServices.sleep(100);

      }

      let componentConfig = new componentConfigDef();
      let masterParams = {
        data: GridData.data[0]
      }

      let masterKeyArr = [GridData.data[0]['FILE_TYPE']];
      let masterKeyNameArr = ['FILE_TYPE'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.[masterKeyNameArr[i]] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);

   }
  public commonCallStarNotify(data:any) {
    //data = this.masterKeyArr;
    if (this.paramConfig.DEBUG_FLAG) console.log("commonCallStarNotify:data", data);
    let componentConfig = new componentConfigDef();
    let masterParams = {
      data: this.masterKeyArr
    }

       let masterKeyArr = [data['FILE_TYPE'],data['FILE_NAME'],data['PAYMENT_NUMBER']];
      let masterKeyNameArr = ['FILE_TYPE','FILE_NAME','PAYMENT_NUMBER'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.[masterKeyNameArr[i]] = masterKeyArr[i];
      //}
    
    componentConfig.masterKeyArr = masterKeyArr;
    componentConfig.masterKeyNameArr = masterKeyNameArr;
    componentConfig.masterReadCompleted = true;
    componentConfig.eventTo = this.children;
    componentConfig.masterParams = masterParams;
    //this.callStarNotify(componentConfig);

  }
   executeQuery (grid : GridComponent){
    console.log("grid2:executeQuery:", this.grid2)
    if (this.formGroup)
       this.PRE_QUERY(this.formGroup.value);
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause;
      this.isSearch = true;
    }
    this.insertCMD = this.insertCMD1;
    this.updateCMD = this.updateCMD1;
    this.deleteCMD =  this.deleteCMD1;
    this.getCMD = this.getCMD1;
    
    this.starServices.executeQuery_grid( grid,this);
    this.editableMode = false;
  } 


  async callBackPost_Save( NewVal:any) {
      if (this.FORM_TRIGGER_FAILURE)
      {
         this.starServices.endTrans(this, false);
         return;
      }
      this.FORM_TRIGGER_FAILURE = false;
      let GridData:any;
      this.commonCallStarNotify(NewVal);
      GridData = Object.assign([], this.grid.data);
      let i = 0;
      while (i < GridData.data.length) {
         let query = GridData.data[i]._QUERY_DONE;
         if (typeof query !== "undefined") {
         let myArray = query.split("_");
         if (myArray[0] == "INSERT"){
           await this.POST_INSERT(GridData.data[i], i);
         }else if (myArray[0] == "UPDATE"){
           await this.POST_UPDATE(GridData.data[i], i);
         }
       
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }
       }
       delete GridData.data[i]._QUERY_DONE;
         i++;
      }

      if (!this.FORM_TRIGGER_FAILURE) {
        //this.KEY_COMMIT();
        this.starServices.endTrans(this, true);
      }


   }

   async saveChanges(grid: GridComponent) {
    
    //await this.KEY_COMMIT();
    this.FORM_TRIGGER_FAILURE = false;
      

       let GridData:any;
       if (!this.saveCurrent())
          return;
       GridData = Object.assign([], this.grid.data);
       if (typeof GridData.data !== "undefined") {
        let i = 0;
        while (i < GridData.data.length) {
            let query = GridData.data[i]._QUERY;
            if (typeof query !== "undefined") {
            let myArray = query.split("_");
            if (myArray[0] == "INSERT"){
              await this.PRE_INSERT(GridData.data[i], i);
            }else if (myArray[0] == "UPDATE"){
              await this.PRE_UPDATE(GridData.data[i], i);
            }
          
            if (this.FORM_TRIGGER_FAILURE){
              this.starServices.endTrans(this, false);
              return;
            }
          }
            i++;
        }
       }
      if (this.removedRec.length > 0){
        for (let i =0; i<this.removedRec.length;i++ ){
          await this.POST_DELETE(this.removedRec[i]);
        }
        this.removedRec.length = 0;
      }
      if (!this.FORM_TRIGGER_FAILURE) {
        //this.KEY_COMMIT();
        this.starServices.endTrans(this, true);
      }
    await this.KEY_COMMIT();
    if (this.FORM_TRIGGER_FAILURE == true){
      this.starServices.endTrans(this, false);
       return;
    }
    this.starServices.callGetSaveAttachemts("save","",this);
    this.starServices.saveChanges_grid(grid, this);
 }


  public cancelHandler(): void {
    this.starServices.cancelHandler_grid( this);
  }
   public fetchLookupsCallBack() {

   }

  private closeEditor(): void {
    this.starServices.closeEditor_grid(this);
  }

public saveCurrent() {
    if (typeof this.formGroup !== "undefined") {
      if (this.formGroup.valid == false) {
        let invalid = this.starlib1.getInvalidControls_grid(this);
        this.FORM_TRIGGER_FAILURE = true;
        //this.starServices.endTrans(this, false);
        return false;
      }
    }
  this.starServices.saveCurrent_grid( this);
  return true;
}


  async removeHandler(sender:any ) {
    this.starServices.removeHandler_grid(sender, this);

    await this.PRE_DELETE(this.formGroup.value);
    if (this.FORM_TRIGGER_FAILURE == true) {
      this.Body=[];
      this.starServices.endTrans(this, false);
      this.cancelHandler();
      this.executeQuery(this.grid);
      return;
    }
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FILE_TYPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFILE_TYPE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"STATUS\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSTATUS"}];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrFILE_TYPE = [];



public lkpArrGetFILE_TYPE(CODE: any): any {
var rec = this.lkpArrFILE_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}
public lkpArrSTATUS = [];
public lkpArrGetSTATUS(CODE: any): any {
var rec = this.lkpArrSTATUS.find((x:any) => x.CODE === CODE);
return rec;
}


public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("ActPaymentAccountabilityActPaymentGrid2Grid ComponentConfig:", ComponentConfig);
         this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
         if (ComponentConfig.gridHeight != null)
            this.gridHeight = ComponentConfig.gridHeight;

         if (ComponentConfig.showToolBar != null)
            this.showToolBar = ComponentConfig.showToolBar;

         if (ComponentConfig.isMaster == true) {
            this.isMaster = true;
         }


         if (ComponentConfig.masterSaved != null) {
            this.saveChanges(this.grid);
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


         if (ComponentConfig.isChild == true) {
            this.isChild = true;

         }

         if (ComponentConfig.formattedWhere != null) {
            this.formattedWhere = ComponentConfig.formattedWhere;
            this.isSearch = true;
            this.executeQuery(this.grid);

         }
         if (ComponentConfig.formattedWhere2 != null) {
          this.formattedWhere = ComponentConfig.formattedWhere2;
          this.isSearch = true;
          console.log("grid2:formattedWhere2:", this.grid2)
          this.executeQuery2(this.grid2);

        }
         if (ComponentConfig.clearComponent == true) {
            this.cancelHandler();
            this.grid.cancel;
            this.grid.data = [];
            this.Body = [];
         }
         if (ComponentConfig.clearScreen == true) {
            this.grid.data = [];
         }

	 if (ComponentConfig.masterReadCompleted != null) {
            if (typeof this.grid !== "undefined") {
              this.isSearch = false;
              this.isChild = true;
               this.executeQuery(this.grid)
            }
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
public hiddenColumns: string[] = [];
public disabledColumns: string[] = [];
WHEN_NEW_FORM_INSTANCE(){
   

}
async KEY_COMMIT(){
   

}
  async ON_CLICK(formGroup:any, P_INDEX:any){
     

}
   async PRE_INSERT(formGroup:any, P_INDEX:any){
     

}
async PRE_UPDATE(formGroup:any, P_INDEX:any){
   

}
async PRE_DELETE(formGroup:any){
   
}

async POST_DELETE(formGroup:any){
   
}

async POST_INSERT(formGroup:any, P_INDEX:any){
   
}
async POST_UPDATE(formGroup:any, P_INDEX:any){
   
}
async PRE_QUERY(formGroup:any){
 
}
async POST_QUERY(formGroup:any, P_INDEX:any){
 
}
 public ROW_CLASS = (context: RowClassArgs) => {
    
    return{};
  };




async WHEN_VALIDATE_ITEM_FILE_TYPE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['FILE_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('FILE_TYPE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_FILE_NAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('FILE_NAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_PAYMENT_NUMBER(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['PAYMENT_NUMBER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('PAYMENT_NUMBER').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_PAYMENT_DATE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['PAYMENT_DATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('PAYMENT_DATE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_PAYMENT_DESCRIPTION(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['PAYMENT_DESCRIPTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('PAYMENT_DESCRIPTION').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_PAYMENT_AMOUNT(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['PAYMENT_AMOUNT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('PAYMENT_AMOUNT').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_STATUS(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['STATUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('STATUS').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGNAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['LOGNAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('LOGNAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGDATE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['LOGDATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('LOGDATE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 } 
 async valueChangeFILE_TYPE(value: any) { 
 await this.WHEN_VALIDATE_ITEM_FILE_TYPE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_FILE_NAME() { 
  await this.WHEN_VALIDATE_ITEM_FILE_NAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_PAYMENT_NUMBER() { 
  await this.WHEN_VALIDATE_ITEM_PAYMENT_NUMBER(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangePAYMENT_DATE(value: any) { 
 await this.WHEN_VALIDATE_ITEM_PAYMENT_DATE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_PAYMENT_DESCRIPTION() { 
  await this.WHEN_VALIDATE_ITEM_PAYMENT_DESCRIPTION(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_PAYMENT_AMOUNT() { 
  await this.WHEN_VALIDATE_ITEM_PAYMENT_AMOUNT(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeSTATUS(value: any) { 
 await this.WHEN_VALIDATE_ITEM_STATUS(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_LOGNAME() { 
  await this.WHEN_VALIDATE_ITEM_LOGNAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeLOGDATE(value: any) { 
 await this.WHEN_VALIDATE_ITEM_LOGDATE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
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

//////////////////////////////////////////////////////////////////////////////////////////
public primarKeyReadOnlyArr2 = {isFILE_TYPEreadOnly : false , isFILE_NAMEreadOnly : false , isINVOICE_NUMBERreadOnly : false};  
//@ViewChild(GridComponent)
public grid2!: GridComponent;
public title2 =  "Invoices";


public state2: State = {
};

  public dataStateChange2(state: DataStateChangeEvent): void {
    this.state2 = state;
    let out = process(this.executeQueryresult2.data , this.state2);
    this.grid2.data = out;
}


async cellClickHandler2(event:any ) {

  if (event.isEdited || (this.formGroup2 && !this.formGroup2.valid)) {
      return;
  }
  this.editableMode = false;
  if (this.isNew) {
      event.rowIndex += 1;
this.editableMode = true;
  }
  if (!this.saveCurrent())
    return;
  this.formGroup2 = createFormGroup2(event.dataItem);
  if (this.componentConfig.enabled && this.componentConfig.updateable) {
    this.editedRowIndex = event.rowIndex;
    this.grid.editRow(event.rowIndex, this.formGroup);
  }
  await this.ON_CLICK(this.formGroup2.value, event.rowIndex);
  this.readCompletedOutput.emit(this.formGroup2.value);

   let componentConfig = new componentConfigDef();
    let masterParams = {
      data: this.formGroup.value
    }

    let masterKeyArr = [this.formGroup.value['FILE_TYPE']];
    let masterKeyNameArr = ['FILE_TYPE'];
    //for (let i = 0; i < masterKeyNameArr.length; i++) {
    //  componentConfig.[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    componentConfig.masterKeyArr = masterKeyArr;
    componentConfig.masterKeyNameArr = masterKeyNameArr;
    componentConfig.masterReadCompleted = true;
    componentConfig.eventTo = this.children;
    componentConfig.masterParams = masterParams;
    //this.callStarNotify(componentConfig);
}

executeQuery2 (grid : GridComponent){
  console.log("grid2:executeQuery2:", this.grid2)
  if (this.formGroup2)
     this.PRE_QUERY(this.formGroup2.value);
  if ( (this.WhereClause != "") && (this.isSearch != true) )
  {
    this.formattedWhere = this.WhereClause;
    this.isSearch = true;
  }
  this.insertCMD = "INSERT_ACT_INVOICES";
  this.updateCMD = "UPDATE_ACT_INVOICES";
  this.deleteCMD =   "DELETE_ACT_INVOICES";
  this.getCMD = "GET_ACT_INVOICES_QUERY";
  console.log("executeQuery2:", grid)
  this.starServices.executeQuery_grid( grid,this);
  this.editableMode = false;
} 

 async WHEN_VALIDATE_ITEM_INVOICE_NUMBER(formGroup) {
 
  this.FORM_TRIGGER_FAILURE = false ; 
  this.formGroup.controls['INVOICE_NUMBER'].setErrors({invalid: true}); 
  // Code goes here 
  
 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.formGroup.get('INVOICE_NUMBER').updateValueAndValidity();
  this.formGroup.updateValueAndValidity(); 
  }
 async WHEN_VALIDATE_ITEM_SUPPLIER(formGroup) {
 
  this.FORM_TRIGGER_FAILURE = false ; 
  this.formGroup.controls['SUPPLIER'].setErrors({invalid: true}); 
  // Code goes here 
  
 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.formGroup.get('SUPPLIER').updateValueAndValidity();
  this.formGroup.updateValueAndValidity(); 
  }
 async WHEN_VALIDATE_ITEM_INVOICE_DATE(formGroup) {
 
  this.FORM_TRIGGER_FAILURE = false ; 
  this.formGroup.controls['INVOICE_DATE'].setErrors({invalid: true}); 
  // Code goes here 
  
 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.formGroup.get('INVOICE_DATE').updateValueAndValidity();
  this.formGroup.updateValueAndValidity(); 
  }
 async WHEN_VALIDATE_ITEM_INVOICE_AMOUNT(formGroup) {
 
  this.FORM_TRIGGER_FAILURE = false ; 
  this.formGroup.controls['INVOICE_AMOUNT'].setErrors({invalid: true}); 
  // Code goes here 
  
 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.formGroup.get('INVOICE_AMOUNT').updateValueAndValidity();
  this.formGroup.updateValueAndValidity(); 
  }
 
  async onBlur_INVOICE_NUMBER() { 
   await this.WHEN_VALIDATE_ITEM_INVOICE_NUMBER(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
  async onBlur_SUPPLIER() { 
   await this.WHEN_VALIDATE_ITEM_SUPPLIER(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
  async valueChangeINVOICE_DATE(value: any) { 
  await this.WHEN_VALIDATE_ITEM_INVOICE_DATE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
  async onBlur_INVOICE_AMOUNT() { 
   await this.WHEN_VALIDATE_ITEM_INVOICE_AMOUNT(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 

}


