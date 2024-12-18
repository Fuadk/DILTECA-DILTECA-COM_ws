import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//import { AnyARecord } from 'dns';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogCloseResult } from '@progress/kendo-angular-dialog';
import { Day, firstDayInWeek, getDate } from '@progress/kendo-date-math';
import { Md5 } from 'ts-md5/dist/md5';
import { formatDate } from '@angular/common';
import { tabsCodes, componentConfigDef } from './model';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-notification";
import * as i2 from "@progress/kendo-angular-dialog";
import * as i3 from "@angular/common/http";
import * as i4 from "@progress/kendo-angular-l10n";
export class starServices extends BehaviorSubject {
    constructor(notificationService, dialogService, http, messages) {
        super(null);
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.http = http;
        this.messages = messages;
        this.createdItems = [];
        this.updatedItems = [];
        this.deletedItems = [];
        this.routine_name = "";
        this.saveChangesMsg = "Screen changed, are you sure you to navigate?";
        this.deleteDetailMsg = "Can not delete as detail has data.";
        this.pleaseConfirmMsg = "Please confirm";
        this.deleteConfirmMsg = "Are you sure you want to delete this record?";
        this.nothingToDeletelMsg = "No records to delete.";
        this.fieldsRequiredMsg = "Please enter required fields.";
        this.readOnlyMsg = "Can not save , your authority is readonly.";
        this.noAccessMsg = "You dont have access to this routine.";
        this.standardErrorMsg = "Error performing transaction";
        this.saveMasterMsg = "Save master record first.";
        this.enterQueryMsg = "When pressing Enter Query, you may use any field to search (e.g: name%) and then press Execute Query";
        this.helpMsg = "";
        this.helpMsg_grid = "";
        this.USERNAME = "";
        this.hideAfter = 1000;
        this.StrAuth = "";
        this.MASTER_DB = "";
        this.USERNAME_DB = "";
        this.limit = 2500;
        this.YesNoActions = [
            { text: 'No', primary: false },
            { text: 'Yes', primary: true }
        ];
        this.OkActions = [
            { text: 'Ok', primary: false }
        ];
        this.sessionParams = {};
        //private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
        //private BASE_URL = 'http://192.168.1.3:9090/api?_format=json&_limit=50';
        this.EPMENG_URL = ""; //'http://192.168.1.5:8092/format';
        //private EPMENG_URL = 'http://gmashro.com:8092/format';
        this.SERVER_URL = ""; // 'http://localhost:9090';
        this.SERVER_DEPLOY = "";
        //public SERVER_URL = 'http://gmashro.com:9090';
        this.BASE_URL = this.SERVER_URL + '/api?_format=json&_limit=' + this.limit;
        //private BASE_URL = 'http://gmashro.com:9090/api?_format=json&_limit=' + this.limit;
        this.eKycScr = "DSPEKYC";
        this.syncFlag = 0;
        this.rulesPostQueryDef = {
            rulePtrsArr: [],
            rulesArr: [],
            actionPtrsArr: [],
            actionsArr: []
        };
        this.rulesPreQueryDef = {
            rulePtrsArr: [],
            rulesArr: [],
            actionPtrsArr: [],
            actionsArr: []
        };
        this.hostsArr = [];
        this.hostsMapArr = [];
        this.commitBody = [];
        this.inTrans = false;
        this.Body = [];
        this.commitCommands = ['INSERT', 'UPDATE', 'DELETE'];
        //logger.warn("Warning message");
    }
    query(state) {
        let queryName = "";
        this.fetch(this, queryName)
            .subscribe(x => super.next(x));
    }
    removeRec(gridData, editedRowIndex) {
        //let result1 = JSON.parse(JSON.stringify(gridData));
        if (typeof editedRowIndex !== "undefined") {
            gridData.data.splice(editedRowIndex, 1);
            gridData.total = gridData.data.length;
            /*  //if (this.paramConfig.DEBUG_FLAG) console.log('remving editedRowIndex:' + editedRowIndex)
              result1.data.splice( editedRowIndex , 1 );
              result1.total = result1.data.length;*/
        }
        return gridData;
    }
    updateRec(gridData, editedRowIndex, NewVal) {
        gridData.data[editedRowIndex] = NewVal;
        return gridData;
    }
    addRec(gridData, NewVal) {
        gridData.data.push(NewVal);
        /* let result ={"data":[], total:0};
         let result1 = JSON.parse(JSON.stringify(gridData));
         NewVal = this.parseToDate(NewVal);
         result1.data.push(NewVal);
         result.data = result1.data;
         result.total = result.data.length;
         return result1;*/
        return gridData;
    }
    formatWhere(NewVal) {
        function isDate(value) {
            return value instanceof Date;
        }
        function FORMAT_ISO_parse(d) {
            var dateIso = d.toISOString();
            var dateIsoArr = dateIso.split("T");
            dateIso = dateIsoArr[0] + " " + dateIsoArr[1];
            dateIso = dateIso.substr(0, 19);
            return dateIso;
        }
        function parseValue(key, value) {
            let phrase = "";
            //console.log("isDate:" , isDate (value), value, typeof value);
            if (isDate(value)) {
                //value = getDate(value);
                //value = FORMAT_ISO_parse(value);
                value = value.toISOString();
            }
            if (typeof value === 'string') {
                // it's a string
                if (value != "") {
                    let operators = "<>!=";
                    let operatorVal = "";
                    let trimeedVal = value.trim();
                    let firstChar = trimeedVal.charAt(0);
                    let n = operators.search(firstChar);
                    if (n != -1) {
                        if (firstChar == "|")
                            operatorVal = " = '" + value + "' ";
                        else
                            operatorVal = value;
                    }
                    else if (value.toUpperCase().search("%") != -1) {
                        operatorVal = " like '" + value + "' ";
                        console.log("operatorVal:" + operatorVal);
                    }
                    else {
                        operatorVal = " = '" + value + "' ";
                    }
                    phrase = key + encodeURIComponent(operatorVal);
                    //phrase = key + operatorVal;
                }
            }
            else {
                // it's something else
                let operatorVal = " = '" + value + "' ";
                phrase = key + encodeURIComponent(operatorVal);
            }
            return phrase;
        }
        let wherePhrase = "";
        let whereClause = "";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("formatWhere:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        Object.keys(NewVal).forEach(function (key) {
            let value = NewVal[key];
            //if (this.paramConfig.DEBUG_FLAG) console.log(key + ":" + value);
            if ((value != "") && (value != null)) {
                let phrase = parseValue(key, value);
                if (wherePhrase == "") {
                    wherePhrase = wherePhrase + phrase;
                }
                else {
                    wherePhrase = wherePhrase + " and " + phrase;
                }
            }
        });
        if (wherePhrase != "")
            whereClause = "&_WHERE=" + wherePhrase;
        else
            whereClause = "&_WHERE=";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("whereClause:" + whereClause);
        return whereClause;
    }
    checkDBLoc(theURL) {
        let paramConfig = getParamConfig();
        if (this.paramConfig.DBLoc != "") {
            let userName = this.sessionParams.USERNAME;
            theURL = theURL + "&DBLoc=" + this.paramConfig.DBLoc;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkDBLoc:theURL:", theURL);
        return theURL;
    }
    fetch(object, queryName) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = `${this.BASE_URL}${queryName}`;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        return this.http
            .get(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map(response => ({ data: response['data'] })), tap(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("status data: ", data);
            this.loading = false;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef);
            this.checkRules(object, this.rulesPostQueryDef, data, "POST_QUERY");
        }));
    }
    /* public remove( page: any):Observable<any> {
         this.delete(page)
             .subscribe(x => super.next(x));
 
             return 0;
     }
 */
    delete(Page) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = `${this.BASE_URL}${Page}`;
        theURL = this.checkDBLoc(theURL);
        //console.log("delete theURL:",theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        return this.http
            .delete(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map(response => ({ data: response['data'] })), tap(() => this.loading = false));
    }
    post_delete(Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        //if (this.paramConfig.DEBUG_FLAG) console.log("post:Page:",Page," Body:",Body)
        let theURL = `${this.BASE_URL}${Page}`;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map(response => ({ data: response['data'] })), tap(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("status data:", data);
            this.loading = false;
        }));
    }
    showDailogErr(error) {
        let Msg = error.error;
        //console.log("Msg:", Msg);
        let position = Msg.search("UNIQUE constraint");
        if (position != -1)
            Msg = this.getNLS([], 'ALREADY_EXISTS', 'Record already exists');
        var dialogStruc = {
            msg: Msg,
            title: "Error",
            info: null,
            object: this,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    post(object, Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        //if (this.paramConfig.DEBUG_FLAG) console.log("post:Page:",Page," Body:",Body)
        this.checkRules(object, this.rulesPreQueryDef, Body, "PRE_QUERY");
        let theURL = `${this.BASE_URL}${Page}`;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" , this.StrAuth , theURL);
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth: with URL" , this.StrAuth , theURL);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            //console.log("err:", err.error.error)
            this.showDailogErr(err.error);
            return throwError(err);
        }), map(response => ({ data: response['data'] })), tap(data => {
            //if (this.paramConfig.DEBUG_FLAG) console.log("status data:", data);
            this.loading = false;
            //if (this.paramConfig.DEBUG_FLAG) console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef)
            this.syncFlag = 0;
            this.checkRules(object, this.rulesPostQueryDef, data, "POST_QUERY");
        }));
    }
    /////////////////////////////////////////////////////
    postUpload(Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = Page;
        this.httpOptions = {
            headers: new HttpHeaders({
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map(response => ({ data: response['data'] })), tap(() => this.loading = false));
    }
    /////////////////////////////////////////////////////
    uploadFile(page, filesSet, id) {
        filesSet.forEach(file => {
            // create a new multipart-form for every file
            const formdata = new FormData();
            formdata.append('file', file);
            formdata.append('id', id);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("uploadFile page:" + page);
            let apiURL = this.SERVER_URL + '/api/att' + page;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("apiURL:" + apiURL);
            if (this.paramConfig.DEBUG_FLAG)
                console.log(formdata);
            formdata.forEach(entries => console.log(JSON.stringify(entries)));
            this.postUpload(apiURL, formdata).subscribe(result => {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('result', result);
            });
        });
    }
    uploadFileOld(file) {
        const formdata = new FormData();
        formdata.append('file', file); //the uploaded file content
        formdata.append('documentVersionId', '123'); //I need to pass some additional info to the server besides the File data
        let apiURL = this.SERVER_URL + '/api?upload=y';
        if (this.paramConfig.DEBUG_FLAG)
            console.log("apiURL:" + apiURL);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(formdata);
        formdata.forEach(entries => console.log(JSON.stringify(entries)));
        //const apiURL = this.api_path + 'Upload';     //calling http://localhost:52333/api/UploadController
        this.postUpload(apiURL, formdata).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log('result', result);
        });
        /*const uploadReq = new HttpRequest('POST', apiURL, formdata, {
           reportProgress: true
        });
        this.httpclient.request(uploadReq).subscribe(event => {
           if (event.type === HttpEventType.UploadProgress) {
               this.progress = Math.round(100 * event.loaded / event.total);
           }
       });
       */
    }
    /////////////////////////////////////////////////////
    hasChanges() {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    }
    addToBody(NewVal, Body) {
        Body.push(NewVal);
        // if (this.paramConfig.DEBUG_FLAG) console.log('NewVal : HF Please'  + JSON.stringify(NewVal));
        return Body;
    }
    showNotification(styleNote, msg) {
        let hideAfter = this.hideAfter;
        if (styleNote == "error")
            hideAfter = 5000;
        this.notificationService.show({
            content: msg,
            cssClass: 'button-notification',
            animation: { type: 'fade', duration: 200 },
            position: { horizontal: 'center', vertical: 'bottom' },
            //            stacking: { stacking: 'down' },
            type: { style: styleNote, icon: true },
            //closable: true,
            hideAfter: hideAfter
        });
    }
    goRecordAct(target, object) {
        let rec;
        if (target == "first") {
            object.CurrentRec = 0;
        }
        else if (target == "last") {
            object.CurrentRec = object.executeQueryresult.total - 1;
        }
        else if (target == "next") {
            if (object.CurrentRec < object.executeQueryresult.total - 1)
                object.CurrentRec = object.CurrentRec + 1;
        }
        else if (target == "prev") {
            if (object.CurrentRec > 0)
                object.CurrentRec = object.CurrentRec - 1;
        }
        rec = object.executeQueryresult.data[object.CurrentRec];
        if (typeof rec !== "undefined") {
            object.form.patchValue(rec);
            object.form.markAsPristine();
            object.form.markAsUntouched();
            //object.form.reset(rec, {emitEvent: object.emitEvent != null ? object.emitEvent : true});
            if (object.disableEmitReadCompleted != true)
                object.readCompletedOutput.emit(object.form.value);
            if (typeof object.callBackFunction !== "undefined")
                object.callBackFunction(rec);
        }
        else
            object.clearCompletedOutput.emit([]);
    }
    goRecord(target, object) {
        if (typeof object.executeQueryresult != "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(object.form.dirty);
            if (object.form.dirty == true) {
                let dialogStruc = {
                    msg: this.saveChangesMsg,
                    title: this.pleaseConfirmMsg,
                    info: target,
                    object: object,
                    action: this.YesNoActions,
                    callback: this.goRecordAct
                };
                this.showConfirmation(dialogStruc);
            }
            else {
                this.goRecordAct(target, object);
            }
        }
    }
    showConfirmation(dialogStruc) {
        let dialogResult;
        const dialog = this.dialogService.open({
            title: dialogStruc.title,
            content: dialogStruc.msg,
            actions: dialogStruc.action,
            width: 450,
            height: 200,
            minWidth: 250
        });
        dialog.result.subscribe((result) => {
            if (result instanceof DialogCloseResult) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('close');
            }
            else {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('action', result);
            }
            dialogResult = JSON.parse(JSON.stringify(result));
            if (dialogResult.primary == true) {
                if (dialogStruc.hasOwnProperty('callback')) {
                    dialogStruc.callback(dialogStruc.info, dialogStruc.object);
                }
            }
        });
    }
    /**************** Form functions **************/
    executeQuery_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("star-services executeQuery_form object.form:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        //if (this.paramConfig.DEBUG_FLAG) console.log(object.form.value);
        //if (this.paramConfig.DEBUG_FLAG) console.log(form.value);
        if (typeof object.form !== "undefined") {
            if ((object.form.dirty == true) && (object.isSearch != true)) {
                let dialogStruc = {
                    msg: this.saveChangesMsg,
                    title: this.pleaseConfirmMsg,
                    info: form,
                    object: object,
                    action: this.YesNoActions,
                    callback: this.executeQueryAct_form
                };
                this.showConfirmation(dialogStruc);
            }
            else {
                this.executeQueryAct_form(form, object);
            }
        }
        else {
            this.executeQueryAct_form(form, object);
        }
    }
    // routine from : https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/integration-with-json/
    parseToDate(json) {
        //if (this.paramConfig.DEBUG_FLAG) console.log("json:in:",json)
        Object.keys(json).map(key => {
            let Val1 = json[key];
            if (this.paramConfig.DEBUG_FLAG)
                console.log("key:", key, Val1, typeof Val1);
            //let n = key.toUpperCase().search("DATE");
            //if (n != -1){
            if (typeof Val1 != "number") { //it is not a number, check more
                if ((Val1 != null) && (Val1.length > 7)) {
                    const date = new Date(Val1);
                    let checkYYYY = isNaN(parseInt(Val1.substring(0, 4)));
                    let timeVal = date.getTime();
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("timeVal:", timeVal, isNaN(timeVal));
                    if (!isNaN(timeVal) && (timeVal > 0) && !checkYYYY) {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("it is a date");
                        //if (this.paramConfig.DEBUG_FLAG) console.log("key:"+key + ":" + date.getTime());
                        json[key] = date;
                    }
                }
            }
        });
        //if (this.paramConfig.DEBUG_FLAG) console.log("json:out:",json)
        return json;
    }
    dateYYYYMMDD(object, json) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("json:", json);
        Object.keys(json).map(key => {
            let n = key.toUpperCase().search("_DATE");
            if (n != -1) {
                let dateOrg = json[key];
                let date = new Date(json[key]);
                //date = toLocalDate(date);
                let timeVal = date.getTime();
                if (!isNaN(timeVal) && (timeVal > 0)) {
                    //if (this.paramConfig.DEBUG_FLAG) console.log("key:"+key + ":" + date.getTime());
                    //let array = dateOrg.split("T")
                    dateOrg = formatDate(dateOrg, object.paramConfig.DateFormat, object.paramConfig.dateLocale);
                    json[key] = dateOrg;
                }
            }
        });
        return json;
    }
    executeQueryAct_form(form, object) {
        if (typeof form === "undefined")
            return;
        let paramConfig = {
            "Name": "childRecords",
            "Val": 0
        };
        setParamConfig(paramConfig);
        if (object.isChild == true) {
            if (object.isSearch == true) {
                if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
                    for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                        object.formInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                    }
                }
                else {
                    object.formInitialValues[object.masterKeyName] = object.masterKey;
                }
                //object.formInitialValues[object.masterKeyName] = object.masterKey;
                object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.masterKeyName:" + object.masterKeyName);
                object.isSearch = true;
                form = object.form.value;
            }
        }
        let Page = "&_query=" + object.getCMD;
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        //if (object.isSearch == true) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log(form.value);
        let NewVal = form;
        object.isSearch = false;
        if ((typeof object.formattedWhere === "undefined") || (object.formattedWhere == null)) {
            Page = Page + object.starServices.formatWhere(NewVal);
        }
        else {
            Page = Page + object.formattedWhere;
            object.formattedWhere = null;
        }
        if ((typeof object.OrderByClause !== "undefined") && (object.OrderByClause != ""))
            Page = Page + "&_ORDERBY=" + object.OrderByClause;
        //}
        //console.log("test Page:", Page);
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.CurrentRec = 0;
        Page = encodeURI(Page);
        object.starServices.fetch(object, Page).subscribe(result => {
            if (result != null) {
                for (let i = 0; i < result.data[0].data.length; i++)
                    result.data[0].data[i] = object.starServices.parseToDate(result.data[0].data[i]);
                result = { data: result.data[0].data,
                    total: parseInt(result.data[0].data.length, 10) };
                if (object.isMaster)
                    object.starServices.showNotification('success', "Records retrieved : " + result.total);
                object.executeQueryresult = result;
                this.helpMsg = "";
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("object.executeQueryresult:", object.executeQueryresult);
                //console.log("result.data:",result.data, " object.CurrentRec", object.CurrentRec );
                //console.log("result.data[object.CurrentRec:",result.data[object.CurrentRec] );
                if (typeof result.data[object.CurrentRec] !== "undefined") {
                    object.form.patchValue(result.data[object.CurrentRec]);
                    //console.log("object.form.value:",object.form.value);
                    object.form.markAsPristine();
                    object.form.markAsUntouched();
                }
                //object.form.reset(result.data[object.CurrentRec], {emitEvent: object.emitEvent != null ? object.emitEvent : true});
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("form servicereadCompletedOutput");
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(object.readCompletedOutput);
                let paramConfig = {
                    "Name": "childRecords",
                    "Val": result.total
                };
                setParamConfig(paramConfig);
                if (result.total != 0)
                    object.isNew = false;
                if (object.disableEmitReadCompleted != true) {
                    if (result.total != 0) {
                        object.readCompletedOutput.emit(object.form.value);
                    }
                    else
                        object.clearCompletedOutput.emit([]);
                }
                if (typeof object.callBackFunction !== "undefined")
                    object.callBackFunction(result.data[0]);
            }
            this.setPrimarKeyNameArr(object, true);
        }, err => {
            //alert('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    execstarServices_form_inTrans(NewVal, object) {
        this.commitBody.push(NewVal);
        if (object.action != "REMOVE") {
            if (typeof object.executeQueryresult !== "undefined") {
                if (object.isNew == true) {
                    object.executeQueryresult.data.push(NewVal);
                    object.executeQueryresult.total = object.executeQueryresult.total + 1;
                }
                else {
                    object.executeQueryresult.data[object.CurrentRec] = NewVal;
                }
            }
            else {
                let NewValArr = [];
                NewValArr.push(NewVal);
                let result = { data: NewValArr,
                    total: 1 };
                object.executeQueryresult = result;
                object.CurrentRec = 0;
            }
            var data = [];
            data.push(NewVal);
            if (object.isNew == true) {
                object.isNew = false;
                if (typeof object.callBackPost_Insert !== "undefined") {
                    object.callBackPost_Insert.apply(object, data);
                }
            }
            else {
                if (typeof object.callBackPost_Update !== "undefined") {
                    object.callBackPost_Update.apply(object, data);
                }
            }
        }
        else {
            //REMOVE
            object.executeQueryresult.data.splice(object.CurrentRec, 1);
            object.executeQueryresult.total--;
            if (object.CurrentRec > 0) {
                object.CurrentRec--;
                object.form.reset(object.executeQueryresult.data[object.CurrentRec], { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                if (object.isNew == true)
                    object.isNew = false;
            }
            else {
                object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                object.isNew = true;
            }
            let NewVal1 = [];
            NewVal1.push(NewVal);
            if (typeof object.callBackRemoveAtt !== "undefined")
                object.callBackRemoveAtt(object, NewVal1);
            if (typeof object.callBackPost_Remove !== "undefined") {
                object.callBackPost_Remove.apply(object, NewVal1);
            }
        }
        if (object.action != "REMOVE") {
            object.form.reset(NewVal, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        }
        if (object.diableEmitSave == true) { }
        else
            object.saveCompletedOutput.emit(NewVal);
        if (object.isChild == true) {
            let paramConfig = {
                "Name": "childRecords",
                "Val": object.executeQueryresult.total
            };
            setParamConfig(paramConfig);
        }
        object.action = "";
        this.setPrimarKeyNameArr(object, true);
    }
    execstarServices_form(NewVal, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("NewVal:", NewVal);
        object.addToBody(NewVal);
        let Page = "&_trans=Y";
        if (this.inTrans) {
            this.execstarServices_form_inTrans(NewVal, object);
            return;
        }
        this.post(object, Page, object.Body).subscribe(Page => {
            object.Body = [];
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.executeQueryresult.data:object.CurrentRec:" + object.CurrentRec + " object.action:" + object.action);
            if (this.paramConfig.DEBUG_FLAG)
                console.log(object.executeQueryresult);
            //if (typeof object.executeQueryresult !== "undefined")
            {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here1");
                if (object.action != "REMOVE") {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(object.executeQueryresult);
                    if (typeof object.executeQueryresult !== "undefined") {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.isNew:" + object.isNew);
                        if (object.isNew == true) {
                            object.executeQueryresult.data.push(NewVal);
                            object.executeQueryresult.total = object.executeQueryresult.total + 1;
                            //object.CurrentRec++;
                        }
                        else {
                            object.executeQueryresult.data[object.CurrentRec] = NewVal;
                        }
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.executeQueryresult post");
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log(object.executeQueryresult);
                    }
                    else {
                        let NewValArr = [];
                        NewValArr.push(NewVal);
                        let result = { data: NewValArr,
                            total: 1 };
                        object.executeQueryresult = result;
                        object.CurrentRec = 0;
                    }
                    this.showNotification('success', "Data saved successfully");
                    var data = [];
                    data.push(NewVal);
                    if (object.isNew == true) {
                        object.isNew = false;
                        if (typeof object.callBackPost_Insert !== "undefined") {
                            //object.callBackPost_Insert(object, NewVal);
                            //console.log("before calling callBackPost_Insert:", NewVal,data)
                            object.callBackPost_Insert.apply(object, data);
                        }
                    }
                    else {
                        if (typeof object.callBackPost_Update !== "undefined") {
                            object.callBackPost_Update.apply(object, data);
                        }
                    }
                }
                else {
                    //REMOVE
                    object.executeQueryresult.data.splice(object.CurrentRec, 1);
                    object.executeQueryresult.total--;
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("object.CurrentRec:" + object.CurrentRec, " NewVal:", NewVal);
                    if (object.CurrentRec > 0) {
                        object.CurrentRec--;
                        object.form.reset(object.executeQueryresult.data[object.CurrentRec], { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                        if (object.isNew == true)
                            object.isNew = false;
                    }
                    else {
                        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                        object.isNew = true;
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.isNew:" + object.isNew);
                    }
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("here2:NewVal:", NewVal);
                    let NewVal1 = [];
                    NewVal1.push(NewVal);
                    if (typeof object.callBackRemoveAtt !== "undefined")
                        object.callBackRemoveAtt.apply(object, NewVal1);
                    if (typeof object.callBackPost_Remove !== "undefined") {
                        object.callBackPost_Remove.apply(object, NewVal1);
                    }
                }
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("here2");
            if (object.action != "REMOVE") {
                object.form.reset(NewVal, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
            }
            if (object.diableEmitSave == true) { }
            else
                object.saveCompletedOutput.emit(NewVal);
            if (object.isChild == true) {
                let paramConfig = {
                    "Name": "childRecords",
                    "Val": object.executeQueryresult.total
                };
                setParamConfig(paramConfig);
            }
            object.action = "";
            this.setPrimarKeyNameArr(object, true);
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    saveChanges_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log('saveChanges_form : object.isNew :' + object.isNew);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(object.componentConfig.routineAuth);
        if (object.componentConfig.routineAuth != null) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("authLevel:" + object.componentConfig.routineAuth.authLevel);
            if (object.componentConfig.routineAuth.authLevel != 2) {
                let dialogStruc = {
                    msg: this.readOnlyMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        if ((!object.form.dirty) && object.isChild)
            return;
        if (object.form.invalid) {
            object.submitted = true;
            this.showOkMsg(object, this.fieldsRequiredMsg, "Error");
            return;
        }
        let NewVal = {};
        //object.Body = [];   // only one transaction allowed in  form. Moved to form
        //NewVal =  form.value;
        NewVal = Object.assign({}, form.value, {});
        if (this.paramConfig.DEBUG_FLAG)
            console.log("----- NewVal:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        if (object.isNew == true)
            NewVal["_QUERY"] = object.insertCMD;
        else
            NewVal["_QUERY"] = object.updateCMD;
        //object.isNew = false;
        this.execstarServices_form(NewVal, object);
    }
    enterQueryAct_form(form, object) {
        object.CurrentRec = 0;
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.isSearch = true;
        object.isNew = false;
        if (object.paramConfig.DEBUG_FLAG)
            console.log('enterQuery : object.isSearch:' + object.isSearch);
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        object.starServices.setPrimarKeyNameArr(object, false);
        this.helpMsg = this.getNLS([], "HELP_ENTER_QUERY", this.enterQueryMsg);
    }
    setPrimarKeyNameArr(object, value) {
        if (typeof object.primarKeyReadOnlyArr !== "undefined") {
            let keys = Object.keys(object.primarKeyReadOnlyArr);
            for (let k = 0; k < keys.length; k++) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("[keys[k]:", keys[k], " value:", value);
                object.primarKeyReadOnlyArr[keys[k]] = value;
            }
        }
    }
    enterQuery_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:dirty:", object.form.dirty);
        if (object.form.dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: form,
                object: object,
                action: this.YesNoActions,
                callback: this.enterQueryAct_form
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.enterQueryAct_form(form, object);
        }
    }
    onCancel_form(e, object) {
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        object.isSearch = false;
        object.isNew = true;
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.CurrentRec = 0;
        object.FORM_TRIGGER_FAILURE = false;
        this.helpMsg = "";
    }
    showOkMsg(object, msg, severity) {
        let dialogStruc = {
            msg: msg,
            title: severity,
            info: null,
            object: object,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    onRemove_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.isNew:", object.isNew);
        if (object.isNew == true) {
            this.onCancel_form(null, object);
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.executeQueryresult:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(object.executeQueryresult);
        if ((typeof object.executeQueryresult !== "undefined") && (object.executeQueryresult.total == 0)) {
            this.showOkMsg(object, this.nothingToDeletelMsg, "Warning");
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log('onRemove : isChild ' + object.isChild + " object.isMaster:" + object.isMaster);
        let NewVal = form.value;
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.executeQueryresult:" + object.executeQueryresult);
        if (object.isChild == false) {
            var paramConfig = getParamConfig();
            if (this.paramConfig.DEBUG_FLAG)
                console.log(paramConfig);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("paramConfig.childRecords:" + paramConfig.childRecords);
            if (typeof paramConfig.childRecords === "undefined") {
                paramConfig.childRecords = 0;
            }
            if ((paramConfig.childRecords != 0) && (object.isMaster == true)) {
                let dialogStruc = {
                    msg: this.deleteDetailMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log(paramConfig);
        let dialogStruc = {
            msg: this.deleteConfirmMsg,
            title: this.pleaseConfirmMsg,
            info: form,
            object: object,
            action: this.YesNoActions,
            callback: this.Remove_formAct
        };
        this.showConfirmation(dialogStruc);
    }
    Remove_formAct(form, object) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("in Remove_formAct");
        let NewVal = {};
        NewVal = form.value;
        if (object.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        //object.form.reset(object.formInitialValues);
        object.action = "REMOVE";
        NewVal["_QUERY"] = object.deleteCMD;
        object.starServices.execstarServices_form(NewVal, object);
    }
    onNew_form(e, object) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("onNew: object.masterKey:" + object.masterKey);
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.isSearch = false;
        object.isNew = true;
        this.setPrimarKeyNameArr(object, false);
    }
    /******************* Grid functions  ********/
    addHandler_grid(object) {
        if (typeof object.masterKeyNameArr != "undefined") {
            if (object.isChild == true) {
                if (object.masterKeyArr[0] == "") {
                    this.showOkMsg(this, this.saveMasterMsg, "Error");
                    return;
                }
            }
            else {
                if (object.isChild == true) {
                    if (object.masterKey == "") {
                        this.showOkMsg(this, this.saveMasterMsg, "Error");
                        return;
                    }
                }
            }
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("test41:object.gridInitialValues:", object.gridInitialValues);
        object.saveCurrent();
        this.setPrimarKeyNameArr(object, false);
        /* object.gridInitialValues.MODULE = object.masterKey;*/
        if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
            this.setPrimarKeyNameArr(object, false);
            if (object.isChild == true) {
                for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                    let readOnly = "is" + object.masterKeyNameArr[i] + "readOnly";
                    if (object.primarKeyReadOnlyArr) {
                        object.primarKeyReadOnlyArr[readOnly] = true;
                    }
                    object.gridInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                }
            }
        }
        else {
            if (object.paramConfig.DEBUG_FLAG)
                console.log("test4:object.masterKeyName:", object.masterKeyName);
            if (object.masterKeyName != "") {
                object.gridInitialValues[object.masterKeyName] = object.masterKey;
            }
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("test42:object.gridInitialValues:", object.gridInitialValues);
        object.closeEditor();
        object.formGroup = object.createFormGroupGrid(object.gridInitialValues);
        object.formGroup.setErrors({
            notUnique: true
        });
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.formGroup:", object.formGroup);
        object.isNew = true;
        object.grid.addRow(object.formGroup);
        //this.setPrimarKeyNameArr(object, false);
    }
    removeHandler_grid(sender, object) {
        //sender.cancelCell();
        let paramConfig = getParamConfig();
        if (object.paramConfig.DEBUG_FLAG)
            console.log("removeHandler_grid paramConfig:object.isMaster " + object.isMaster);
        if (object.paramConfig.DEBUG_FLAG)
            console.log(paramConfig);
        if ((paramConfig.childRecords != 0) && (object.isMaster == true)) {
            let dialogStruc = {
                msg: this.deleteDetailMsg,
                title: "Warning",
                info: null,
                object: object,
                action: this.OkActions,
                callback: null
            };
            this.showConfirmation(dialogStruc);
            return;
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.editedRowIndex :", object.editedRowIndex);
        if (typeof object.editedRowIndex !== "undefined") {
            let NewVal = {};
            let grid_data = JSON.parse(JSON.stringify(object.grid.data));
            NewVal = grid_data.data[object.editedRowIndex];
            let curCMD = NewVal["_QUERY"];
            if (object.paramConfig.DEBUG_FLAG)
                console.log("check:NewVal:_QUERY", NewVal["_QUERY"]);
            let result1 = object.starServices.removeRec(object.grid.data, object.editedRowIndex);
            object.grid.data = result1;
            if (object.paramConfig.DEBUG_FLAG)
                console.log("check:NewVal:", NewVal);
            NewVal["_QUERY"] = object.deleteCMD;
            if (curCMD != object.insertCMD) {
                object.addToBody(NewVal);
                object.removedRec.push(NewVal);
            }
        }
        else
            object.cancelHandler();
    }
    saveCurrent_grid(object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("saveCurrent_grid:object.formGroup:", object.formGroup);
        if (object.formGroup) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("saveCurrent_grid:object.formGroup:", object.formGroup);
            let NewVal = {};
            NewVal = Object.assign({}, object.formGroup.value);
            if (this.paramConfig.DEBUG_FLAG)
                console.log('check:dirty :', object.formGroup.dirty, " isNew:", object.isNew, " NewVal: ", NewVal);
            if (object.formGroup.dirty === true) {
                if (object.isNew == true) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("here1 NewVal", NewVal);
                    //let result = object.starServices.addRec(object.grid.data, NewVal) ;
                    // object.grid.data = result;
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(object.grid.data);
                    if (object.grid.data == null || typeof object.grid.data.data == "undefined")
                        object.grid.data = { data: [], total: 0 };
                    //object.grid.data.data.push(NewVal);
                    object.grid.data.data.splice(0, 0, NewVal);
                    NewVal["_QUERY"] = object.insertCMD;
                }
                else {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log('check:object.grid.data:', object.grid.data, " NewVal:", NewVal);
                    //NewVal = this.parseToDate(NewVal);
                    if (object.grid.data.data[object.editedRowIndex]._QUERY == object.insertCMD) {
                        NewVal["_QUERY"] = object.insertCMD;
                    }
                    else {
                        NewVal["_QUERY"] = object.updateCMD;
                    }
                    object.grid.data.data[object.editedRowIndex] = NewVal;
                    //let result1 = object.starServices.updateRec(object.grid.data , object.editedRowIndex, NewVal );
                    //object.grid.data = result1;
                }
                //object.addToBody(NewVal); // addToBody will be done at saveChanges_grid to avoid duplicte update since object.grid.data.data is getting updated
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(object.grid.data);
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("pre close");
            object.closeEditor();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("post close");
        }
    }
    closeEditor_grid(object) {
        //console.log("Del:object.editedRowIndex:", object.editedRowIndex);
        //console.log("Del:object.grid:", object.grid);
        object.grid.closeRow(object.editedRowIndex);
        object.isNew = false;
        object.editedRowIndex = undefined;
        object.formGroup = undefined;
    }
    cancelHandler_grid(object) {
        object.closeEditor();
        object.isSearch = false;
        object.FORM_TRIGGER_FAILURE = false;
        //object.removedRec.length = 0;
        this.helpMsg_grid = "";
    }
    saveChanges_grid_inTrans(grid, object, NewVal) {
        this.commitBody.push(NewVal);
        if (object.isChild == true) {
            let gridRecords = object.grid.data.data.length;
            let paramConfig = {
                "Name": "childRecords",
                "Val": gridRecords
            };
            setParamConfig(paramConfig);
        }
        if (typeof object.callBackPost_Save !== "undefined") {
            let NewVal1 = [];
            NewVal1.push(NewVal);
            object.callBackPost_Save.apply(object, NewVal1);
        }
        this.setPrimarKeyNameArr(object, true);
        object.saveCompletedOutput.emit(grid);
    }
    saveChanges_grid(grid, object) {
        if ((object.grid.data == null) || (typeof object.grid.data.data == "undefined")) {
            return;
        }
        let Error = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("pre object.saveCurrent");
        object.saveCurrent();
        if (object.componentConfig.routineAuth != null) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("authLevel:" + object.componentConfig.routineAuth.authLevel);
            if (object.componentConfig.routineAuth.authLevel != 2) {
                let dialogStruc = {
                    msg: this.readOnlyMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        let NewVal = [];
        for (let i = 0; i < object.grid.data.data.length; i++) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("check: object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
            if (typeof object.grid.data.data[i]._QUERY != "undefined") {
                NewVal = object.grid.data.data[i];
                object.addToBody(NewVal);
            }
        }
        if (this.inTrans) {
            this.saveChanges_grid_inTrans(grid, object, NewVal);
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("check: object.Body:", object.Body);
        if (object.Body.length != 0) {
            let Page = "&_trans=Y";
            this.post(object, Page, object.Body).subscribe(Page => {
                object.Body = [];
                for (let i = object.grid.data.data.length - 1; i >= 0; i--) {
                    if (typeof object.grid.data.data[i]._QUERY != "undefined") {
                        object.grid.data.data[i]._QUERY_DONE = object.grid.data.data[i]._QUERY;
                        delete object.grid.data.data[i]._QUERY;
                    }
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("check: object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
                }
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("object.grid.data.data:", object.grid.data.data);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("object.grid.data.data:.length", object.grid.data.data.length);
                if (object.isChild == true) {
                    let gridRecords = object.grid.data.data.length;
                    let paramConfig = {
                        "Name": "childRecords",
                        "Val": gridRecords
                    };
                    setParamConfig(paramConfig);
                }
                this.showNotification('success', "Data saved successfully");
                if (typeof object.callBackPost_Save !== "undefined") {
                    let NewVal1 = [];
                    NewVal1.push(NewVal);
                    object.callBackPost_Save.apply(object, NewVal1);
                }
                this.setPrimarKeyNameArr(object, true);
            }, err => {
                for (let i = object.Body.length - 1; i >= 0; i--) {
                    if (object.Body[i]._QUERY != object.deleteCMD) {
                        object.Body.splice(i, 1);
                    }
                }
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("err:", err);
                let errMsg = this.getErrorMsg(err);
                this.showNotification("error", "error:" + errMsg);
                Error = true;
            });
        }
        else {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.isMaster:" + object.isMaster);
            if (!object.isMaster)
                this.showNotification('warning', "No changes to save");
        }
        if (!Error)
            object.saveCompletedOutput.emit(grid);
    }
    getErrorMsg(err) {
        let errMsg = "";
        if (typeof err.error.error != "undefined") {
            errMsg = err.error.error;
        }
        else
            errMsg = err.error;
        return errMsg;
    }
    executeQuery_grid(grid, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("grid:", grid);
        if (typeof grid == "undefined" || typeof object.grid == "undefined")
            return;
        let dirty = false;
        //if (this.paramConfig.DEBUG_FLAG) console.log ("executeQuery_grid:" + object.Body.length + " " + object.grid.isEditing(), "object.Body:",object.Body);
        //if (this.paramConfig.DEBUG_FLAG) console.log("object.Body:",object.Body)
        if ((object.Body.length != 0) || object.grid.isEditing() == true) {
            dirty = true;
        }
        if (dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: grid,
                object: object,
                action: this.YesNoActions,
                callback: this.executeQueryAct_grid
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.executeQueryAct_grid(grid, object);
        }
    }
    executeQueryAct_grid(grid, object) {
        let paramConfig = {
            "Name": "childRecords",
            "Val": 0
        };
        setParamConfig(paramConfig);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isChild:", object.isChild, " object.isSearch :", object.isSearch);
        if (object.isChild == true) {
            if (object.isSearch != true) {
                grid = object.gridInitialValues;
                if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
                    for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                        object.gridInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                    }
                }
                else {
                    object.gridInitialValues[object.masterKeyName] = object.masterKey;
                }
                //grid[object.masterKeyName] = object.masterKey;
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.masterKeyName:" + object.masterKeyName);
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(grid);
                object.isSearch = true;
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("---Searching:");
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(grid);
            }
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log('------------executeQuery object.isSearch :' + object.isSearch + "  object.isChild:" + object.isChild);
        // if (object.paramConfig.DEBUG_FLAG) console.log(object.grid);
        let Page = "&_query=" + object.getCMD;
        if (object.isSearch == true) {
            if (object.paramConfig.DEBUG_FLAG)
                console.log('object.formGroup:', object.formGroup, 'typeof(grid):', typeof (grid.data), ' grid:', grid);
            let NewVal = "";
            if (typeof object.formGroup == "undefined") {
                // a child component
                if (object.paramConfig.DEBUG_FLAG)
                    console.log('grid:', typeof (grid.data));
                if (typeof grid.data == "object")
                    NewVal = grid.data; // passed empty grid
                else
                    NewVal = grid; // used the passed grid param
            }
            else
                NewVal = object.formGroup.value;
            object.isSearch = false;
            if ((typeof object.formattedWhere === "undefined") || (object.formattedWhere == null)) {
                Page = Page + object.starServices.formatWhere(NewVal);
            }
            else {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.formattedWhere", object.formattedWhere);
                Page = Page + object.formattedWhere;
                object.formattedWhere = null;
            }
            if ((typeof object.OrderByClause !== "undefined") && (object.OrderByClause != ""))
                Page = Page + "&_ORDERBY=" + object.OrderByClause;
        }
        Page = encodeURI(Page);
        //if (object.paramConfig.DEBUG_FLAG) console.log('Page:' + Page);
        object.grid.loading = true;
        object.closeEditor();
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.CurrentRec = 0;
        object.grid.data = null;
        object.starServices.fetch(object, Page).subscribe(result => {
            if (result != null) {
                let actualResult = Object.assign({}, result, {});
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("------result.data[0].data :");
                //if (object.paramConfig.DEBUG_FLAG) console.log(result.data[0].data);
                this.helpMsg_grid = "";
                for (let i = 0; i < result.data[0].data.length; i++) {
                    result.data[0].data[i] = object.starServices.parseToDate(result.data[0].data[i]);
                    if (result.data[0].data[i]._QUERY != "undefined") {
                        delete result.data[0].data[i]._QUERY;
                        delete result.data[0].data[i]._QUERY_DONE;
                    }
                }
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(result.data[0].data[0]);
                object.Body = [];
                result = { data: result.data[0].data,
                    total: parseInt(result.data[0].data.length, 10) };
                if (object.isMaster)
                    object.starServices.showNotification('success', "Records retrieved : " + result.total);
                object.executeQueryresult = result;
                if (object.isChild == true) {
                    let paramConfig = {
                        "Name": "childRecords",
                        "Val": result.total
                    };
                    setParamConfig(paramConfig);
                }
            }
            object.grid.loading = false;
            object.grid.data = result;
            if (typeof object.callBackFunction !== "undefined")
                object.callBackFunction(result);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("grid servicereadCompletedOutput");
            if (object.paramConfig.DEBUG_FLAG)
                console.log(object.grid.data.data);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("result length:" + result.length);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("result total:" + result.total);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("object.performReadCompletedOutput:" + object.performReadCompletedOutput);
            if ((typeof object.performReadCompletedOutput !== "undefined") || (object.performReadCompletedOutput == false)) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("here1");
            }
            else {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("here2");
                if (object.disableEmitReadCompleted != true) {
                    if (result.total != 0)
                        object.readCompletedOutput.emit(object.grid.data.data[0]);
                    else
                        object.readCompletedOutput.emit([]);
                }
            }
            object.starServices.setPrimarKeyNameArr(object, true);
        }, err => {
            object.Body = [];
            object.grid.loading = false;
            object.grid.data = null;
            if (object.paramConfig.DEBUG_FLAG)
                console.log("err:", err);
            object.starServices.showNotification("error", "error:" + err.error.error.code);
        });
        object.docClickSubscription = object.renderer.listen('document', 'click', object.onDocumentClick.bind(object));
    }
    enterQueryAct_grid(grid, object) {
        object.grid.cancel;
        object.grid.data = null;
        object.Body = [];
        object.isSearch = true;
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        object.addHandler();
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.starServices.setPrimarKeyNameArr(object, false);
        this.helpMsg_grid = this.getNLS([], "HELP_ENTER_QUERY", this.enterQueryMsg);
    }
    enterQuery_grid(grid, object) {
        let dirty = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("pre object.saveCurrent");
        object.saveCurrent();
        let modified = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.grid.data");
        if (object.grid.data != null) {
            if (typeof object.grid.data.data !== "undefined") {
                for (let i = 0; i < object.grid.data.data.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("check: i:", i, " object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
                    if (typeof object.grid.data.data[i]._QUERY !== "undefined") {
                        modified = true;
                    }
                }
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.saveCurrent :" + object.Body.length + " " + object.grid.isEditing());
        if (object.Body.length != 0) {
            modified = true;
        }
        if ((modified == true) || object.grid.isEditing() == true) {
            dirty = true;
        }
        if (dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: grid,
                object: object,
                action: this.YesNoActions,
                callback: this.enterQueryAct_grid
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.enterQueryAct_grid(grid, object);
        }
    }
    setStrAuth(user, password) {
        this.StrAuth = user + ":" + password;
        this.StrAuth = btoa(this.StrAuth);
        this.StrAuth = "Basic " + this.StrAuth;
    }
    isASCII(str) {
        return /^[\x00-\x7F]*$/.test(str);
    }
    login(object, user, password) {
        if (!this.isASCII(user)) {
            this.showNotification("error", "ِrror: " + "Not a valid User Name");
        }
        this.paramConfig = getParamConfig();
        this.setStrAuth(user, password);
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        let Page = "";
        let success = false;
        const md5 = new Md5();
        let pass = md5.appendStr(password).end();
        user = user.toUpperCase().trim();
        let NewVal = {
            "USERNAME": user,
            "PASSWORD": pass
        };
        NewVal["_QUERY"] = "VERIFY_ADM_USER";
        object.Body = [];
        object.Body = [];
        object.addToBody(NewVal);
        let paramConfig = {
            "Name": "USERNAME",
            "Val": user
        };
        setParamConfig(paramConfig);
        this.sessionParams["USERNAME"] = user;
        this.post(object, Page, object.Body).subscribe(result => {
            if (typeof result.data[0].data[0] !== "undefined") {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("Object in login HF", object.Body, user);
                if (result.data[0].data[0].USERNAME == user) {
                    this.USERNAME = user;
                    object.Body = [];
                    let paramConfig = {
                        "Name": "USER_INFO",
                        "Val": result.data[0].data[0]
                    };
                    setParamConfig(paramConfig);
                    this.sessionParams["USER_INFO"] = result.data[0].data[0];
                    this.USER_INFO = result.data[0].data[0];
                    if (this.sessionParams.USER_INFO.MASTER_DB != "") {
                        this.MASTER_DB = this.sessionParams.USER_INFO.MASTER_DB;
                        this.USERNAME_DB = this.sessionParams.USER_INFO.MASTER_DB;
                    }
                    success = true;
                    this.loadRules(object);
                    if (object.testEKYC) {
                        object.loginCompletedHandler(null);
                    }
                    else
                        object.loginCompleted.emit(this);
                }
            }
            if (!success)
                this.showNotification("error", "error:" + "Wrong user or password");
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + "Wrong user or password");
        });
    }
    getUserInfo(object, user) {
        this.paramConfig = getParamConfig();
        let Page = "";
        let success = false;
        user = user.toUpperCase().trim();
        user = user.trim();
        let NewVal = {
            "USERNAME": user
        };
        NewVal["_QUERY"] = "GET_ADM_USER_INFORMATION";
        object.Body = [];
        object.addToBody(NewVal);
        let paramConfig = {
            "Name": "USERNAME",
            "Val": user
        };
        setParamConfig(paramConfig);
        this.sessionParams["USERNAME"] = user;
        this.post(object, Page, object.Body).subscribe(result => {
            if (typeof result.data[0].data[0] !== "undefined") {
                console.log("result:", result.data[0].data[0]);
                if (result.data[0].data[0].USERNAME == user) {
                    this.USERNAME = user;
                    object.Body = [];
                    let paramConfig = {
                        "Name": "USER_INFO",
                        "Val": result.data[0].data[0]
                    };
                    setParamConfig(paramConfig);
                    this.sessionParams["USER_INFO"] = result.data[0].data[0];
                    this.USER_INFO = result.data[0].data[0];
                    if ((this.sessionParams.USER_INFO.MASTER_DB != "") && (typeof this.sessionParams.USER_INFO.MASTER_DB !== "undefined")) {
                        this.MASTER_DB = this.sessionParams.USER_INFO.MASTER_DB;
                    }
                    success = true;
                    this.loadRules(object);
                    if (object.testEKYC) {
                        object.loginCompletedHandler(null);
                    }
                    else
                        object.loginCompletedHandler(this);
                }
            }
            if (!success) {
                let errorMsg = user + "is not defined in STAR DB";
                let dialogStruc = {
                    msg: errorMsg,
                    title: "Error",
                    info: null,
                    object: object,
                    action: null,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                object.logoff(3000);
            }
        }, err => {
            object.Body = [];
            let errorMsg = user + "is not defined in STAR DB";
            let dialogStruc = {
                msg: errorMsg,
                title: "Error",
                info: null,
                object: object,
                action: null,
                callback: null
            };
            this.showConfirmation(dialogStruc);
            object.logoff(3000);
        });
    }
    /////////////////
    FORMAT_ISO(d) {
        var dateIso = d.toISOString();
        var dateIsoArr = dateIso.split("T");
        dateIso = dateIsoArr[0] + " " + dateIsoArr[1];
        dateIso = dateIso.substr(0, 19);
        return dateIso;
    }
    LogRule(object, ruleLog, msgResponse, status) {
        function prepareDataForDB(dataIn) {
            let dataOut = JSON.stringify(dataIn);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("dataIn:", dataIn, " dataOut:", dataOut);
            dataOut = dataOut.split("'").join('"');
            return dataOut;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("-----msgResponse:", msgResponse, "ruleLog:", ruleLog);
        let db = ruleLog.db;
        let d = new Date();
        let dateIso = d.toISOString();
        let RULE_KEY = ruleLog.rule.RULE_KEY;
        let array = RULE_KEY.split(",");
        //let ruleKey = {};
        let ruleKey = "";
        let ruleKeyName = "";
        for (let i = 0; i < array.length; i++) {
            let elem = array[i];
            let elem_value = ruleLog.queryData[elem];
            if (typeof elem_value !== "undefined") {
                //ruleKey[elem] = elem_value;
                if (ruleKey != "") {
                    ruleKey = ruleKey + "_";
                }
                ruleKey = ruleKey + elem_value;
                if (ruleKeyName != "") {
                    ruleKeyName = ruleKeyName + "_";
                }
                ruleKeyName = ruleKeyName + elem;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("ruleKey:", ruleKey, " ruleKeyName:", ruleKeyName);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("RULE_KEY:", RULE_KEY);
        let queryData = prepareDataForDB(ruleLog.queryData);
        //let bodyToSend = prepareDataForDB(ruleLog.bodyToSend);
        let bodyToSend = ruleLog.bodyToSend;
        let parametersToSend = prepareDataForDB(ruleLog.parametersToSend);
        // let ruleKeyStr = prepareDataForDB(ruleKey);
        let msgResponseStr = prepareDataForDB(msgResponse);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("queryData:" + queryData);
        //
        let userName = object.starServices.sessionParams.USER_INFO.Name;
        object.Body = [];
        let Page = "";
        let NewVal = {
            "RULE_KEY": ruleKey,
            "RULE_KEY_NAME": ruleKeyName,
            "STATUS": status,
            "MODULE": ruleLog.rule.MODULE,
            "RULE_ID": ruleLog.rule.RULE_ID,
            "ACTION_ID": ruleLog.action.ACTION_ID,
            "SENT_DATE": ruleLog.sentDate,
            "MSG_RECEIVED": queryData,
            "PARAMETER_SENT": parametersToSend,
            "BODY_SENT": bodyToSend,
            "MSG_RESPONSE": msgResponseStr,
            "LOGDATE": dateIso,
            "LOGNAME": userName
        };
        NewVal["_QUERY"] = "INSERT_ADM_RULE_LOG";
        //if (this.paramConfig.DEBUG_FLAG) console.log("test:NewVal:", NewVal)
        //if (this.paramConfig.DEBUG_FLAG) console.log("test:object.Body:", object.Body)
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
    }
    performHttpPost(object, bodyToSend, parametersToSend, sendTo, queryData, rule, action, Trigger, hostDef, hostMapDef, headerParam) {
        var valid = false;
        let error = 0;
        let msg = "";
        let options = {
            host: '',
            path: '',
            port: 80,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type': 'text/xml; charset=utf-8',
                "authorization": ""
            }
        };
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------req.url:",req.url);
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------pathname:",req._parsedUrl.pathname);
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------path:",req._parsedUrl.path);
        let d = new Date();
        let dateIso = d.toISOString();
        if (hostDef == null)
            hostDef = "";
        let ruleLog = {
            rule: rule,
            action: action,
            queryData: queryData,
            bodyToSend: bodyToSend,
            parametersToSend: parametersToSend,
            //  "db": db,
            sentDate: dateIso,
            hostDef: hostDef
        };
        if (sendTo == "WF") {
            let url = this.BASE_URL;
            options.headers.authorization = this.StrAuth;
            valid = true;
        }
        else {
            if (hostDef != "") {
                let path = "/" + hostDef.PATH;
                if (parametersToSend != "")
                    path = path + parametersToSend;
                let host = hostDef.HOST;
                let port = parseInt(hostDef.PORT);
                let method = hostDef.HTTP_METHOD;
                options.host = host;
                options.port = port;
                options.path = path;
                options.method = method;
                // let url = "http://" + host + ":" + port  + path + parametersToSend ;
                let url = hostDef.URL;
                //					options.headers.authorization = req.headers.authorization;
                //bodyToSend = "";
                valid = true;
            }
            else {
                error = 100;
                msg = "undefined Host :" + sendTo;
                this.LogRule(object, ruleLog, msg, 100);
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("here2:valid:", valid);
        if (valid) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("options:", options);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("------bodyToSend:" + bodyToSend, "  Trigger:", Trigger);
            let keys = Object.keys(headerParam);
            for (let i = 0; i < keys.length; i++) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(keys[i] + " " + headerParam[keys[i]]);
                if (headerParam[keys[i]] != null) {
                    options.headers[keys[i]] = headerParam[keys[i]];
                    //screenConfig[ keys[i] ] = componentConfig[ keys[i] ];
                }
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("here2:action.ACTION_CODE:", action.ACTION_CODE);
            if (action.ACTION_CODE == "SEND_WAIT") {
                /*
                let sendingLib = "request";
                status = 1;
                let headers  =  {headers:options.headers};
                if (this.paramConfig.DEBUG_FLAG) console.log("headers:", headers);
                let url = "http://" + host + ":" + port  + path + parametersToSend ;
                if (this.paramConfig.DEBUG_FLAG) console.log("---url:", url);
                if (method == "GET")
                {
                  let res = request(method, url, headers);
                  let result = JSON.parse(res.getBody('utf8'));
                }
                else
                if (method == "POST")
                {
        
                  let dataForSync = { body : bodyToSend, headers:options.headers};
                  let res = request(method, url, dataForSync);
                  if (this.paramConfig.DEBUG_FLAG) console.log("res:", res);
                  let statusCode = res.statusCode;
                  let msgResponse ="";
                  if (statusCode == 200)
                  {
                    let contentType = res.headers['content-type'];
        
                    let msgResponse = res.getBody('utf8');
                    if (this.paramConfig.DEBUG_FLAG) console.log("statusCode:", statusCode," headers:", headers,  " msgResponse:", msgResponse);
                    let n = contentType.search("json");
                    if (n != -1)
                      let result = JSON.stringify(JSON.parse(msgResponse));
                    else
                      let result = msgResponse;
                    if (this.paramConfig.DEBUG_FLAG) console.log("result:" +  result);
                  }
                  else
                  {
                    error = statusCode;
                    let msgResponse = res.body.toString();
                    msg = msgResponse;
                  }
        
                }
                if (error == 0)
                {
                  if ( (hostMapDef != null) &&  (hostMapDef.XSLT_RECEIVE != null) && (hostMapDef.XSLT_RECEIVE != "") )
                  {
                    {
                      //result = xsltmap.mapDataOut(result, hostMapDef.XSLT_RECEIVE);
                      //if (this.paramConfig.DEBUG_FLAG) console.log("result:", result);
        
                    }
                  }
        
                  let status = extractStatus (ruleLog, result);
                  LogRule(ruleLog, result, status );
                  error = status;
                  if (status != 0)
                    msg = result;
                }
                */
            }
            else {
                //async
                function extractStatus(ruleLog, msgResponse) {
                    let successMsg = ruleLog.hostDef.SUCCESS_MSG;
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("-------msgResponse:", msgResponse, successMsg);
                    let array = successMsg.split(":");
                    let field = array[0];
                    let value = array[1];
                    let msgResponseArr = msgResponse;
                    msgResponse = JSON.stringify(msgResponseArr);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("field:", field, " value:", value, " msgResponseArr:", msgResponseArr);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("-------msgResponseArr[field]:", msgResponseArr[field], value);
                    let status = 1;
                    if (msgResponseArr[field] == value)
                        status = 0;
                    return status;
                }
                function extractResponseData(msgResponse, responseDataID) {
                    function getKey(Elm, elmVal) {
                        let keys = Object.keys(Elm);
                        let k = 0;
                        let elmObj;
                        while (k < keys.length) {
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("[keys[k]:", keys[k]);
                            if (keys[k] == elmVal) {
                                let elmName = keys[k];
                                elmObj = Elm[elmName];
                                if (this.paramConfig.DEBUG_FLAG)
                                    console.log("elmObj:", elmObj);
                                break;
                            }
                            k++;
                        }
                        return elmObj;
                    }
                    let array = responseDataID.split(".");
                    for (let i = 0; i < array.length; i++) {
                        let returnKey = getKey(msgResponse, array[i]);
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("returnKey.length:", returnKey.length);
                        if (returnKey.length == 1)
                            msgResponse = returnKey[0];
                        else
                            msgResponse = returnKey;
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("msgResponse:", msgResponse);
                    }
                    return msgResponse;
                }
                /*
                function  handleResponseEnd(ruleLog, msgResponse){
                  let status = extractStatus (ruleLog, msgResponse);
                  this.LogRule(ruleLog, msgResponse, status);
        
        
                  //	.RULE_ID + "," +  action.ACTION_ID + "," + users.getUserName() + ","  + dateIso;
                  if (this.paramConfig.DEBUG_FLAG) console.log("-------handleResponse:status:" ,  status);
                }
                */
                function getBody(msgResponse) {
                    //if (this.paramConfig.DEBUG_FLAG) console.log("msgResponse:", msgResponse)
                    //if (this.paramConfig.DEBUG_FLAG) console.log("msgResponse:body", msgResponse.body)
                    return msgResponse.body;
                }
                /*
                      let handleResponse = function(response,  ruleLog){
                        let msgResponse = ''
                        response.on('data', function (chunk) {
                        msgResponse += chunk;
                        });
                        response.on('end', function () {
                         handleResponseEnd(ruleLog, msgResponse);
                         });
              
                      }
                      */
                let headers = {
                    headers: new HttpHeaders()
                        .set('Authorization', this.StrAuth)
                        .set('Content-Type', "application/json")
                };
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here2:headers:", headers);
                if (bodyToSend == "")
                    bodyToSend = null;
                let bodyToSendKSON = JSON.parse(bodyToSend);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here2:bodyToSendKSON:", bodyToSendKSON);
                let url = hostDef.URL + parametersToSend;
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("---url:", url);
                const request = new HttpRequest(options.method, url, bodyToSendKSON, headers);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("------------request:", request, " bodyToSendKSON:", bodyToSendKSON);
                let msgBodyAll;
                this.syncFlag = 1;
                //https://developpaper.com/getting-started-with-angular-http-client/
                this.http.request(request)
                    .subscribe((response) => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(" call successful value returned in body", response);
                    let msgBody = getBody(response);
                    if (typeof msgBody !== "undefined") {
                        msgBodyAll = msgBody;
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("msgBodyAll:", msgBodyAll);
                    }
                }, error => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("PUT call in error:", error);
                    this.syncFlag = 0;
                    this.showNotification("error", "error calling: " + url + ":" + error.error.error);
                }, () => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("The  observable is now completed:msgBodyAll:", msgBodyAll);
                    if (typeof msgBodyAll !== "undefined") {
                        let status = extractStatus(ruleLog, msgBodyAll);
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("-------uleLog.rule:", ruleLog.rule);
                        if (Trigger == "POST_QUERY") {
                            let responseDataID = ruleLog.rule.RESPONSE_DATA_ID;
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:responseDataID:", responseDataID);
                            let responseData = extractResponseData(msgBodyAll, responseDataID);
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:responseData:", responseData);
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:ruleLog.rule.RESPONSE_DATA_NAME:", ruleLog.rule.RESPONSE_DATA_NAME);
                            if (typeof responseData !== "undefined") {
                                object[ruleLog.rule.RESPONSE_DATA_NAME] = responseData;
                                if (this.paramConfig.DEBUG_FLAG)
                                    console.log("TABS:object.tabsAPIResponse:", object.tabsAPIResponse);
                            }
                        }
                        this.syncFlag = 0;
                        this.LogRule(object, ruleLog, msgBodyAll, status);
                    }
                });
                /*
              let reqNew = this.http.request(options, function(response){ handleResponse(response,  ruleLog); });
              reqNew.on('error', function(err) {
                // Handle error
                error = err;
                msg = "Error sending to Host :" +sendTo ;
                if (this.paramConfig.DEBUG_FLAG) console.log( msg + " Error:" + err );
                this.LogRule(ruleLog, msg + " Error:" + err, 400 );
              });
      
              if (this.paramConfig.DEBUG_FLAG) console.log("here1");
              reqNew.write(bodyToSend);
              if (this.paramConfig.DEBUG_FLAG) console.log("here2");
              reqNew.end();
              if (this.paramConfig.DEBUG_FLAG) console.log("here3");
              */
            }
        }
        let statusRec = {
            status: error,
            msg: msg
        };
        /*let status = 1;
        if (!valid){
          statusRec.status = 1;
          statusRec.msg =
        }*/
        if (this.paramConfig.DEBUG_FLAG)
            console.log("valid:", valid, " status:", statusRec);
        return (statusRec);
    }
    sendToServer(object, actionsArr, queryData, rule, action, Trigger, hostsArr, hostsMapArr) {
        function getElmValue(paramData, queryData) {
            function getORDER_FIELDSData(param, orderFields) {
                let val = "";
                if (orderFields != "") {
                    let array = param.split(".");
                    let fieldName = array[1];
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("fieldName:", fieldName, " orderFields:", orderFields);
                    if (typeof orderFields !== "undefined") {
                        orderFields = JSON.parse(orderFields);
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("orderFields:", orderFields);
                        let fieldsData = orderFields.data;
                        val = fieldsData[fieldName];
                    }
                }
                return val;
            }
            let val = paramData;
            var n = 0;
            n = paramData.search(":");
            if (n != -1) {
                let array = paramData.split(":");
                for (let i = 0; i < array.length; i++) {
                    if (i != 0) {
                        n = array[i].search(" ");
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("n:", n, "array[i]:", array[i]);
                        if (n == -1)
                            n = array[i].length;
                        if (n != -1) {
                            let param = array[i].slice(0, n);
                            param = param.trim();
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("param:" + param);
                            let nincludes = param.includes(".");
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("nincludes:", nincludes);
                            if (nincludes == true) {
                                val = getORDER_FIELDSData(param, queryData.ORDER_FIELDS);
                            }
                            else
                                val = queryData[param];
                            if (typeof val == "string")
                                val = val.trim();
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("param:", param, " val:", val);
                        }
                    }
                }
            }
            if (typeof val == "string")
                val = val.split("'").join("");
            return val;
        }
        function getHost(sendTo, hostsArr) {
            let i = 0;
            while (i < hostsArr.length) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("-----------hostsArr[i].HOST_ID :", hostsArr[i].HOST_ID, " sendTo:", sendTo);
                if (hostsArr[i].HOST_ID == sendTo)
                    return hostsArr[i];
                i++;
            }
            return null;
        }
        function getHostMap(hostDef, mapID, hostsMapArr) {
            let i = 0;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("-----------mapID:", mapID, " hostDef.MAP_ID:", hostDef.MAP_ID);
            if ((mapID != null) && (mapID != "")) {
                while (i < hostsMapArr.length) {
                    if ((hostsMapArr[i].HOST_ID == hostDef.HOST_ID) && (mapID == hostsMapArr[i].MAP_ID))
                        return hostsMapArr[i];
                    i++;
                }
            }
            return null;
        }
        ////////////////////
        if (this.paramConfig.DEBUG_FLAG)
            console.log("****************actionsArr:", actionsArr);
        let statusRec;
        let sendTo = actionsArr.SEND_TO;
        let qryParam = {};
        let headerParam = {};
        let bodyToSendArr = [];
        let bodyToSend = "";
        let parametersToSend = "";
        let hostDef = getHost(sendTo, hostsArr);
        let hostMapDef = getHostMap(hostDef, action.MAP_ID, hostsMapArr);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("hostMapDef:", hostMapDef);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("****hostDef.HEADER:", hostDef.HEADER);
        if ((hostDef.HEADER != null) && (hostDef.HEADER != "")) {
            let array = hostDef.HEADER.split("\n");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                let arrayParam = elem.split(":");
                let param = arrayParam[0];
                param = param.trim();
                let paramData = arrayParam[1];
                paramData = paramData.trim();
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("paramData:", paramData);
                paramData = getElmValue(paramData, queryData);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("-----------------------------param:", param, " paramData:", paramData);
                headerParam[param] = paramData;
            }
        }
        if ((actionsArr.BODY_DATA != null) && (actionsArr.BODY_DATA != "")) {
            let bodyData = actionsArr.BODY_DATA;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("bodyData:", bodyData);
            let array = bodyData.split(",");
            //if (this.paramConfig.DEBUG_FLAG) console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                let arrayParam = elem.split("=");
                let param = arrayParam[0];
                param = param.trim();
                let paramData = arrayParam[1];
                paramData = paramData.trim();
                //if (this.paramConfig.DEBUG_FLAG) console.log("paramData:", paramData);
                paramData = getElmValue(paramData, queryData);
                //if (this.paramConfig.DEBUG_FLAG) console.log("-----------------------------param:", param, " paramData:", paramData);
                qryParam[param] = paramData;
            }
            //if (this.paramConfig.DEBUG_FLAG) console.log("qryParam:here");
            //if (this.paramConfig.DEBUG_FLAG) console.log("qryParam:", qryParam , " qryParam.length :", Object.keys(qryParam).length);
            bodyToSendArr.push(qryParam);
            //if (this.paramConfig.DEBUG_FLAG) console.log("---hostDef:", hostDef);//fuad
            if (bodyToSendArr.length != 0) {
                /*if ( (hostMapDef != null) &&  (hostMapDef.XSLT_SEND != null) && (hostMapDef.XSLT_SEND != "") )
                {
                  {
                    bodyToSend = xsltmap.mapData(bodyToSendArr, hostMapDef.XSLT_SEND);
      
                  }
                }
                else
                {*/
                bodyToSend = JSON.stringify(bodyToSendArr);
                //}
            }
            /*
            let hexout = hexdump(bodyToSend, 16) ;
            if (this.paramConfig.DEBUG_FLAG) console.log("hexout:",hexout);
            */
        }
        if ((actionsArr.PARAMETER_DATA != null) && (actionsArr.PARAMETER_DATA != "")) {
            let parameterData = actionsArr.PARAMETER_DATA;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("parameterData:", parameterData);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("parameterData.length:", parameterData.length);
            let array = parameterData.split(",");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                let arrayParam = elem.split("=");
                let param = arrayParam[0];
                param = param.trim();
                let paramData = arrayParam[1];
                paramData = paramData.trim();
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("paramData:", paramData);
                paramData = getElmValue(paramData, queryData);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("-----------------------------param:", param, " paramData:", paramData);
                if (parametersToSend == "")
                    parametersToSend = "?" + param + "=" + paramData;
                else
                    parametersToSend = parametersToSend + "&" + param + "=" + paramData;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("bodyToSend:", bodyToSend);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("parametersToSend:", parametersToSend);
        statusRec = this.performHttpPost(object, bodyToSend, parametersToSend, sendTo, queryData, rule, action, Trigger, hostDef, hostMapDef, headerParam);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("post performHttpPost: status:", statusRec);
        return statusRec;
    }
    performAction(object, qry, ptr, queryData, rule, rulesDef, Trigger, hostsArr, hostsMapArr) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("---performAction:rulesDef:", rulesDef);
        let status = 0;
        let statusRec = {
            status: 0,
            msg: ""
        };
        let actionPtr = rulesDef.actionPtrsArr[qry];
        if (typeof actionPtr !== "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("ptr:", ptr);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("actionPtr:", actionPtr);
            let i = ptr;
            let ptr2 = "";
            let ptr1 = actionPtr[i];
            if (typeof actionPtr[i + 1] !== "undefined")
                ptr2 = actionPtr[i + 1];
            else
                ptr2 = rulesDef.actionsArr.length;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("ptr1:", ptr1, " ptr2:", ptr2);
            let j = ptr1;
            let ruleID = rulesDef.actionsArr[j].RULE_ID;
            while ((j < ptr2) && (status == 0)) {
                if (ruleID != rulesDef.actionsArr[j].RULE_ID) {
                    break;
                }
                //if (this.paramConfig.DEBUG_FLAG) console.log("rulesDef.actionsArr:",rulesDef.actionsArr[j]);
                if ((rulesDef.actionsArr[j].ACTION_CODE == "SEND") || (rulesDef.actionsArr[j].ACTION_CODE == "SEND_WAIT")) {
                    statusRec = this.sendToServer(object, rulesDef.actionsArr[j], queryData, rule, rulesDef.actionsArr[j], Trigger, hostsArr, hostsMapArr);
                    status = statusRec.status;
                }
                j++;
            }
        }
        return statusRec;
    }
    checkRulesByTrigger(object, rulesDef, queryData, Trigger, routine_name, hostsArr, hostsMapArr) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRulesByTrigger:rulesDef:", rulesDef, " queryData:", queryData);
        let statusRec;
        function getFieldData(rule, queryData) {
            let fieldData = "";
            let array = rule.FIELD.split(".");
            console.log("array:", array);
            if (array.length > 1) {
                let orderFields = queryData["ORDER_FIELDS"];
                //console.log("orderFields:",orderFields)
                if (typeof orderFields !== "undefined") {
                    if (orderFields != "") {
                        let fieldsData = JSON.parse(orderFields);
                        //console.log("fieldsData:",fieldsData)
                        let keys = Object.keys(fieldsData);
                        console.log("keys:", keys);
                        for (let j = 0; j < keys.length; j++) {
                            console.log("addOrderFields key:", keys[j]);
                            if (keys[j] == array[0]) {
                                let objData = fieldsData[keys[j]];
                                //console.log("objData:", objData );
                                if (typeof (objData.length) == "undefined") // it is a form (object)
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
            return fieldData;
        }
        function checkRule(rule, queryData) {
            let ruleMatch = false;
            //if (this.paramConfig.DEBUG_FLAG) console.log("------rule:",rule, " queryData:", queryData);
            //let fieldData = queryData[rule.FIELD];
            let fieldData = getFieldData(rule, queryData);
            switch (rule.OPERATION) {
                case "=":
                    if (fieldData == rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<":
                    if (fieldData < rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<=":
                    if (fieldData <= rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case ">":
                    if (fieldData > rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case ">=":
                    if (fieldData >= rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<>":
                    if (fieldData != rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "INSTR":
                    if (rule.FIELD_VALUE.search(fieldData) != -1) {
                        ruleMatch = true;
                    }
                    break;
                default:
                    ruleMatch = false;
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test3:ruleMatch:", ruleMatch, " fieldData:", fieldData, " OPERATION:", rule.OPERATION, " FIELD_VALUE:", rule.FIELD_VALUE);
            return ruleMatch;
        }
        let status = 0;
        statusRec = {
            status: 0,
            msg: ""
        };
        let qry = queryData._QUERY;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("-------- _QUERY:", queryData._QUERY, " rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checking rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
        let rulePtr = rulesDef.rulePtrsArr[qry];
        if (this.paramConfig.DEBUG_FLAG)
            console.log("rulePtr:", rulePtr);
        if (typeof rulePtr !== "undefined") {
            //let actionPtr = rulesDef.rulePtrsArr[qry];
            //if (typeof actionPtr !== "undefined")
            {
                let result = false;
                let i = 0;
                //while ( (i<rulePtr.length) && (status == 0) )
                {
                    var ptr1 = rulePtr[i];
                    var ptr2 = rulePtr[rulePtr.length - 1];
                    // if (typeof rulePtr[i+1] !== "undefined")
                    //     var ptr2 = rulePtr[i+1];
                    // else
                    //     //var ptr2 = rulesDef.rulesArr.length
                    //     var ptr2 = ptr1+1
                    //console.log("ptr1:",ptr1, " ptr2:", ptr2);
                    var j = ptr1;
                    while (j <= ptr2) {
                        //console.log("--------------------rulesDef.rulesArr:", rulesDef.rulesArr[j].RULE_ID, " item:", rulesDef.rulesArr[j].ITEM);
                        var ruleMatch = checkRule(rulesDef.rulesArr[j], queryData);
                        if (ruleMatch == false)
                            break;
                        j++;
                    }
                    console.log("checkRulesByTrigger:Conditions ruleMatch:", ruleMatch, " for rule:", rulesDef.rulesArr[ptr1].RULE_ID);
                    if (ruleMatch == true) {
                        //statusRec = performAction(db,req, qry, i, queryData, rulesDef.rulesArr[ptr1],rulesDef, Trigger );
                        statusRec = this.performAction(object, qry, i, queryData, rulesDef.rulesArr[ptr1], rulesDef, Trigger, hostsArr, hostsMapArr);
                        status = statusRec.status;
                    }
                    //if (ruleMatch == false)
                    //  break;
                    i++;
                }
            }
        }
        return statusRec;
    }
    checkRules(object, rulesDef, actualResult, Trigger) {
        if (this.paramConfig.isCheckRules == false)
            return;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRules:", Trigger, " routine_name:", this.routine_name, " actualResult:", actualResult);
        if (Trigger == "POST_QUERY") {
            if (typeof actualResult.data[0] !== "undefined") {
                let transData = actualResult.data[0].data;
                for (let i = 0; i < transData.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:transData[i]:", transData[i], i);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:actualResult.data[0].query:", actualResult.data[0].query);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:actualResult.data[0] HF please", actualResult.data[0].data);
                    let queryData = transData[i];
                    queryData["_QUERY"] = actualResult.data[0].query;
                    //       if (this.paramConfig.DEBUG_FLAG) console.log("queryData:", queryData)
                    this.checkRulesByTrigger(object, rulesDef, queryData, Trigger, this.routine_name, this.hostsArr, this.hostsMapArr);
                }
            }
        }
        else if (Trigger == "PRE_QUERY") {
            if (typeof actualResult !== "undefined") {
                for (let i = 0; i < actualResult.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("actualResult[i]:", actualResult[i]);
                    let queryData = actualResult[i];
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("queryData:", queryData);
                    this.checkRulesByTrigger(object, rulesDef, queryData, Trigger, this.routine_name, this.hostsArr, this.hostsMapArr);
                }
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRules:Done", Trigger, " routine_name:", this.routine_name, " actualResult:", actualResult);
        return Trigger;
    }
    //////////////
    storeActionsPtrs(actions, rulesDef) {
        let currentQUERY_DEF = "";
        let currentRULE_ID = "";
        let actionPtrs = [];
        for (let i = 0; i < actions.length; i++) {
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
            if (this.paramConfig.DEBUG_FLAG)
                console.log("actionPtrs2:", actionPtrs);
        }
        //actionPtrs.push(i);
        rulesDef.actionPtrsArr[currentQUERY_DEF] = actionPtrs;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("rulesDef.actionPtrsArr:", rulesDef.actionPtrsArr);
    }
    storeRulesPtrs(rules, rulesDef) {
        let currentQUERY_DEF = "";
        let currentRULE_ID = "";
        let rulePtrs = [];
        for (let i = 0; i < rules.length; i++) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(rules[i].QUERY_DEF + " : " + rules[i].RULE_ID + "          " + currentQUERY_DEF + " : " + currentRULE_ID);
            if ((currentQUERY_DEF != rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(" not equal");
                if (i == 0)
                    rulePtrs.push(i);
                if (currentQUERY_DEF != "") {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("--storing rulePtrs2:", rulePtrs);
                    rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
                    rulePtrs = [];
                    rulePtrs.push(i);
                }
                currentQUERY_DEF = rules[i].QUERY_DEF;
                currentRULE_ID = rules[i].RULE_ID;
                //if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs1:",rulePtrs);
            }
            else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(" not equal2");
                rulePtrs.push(i);
                currentRULE_ID = rules[i].RULE_ID;
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("rulePtrs2:", rulePtrs);
            }
            else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID == rules[i].RULE_ID)) {
                //console.log(" equal3");
                rulePtrs.push(i);
                currentRULE_ID = rules[i].RULE_ID;
                //console.log("rulePtrs3:",rulePtrs);
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("rulePtrs2:", rulePtrs);
        }
        //rulePtrs.push(i);
        rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test3:rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
    }
    //////////////
    loadRules(object) {
        object.Body = [];
        let Page = "";
        let NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ITEM";
        NewVal["RULE_TRIGGER"] = "POST_QUERY";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:NewVal:", NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        object.addToBody(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ACTION";
        NewVal["RULE_TRIGGER"] = "POST_QUERY";
        object.addToBody(NewVal);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_HOST";
        NewVal["HOST_ID"] = "%";
        object.addToBody(NewVal);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_HOST_MAP";
        NewVal["HOST_ID"] = "%";
        NewVal["MAP_ID"] = "%";
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            this.rulesPostQueryDef.rulePtrsArr = [];
            this.rulesPostQueryDef.actionPtrsArr = [];
            this.storeRulesPtrs(result.data[0].data, this.rulesPostQueryDef);
            this.rulesPostQueryDef.rulesArr = result.data[0].data;
            this.storeActionsPtrs(result.data[1].data, this.rulesPostQueryDef);
            this.rulesPostQueryDef.actionsArr = result.data[1].data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef);
            this.hostsArr = result.data[2].data;
            this.hostsMapArr = result.data[3].data;
            //////////////
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
        //////////////////////////////
        //////////////
        object.Body = [];
        Page = "";
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ITEM";
        NewVal["RULE_TRIGGER"] = "PRE_QUERY";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:NewVal:", NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        object.addToBody(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ACTION";
        NewVal["RULE_TRIGGER"] = "PRE_QUERY";
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            //////////////
            this.rulesPreQueryDef.rulePtrsArr = [];
            this.rulesPreQueryDef.actionPtrsArr = [];
            this.storeRulesPtrs(result.data[0].data, this.rulesPreQueryDef);
            this.rulesPreQueryDef.rulesArr = result.data[0].data;
            this.storeActionsPtrs(result.data[1].data, this.rulesPreQueryDef);
            this.rulesPreQueryDef.actionsArr = result.data[1].data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPreQueryDef", this.rulesPreQueryDef);
            //////////////
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
    }
    fetchLookups(object, lookupArrDef) {
        let Body = [];
        for (let i = 0; i < lookupArrDef.length; i++) {
            let NewVal = {};
            NewVal["_QUERY"] = "GET_STMT";
            NewVal["_STMT"] = lookupArrDef[i].statment;
            Body = this.addToBody(NewVal, Body);
        }
        let Page = "";
        this.post(object, Page, Body).subscribe(result => {
            for (let i = 0; i < lookupArrDef.length; i++) {
                //if (this.paramConfig.DEBUG_FLAG) console.log("result.data[i].data:",result.data[i].data[0])
                if (typeof result.data[i] !== "undefined") {
                    if (typeof result.data[i].data[0] !== "undefined") {
                        //add empty record at begining of the array for the LOV for insert new record in a grid work properly
                        let keys = Object.keys(result.data[i].data[0]);
                        let emptyRec = {};
                        let hasSpace = false;
                        // let codeTxt = keys[0];
                        // let dataSet = Object.assign([], result.data[i].data);
                        // dataSet.find(elem =>{
                        //   //console.log("elm:",elem);
                        //   if (elem[codeTxt].trim() == ""){
                        //     hasSpace = true;
                        //     return true;
                        //   }
                        // });
                        if (!hasSpace) {
                            for (let k = 0; k < keys.length; k++) {
                                //if (this.paramConfig.DEBUG_FLAG) console.log("[keys[k]:", keys[k]);
                                //console.log("[keys[k]:", keys[k]);
                                emptyRec[keys[k]] = "";
                                //object.primarKeyReadOnlyArr[keys[k]] = value;
                            }
                            //if (this.paramConfig.DEBUG_FLAG) console.log("emptyRec:",emptyRec)
                            //console.log("emptyRec:",emptyRec);
                            result.data[i].data.splice(0, 0, emptyRec);
                        }
                    }
                    object[lookupArrDef[i].lkpArrName] = result.data[i].data;
                    //if (this.paramConfig.DEBUG_FLAG) console.log("lookupArrDef[i].lkpArrName:", lookupArrDef[i].lkpArrName, object[lookupArrDef[i].lkpArrName])
                }
            }
            if (typeof object.fetchLookupsCallBack !== "undefined")
                object.fetchLookupsCallBack();
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    performPost(object, fn) {
        let Page = "";
        this.post(object, Page, object.Body).subscribe(result => {
            fn(object, result);
            object.Body = [];
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    setComponentConfig(componentConfig, screenConfig) {
        let keys = Object.keys(componentConfig);
        for (let i = 0; i < keys.length; i++) {
            //if (this.paramConfig.DEBUG_FLAG) console.log( keys[i] + " " + componentConfig[ keys[i] ] ) ;
            if (componentConfig[keys[i]] != null) {
                screenConfig[keys[i]] = componentConfig[keys[i]];
            }
        }
        //if (this.paramConfig.DEBUG_FLAG) console.log(screenConfig);
        return screenConfig;
    }
    getRoutineAuth(menu, routine_name) {
        let i = 0;
        let routineAuth;
        let found = false;
        if (typeof menu !== "undefined") {
            while (i < menu.length) {
                let j = 0;
                while (j < menu[i].children.length) {
                    if (menu[i].children[j].choice == routine_name) {
                        routineAuth = menu[i].children[j];
                        found = true;
                        break;
                    }
                    j++;
                }
                if (found)
                    break;
                i++;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("routine_name:", routine_name, "routineAuth:", routineAuth, " menu:", menu);
        return (routineAuth);
    }
    actOnParamConfig(object, routine_name) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("routine_name:" + routine_name);
        let paramConfig = getParamConfig();
        let menu = paramConfig.menu;
        let routineAuth = this.getRoutineAuth(menu, routine_name);
        if (typeof routineAuth !== "undefined") {
            object.title = routineAuth.title + " (" + routineAuth.routineVer + ")";
            object.routineAuth = routineAuth;
            this.routine_name = routine_name;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.title:" + object.title);
        }
        else if (routine_name == "DSPEKYC") {
            this.routine_name = routine_name;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("this.routine_name:" + this.routine_name);
    }
    showErrorMsg(object, serverError) {
        let errorMsg = "";
        if (typeof serverError.error == "undefined") {
            errorMsg = this.standardErrorMsg + " : " + serverError;
        }
        else
            errorMsg = this.standardErrorMsg + " : " + serverError.error.error;
        let dialogStruc = {
            msg: errorMsg,
            title: "Error",
            info: null,
            object: object,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    sendGetCommand(url, page) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" inside sendGetCommand");
        let theURL = url + page;
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" inside sendGetCommand:theURL:", theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        if (this.paramConfig.DEBUG_FLAG)
            console.log("sendGetCommand theURL:" + theURL);
        return this.http
            .get(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("server error:", err.message);
            this.showNotification("error", "error:" + err.message);
            return throwError(err);
        }), map(response => response), tap(() => this.loading = false));
    }
    postCommand(page, url, Body) {
        //if (this.paramConfig.DEBUG_FLAG) console.log(" inside postCommand")
        let theURL = url; //this.EPMENG_URL + page;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        if (this.paramConfig.DEBUG_FLAG)
            console.log("postCommand theURL:" + theURL);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            //if (this.paramConfig.DEBUG_FLAG) console.log("server error:", err.message)
            this.showNotification("error", "error:" + err.message);
            return throwError(err);
        }), map(response => response), tap(() => this.loading = false));
    }
    CapitalizeFirst(str) {
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str;
    }
    CapitalizeTitle(fieldName) {
        let array = fieldName.split("_");
        if (this.paramConfig.DEBUG_FLAG)
            console.log("array:", array);
        for (let i = 0; i < array.length; i++)
            array[i] = this.CapitalizeFirst(array[i]);
        fieldName = array.join(" ");
        return fieldName;
    }
    prepareLookup(fieldName, paramConfig) {
        let lkpArrName = "lkpArr" + fieldName;
        let lkpDef;
        if (fieldName == "ASSIGNEE") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("starServices.sessionParams.USER_INFO:", this.sessionParams.USER_INFO);
            let team = this.sessionParams.USER_INFO.TEAM;
            lkpDef = { "statment": "select USERNAME CODE, FULLNAME CODETEXT_LANG from  ADM_USER_INFORMATION where TEAM = '" + team + "' ",
                "lkpArrName": lkpArrName, "fieldName": fieldName };
        }
        else {
            lkpDef = { "statment": "SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME = '" + fieldName + "' and LANGUAGE_NAME = '" + paramConfig.userLang + "' order by CODETEXT_LANG  ",
                "lkpArrName": lkpArrName, "fieldName": fieldName };
        }
        return lkpDef;
    }
    getAssigneeSelect(object, assigneeType) {
        let selectStmt;
        if (assigneeType == "TEAM") {
            selectStmt = "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TEAM' and LANGUAGE_NAME = '" + object.paramConfig.userLang + "'  order by CODETEXT_LANG ";
        }
        else if (assigneeType == "PERSON") {
            selectStmt = "SELECT USERNAME  CODE, FULLNAME CODETEXT_LANG FROM ADM_USER_INFORMATION WHERE TEAM ='" + object.starServices.sessionParams.USER_INFO.TEAM + "' order by CODETEXT_LANG ";
        }
        else if (assigneeType == "NETWORK") {
            selectStmt = "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='EXCH_SYST' and LANGUAGE_NAME = '" + object.paramConfig.userLang + "' order by CODETEXT_LANG";
        }
        return selectStmt;
    }
    getFirstWeekDay(object, value) {
        let valueDate;
        let firstWeekDay = "Monday";
        if (typeof object.paramConfig.firstWeekDay !== "undefined") {
            firstWeekDay = object.paramConfig.firstWeekDay;
        }
        valueDate = firstDayInWeek(new Date(value), Day[firstWeekDay]);
        valueDate = getDate(valueDate);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("valueDate:", valueDate);
        return valueDate;
    }
    setRTL() {
        let paramConfig = getParamConfig();
        let language = paramConfig.userLang;
        language = language.toLowerCase();
        let parg = document.getElementById("mainpage");
        const svc = this.messages;
        //svc.language = svc.language === 'es' ? 'he' : 'es';
        //svc.language = language;
        //if (this.paramConfig.DEBUG_FLAG) console.log("setRTL:language:", language)
        if (language == "ar") {
            parg.dir = "rtl";
            this.messages.notify(true);
        }
        else {
            parg.dir = "ltr";
            this.messages.notify(false);
        }
    }
    loadLanguageOld(language) {
        language = !language ? "en" : language;
        let file = "assets/lang/" + language + ".json";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:file,", file);
        this.http.get(file).subscribe(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:data,", data);
            let paramConfig = {
                "Name": "titles",
                "Val": data
            };
            setParamConfig(paramConfig);
            this.paramConfig = getParamConfig();
            paramConfig = {
                "Name": "userLang",
                "Val": language.toUpperCase()
            };
            setParamConfig(paramConfig);
            this.setRTL();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("document.documentElement.dir:", document.documentElement.dir == 'ltr');
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
            //alert ('error:' + err.message);
            //this.showErrorMsg(object, err);
        });
    }
    loadLanguage(language) {
        language = !language ? "en" : language;
        let file = "lang/" + language + ".json";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:file,", file);
        let page = "?getfile=" + file;
        page = this.checkDBLoc(page);
        page = encodeURI(page);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:page,", page);
        this.sendGetCommand(this.SERVER_URL, page).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:result,", result);
            let data = result.data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:data,", data);
            let paramConfig = {
                "Name": "titles",
                "Val": data
            };
            setParamConfig(paramConfig);
            this.paramConfig = getParamConfig();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("this.paramConfig.titles,", this.paramConfig.titles);
            paramConfig = {
                "Name": "userLang",
                "Val": language.toUpperCase()
            };
            setParamConfig(paramConfig);
            this.setRTL();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("document.documentElement.dir:", document.documentElement.dir == 'ltr');
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
            //alert ('error:' + err.message);
            //this.showErrorMsg(object, err);
        });
    }
    getNLS(params, id, text) {
        //if (this.paramConfig.DEBUG_FLAG) console.log("getNLS:id,",id);
        if (typeof this.paramConfig !== "undefined") {
            if (typeof this.paramConfig.titles !== "undefined") {
                let array = id.split(".");
                if (array.length == 3) {
                    if (typeof this.paramConfig.titles[array[0]] !== "undefined")
                        if (typeof this.paramConfig.titles[array[0]] !== "undefined")
                            if (typeof this.paramConfig.titles[array[0]][array[1]] !== "undefined") {
                                if (typeof this.paramConfig.titles[array[0]][array[1]][array[2]] !== "undefined")
                                    if (this.paramConfig.titles[array[0]][array[1]][array[2]] != "")
                                        text = this.paramConfig.titles[array[0]][array[1]][array[2]];
                            }
                    //if (this.paramConfig.DEBUG_FLAG) console.log("getNLS:text,",text);
                }
                else {
                    let nls_title = this.paramConfig.titles[id];
                    if (typeof nls_title !== "undefined") {
                        text = nls_title;
                    }
                }
            }
        }
        if (params.length > 0) {
            let strArray = text.split("##");
            text = "";
            for (let i = 0; i < strArray.length; i++) {
                if (typeof params[i] != "undefined")
                    text = text + strArray[i] + params[i];
                else
                    text = text + strArray[i];
            }
            console.log(text);
        }
        return text;
    }
    loadStatements(statements) {
        if (statements == "")
            statements = "statements.json";
        let page = "?getfile=" + statements;
        page = this.checkDBLoc(page);
        page = encodeURI(page);
        this.sendGetCommand(this.SERVER_URL, page).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:result,", result);
            let data = result.data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:data,", data);
            let lkpArrQUERY_DEF = [];
            Object.keys(data).forEach(function (key) {
                let value = data[key];
                let rec = {
                    CODE: key,
                    CODETEXT_LANG: key,
                    statement: value
                };
                lkpArrQUERY_DEF.push(rec);
            });
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:data,", data);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:lkpArrQUERY_DEF,", lkpArrQUERY_DEF);
            let paramConfig = {
                "Name": "statements",
                "Val": data
            };
            setParamConfig(paramConfig);
            paramConfig = {
                "Name": "lkpArrQUERY_DEF",
                "Val": lkpArrQUERY_DEF
            };
            setParamConfig(paramConfig);
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
        });
    }
    loadStatementsOld() {
        let file = "assets/" + "statements.json";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadStatements:file,", file);
        this.http.get(file).subscribe(data => {
            let lkpArrQUERY_DEF = [];
            Object.keys(data).forEach(function (key) {
                let value = data[key];
                let rec = {
                    CODE: key,
                    CODETEXT_LANG: key,
                    statement: value
                };
                lkpArrQUERY_DEF.push(rec);
            });
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:data,", data);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:lkpArrQUERY_DEF,", lkpArrQUERY_DEF);
            let paramConfig = {
                "Name": "statements",
                "Val": data
            };
            setParamConfig(paramConfig);
            paramConfig = {
                "Name": "lkpArrQUERY_DEF",
                "Val": lkpArrQUERY_DEF
            };
            setParamConfig(paramConfig);
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
        });
    }
    handleFetchedModules(object, data) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log('fetchedModules : ', data[0].data);
        //this.items[0].items =  data;
        object.items = [
            {
                text: 'Select Module',
                items: data[0].data
            }
        ];
        object.setModuleName(object.currentMenu);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.items:", object.items, "data[0].data.length:", data[0].data.length);
        if (data[0].data.length == 1) {
            object.showModuleSelection = false;
        }
    }
    fetchMenu(object, handleFetchedData) {
        if ((this.StrAuth == "") || (typeof this.StrAuth === "undefined"))
            return;
        let Page = "";
        this.post(this, Page, object.Body).subscribe(result => {
            handleFetchedData(object, result.data);
            object.Body = [];
        }, err => {
            alert('error:' + err.message);
        });
    }
    setModuleItems(object) {
        if (!object.staticMenu) {
            object.Body = [];
            let NewVal = {
                MENU: 'MAIN',
                CHOICES: object.paramConfig.licensedModules.toUpperCase(),
                LANGUAGE_NAME: object.paramConfig.userLang.toUpperCase(),
            };
            NewVal["_QUERY"] = "GET_ALLOWED_MODULES";
            object.addToBody(NewVal);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("--------object.Body :", object.Body);
            this.fetchMenu(object, this.handleFetchedModules);
        }
    }
    stateChange(object, data) {
        //public stateChange(object:any, data: Array<PanelBarItemModel>): boolean {
        if (object.staticMenu == true) {
            const focusedEvent = data.items.filter(item => item.focused === true)[0];
            if (this.paramConfig.DEBUG_FLAG)
                console.log(" in stateChange : " + focusedEvent.id);
            if (this.paramConfig.DEBUG_FLAG)
                console.log(focusedEvent);
            if (focusedEvent.title == "Formatting Flow") {
                object.showPanelbar = false;
            }
            console.log("object.isPhonePortrait:", object.isPhonePortrait, object.showPanelbar);
            //this.selectedId = focusedEvent.id;
            //this.router.navigate(['/' + focusedEvent.id]);
            //this.starServices.setRTL();
            return true; //Fuad check if it should return false or true
        }
        const focusedEvent = data.items.filter(item => item.focused === true)[0];
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" in stateChange : ", focusedEvent.id);
        let routineAuth = this.getRoutineAuth(object.menu, focusedEvent.id);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" in stateChange : ", focusedEvent.id, "routineAuth :", routineAuth);
        if (focusedEvent.id == "PRVFLOW")
            object.showPanelbar = false;
        if (typeof routineAuth !== "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(" in stateChange : routineAuth.authLevel:" + routineAuth.authLevel);
            if (routineAuth.authLevel == 0) {
                let dialogStruc = {
                    msg: this.noAccessMsg,
                    title: "Warning",
                    info: null,
                    object: this,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return false;
            }
            else {
                object.selectedId = focusedEvent.id;
                this.sessionParams["PrvUserFlow"] = "";
                this.sessionParams["PrvUserCDR"] = "";
                if (object.selectedId == "PRVFLOW") {
                    this.sessionParams["PrvUserFlow"] = "PRV_BLD";
                    this.sessionParams["PrvUserCDR"] = "PRV_CDR";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CCMCAT") {
                    this.sessionParams["PrvUserFlow"] = "CRC_CAT";
                    this.sessionParams["PrvUserCDR"] = "CRC_USER_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CCMGRP") {
                    this.sessionParams["PrvUserFlow"] = "CRC_GROUP";
                    this.sessionParams["PrvUserCDR"] = "CRC_GROUP_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CMGCAT") {
                    this.sessionParams["PrvUserFlow"] = "CAM_CAT";
                    this.sessionParams["PrvUserCDR"] = "CAM_USER_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CMGGRP") {
                    this.sessionParams["PrvUserFlow"] = "CAM_GROUP";
                    this.sessionParams["PrvUserCDR"] = "CAM_GROUP_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "BILLING") {
                    this.sessionParams["PrvUserFlow"] = "BILLING";
                    this.sessionParams["PrvUserCDR"] = "BILLING_CDR";
                    object.showPanelbar = false;
                }
                if (object.selectedId.startsWith("PORTAL_")) //Fuad : RND
                 {
                    this.sessionParams["PORTAL_FORM"] = focusedEvent.id;
                    focusedEvent.id = 'DSPPORTAL';
                }
                //FUAD: check if below code till else is needed
                if (object.router.routerState.snapshot.url == ('/' + focusedEvent.id)) {
                    object.router.navigateByUrl('', { skipLocationChange: true }).then(() => object.router.navigate(['/' + focusedEvent.id], { skipLocationChange: true, replaceUrl: true, preserveFragment: false }));
                }
                else
                    object.router.navigate(['/' + focusedEvent.id], { skipLocationChange: true, replaceUrl: true, preserveFragment: false });
                if (object.isPhonePortrait) {
                    object.showPanelbar = false;
                }
                //this.starServices.setRTL();
                //this.showPanelbar = false;
            }
        }
        return false;
    }
    setPanelBar(object) {
        if (!object.staticMenu) {
            object.Body = [];
            let NewVal = {
                MENU: object.currentMenu.toUpperCase(),
                USERNAME: object.starServices.sessionParams.USERNAME.toUpperCase(),
                LANGUAGE_NAME: object.paramConfig.userLang.toUpperCase()
            };
            NewVal["_QUERY"] = "GET_MENU_ROUTINES";
            object.addToBody(NewVal);
            let NewVal1 = {
                MENU: "",
                USERNAME: object.starServices.sessionParams.USERNAME.toUpperCase()
            };
            NewVal1["_QUERY"] = "GET_ROUTINES_AUTHORITY";
            object.addToBody(NewVal1);
            this.fetchMenu(object, this.handleFetchedPanelBar);
        }
    }
    handleFetchedPanelBar(object, data) {
        function checkAuthData(routine_name, authData) {
            let i = 0;
            let routineAuth;
            while (i < authData.length) {
                if (authData[i].ROUTINE_NAME == routine_name) {
                    routineAuth = authData[i];
                    break;
                }
                i++;
            }
            return routineAuth;
        }
        function formatData(arr, authData) {
            let menu = [];
            let children = [];
            for (let i = 0; i < arr.length; i++) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("arr[i]:", arr[i]);
                let type = arr[i].choice_type.charAt(0);
                if (type == "M") {
                    if (children.length != 0) {
                        let item = {
                            title: menuItem.title,
                            choice: menuItem.choice,
                            children: children
                        };
                        menu.push(item);
                        children = [];
                    }
                    var menuItem = {
                        title: arr[i].text,
                        choice: arr[i].choice
                    };
                    //menu.push(item);
                }
                else if (type == "R") {
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("authData:", authData, "arr[i]:", arr[i]);
                    let routineAuth = checkAuthData(arr[i].choice, authData);
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("arr[i].choice:" + arr[i].choice + "  routineAuth.DISP_FLAG:" + routineAuth.DISP_FLAG + " routineAuth.AUTHLEVEL :" + routineAuth.AUTHLEVEL);
                    if (routineAuth.DISP_FLAG != "N") // && (routineAuth.AUTHLEVEL != 0) )
                     {
                        let routineItem = {
                            title: arr[i].text,
                            choice: arr[i].choice,
                            authLevel: routineAuth.AUTHLEVEL,
                            routineDesc: routineAuth.ROUTINE_DESC,
                            routineVer: routineAuth.ROUT_VER,
                            routerLink: "/" + arr[i].choice
                        };
                        children.push(routineItem);
                    }
                    //if (this.paramConfig.DEBUG_FLAG) console.log("---children");
                    //if (this.paramConfig.DEBUG_FLAG) console.log(children);
                }
            }
            if (children.length != 0) {
                let item = {
                    title: menuItem.title,
                    choice: menuItem.choice,
                    children: children
                };
                menu.push(item);
                children = [];
            }
            return menu;
        }
        object.menu = formatData(data[0].data, data[1].data);
        object.panelItems = object.menu;
        let paramConfig = {
            "Name": "menu",
            "Val": object.menu
        };
        setParamConfig(paramConfig);
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    beginTrans() {
        this.commitBody = [];
        this.inTrans = true;
    }
    endTrans(object, commit) {
        let Page = "&_trans=Y";
        let tableInfo;
        //console.log("endTrans:", this.commitBody);
        if (commit && this.commitBody.length != 0) {
            return new Promise(resolve => {
                this.post(this, Page, this.commitBody).subscribe(result => {
                    this.commitBody = [];
                    this.inTrans = false;
                    tableInfo = result.data[0].data;
                    return resolve(tableInfo);
                }, err => {
                    object.FORM_TRIGGER_FAILURE = true;
                    this.commitBody = [];
                    this.inTrans = false;
                    //alert('error:' + err.message);
                    this.showErrorMsg(object, err);
                    return resolve(tableInfo);
                });
            });
        }
        else {
            this.commitBody = [];
            this.inTrans = false;
        }
    }
    // public addToBody(NewVal) {
    //   this.Body.push(NewVal);
    // }
    execSQLBody(object, Body, DBLoc) {
        function getFirstWord(str) {
            let myArray = str.split("_");
            return myArray[0];
        }
        object.FORM_TRIGGER_FAILURE = false;
        let Page = "&_trans=N";
        if (DBLoc != "")
            Page = Page + "&DBLoc=" + DBLoc;
        let tableInfo;
        object.NOTFOUND = false;
        //console.log("Body:",Body);
        if (this.inTrans) {
            let firstWord = getFirstWord(Body[0]._QUERY).toUpperCase();
            //console.log("commit:firstWord:", firstWord, Body);
            let isCommitCommand = this.commitCommands.includes(firstWord);
            if (isCommitCommand) {
                this.commitBody.push(Body[0]);
                return tableInfo;
            }
        }
        return new Promise(resolve => {
            this.post(this, Page, Body).subscribe(result => {
                //console.log ("execSQLBody 3", result);
                //console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data[0])
                //console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data)
                tableInfo = result.data;
                // if (result.data.length == 0)
                //   object.NOTFOUND = true;
                return resolve(tableInfo);
            }, err => {
                object.FORM_TRIGGER_FAILURE = true;
                alert('error:' + err.message);
                return resolve(tableInfo);
            });
        });
    }
    execSQL(object, sqlStmt) {
        function getFirstWord(str) {
            str = str.trim();
            let spaceIndex = str.indexOf(' ');
            return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
        }
        object.FORM_TRIGGER_FAILURE = false;
        let Page = "&_trans=N";
        this.Body = [];
        let NewVal = {};
        NewVal["_QUERY"] = "EXECSQL";
        NewVal["_STMT"] = sqlStmt;
        let tableInfo;
        object.NOTFOUND = false;
        if (this.inTrans) {
            let firstWord = getFirstWord(sqlStmt).toUpperCase();
            //console.log("commit:firstWord:", firstWord, sqlStmt);
            let isCommitCommand = this.commitCommands.includes(firstWord);
            //console.log("execSQL: inTrans:", NewVal);
            if (isCommitCommand) {
                this.commitBody.push(NewVal);
                return tableInfo;
            }
        }
        this.Body = this.addToBody(NewVal, this.Body);
        return new Promise(resolve => {
            this.post(this, Page, this.Body).subscribe(result => {
                this.Body = [];
                //console.log("execSQL:sqlStmt:result.data[0]:", sqlStmt, result.data[0])
                tableInfo = result.data[0].data;
                if (result.data[0].rowCount == 0)
                    object.NOTFOUND = true;
                return resolve(tableInfo);
            }, err => {
                object.FORM_TRIGGER_FAILURE = true;
                alert('error:' + err.message);
                return resolve(tableInfo);
            });
        });
    }
    ////////
    att_img_getFileLink(field_data, object) {
        let fileLink = "";
        if ((field_data != "") && (field_data != "[]") && (field_data != null)) {
            field_data = JSON.parse(field_data);
            //console.log("getFileLink:field_data:", field_data)
            fileLink = object.AttDwnUrl + encodeURI(field_data[0].name);
            //console.log("getFileLink:fileLink:", fileLink)
        }
        return fileLink;
    }
    att_img_getAtt(data, object) {
        let atts = "";
        //console.log("getAtt_data:", data);
        if ((data != "") && (data != "[]") && (data != null)) {
            let vals = [{ name: "",
                    size: "" }
            ];
            vals = JSON.parse(data);
            //console.log("getAtt_data:", vals);
            vals.forEach(val => {
                //console.log("val:", val)
                atts = atts + "<" + val.name + " Size:" + val.size + ">";
            });
        }
        return atts;
    }
    att_img_populateArrs(formGroup, object) {
        for (let i = 0; i < object.att_arr.length; i++) {
            if (formGroup[object.att_arr[i]] != "")
                object.myFiles[object.att_arr[i]] = JSON.parse(formGroup[object.att_arr[i]]);
        }
        for (let i = 0; i < object.img_arr.length; i++) {
            if (formGroup[object.img_arr[i]] != "")
                object.myFiles[object.img_arr[i]] = JSON.parse(formGroup[object.img_arr[i]]);
        }
    }
    att_img_form_openUploadimage(field_id, object) {
        //object.uploadimage = true;
        console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id]);
        let myFiles = [];
        if (typeof object.myFiles[field_id] != "undefined") {
            myFiles = object.myFiles[field_id];
        }
        let filesDeleted = [];
        if (typeof object.filesDeleted[field_id] != "undefined") {
            filesDeleted = object.filesDeleted[field_id];
        }
        let hideOthers = false;
        if (typeof object.disableUpload != "undefined") {
            hideOthers = object.disableUpload;
        }
        let imageID = field_id;
        var masterParams = {
            "action": "upload",
            "imageID": imageID,
            "myFiles": myFiles,
            "filesDeleted": filesDeleted,
            "hideOthers": hideOthers
        };
        object.DSP_UPLOADConfig = new componentConfigDef();
        object.DSP_UPLOADConfig.masterParams = masterParams;
        console.log("object.DSP_UPLOADConfig.masterParams:", object.DSP_UPLOADConfig.masterParams);
    }
    callGetSaveAttachemts(action, data, object) {
        //console.log("callSaveAttachemts:myFiles:",action,  object.myFiles)
        var masterParams = {
            "action": action,
            "att_arr": object.att_arr,
            "img_arr": object.img_arr,
            "myFiles": object.myFiles,
            "filesDeleted": object.filesDeleted,
            "data": data
        };
        object.DSP_UPLOADConfig = new componentConfigDef();
        object.DSP_UPLOADConfig.masterParams = masterParams;
    }
    async att_img_saveFormCompletedHandler(value, object) {
        //console.log("att_img_saveFormCompletedHandler:value", value);
        let field_id = value.field_id;
        object.myFiles[field_id] = value.myFiles;
        object.filesDeleted[field_id] = value.filesDeleted;
        //console.log("object.myFiles[field_id]:", object.myFiles[field_id])
        let JSONVal = JSON.stringify(object.myFiles[field_id]);
        if (JSONVal == "[]")
            JSONVal = "";
        object.form.value[field_id] = JSONVal;
        object.form.patchValue({ [field_id]: JSONVal });
        if (typeof object.att_img_saveFormCompleted != "undefined") {
            let NewVal = [];
            NewVal.push(field_id);
            object.att_img_saveFormCompleted.apply(object, NewVal);
        }
    }
    att_img_saveGridCompletedHandler(value, object) {
        //console.log("att_img_saveGridCompletedHandler:value", value);
        let field_id = value.field_id;
        object.myFiles[field_id] = value.myFiles;
        object.filesDeleted[field_id] = value.filesDeleted;
        //console.log("object.myFiles[field_id]:", object.myFiles[field_id])
        let JSONVal = JSON.stringify(object.myFiles[field_id]);
        if (JSONVal == "[]")
            JSONVal = "";
        object.formGroup.patchValue({ [field_id]: JSONVal });
        object.formGroup.markAsDirty();
        //console.log("att_img_saveGridCompletedHandler:object.formGroup.value", object.formGroup.value);
        object.uploadimage = false;
    }
    async att_img_grid_openUploadimage(field_id, object) {
        if (!object.componentConfig.enabled)
            return;
        await object.starServices.sleep(300);
        //console.log("att_img_grid_openUploadimage:object.formGroup:", object.formGroup)
        object.uploadimage = true;
        if (typeof object.formGroup != "undefined") {
            object.myFiles[field_id] = [];
            object.starServices.att_img_populateArrs(object.formGroup.value, object);
            //console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id])
            let myFiles = [];
            if (typeof object.myFiles[field_id] != "undefined") {
                myFiles = object.myFiles[field_id];
            }
            let filesDeleted = [];
            if (typeof object.filesDeleted[field_id] != "undefined") {
                filesDeleted = object.filesDeleted[field_id];
            }
            let imageID = field_id;
            var masterParams = {
                "action": "upload",
                "imageID": imageID,
                "myFiles": myFiles,
                "filesDeleted": filesDeleted
            };
            object.DSP_UPLOADConfig = new componentConfigDef();
            object.DSP_UPLOADConfig.masterParams = masterParams;
        }
    }
    addNewCode(object, CODENAME) {
        object.grid_som_tabs_codes = new tabsCodes();
        object.grid_som_tabs_codes['CODENAME'] = CODENAME; // for retrieve data
        object.SOM_TABS_CODESConfig = new componentConfigDef();
        let masterParams = {
            action: "ADD",
            CODENAME: CODENAME,
            CODE: object.filterCode,
            CODETEXT_LANG: object.filterCode
        };
        object.SOM_TABS_CODESConfig.masterParams = masterParams; // For add new record
        object.showCodeDetails = true;
    }
    setIdOrder(object, idField, orderField) {
        let ID = 1;
        let ORDER = 1;
        let GridData = object.grid.data;
        if (typeof GridData.data !== "undefined") {
            for (let i = 0; i < GridData.data.length; i++) {
                if (GridData.data[i][idField] >= ID)
                    ID = parseInt(GridData.data[i][idField]) + 1;
                if (GridData.data[i][orderField] >= ORDER)
                    ORDER = parseInt(GridData.data[i][orderField]) + 1;
            }
        }
        let values = {
            [idField]: ID,
            [orderField]: ORDER
        };
        console.log("setInitialValues:values:", values);
        object.formGroup.patchValue(values);
    }
    rowReorder(object, orderField, e) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.draggedRows[0].rowIndex);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.dropPosition);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.dropTargetRow.rowIndex);
        let dataItem = e.draggedRows[0].dataItem;
        let GridData;
        GridData = object.grid.data;
        if (e.dropPosition == "after") {
            GridData.data.splice(e.dropTargetRow.rowIndex + 1, 0, dataItem);
            //Remove draggedRows
            GridData.data = GridData.data.filter(function (dataItem, index) {
                return index !== e.draggedRows[0].rowIndex;
            });
        }
        else if (e.dropPosition == "before") {
            //Remove draggedRows
            GridData.data = GridData.data.filter(function (dataItem, index) {
                return index !== e.draggedRows[0].rowIndex;
            });
            GridData.data.splice(e.dropTargetRow.rowIndex, 0, dataItem);
        }
        //write order field
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:GridData.data:", GridData.data);
        for (let i = 0; i < GridData.data.length; i++) {
            GridData.data[i][orderField] = i + 1;
            GridData.data[i]._QUERY = object.updateCMD;
        }
        object.saveChanges(object.grid);
    }
    handleFilterCode(object, CODE) {
        if (object.starServices.sessionParams.USER_INFO.GROUPNAME == "SYSADM") {
            object.filterCode = CODE;
        }
    }
    hideNoValidLicense() {
        const collection = document.getElementsByTagName("div");
        //console.log ("checking:collection:",collection);
        for (let i = 0; i < collection.length; i++) {
            let innerHTML = collection[i].innerHTML;
            //let result = innerHTML.includes("ng-reflect-ng-style");
            //let result = innerHTML.includes("display: flex;");
            let result = innerHTML.includes("No valid license found");
            //console.log ("checking:result:",result);
            if (result) {
                result = innerHTML.includes("No valid license found");
                if (result) {
                    //console.log ("checking:innerHTML:",result,innerHTML);
                    collection[i].style.setProperty('display', 'none');
                }
            }
        }
        //console.log ("collection:", collection.length, collection[35])
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, deps: [{ token: i1.NotificationService }, { token: i2.DialogService }, { token: i3.HttpClient }, { token: i4.MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.NotificationService }, { type: i2.DialogService }, { type: i3.HttpClient }, { type: i4.MessageService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHM0UsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLG1DQUFtQztBQUNuQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQStCLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0YsT0FBTyxFQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFjLE1BQU0sMkJBQTJCLENBQUM7QUFFcEYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFVeEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUErQjtJQXFEN0QsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTEosd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEs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QUFJO1FBQ2pDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0YsQ0FBQztJQUNNLGtCQUFrQjtRQUVyQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsa0RBQWtEO1FBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDcEMsSUFBSSxTQUFTLEdBQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM1Qyx5REFBeUQ7WUFDekQsb0RBQW9EO1lBQ3BELElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUMxRCwwQ0FBMEM7WUFDMUMsSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDVixNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE1BQU0sRUFBQyxDQUFDO29CQUNWLHVEQUF1RDtvQkFDdkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBRUwsQ0FBQztRQUVILENBQUM7UUFDRCxnRUFBZ0U7SUFDcEUsQ0FBQzsrR0E5OUhXLFlBQVk7bUhBQVosWUFBWSxjQUZYLE1BQU07OzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgR3JpZERhdGFSZXN1bHQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuaW1wb3J0IHsgdG9PRGF0YVN0cmluZyB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1kYXRhLXF1ZXJ5JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vL2ltcG9ydCB7IEFueUFSZWNvcmQgfSBmcm9tICdkbnMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgIERpYWxvZ1NlcnZpY2UsICBEaWFsb2dSZWYsICBEaWFsb2dDbG9zZVJlc3VsdH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuaW1wb3J0IHtEYXksIGZpcnN0RGF5SW5XZWVrLCBnZXREYXRlLCB0b0xvY2FsRGF0ZX0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGUtbWF0aCc7XHJcbmltcG9ydCB7IFBhbmVsQmFySXRlbU1vZGVsICwgUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0JztcclxuaW1wb3J0IHtNZDV9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgdGFic0NvZGVzLCBjb21wb25lbnRDb25maWdEZWYgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbDEwbic7XHJcbmltcG9ydCB7IE15TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL215LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGdldFBhcmFtQ29uZmlnKCk6YW55O1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHNldFBhcmFtQ29uZmlnKHZhcjEpOmFueTtcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gIHB1YmxpYyBwYXJhbUNvbmZpZztcclxuICBwcml2YXRlIGNyZWF0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwcml2YXRlIHVwZGF0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwcml2YXRlIGRlbGV0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICBwdWJsaWMgcm91dGluZV9uYW1lID0gXCJcIjtcclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNNc2cgPSBcIlNjcmVlbiBjaGFuZ2VkLCBhcmUgeW91IHN1cmUgeW91IHRvIG5hdmlnYXRlP1wiO1xyXG4gIHB1YmxpYyBkZWxldGVEZXRhaWxNc2cgPSBcIkNhbiBub3QgZGVsZXRlIGFzIGRldGFpbCBoYXMgZGF0YS5cIjtcclxuICBwdWJsaWMgcGxlYXNlQ29uZmlybU1zZyA9IFwiUGxlYXNlIGNvbmZpcm1cIjtcclxuICBwdWJsaWMgZGVsZXRlQ29uZmlybU1zZyA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD9cIjtcclxuICBwdWJsaWMgbm90aGluZ1RvRGVsZXRlbE1zZyA9IFwiTm8gcmVjb3JkcyB0byBkZWxldGUuXCI7XHJcbiAgcHVibGljIGZpZWxkc1JlcXVpcmVkTXNnID0gXCJQbGVhc2UgZW50ZXIgcmVxdWlyZWQgZmllbGRzLlwiXHJcbiAgcHVibGljIHJlYWRPbmx5TXNnID0gXCJDYW4gbm90IHNhdmUgLCB5b3VyIGF1dGhvcml0eSBpcyByZWFkb25seS5cIlxyXG4gIHB1YmxpYyBub0FjY2Vzc01zZyA9IFwiWW91IGRvbnQgaGF2ZSBhY2Nlc3MgdG8gdGhpcyByb3V0aW5lLlwiXHJcbiAgcHVibGljIHN0YW5kYXJkRXJyb3JNc2cgPSBcIkVycm9yIHBlcmZvcm1pbmcgdHJhbnNhY3Rpb25cIlxyXG4gIHB1YmxpYyBzYXZlTWFzdGVyTXNnID0gXCJTYXZlIG1hc3RlciByZWNvcmQgZmlyc3QuXCJcclxuICBwdWJsaWMgZW50ZXJRdWVyeU1zZyA9ICBcIldoZW4gcHJlc3NpbmcgRW50ZXIgUXVlcnksIHlvdSBtYXkgdXNlIGFueSBmaWVsZCB0byBzZWFyY2ggKGUuZzogbmFtZSUpIGFuZCB0aGVuIHByZXNzIEV4ZWN1dGUgUXVlcnlcIjtcclxuICBwdWJsaWMgaGVscE1zZyA9IFwiXCI7XHJcbiAgcHVibGljIGhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJOQU1FID0gXCJcIjtcclxuICBwdWJsaWMgaGlkZUFmdGVyID0gMTAwMDtcclxuICBwdWJsaWMgU3RyQXV0aCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJfSU5GTztcclxuICBwdWJsaWMgTUFTVEVSX0RCID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUk5BTUVfREIgPSBcIlwiO1xyXG4gIHByaXZhdGUgaHR0cE9wdGlvbnM7XHJcbiAgcHVibGljIGxpbWl0ID0gMjUwMDtcclxuICBwdWJsaWMgWWVzTm9BY3Rpb25zID0gW1xyXG4gICAgeyB0ZXh0OiAnTm8nLCBwcmltYXJ5OiBmYWxzZSB9LFxyXG4gICAgeyB0ZXh0OiAnWWVzJywgcHJpbWFyeTogdHJ1ZSB9XHJcbiAgXTtcclxuICBwdWJsaWMgT2tBY3Rpb25zID0gW1xyXG4gICAgeyB0ZXh0OiAnT2snLCBwcmltYXJ5OiBmYWxzZSB9XHJcbiAgXTtcclxuICBwdWJsaWMgc2Vzc2lvblBhcmFtczphbnkgPSB7fTtcclxuXHJcblxyXG5cclxuICAgIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwczovL29kYXRhc2FtcGxlc2VydmljZXMuYXp1cmV3ZWJzaXRlcy5uZXQvVjQvTm9ydGh3aW5kL05vcnRod2luZC5zdmMvJztcclxuICAgIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjM6OTA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD01MCc7XHJcblxyXG4gICAgcHVibGljIEVQTUVOR19VUkwgPSBcIlwiIDsgLy8naHR0cDovLzE5Mi4xNjguMS41OjgwOTIvZm9ybWF0JztcclxuICAgIC8vcHJpdmF0ZSBFUE1FTkdfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkyL2Zvcm1hdCc7XHJcblxyXG4gICAgcHVibGljIFNFUlZFUl9VUkwgPSBcIlwiOyAvLyAnaHR0cDovL2xvY2FsaG9zdDo5MDkwJztcclxuICAgIHB1YmxpYyBTRVJWRVJfREVQTE9ZID1cIlwiO1xyXG4gICAgLy9wdWJsaWMgU0VSVkVSX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206OTA5MCc7XHJcblxyXG4gICAgcHVibGljIEJBU0VfVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAgIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206OTA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAgIHB1YmxpYyBlS3ljU2NyID0gXCJEU1BFS1lDXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG51bGwpO1xyXG4gICAgICAgIC8vbG9nZ2VyLndhcm4oXCJXYXJuaW5nIG1lc3NhZ2VcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVyeShzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgIGxldCBxdWVyeU5hbWU9XCJcIjtcclxuICAgICAgICB0aGlzLmZldGNoKHRoaXMsIHF1ZXJ5TmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHN1cGVyLm5leHQoeCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZVJlYyhncmlkRGF0YTogYW55LCBlZGl0ZWRSb3dJbmRleDpudW1iZXIgKSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICBncmlkRGF0YS5kYXRhLnNwbGljZSggZWRpdGVkUm93SW5kZXggLCAxICk7XHJcbiAgICAgICAgICBncmlkRGF0YS50b3RhbCA9IGdyaWREYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgLyogIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3JlbXZpbmcgZWRpdGVkUm93SW5kZXg6JyArIGVkaXRlZFJvd0luZGV4KVxyXG4gICAgICAgICAgICByZXN1bHQxLmRhdGEuc3BsaWNlKCBlZGl0ZWRSb3dJbmRleCAsIDEgKTtcclxuICAgICAgICAgICAgcmVzdWx0MS50b3RhbCA9IHJlc3VsdDEuZGF0YS5sZW5ndGg7Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVSZWMoZ3JpZERhdGE6IGFueSwgZWRpdGVkUm93SW5kZXg6bnVtYmVyICwgTmV3VmFsOmFueSkge1xyXG4gICAgICBncmlkRGF0YS5kYXRhW2VkaXRlZFJvd0luZGV4XSA9IE5ld1ZhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRSZWMoZ3JpZERhdGE6IGFueSwgTmV3VmFsOmFueSkge1xyXG4gICAgICBncmlkRGF0YS5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgIC8qIGxldCByZXN1bHQgPXtcImRhdGFcIjpbXSwgdG90YWw6MH07XHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICAgICAgTmV3VmFsID0gdGhpcy5wYXJzZVRvRGF0ZShOZXdWYWwpO1xyXG4gICAgICAgIHJlc3VsdDEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQxLmRhdGE7XHJcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzdWx0LmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQxOyovXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvcm1hdFdoZXJlKE5ld1ZhbDphbnkpe1xyXG4gICAgICBmdW5jdGlvbiBpc0RhdGUgKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gRk9STUFUX0lTT19wYXJzZShkKSB7IC8vIFRoaXMgZnVuY3Rpb24gd2FzIGFkZGVkIGZvciBDUk0uIENSTSBkYXRlcyBzaG91bGQgYmUgSVNPXHJcbiAgICAgICAgICB2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgIHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIlRcIik7XHJcbiAgICAgICAgICBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiIFwiICsgZGF0ZUlzb0FyclsxXTtcclxuICAgICAgICAgIGRhdGVJc28gPSBkYXRlSXNvLnN1YnN0cigwLCAxOSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0ZUlzbztcclxuICAgICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHBhcnNlVmFsdWUoa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlzRGF0ZTpcIiAsIGlzRGF0ZSAodmFsdWUpLCB2YWx1ZSwgdHlwZW9mIHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRGF0ZSAodmFsdWUpKXtcclxuICAgICAgICAgICAgLy92YWx1ZSA9IGdldERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAvL3ZhbHVlID0gRk9STUFUX0lTT19wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBcIlwiIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9ycyA9IFwiPD4hPVwiXHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvclZhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCB0cmltZWVkVmFsID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RDaGFyID0gdHJpbWVlZFZhbC5jaGFyQXQoMCk7XHJcbiAgICAgICAgICAgIGxldCBuID0gb3BlcmF0b3JzLnNlYXJjaChmaXJzdENoYXIpO1xyXG4gICAgICAgICAgICBpZiAoIG4gIT0gLTEpe1xyXG4gICAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT0gXCJ8XCIpXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiID0gJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCB2YWx1ZS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIiVcIikgIT0gLTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiIGxpa2UgJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlcmF0b3JWYWw6XCIrIG9wZXJhdG9yVmFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhyYXNlID0ga2V5ICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wZXJhdG9yVmFsKTtcclxuICAgICAgICAgICAgLy9waHJhc2UgPSBrZXkgKyBvcGVyYXRvclZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAvLyBpdCdzIHNvbWV0aGluZyBlbHNlXHJcbiAgICAgICAgICBsZXQgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgIHBocmFzZSA9IGtleSArIGVuY29kZVVSSUNvbXBvbmVudChvcGVyYXRvclZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGhyYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgd2hlcmVQaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIGxldCB3aGVyZUNsYXVzZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJmb3JtYXRXaGVyZTpcIilcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpXHJcbiAgICAgICAgT2JqZWN0LmtleXMoTmV3VmFsKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBOZXdWYWxba2V5XTtcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhrZXkgKyBcIjpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCAodmFsdWUgIT0gXCJcIiApICYmICh2YWx1ZSAhPSBudWxsKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsZXQgcGhyYXNlID0gcGFyc2VWYWx1ZShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHdoZXJlUGhyYXNlID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVQaHJhc2UgPSB3aGVyZVBocmFzZSArICAgcGhyYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlUGhyYXNlID0gd2hlcmVQaHJhc2UgKyBcIiBhbmQgXCIgKyBwaHJhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdoZXJlUGhyYXNlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlID0gXCImX1dIRVJFPVwiICsgd2hlcmVQaHJhc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZSA9IFwiJl9XSEVSRT1cIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ3aGVyZUNsYXVzZTpcIiArIHdoZXJlQ2xhdXNlKTtcclxuICAgICAgICByZXR1cm4gd2hlcmVDbGF1c2U7XHJcbiAgICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0RCTG9jKHRoZVVSTClcclxuICB7XHJcbiAgICBcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREJMb2MgIT0gXCJcIil7XHJcbiAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoZVVSTCArIFwiJkRCTG9jPVwiICsgdGhpcy5wYXJhbUNvbmZpZy5EQkxvYztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrREJMb2M6dGhlVVJMOlwiLHRoZVVSTCk7XHJcblxyXG4gICAgcmV0dXJuIHRoZVVSTDtcclxuICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgZmV0Y2gob2JqZWN0LCBxdWVyeU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtxdWVyeU5hbWV9YDtcclxuICAgICAgIFxyXG4gICAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQoYCR7dGhlVVJMfWAsdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+ICg8R3JpZERhdGFSZXN1bHQ+e2RhdGE6cmVzcG9uc2VbJ2RhdGEnXX1cclxuICAgICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYsIGRhdGEsXCJQT1NUX1FVRVJZXCIpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgIC8qIHB1YmxpYyByZW1vdmUoIHBhZ2U6IGFueSk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB0aGlzLmRlbGV0ZShwYWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gc3VwZXIubmV4dCh4KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuKi9cclxucHVibGljIGRlbGV0ZShQYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGVsZXRlIHRoZVVSTDpcIix0aGVVUkwpO1xyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGU8YW55PihgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKDxHcmlkRGF0YVJlc3VsdD57ZGF0YTpyZXNwb25zZVsnZGF0YSddfVxyXG4gICAgICAgICAgICAgICAgKSksXHJcblxyXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHBvc3RfZGVsZXRlKCBQYWdlOiBzdHJpbmcsQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdDpQYWdlOlwiLFBhZ2UsXCIgQm9keTpcIixCb2R5KVxyXG5cclxuICAgICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke1BhZ2V9YDtcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+ICg8R3JpZERhdGFSZXN1bHQ+e2RhdGE6cmVzcG9uc2VbJ2RhdGEnXX1cclxuICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IClcclxuXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dEYWlsb2dFcnIoZXJyb3Ipe1xyXG4gICAgICBsZXQgTXNnID0gZXJyb3IuZXJyb3I7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJNc2c6XCIsIE1zZyk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IE1zZy5zZWFyY2goXCJVTklRVUUgY29uc3RyYWludFwiKTtcclxuICAgICAgaWYgKHBvc2l0aW9uICE9IC0xIClcclxuICAgICAgICBNc2cgPSB0aGlzLmdldE5MUyhbXSwnQUxSRUFEWV9FWElTVFMnLCdSZWNvcmQgYWxyZWFkeSBleGlzdHMnKVxyXG4gICAgICB2YXIgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiBNc2csXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3luY0ZsYWc9MDtcclxuICAgIHB1YmxpYyBwb3N0KG9iamVjdCwgUGFnZTogc3RyaW5nLEJvZHk6IGFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0OlBhZ2U6XCIsUGFnZSxcIiBCb2R5OlwiLEJvZHkpXHJcbiAgICAgIHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQcmVRdWVyeURlZiwgQm9keSxcIlBSRV9RVUVSWVwiKVxyXG5cclxuICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICwgdGhpcy5TdHJBdXRoICwgdGhlVVJMKTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDogd2l0aCBVUkxcIiAsIHRoaXMuU3RyQXV0aCAsIHRoZVVSTCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlcnI6XCIsIGVyci5lcnJvci5lcnJvcilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RhaWxvZ0VycihlcnIuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoPEdyaWREYXRhUmVzdWx0PntkYXRhOnJlc3BvbnNlWydkYXRhJ119XHJcbiAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLCBkYXRhLFwiUE9TVF9RVUVSWVwiKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgIH0gKVxyXG5cclxuXHJcbiAgICAgICAgICApO1xyXG4gIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgcG9zdFVwbG9hZChQYWdlOiBzdHJpbmcsQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCB0aGVVUkwgPSBQYWdlO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+ICg8R3JpZERhdGFSZXN1bHQ+e2RhdGE6cmVzcG9uc2VbJ2RhdGEnXX1cclxuICAgICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgICAgKTtcclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgdXBsb2FkRmlsZShwYWdlOmFueSwgZmlsZXNTZXQ6IFNldDxGaWxlPiwgaWQ6YW55KTogYW55IHtcclxuICAgIGZpbGVzU2V0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBhIG5ldyBtdWx0aXBhcnQtZm9ybSBmb3IgZXZlcnkgZmlsZVxyXG4gICAgICBjb25zdCBmb3JtZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidXBsb2FkRmlsZSBwYWdlOlwiKyBwYWdlKVxyXG4gICAgICBsZXQgYXBpVVJMID0gIHRoaXMuU0VSVkVSX1VSTCArICAnL2FwaS9hdHQnICsgcGFnZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcGlVUkw6XCIrIGFwaVVSTCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgICAgICBmb3JtZGF0YS5mb3JFYWNoKGVudHJpZXMgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW50cmllcykpICk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdFVwbG9hZChhcGlVUkwsIGZvcm1kYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpOyB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gfVxyXG5cclxuICB1cGxvYWRGaWxlT2xkKGZpbGU6IEZpbGUpOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybWRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgdXBsb2FkZWQgZmlsZSBjb250ZW50XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ2RvY3VtZW50VmVyc2lvbklkJywgJzEyMycpOyAgICAgICAvL0kgbmVlZCB0byBwYXNzIHNvbWUgYWRkaXRpb25hbCBpbmZvIHRvIHRoZSBzZXJ2ZXIgYmVzaWRlcyB0aGUgRmlsZSBkYXRhXHJcbiAgICBsZXQgYXBpVVJMID0gIHRoaXMuU0VSVkVSX1VSTCArICAnL2FwaT91cGxvYWQ9eSc7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFwaVVSTDpcIisgYXBpVVJMKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICBmb3JtZGF0YS5mb3JFYWNoKGVudHJpZXMgPT4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKSApO1xyXG5cclxuXHJcbiAgICAvL2NvbnN0IGFwaVVSTCA9IHRoaXMuYXBpX3BhdGggKyAnVXBsb2FkJzsgICAgIC8vY2FsbGluZyBodHRwOi8vbG9jYWxob3N0OjUyMzMzL2FwaS9VcGxvYWRDb250cm9sbGVyXHJcblxyXG4gICAgdGhpcy5wb3N0VXBsb2FkKGFwaVVSTCwgZm9ybWRhdGEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTsgfSk7XHJcbiAgICAvKmNvbnN0IHVwbG9hZFJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFwaVVSTCwgZm9ybWRhdGEsIHtcclxuICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaHR0cGNsaWVudC5yZXF1ZXN0KHVwbG9hZFJlcSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgfVxyXG4gICB9KTtcclxuICAgKi9cclxuXHJcbiB9XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIGhhc0NoYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kZWxldGVkSXRlbXMubGVuZ3RoIHx8IHRoaXMudXBkYXRlZEl0ZW1zLmxlbmd0aCB8fCB0aGlzLmNyZWF0ZWRJdGVtcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRUb0JvZHkoTmV3VmFsLEJvZHkpe1xyXG4gICAgICAgIEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ05ld1ZhbCA6IEhGIFBsZWFzZScgICsgSlNPTi5zdHJpbmdpZnkoTmV3VmFsKSk7XHJcbiAgICAgICAgcmV0dXJuIEJvZHk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHNob3dOb3RpZmljYXRpb24oc3R5bGVOb3RlOmFueSwgbXNnOmFueSk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGhpZGVBZnRlciA9IHRoaXMuaGlkZUFmdGVyO1xyXG5cclxuICAgICAgaWYgKHN0eWxlTm90ZSA9PSBcImVycm9yXCIpXHJcbiAgICAgICAgaGlkZUFmdGVyID0gNTAwMDtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvdyh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgICAgICAgY3NzQ2xhc3M6ICdidXR0b24tbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiB7IHR5cGU6ICdmYWRlJywgZHVyYXRpb246IDIwMCB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBob3Jpem9udGFsOiAnY2VudGVyJywgdmVydGljYWw6ICdib3R0b20nIH0sXHJcbi8vICAgICAgICAgICAgc3RhY2tpbmc6IHsgc3RhY2tpbmc6ICdkb3duJyB9LFxyXG4gICAgICAgICAgICB0eXBlOiB7IHN0eWxlOiBzdHlsZU5vdGUsIGljb246IHRydWV9LFxyXG4gICAgICAgICAgICAvL2Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlQWZ0ZXI6IGhpZGVBZnRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvUmVjb3JkQWN0ICggdGFyZ2V0OmFueSwgb2JqZWN0OmFueSk6IHZvaWR7XHJcblxyXG4gICAgICAgIGxldCByZWM7XHJcblxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ID09IFwiZmlyc3RcIil7XHJcbiAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgICAgIGlmICh0YXJnZXQgPT0gXCJsYXN0XCIpe1xyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0xIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSAgICAgaWYgKHRhcmdldCA9PSBcIm5leHRcIil7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0gMSlcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LkN1cnJlbnRSZWMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlICAgICBpZiAodGFyZ2V0ID09IFwicHJldlwiKXtcclxuICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDAgKVxyXG4gICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IG9iamVjdC5DdXJyZW50UmVjIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYyA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY107XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcmVjICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUocmVjKTtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuXHJcbiAgICAgICAgICAvL29iamVjdC5mb3JtLnJlc2V0KHJlYywge2VtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWV9KTtcclxuICAgICAgICAgIGlmIChvYmplY3QuZGlzYWJsZUVtaXRSZWFkQ29tcGxldGVkICE9IHRydWUpXHJcbiAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ29SZWNvcmQgKCB0YXJnZXQ6YW55LCBvYmplY3QpOiB2b2lke1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLmRpcnR5KTtcclxuICAgICAgICAgIGlmIChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICAgICAgICB0aXRsZSA6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgICBpbmZvOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgICAgICAgIGFjdGlvbiA6IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmdvUmVjb3JkQWN0IH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nb1JlY29yZEFjdCAoIHRhcmdldCwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpIHtcclxuICAgICAgICBsZXQgZGlhbG9nUmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9nOiBEaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IGRpYWxvZ1N0cnVjLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpYWxvZ1N0cnVjLm1zZyxcclxuICAgICAgICAgICAgICBhY3Rpb25zOiBkaWFsb2dTdHJ1Yy5hY3Rpb24sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDogMjUwXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cucmVzdWx0LnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIERpYWxvZ0Nsb3NlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdhY3Rpb24nLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaWFsb2dSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgIGlmIChkaWFsb2dSZXN1bHQucHJpbWFyeSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dTdHJ1Yy5oYXNPd25Qcm9wZXJ0eSgnY2FsbGJhY2snKSkge1xyXG4gICAgICAgICAgICAgICAgICBkaWFsb2dTdHJ1Yy5jYWxsYmFjayhkaWFsb2dTdHJ1Yy5pbmZvLCBkaWFsb2dTdHJ1Yy5vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKioqKioqKioqKioqKioqKiBGb3JtIGZ1bmN0aW9ucyAqKioqKioqKioqKioqKi9cclxuICAgICAgcHVibGljICBleGVjdXRlUXVlcnlfZm9ybSggZm9ybTogYW55LCBvYmplY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXItc2VydmljZXMgZXhlY3V0ZVF1ZXJ5X2Zvcm0gb2JqZWN0LmZvcm06XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiK29iamVjdC5pc1NlYXJjaClcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLnZhbHVlKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgaWYgKCAob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkgJiYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgICAgICAgdGl0bGUgOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICAgICAgICBvYmplY3QgOiBvYmplY3QsXHJcbiAgICAgICAgICAgICAgYWN0aW9uIDogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0gfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtICggZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0gKCBmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyByb3V0aW5lIGZyb20gOiBodHRwczovL3d3dy50ZWxlcmlrLmNvbS9rZW5kby1hbmd1bGFyLXVpL2NvbXBvbmVudHMvZGF0ZWlucHV0cy9kYXRlcGlja2VyL2ludGVncmF0aW9uLXdpdGgtanNvbi9cclxuXHJcbiAgICAgIHB1YmxpYyBwYXJzZVRvRGF0ZShqc29uOmFueSkge1xyXG4gICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246aW46XCIsanNvbilcclxuICAgICAgICBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgIGxldCBWYWwxID0ganNvbltrZXldO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIsa2V5LCBWYWwxLCB0eXBlb2YgVmFsMSk7XHJcbiAgICAgICAgICAvL2xldCBuID0ga2V5LnRvVXBwZXJDYXNlKCkuc2VhcmNoKFwiREFURVwiKTtcclxuICAgICAgICAgIC8vaWYgKG4gIT0gLTEpe1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBWYWwxICE9IFwibnVtYmVyXCIgKXsgICAvL2l0IGlzIG5vdCBhIG51bWJlciwgY2hlY2sgbW9yZVxyXG4gICAgICAgICAgICBpZiAoIChWYWwxICE9IG51bGwpICYmIChWYWwxLmxlbmd0aCA+IDcpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFZhbDEpO1xyXG4gICAgICAgICAgICAgIGxldCBjaGVja1lZWVkgPSBpc05hTihwYXJzZUludChWYWwxLnN1YnN0cmluZygwLCA0KSkpO1xyXG4gICAgICAgICAgICAgIGxldCB0aW1lVmFsID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aW1lVmFsOlwiLHRpbWVWYWwsIGlzTmFOKHRpbWVWYWwpKTtcclxuICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRpbWVWYWwpICYmICh0aW1lVmFsID4gMCkgJiYgIWNoZWNrWVlZWSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpdCBpcyBhIGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiK2tleSArIFwiOlwiICsgZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICAgICAganNvbltrZXldID0gZGF0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjpvdXQ6XCIsanNvbilcclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgZGF0ZVlZWVlNTUREKG9iamVjdCwganNvbjphbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246XCIsanNvbilcclxuICAgICAgICAgT2JqZWN0LmtleXMoanNvbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgbGV0IG4gPSBrZXkudG9VcHBlckNhc2UoKS5zZWFyY2goXCJfREFURVwiKTtcclxuICAgICAgICAgICBpZiAobiAhPSAtMSl7XHJcbiAgICAgICAgICAgIGxldCBkYXRlT3JnID0ganNvbltrZXldO1xyXG4gICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShqc29uW2tleV0pO1xyXG4gICAgICAgICAgICAgLy9kYXRlID0gdG9Mb2NhbERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgICBsZXQgdGltZVZhbCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgaWYgKCFpc05hTih0aW1lVmFsKSAmJiAodGltZVZhbCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIra2V5ICsgXCI6XCIgKyBkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgIC8vbGV0IGFycmF5ID0gZGF0ZU9yZy5zcGxpdChcIlRcIilcclxuICAgICAgICAgICAgICAgZGF0ZU9yZyA9IGZvcm1hdERhdGUoZGF0ZU9yZywgb2JqZWN0LnBhcmFtQ29uZmlnLkRhdGVGb3JtYXQsb2JqZWN0LnBhcmFtQ29uZmlnLmRhdGVMb2NhbGUpXHJcbiAgICAgICAgICAgICAgIGpzb25ba2V5XSA9IGRhdGVPcmc7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgIGV4ZWN1dGVRdWVyeUFjdF9mb3JtKCBmb3JtOiBhbnksIG9iamVjdCkge1xyXG4gICAgICAgIGlmICAodHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmICggb2JqZWN0LmlzU2VhcmNoID09IHRydWUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywge2VtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWV9KTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiKyBvYmplY3QubWFzdGVyS2V5TmFtZSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcm0gPSBvYmplY3QuZm9ybS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBQYWdlID0gXCImX3F1ZXJ5PVwiICsgb2JqZWN0LmdldENNRDtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiK29iamVjdC5pc1NlYXJjaClcclxuICAgICAgICAvL2lmIChvYmplY3QuaXNTZWFyY2ggPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcclxuICAgICAgICAgICAgbGV0IE5ld1ZhbCA9ICBmb3JtO1xyXG4gICAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCAodHlwZW9mIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PSBudWxsKSAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3Quc3RhclNlcnZpY2VzLmZvcm1hdFdoZXJlKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3QuZm9ybWF0dGVkV2hlcmU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCAodHlwZW9mIG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9PSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT0gXCJcIikgKVxyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgXCImX09SREVSQlk9XCIgKyBvYmplY3QuT3JkZXJCeUNsYXVzZTtcclxuICAgICAgICAvL31cclxuLy9jb25zb2xlLmxvZyhcInRlc3QgUGFnZTpcIiwgUGFnZSk7XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdD1bXTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdD0wO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuXHJcbiAgICAgICAgUGFnZSA9IGVuY29kZVVSSShQYWdlKTtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZldGNoKG9iamVjdCwgUGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGg7aSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0gPSBvYmplY3Quc3RhclNlcnZpY2VzLnBhcnNlVG9EYXRlKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtkYXRhOiByZXN1bHQuZGF0YVswXS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aCwgMTApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24gKCdzdWNjZXNzJyxcIlJlY29yZHMgcmV0cmlldmVkIDogXCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSAgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscE1zZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiLG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0LmRhdGE6XCIscmVzdWx0LmRhdGEsIFwiIG9iamVjdC5DdXJyZW50UmVjXCIsIG9iamVjdC5DdXJyZW50UmVjICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjOlwiLHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICAodHlwZW9mIHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LmZvcm0udmFsdWU6XCIsb2JqZWN0LmZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuZm9ybS5yZXNldChyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJmb3JtIHNlcnZpY2VyZWFkQ29tcGxldGVkT3V0cHV0XCIgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbihyZXN1bHQuZGF0YVswXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsLG9iamVjdCl7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdID0gTmV3VmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IE5ld1ZhbEFyciA9IFtdO1xyXG4gICAgICAgICAgTmV3VmFsQXJyLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSB7ZGF0YTogTmV3VmFsQXJyLFxyXG4gICAgICAgICAgICB0b3RhbDogMX1cclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9ICByZXN1bHQ7XHJcbiAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID1bXTtcclxuICAgICAgICBkYXRhLnB1c2goTmV3VmFsKVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1VwZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfVXBkYXRlLmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICAvL1JFTU9WRVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5zcGxpY2Uob2JqZWN0LkN1cnJlbnRSZWMsIDEpO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdLCB7ZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywge2VtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWV9KTtcclxuICAgICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBOZXdWYWwxID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKVxyXG4gICAge1xyXG4gICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIFxyXG4gICAgICB7fVxyXG4gICAgZWxzZVxyXG4gICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSl7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIH1cclxuICAgIG9iamVjdC5hY3Rpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG4gICAgICBwdWJsaWMgZXhlY3N0YXJTZXJ2aWNlc19mb3JtKE5ld1ZhbCxvYmplY3QpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk5ld1ZhbDpcIixOZXdWYWwpO1xyXG4gICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgICAgIGxldCBQYWdlID0gIFwiJl90cmFucz1ZXCI7XHJcbiAgICAgICAgICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsLG9iamVjdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnBvc3Qob2JqZWN0LFBhZ2Usb2JqZWN0LkJvZHkpLnN1YnNjcmliZShQYWdlID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LkJvZHkgPVtdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YTpvYmplY3QuQ3VycmVudFJlYzpcIitvYmplY3QuQ3VycmVudFJlYyArXCIgb2JqZWN0LmFjdGlvbjpcIiArIG9iamVjdC5hY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiArIG9iamVjdC5pc05ldylcclxuICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAvL29iamVjdC5DdXJyZW50UmVjKys7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSA9IE5ld1ZhbDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0IHBvc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IE5ld1ZhbEFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICBOZXdWYWxBcnIucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge2RhdGE6IE5ld1ZhbEFycixcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogMX1cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uICgnc3VjY2VzcycsXCJEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID1bXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChOZXdWYWwpXHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydChvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmVmb3JlIGNhbGxpbmcgY2FsbEJhY2tQb3N0X0luc2VydDpcIiwgTmV3VmFsLGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydC5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1VwZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9VcGRhdGUuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vUkVNT1ZFXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEuc3BsaWNlKG9iamVjdC5DdXJyZW50UmVjLCAxKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkN1cnJlbnRSZWM6XCIrIG9iamVjdC5DdXJyZW50UmVjLCBcIiBOZXdWYWw6XCIsIE5ld1ZhbClcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywge2VtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIgKyBvYmplY3QuaXNOZXcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOk5ld1ZhbDpcIiwgTmV3VmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IE5ld1ZhbDEgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iamVjdC5kaWFibGVFbWl0U2F2ZSA9PSB0cnVlKSBcclxuICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHNhdmVDaGFuZ2VzX2Zvcm0oIGZvcm06IGFueSwgb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3NhdmVDaGFuZ2VzX2Zvcm0gOiBvYmplY3QuaXNOZXcgOicgKyBvYmplY3QuaXNOZXcgKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCApO1xyXG4gICAgICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoICE9IG51bGwpe1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwiYXV0aExldmVsOlwiICsgb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsICE9IDIgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnJlYWRPbmx5TXNnLFxyXG4gICAgICAgICAgICAgIHRpdGxlIDogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgICAgICBvYmplY3QgOiBvYmplY3QsXHJcbiAgICAgICAgICAgICAgYWN0aW9uIDogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgaWYgKCAoIW9iamVjdC5mb3JtLmRpcnR5KSAmJiBvYmplY3QuaXNDaGlsZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGlmIChvYmplY3QuZm9ybS5pbnZhbGlkKVxyXG4gICAgICB7XHJcbiAgICAgICAgb2JqZWN0LnN1Ym1pdHRlZCA9ICB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd09rTXNnKG9iamVjdCx0aGlzLmZpZWxkc1JlcXVpcmVkTXNnLFwiRXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgICAgbGV0IE5ld1ZhbCA9IHt9O1xyXG4gICAgICAgIC8vb2JqZWN0LkJvZHkgPSBbXTsgICAvLyBvbmx5IG9uZSB0cmFuc2FjdGlvbiBhbGxvd2VkIGluICBmb3JtLiBNb3ZlZCB0byBmb3JtXHJcbiAgICAgICAgLy9OZXdWYWwgPSAgZm9ybS52YWx1ZTtcclxuICAgICAgICBOZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBmb3JtLnZhbHVlLCB7fSlcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCItLS0tLSBOZXdWYWw6XCIpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gICAgICAgIC8vb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVudGVyUXVlcnlBY3RfZm9ybSAoZm9ybSA6IGFueSwgb2JqZWN0KTogdm9pZHtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdD1bXTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdD0wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZW50ZXJRdWVyeSA6IG9iamVjdC5pc1NlYXJjaDonK29iamVjdC5pc1NlYXJjaCk7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaGVscE1zZyA9ICB0aGlzLmdldE5MUyhbXSxcIkhFTFBfRU5URVJfUVVFUllcIix0aGlzLmVudGVyUXVlcnlNc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHZhbHVlKXtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFyciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIpO1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9MDsgayA8IGtleXMubGVuZ3RoOyBrKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10sIFwiIHZhbHVlOlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW2tleXNba11dID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBwdWJsaWMgZW50ZXJRdWVyeV9mb3JtIChmb3JtIDogYW55LCBvYmplY3QpOiB2b2lke1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpkaXJ0eTpcIiwgb2JqZWN0LmZvcm0uZGlydHkpO1xyXG4gICAgICAgIGlmIChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgICB0aXRsZSA6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgICAgICBhY3Rpb24gOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZW50ZXJRdWVyeUFjdF9mb3JtIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZm9ybSAoIGZvcm0sIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgb25DYW5jZWxfZm9ybShlLCBvYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ9W107XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQ9MDtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oZWxwTXNnID0gXCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93T2tNc2cob2JqZWN0LCBtc2csIHNldmVyaXR5ICl7XHJcbiAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgICB0aXRsZSA6IHNldmVyaXR5LFxyXG4gICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbiA6IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIH1cclxuICAgICAgcHVibGljIG9uUmVtb3ZlX2Zvcm0oIGZvcm0sIG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiLG9iamVjdC5pc05ldylcclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpe1xyXG4gICAgICAgICAgdGhpcy5vbkNhbmNlbF9mb3JtKG51bGwsIG9iamVjdClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPT0gMCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPa01zZyhvYmplY3QsdGhpcy5ub3RoaW5nVG9EZWxldGVsTXNnLFwiV2FybmluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnb25SZW1vdmUgOiBpc0NoaWxkICcgKyBvYmplY3QuaXNDaGlsZCAgKyBcIiBvYmplY3QuaXNNYXN0ZXI6XCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgICAgIGxldCBOZXdWYWwgPSAgZm9ybS52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiArIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpXHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IGZhbHNlKXtcclxuICAgICAgICAgIHZhciBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkczpcIiArIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcylcclxuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzID09PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzID0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoKHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyAhPSAwKSAmJiAob2JqZWN0LmlzTWFzdGVyID09IHRydWUpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZURldGFpbE1zZyxcclxuICAgICAgICAgICAgICB0aXRsZSA6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgICAgICAgIGFjdGlvbiA6IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG5cclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlQ29uZmlybU1zZyxcclxuICAgICAgICAgIHRpdGxlIDogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICAgIG9iamVjdCA6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbiA6IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IHRoaXMuUmVtb3ZlX2Zvcm1BY3QgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW1vdmVfZm9ybUFjdCAoZm9ybSwgb2JqZWN0KXtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImluIFJlbW92ZV9mb3JtQWN0XCIpO1xyXG4gICAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICAgIE5ld1ZhbCA9ICBmb3JtLnZhbHVlO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcbiAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiUkVNT1ZFXCI7XHJcblxyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWwsIG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbk5ld19mb3JtKGUgLCBvYmplY3QpOiB2b2lkIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJvbk5ldzogb2JqZWN0Lm1hc3RlcktleTpcIiArIG9iamVjdC5tYXN0ZXJLZXkpO1xyXG5cclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqIEdyaWQgZnVuY3Rpb25zICAqKioqKioqKi9cclxuICAgIHB1YmxpYyBhZGRIYW5kbGVyX2dyaWQob2JqZWN0KTogdm9pZCB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleUFyclswXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09rTXNnKHRoaXMsIHRoaXMuc2F2ZU1hc3Rlck1zZywgXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dPa01zZyh0aGlzLCB0aGlzLnNhdmVNYXN0ZXJNc2csIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDE6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOlwiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAvKiBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMuTU9EVUxFID0gb2JqZWN0Lm1hc3RlcktleTsqL1xyXG4gICAgICBpZiAoICh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSApXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgaWYob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcmVhZE9ubHkgPSBcImlzXCIrb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV0gKyBcInJlYWRPbmx5XCI7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIpe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltyZWFkT25seV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQ6b2JqZWN0Lm1hc3RlcktleU5hbWU6XCIsIG9iamVjdC5tYXN0ZXJLZXlOYW1lKTtcclxuICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleU5hbWUgIT0gXCJcIil7XHJcbiAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwID0gb2JqZWN0LmNyZWF0ZUZvcm1Hcm91cEdyaWQoXHJcbiAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzXHJcbiAgICAgICk7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAuc2V0RXJyb3JzKHtcclxuICAgICAgICBub3RVbmlxdWU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICBvYmplY3QuZ3JpZC5hZGRSb3cob2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgIC8vdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFuZGxlcl9ncmlkKCBzZW5kZXIsIG9iamVjdCApIHtcclxuICAgICAgLy9zZW5kZXIuY2FuY2VsQ2VsbCgpO1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVtb3ZlSGFuZGxlcl9ncmlkIHBhcmFtQ29uZmlnOm9iamVjdC5pc01hc3RlciBcIisgb2JqZWN0LmlzTWFzdGVyICk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG4gICAgICBpZiAoKHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyAhPSAwKSAmJiAob2JqZWN0LmlzTWFzdGVyID09IHRydWUpKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZURldGFpbE1zZyxcclxuICAgICAgICAgIHRpdGxlIDogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uIDogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbCB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmVkaXRlZFJvd0luZGV4IDpcIixvYmplY3QuZWRpdGVkUm93SW5kZXggKVxyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5lZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgbGV0IE5ld1ZhbCA9IHt9O1xyXG4gICAgICAgIGxldCBncmlkX2RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdC5ncmlkLmRhdGEpKTtcclxuXHJcbiAgICAgICAgTmV3VmFsID0gZ3JpZF9kYXRhLmRhdGEgW29iamVjdC5lZGl0ZWRSb3dJbmRleF07XHJcbiAgICAgICAgbGV0IGN1ckNNRCA9IE5ld1ZhbFtcIl9RVUVSWVwiXTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6TmV3VmFsOl9RVUVSWVwiLCBOZXdWYWxbXCJfUVVFUllcIl0pXHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnJlbW92ZVJlYyhvYmplY3QuZ3JpZC5kYXRhICwgb2JqZWN0LmVkaXRlZFJvd0luZGV4ICk7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDE7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOk5ld1ZhbDpcIiwgTmV3VmFsKVxyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICAgIGlmIChjdXJDTUQgIT0gb2JqZWN0Lmluc2VydENNRCApe1xyXG4gICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICAgICAgb2JqZWN0LnJlbW92ZWRSZWMucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIG9iamVjdC5jYW5jZWxIYW5kbGVyKCk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzYXZlQ3VycmVudF9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzYXZlQ3VycmVudF9ncmlkOm9iamVjdC5mb3JtR3JvdXA6XCIsb2JqZWN0LmZvcm1Hcm91cCk7XHJcblxyXG5cclxuICAgICAgaWYgIChvYmplY3QuZm9ybUdyb3VwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzYXZlQ3VycmVudF9ncmlkOm9iamVjdC5mb3JtR3JvdXA6XCIsb2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgICAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICAgICAgICBOZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjaGVjazpkaXJ0eSA6JyAsIG9iamVjdC5mb3JtR3JvdXAuZGlydHkgLCBcIiBpc05ldzpcIiwgb2JqZWN0LmlzTmV3LCBcIiBOZXdWYWw6IFwiICxOZXdWYWwpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5mb3JtR3JvdXAuZGlydHkgPT09IHRydWUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTEgTmV3VmFsXCIsTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5hZGRSZWMob2JqZWN0LmdyaWQuZGF0YSwgTmV3VmFsKSA7XHJcbiAgICAgICAgICAgICAvLyBvYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSB7ZGF0YTogW10sICB0b3RhbDogMH07XHJcbiAgICAgICAgICAgICAgLy9vYmplY3QuZ3JpZC5kYXRhLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YS5zcGxpY2UoMCwwLE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2NoZWNrOm9iamVjdC5ncmlkLmRhdGE6Jywgb2JqZWN0LmdyaWQuZGF0YSwgXCIgTmV3VmFsOlwiLCBOZXdWYWwgKTtcclxuICAgICAgICAgICAgICAvL05ld1ZhbCA9IHRoaXMucGFyc2VUb0RhdGUoTmV3VmFsKTtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YS5kYXRhW29iamVjdC5lZGl0ZWRSb3dJbmRleF0uX1FVRVJZID09IG9iamVjdC5pbnNlcnRDTUQpe1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdID0gTmV3VmFsO1xyXG4gICAgICAgICAgICAgIC8vbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnVwZGF0ZVJlYyhvYmplY3QuZ3JpZC5kYXRhICwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBOZXdWYWwgKTtcclxuICAgICAgICAgICAgICAvL29iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpOyAvLyBhZGRUb0JvZHkgd2lsbCBiZSBkb25lIGF0IHNhdmVDaGFuZ2VzX2dyaWQgdG8gYXZvaWQgZHVwbGljdGUgdXBkYXRlIHNpbmNlIG9iamVjdC5ncmlkLmRhdGEuZGF0YSBpcyBnZXR0aW5nIHVwZGF0ZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YSApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgY2xvc2VcIilcclxuICAgICAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0IGNsb3NlXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjbG9zZUVkaXRvcl9ncmlkKG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiRGVsOm9iamVjdC5lZGl0ZWRSb3dJbmRleDpcIiwgb2JqZWN0LmVkaXRlZFJvd0luZGV4KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIkRlbDpvYmplY3QuZ3JpZDpcIiwgb2JqZWN0LmdyaWQpO1xyXG4gICAgICBvYmplY3QuZ3JpZC5jbG9zZVJvdyhvYmplY3QuZWRpdGVkUm93SW5kZXgpO1xyXG4gICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgb2JqZWN0LmVkaXRlZFJvd0luZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2FuY2VsSGFuZGxlcl9ncmlkKG9iamVjdCk6IHZvaWQge1xyXG4gICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gICAgICAvL29iamVjdC5yZW1vdmVkUmVjLmxlbmd0aCA9IDA7XHJcbiAgICAgIHRoaXMuaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzYXZlQ2hhbmdlc19ncmlkX2luVHJhbnMoZ3JpZCwgb2JqZWN0LCBOZXdWYWwpe1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgbGV0IE5ld1ZhbDEgPSBbXTtcclxuICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KGdyaWQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNhdmVDaGFuZ2VzX2dyaWQoZ3JpZDogYW55LCBvYmplY3QpOiB2b2lkIHtcclxuICAgICAgaWYgKCAob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsKSB8fCAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSA9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBFcnJvciA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoICE9IG51bGwpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcImF1dGhMZXZlbDpcIiArIG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsKTtcclxuICAgICAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwgIT0gMiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMucmVhZE9ubHlNc2csXHJcbiAgICAgICAgICAgIHRpdGxlIDogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAgIG9iamVjdCA6IG9iamVjdCxcclxuICAgICAgICAgICAgYWN0aW9uIDogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IE5ld1ZhbCA9W107XHJcbiAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICBOZXdWYWwgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV07XHJcbiAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzX2dyaWRfaW5UcmFucyhncmlkLCBvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSk7XHJcbiAgICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMClcclxuICAgICAge1xyXG4gICAgICAgIGxldCBQYWdlID0gIFwiJl90cmFucz1ZXCI7XHJcbiAgICAgICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSxvYmplY3QuQm9keSkuc3Vic2NyaWJlKFBhZ2UgPT4ge1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPVtdO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUllfRE9ORSA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhLmRhdGE6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YSlcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YS5kYXRhOi5sZW5ndGhcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aClcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoJ3N1Y2Nlc3MnLFwiRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICBsZXQgTmV3VmFsMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5Cb2R5Lmxlbmd0aCAtMTsgaSA+PSAgMDsgaS0tKXtcclxuICAgICAgICAgICAgaWYgKCBvYmplY3QuQm9keVtpXS5fUVVFUlkgIT0gb2JqZWN0LmRlbGV0ZUNNRCl7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LkJvZHkuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZXJyOlwiLCBlcnIpXHJcbiAgICAgICAgICBsZXQgZXJyTXNnID0gdGhpcy5nZXRFcnJvck1zZyhlcnIpO1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIGVyck1zZyk7XHJcbiAgICAgICAgICBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc01hc3RlcjpcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICAgICAgaWYgKCFvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKCd3YXJuaW5nJyxcIk5vIGNoYW5nZXMgdG8gc2F2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIUVycm9yKVxyXG4gICAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoZ3JpZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0RXJyb3JNc2coZXJyKVxyXG4gICAge1xyXG4gICAgICBsZXQgZXJyTXNnID0gXCJcIjtcclxuICAgICAgaWYgKHR5cGVvZiBlcnIuZXJyb3IuZXJyb3IgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgZXJyTXNnID0gZXJyLmVycm9yLmVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBlcnJNc2cgPSBlcnIuZXJyb3I7XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJNc2c7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGVRdWVyeV9ncmlkIChncmlkIDogYW55LCBvYmplY3QpOiB2b2lke1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdyaWQ6XCIsZ3JpZClcclxuICAgICAgaWYgKHR5cGVvZiBncmlkID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iamVjdC5ncmlkID09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwiZXhlY3V0ZVF1ZXJ5X2dyaWQ6XCIgKyBvYmplY3QuQm9keS5sZW5ndGggKyBcIiBcIiArIG9iamVjdC5ncmlkLmlzRWRpdGluZygpLCBcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KVxyXG4gICAgICBpZiAoKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB8fCBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkaXJ0eSA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgdGl0bGUgOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uIDogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogdGhpcy5leGVjdXRlUXVlcnlBY3RfZ3JpZCB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9ncmlkICggZ3JpZCwgb2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWN1dGVRdWVyeUFjdF9ncmlkIChncmlkIDogYW55LCBvYmplY3QpOiB2b2lke1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbmlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNDaGlsZDpcIiwgb2JqZWN0LmlzQ2hpbGQsIFwiIG9iamVjdC5pc1NlYXJjaCA6XCIsIG9iamVjdC5pc1NlYXJjaCApXHJcbiAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKCBvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICBncmlkID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzO1xyXG5cclxuICAgICAgICAgIGlmICggKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL2dyaWRbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIisgb2JqZWN0Lm1hc3RlcktleU5hbWUpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tU2VhcmNoaW5nOlwiKTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tZXhlY3V0ZVF1ZXJ5IG9iamVjdC5pc1NlYXJjaCA6JyArIG9iamVjdC5pc1NlYXJjaCAgKyBcIiAgb2JqZWN0LmlzQ2hpbGQ6XCIgKyBvYmplY3QuaXNDaGlsZCk7XHJcbiAgICAgIC8vIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQpO1xyXG5cclxuICAgICAgIGxldCBQYWdlID1cIiZfcXVlcnk9XCIgKyBvYmplY3QuZ2V0Q01EO1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNTZWFyY2ggPT0gdHJ1ZSl7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdvYmplY3QuZm9ybUdyb3VwOicgLCBvYmplY3QuZm9ybUdyb3VwLCd0eXBlb2YoZ3JpZCk6JywgdHlwZW9mKGdyaWQuZGF0YSkgLCAnIGdyaWQ6JyxncmlkKVxyXG4gICAgICAgICAgbGV0IE5ld1ZhbCA9IFwiXCI7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5mb3JtR3JvdXAgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYSBjaGlsZCBjb21wb25lbnRcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZ3JpZDonLHR5cGVvZihncmlkLmRhdGEpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZ3JpZC5kYXRhID09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgICAgTmV3VmFsID0gZ3JpZC5kYXRhOyAvLyBwYXNzZWQgZW1wdHkgZ3JpZFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgTmV3VmFsID0gIGdyaWQ7IC8vIHVzZWQgdGhlIHBhc3NlZCBncmlkIHBhcmFtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICBOZXdWYWwgPSBvYmplY3QuZm9ybUdyb3VwLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggICh0eXBlb2Ygb2JqZWN0LmZvcm1hdHRlZFdoZXJlID09PSBcInVuZGVmaW5lZFwiKSB8fCAob2JqZWN0LmZvcm1hdHRlZFdoZXJlID09IG51bGwpIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mb3JtYXRXaGVyZShOZXdWYWwpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybWF0dGVkV2hlcmVcIiwgb2JqZWN0LmZvcm1hdHRlZFdoZXJlKVxyXG5cclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5mb3JtYXR0ZWRXaGVyZTtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSAgbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICh0eXBlb2Ygb2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuT3JkZXJCeUNsYXVzZSAhPSBcIlwiKSApXHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBcIiZfT1JERVJCWT1cIiArIG9iamVjdC5PcmRlckJ5Q2xhdXNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBhZ2UgPSBlbmNvZGVVUkkoUGFnZSk7XHJcbiAgICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdQYWdlOicgKyBQYWdlKTtcclxuICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0PVtdO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0PTA7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZldGNoKG9iamVjdCwgUGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxldCBhY3R1YWxSZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCByZXN1bHQsIHt9KVxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1yZXN1bHQuZGF0YVswXS5kYXRhIDpcIik7XHJcbiAgICAgICAgICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCByZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXSA9IG9iamVjdC5zdGFyU2VydmljZXMucGFyc2VUb0RhdGUocmVzdWx0LmRhdGFbMF0uZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUlkgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YVswXS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZX0RPTkU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocmVzdWx0LmRhdGFbMF0uZGF0YVswXSk7XHJcblxyXG4gICAgICAgICAgICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuICAgICAgICAgICAgICByZXN1bHQgPSB7ZGF0YTogcmVzdWx0LmRhdGFbMF0uZGF0YSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aCwgMTApfVxyXG4gICAgICAgICAgICAgICAgaWYoIG9iamVjdC5pc01hc3RlcilcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uICgnc3VjY2VzcycsXCJSZWNvcmRzIHJldHJpZXZlZCA6IFwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSAgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ3JpZCBzZXJ2aWNlcmVhZENvbXBsZXRlZE91dHB1dFwiICk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YS5kYXRhICk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgbGVuZ3RoOlwiICsgcmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgdG90YWw6XCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcIm9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dDpcIisgb2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0KVxyXG4gICAgICAgICAgICBpZiAoICh0eXBlb2Ygb2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0ICE9PSBcInVuZGVmaW5lZFwiKSAgfHwgKG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dCA9PSBmYWxzZSkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVycjpcIixlcnIpXHJcbiAgICAgICAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcImVycm9yOlwiICsgZXJyLmVycm9yLmVycm9yLmNvZGUpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb2JqZWN0LmRvY0NsaWNrU3Vic2NyaXB0aW9uID0gb2JqZWN0LnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCBvYmplY3Qub25Eb2N1bWVudENsaWNrLmJpbmQob2JqZWN0KSk7XHJcbiAgICB9XHJcblxyXG5cclxucHVibGljIGVudGVyUXVlcnlBY3RfZ3JpZCAoZ3JpZCA6IGFueSwgb2JqZWN0KTogdm9pZHtcclxuICBvYmplY3QuZ3JpZC5jYW5jZWw7XHJcbiAgb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgb2JqZWN0LkJvZHkgPVtdO1xyXG5cclxuICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpO1xyXG4gIG9iamVjdC5hZGRIYW5kbGVyKCk7XHJcbiAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgdGhpcy5oZWxwTXNnX2dyaWQgPSAgdGhpcy5nZXROTFMoW10sXCJIRUxQX0VOVEVSX1FVRVJZXCIsdGhpcy5lbnRlclF1ZXJ5TXNnKTtcclxuXHJcblxyXG59XHJcblxyXG5wdWJsaWMgZW50ZXJRdWVyeV9ncmlkIChncmlkIDogYW55LCBvYmplY3QpOiB2b2lke1xyXG4gICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcbiAgICBsZXQgbW9kaWZpZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcIm9iamVjdC5ncmlkLmRhdGFcIik7XHJcbiAgICBpZiAob2JqZWN0LmdyaWQuZGF0YSAhPSBudWxsKXtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IGk6XCIsaSxcIiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgbW9kaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwib2JqZWN0LnNhdmVDdXJyZW50IDpcIiArIG9iamVjdC5Cb2R5Lmxlbmd0aCArIFwiIFwiICsgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCkgKTtcclxuICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMCl7XHJcbiAgICAgIG1vZGlmaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG1vZGlmaWVkID09IHRydWUpIHx8IG9iamVjdC5ncmlkLmlzRWRpdGluZygpID09IHRydWUpXHJcbiAgICB7XHJcbiAgICAgIGRpcnR5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlydHkgPT0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICB0aXRsZSA6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgIG9iamVjdCA6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb24gOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogdGhpcy5lbnRlclF1ZXJ5QWN0X2dyaWQgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZ3JpZCAoIGdyaWQsIG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRTdHJBdXRoKHVzZXIsIHBhc3N3b3JkKXtcclxuICAgIHRoaXMuU3RyQXV0aCA9IHVzZXIgKyBcIjpcIiArIHBhc3N3b3JkO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gYnRvYSh0aGlzLlN0ckF1dGgpO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gXCJCYXNpYyBcIiArIHRoaXMuU3RyQXV0aDtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBpc0FTQ0lJKHN0cikge1xyXG4gICAgcmV0dXJuIC9eW1xceDAwLVxceDdGXSokLy50ZXN0KHN0cik7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2dpbihvYmplY3Q6YW55LCB1c2VyOmFueSwgcGFzc3dvcmQ6YW55KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNBU0NJSSh1c2VyKSl7XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwi2ZBycm9yOiBcIiArIFwiTm90IGEgdmFsaWQgVXNlciBOYW1lXCIpO1xyXG59XHJcbiAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIHRoaXMuc2V0U3RyQXV0aCh1c2VyLCBwYXNzd29yZCk7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSAgXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICBjb25zdCBtZDUgPSBuZXcgTWQ1KCk7XHJcbiAgICBsZXQgcGFzcyA9ICBtZDUuYXBwZW5kU3RyKHBhc3N3b3JkKS5lbmQoKTtcclxuICAgIHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgbGV0IE5ld1ZhbCA9IHtcclxuICAgICAgICBcIlVTRVJOQU1FXCIgOiB1c2VyLFxyXG4gICAgICAgIFwiUEFTU1dPUkRcIiA6IHBhc3NcclxuICAgIH07XHJcblxyXG5cclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiVkVSSUZZX0FETV9VU0VSXCI7XHJcbiAgICBvYmplY3QuQm9keT1bXTtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgXHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgIFwiTmFtZVwiOiBcIlVTRVJOQU1FXCIsXHJcbiAgICAgIFwiVmFsXCI6IHVzZXJcclxuICAgIH07XHJcbiAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSTkFNRVwiXSA9IHVzZXI7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCxQYWdlLG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk9iamVjdCBpbiBsb2dpbiBIRlwiLG9iamVjdC5Cb2R5LHVzZXIpO1xyXG4gICAgICAgIGlmICggcmVzdWx0LmRhdGFbMF0uZGF0YVswXS5VU0VSTkFNRSA9PSB1c2VyICl7XHJcbiAgICAgICAgICB0aGlzLlVTRVJOQU1FID0gdXNlcjtcclxuICAgICAgICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIHRoaXMuVVNFUl9JTkZPID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGlmICh0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5NQVNURVJfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgICAgdGhpcy5VU0VSTkFNRV9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5sb2FkUnVsZXMob2JqZWN0KTtcclxuICAgICAgICAgIGlmIChvYmplY3QudGVzdEVLWUMpe1xyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyIChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkLmVtaXQodGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIFwiV3JvbmcgdXNlciBvciBwYXNzd29yZFwiKTtcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiZXJyb3I6XCIgKyBcIldyb25nIHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0VXNlckluZm8ob2JqZWN0OmFueSwgdXNlcjphbnkpIHtcclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlciA9IHVzZXIudHJpbSgpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiVVNFUk5BTUVcIjogdXNlclxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1VTRVJfSU5GT1JNQVRJT05cIjtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgXCJOYW1lXCI6IFwiVVNFUk5BTUVcIixcclxuICAgICAgXCJWYWxcIjogdXNlclxyXG4gICAgfTtcclxuICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJOQU1FXCJdID0gdXNlcjtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQuZGF0YVswXS5kYXRhWzBdKVxyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhWzBdLlVTRVJOQU1FID09IHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuVVNFUk5BTUUgPSB1c2VyO1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIHRoaXMuVVNFUl9JTkZPID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGlmICgodGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT0gXCJcIikgJiYgKHR5cGVvZiB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPT0gXCJ1bmRlZmluZWRcIikpe1xyXG4gICAgICAgICAgICB0aGlzLk1BU1RFUl9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmxvYWRSdWxlcyhvYmplY3QpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC50ZXN0RUtZQykge1xyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IHVzZXIgKyBcImlzIG5vdCBkZWZpbmVkIGluIFNUQVIgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgXHJcbiAgICAgICAgb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IHVzZXIgKyBcImlzIG5vdCBkZWZpbmVkIGluIFNUQVIgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJ1bGVzUG9zdFF1ZXJ5RGVmID0ge1xyXG4gICAgcnVsZVB0cnNBcnI6W10sXHJcbiAgICBydWxlc0FyciA6IFtdLFxyXG4gICAgYWN0aW9uUHRyc0FyciA6IFtdLFxyXG4gICAgYWN0aW9uc0FyciA6IFtdXHJcbiAgfTtcclxuICBwdWJsaWMgcnVsZXNQcmVRdWVyeURlZiA9IHtcclxuICAgIHJ1bGVQdHJzQXJyOltdLFxyXG4gICAgcnVsZXNBcnIgOiBbXSxcclxuICAgIGFjdGlvblB0cnNBcnIgOiBbXSxcclxuICAgIGFjdGlvbnNBcnIgOiBbXVxyXG4gIH07XHJcbiAgcHVibGljIGhvc3RzQXJyID0gW107XHJcbiAgcHVibGljIGhvc3RzTWFwQXJyID0gW107XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgRk9STUFUX0lTTyhkOmFueSkge1xyXG4gICAgdmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCJUXCIpO1xyXG4gICAgZGF0ZUlzbyA9IGRhdGVJc29BcnJbMF0gKyBcIiBcIiArIGRhdGVJc29BcnJbMV07XHJcbiAgICBkYXRlSXNvID0gZGF0ZUlzby5zdWJzdHIoMCwgMTkpO1xyXG4gICAgcmV0dXJuIGRhdGVJc287XHJcbiAgfVxyXG4gIHB1YmxpYyBMb2dSdWxlKG9iamVjdCwgcnVsZUxvZywgbXNnUmVzcG9uc2UsIHN0YXR1cylcclxuICB7XHJcbiAgICBmdW5jdGlvbiBwcmVwYXJlRGF0YUZvckRCKGRhdGFJbilcclxuXHRcdHtcclxuXHJcblx0XHRcdGxldCBkYXRhT3V0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YUluKTtcclxuXHRcdFx0aWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkYXRhSW46XCIsIGRhdGFJbiwgXCIgZGF0YU91dDpcIiwgZGF0YU91dCk7XHJcblx0XHRcdGRhdGFPdXQgPSBkYXRhT3V0LnNwbGl0KFwiJ1wiKS5qb2luKCdcIicpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YU91dDtcclxuXHJcblx0XHR9XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLW1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSwgXCJydWxlTG9nOlwiLCBydWxlTG9nKTtcclxuICAgIGxldCBkYiA9IHJ1bGVMb2cuZGI7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuXHJcbiAgICBsZXQgUlVMRV9LRVkgPSBydWxlTG9nLnJ1bGUuUlVMRV9LRVk7XHJcblxyXG4gICAgbGV0IGFycmF5ID0gUlVMRV9LRVkuc3BsaXQoXCIsXCIpO1xyXG4gICAgLy9sZXQgcnVsZUtleSA9IHt9O1xyXG4gICAgbGV0IHJ1bGVLZXkgPVwiXCI7XHJcblx0XHRsZXQgcnVsZUtleU5hbWUgPVwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICBsZXQgZWxlbV92YWx1ZSA9IHJ1bGVMb2cucXVlcnlEYXRhW2VsZW1dO1xyXG4gICAgICBpZiAodHlwZW9mIGVsZW1fdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHtcclxuXHRcdFx0XHQvL3J1bGVLZXlbZWxlbV0gPSBlbGVtX3ZhbHVlO1xyXG5cdFx0XHRcdGlmIChydWxlS2V5ICE9IFwiXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBcIl9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBlbGVtX3ZhbHVlO1xyXG5cclxuXHRcdFx0XHRpZiAocnVsZUtleU5hbWUgIT0gXCJcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRydWxlS2V5TmFtZSA9IHJ1bGVLZXlOYW1lICsgXCJfXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJ1bGVLZXlOYW1lID0gcnVsZUtleU5hbWUgKyBlbGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlS2V5OlwiLCBydWxlS2V5LCBcIiBydWxlS2V5TmFtZTpcIiwgcnVsZUtleU5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJSVUxFX0tFWTpcIiwgUlVMRV9LRVkpO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHF1ZXJ5RGF0YSA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5xdWVyeURhdGEpO1xyXG4gICAgLy9sZXQgYm9keVRvU2VuZCA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5ib2R5VG9TZW5kKTtcclxuICAgIGxldCBib2R5VG9TZW5kID0gcnVsZUxvZy5ib2R5VG9TZW5kO1xyXG4gICAgbGV0IHBhcmFtZXRlcnNUb1NlbmQgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cucGFyYW1ldGVyc1RvU2VuZCk7XHJcbiAgIC8vIGxldCBydWxlS2V5U3RyID0gcHJlcGFyZURhdGFGb3JEQihydWxlS2V5KTtcclxuICAgIGxldCBtc2dSZXNwb25zZVN0ciA9IHByZXBhcmVEYXRhRm9yREIobXNnUmVzcG9uc2UpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInF1ZXJ5RGF0YTpcIiArIHF1ZXJ5RGF0YSk7XHJcblxyXG4vL1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTmFtZTtcclxuICAgICAgICAgICAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICAgICAgICAgICAgbGV0IFBhZ2UgPSAgXCJcIjtcclxuICAgICAgICAgICAgICBsZXQgTmV3VmFsID0ge1xyXG4gICAgICAgICAgICAgICAgXCJSVUxFX0tFWVwiIDogcnVsZUtleSAsXHJcbiAgICAgICAgICAgICAgICBcIlJVTEVfS0VZX05BTUVcIiA6IHJ1bGVLZXlOYW1lICxcclxuICAgICAgICAgICAgICAgIFwiU1RBVFVTXCIgOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBcIk1PRFVMRVwiIDogIHJ1bGVMb2cucnVsZS5NT0RVTEUsXHJcbiAgICAgICAgICAgICAgICBcIlJVTEVfSURcIiA6IHJ1bGVMb2cucnVsZS5SVUxFX0lEICxcclxuICAgICAgICAgICAgICAgIFwiQUNUSU9OX0lEXCIgOiBydWxlTG9nLmFjdGlvbi5BQ1RJT05fSUQsXHJcbiAgICAgICAgICAgICAgICBcIlNFTlRfREFURVwiIDpydWxlTG9nLnNlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJNU0dfUkVDRUlWRURcIjogcXVlcnlEYXRhICxcclxuICAgICAgICAgICAgICAgIFwiUEFSQU1FVEVSX1NFTlRcIjogcGFyYW1ldGVyc1RvU2VuZCxcclxuICAgICAgICAgICAgICAgIFwiQk9EWV9TRU5UXCI6IGJvZHlUb1NlbmQgLFxyXG4gICAgICAgICAgICAgICAgXCJNU0dfUkVTUE9OU0VcIiA6IG1zZ1Jlc3BvbnNlU3RyLFxyXG4gICAgICAgICAgICAgICAgXCJMT0dEQVRFXCIgOiBkYXRlSXNvICxcclxuICAgICAgICAgICAgICAgIFwiTE9HTkFNRVwiIDogdXNlck5hbWVcclxuXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIklOU0VSVF9BRE1fUlVMRV9MT0dcIjtcclxuXHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgIHRoaXMucG9zdChvYmplY3QsUGFnZSxvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgcHVibGljIHBlcmZvcm1IdHRwUG9zdCAob2JqZWN0LCBib2R5VG9TZW5kLCBwYXJhbWV0ZXJzVG9TZW5kLCBzZW5kVG8sIHF1ZXJ5RGF0YSwgcnVsZSxhY3Rpb24sIFRyaWdnZXIsIGhvc3REZWYsaG9zdE1hcERlZiwgIGhlYWRlclBhcmFtKVxyXG4gIHtcclxuXHJcbiAgICB2YXJcdHZhbGlkID0gZmFsc2U7XHJcbiAgICBsZXQgZXJyb3IgPSAwO1xyXG4gICAgbGV0IG1zZyA9IFwiXCI7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhvc3Q6ICcnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgcG9ydDogODAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAvLydDb250ZW50LVR5cGUnOiAndGV4dC94bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICBcImF1dGhvcml6YXRpb25cIjogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1yZXEudXJsOlwiLHJlcS51cmwpO1xyXG4gICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXBhdGhuYW1lOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGhuYW1lKTtcclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1wYXRoOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGgpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBpZiAoaG9zdERlZiA9PSBudWxsKVxyXG4gICAgICBob3N0RGVmID0gXCJcIjtcclxuXHJcbiAgICBsZXQgcnVsZUxvZyA9IHtcclxuICAgICAgcnVsZSA6IHJ1bGUsXHJcbiAgICAgIGFjdGlvbiA6IGFjdGlvbixcclxuICAgICAgcXVlcnlEYXRhIDogcXVlcnlEYXRhLFxyXG4gICAgICBib2R5VG9TZW5kIDogYm9keVRvU2VuZCxcclxuICAgICAgcGFyYW1ldGVyc1RvU2VuZCA6IHBhcmFtZXRlcnNUb1NlbmQsXHJcbiAgICAvLyAgXCJkYlwiOiBkYixcclxuICAgICAgc2VudERhdGUgOiBkYXRlSXNvLFxyXG4gICAgICBob3N0RGVmIDogaG9zdERlZlxyXG4gICAgfTtcclxuICAgIGlmIChzZW5kVG8gPT0gXCJXRlwiKVxyXG4gICAge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5CQVNFX1VSTDtcclxuXHJcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gdGhpcy5TdHJBdXRoO1xyXG5cclxuICAgICAgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKGhvc3REZWYgIT0gXCJcIilcclxuICAgICAge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCIvXCIgKyBob3N0RGVmLlBBVEg7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgIT0gXCJcIilcclxuICAgICAgICAgIHBhdGggPSBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZCA7XHJcbiAgICAgICAgbGV0IGhvc3QgPSBob3N0RGVmLkhPU1Q7XHJcbiAgICAgICAgbGV0IHBvcnQgPSAgcGFyc2VJbnQoaG9zdERlZi5QT1JUKTtcclxuICAgICAgICBsZXQgbWV0aG9kID0gaG9zdERlZi5IVFRQX01FVEhPRDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5ob3N0ID0gaG9zdDtcclxuICAgICAgICBvcHRpb25zLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgIG9wdGlvbnMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAvLyBsZXQgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0ICArIHBhdGggKyBwYXJhbWV0ZXJzVG9TZW5kIDtcclxuICAgICAgIGxldCB1cmw6c3RyaW5nICA9IGhvc3REZWYuVVJMIDtcclxuLy9cdFx0XHRcdFx0b3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gICAgICAgIC8vYm9keVRvU2VuZCA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgZXJyb3IgPSAxMDA7XHJcbiAgICAgICAgbXNnID0gXCJ1bmRlZmluZWQgSG9zdCA6XCIgK3NlbmRUbztcclxuICAgICAgICB0aGlzLkxvZ1J1bGUob2JqZWN0LCBydWxlTG9nLCBtc2cgLCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOnZhbGlkOlwiLCB2YWxpZCk7XHJcbiAgICBpZiAodmFsaWQpXHJcbiAgICB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib3B0aW9uczpcIixvcHRpb25zKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1ib2R5VG9TZW5kOlwiICsgYm9keVRvU2VuZCwgXCIgIFRyaWdnZXI6XCIsIFRyaWdnZXIpO1xyXG5cclxuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJQYXJhbSk7XHJcbiAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coIGtleXNbaV0gKyBcIiBcIiArIGhlYWRlclBhcmFtWyBrZXlzW2ldIF0gKSA7XHJcbiAgICAgICAgaWYgKGhlYWRlclBhcmFtWyBrZXlzW2ldIF0gIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcHRpb25zLmhlYWRlcnNba2V5c1tpXV0gPSBoZWFkZXJQYXJhbVsga2V5c1tpXSBdO1xyXG5cclxuICAgICAgICAgIC8vc2NyZWVuQ29uZmlnWyBrZXlzW2ldIF0gPSBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6YWN0aW9uLkFDVElPTl9DT0RFOlwiLCBhY3Rpb24uQUNUSU9OX0NPREUpO1xyXG4gICAgICBpZiAoYWN0aW9uLkFDVElPTl9DT0RFID09IFwiU0VORF9XQUlUXCIpXHJcbiAgICAgIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBzZW5kaW5nTGliID0gXCJyZXF1ZXN0XCI7XHJcbiAgICAgICAgc3RhdHVzID0gMTtcclxuICAgICAgICBsZXQgaGVhZGVycyAgPSAge2hlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgICsgcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQgO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tdXJsOlwiLCB1cmwpO1xyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJHRVRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdChtZXRob2QsIHVybCwgaGVhZGVycyk7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgndXRmOCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJQT1NUXCIpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgIGxldCBkYXRhRm9yU3luYyA9IHsgYm9keSA6IGJvZHlUb1NlbmQsIGhlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICAgIGxldCByZXMgPSByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhRm9yU3luYyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKTtcclxuICAgICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPVwiXCI7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSAyMDApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5nZXRCb2R5KCd1dGY4Jyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzQ29kZTpcIiwgc3RhdHVzQ29kZSxcIiBoZWFkZXJzOlwiLCBoZWFkZXJzLCAgXCIgbXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBjb250ZW50VHlwZS5zZWFyY2goXCJqc29uXCIpO1xyXG4gICAgICAgICAgICBpZiAobiAhPSAtMSlcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShtc2dSZXNwb25zZSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiArICByZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5ib2R5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG1zZyA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKCAoaG9zdE1hcERlZiAhPSBudWxsKSAmJiAgKGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFICE9IG51bGwpICYmIChob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSAhPSBcIlwiKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL3Jlc3VsdCA9IHhzbHRtYXAubWFwRGF0YU91dChyZXN1bHQsIGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFKTtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCByZXN1bHQpO1xyXG4gICAgICAgICAgTG9nUnVsZShydWxlTG9nLCByZXN1bHQsIHN0YXR1cyApO1xyXG4gICAgICAgICAgZXJyb3IgPSBzdGF0dXM7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzICE9IDApXHJcbiAgICAgICAgICAgIG1zZyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICAvL2FzeW5jXHJcbiAgICAgICAgZnVuY3Rpb24gZXh0cmFjdFN0YXR1cyAocnVsZUxvZywgbXNnUmVzcG9uc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NNc2cgPSBydWxlTG9nLmhvc3REZWYuU1VDQ0VTU19NU0c7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS1tc2dSZXNwb25zZTpcIiAsICBtc2dSZXNwb25zZSwgc3VjY2Vzc01zZyk7XHJcbiAgICAgICAgICBsZXQgYXJyYXkgPSBzdWNjZXNzTXNnLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgIGxldCBmaWVsZCA9IGFycmF5WzBdO1xyXG4gICAgICAgICAgbGV0IHZhbHVlID0gYXJyYXlbMV07XHJcblxyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlQXJyID0gbXNnUmVzcG9uc2U7XHJcbiAgICAgICAgICBtc2dSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KG1zZ1Jlc3BvbnNlQXJyKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBcImZpZWxkOlwiLCBmaWVsZCwgXCIgdmFsdWU6XCIsIHZhbHVlLCBcIiBtc2dSZXNwb25zZUFycjpcIiwgbXNnUmVzcG9uc2VBcnIpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tbXNnUmVzcG9uc2VBcnJbZmllbGRdOlwiICwgIG1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXSwgdmFsdWUpO1xyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IDE7XHJcbiAgICAgICAgICBpZiAobXNnUmVzcG9uc2VBcnJbZmllbGRdID09IHZhbHVlKVxyXG4gICAgICAgICAgICBzdGF0dXMgPSAwO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFx0ZXh0cmFjdFJlc3BvbnNlRGF0YShtc2dSZXNwb25zZSwgcmVzcG9uc2VEYXRhSUQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KEVsbSwgZWxtVmFsKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKEVsbSk7XHJcbiAgICAgICAgICAgICAgIGxldCBrID0wO1xyXG4gICAgICAgICAgICAgICBsZXQgZWxtT2JqO1xyXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoIGsgPCBrZXlzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzW2tdID09IGVsbVZhbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVsbU5hbWUgPSBrZXlzW2tdO1xyXG4gICAgICAgICAgICAgICAgICBlbG1PYmogPSBFbG1bZWxtTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZWxtT2JqOlwiLCBlbG1PYmopO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsbU9iajtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSByZXNwb25zZURhdGFJRC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5LZXkgPSBnZXRLZXkobXNnUmVzcG9uc2UsIGFycmF5W2ldKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJldHVybktleS5sZW5ndGg6XCIsIHJldHVybktleS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuS2V5Lmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICAgIG1zZ1Jlc3BvbnNlID0gcmV0dXJuS2V5WzBdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbXNnUmVzcG9uc2UgPSByZXR1cm5LZXk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZnVuY3Rpb24gIGhhbmRsZVJlc3BvbnNlRW5kKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlKXtcclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLkxvZ1J1bGUocnVsZUxvZywgbXNnUmVzcG9uc2UsIHN0YXR1cyk7XHJcblxyXG5cclxuICAgICAgICAgIC8vXHQuUlVMRV9JRCArIFwiLFwiICsgIGFjdGlvbi5BQ1RJT05fSUQgKyBcIixcIiArIHVzZXJzLmdldFVzZXJOYW1lKCkgKyBcIixcIiAgKyBkYXRlSXNvO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0taGFuZGxlUmVzcG9uc2U6c3RhdHVzOlwiICwgIHN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9keShtc2dSZXNwb25zZSl7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKVxyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ1Jlc3BvbnNlOmJvZHlcIiwgbXNnUmVzcG9uc2UuYm9keSlcclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZS5ib2R5XHJcbiAgICAgICAgfVxyXG4gIC8qXHJcbiAgICAgICAgbGV0IGhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UsICBydWxlTG9nKXtcclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9ICcnXHJcbiAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xyXG4gICAgICAgICAgbXNnUmVzcG9uc2UgKz0gY2h1bms7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgaGFuZGxlUmVzcG9uc2VFbmQocnVsZUxvZywgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5TdHJBdXRoKVxyXG4gICAgICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL2pzb25cIiApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6aGVhZGVyczpcIiwgaGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGJvZHlUb1NlbmQgPT0gXCJcIilcclxuICAgICAgICAgIGJvZHlUb1NlbmQgPSBudWxsO1xyXG4gICAgICAgIGxldCBib2R5VG9TZW5kS1NPTiA9IEpTT04ucGFyc2UoYm9keVRvU2VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjpib2R5VG9TZW5kS1NPTjpcIiwgYm9keVRvU2VuZEtTT04pO1xyXG5cclxuICAgICAgICBsZXQgdXJsOnN0cmluZyA9IGhvc3REZWYuVVJMICsgcGFyYW1ldGVyc1RvU2VuZCA7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS11cmw6XCIsIHVybCk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KFxyXG4gICAgICAgICAgb3B0aW9ucy5tZXRob2QsIHVybCwgYm9keVRvU2VuZEtTT04gLCBoZWFkZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1yZXF1ZXN0OlwiLCByZXF1ZXN0LCBcIiBib2R5VG9TZW5kS1NPTjpcIiwgYm9keVRvU2VuZEtTT04pXHJcbiAgICAgICAgbGV0IG1zZ0JvZHlBbGwgO1xyXG4gICAgICAgIHRoaXMuc3luY0ZsYWcgPSAxO1xyXG4vL2h0dHBzOi8vZGV2ZWxvcHBhcGVyLmNvbS9nZXR0aW5nLXN0YXJ0ZWQtd2l0aC1hbmd1bGFyLWh0dHAtY2xpZW50L1xyXG4gICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBjYWxsIHN1Y2Nlc3NmdWwgdmFsdWUgcmV0dXJuZWQgaW4gYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZ0JvZHkgPSBnZXRCb2R5KHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2dCb2R5ICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keUFsbCA9ICBtc2dCb2R5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJQVVQgY2FsbCBpbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcImVycm9yIGNhbGxpbmc6IFwiICsgdXJsICsgXCI6XCIgKyBlcnJvci5lcnJvci5lcnJvciApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRoZSAgb2JzZXJ2YWJsZSBpcyBub3cgY29tcGxldGVkOm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2dCb2R5QWxsICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGV4dHJhY3RTdGF0dXMgKHJ1bGVMb2csIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS11bGVMb2cucnVsZTpcIiAsICBydWxlTG9nLnJ1bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRyaWdnZXIgPT0gXCJQT1NUX1FVRVJZXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGFJRCA9IHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX0lEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpyZXNwb25zZURhdGFJRDpcIiAsICByZXNwb25zZURhdGFJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSBleHRyYWN0UmVzcG9uc2VEYXRhICggbXNnQm9keUFsbCxyZXNwb25zZURhdGFJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJlc3BvbnNlRGF0YTpcIiAsICByZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9OQU1FOlwiICwgIHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9OQU1FXSA9IHJlc3BvbnNlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpvYmplY3QudGFic0FQSVJlc3BvbnNlOlwiLCBvYmplY3QudGFic0FQSVJlc3BvbnNlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9nUnVsZShvYmplY3QsIHJ1bGVMb2csIG1zZ0JvZHlBbGwsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgLypcclxuICAgICAgICBsZXQgcmVxTmV3ID0gdGhpcy5odHRwLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24ocmVzcG9uc2UpeyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSwgIHJ1bGVMb2cpOyB9KTtcclxuICAgICAgICByZXFOZXcub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgIGVycm9yID0gZXJyO1xyXG4gICAgICAgICAgbXNnID0gXCJFcnJvciBzZW5kaW5nIHRvIEhvc3QgOlwiICtzZW5kVG8gO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coIG1zZyArIFwiIEVycm9yOlwiICsgZXJyICk7XHJcbiAgICAgICAgICB0aGlzLkxvZ1J1bGUocnVsZUxvZywgbXNnICsgXCIgRXJyb3I6XCIgKyBlcnIsIDQwMCApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpO1xyXG4gICAgICAgIHJlcU5ldy53cml0ZShib2R5VG9TZW5kKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpO1xyXG4gICAgICAgIHJlcU5ldy5lbmQoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUzXCIpO1xyXG4gICAgICAgICovXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBsZXQgc3RhdHVzUmVjID17XHJcbiAgICAgIHN0YXR1cyA6IGVycm9yLFxyXG4gICAgICBtc2cgOiBtc2dcclxuICAgIH07XHJcblxyXG4gICAgLypsZXQgc3RhdHVzID0gMTtcclxuICAgIGlmICghdmFsaWQpe1xyXG4gICAgICBzdGF0dXNSZWMuc3RhdHVzID0gMTtcclxuICAgICAgc3RhdHVzUmVjLm1zZyA9XHJcbiAgICB9Ki9cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsaWQ6XCIsIHZhbGlkLCBcIiBzdGF0dXM6XCIsIHN0YXR1c1JlYyk7XHJcblxyXG4gICAgcmV0dXJuIChzdGF0dXNSZWMpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNlbmRUb1NlcnZlcihvYmplY3QsIGFjdGlvbnNBcnIsIHF1ZXJ5RGF0YSwgcnVsZSxhY3Rpb24sIFRyaWdnZXIsICBob3N0c0FyciwgaG9zdHNNYXBBcnIpe1xyXG4gICAgZnVuY3Rpb24gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpXHJcblx0XHR7XHJcblx0XHRmdW5jdGlvbiBnZXRPUkRFUl9GSUVMRFNEYXRhKHBhcmFtLG9yZGVyRmllbGRzKVxyXG5cdFx0e1xyXG5cdFx0ICAgICAgbGV0IHZhbCA9IFwiXCI7XHJcblx0XHQgICAgICBpZiAob3JkZXJGaWVsZHMgIT0gXCJcIilcclxuXHRcdCAgICAgIHtcclxuXHRcdCAgICAgICAgbGV0IGFycmF5ID0gcGFyYW0uc3BsaXQoXCIuXCIpO1xyXG5cdFx0ICAgICAgICBsZXQgZmllbGROYW1lID0gYXJyYXlbMV07XHJcblx0XHQgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZmllbGROYW1lOlwiLGZpZWxkTmFtZSwgXCIgb3JkZXJGaWVsZHM6XCIsIG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlckZpZWxkcyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb3JkZXJGaWVsZHMgPSBKU09OLnBhcnNlKG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9yZGVyRmllbGRzOlwiLG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgICBsZXQgZmllbGRzRGF0YSA9IG9yZGVyRmllbGRzLmRhdGE7XHJcbiAgICAgICAgICAgICAgdmFsID0gZmllbGRzRGF0YVtmaWVsZE5hbWVdO1xyXG4gICAgICAgICAgICAgIH1cclxuXHRcdCAgICAgIH1cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHRcdFx0bGV0IHZhbCA9IHBhcmFtRGF0YTtcclxuICAgICAgdmFyIG4gPTA7XHJcblxyXG5cdFx0XHRuID0gcGFyYW1EYXRhLnNlYXJjaChcIjpcIik7XHJcblx0XHRcdGlmIChuICE9IC0xKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGFycmF5ID0gcGFyYW1EYXRhLnNwbGl0KFwiOlwiKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChpICE9IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG4gPSBhcnJheVtpXS5zZWFyY2goXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggXCJuOlwiICwgbiAsIFwiYXJyYXlbaV06XCIsIGFycmF5W2ldKTtcclxuXHRcdFx0XHRcdFx0aWYgKG4gPT0gLTEpXHJcblx0XHRcdFx0XHRcdFx0biA9IGFycmF5W2ldLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0aWYgKG4gIT0gLTEpXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcGFyYW0gPSBhcnJheVtpXS5zbGljZSgwLCBuKTtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtOlwiK3BhcmFtKTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IG5pbmNsdWRlcyA9IHBhcmFtLmluY2x1ZGVzKFwiLlwiKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggXCJuaW5jbHVkZXM6XCIgLCBuaW5jbHVkZXMpO1xyXG4gICAgICAgICAgICAgIGlmIChuaW5jbHVkZXMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBnZXRPUkRFUl9GSUVMRFNEYXRhKHBhcmFtLHF1ZXJ5RGF0YS5PUkRFUl9GSUVMRFMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlXHJcblx0XHRcdFx0XHRcdFx0dmFsID0gcXVlcnlEYXRhW3BhcmFtXTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gdmFsLnRyaW0oKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtOlwiICwgcGFyYW0sIFwiIHZhbDpcIiwgdmFsICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dmFsID0gdmFsLnNwbGl0KFwiJ1wiKS5qb2luKFwiXCIpO1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG4gICAgZnVuY3Rpb24gZ2V0SG9zdChzZW5kVG8saG9zdHNBcnIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpID0wO1xyXG5cdFx0XHR3aGlsZSAoIGkgPCBob3N0c0Fyci5sZW5ndGgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0taG9zdHNBcnJbaV0uSE9TVF9JRCA6XCIsIGhvc3RzQXJyW2ldLkhPU1RfSUQgICwgXCIgc2VuZFRvOlwiLCBzZW5kVG8pO1xyXG5cdFx0XHRcdGlmIChob3N0c0FycltpXS5IT1NUX0lEID09IHNlbmRUbylcclxuXHRcdFx0XHRcdHJldHVybiBob3N0c0FycltpXTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gZ2V0SG9zdE1hcChob3N0RGVmLCBtYXBJRCxob3N0c01hcEFycilcclxuXHRcdHtcclxuXHRcdFx0bGV0IGkgPTA7XHJcblx0XHRcdGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS1tYXBJRDpcIiwgbWFwSUQgICwgXCIgaG9zdERlZi5NQVBfSUQ6XCIsIGhvc3REZWYuTUFQX0lEKTtcclxuXHRcdFx0aWYgKCAobWFwSUQgIT0gbnVsbCkgJiYgKG1hcElEICE9IFwiXCIpIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdoaWxlICggaSA8IGhvc3RzTWFwQXJyLmxlbmd0aClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoICggaG9zdHNNYXBBcnJbaV0uSE9TVF9JRCA9PSBob3N0RGVmLkhPU1RfSUQpICYmIChtYXBJRCA9PSBob3N0c01hcEFycltpXS5NQVBfSUQpIClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGhvc3RzTWFwQXJyW2ldO1xyXG5cdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKmFjdGlvbnNBcnI6XCIsIGFjdGlvbnNBcnIpO1xyXG4gICAgICBsZXQgc3RhdHVzUmVjO1xyXG4gICAgICBsZXQgc2VuZFRvID0gYWN0aW9uc0Fyci5TRU5EX1RPO1xyXG4gICAgICBsZXQgcXJ5UGFyYW0gPSB7fTtcclxuICAgICAgbGV0IGhlYWRlclBhcmFtID17fTtcclxuICAgICAgbGV0IGJvZHlUb1NlbmRBcnIgPSBbXTtcclxuICAgICAgbGV0IGJvZHlUb1NlbmQgPSBcIlwiO1xyXG4gICAgICBsZXQgcGFyYW1ldGVyc1RvU2VuZCA9IFwiXCI7XHJcbiAgICAgIGxldCBob3N0RGVmID0gZ2V0SG9zdChzZW5kVG8saG9zdHNBcnIpO1xyXG4gICAgICBsZXQgaG9zdE1hcERlZiA9IGdldEhvc3RNYXAoaG9zdERlZiwgYWN0aW9uLk1BUF9JRCxob3N0c01hcEFycik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaG9zdE1hcERlZjpcIiwgaG9zdE1hcERlZik7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIioqKipob3N0RGVmLkhFQURFUjpcIiwgaG9zdERlZi5IRUFERVIpO1xyXG5cclxuICAgICAgaWYgKCAoaG9zdERlZi5IRUFERVIgIT0gbnVsbCkgJiYgKGhvc3REZWYuSEVBREVSICE9IFwiXCIpIClcclxuICAgICAge1xyXG4gICAgICAgIGxldCBhcnJheSA9IGhvc3REZWYuSEVBREVSLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlIChwYXJhbURhdGEsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBoZWFkZXJQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIGlmICggKGFjdGlvbnNBcnIuQk9EWV9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLkJPRFlfREFUQSAhPSBcIlwiKSApXHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgYm9keURhdGEgPSBhY3Rpb25zQXJyLkJPRFlfREFUQTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImJvZHlEYXRhOlwiLCBib2R5RGF0YSk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gYm9keURhdGEuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZSAocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBxcnlQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnlQYXJhbTpoZXJlXCIpO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnlQYXJhbTpcIiwgcXJ5UGFyYW0gLCBcIiBxcnlQYXJhbS5sZW5ndGggOlwiLCBPYmplY3Qua2V5cyhxcnlQYXJhbSkubGVuZ3RoKTtcclxuICAgICAgICBib2R5VG9TZW5kQXJyLnB1c2gocXJ5UGFyYW0pO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1ob3N0RGVmOlwiLCBob3N0RGVmKTsvL2Z1YWRcclxuXHJcbiAgICAgICAgaWYgKGJvZHlUb1NlbmRBcnIubGVuZ3RoICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLyppZiAoIChob3N0TWFwRGVmICE9IG51bGwpICYmICAoaG9zdE1hcERlZi5YU0xUX1NFTkQgIT0gbnVsbCkgJiYgKGhvc3RNYXBEZWYuWFNMVF9TRU5EICE9IFwiXCIpIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJvZHlUb1NlbmQgPSB4c2x0bWFwLm1hcERhdGEoYm9keVRvU2VuZEFyciwgaG9zdE1hcERlZi5YU0xUX1NFTkQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgeyovXHJcbiAgICAgICAgICAgIGJvZHlUb1NlbmQgPSBKU09OLnN0cmluZ2lmeShib2R5VG9TZW5kQXJyKVxyXG4gICAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgICAvKlxyXG4gICAgICBsZXQgaGV4b3V0ID0gaGV4ZHVtcChib2R5VG9TZW5kLCAxNikgO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhleG91dDpcIixoZXhvdXQpO1xyXG4gICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IFwiXCIpIClcclxuICAgICAge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJEYXRhID0gYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlckRhdGE6XCIsIHBhcmFtZXRlckRhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRGF0YS5sZW5ndGg6XCIscGFyYW1ldGVyRGF0YS5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gcGFyYW1ldGVyRGF0YS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZSAocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXBhcmFtOlwiLCBwYXJhbSwgXCIgcGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgPT0gXCJcIilcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IFwiP1wiICsgcGFyYW0gKyBcIj1cIiArIHBhcmFtRGF0YTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IHBhcmFtZXRlcnNUb1NlbmQgKyBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImJvZHlUb1NlbmQ6XCIsIGJvZHlUb1NlbmQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlcnNUb1NlbmQ6XCIsIHBhcmFtZXRlcnNUb1NlbmQpO1xyXG5cclxuICAgICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtSHR0cFBvc3Qob2JqZWN0LCBib2R5VG9TZW5kLCBwYXJhbWV0ZXJzVG9TZW5kLCBzZW5kVG8sIHF1ZXJ5RGF0YSwgcnVsZSxhY3Rpb24sIFRyaWdnZXIsIGhvc3REZWYsaG9zdE1hcERlZiwgIGhlYWRlclBhcmFtKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0IHBlcmZvcm1IdHRwUG9zdDogc3RhdHVzOlwiLCBzdGF0dXNSZWMpO1xyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIHB1YmxpYyAgcGVyZm9ybUFjdGlvbiggb2JqZWN0LCBxcnksIHB0ciwgcXVlcnlEYXRhLCBydWxlLCBydWxlc0RlZiwgVHJpZ2dlciwgaG9zdHNBcnIsIGhvc3RzTWFwQXJyKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tcGVyZm9ybUFjdGlvbjpydWxlc0RlZjpcIixydWxlc0RlZik7XHJcbiAgICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgICBsZXQgc3RhdHVzUmVjID17XHJcbiAgICAgICAgc3RhdHVzIDogMCxcclxuICAgICAgICBtc2cgOiBcIlwiXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYuYWN0aW9uUHRyc0FycltxcnldO1xyXG4gICAgICBpZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjpcIiwgcHRyKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cjpcIiwgYWN0aW9uUHRyKTtcclxuICAgICAgICBsZXQgaT1wdHI7XHJcbiAgICAgICAgbGV0IHB0cjIgPVwiXCI7XHJcblxyXG4gICAgICAgIGxldCBwdHIxID0gYWN0aW9uUHRyW2ldO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvblB0cltpKzFdICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgcHRyMiA9IGFjdGlvblB0cltpKzFdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHB0cjIgPSBydWxlc0RlZi5hY3Rpb25zQXJyLmxlbmd0aFxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjE6XCIscHRyMSwgXCIgcHRyMjpcIiwgcHRyMik7XHJcbiAgICAgICAgbGV0IGogPSBwdHIxO1xyXG4gICAgICAgIGxldCBydWxlSUQgPSBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLlJVTEVfSUQ7XHJcbiAgICAgICAgd2hpbGUgKCAoIGogPCBwdHIyKSAmJiAoc3RhdHVzID09IDApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAocnVsZUlEICE9IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uUlVMRV9JRClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYuYWN0aW9uc0FycjpcIixydWxlc0RlZi5hY3Rpb25zQXJyW2pdKTtcclxuICAgICAgICAgIGlmICggKCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiU0VORFwiICkgfHwgKCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiU0VORF9XQUlUXCIgKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuc2VuZFRvU2VydmVyKCBvYmplY3QsIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0sIHF1ZXJ5RGF0YSwgcnVsZSxydWxlc0RlZi5hY3Rpb25zQXJyW2pdLCBUcmlnZ2VyLCBob3N0c0FyciwgaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXNSZWMuc3RhdHVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgcm91dGluZV9uYW1lLCBob3N0c0FyciwgaG9zdHNNYXBBcnIpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlc0J5VHJpZ2dlcjpydWxlc0RlZjpcIiwgcnVsZXNEZWYsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgIGxldCBzdGF0dXNSZWM7XHJcbiAgICBmdW5jdGlvbiBnZXRGaWVsZERhdGEocnVsZSwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gcnVsZS5GSUVMRC5zcGxpdCAoXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcnJheTpcIixhcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVyRmllbGRzID0gcXVlcnlEYXRhW1wiT1JERVJfRklFTERTXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3JkZXJGaWVsZHM6XCIsb3JkZXJGaWVsZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXJGaWVsZHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlckZpZWxkcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRzRGF0YSA9IEpTT04ucGFyc2Uob3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpZWxkc0RhdGE6XCIsZmllbGRzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZmllbGRzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleXM6XCIsa2V5cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPTA7IGo8IGtleXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkT3JkZXJGaWVsZHMga2V5OlwiLCBrZXlzW2pdICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzW2pdID09IGFycmF5WzBdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqRGF0YSA9IGZpZWxkc0RhdGFba2V5c1tqXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9iakRhdGE6XCIsIG9iakRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpEYXRhLmxlbmd0aCkgPT0gXCJ1bmRlZmluZWRcIikgIC8vIGl0IGlzIGEgZm9ybSAob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBvYmpEYXRhW2FycmF5WzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gaXQgaXMgYSBncmlkIChhcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iakRhdGFbMF0pICE9IFwidW5kZWZpbmVkXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBvYmpEYXRhWzBdW2FycmF5WzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IHF1ZXJ5RGF0YVtydWxlLkZJRUxEXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmllbGREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1J1bGUocnVsZSwgcXVlcnlEYXRhKVxyXG4gICAge1xyXG4gICAgICBsZXQgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1ydWxlOlwiLHJ1bGUsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgLy9sZXQgZmllbGREYXRhID0gcXVlcnlEYXRhW3J1bGUuRklFTERdO1xyXG4gICAgICBsZXQgZmllbGREYXRhID0gZ2V0RmllbGREYXRhKHJ1bGUsIHF1ZXJ5RGF0YSk7XHJcblxyXG4gICAgICBzd2l0Y2gocnVsZS5PUEVSQVRJT04pIHtcclxuICAgICAgICBjYXNlIFwiPVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA9PSBydWxlLkZJRUxEX1ZBTFVFKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8IHJ1bGUuRklFTERfVkFMVUUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8PSBydWxlLkZJRUxEX1ZBTFVFKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPlwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA+IHJ1bGUuRklFTERfVkFMVUUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI+PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA+PSBydWxlLkZJRUxEX1ZBTFVFKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPD5cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgIT0gcnVsZS5GSUVMRF9WQUxVRSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIklOU1RSXCI6XHJcbiAgICAgICAgICBpZiAocnVsZS5GSUVMRF9WQUxVRS5zZWFyY2goZmllbGREYXRhKSAhPSAtMSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0MzpydWxlTWF0Y2g6XCIsIHJ1bGVNYXRjaCwgXCIgZmllbGREYXRhOlwiLCBmaWVsZERhdGEsIFwiIE9QRVJBVElPTjpcIiwgcnVsZS5PUEVSQVRJT04sICBcIiBGSUVMRF9WQUxVRTpcIiwgcnVsZS5GSUVMRF9WQUxVRSk7XHJcbiAgICAgIHJldHVybiBydWxlTWF0Y2g7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgc3RhdHVzUmVjID17XHJcbiAgICAgIHN0YXR1cyA6IDAsXHJcbiAgICAgIG1zZyA6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHFyeSA9IHF1ZXJ5RGF0YS5fUVVFUlk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tIF9RVUVSWTpcIiwgcXVlcnlEYXRhLl9RVUVSWSwgXCIgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIscnVsZXNEZWYucnVsZVB0cnNBcnIpO1xyXG4gICAgbGV0IHJ1bGVQdHIgPSBydWxlc0RlZi5ydWxlUHRyc0FycltxcnldO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyOlwiLHJ1bGVQdHIpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcnVsZVB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgIHtcclxuICAgICAgLy9sZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYucnVsZVB0cnNBcnJbcXJ5XTtcclxuICAgICAgLy9pZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaT0wO1xyXG5cclxuICAgICAgICAvL3doaWxlICggKGk8cnVsZVB0ci5sZW5ndGgpICYmIChzdGF0dXMgPT0gMCkgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhciBwdHIxID0gcnVsZVB0cltpXTtcclxuICAgICAgICAgICAgICB2YXIgcHRyMiA9IHJ1bGVQdHJbcnVsZVB0ci5sZW5ndGggLTFdO1xyXG4gICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgcnVsZVB0cltpKzFdICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgIC8vICAgICB2YXIgcHRyMiA9IHJ1bGVQdHJbaSsxXTtcclxuICAgICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgICAgLy8gICAgIC8vdmFyIHB0cjIgPSBydWxlc0RlZi5ydWxlc0Fyci5sZW5ndGhcclxuICAgICAgICAgICAgICAvLyAgICAgdmFyIHB0cjIgPSBwdHIxKzFcclxuXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInB0cjE6XCIscHRyMSwgXCIgcHRyMjpcIiwgcHRyMik7XHJcbiAgICAgICAgICAgICAgdmFyIGogPSBwdHIxO1xyXG4gICAgICAgICAgICAgIHdoaWxlICggaiA8PSBwdHIyKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tcnVsZXNEZWYucnVsZXNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLlJVTEVfSUQsIFwiIGl0ZW06XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLklURU0pO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgcnVsZU1hdGNoID0gY2hlY2tSdWxlKHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1J1bGVzQnlUcmlnZ2VyOkNvbmRpdGlvbnMgcnVsZU1hdGNoOlwiLCBydWxlTWF0Y2gsIFwiIGZvciBydWxlOlwiLCBydWxlc0RlZi5ydWxlc0FycltwdHIxXS5SVUxFX0lEKTtcclxuICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IHRydWUpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3N0YXR1c1JlYyA9IHBlcmZvcm1BY3Rpb24oZGIscmVxLCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgKTtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtQWN0aW9uKCAgb2JqZWN0LCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgLGhvc3RzQXJyLCBob3N0c01hcEFycik7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1JlYy5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy9pZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgIC8vICBicmVhaztcclxuICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1c1JlYztcclxuICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrUnVsZXMob2JqZWN0LHJ1bGVzRGVmLCBhY3R1YWxSZXN1bHQsVHJpZ2dlcil7XHJcbiAgICBpZih0aGlzLnBhcmFtQ29uZmlnLmlzQ2hlY2tSdWxlcyA9PSBmYWxzZSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczpcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpXHJcblxyXG4gICAgaWYgKFRyaWdnZXIgPT0gXCJQT1NUX1FVRVJZXCIpXHJcbiAgICB7XHJcbiAgICAgIGlmICAodHlwZW9mIGFjdHVhbFJlc3VsdC5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICBsZXQgdHJhbnNEYXRhID0gYWN0dWFsUmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IHRyYW5zRGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6dHJhbnNEYXRhW2ldOlwiLCB0cmFuc0RhdGFbaV0saSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6YWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnk6XCIsIGFjdHVhbFJlc3VsdC5kYXRhWzBdLnF1ZXJ5KVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOmFjdHVhbFJlc3VsdC5kYXRhWzBdIEhGIHBsZWFzZVwiLCBhY3R1YWxSZXN1bHQuZGF0YVswXS5kYXRhKTtcclxuICAgICAgICAgIGxldCBxdWVyeURhdGEgPSB0cmFuc0RhdGFbaV07XHJcbiAgICAgICAgICBxdWVyeURhdGFbXCJfUVVFUllcIl0gPSBhY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeTtcclxuICAgICAgICAgIC8vICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgICB0aGlzLmNoZWNrUnVsZXNCeVRyaWdnZXIob2JqZWN0LCBydWxlc0RlZiwgcXVlcnlEYXRhLCBUcmlnZ2VyLCB0aGlzLnJvdXRpbmVfbmFtZSwgdGhpcy5ob3N0c0FyciwgdGhpcy5ob3N0c01hcEFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlICAgaWYgKFRyaWdnZXIgPT0gXCJQUkVfUVVFUllcIilcclxuICAgIHtcclxuXHJcbiAgICAgIGlmICAodHlwZW9mIGFjdHVhbFJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBhY3R1YWxSZXN1bHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3R1YWxSZXN1bHRbaV06XCIsIGFjdHVhbFJlc3VsdFtpXSlcclxuICAgICAgICAgIGxldCBxdWVyeURhdGEgPSBhY3R1YWxSZXN1bHRbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgdGhpcy5jaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgdGhpcy5yb3V0aW5lX25hbWUsIHRoaXMuaG9zdHNBcnIsIHRoaXMuaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOkRvbmVcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpO1xyXG4gICAgcmV0dXJuIFRyaWdnZXI7XHJcblxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vL1xyXG5wdWJsaWMgc3RvcmVBY3Rpb25zUHRycyhhY3Rpb25zLCBydWxlc0RlZilcclxue1xyXG4gIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICBsZXQgY3VycmVudFJVTEVfSUQgPSBcIlwiO1xyXG4gIGxldCBhY3Rpb25QdHJzID1bXTtcclxuXHJcbiAgZm9yIChsZXQgaT0wOyBpPGFjdGlvbnMubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAgaWYgKCAoIGN1cnJlbnRRVUVSWV9ERUYgIT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYgKSAmJiAoIGN1cnJlbnRSVUxFX0lEICE9IGFjdGlvbnNbaV0uUlVMRV9JRCApIClcclxuICAgIHtcclxuICAgICAgaWYgKCBpID09IDApXHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgcnVsZXNEZWYuYWN0aW9uUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IGFjdGlvblB0cnM7XHJcbiAgICAgICAgYWN0aW9uUHRycyA9IFtdO1xyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFFVRVJZX0RFRiA9IGFjdGlvbnNbaV0uUVVFUllfREVGIDtcclxuICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQgO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnMxOlwiLHJ1bGVQdHJzKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggKCBjdXJyZW50UVVFUllfREVGID09IGFjdGlvbnNbaV0uUVVFUllfREVGICkgJiYgKCBjdXJyZW50UlVMRV9JRCAhPSBhY3Rpb25zW2ldLlJVTEVfSUQgKSApXHJcbiAgICB7XHJcbiAgICAgIGN1cnJlbnRSVUxFX0lEID0gYWN0aW9uc1tpXS5SVUxFX0lEIDtcclxuICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cnMyOlwiLGFjdGlvblB0cnMpO1xyXG4gIH1cclxuICAvL2FjdGlvblB0cnMucHVzaChpKTtcclxuICBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gYWN0aW9uUHRycztcclxuICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLmFjdGlvblB0cnNBcnI6XCIscnVsZXNEZWYuYWN0aW9uUHRyc0Fycik7XHJcbn1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9yZVJ1bGVzUHRycyhydWxlcywgcnVsZXNEZWYpXHJcbiAgICB7XHJcbiAgICAgIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICAgICAgbGV0IGN1cnJlbnRSVUxFX0lEID0gXCJcIjtcclxuICAgICAgbGV0IHJ1bGVQdHJzID1bXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTxydWxlcy5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJ1bGVzW2ldLlFVRVJZX0RFRiArIFwiIDogXCIgKyBydWxlc1tpXS5SVUxFX0lEICsgXCIgICAgICAgICAgXCIgKyBjdXJyZW50UVVFUllfREVGICsgXCIgOiBcIiArIGN1cnJlbnRSVUxFX0lEKTtcclxuICAgICAgICBpZiAoICggY3VycmVudFFVRVJZX0RFRiAhPSBydWxlc1tpXS5RVUVSWV9ERUYgKSAmJiAoIGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgbm90IGVxdWFsXCIpO1xyXG4gICAgICAgICAgaWYgKCBpID09IDApXHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tc3RvcmluZyBydWxlUHRyczI6XCIscnVsZVB0cnMpO1xyXG4gICAgICAgICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgICAgICAgICBydWxlUHRycyA9IFtdO1xyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGN1cnJlbnRRVUVSWV9ERUYgPSBydWxlc1tpXS5RVUVSWV9ERUYgO1xyXG4gICAgICAgICAgY3VycmVudFJVTEVfSUQgPSBydWxlc1tpXS5SVUxFX0lEIDtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczE6XCIscnVsZVB0cnMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoICggY3VycmVudFFVRVJZX0RFRiA9PSBydWxlc1tpXS5RVUVSWV9ERUYgKSAmJiAoIGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgbm90IGVxdWFsMlwiKTtcclxuICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQgO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczI6XCIscnVsZVB0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggKCBjdXJyZW50UVVFUllfREVGID09IHJ1bGVzW2ldLlFVRVJZX0RFRiApICYmICggY3VycmVudFJVTEVfSUQgPT0gcnVsZXNbaV0uUlVMRV9JRCApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiBlcXVhbDNcIik7XHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRCA7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJydWxlUHRyczM6XCIscnVsZVB0cnMpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMjpcIixydWxlUHRycyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9ydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3QzOnJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIGxvYWRSdWxlcyhvYmplY3Qpe1xyXG5cclxuICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuICAgIGxldCBQYWdlID0gIFwiXCI7XHJcbiAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9JVEVNXCI7XHJcbiAgICBOZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBPU1RfUVVFUllcIjtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpOZXdWYWw6XCIsIE5ld1ZhbClcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfQUNUSU9OXCI7XHJcbiAgICBOZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBPU1RfUVVFUllcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0hPU1RcIjtcclxuICAgIE5ld1ZhbFtcIkhPU1RfSURcIl0gPSBcIiVcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0hPU1RfTUFQXCI7XHJcbiAgICBOZXdWYWxbXCJIT1NUX0lEXCJdID0gXCIlXCI7XHJcbiAgICBOZXdWYWxbXCJNQVBfSURcIl0gPSBcIiVcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LFBhZ2Usb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcblxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVQdHJzQXJyID0gW107XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZVJ1bGVzUHRycyhyZXN1bHQuZGF0YVswXS5kYXRhLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVzQXJyID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVBY3Rpb25zUHRycyhyZXN1bHQuZGF0YVsxXS5kYXRhLCAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZik7XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uc0FyciA9IHJlc3VsdC5kYXRhWzFdLmRhdGE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcblxyXG4gICAgICB0aGlzLmhvc3RzQXJyID0gcmVzdWx0LmRhdGFbMl0uZGF0YTtcclxuICAgICAgdGhpcy5ob3N0c01hcEFyciA9IHJlc3VsdC5kYXRhWzNdLmRhdGE7XHJcblxyXG4gICAgICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgb2JqZWN0LkJvZHkgPVtdO1xyXG4gICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UgKTtcclxuICAgIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcbm9iamVjdC5Cb2R5ID1bXTtcclxuUGFnZSA9ICBcIlwiO1xyXG5OZXdWYWwgPSB7fTtcclxuTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfSVRFTVwiO1xyXG5OZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBSRV9RVUVSWVwiO1xyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbm9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbk5ld1ZhbCA9IHt9O1xyXG5OZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9BQ1RJT05cIjtcclxuTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQUkVfUVVFUllcIjtcclxub2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuXHJcblxyXG50aGlzLnBvc3Qob2JqZWN0LFBhZ2Usb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYucnVsZVB0cnNBcnIgPSBbXTtcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IFtdO1xyXG5cclxuICB0aGlzLnN0b3JlUnVsZXNQdHJzKHJlc3VsdC5kYXRhWzBdLmRhdGEsIHRoaXMucnVsZXNQcmVRdWVyeURlZilcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYucnVsZXNBcnIgPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG5cclxuICB0aGlzLnN0b3JlQWN0aW9uc1B0cnMocmVzdWx0LmRhdGFbMV0uZGF0YSwgIHRoaXMucnVsZXNQcmVRdWVyeURlZik7XHJcbiAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLmFjdGlvbnNBcnIgPSByZXN1bHQuZGF0YVsxXS5kYXRhO1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUHJlUXVlcnlEZWZcIiwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKVxyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy9cclxuICBvYmplY3QuQm9keSA9W107XHJcbn0sXHJcbmVyciA9PiB7XHJcbiAgb2JqZWN0LkJvZHkgPVtdO1xyXG4gIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSApO1xyXG59KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcHVibGljIGZldGNoTG9va3VwcyAoIG9iamVjdCxsb29rdXBBcnJEZWYpe1xyXG4gICAgbGV0IEJvZHkgPVtdO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsb29rdXBBcnJEZWYubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX1NUTVRcIjtcclxuICAgICAgTmV3VmFsW1wiX1NUTVRcIl0gID0gIGxvb2t1cEFyckRlZltpXS5zdGF0bWVudDtcclxuICAgICAgQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCxCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgUGFnZSA9ICBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KG9iamVjdCxQYWdlLEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IGxvb2t1cEFyckRlZi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhW2ldLmRhdGE6XCIscmVzdWx0LmRhdGFbaV0uZGF0YVswXSlcclxuICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgLy9hZGQgZW1wdHkgcmVjb3JkIGF0IGJlZ2luaW5nIG9mIHRoZSBhcnJheSBmb3IgdGhlIExPViBmb3IgaW5zZXJ0IG5ldyByZWNvcmQgaW4gYSBncmlkIHdvcmsgcHJvcGVybHlcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YVtpXS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVtcHR5UmVjID17fTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXNTcGFjZT1mYWxzZTtcclxuICAgICAgICAgICAgLy8gbGV0IGNvZGVUeHQgPSBrZXlzWzBdO1xyXG4gICAgICAgICAgICAvLyBsZXQgZGF0YVNldCA9IE9iamVjdC5hc3NpZ24oW10sIHJlc3VsdC5kYXRhW2ldLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0YVNldC5maW5kKGVsZW0gPT57XHJcbiAgICAgICAgICAgIC8vICAgLy9jb25zb2xlLmxvZyhcImVsbTpcIixlbGVtKTtcclxuICAgICAgICAgICAgLy8gICBpZiAoZWxlbVtjb2RlVHh0XS50cmltKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIC8vICAgICBoYXNTcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggIWhhc1NwYWNlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9MDsgayA8IGtleXMubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eVJlY1trZXlzW2tdXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL29iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltrZXlzW2tdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVtcHR5UmVjOlwiLGVtcHR5UmVjKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW1wdHlSZWM6XCIsZW1wdHlSZWMpO1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YVtpXS5kYXRhLnNwbGljZSgwLDAsZW1wdHlSZWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvYmplY3RbbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWVdID0gcmVzdWx0LmRhdGFbaV0uZGF0YTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWU6XCIsIGxvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lLCBvYmplY3RbbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWVdKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGlmICAodHlwZW9mIG9iamVjdC5mZXRjaExvb2t1cHNDYWxsQmFjayAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICBvYmplY3QuZmV0Y2hMb29rdXBzQ2FsbEJhY2soKTtcclxuXHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgcGVyZm9ybVBvc3QgKCBvYmplY3QsZm4pe1xyXG4gICAgbGV0IFBhZ2UgPSAgXCJcIjtcclxuICAgIHRoaXMucG9zdChvYmplY3QsUGFnZSxvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGZuKG9iamVjdCxyZXN1bHQpO1xyXG4gICAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wb25lbnRDb25maWcoY29tcG9uZW50Q29uZmlnLCBzY3JlZW5Db25maWcgKXtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50Q29uZmlnKTtcclxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygga2V5c1tpXSArIFwiIFwiICsgY29tcG9uZW50Q29uZmlnWyBrZXlzW2ldIF0gKSA7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudENvbmZpZ1sga2V5c1tpXSBdICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2NyZWVuQ29uZmlnWyBrZXlzW2ldIF0gPSBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coc2NyZWVuQ29uZmlnKTtcclxuICAgIHJldHVybiBzY3JlZW5Db25maWc7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRSb3V0aW5lQXV0aChtZW51LCByb3V0aW5lX25hbWUpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCByb3V0aW5lQXV0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBtZW51ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdoaWxlIChpIDwgbWVudS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGogPCBtZW51W2ldLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKG1lbnVbaV0uY2hpbGRyZW5bal0uY2hvaWNlID09IHJvdXRpbmVfbmFtZSkge1xyXG4gICAgICAgICAgICByb3V0aW5lQXV0aCA9IG1lbnVbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBqKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyb3V0aW5lX25hbWU6XCIsIHJvdXRpbmVfbmFtZSwgXCJyb3V0aW5lQXV0aDpcIiwgcm91dGluZUF1dGgsIFwiIG1lbnU6XCIsIG1lbnUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKHJvdXRpbmVBdXRoKTtcclxuICB9XHJcbiAgcHVibGljIGFjdE9uUGFyYW1Db25maWcob2JqZWN0LCByb3V0aW5lX25hbWUpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm91dGluZV9uYW1lOlwiICsgcm91dGluZV9uYW1lKVxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBtZW51ID0gcGFyYW1Db25maWcubWVudTtcclxuICAgIGxldCByb3V0aW5lQXV0aCA9IHRoaXMuZ2V0Um91dGluZUF1dGgobWVudSwgcm91dGluZV9uYW1lKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG9iamVjdC50aXRsZSA9IHJvdXRpbmVBdXRoLnRpdGxlICsgXCIgKFwiICsgcm91dGluZUF1dGgucm91dGluZVZlciArIFwiKVwiO1xyXG4gICAgICBvYmplY3Qucm91dGluZUF1dGggPSByb3V0aW5lQXV0aDtcclxuICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnRpdGxlOlwiICsgb2JqZWN0LnRpdGxlKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICBpZiAocm91dGluZV9uYW1lID09IFwiRFNQRUtZQ1wiKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5yb3V0aW5lX25hbWU6XCIgKyB0aGlzLnJvdXRpbmVfbmFtZSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RXJyb3JNc2cob2JqZWN0LHNlcnZlckVycm9yKXtcclxuICAgIGxldCBlcnJvck1zZyA9XCJcIjtcclxuICAgIGlmICh0eXBlb2Ygc2VydmVyRXJyb3IuZXJyb3IgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICBlcnJvck1zZyA9IHRoaXMuc3RhbmRhcmRFcnJvck1zZyArIFwiIDogXCIgKyBzZXJ2ZXJFcnJvcjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgIGVycm9yTXNnID0gdGhpcy5zdGFuZGFyZEVycm9yTXNnICsgXCIgOiBcIiArIHNlcnZlckVycm9yLmVycm9yLmVycm9yO1xyXG4gICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICB0aXRsZSA6IFwiRXJyb3JcIixcclxuICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgb2JqZWN0IDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb24gOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGwgfTtcclxuICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kR2V0Q29tbWFuZCh1cmwsIHBhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBzZW5kR2V0Q29tbWFuZFwiKVxyXG4gICAgbGV0IHRoZVVSTCA9IHVybCArIHBhZ2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgc2VuZEdldENvbW1hbmQ6dGhlVVJMOlwiLHRoZVVSTClcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZW5kR2V0Q29tbWFuZCB0aGVVUkw6XCIgKyB0aGVVUkwpXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldChgJHt0aGVVUkx9YCx0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIHBvc3RDb21tYW5kKHBhZ2U6IHN0cmluZywgdXJsLCBCb2R5KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgcG9zdENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmw7IC8vdGhpcy5FUE1FTkdfVVJMICsgcGFnZTtcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0Q29tbWFuZCB0aGVVUkw6XCIgKyB0aGVVUkwpXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoYCR7dGhlVVJMfWAsQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIENhcGl0YWxpemVGaXJzdChzdHIpXHJcbiAge1xyXG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuICBwdWJsaWMgQ2FwaXRhbGl6ZVRpdGxlKGZpZWxkTmFtZSlcclxuICB7XHJcblxyXG4gIGxldCBhcnJheSA9IGZpZWxkTmFtZS5zcGxpdChcIl9cIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLGFycmF5KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuICAgICAgYXJyYXlbaV0gPSB0aGlzLkNhcGl0YWxpemVGaXJzdChhcnJheVtpXSlcclxuXHJcbiAgICBmaWVsZE5hbWUgPSBhcnJheS5qb2luKFwiIFwiKTtcclxuICAgIHJldHVybiBmaWVsZE5hbWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBwcmVwYXJlTG9va3VwKGZpZWxkTmFtZSwgcGFyYW1Db25maWcpe1xyXG5cclxuICAgIGxldCBsa3BBcnJOYW1lID0gXCJsa3BBcnJcIiArIGZpZWxkTmFtZTtcclxuICAgIGxldCBsa3BEZWY7XHJcbiAgICBpZiAoZmllbGROYW1lID09IFwiQVNTSUdORUVcIil7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTzpcIiwgdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTyk7XHJcblxyXG4gICAgICBsZXQgdGVhbSA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uVEVBTTtcclxuXHJcbiAgICAgIGxrcERlZiA9ICBcdHtcInN0YXRtZW50XCI6XCJzZWxlY3QgVVNFUk5BTUUgQ09ERSwgRlVMTE5BTUUgQ09ERVRFWFRfTEFORyBmcm9tICBBRE1fVVNFUl9JTkZPUk1BVElPTiB3aGVyZSBURUFNID0gJ1wiICsgdGVhbSArIFwiJyBcIixcclxuICAgICAgXCJsa3BBcnJOYW1lXCI6bGtwQXJyTmFtZSwgXCJmaWVsZE5hbWVcIjogZmllbGROYW1lfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgbGtwRGVmID0gXHR7XCJzdGF0bWVudFwiOlwiU0VMRUNUIENPREUsICBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSAnXCIgKyBmaWVsZE5hbWUgKyBcIicgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBwYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HICBcIixcclxuICAgICAgICAgICAgICAgIFwibGtwQXJyTmFtZVwiOmxrcEFyck5hbWUgLCBcImZpZWxkTmFtZVwiOiBmaWVsZE5hbWUgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBsa3BEZWY7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgZ2V0QXNzaWduZWVTZWxlY3Qob2JqZWN0LCBhc3NpZ25lZVR5cGUpe1xyXG4gICAgbGV0IHNlbGVjdFN0bXQ7XHJcblxyXG4gICAgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIlRFQU1cIil7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBDT0RFLCBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSdURUFNJyBhbmQgTEFOR1VBR0VfTkFNRSA9ICdcIiArIG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyAgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyBcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXNzaWduZWVUeXBlID09IFwiUEVSU09OXCIpe1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgVVNFUk5BTUUgIENPREUsIEZVTExOQU1FIENPREVURVhUX0xBTkcgRlJPTSBBRE1fVVNFUl9JTkZPUk1BVElPTiBXSEVSRSBURUFNID0nXCIgKyBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLlRFQU0gKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyBcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXNzaWduZWVUeXBlID09IFwiTkVUV09SS1wiKXtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIENPREUsIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9J0VYQ0hfU1lTVCcgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFOR1wiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZWN0U3RtdDtcclxuICB9XHJcbiAgcHVibGljIGdldEZpcnN0V2Vla0RheShvYmplY3QsIHZhbHVlKXtcclxuICAgIGxldCB2YWx1ZURhdGU6RGF0ZVxyXG4gICAgbGV0IGZpcnN0V2Vla0RheSA9IFwiTW9uZGF5XCI7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5wYXJhbUNvbmZpZy5maXJzdFdlZWtEYXkgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmaXJzdFdlZWtEYXkgPSAgb2JqZWN0LnBhcmFtQ29uZmlnLmZpcnN0V2Vla0RheTtcclxuICAgIH1cclxuICAgIHZhbHVlRGF0ZSA9IGZpcnN0RGF5SW5XZWVrKG5ldyBEYXRlKHZhbHVlKSwgRGF5W2ZpcnN0V2Vla0RheV0gKTtcclxuICAgIHZhbHVlRGF0ZSA9IGdldERhdGUodmFsdWVEYXRlKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsdWVEYXRlOlwiLCB2YWx1ZURhdGUpXHJcbiAgICByZXR1cm4gdmFsdWVEYXRlO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNldFJUTCgpe1xyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBsYW5ndWFnZSA9IHBhcmFtQ29uZmlnLnVzZXJMYW5nO1xyXG4gICAgbGFuZ3VhZ2UgPSBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCBwYXJnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlucGFnZVwiKTtcclxuICAgIGNvbnN0IHN2YyA9IDxNeU1lc3NhZ2VTZXJ2aWNlPiB0aGlzLm1lc3NhZ2VzO1xyXG4gICAgLy9zdmMubGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2UgPT09ICdlcycgPyAnaGUnIDogJ2VzJztcclxuICAgIC8vc3ZjLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2V0UlRMOmxhbmd1YWdlOlwiLCBsYW5ndWFnZSlcclxuICAgIGlmICggbGFuZ3VhZ2UgPT0gXCJhclwiKXtcclxuICAgICAgcGFyZy5kaXIgPSBcInJ0bFwiO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLm5vdGlmeSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgcGFyZy5kaXIgPSBcImx0clwiO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLm5vdGlmeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkTGFuZ3VhZ2VPbGQobGFuZ3VhZ2Upe1xyXG4gICAgbGFuZ3VhZ2UgPSAhbGFuZ3VhZ2UgPyBcImVuXCIgOiBsYW5ndWFnZVxyXG4gICAgbGV0IGZpbGUgPSBcImFzc2V0cy9sYW5nL1wiICsgbGFuZ3VhZ2UgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsZmlsZSlcclxuICAgIHRoaXMuaHR0cC5nZXQoZmlsZSkuc3Vic2NyaWJlKGRhdGEgPT57XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmRhdGEsXCIsZGF0YSlcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInRpdGxlc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5zZXRSVEwoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcjpcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PSAnbHRyJyAgKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsZXJyKVxyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgLy90aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExhbmd1YWdlKGxhbmd1YWdlKXtcclxuICAgIGxhbmd1YWdlID0gIWxhbmd1YWdlID8gXCJlblwiIDogbGFuZ3VhZ2VcclxuICAgIGxldCBmaWxlID0gXCJsYW5nL1wiICsgbGFuZ3VhZ2UgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsZmlsZSlcclxuICAgIGxldCBwYWdlID0gXCI/Z2V0ZmlsZT1cIiArIGZpbGU7XHJcbiAgICBwYWdlID0gdGhpcy5jaGVja0RCTG9jKHBhZ2UpO1xyXG4gICAgcGFnZSA9IGVuY29kZVVSSShwYWdlKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6cGFnZSxcIixwYWdlKVxyXG5cclxuICAgIHRoaXMuc2VuZEdldENvbW1hbmQodGhpcy5TRVJWRVJfVVJMICwgcGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOnJlc3VsdCxcIixyZXN1bHQpO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpkYXRhLFwiLGRhdGEpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ0aXRsZXNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnNldFJUTCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyOlwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09ICdsdHInICApO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIixlcnIpXHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAvL3RoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXROTFMocGFyYW1zLGlkLCB0ZXh0KXtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXROTFM6aWQsXCIsaWQpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgIGxldCBhcnJheSA9IGlkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyBbYXJyYXlbMF1dICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgW2FycmF5WzBdXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzIFthcnJheVswXV1bYXJyYXlbMV1dICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyBbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgaWYgKCB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyBbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHRleHQgPSAgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgW2FycmF5WzBdXVthcnJheVsxXV1bYXJyYXlbMl1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0TkxTOnRleHQsXCIsdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgbmxzX3RpdGxlID0gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbaWRdO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBubHNfdGl0bGUgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmxzX3RpdGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICBsZXQgc3RyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIyNcIik7XHJcbiAgICAgIHRleHQgPSBcIlwiO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBpPTA7IGk8c3RyQXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICBpZih0eXBlb2YgcGFyYW1zW2ldICE9IFwidW5kZWZpbmVkXCIgKVxyXG4gICAgICAgICAgdGV4dCA9IHRleHQgKyBzdHJBcnJheVtpXSArIHBhcmFtc1tpXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0ZXh0ID0gdGV4dCArIHN0ckFycmF5W2ldO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcbiAgcHVibGljIGxvYWRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpe1xyXG4gICAgaWYgKHN0YXRlbWVudHMgPT0gXCJcIilcclxuICAgICAgc3RhdGVtZW50cyA9IFwic3RhdGVtZW50cy5qc29uXCI7XHJcbiAgbGV0IHBhZ2UgPSBcIj9nZXRmaWxlPVwiICsgc3RhdGVtZW50cztcclxuICAgIHBhZ2UgPSB0aGlzLmNoZWNrREJMb2MocGFnZSk7XHJcbiAgICBwYWdlID0gZW5jb2RlVVJJKHBhZ2UpO1xyXG4gICAgdGhpcy5zZW5kR2V0Q29tbWFuZCh0aGlzLlNFUlZFUl9VUkwgLCBwYWdlKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpyZXN1bHQsXCIscmVzdWx0KTtcclxuICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLGRhdGEpO1xyXG4gICAgICBsZXQgbGtwQXJyUVVFUllfREVGID1bXTtcclxuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgbGV0IHJlYyA9e1xyXG4gICAgICAgICAgQ09ERSA6IGtleSxcclxuICAgICAgICAgICBDT0RFVEVYVF9MQU5HIDoga2V5LFxyXG4gICAgICAgICAgIHN0YXRlbWVudCA6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxrcEFyclFVRVJZX0RFRi5wdXNoKHJlYyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsZGF0YSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmxrcEFyclFVRVJZX0RFRixcIixsa3BBcnJRVUVSWV9ERUYpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJzdGF0ZW1lbnRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImxrcEFyclFVRVJZX0RFRlwiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxrcEFyclFVRVJZX0RFRlxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIixlcnIpXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZFN0YXRlbWVudHNPbGQoKXtcclxuXHJcbiAgICBsZXQgZmlsZSA9IFwiYXNzZXRzL1wiICsgIFwic3RhdGVtZW50cy5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZmlsZSxcIixmaWxlKVxyXG4gICAgdGhpcy5odHRwLmdldChmaWxlKS5zdWJzY3JpYmUoZGF0YSA9PntcclxuICAgICAgbGV0IGxrcEFyclFVRVJZX0RFRiA9W107XHJcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGxldCByZWMgPXtcclxuICAgICAgICAgIENPREUgOiBrZXksXHJcbiAgICAgICAgICAgQ09ERVRFWFRfTEFORyA6IGtleSxcclxuICAgICAgICAgICBzdGF0ZW1lbnQgOiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsa3BBcnJRVUVSWV9ERUYucHVzaChyZWMpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLGRhdGEpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpsa3BBcnJRVUVSWV9ERUYsXCIsbGtwQXJyUVVFUllfREVGKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwic3RhdGVtZW50c1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJsa3BBcnJRVUVSWV9ERUZcIixcclxuICAgICAgICBcIlZhbFwiOiBsa3BBcnJRVUVSWV9ERUZcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsZXJyKVxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRmV0Y2hlZE1vZHVsZXMob2JqZWN0LCBkYXRhKXtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2ZldGNoZWRNb2R1bGVzIDogJyxkYXRhWzBdLmRhdGEpO1xyXG4gICAgLy90aGlzLml0ZW1zWzBdLml0ZW1zID0gIGRhdGE7XHJcbiAgICBvYmplY3QuaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgIHRleHQ6ICdTZWxlY3QgTW9kdWxlJyxcclxuICAgICAgIGl0ZW1zOiBkYXRhWzBdLmRhdGFcclxuICAgICB9XTtcclxuICAgICBvYmplY3Quc2V0TW9kdWxlTmFtZShvYmplY3QuY3VycmVudE1lbnUpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pdGVtczpcIiwgb2JqZWN0Lml0ZW1zLCBcImRhdGFbMF0uZGF0YS5sZW5ndGg6XCIsIGRhdGFbMF0uZGF0YS5sZW5ndGgpXHJcbiAgICBpZiAoZGF0YVswXS5kYXRhLmxlbmd0aCA9PSAxKXtcclxuICAgICAgb2JqZWN0LnNob3dNb2R1bGVTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaE1lbnUgKCBvYmplY3QsIGhhbmRsZUZldGNoZWREYXRhKXtcclxuICAgIGlmICggKHRoaXMuU3RyQXV0aCA9PSBcIlwiKSB8fCAodHlwZW9mIHRoaXMuU3RyQXV0aCA9PT0gXCJ1bmRlZmluZWRcIikpXHJcbiAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSAgXCJcIjtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgaGFuZGxlRmV0Y2hlZERhdGEob2JqZWN0LCByZXN1bHQuZGF0YSk7XHJcblxyXG5cclxuICAgICAgb2JqZWN0LkJvZHkgPVtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIGFsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0TW9kdWxlSXRlbXMgKG9iamVjdCl7XHJcblxyXG5cclxuICAgIGlmICghb2JqZWN0LnN0YXRpY01lbnUpXHJcbiAgICB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID1bXTtcclxuICAgICAgbGV0IE5ld1ZhbCA9IHtcclxuICAgICAgICBNRU5VIDogJ01BSU4nLFxyXG4gICAgICAgIENIT0lDRVMgOiBvYmplY3QucGFyYW1Db25maWcubGljZW5zZWRNb2R1bGVzLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgTEFOR1VBR0VfTkFNRSA6IG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BTExPV0VEX01PRFVMRVNcIjtcclxuXHJcbiAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tb2JqZWN0LkJvZHkgOlwiLCBvYmplY3QuQm9keSlcclxuXHJcblxyXG4gICAgICB0aGlzLmZldGNoTWVudShvYmplY3QsIHRoaXMuaGFuZGxlRmV0Y2hlZE1vZHVsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGVDaGFuZ2Uob2JqZWN0OmFueSwgZGF0YTogUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvL3B1YmxpYyBzdGF0ZUNoYW5nZShvYmplY3Q6YW55LCBkYXRhOiBBcnJheTxQYW5lbEJhckl0ZW1Nb2RlbD4pOiBib29sZWFuIHtcclxuICBcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWNNZW51ID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgKyBmb2N1c2VkRXZlbnQuaWQpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9jdXNlZEV2ZW50KVxyXG4gICAgICAgIGlmIChmb2N1c2VkRXZlbnQudGl0bGUgPT0gXCJGb3JtYXR0aW5nIEZsb3dcIikge1xyXG4gICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1Bob25lUG9ydHJhaXQ6XCIsIG9iamVjdC5pc1Bob25lUG9ydHJhaXQsIG9iamVjdC5zaG93UGFuZWxiYXIpXHJcbiAgICAgICAgLy90aGlzLnNlbGVjdGVkSWQgPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSk7XHJcbiAgICAgICAgLy90aGlzLnN0YXJTZXJ2aWNlcy5zZXRSVEwoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vRnVhZCBjaGVjayBpZiBpdCBzaG91bGQgcmV0dXJuIGZhbHNlIG9yIHRydWVcclxuICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LmlkKVxyXG4gICAgICBsZXQgcm91dGluZUF1dGggPSB0aGlzLmdldFJvdXRpbmVBdXRoKG9iamVjdC5tZW51LCBmb2N1c2VkRXZlbnQuaWQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LmlkICwgXCJyb3V0aW5lQXV0aCA6XCIgLCByb3V0aW5lQXV0aClcclxuICBcclxuICAgICAgaWYgKGZvY3VzZWRFdmVudC5pZCA9PSBcIlBSVkZMT1dcIilcclxuICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gIFxyXG4gICAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiByb3V0aW5lQXV0aC5hdXRoTGV2ZWw6XCIgKyByb3V0aW5lQXV0aC5hdXRoTGV2ZWwpXHJcbiAgICAgICAgaWYgKHJvdXRpbmVBdXRoLmF1dGhMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgIG1zZzogdGhpcy5ub0FjY2Vzc01zZyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvYmplY3Quc2VsZWN0ZWRJZCA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIlwiO1xyXG4gICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIlBSVkZMT1dcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiUFJWX0JMRFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJQUlZfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNDTUNBVFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDUkNfQ0FUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNSQ19VU0VSX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ0NNR1JQXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNSQ19HUk9VUFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDUkNfR1JPVVBfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDTUdDQVRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ0FNX0NBVFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDQU1fVVNFUl9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNNR0dSUFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDQU1fR1JPVVBcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ0FNX0dST1VQX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQklMTElOR1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJCSUxMSU5HXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkJJTExJTkdfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZC5zdGFydHNXaXRoKFwiUE9SVEFMX1wiKSkvL0Z1YWQgOiBSTkRcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUE9SVEFMX0ZPUk1cIl0gPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgICAgIGZvY3VzZWRFdmVudC5pZCA9ICdEU1BQT1JUQUwnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9GVUFEOiBjaGVjayBpZiBiZWxvdyBjb2RlIHRpbGwgZWxzZSBpcyBuZWVkZWRcclxuICAgICAgICAgIGlmIChvYmplY3Qucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybCA9PSAoJy8nICsgZm9jdXNlZEV2ZW50LmlkKSkge1xyXG4gICAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlQnlVcmwoJycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlKFsnLycgKyBmb2N1c2VkRXZlbnQuaWRdLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSwgcmVwbGFjZVVybDogdHJ1ZSwgcHJlc2VydmVGcmFnbWVudDogZmFsc2UgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IHRydWUsIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlIH0pO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc1Bob25lUG9ydHJhaXQpe1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAvL3RoaXMuc3RhclNlcnZpY2VzLnNldFJUTCgpO1xyXG4gIFxyXG4gICAgICAgICAgLy90aGlzLnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbnB1YmxpYyBzZXRQYW5lbEJhciAob2JqZWN0KXtcclxuXHJcbiAgaWYgKCFvYmplY3Quc3RhdGljTWVudSlcclxuICB7XHJcbiAgICBvYmplY3QuQm9keSA9W107XHJcbiAgICBsZXQgTmV3VmFsID0ge1xyXG4gICAgICBNRU5VIDogb2JqZWN0LmN1cnJlbnRNZW51LnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIFVTRVJOQU1FIDogb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIExBTkdVQUdFX05BTUUgOiBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcudG9VcHBlckNhc2UoKVxyXG4gICAgfTtcclxuXHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX01FTlVfUk9VVElORVNcIjtcclxuXHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBsZXQgTmV3VmFsMSA9IHtcclxuICAgICAgTUVOVSA6IFwiXCIsXHJcbiAgICAgIFVTRVJOQU1FIDogb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FLnRvVXBwZXJDYXNlKClcclxuICAgIH07XHJcblxyXG4gICAgICBOZXdWYWwxW1wiX1FVRVJZXCJdID0gXCJHRVRfUk9VVElORVNfQVVUSE9SSVRZXCI7XHJcblxyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbDEpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hNZW51KG9iamVjdCwgdGhpcy5oYW5kbGVGZXRjaGVkUGFuZWxCYXIpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVGZXRjaGVkUGFuZWxCYXIob2JqZWN0LCBkYXRhKSB7XHJcbiAgICBmdW5jdGlvbiBjaGVja0F1dGhEYXRhKHJvdXRpbmVfbmFtZSwgYXV0aERhdGEpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBsZXQgcm91dGluZUF1dGg7XHJcbiAgICAgIHdoaWxlIChpIDwgYXV0aERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGF1dGhEYXRhW2ldLlJPVVRJTkVfTkFNRSA9PSByb3V0aW5lX25hbWUpIHtcclxuICAgICAgICAgIHJvdXRpbmVBdXRoID0gYXV0aERhdGFbaV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3V0aW5lQXV0aDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGEoYXJyLCBhdXRoRGF0YSkge1xyXG4gICAgICBsZXQgbWVudSA9IFtdO1xyXG4gICAgICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyW2ldOlwiLCBhcnJbaV0pO1xyXG4gICAgICAgIGxldCB0eXBlID0gYXJyW2ldLmNob2ljZV90eXBlLmNoYXJBdCgwKTtcclxuICAgICAgICBpZiAodHlwZSA9PSBcIk1cIikge1xyXG4gICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBtZW51SXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdmFyIG1lbnVJdGVtID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogYXJyW2ldLnRleHQsXHJcbiAgICAgICAgICAgIGNob2ljZTogYXJyW2ldLmNob2ljZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09IFwiUlwiKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aERhdGE6XCIsIGF1dGhEYXRhLCBcImFycltpXTpcIiwgYXJyW2ldKTtcclxuICAgICAgICAgIGxldCByb3V0aW5lQXV0aCA9IGNoZWNrQXV0aERhdGEoYXJyW2ldLmNob2ljZSwgYXV0aERhdGEpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycltpXS5jaG9pY2U6XCIgKyBhcnJbaV0uY2hvaWNlICsgXCIgIHJvdXRpbmVBdXRoLkRJU1BfRkxBRzpcIiArIHJvdXRpbmVBdXRoLkRJU1BfRkxBRyArIFwiIHJvdXRpbmVBdXRoLkFVVEhMRVZFTCA6XCIgKyByb3V0aW5lQXV0aC5BVVRITEVWRUwpXHJcbiAgICAgICAgICBpZiAocm91dGluZUF1dGguRElTUF9GTEFHICE9IFwiTlwiKSAvLyAmJiAocm91dGluZUF1dGguQVVUSExFVkVMICE9IDApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmVJdGVtID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBhcnJbaV0udGV4dCxcclxuICAgICAgICAgICAgICBjaG9pY2U6IGFycltpXS5jaG9pY2UsXHJcbiAgICAgICAgICAgICAgYXV0aExldmVsOiByb3V0aW5lQXV0aC5BVVRITEVWRUwsXHJcbiAgICAgICAgICAgICAgcm91dGluZURlc2M6IHJvdXRpbmVBdXRoLlJPVVRJTkVfREVTQyxcclxuICAgICAgICAgICAgICByb3V0aW5lVmVyOiByb3V0aW5lQXV0aC5ST1VUX1ZFUixcclxuICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBcIi9cIiArIGFycltpXS5jaG9pY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChyb3V0aW5lSXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tY2hpbGRyZW5cIik7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICB0aXRsZTogbWVudUl0ZW0udGl0bGUsXHJcbiAgICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGNoaWxkcmVuID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBtZW51O1xyXG59XHJcblxyXG4gIG9iamVjdC5tZW51ID0gZm9ybWF0RGF0YShkYXRhWzBdLmRhdGEsIGRhdGFbMV0uZGF0YSk7XHJcblxyXG4gIG9iamVjdC5wYW5lbEl0ZW1zID0gb2JqZWN0Lm1lbnU7XHJcbiAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgXCJOYW1lXCI6IFwibWVudVwiLFxyXG4gICAgXCJWYWxcIjogb2JqZWN0Lm1lbnVcclxuICB9O1xyXG4gIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcblxyXG59XHJcblxyXG5wdWJsaWMgIHNsZWVwKG1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcbnByaXZhdGUgY29tbWl0Qm9keSA9IFtdO1xyXG5wdWJsaWMgaW5UcmFucyA9IGZhbHNlO1xyXG5wcml2YXRlIEJvZHkgPSBbXTtcclxucHVibGljIGNvbW1pdENvbW1hbmRzID0gWydJTlNFUlQnLCAnVVBEQVRFJywgJ0RFTEVURSddO1xyXG5cclxucHVibGljIGJlZ2luVHJhbnMoKXtcclxuICB0aGlzLmNvbW1pdEJvZHkgPVtdO1xyXG4gIHRoaXMuaW5UcmFucyA9IHRydWU7XHJcblxyXG59XHJcbnB1YmxpYyBlbmRUcmFucyhvYmplY3QsIGNvbW1pdCl7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gIGxldCB0YWJsZUluZm87XHJcbiAgLy9jb25zb2xlLmxvZyhcImVuZFRyYW5zOlwiLCB0aGlzLmNvbW1pdEJvZHkpO1xyXG4gIGlmIChjb21taXQgJiYgdGhpcy5jb21taXRCb2R5Lmxlbmd0aCAhPSAwKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIHRoaXMuY29tbWl0Qm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb21taXRCb2R5ID1bXTtcclxuICAgICAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jb21taXRCb2R5ID1bXTtcclxuICAgICAgICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG4gICAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuY29tbWl0Qm9keSA9W107XHJcbiAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxufVxyXG4vLyBwdWJsaWMgYWRkVG9Cb2R5KE5ld1ZhbCkge1xyXG4vLyAgIHRoaXMuQm9keS5wdXNoKE5ld1ZhbCk7XHJcbi8vIH1cclxuXHJcbnB1YmxpYyBleGVjU1FMQm9keShvYmplY3QsIEJvZHksIERCTG9jKSB7XHJcbiAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkKHN0cikge1xyXG4gICAgbGV0IG15QXJyYXkgPSBzdHIuc3BsaXQoXCJfXCIpO1xyXG4gICAgcmV0dXJuIG15QXJyYXlbMF07XHJcbiAgfVxyXG4gIFxyXG4gIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPU5cIjtcclxuICBpZiAoREJMb2MgIT0gXCJcIilcclxuICAgIFBhZ2UgPSBQYWdlICsgXCImREJMb2M9XCIgKyBEQkxvYztcclxuICBsZXQgdGFibGVJbmZvO1xyXG5cclxuICBvYmplY3QuTk9URk9VTkQgPSBmYWxzZTtcclxuICAvL2NvbnNvbGUubG9nKFwiQm9keTpcIixCb2R5KTtcclxuICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICBsZXQgZmlyc3RXb3JkID0gZ2V0Rmlyc3RXb3JkKEJvZHlbMF0uX1FVRVJZKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNvbW1pdDpmaXJzdFdvcmQ6XCIsIGZpcnN0V29yZCwgQm9keSk7XHJcbiAgICBcclxuICAgIGxldCBpc0NvbW1pdENvbW1hbmQgPSB0aGlzLmNvbW1pdENvbW1hbmRzLmluY2x1ZGVzKGZpcnN0V29yZCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKEJvZHlbMF0pO1xyXG4gICAgICByZXR1cm4gdGFibGVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nIChcImV4ZWNTUUxCb2R5IDNcIiwgcmVzdWx0KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInRlc3R4OmV4ZWNTUUw6c3FsU3RtdDpyZXN1bHQuZGF0YVswXTpcIiwgQm9keSwgcmVzdWx0LmRhdGFbMF0pXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0eDpleGVjU1FMOnNxbFN0bXQ6cmVzdWx0LmRhdGFbMF06XCIsIEJvZHksIHJlc3VsdC5kYXRhKVxyXG4gICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YTtcclxuICAgICAgLy8gaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAvLyAgIG9iamVjdC5OT1RGT1VORCA9IHRydWU7XHJcbiAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IHRydWU7XHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxufVxyXG5wdWJsaWMgZXhlY1NRTChvYmplY3QsIHNxbFN0bXQpIHtcclxuICBmdW5jdGlvbiBnZXRGaXJzdFdvcmQoc3RyKSB7XHJcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xyXG4gICAgbGV0IHNwYWNlSW5kZXggPSBzdHIuaW5kZXhPZignICcpO1xyXG4gICAgcmV0dXJuIHNwYWNlSW5kZXggPT09IC0xID8gc3RyIDogc3RyLnN1YnN0cigwLCBzcGFjZUluZGV4KTtcclxuICB9XHJcblxyXG4gIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPU5cIjtcclxuICB0aGlzLkJvZHkgPSBbXTtcclxuICBsZXQgTmV3VmFsID0ge307XHJcbiAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJFWEVDU1FMXCI7XHJcbiAgTmV3VmFsW1wiX1NUTVRcIl0gPSBzcWxTdG10O1xyXG4gIGxldCB0YWJsZUluZm87XHJcblxyXG4gIG9iamVjdC5OT1RGT1VORCA9IGZhbHNlO1xyXG4gIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgIGxldCBmaXJzdFdvcmQgPSBnZXRGaXJzdFdvcmQoc3FsU3RtdCkudG9VcHBlckNhc2UoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjb21taXQ6Zmlyc3RXb3JkOlwiLCBmaXJzdFdvcmQsIHNxbFN0bXQpO1xyXG4gICAgXHJcbiAgICBsZXQgaXNDb21taXRDb21tYW5kID0gdGhpcy5jb21taXRDb21tYW5kcy5pbmNsdWRlcyhmaXJzdFdvcmQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImV4ZWNTUUw6IGluVHJhbnM6XCIsIE5ld1ZhbCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIHJldHVybiB0YWJsZUluZm87XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCwgdGhpcy5Cb2R5KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIHRoaXMuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiZXhlY1NRTDpzcWxTdG10OnJlc3VsdC5kYXRhWzBdOlwiLCBzcWxTdG10LCByZXN1bHQuZGF0YVswXSlcclxuICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLnJvd0NvdW50ID09IDApXHJcbiAgICAgICAgb2JqZWN0Lk5PVEZPVU5EID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8vLy8vLy9cclxuIFxyXG5wdWJsaWMgYXR0X2ltZ19nZXRGaWxlTGluayhmaWVsZF9kYXRhLG9iamVjdCkge1xyXG4gIGxldCBmaWxlTGluayA9IFwiXCI7XHJcbiAgaWYgKChmaWVsZF9kYXRhICE9IFwiXCIpICYmIChmaWVsZF9kYXRhICE9IFwiW11cIikgJiYgKGZpZWxkX2RhdGEgIT0gbnVsbCkpIHtcclxuICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpZWxkX2RhdGE6XCIsIGZpZWxkX2RhdGEpXHJcbiAgICBmaWxlTGluayA9IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVswXS5uYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRGaWxlTGluazpmaWxlTGluazpcIiwgZmlsZUxpbmspXHJcbiAgfVxyXG4gIHJldHVybiBmaWxlTGluaztcclxufVxyXG5wdWJsaWMgYXR0X2ltZ19nZXRBdHQoZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIGxldCBhdHRzID0gXCJcIjtcclxuICAvL2NvbnNvbGUubG9nKFwiZ2V0QXR0X2RhdGE6XCIsIGRhdGEpO1xyXG4gIGlmICgoZGF0YSAhPSBcIlwiKSAmJiAoZGF0YSAhPSBcIltdXCIpICYmIChkYXRhICE9IG51bGwpKSB7XHJcbiAgICBsZXQgdmFscyA9XHJcbiAgICAgIFt7bmFtZTpcIlwiLFxyXG4gICAgICBzaXplOlwiXCJ9XHJcbiAgICAgIF07XHJcbiAgICB2YWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRBdHRfZGF0YTpcIiwgdmFscyk7XHJcbiAgICB2YWxzLmZvckVhY2godmFsID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInZhbDpcIiwgdmFsKVxyXG4gICAgICBhdHRzID0gYXR0cyArIFwiPFwiICsgdmFsLm5hbWUgKyBcIiBTaXplOlwiICsgdmFsLnNpemUgKyBcIj5cIjtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBhdHRzO1xyXG59XHJcbnB1YmxpYyBhdHRfaW1nX3BvcHVsYXRlQXJycyhmb3JtR3JvdXAsb2JqZWN0KXtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSAhPSBcIlwiKSBvYmplY3QubXlGaWxlc1tvYmplY3QuYXR0X2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5pbWdfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSAhPSBcIlwiKSBvYmplY3QubXlGaWxlc1tvYmplY3QuaW1nX2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0pO1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYXR0X2ltZ19mb3JtX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZDphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vb2JqZWN0LnVwbG9hZGltYWdlID0gdHJ1ZTtcclxuICBjb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IG15RmlsZXMgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICB9XHJcblxyXG5cclxuICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKFwib2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zOlwiLCBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMpXHJcbn1cclxucHVibGljIGNhbGxHZXRTYXZlQXR0YWNoZW10cyhhY3Rpb24sZGF0YSxvYmplY3QpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiY2FsbFNhdmVBdHRhY2hlbXRzOm15RmlsZXM6XCIsYWN0aW9uLCAgb2JqZWN0Lm15RmlsZXMpXHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IGFjdGlvbixcclxuICAgIFwiYXR0X2FyclwiOiBvYmplY3QuYXR0X2FycixcclxuICAgIFwiaW1nX2FyclwiOiBvYmplY3QuaW1nX2FycixcclxuICAgIFwibXlGaWxlc1wiOiBvYmplY3QubXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IG9iamVjdC5maWxlc0RlbGV0ZWQsXHJcbiAgICBcImRhdGFcIjogZGF0YVxyXG4gIH1cclxuXHJcbiAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuXHJcbn1cclxuYXN5bmMgYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXIodmFsdWUsb2JqZWN0KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtLnZhbHVlW2ZpZWxkX2lkXSA9IEpTT05WYWw7XHJcbiAgb2JqZWN0LmZvcm0ucGF0Y2hWYWx1ZSh7IFtmaWVsZF9pZF06IEpTT05WYWwgfSk7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IFtdO1xyXG4gICAgTmV3VmFsLnB1c2goZmllbGRfaWQpO1xyXG4gICAgb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQuYXBwbHkob2JqZWN0LCBOZXdWYWwpO1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYXR0X2ltZ19zYXZlR3JpZENvbXBsZXRlZEhhbmRsZXIodmFsdWUsb2JqZWN0KSB7XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFtmaWVsZF9pZF06IEpTT05WYWwgfSk7XHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5tYXJrQXNEaXJ0eSgpO1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcjpvYmplY3QuZm9ybUdyb3VwLnZhbHVlXCIsIG9iamVjdC5mb3JtR3JvdXAudmFsdWUpO1xyXG4gIG9iamVjdC51cGxvYWRpbWFnZT1mYWxzZTtcclxufVxyXG5wdWJsaWMgYXN5bmMgYXR0X2ltZ19ncmlkX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZCxvYmplY3QpIHtcclxuICBpZiAoIW9iamVjdC5jb21wb25lbnRDb25maWcuZW5hYmxlZCkgcmV0dXJuO1xyXG4gIGF3YWl0IG9iamVjdC5zdGFyU2VydmljZXMuc2xlZXAoMzAwKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19ncmlkX29wZW5VcGxvYWRpbWFnZTpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gIG9iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9W107XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmF0dF9pbWdfcG9wdWxhdGVBcnJzKG9iamVjdC5mb3JtR3JvdXAudmFsdWUsb2JqZWN0KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gICAgbGV0IG15RmlsZXMgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICAgIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gICAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhZGROZXdDb2RlKG9iamVjdCwgQ09ERU5BTUUpOiB2b2lkIHtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2RlcyA9IG5ldyB0YWJzQ29kZXMoKTtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2Rlc1snQ09ERU5BTUUnXSA9IENPREVOQU1FOyAvLyBmb3IgcmV0cmlldmUgZGF0YVxyXG4gIFxyXG4gIFxyXG4gIG9iamVjdC5TT01fVEFCU19DT0RFU0NvbmZpZyA9ICBuZXcgY29tcG9uZW50Q29uZmlnRGVmKCk7XHJcbiAgbGV0IG1hc3RlclBhcmFtcyA9IHtcclxuICAgIGFjdGlvbjogXCJBRERcIixcclxuICAgIENPREVOQU1FOkNPREVOQU1FLFxyXG4gICAgQ09ERTpvYmplY3QuZmlsdGVyQ29kZSxcclxuICAgIENPREVURVhUX0xBTkcgOiBvYmplY3QuZmlsdGVyQ29kZVxyXG4gIH1cclxuICBvYmplY3QuU09NX1RBQlNfQ09ERVNDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zOyAvLyBGb3IgYWRkIG5ldyByZWNvcmRcclxuICBvYmplY3Quc2hvd0NvZGVEZXRhaWxzPXRydWU7XHJcbn1cclxuXHJcbnB1YmxpYyBzZXRJZE9yZGVyKG9iamVjdCxpZEZpZWxkLCBvcmRlckZpZWxkKXtcclxuICBsZXQgSUQgPSAxO1xyXG4gIGxldCBPUkRFUiA9IDE7XHJcblxyXG4gIGxldCBHcmlkRGF0YTphbnkgPSBvYmplY3QuZ3JpZC5kYXRhO1xyXG4gIGlmICh0eXBlb2YgR3JpZERhdGEuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBHcmlkRGF0YS5kYXRhLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgIGlmIChHcmlkRGF0YS5kYXRhW2ldW2lkRmllbGRdID49IElEKVxyXG4gICAgICAgIElEID0gcGFyc2VJbnQoIEdyaWREYXRhLmRhdGFbaV1baWRGaWVsZF0pICsgMTtcclxuICAgICAgaWYgKEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF0gPj0gT1JERVIpXHJcbiAgICAgICAgT1JERVIgPSBwYXJzZUludChHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdICkgKyAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdmFsdWVzID0ge1xyXG4gICAgW2lkRmllbGRdOiBJRCxcclxuICAgIFtvcmRlckZpZWxkXTogT1JERVJcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJzZXRJbml0aWFsVmFsdWVzOnZhbHVlczpcIix2YWx1ZXMgKVxyXG4gIG9iamVjdC5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZXMpXHJcbn1cclxucHVibGljIHJvd1Jlb3JkZXIob2JqZWN0LCBvcmRlckZpZWxkLCBlKXtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUpO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleClcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wUG9zaXRpb24pO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KVxyXG4gIGxldCBkYXRhSXRlbSA9IGUuZHJhZ2dlZFJvd3NbMF0uZGF0YUl0ZW07XHJcbiAgbGV0IEdyaWREYXRhO1xyXG4gIEdyaWREYXRhID0gIG9iamVjdC5ncmlkLmRhdGE7XHJcblxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImFmdGVyXCIpe1xyXG4gICAgR3JpZERhdGEuZGF0YS5zcGxpY2UoZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KzEsIDAsIGRhdGFJdGVtKTtcclxuICAgIC8vUmVtb3ZlIGRyYWdnZWRSb3dzXHJcbiAgICBHcmlkRGF0YS5kYXRhID0gR3JpZERhdGEuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggIT09IGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImJlZm9yZVwiKXtcclxuICAgICAvL1JlbW92ZSBkcmFnZ2VkUm93c1xyXG4gICAgR3JpZERhdGEuZGF0YSA9IEdyaWREYXRhLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhSXRlbSwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICE9PSBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4O1xyXG4gICAgfSk7XHJcbiAgICBHcmlkRGF0YS5kYXRhLnNwbGljZShlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgsIDAsIGRhdGFJdGVtKTtcclxuICB9XHJcbiAvL3dyaXRlIG9yZGVyIGZpZWxkXHJcbiBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm93UmVvcmRlcjpHcmlkRGF0YS5kYXRhOlwiLEdyaWREYXRhLmRhdGEpO1xyXG4gZm9yIChsZXQgaT0wOyBpIDwgR3JpZERhdGEuZGF0YS5sZW5ndGg7aSsrKXtcclxuICAgR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXT0gaSArIDE7XHJcbiAgIEdyaWREYXRhLmRhdGFbaV0uX1FVRVJZID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuIH1cclxuIG9iamVjdC5zYXZlQ2hhbmdlcyhvYmplY3QuZ3JpZCk7XHJcbn1cclxucHVibGljIGhhbmRsZUZpbHRlckNvZGUob2JqZWN0LENPREUpIHtcclxuICBpZiAob2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5HUk9VUE5BTUUgPT0gXCJTWVNBRE1cIil7XHJcbiAgICBvYmplY3QuZmlsdGVyQ29kZSA9IENPREU7XHJcbiAgfVxyXG4gfVxyXG4gcHVibGljIGhpZGVOb1ZhbGlkTGljZW5zZSgpXHJcbiB7XHJcbiAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpOyBcclxuICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOmNvbGxlY3Rpb246XCIsY29sbGVjdGlvbik7XHJcbiAgICAgZm9yIChsZXQgaT0wO2k8Y29sbGVjdGlvbi5sZW5ndGg7aSsrKXtcclxuICAgICAgIGxldCBpbm5lckhUTUw6YW55ID0gY29sbGVjdGlvbltpXS5pbm5lckhUTUw7XHJcbiAgICAgICAvL2xldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJuZy1yZWZsZWN0LW5nLXN0eWxlXCIpO1xyXG4gICAgICAgLy9sZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiZGlzcGxheTogZmxleDtcIik7XHJcbiAgICAgICBsZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiTm8gdmFsaWQgbGljZW5zZSBmb3VuZFwiKTtcclxuICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6cmVzdWx0OlwiLHJlc3VsdCk7XHJcbiAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiTm8gdmFsaWQgbGljZW5zZSBmb3VuZFwiKTtcclxuICAgICAgICAgaWYgKHJlc3VsdCl7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzppbm5lckhUTUw6XCIscmVzdWx0LGlubmVySFRNTCk7XHJcbiAgICAgICAgICAgY29sbGVjdGlvbltpXS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgICAgLy9jb25zb2xlLmxvZyAoXCJjb2xsZWN0aW9uOlwiLCBjb2xsZWN0aW9uLmxlbmd0aCwgY29sbGVjdGlvblszNV0pXHJcbiB9XHJcbn1cclxuXHJcbi8qXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgZXh0ZW5kcyBzdGFyX1NlcnZpY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlOk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBodHRwOiBIdHRwQ2xpZW50LCAgIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIC8vbGV0IFBhZ2UgPSBlbmNvZGVVUkkgKFwiJl9xdWVyeT1HRVRfRUlNX0NPTU1BTkRTJlNQQ19GVU5DVElPTj0nJScmRVhDU1lTVEVNPSdTTU5TXzMnJkVRVUlQSUQ9JyUnXCIpO1xyXG4gICAgICAgIGxldCBQYWdlID0gZW5jb2RlVVJJIChcIlwiKTtcclxuXHJcblxyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICBodHRwLCBQYWdlLCBtZXNzYWdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVyeUZvckNhdGVnb3J5KHsgQ2F0ZWdvcnlJRCB9OiB7IENhdGVnb3J5SUQ6IG51bWJlciB9LCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnQ2F0ZWdvcnlJRCcsIG9wZXJhdG9yOiAnZXEnLCB2YWx1ZTogQ2F0ZWdvcnlJRFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsb2dpYzogJ2FuZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlGb3JQcm9kdWN0TmFtZShQcm9kdWN0TmFtZTogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUHJvZHVjdE5hbWUnLCBvcGVyYXRvcjogJ2NvbnRhaW5zJywgdmFsdWU6IFByb2R1Y3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxvZ2ljOiAnYW5kJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuKi9cclxuIl19