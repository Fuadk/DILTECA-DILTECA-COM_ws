import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { actruleDefAccountabilityActRuleDefForm ,actruleItemAccountabilityActRuleItemGrid ,actruleActionAccountabilityActRuleActionGrid  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-accountability-rules',
  templateUrl: './accountability-rules.component.html',
  styleUrls: ['./accountability-rules.component.scss']
})
export class AccountabilityRulesComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"accountability_rules.accountability_rules.component_title","Act Rule Def Act Rule Def Form");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public routineName = "accountability_rules";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };

  public componentConfig: componentConfigDef;

  public form_0_ACT_RULE_DEF : actruleDefAccountabilityActRuleDefForm;
  public grid_1_ACT_RULE_ITEM : actruleItemAccountabilityActRuleItemGrid;
  public grid_2_ACT_RULE_ACTION : actruleActionAccountabilityActRuleActionGrid;
  public  ACT_RULE_DEFForm_0Config : componentConfigDef;
  public  ACT_RULE_ITEMGrid_1Config : componentConfigDef;
  public  ACT_RULE_ACTIONGrid_2Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "AccountabilityRules";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.form_0_ACT_RULE_DEF = new actruleDefAccountabilityActRuleDefForm();
   this.ACT_RULE_DEFForm_0Config = new componentConfigDef();
   this.ACT_RULE_DEFForm_0Config.isMaster = true;
   this.grid_1_ACT_RULE_ITEM = new actruleItemAccountabilityActRuleItemGrid();
   this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
   this.ACT_RULE_ITEMGrid_1Config.isChild = true;
   //this.ACT_RULE_ITEMGrid_1Config.gridHeight = "300";
   this.grid_2_ACT_RULE_ACTION = new actruleActionAccountabilityActRuleActionGrid();
   this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
   this.ACT_RULE_ACTIONGrid_2Config.isChild = true;
   //this.ACT_RULE_ACTIONGrid_2Config.gridHeight = "300";
  }
    public readCompletedHandler( form_ACT_RULE_DEF) {
    let masterKeyArr = [form_ACT_RULE_DEF.RULE_ID];
    let masterKeyNameArr = ["RULE_ID"];
 this.grid_1_ACT_RULE_ITEM = new actruleItemAccountabilityActRuleItemGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_1_ACT_RULE_ITEM[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
    this.ACT_RULE_ITEMGrid_1Config.masterKeyArr =  [form_ACT_RULE_DEF.RULE_ID];
    this.ACT_RULE_ITEMGrid_1Config.masterKeyNameArr =  ["RULE_ID"];
 this.grid_2_ACT_RULE_ACTION = new actruleActionAccountabilityActRuleActionGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_2_ACT_RULE_ACTION[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
    this.ACT_RULE_ACTIONGrid_2Config.masterKeyArr =  [form_ACT_RULE_DEF.RULE_ID];
    this.ACT_RULE_ACTIONGrid_2Config.masterKeyNameArr =  ["RULE_ID"];
  }
  public clearCompletedHandler( form_ACT_RULE_DEF) {
    this.grid_1_ACT_RULE_ITEM = new  actruleItemAccountabilityActRuleItemGrid();
    this.grid_2_ACT_RULE_ACTION = new  actruleActionAccountabilityActRuleActionGrid();
  }
  public saveCompletedHandler( form_ACT_RULE_DEF) {
    this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
    this.ACT_RULE_ITEMGrid_1Config.masterSaved = form_ACT_RULE_DEF;
    this.ACT_RULE_ITEMGrid_1Config.masterKeyArr =  [form_ACT_RULE_DEF.RULE_ID];
    this.ACT_RULE_ITEMGrid_1Config.masterKeyNameArr =  ["RULE_ID"];

    this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
    this.ACT_RULE_ACTIONGrid_2Config.masterSaved = form_ACT_RULE_DEF;
    this.ACT_RULE_ACTIONGrid_2Config.masterKeyArr =  [form_ACT_RULE_DEF.RULE_ID];
    this.ACT_RULE_ACTIONGrid_2Config.masterKeyNameArr =  ["RULE_ID"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_ACT_RULE_DEF = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.ACT_RULE_DEFForm_0Config = new componentConfigDef();
        this.ACT_RULE_DEFForm_0Config.masterSaved = ComponentConfig.masterSaved;
        this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
        this.ACT_RULE_ITEMGrid_1Config.masterSaved = ComponentConfig.masterSaved;
        this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
        this.ACT_RULE_ACTIONGrid_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.ACT_RULE_DEFForm_0Config = new componentConfigDef();
        this.ACT_RULE_DEFForm_0Config.clearScreen = ComponentConfig.clearScreen;
        this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
        this.ACT_RULE_ITEMGrid_1Config.clearScreen = ComponentConfig.clearScreen;
        this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
        this.ACT_RULE_ACTIONGrid_2Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.ACT_RULE_DEFForm_0Config = new componentConfigDef();
          this.ACT_RULE_DEFForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_RULE_DEFForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_RULE_DEFForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ACT_RULE_ITEMGrid_1Config = new componentConfigDef();
          this.ACT_RULE_ITEMGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_RULE_ITEMGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_RULE_ITEMGrid_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ACT_RULE_ACTIONGrid_2Config = new componentConfigDef();
          this.ACT_RULE_ACTIONGrid_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ACT_RULE_ACTIONGrid_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ACT_RULE_ACTIONGrid_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
        }
      }
      }
    }
 }
