import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { actfileDefAccountabilityActFileDefForm ,actinvoicesAccountabilityActInvoicesGrid ,actpaymentAccountabilityActPaymentGrid  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-accountability-files-fields',
  templateUrl: './accountability-files-fields.component.html',
  styleUrls: ['./accountability-files-fields.component.scss']
})
export class AccountabilityFilesFieldsComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"accountability_files_fields.accountability_files_fields.component_title","Act File Def Act File Def Form");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public routineName = "accountability_files_fields";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };

  public componentConfig: componentConfigDef;

  public form_0_ACT_FILE_DEF : actfileDefAccountabilityActFileDefForm;
  public grid_1_ACT_INVOICES : actinvoicesAccountabilityActInvoicesGrid;
  public grid_2_ACT_PAYMENT : actpaymentAccountabilityActPaymentGrid;
  public  ACT_FILE_DEFForm_0Config : componentConfigDef;
  public  ACT_INVOICESGrid_1Config : componentConfigDef;
  public  ACT_PAYMENTGrid_2Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "AccountabilityFilesFields";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.form_0_ACT_FILE_DEF = new actfileDefAccountabilityActFileDefForm();
   this.ACT_FILE_DEFForm_0Config = new componentConfigDef();
   this.ACT_FILE_DEFForm_0Config.isMaster = true;
   this.grid_1_ACT_INVOICES = new actinvoicesAccountabilityActInvoicesGrid();
   this.ACT_INVOICESGrid_1Config = new componentConfigDef();
   this.ACT_INVOICESGrid_1Config.isChild = true;
   //this.ACT_INVOICESGrid_1Config.gridHeight = "300";
   this.grid_2_ACT_PAYMENT = new actpaymentAccountabilityActPaymentGrid();
   this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
   this.ACT_PAYMENTGrid_2Config.isChild = true;
   //this.ACT_PAYMENTGrid_2Config.gridHeight = "300";
  }
    public readCompletedHandler( form_ACT_FILE_DEF) {
    let masterKeyArr = [form_ACT_FILE_DEF.FILE_TYPE,form_ACT_FILE_DEF.FILE_NAME];
    let masterKeyNameArr = ["FILE_TYPE","FILE_NAME"];
 this.grid_1_ACT_INVOICES = new actinvoicesAccountabilityActInvoicesGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_1_ACT_INVOICES[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.ACT_INVOICESGrid_1Config = new componentConfigDef();
    this.ACT_INVOICESGrid_1Config.masterKeyArr =  [form_ACT_FILE_DEF.FILE_TYPE,form_ACT_FILE_DEF.FILE_NAME];
    this.ACT_INVOICESGrid_1Config.masterKeyNameArr =  ["FILE_TYPE","FILE_NAME"];
 this.grid_2_ACT_PAYMENT = new actpaymentAccountabilityActPaymentGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_2_ACT_PAYMENT[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
    this.ACT_PAYMENTGrid_2Config.masterKeyArr =  [form_ACT_FILE_DEF.FILE_TYPE,form_ACT_FILE_DEF.FILE_NAME];
    this.ACT_PAYMENTGrid_2Config.masterKeyNameArr =  ["FILE_TYPE","FILE_NAME"];
  }
  public clearCompletedHandler( form_ACT_FILE_DEF) {
    this.grid_1_ACT_INVOICES = new  actinvoicesAccountabilityActInvoicesGrid();
    this.grid_2_ACT_PAYMENT = new  actpaymentAccountabilityActPaymentGrid();
  }
  public saveCompletedHandler( form_ACT_FILE_DEF) {
    this.ACT_INVOICESGrid_1Config = new componentConfigDef();
    this.ACT_INVOICESGrid_1Config.masterSaved = form_ACT_FILE_DEF;
    this.ACT_INVOICESGrid_1Config.masterKeyArr =  [form_ACT_FILE_DEF.FILE_TYPE,form_ACT_FILE_DEF.FILE_NAME];
    this.ACT_INVOICESGrid_1Config.masterKeyNameArr =  ["FILE_TYPE","FILE_NAME"];

    this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
    this.ACT_PAYMENTGrid_2Config.masterSaved = form_ACT_FILE_DEF;
    this.ACT_PAYMENTGrid_2Config.masterKeyArr =  [form_ACT_FILE_DEF.FILE_TYPE,form_ACT_FILE_DEF.FILE_NAME];
    this.ACT_PAYMENTGrid_2Config.masterKeyNameArr =  ["FILE_TYPE","FILE_NAME"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_ACT_FILE_DEF = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.ACT_FILE_DEFForm_0Config = new componentConfigDef();
        this.ACT_FILE_DEFForm_0Config.masterSaved = ComponentConfig.masterSaved;
        this.ACT_INVOICESGrid_1Config = new componentConfigDef();
        this.ACT_INVOICESGrid_1Config.masterSaved = ComponentConfig.masterSaved;
        this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
        this.ACT_PAYMENTGrid_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.ACT_FILE_DEFForm_0Config = new componentConfigDef();
        this.ACT_FILE_DEFForm_0Config.clearScreen = ComponentConfig.clearScreen;
        this.ACT_INVOICESGrid_1Config = new componentConfigDef();
        this.ACT_INVOICESGrid_1Config.clearScreen = ComponentConfig.clearScreen;
        this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
        this.ACT_PAYMENTGrid_2Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.ACT_FILE_DEFForm_0Config = new componentConfigDef();
          this.ACT_FILE_DEFForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_FILE_DEFForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_FILE_DEFForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ACT_INVOICESGrid_1Config = new componentConfigDef();
          this.ACT_INVOICESGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_INVOICESGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_INVOICESGrid_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ACT_PAYMENTGrid_2Config = new componentConfigDef();
          this.ACT_PAYMENTGrid_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_PAYMENTGrid_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_PAYMENTGrid_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
        }
      }
      }
    }
 }
