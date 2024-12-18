import { Component, OnInit, Output, Input, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { AfterViewInit, Renderer2, NgZone, OnDestroy, ViewEncapsulation, } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { actpaymentAccountabilityActPaymentGrid, componentConfigDef } from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, RowClassArgs } from '@progress/kendo-angular-grid';
import { GridComponent } from '@progress/kendo-angular-grid';
import { take } from "rxjs/operators";

import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
const createFormGroup = (dataItem: any) => new FormGroup({
  'FILE_TYPE': new FormControl(dataItem.FILE_TYPE,),
  'FILE_NAME': new FormControl(dataItem.FILE_NAME,),
  'PAYMENT_NUMBER': new FormControl(dataItem.PAYMENT_NUMBER,),
  'PAYMENT_DATE': new FormControl(dataItem.PAYMENT_DATE,),
  'PAYMENT_DESCRIPTION': new FormControl(dataItem.PAYMENT_DESCRIPTION,),
  'PAYMENT_AMOUNT': new FormControl(dataItem.PAYMENT_AMOUNT,),
  'STATUS': new FormControl(dataItem.STATUS,),
  'LOGNAME': new FormControl(dataItem.LOGNAME,),
  'LOGDATE': new FormControl(dataItem.LOGDATE,)
});
const createFormGroup2 = (dataItem: any) => new FormGroup({
  'FILE_TYPE': new FormControl(dataItem.FILE_TYPE,),
  'FILE_NAME': new FormControl(dataItem.FILE_NAME,),
  'INVOICE_NUMBER': new FormControl(dataItem.INVOICE_NUMBER,),
  'SUPPLIER': new FormControl(dataItem.SUPPLIER,),
  'INVOICE_DATE': new FormControl(dataItem.INVOICE_DATE,),
  'INVOICE_AMOUNT': new FormControl(dataItem.INVOICE_AMOUNT,),
  'STATUS': new FormControl(dataItem.STATUS,),
  'LOGNAME': new FormControl(dataItem.LOGNAME,),
  'LOGDATE': new FormControl(dataItem.LOGDATE,),
  'PAYMENT_REF': new FormControl(dataItem.PAYMENT_REF,)

});
declare function getParamConfig(): any;

@Component({

  selector: 'app-accountability-files-match',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './accountability-files-match.component.html',
  styleUrls: ['./accountability-files-match.component.scss']
})
export class AccountabilityFilesMatchComponent implements OnInit {
  public FORM_TRIGGER_FAILURE: any;
  public title = '';
  public routineName = "AccountabilityFilesMatch";
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService,
    public starServices: starServices, private renderer: Renderer2, public zone: NgZone) {

    this.title = this.starServices.getNLS([], "accountability_files_match.accountability_files_match.component_title", "Files Match");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = true;
  public submitted = false;
  public isPhonePortrait = false;
  public isSearch!: boolean;
  public routineAuth = "AccountabilityFilesMatch";
  public paramConfig;

  public componentConfig: componentConfigDef;

  public grid_0_ACT_PAYMENT: actpaymentAccountabilityActPaymentGrid;
  public ACT_PAYMENTGrid_0Config: componentConfigDef;
  public form!: FormGroup;
  public form2!: FormGroup;
  public PDFfileName = this.title + ".PDF";
  private Body: any = [];
  public gap: any = {
    rows: 2,
    columns: 2,
  };
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  private formInitialValues: any = new actpaymentAccountabilityActPaymentGrid();
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.setDraggableRows();
    console.log("this.grid:invoice:", this.invoiceGrid)
    console.log("this.grid:payment:", this.paymentGrid)
    this.loadRules();
    this.executeQuery(this.form.value);
    this.executeQuery2(this.form2.value);
  }
  public ngOnDestroy() {
    this.destroyListeners();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName);
    this.responsive.observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isPhonePortrait = false;
        if (state.matches) {
          this.isPhonePortrait = true;
        }
      });
    this.form = createFormGroup(
      this.formInitialValues
    );
    this.form2 = createFormGroup2(
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
    //this.ACT_PAYMENTGrid_0Config.showToolBar = false;
    this.ACT_PAYMENTGrid_0Config.gridHeight = "500";
  }
  public readCompletedHandler(form_ACT_PAYMENT) {
    let masterKeyArr = [form_ACT_PAYMENT.FILE_TYPE, form_ACT_PAYMENT.FILE_NAME, form_ACT_PAYMENT.PAYMENT_NUMBER];
    let masterKeyNameArr = ["FILE_TYPE", "FILE_NAME", "PAYMENT_NUMBER"];
  }
  public clearCompletedHandler(form_ACT_PAYMENT) {
  }
  public saveCompletedHandler(form_ACT_PAYMENT) {
  }
  private addToBody(NewVal: any) {
    this.Body.push(NewVal);
  }
  get f(): any { return this.form.controls; }
  public paymentGridData: any = [];
  public invoiceGridData: any = [];
  public async executeQuery(form: any) {
    if (this.form.invalid) {
      this.submitted = true;
      this.starServices.showOkMsg(this, this.starServices.fieldsRequiredMsg, "Error");
      return;
    }

    // let Page = null;
    // Page = this.starServices.formatWhere(form);

    // this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
    // this.ACT_PAYMENTGrid_0Config.formattedWhere = Page;
    let body = [];
    let whereClause = "";
    let qry =
    {
      "_QUERY": "GET_ACT_PAYMENT_QUERY",
      "_WHERE": whereClause
    };
    body.push(qry);

    if (this.paramConfig.DEBUG_FLAG) console.log("body:GET_ACT_PAYMENT_QUERY:", body)
    let data = await this.starServices.execSQLBody(this, body, this.starServices.MASTER_DB);
    if (this.paramConfig.DEBUG_FLAG) console.log("data[0].data:", data[0].data);
    if (typeof data != "undefined") {
      this.paymentGrid.data = data[0].data;
      this.executeQueryresult = data[0];
      console.log("dataStateChange:", " this.executeQueryresult:", this.executeQueryresult)
      this.paymentGridData = data[0].data;
      this.setDraggableRows();
      if (this.invoiceGridData.length != 0)
        this.enableAutoMatch = true;

    }

  }
  public async executeQuery2(form: any) {
    if (this.form2.invalid) {
      this.submitted = true;
      this.starServices.showOkMsg(this, this.starServices.fieldsRequiredMsg, "Error");
      return;
    }

    // let Page = null;
    // Page = this.starServices.formatWhere(form);
    // console.log("executeQuery2:", Page)
    // this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
    // this.ACT_PAYMENTGrid_0Config.formattedWhere2 = Page;

    let body = [];
    let whereClause = "";
    let qry =
    {
      "_QUERY": "GET_ACT_INVOICES_QUERY",
      "_WHERE": whereClause
    };
    body.push(qry);

    if (this.paramConfig.DEBUG_FLAG) console.log("body:GET_ACT_INVOICES_QUERY:", body)
    let data = await this.starServices.execSQLBody(this, body, this.starServices.MASTER_DB);
    if (this.paramConfig.DEBUG_FLAG) console.log("data[0].data:", data[0].data);
    if (typeof data != "undefined") {
      //this.invoiceGridData=data[0].data;
      console.log("invoiceGrid:", this.invoiceGrid)
      this.invoiceGrid.data = data[0].data;
      this.executeQueryresult2 = data[0];
      this.invoiceGridData = data[0].data;
      this.setDraggableRows();
      if (this.paymentGridData.length != 0)
        this.enableAutoMatch = true;

    }
  }
  public onCancel(e: any): void {
    this.starServices.onCancel_form(e, this);
    this.ACT_PAYMENTGrid_0Config = new componentConfigDef();
    this.ACT_PAYMENTGrid_0Config.clearComponent = true;
  }
  public enterQuery(form: any): void {
    this.starServices.enterQuery_form(form, this);
  }


  public userLang = "EN";
  public lookupArrDef: any = [];
  public setlookupArrDef() {
    this.lookupArrDef = [{
      "statment": "SELECT FILE_NAME CODE, FILE_NAME CODETEXT_LANG  FROM ACT_FILE_DEF   WHERE FILE_TYPE = \"PAYMENT\" order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrFILE_NAME"
    },
    {
      "statment": "SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"STATUS\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrSTATUS"
    },
    {
      "statment": "SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FILE_TYPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrFILE_TYPE"
    },
    {
      "statment": "SELECT FILE_NAME CODE, FILE_NAME CODETEXT_LANG  FROM ACT_FILE_DEF   WHERE FILE_TYPE = \"INVOICE\" order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrFILE_NAME2"
    }];
    this.starServices.fetchLookups(this, this.lookupArrDef);
  }

  public lkpArrFILE_TYPE = [];

  public lkpArrSTATUS = [];
  public lkpArrGetSTATUS(CODE: any): any {
    var rec = this.lkpArrSTATUS.find((x: any) => x.CODE === CODE);
    return rec;
  }

  public lkpArrFILE_NAME = [];

  public lkpArrGetFILE_TYPE(CODE: any): any {
    var rec = this.lkpArrFILE_NAME.find((x: any) => x.CODE === CODE);
    return rec;
  }


  public lkpArrFILE_NAME2 = [];

  public lkpArrGetFILE_TYPE2(CODE: any): any {
    var rec = this.lkpArrFILE_NAME2.find((x: any) => x.CODE === CODE);
    return rec;
  }
  public printScreen() {
    window.print();
  }
  ////
  public isFilterable: boolean = false;
  public isColumnMenu: boolean = true;
  public enableAutoMatch: boolean = false;

  public title2 = "Invoices";
  public executeQueryresult: any;
  public executeQueryresult2: any;

  @ViewChild('paymentGrid')
  public paymentGrid!: GridComponent;
  @ViewChild('invoiceGrid')
  public invoiceGrid!: GridComponent;
  public DSP_UPLOADConfig!: componentConfigDef;

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }
  public cancelHandler(): void {
    this.starServices.cancelHandler_grid(this);
  }

  public state2: State = {
  };

  public dataStateChange2(state: DataStateChangeEvent): void {
    this.state2 = state;
    let out = process(this.executeQueryresult2.data, this.state2);
    this.invoiceGrid.data = out;
    this.invoiceGridData = out;


  }

  public state: State = {
  };

  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    let out = process(this.executeQueryresult.data, this.state);
    console.log("dataStateChange:", state,
      " this.executeQueryresult:", this.executeQueryresult, " out:", out)
    this.paymentGrid.data = out;
    this.paymentGridData = out;

  }
  public ROW_CLASS = (context: RowClassArgs) => {

    return {};
  };

  /////////////////////////////// Drag /////////////////////////////
  public dropIndex;
  public noRecordsMsg = "No records available yet. Please drop a row.";
  public currentGridRef: GridComponent;
  public targetCells: NodeListOf<HTMLTableDataCellElement>;


  public destroyListeners(): void {
    const tableRows: Array<HTMLElement> = this.getAllRows();
    tableRows.forEach((item) => {
      item.removeEventListener("dragstart", () => { });
    });
  }

  public setDraggableRows(): void {
    const tableRows: Array<HTMLTableElement> = this.getAllRows();
    //console.log("tableRows:",tableRows);
    tableRows.forEach((item: HTMLElement) => {
      //console.log("item:",item);
      this.renderer.setAttribute(item, "draggable", "true");
      this.addDragListeners(item);
    });
  }

  public getAllRows(): Array<HTMLTableElement> {
    let tableRows = Array.from(document.querySelectorAll(".k-grid tr"));
    for (let i = 0; i < tableRows.length; i++)
      //console.log('tableRows:1:', i, tableRows[i]['innerText']);
      return Array.from(document.querySelectorAll(".k-grid tr"));
  }

  public addDragListeners(item: HTMLElement): void {
    item.addEventListener("dragstart", (e: DragEvent) => {
      const rowItem: HTMLTableDataCellElement = item.querySelector("td");

      // Prevents dragging Grid header row
      if (rowItem === null) {
        return;
      }
      //console.log("rowItem:", rowItem)
      //this.paymentGridData = Object.assign([], this.paymentGrid.data);
      let selectedItem = this.paymentGridData.find(
        (i) => {

          //console.log("rowItem.textContent:", rowItem.textContent, "i.PAYMENT_NUMBER:", i.PAYMENT_NUMBER,  Number(i.PAYMENT_NUMBER) == Number(rowItem.textContent) ) 
          return Number(i.PAYMENT_NUMBER) == Number(rowItem.textContent)

        }
      );
      console.log("selectedItem:", selectedItem);
      let dataItem = JSON.stringify(selectedItem);
      e.dataTransfer.setData("text/plain", dataItem);
    });
  }

  // Prevents dragging header and 'no records' row.
  public onDragStart(e: DragEvent, grid: GridComponent): void {
    console.log("onDragStart")
    this.currentGridRef = grid;
    const draggedElement: string = (e.target as HTMLElement).innerText;
    //console.log("draggedElement:", draggedElement)
    if (draggedElement.includes("PAYMENT_NUMBER") || draggedElement === this.noRecordsMsg) {
      e.preventDefault();
    }
  }

  public onDrop(
    e: DragEvent,
    dragStartGridRef: GridComponent,
    droppedRowGridRef: GridComponent
  ): void {
    let data = e.dataTransfer.getData("text/plain");
    console.log("data:", data, "e.dataTransfer:", e.dataTransfer)
    if ( (data == "") || (typeof data == "undefined"))
      return;
    let droppedItem = JSON.parse(data);

    // Prevent dropping row in the same Grid
    if (dragStartGridRef !== this.currentGridRef) {
      this.updateGridsData(droppedItem, droppedRowGridRef, dragStartGridRef);
    }

    // When new row is added to a table, the draggable attributes is set to that row.
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.destroyListeners();
      this.setDraggableRows();
    });

    this.removeLineIndicators();
  }

  public onDragOver(e: DragEvent, grid: GridComponent): void {
    e.preventDefault();
    if (this.targetCells) {
      this.removeLineIndicators();
    }

    const targetEl = e.target as HTMLElement;
    if (
      this.currentGridRef !== grid &&
      (targetEl.tagName === "TD" || targetEl.tagName === "TH")
    ) {
      // Set drop line indication
      this.targetCells = targetEl.parentElement.querySelectorAll("td, th");
      this.targetCells.forEach((td: HTMLElement) => {
        const gridData: any[] = grid.data as any[];
        if (td.tagName === "TH" && gridData.length !== 0) {
          this.renderer.addClass(td, "th-line");
          this.dropIndex = 0;
        } else if (td.tagName === "TD") {
          this.renderer.addClass(td, "td-line");
          this.dropIndex = this.closest(e.target, this.tableRow).rowIndex + 1;
          console.log("this.dropIndex:", this.dropIndex)
        }
      });
    }
  }

  public removeLineIndicators() {
    this.targetCells.forEach((td: HTMLElement) => {
      this.renderer.removeAttribute(td, "class");
    });
  }

  public async updateGridsData(
    droppedItem,
    droppedRowGridRef: GridComponent,
    dragStartGridRef: GridComponent
  ) {
    const droppedRowGridData: any = droppedRowGridRef.data;
    const dragStartGridData: any = dragStartGridRef.data;
    console.log("droppedRowGridRef:", droppedRowGridRef.data, "dragStartGridRef:", dragStartGridRef.data)
    let index: number = droppedRowGridData.findIndex(
      (i) => {
        console.log("droppedItem:", droppedItem.PAYMENT_NUMBER, " i:", droppedItem.PAYMENT_NUMBER)
        return Number(i.PAYMENT_NUMBER) === Number(droppedItem.PAYMENT_NUMBER)
      }
    );
    let matchStatus = "";
    console.log("dragStartGridData:", dragStartGridData[this.dropIndex - 1])
    let invoiceAmout = dragStartGridData[this.dropIndex - 1]['INVOICE_AMOUNT'];
    let invoiceStatus = dragStartGridData[this.dropIndex - 1]['STATUS'];
    let paymentAmount = droppedItem.PAYMENT_AMOUNT;
    let paymentStatus = droppedItem.STATUS;
    let Msg = "";
    if (paymentStatus != "LOADED")
      Msg = this.starServices.getNLS([], 'PAYMENT_ALREADY_ALLOCATED',
        'Payment already allocated')
    console.log("Msg:", Msg)

    if (invoiceAmout < paymentAmount)
      Msg = this.starServices.getNLS([invoiceAmout, paymentAmount], 'INV_AMT_LESS_PAY_AMT', 'Invoice Amount: ## is less than Payment Amount:##')
    console.log("Msg:", Msg)
    if (invoiceStatus == "MATCH")
      Msg = this.starServices.getNLS([], 'INVOICE_ALREADY_MATCHED',
        'Invoice already matched')
    console.log("Msg:", Msg)
    if (Msg != "") {
      var dialogStruc = {
        msg: Msg,
        title: "Error",
        info: null,
        object: this,
        action: this.starServices.OkActions,
        callback: null
      };
      this.starServices.showConfirmation(dialogStruc);
      return;
    }

    if (invoiceAmout > paymentAmount)
      matchStatus = "PARTIAL";
    if (invoiceAmout == paymentAmount)
      matchStatus = "MATCH";
    // Invoice dragStartGridData
    //Payment : droppedItem
    console.log("INVOICE_AMOUNT:", dragStartGridData[this.dropIndex - 1]['INVOICE_AMOUNT'], droppedItem.PAYMENT_AMOUNT)
    if (matchStatus != "") {
      dragStartGridData[this.dropIndex - 1]['STATUS'] = matchStatus;
      console.log("index:", index, "droppedRowGridData:", droppedRowGridData)
      droppedRowGridData[index]['STATUS'] = matchStatus;

      ///////
      let i = index;
      let invoiceGridRec = dragStartGridData[this.dropIndex - 1];
      let paymentGridRec = this.paymentGridData[i];
      this.Body = [];
      this.FORM_TRIGGER_FAILURE = false;
      this.updatePaymentRef(invoiceGridRec, paymentGridRec, i)
      if (this.paramConfig.DEBUG_FLAG) console.log("this.Body:updateGridsData:", this.Body)
      if (this.FORM_TRIGGER_FAILURE != true) {
        let data = await this.starServices.execSQLBody(this, this.Body, this.starServices.MASTER_DB);
        if (this.paramConfig.DEBUG_FLAG) console.log("data[0].data:", data[0].data);
        if (typeof data != "undefined") {
        }
      }

    }
    // droppedRowGridData.splice(index, 1);
    // dragStartGridData.splice(this.dropIndex, 0, droppedItem);
  }
  public tableRow = (node) => {
    if (node.tagName) {
      return node.tagName.toLowerCase() === "tr";
    }
  };

  public closest = (node, predicate) => {
    while (node && !predicate(node)) {
      node = node.parentNode;
    }
    return node;
  };
  ////////////// Rules ///////
  public rulesQueryDef = {
    rulePtrsArr: [],
    rulesArr: [],
    actionPtrsArr: [],
    actionsArr: []
  };
  public storeActionsPtrs(actions, rulesDef) {
    let currentQUERY_DEF = "";
    let currentRULE_ID = "";
    let actionPtrs = [];

    for (let i = 0; i < actions.length; i++) {
      actions[i].QUERY_DEF = actions[i].RULE_ID;
      if ((currentQUERY_DEF != actions[i].QUERY_DEF) && (currentRULE_ID != actions[i].RULE_ID)) {
        if (i == 0)
          actionPtrs.push(i);
        if (currentQUERY_DEF != "") {
          rulesDef.actionPtrsArr[currentQUERY_DEF] = actionPtrs;
          actionPtrs = [];
          actionPtrs.push(i);
        }

        currentQUERY_DEF = actions[i].QUERY_DEF;
        currentRULE_ID = actions[i].RULE_ID;
        //if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs1:",rulePtrs);

      }
      else if ((currentQUERY_DEF == actions[i].QUERY_DEF) && (currentRULE_ID != actions[i].RULE_ID)) {
        currentRULE_ID = actions[i].RULE_ID;
        actionPtrs.push(i);

      }


      if (this.paramConfig.DEBUG_FLAG) console.log("actionPtrs2:", actionPtrs);
    }
    //actionPtrs.push(i);
    rulesDef.actionPtrsArr[currentQUERY_DEF] = actionPtrs;
    if (this.paramConfig.DEBUG_FLAG) console.log("rulesDef.actionPtrsArr:", rulesDef.actionPtrsArr);
  }


  public storeRulesPtrs(rules, rulesDef) {
    let currentQUERY_DEF = "";
    let currentRULE_ID = "";
    let rulePtrs = [];

    for (let i = 0; i < rules.length; i++) {
      rules[i].QUERY_DEF = rules[i].RULE_ID;
      if (this.paramConfig.DEBUG_FLAG) console.log("storeRulesPtrs:", i, rules[i].QUERY_DEF + " : " + rules[i].RULE_ID + "          " + currentQUERY_DEF + " : " + currentRULE_ID);
      for (let j = 0; j < rulesDef.rulePtrsArr.length; j++) {
        console.log("storeRulesPtrs:", j, rulesDef.rulePtrsArr[j])
      }

      if ((currentQUERY_DEF != rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
        if (this.paramConfig.DEBUG_FLAG) console.log(" not equal");
        if (i == 0)
          rulePtrs.push(i);
        if (currentQUERY_DEF != "") {
          if (this.paramConfig.DEBUG_FLAG) console.log("storing rulePtrs2:", rulePtrs);
          rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
          rulePtrs = [];
          rulePtrs.push(i);
        }

        currentQUERY_DEF = rules[i].QUERY_DEF;
        currentRULE_ID = rules[i].RULE_ID;
        //if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs1:",rulePtrs);

      }
      else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
        if (this.paramConfig.DEBUG_FLAG) console.log(" not equal2");
        rulePtrs.push(i);
        currentRULE_ID = rules[i].RULE_ID;
        if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs2:", rulePtrs);
      }
      else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID == rules[i].RULE_ID)) {
        //console.log(" equal3");
        rulePtrs.push(i);
        currentRULE_ID = rules[i].RULE_ID;
        //console.log("rulePtrs3:",rulePtrs);
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs2:", rulePtrs);
    }
    //rulePtrs.push(i);
    rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
    for (let j = 0; j < rulesDef.rulePtrsArr.length; j++) {
      console.log("rulesDef.rulePtrsArr:", j, rulesDef.rulePtrsArr[j])
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
  }

  public loadRules() {

    this.Body = [];
    let Page = "";
    let NewVal = {};
    NewVal["_QUERY"] = "GET_ACT_RULE_DEF_RULE_ITEM";
    this.addToBody(NewVal);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.Body:", this.Body)

    NewVal = {};
    NewVal["_QUERY"] = "GET_ACT_RULE_DEF_RULE_ACTION";
    this.addToBody(NewVal);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.Body:", this.Body)

    this.starServices.post(this, Page, this.Body).subscribe(result => {
      if (this.paramConfig.DEBUG_FLAG) console.log("test:result.data:", result.data);


      this.rulesQueryDef.rulePtrsArr = [];
      this.rulesQueryDef.actionPtrsArr = [];

      this.storeRulesPtrs(result.data[0].data, this.rulesQueryDef);
      this.rulesQueryDef.rulesArr = result.data[0].data;

      this.storeActionsPtrs(result.data[1].data, this.rulesQueryDef);
      this.rulesQueryDef.actionsArr = result.data[1].data;

      if (this.paramConfig.DEBUG_FLAG) console.log("test:this.rulesQueryDef", this.rulesQueryDef)


      //////////////
      this.Body = [];
    },
      err => {
        this.Body = [];
        this.starServices.showNotification("error", "error:" + err.message);
      });



  }

  public checkRulesByTrigger(object, rulesDef, queryData, Trigger, routine_name, hostsArr, hostsMapArr) {
    if (this.paramConfig.DEBUG_FLAG) console.log("checkRulesByTrigger:rulesDef:", rulesDef, " queryData:", queryData);
    let statusRec;
    let actionArrOut = [];
    function getFieldData(rule, queryData) {
      let fieldData = "";
      let array = rule.FIELD.split(".");
      console.log("array:", array)
      if (array.length > 1) {
        let orderFields = queryData["ORDER_FIELDS"];
        //console.log("orderFields:",orderFields)
        if (typeof orderFields !== "undefined") {
          if (orderFields != "") {
            let fieldsData = JSON.parse(orderFields);
            //console.log("fieldsData:",fieldsData)
            let keys = Object.keys(fieldsData);
            console.log("keys:", keys)
            for (let j = 0; j < keys.length; j++) {
              console.log("addOrderFields key:", keys[j]);
              if (keys[j] == array[0]) {
                let objData = fieldsData[keys[j]];
                //console.log("objData:", objData );
                if (typeof (objData.length) == "undefined")  // it is a form (object)
                  fieldData = objData[array[1]];
                else { // it is a grid (array)
                  if (typeof (objData[0]) != "undefined")
                    fieldData = objData[0][array[1]];
                }

                break;
              }
            }
          }
        }
      }
      else {
        fieldData = queryData[rule.FIELD];
      }
      console.log("rule.FIELD:", rule.FIELD, " fieldData:", fieldData)
      return fieldData;
    }
    function checkRule(rule, queryData) {
      let ruleMatch = false;
      //if (this.paramConfig.DEBUG_FLAG)
      //console.log("test3:rule:",rule, " queryData:", queryData, rule.FIELD, rule.FIELD_VALUE);
      //let fieldData = queryData[rule.FIELD];
      //let fieldData = getFieldData(rule, queryData);
      let fieldData = queryData[rule.FIELD];
      let fieldValue = queryData[rule.FIELD_VALUE];

      switch (rule.OPERATION) {
        case "=":
          if (fieldData == fieldValue) {
            ruleMatch = true;
          }
          break;
        case "<":
          if (fieldData < fieldValue) {
            ruleMatch = true;
          }
          break;
        case "<=":
          if (fieldData <= fieldValue) {
            ruleMatch = true;
          }
          break;
        case ">":
          if (fieldData > fieldValue) {
            ruleMatch = true;
          }
          break;
        case ">=":
          if (fieldData >= fieldValue) {
            ruleMatch = true;
          }
          break;
        case "<>":
          if (fieldData != fieldValue) {
            ruleMatch = true;
          }
          break;
        case "INSTR":
          if (fieldValue != null) {
            if (fieldValue.search(fieldData) != -1) {
              ruleMatch = true;
            }
          }
          break;
        default:
          ruleMatch = false;
      }
      //console.log("test3:ruleMatch:", ruleMatch, " rule.FIELD:", rule.FIELD, " fieldData:", fieldData, " OPERATION:", rule.OPERATION, "rule.FIELD_VALUE:", rule.FIELD_VALUE, " fieldValue:", fieldValue);
      return ruleMatch;

    }

    let status = 0;
    statusRec = {
      status: 0,
      msg: ""
    };
    queryData._QUERY = "1";
    let qry = queryData._QUERY;
    if (this.paramConfig.DEBUG_FLAG) console.log("_QUERY:", queryData._QUERY, " rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
    if (this.paramConfig.DEBUG_FLAG) console.log("checking rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
    for (let k = 0; k < rulesDef.rulePtrsArr.length; k++) {
      let rulePtr = rulesDef.rulePtrsArr[k];
      if (this.paramConfig.DEBUG_FLAG) console.log("rulePtr:", rulePtr);

      if (typeof rulePtr !== "undefined") {
        //let actionPtr = rulesDef.rulePtrsArr[qry];
        //if (typeof actionPtr !== "undefined")
        {
          let result = false;
          let i = 0;

          console.log("check:rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr)
          console.log("check:rulePtr:", rulePtr)
          //while ( (i<rulePtr.length) && (status == 0) )
          {
            var ptr1 = rulePtr[i];
            var ptr2 = rulePtr[rulePtr.length - 1];
            // if (typeof rulePtr[i+1] !== "undefined")
            //     var ptr2 = rulePtr[i+1];
            // else
            //     //var ptr2 = rulesDef.rulesArr.length
            //     var ptr2 = ptr1+1

            console.log("ptr1:", ptr1, " ptr2:", ptr2);
            var j = ptr1;
            while (j <= ptr2) {
              //console.log("--------------------rulesDef.rulesArr:", rulesDef.rulesArr[j].RULE_ID, " item:", rulesDef.rulesArr[j].ITEM);
              var ruleMatch = checkRule(rulesDef.rulesArr[j], queryData);
              if (ruleMatch == false)
                break;
              j++;
            }
            //console.log("test3:checkRulesByTrigger:Conditions ruleMatch:", ruleMatch, " for rule:", rulesDef.rulesArr[ptr1].RULE_ID);
            if (ruleMatch == true) {
              //statusRec = performAction(db,req, qry, i, queryData, rulesDef.rulesArr[ptr1],rulesDef, Trigger );
              actionArrOut = this.performAction(object, qry, i, queryData, rulesDef.rulesArr[ptr1], rulesDef, Trigger, hostsArr, hostsMapArr);


            }

            //if (ruleMatch == false)
            //  break;
            i++;
          }
        }


      }
    }
    return actionArrOut;
  }
  public performAction(object, qry, ptr, queryData, rule, rulesDef, Trigger, hostsArr, hostsMapArr) {
    if (this.paramConfig.DEBUG_FLAG) console.log("---performAction:rulesDef:", rulesDef, "rule:", rule);
    let status = 0;
    let statusRec = {
      status: 0,
      msg: ""
    };

    let actionPtr = rulesDef.actionPtrsArr[rule.RULE_ID];
    let actionArrOut = [];
    if (typeof actionPtr !== "undefined") {

      if (this.paramConfig.DEBUG_FLAG) console.log("ptr:", ptr);
      if (this.paramConfig.DEBUG_FLAG) console.log("actionPtr:", actionPtr);
      let i = ptr;
      let ptr2 = "";

      let ptr1 = actionPtr[i];

      if (typeof actionPtr[i + 1] !== "undefined")
        ptr2 = actionPtr[i + 1];
      else
        ptr2 = rulesDef.actionsArr.length

      if (this.paramConfig.DEBUG_FLAG) console.log("ptr1:", ptr1, " ptr2:", ptr2);
      let j = ptr1;
      let ruleID = rulesDef.actionsArr[j].RULE_ID;

      while ((j < ptr2) && (status == 0)) {
        if (ruleID != rulesDef.actionsArr[j].RULE_ID) {
          break;
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("test3:rulesDef.actionsArr:", rulesDef.actionsArr[j]);
        actionArrOut.push(rulesDef.actionsArr[j].ACTION_CODE);
        // if ((rulesDef.actionsArr[j].ACTION_CODE == "SEND") || (rulesDef.actionsArr[j].ACTION_CODE == "SEND_WAIT")) {
        //   // statusRec = this.sendToServer( object, rulesDef.actionsArr[j], queryData, rule,rulesDef.actionsArr[j], Trigger, hostsArr, hostsMapArr);
        //   status = statusRec.status;
        // }
        j++;
      }
    }
    return actionArrOut;

  }
  public async autoMatch() {
    this.Body = [];
    this.FORM_TRIGGER_FAILURE = false;
    for (let i = 0; i < this.paymentGridData.length; i++) {
      for (let j = 0; j < this.invoiceGridData.length; j++) {
        if ((this.paymentGridData[i].PAYMENT_STATUS != "match")
          || (this.invoiceGridData[j].INVOICE_STATUS != "match")) {
          console.log("autoMatch:i,j,", i, j)
          let queryData = {
            PAYMENT_NUMBER: this.paymentGridData[i].PAYMENT_NUMBER,
            PAYMENT_DATE: this.paymentGridData[i].PAYMENT_DATE,
            PAYMENT_DESCRIPTION: this.paymentGridData[i].PAYMENT_DESCRIPTION,
            PAYMENT_AMOUNT: this.paymentGridData[i].PAYMENT_AMOUNT,
            PAYMENT_STATUS: this.paymentGridData[i].STATUS,

            INVOICE_NUMBER: this.invoiceGridData[j].INVOICE_NUMBER,
            SUPPLIER: this.invoiceGridData[j].SUPPLIER,
            INVOICE_DATE: this.invoiceGridData[j].INVOICE_DATE,
            INVOICE_AMOUNT: this.invoiceGridData[j].INVOICE_AMOUNT,
            INVOICE_STATUS: this.invoiceGridData[j].STATUS,
          }
          let actionArrOut = this.checkRulesByTrigger(this, this.rulesQueryDef, queryData, "", "", [], []);
          console.log("autoMatch:actionArrOut:", actionArrOut)
          if (actionArrOut.length != 0) {
            let invoiceGridRec = this.invoiceGridData[j];
            let paymentGridRec = this.paymentGridData[i];

            paymentGridRec.STATUS = actionArrOut[0];
            invoiceGridRec.STATUS = actionArrOut[1];
            console.log("autoMatch:PAYMENT_STATUS:", paymentGridRec.STATUS);
            this.updatePaymentRef(invoiceGridRec, paymentGridRec, i);
          }
        }

      }

    }
    if (this.paramConfig.DEBUG_FLAG) console.log("this.Body:autoMatch:", this.Body)
    if (this.FORM_TRIGGER_FAILURE != true) {
      let data = await this.starServices.execSQLBody(this, this.Body, this.starServices.MASTER_DB);
      if (this.paramConfig.DEBUG_FLAG) console.log("data[0].data:", data[0].data);
      if (typeof data != "undefined") {
      }
    }
  }
  public updatePaymentRef(invoiceGridRec, paymentGridRec, i) {
    let paymentRef = [];
    if ((invoiceGridRec.PAYMENT_REF != null) && (invoiceGridRec.PAYMENT_REF != ""))
      paymentRef = JSON.parse(invoiceGridRec.PAYMENT_REF);

    let paymentRec = {
      FILE_NAME: paymentGridRec.FILE_NAME,
      PAYMENT_NUMBER: paymentGridRec.PAYMENT_NUMBER,
      i: i
    }
    paymentRef.push(paymentRec);
    invoiceGridRec.PAYMENT_REF = JSON.stringify(paymentRef);

    if (paymentRef.length > 1 && invoiceGridRec.STATUS != "MATCH") {
      this.checkIfMatch(paymentGridRec, invoiceGridRec)
    }


    let qry: any =
    {
      "_QUERY": "UPDATE_ACT_INVOICES",
      FILE_TYPE: invoiceGridRec.FILE_TYPE,
      FILE_NAME: invoiceGridRec.FILE_NAME,
      INVOICE_NUMBER: invoiceGridRec.INVOICE_NUMBER,
      SUPPLIER: invoiceGridRec.SUPPLIER,
      INVOICE_DATE: invoiceGridRec.INVOICE_DATE,
      INVOICE_AMOUNT: invoiceGridRec.INVOICE_AMOUNT,
      STATUS: invoiceGridRec.STATUS,
      LOGNAME: invoiceGridRec.LOGNAME,
      LOGDATE: invoiceGridRec.LOGDATE,
      PAYMENT_REF: invoiceGridRec.PAYMENT_REF,
    };
    this.Body.push(qry);

    qry =
    {
      "_QUERY": "UPDATE_ACT_PAYMENT",
      FILE_TYPE: paymentGridRec.FILE_TYPE,
      FILE_NAME: paymentGridRec.FILE_NAME,
      PAYMENT_NUMBER: paymentGridRec.PAYMENT_NUMBER,
      PAYMENT_DATE: paymentGridRec.PAYMENT_DATE,
      PAYMENT_DESCRIPTION: paymentGridRec.PAYMENT_DESCRIPTION,
      PAYMENT_AMOUNT: paymentGridRec.PAYMENT_AMOUNT,
      STATUS: paymentGridRec.STATUS,
      LOGNAME: paymentGridRec.LOGNAME,
      LOGDATE: paymentGridRec.LOGDATE
    }
    this.Body.push(qry);

  }
  public checkIfMatch(paymentGridRec, invoiceGridRec) {
    console.log("checkIfMatch:invoiceGridRec:", invoiceGridRec)
    let paymentRef = JSON.parse(invoiceGridRec.PAYMENT_REF);


    let paid_PAYMENT_AMOUNT = 0;

    for (let j = 0; j < paymentRef.length; j++) {
      let paymentRec = paymentRef[j];
      let i = paymentRec.i;
      let prev_PAYMENT_AMOUNT = this.paymentGridData[i].PAYMENT_AMOUNT;

      paid_PAYMENT_AMOUNT = Number(paid_PAYMENT_AMOUNT) + Number(prev_PAYMENT_AMOUNT);
    }
    console.log("checkIfMatch:INVOICE_AMOUNT:", invoiceGridRec.INVOICE_AMOUNT, "paid_PAYMENT_AMOUNT:", paid_PAYMENT_AMOUNT)
    if (paid_PAYMENT_AMOUNT == invoiceGridRec.INVOICE_AMOUNT) {
      invoiceGridRec.STATUS = "MATCH";
    }
    else
      if (paid_PAYMENT_AMOUNT > invoiceGridRec.INVOICE_AMOUNT) {
        //invoiceGridRec.STATUS = "EXCEEDED";
        if (invoiceGridRec.INVOICE_AMOUNT < paid_PAYMENT_AMOUNT) {
          let Msg = this.starServices.getNLS([paid_PAYMENT_AMOUNT, invoiceGridRec.INVOICE_AMOUNT],
            'INV_AMT_LESS_PAY_AMT', 'Total payment : ## excceds invoice amout : ##')
          var dialogStruc = {
            msg: Msg,
            title: "Error",
            info: null,
            object: this,
            action: this.starServices.OkActions,
            callback: null
          };
          this.starServices.showConfirmation(dialogStruc);
          this.FORM_TRIGGER_FAILURE = true;
        }
      }

  }
}
