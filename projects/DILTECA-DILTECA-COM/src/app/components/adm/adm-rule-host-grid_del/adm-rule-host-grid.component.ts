import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor  } from '@progress/kendo-data-query';

import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';

import {   ruleHost , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = dataItem => new FormGroup({
'HOST_ID' : new FormControl(dataItem.HOST_ID  , Validators.required ) ,
'HOST' : new FormControl(dataItem.HOST ) ,
'PATH' : new FormControl(dataItem.PATH ) ,
'PORT' : new FormControl(dataItem.PORT ) ,
'METHOD' : new FormControl(dataItem.METHOD ) ,
'AUTHORIZATION' : new FormControl(dataItem.AUTHORIZATION ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE ) 
});



const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1):any;
@Component({
  selector: 'app-adm-rule-host-grid',
  templateUrl: './adm-rule-host-grid.component.html',
  styleUrls: ['./adm-rule-host-grid.component.css'
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

export class AdmRuleHostGridComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
 
 public grid: GridComponent;
 
 //@Input()    
 public showToolBar = true;
  
  public groups: GroupDescriptor[] = [];
  public view: any[];
  public formGroup: FormGroup; 
  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;
  public isSearch: boolean=true;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  	public  isHOST_IDEnable : boolean = true; 

  //	public  isHOST_IDEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="HOST_ID";
  private insertCMD = "INSERT_ADM_RULE_HOST";
  private updateCMD = "UPDATE_ADM_RULE_HOST";
  private deleteCMD =   "DELETE_ADM_RULE_HOST";
  private getCMD = "GET_ADM_RULE_HOST_QUERY";

  public  executeQueryresult:any;
  public title = "Rule Host";
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  //public gridHeight = "500";
  public formattedWhere = null;
  public paramConfig;
  public createFormGroupGrid = createFormGroup;

  private Body =[];

  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public starServices: starServices, private renderer: Renderer2) { 
      this.paramConfig = getParamConfig();
      this.componentConfig = new componentConfigDef(); 
      this.componentConfig.gridHeight =  "500";
      this.componentConfig.showTitle = true;
      if (this.paramConfig.DEBUG_FLAG) console.log("constructor:this.grid:", this.grid)
      
  }

     public ngAfterViewInit() {
    this.starServices.setRTL();
   }
  public ngOnInit(): void {
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.starServices.fetchLookups(this, this.lookupArrDef);
    if (this.paramConfig.DEBUG_FLAG) console.log("ngOnInit:this.grid:", this.grid)
  }
    public ngOnDestroy(): void {
        this.docClickSubscription();
    }
//Next part for filtering
   public state: State = {
  };
  
    public dataStateChange(state: DataStateChangeEvent): void {
      if (this.paramConfig.DEBUG_FLAG) console.log("dataStateChange");
      this.state = state;
      var out = process(this.executeQueryresult.data , this.state);
      if (this.paramConfig.DEBUG_FLAG) console.log(out);
      this.grid.data = out;
      if (this.paramConfig.DEBUG_FLAG) console.log(this.grid.data);
  }

  @Input() public set detail_Input(grid: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input AdmRuleHostGrid grid.HOST_ID :' + grid.HOST_ID);
    if ( (grid.HOST_ID != "") &&   (typeof grid.HOST_ID != "undefined"))
    {
      this.masterKey = grid.HOST_ID;
      this.isHOST_IDEnable = false;
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
        this.grid.data = [];
        this.masterKey = "";
        this.isHOST_IDEnable = true;
      }
    }
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }

  
  private gridInitialValues = new ruleHost();   

  private addToBody(NewVal){
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup && this.formGroup.valid &&
        !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link')) {
        this.saveCurrent();
    }
  }
  

  public addHandler(): void {
    this.starServices.addHandler_grid(this)
  }

 public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
    if (isEdited || (this.formGroup && !this.formGroup.valid)) {
        return;
    }
    if (this.isNew) {
        rowIndex += 1;
    }
    this.saveCurrent();
    this.formGroup = createFormGroup(dataItem);
    this.editedRowIndex = rowIndex;
    this.grid.editRow(rowIndex, this.formGroup);
    this.readCompletedOutput.emit(this.formGroup.value);
}


  public enterQuery (grid : GridComponent): void{
    this.starServices.enterQuery_grid( grid, this);
  }
  
 
  public executeQuery (grid : GridComponent): void{
    if (this.paramConfig.DEBUG_FLAG) console.log("executeQuery:this.grid:", this.grid)
    this.starServices.executeQuery_grid( grid,this);
  } 

  public saveChanges(grid: GridComponent): void {
    this.starServices.saveChanges_grid( grid,this);
  }

  public cancelHandler(): void {
    this.starServices.cancelHandler_grid( this);
  }

  private closeEditor(): void {
    this.starServices.closeEditor_grid(this);
  }

  private saveCurrent(): void {
    this.starServices.saveCurrent_grid( this);
  }

  public removeHandler(sender ) {
    
    this.starServices.removeHandler_grid(sender, this);

  }

public userLang = "EN" ; 
public lookupArrDef =[];


public printScreen(){
  window.print();
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
	    if (this.paramConfig.DEBUG_FLAG) console.log("detail ComponentConfig:" ,ComponentConfig);

    if (typeof ComponentConfig !== "undefined"){
	    this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
	    if ( ComponentConfig.showToolBar != null)
	      this.showToolBar = ComponentConfig.showToolBar;
	   
	    if (ComponentConfig.isMaster == true)
	    {
	     this.isMaster = true;
	    }
	

	    if ( ComponentConfig.masterSaved != null)
	    {
	      this.saveChanges(this.grid);
	      ComponentConfig.masterSaved  = null;
	    }
	    if ( ComponentConfig.masterKey != null)
	    {
	      this.isHOST_IDEnable = false;
	      this.masterKey = ComponentConfig.masterKey;
	    }
	    if ( ComponentConfig.masterKeyArr != null)
	    {
	      this.masterKeyArr = ComponentConfig.masterKeyArr;
	    }
	    if ( ComponentConfig.masterKeyNameArr != null)
	    {
	      this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
	    }
      
	    if ( ComponentConfig.isChild == true)
	    {
	      this.isChild = true;
	      this.isHOST_IDEnable = false;
	    }

	    if ( ComponentConfig.formattedWhere != null)
	    {
	      this.formattedWhere = ComponentConfig.formattedWhere ;
	      this.isSearch =  true;
	      if (typeof this.grid !== "undefined"){
	         this.executeQuery(this.grid)
	      }
		
	    }
	    if ( ComponentConfig.clearComponent == true)
	    {
		this.cancelHandler();
		this.grid.cancel;
		this.grid.data = [];
		this.Body =[];
	    }
	      if (ComponentConfig.clearScreen == true)
	      {
		this.grid.data = [];
	      }

    }

  }

}


