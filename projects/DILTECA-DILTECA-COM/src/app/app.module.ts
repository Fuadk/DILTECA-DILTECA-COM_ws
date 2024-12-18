
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { Routes , RouterModule } from '@angular/router';
import { ListViewModule } from "@progress/kendo-angular-listview";
//import 'hammerjs';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';
import { UploadModule } from '@progress/kendo-angular-upload';
import { EditorModule } from '@progress/kendo-angular-editor';
import { MessageService } from '@progress/kendo-angular-l10n';
import { GridModule , PDFModule, ExcelModule} from '@progress/kendo-angular-grid';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownListModule , DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {  NotificationModule } from '@progress/kendo-angular-notification';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DialogModule , DialogsModule} from '@progress/kendo-angular-dialog';
import { SortableModule } from '@progress/kendo-angular-sortable';

import { ICON_SETTINGS, IconsModule } from "@progress/kendo-angular-icons";

import { RTL } from '@progress/kendo-angular-l10n';
//import { environment } from '../environments/environment';//   src/environments/environment';
import {FocusModule} from 'angular2-focus';
//import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
// import { SignaturePadModule } from 'ngx-signaturepad';
import { SignaturePadModule } from 'angular2-signaturepad';
//import { DiagramComponent } from './components/diagram/diagram.component';
import { NgEventBus } from 'ng-event-bus';

import { starServices } from 'starlib';
//import { Starlib1 } from './components/Starlib1';
import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { MyMessageService } from './services/my-message.service';

import { UploadInterceptor } from './app.component';

import { ScrollViewModule } from "@progress/kendo-angular-scrollview";
import { AdmLoginComponent } from './components/adm/adm-login/adm-login.component';

import { AdmBlankComponent } from './components/adm/adm-blank/adm-blank.component';
import { DspDashboardComponent } from './components/dsp/dsp-dashboard/dsp-dashboard.component';
import { DspDynamicChartComponent } from './components/dsp/dsp-dynamic-chart/dsp-dynamic-chart.component';
import { DspReportsComponent } from './components/dsp/dsp-reports/dsp-reports.component';
import { DspDynamicRwGridComponent } from './components/dsp/dsp-dynamic-rw-grid/dsp-dynamic-rw-grid.component';
import { DspDynamicRwFormComponent } from './components/dsp/dsp-dynamic-rw-form/dsp-dynamic-rw-form.component';

import { DspMultistepComponent } from './components/dsp/dsp-multistep/dsp-multistep.component';

import { AdmMenusRoutinesComponent } from './components/adm/adm-menus-routines/adm-menus-routines.component';
import { RoutinesFormComponent } from './components/adm/routines-form/routines-form.component';
import { MenusFormComponent } from './components/adm/menus-form/menus-form.component';
import { AdmUserGroupAuthorityComponent } from './components/adm/adm-user-group-authority/adm-user-group-authority.component';
import { AdmUserAuthorityComponent } from './components/adm/adm-user-authority/adm-user-authority.component';
import { AdmGroupAuthorityComponent } from './components/adm/adm-group-authority/adm-group-authority.component';
import { AdmGroupinfoFormComponent } from './components/adm/adm-groupinfo-form/adm-groupinfo-form.component';
import { AdmAuthorityGridComponent } from './components/adm/adm-authority-grid/adm-authority-grid.component';
import { AdmUserInformationFormComponent } from './components/adm/adm-user-information-form/adm-user-information-form.component';
import { AdmQueryDefFormComponent } from './components/adm/adm-query-def-form/adm-query-def-form.component';
import { DspDynamicGridComponent } from './components/dsp/dsp-dynamic-grid/dsp-dynamic-grid.component';
import { DspEditorFormComponent } from './components/dsp/dsp-editor-form/dsp-editor-form.component';

import { AdmRuleItemGridComponent } from './components/adm/adm-rule-item-grid/adm-rule-item-grid.component';
import { AdmRuleActionGridComponent } from './components/adm/adm-rule-action-grid/adm-rule-action-grid.component';
import { AdmRulesComponent } from './components/adm/adm-rules/adm-rules.component';
import { AdmRuleHostFormComponent } from './components/adm/adm-rule-host-form/adm-rule-host-form.component';
import { AdmRuleHostMapFormComponent } from './components/adm/adm-rule-host-map-form/adm-rule-host-map-form.component';
import { AdmRulesHostsComponent } from './components/adm/adm-rules-hosts/adm-rules-hosts.component';
import { AdmRuleKeysGridComponent } from './components/adm/adm-rule-keys-grid/adm-rule-keys-grid.component';
import { AdmRuleLogGridComponent } from './components/adm/adm-rule-log-grid/adm-rule-log-grid.component';
import { AdmRuleLogFormComponent } from './components/adm/adm-rule-log-form/adm-rule-log-form.component';
import { AdmRuleDefFormComponent } from './components/adm/adm-rule-def-form/adm-rule-def-form.component';
import { AdmRulesTreeComponent } from './components/adm/adm-rules-tree/adm-rules-tree.component';
import { AdmDashboardDefComponent } from './components/adm/adm-dashboard-def/adm-dashboard-def.component';
import { AdmStatisticsComponent } from './components/adm/adm-statistics/adm-statistics.component';
import { AdmDashboardDefFormComponent } from './components/adm/adm-dashboard-def-form/adm-dashboard-def-form.component';
import { AdmDashboardDetailGridComponent } from './components/adm/adm-dashboard-detail-grid/adm-dashboard-detail-grid.component';
import { SomTabsCodesGridComponent } from './components/adm/som-tabs-codes-grid/som-tabs-codes-grid.component';
//import { SomTabsCodesSomcodesFmbB2GridComponent } from './components/adm/som-tabs-codes-somcodes-fmb-b2-grid/som-tabs-codes-somcodes-fmb-b2-grid.component';
import { SomTabsCodesSpecFormComponent } from './components/adm/som-tabs-codes-spec-form/som-tabs-codes-spec-form.component';
import { SomCodesComponent } from './components/adm/som-codes/som-codes.component';

import { DspFormDefFormComponent } from './components/dsp/dsp-form-def-form/dsp-form-def-form.component';

import { DspFormAreaFormComponent } from './components/dsp/dsp-form-area-form/dsp-form-area-form.component';
import { DspFormFieldsFormComponent } from './components/dsp/dsp-form-fields-form/dsp-form-fields-form.component';
import { DspFormDragComponent } from './components/dsp/dsp-form-drag/dsp-form-drag.component';
import { DspFormPageFormComponent } from './components/dsp/dsp-form-page-form/dsp-form-page-form.component';
import { DspUploadComponent } from './components/dsp/dsp-upload/dsp-upload.component';

import { AdmMenusRoutinesDragComponent } from './components/adm/adm-menus-routines-drag/adm-menus-routines-drag.component';
import { LogTransGridComponent } from './components/adm/log-trans-grid/log-trans-grid.component';
import { AdmLogTransComponent } from './components/adm/adm-log-trans/adm-log-trans.component';
import { LogTransFormComponent } from './components/adm/log-trans-form/log-trans-form.component';





import { ActFileDefAccountabilityActFileDefFormFormComponent } from './components/accountability/accountability-act-file-def-form/accountability-act-file-def-form.component';
import { ActInvoicesAccountabilityActInvoicesGridGridComponent } from './components/accountability/accountability-act-invoices-grid/accountability-act-invoices-grid.component';
import { ActPaymentAccountabilityActPaymentGridGridComponent } from './components/accountability/accountability-act-payment-grid/accountability-act-payment-grid.component';
import { AccountabilityFileFieldsComponent } from './components/accountability/accountability-file-fields/accountability-file-fields.component';
import { ActFieldsAccountabilityActFieldsGridGridComponent } from './components/accountability/accountability-act-fields-grid/accountability-act-fields-grid.component';
import { ActFileDefAccountabilityActFileDefGridGridComponent } from './components/accountability/accountability-act-file-def-grid/accountability-act-file-def-grid.component';


import { AccountabilityInvoicesComponent } from './components/accountability/accountability-invoices/accountability-invoices.component';
import { ActInvoicesAccountabilityActInvoicesFormFormComponent } from './components/accountability/accountability-act-invoices-form/accountability-act-invoices-form.component';
import { ActPaymentAccountabilityActPaymentFormFormComponent } from './components/accountability/accountability-act-payment-form/accountability-act-payment-form.component';
import { AccountabilityPaymentsComponent } from './components/accountability/accountability-payments/accountability-payments.component';
import { ActRuleDefAccountabilityActRuleDefFormFormComponent } from './components/accountability/accountability-act-rule-def-form/accountability-act-rule-def-form.component';

import { ActRuleActionAccountabilityActRuleActionGridGridComponent } from './components/accountability/accountability-act-rule-action-grid/accountability-act-rule-action-grid.component';
import { ActRuleItemAccountabilityActRuleItemGridGridComponent } from './components/accountability/accountability-act-rule-item-grid/accountability-act-rule-item-grid.component';
import { AccountabilityRulesComponent } from './components/accountability/accountability-rules/accountability-rules.component';
import { AccountabilityFilesFieldsComponent } from './components/accountability/accountability-files-fields/accountability-files-fields.component';
import { AccountabilityFilesComponent } from './components/accountability/accountability-files/accountability-files.component';
import { ActRuleItemAccountabilityActRuleItemFormFormComponent } from './components/accountability/accountability-act-rule-item-form/accountability-act-rule-item-form.component';
import { ActRuleActionAccountabilityActRuleActionFormFormComponent } from './components/accountability/accountability-act-rule-action-form/accountability-act-rule-action-form.component';
import { AccountabilityFilesMatchComponent } from './components/accountability/accountability-files-match/accountability-files-match.component';
import { ActInvoicesAccountabilityActInvoicesGrid2GridComponent } from './components/accountability/accountability-act-invoices-grid2/accountability-act-invoices-grid2.component';
import { ActPaymentAccountabilityActPaymentGrid2GridComponent } from './components/accountability/accountability-act-payment-grid2/accountability-act-payment-grid2.component';
@NgModule({
  declarations: [
    AppComponent,
    AdmLoginComponent,
    AdmBlankComponent,
    DspDashboardComponent,
    DspDynamicChartComponent,
    DspReportsComponent,
    DspDynamicRwGridComponent,
    DspDynamicRwFormComponent,
    DspMultistepComponent,
    AdmMenusRoutinesComponent,
    RoutinesFormComponent,
    MenusFormComponent,
    AdmUserGroupAuthorityComponent,
    AdmUserAuthorityComponent,
    AdmGroupAuthorityComponent,
    AdmGroupinfoFormComponent,
    AdmAuthorityGridComponent,
    AdmUserInformationFormComponent,
    AdmRuleDefFormComponent,
    AdmRulesTreeComponent,
    AdmRuleItemGridComponent,
    AdmRuleActionGridComponent,
    AdmRulesComponent,
    AdmStatisticsComponent,
    AdmQueryDefFormComponent,
    AdmDashboardDefComponent,
    AdmDashboardDefFormComponent,
    AdmDashboardDetailGridComponent,
    DspDynamicGridComponent,
    DspEditorFormComponent,
    SomTabsCodesGridComponent,
//      SomTabsCodesSomcodesFmbB2GridComponent,
    SomTabsCodesSpecFormComponent,
    SomCodesComponent,
    
    
    DspFormDefFormComponent,
    DspFormAreaFormComponent,
    DspFormFieldsFormComponent,
    DspFormDragComponent,
    DspFormPageFormComponent,
    DspUploadComponent,


    AdmRuleHostFormComponent,
    AdmRuleHostMapFormComponent,
    AdmRulesHostsComponent,
    AdmRuleKeysGridComponent,
    AdmRuleLogGridComponent,
    AdmRuleLogFormComponent,
    AdmMenusRoutinesDragComponent,
    LogTransGridComponent,
    AdmLogTransComponent,
    LogTransFormComponent,

    
 
 

  
		ActFileDefAccountabilityActFileDefFormFormComponent,
		ActInvoicesAccountabilityActInvoicesGridGridComponent,
		ActPaymentAccountabilityActPaymentGridGridComponent,
		AccountabilityFileFieldsComponent,
		ActFieldsAccountabilityActFieldsGridGridComponent,
		ActFileDefAccountabilityActFileDefGridGridComponent,
		


		AccountabilityInvoicesComponent,
		ActInvoicesAccountabilityActInvoicesFormFormComponent,
		ActPaymentAccountabilityActPaymentFormFormComponent,
		AccountabilityPaymentsComponent,
		ActRuleDefAccountabilityActRuleDefFormFormComponent,

		ActRuleActionAccountabilityActRuleActionGridGridComponent,
		ActRuleItemAccountabilityActRuleItemGridGridComponent,
		AccountabilityRulesComponent,
		AccountabilityFilesFieldsComponent,
		AccountabilityFilesComponent,
		ActRuleItemAccountabilityActRuleItemFormFormComponent,
		ActRuleActionAccountabilityActRuleActionFormFormComponent,
		AccountabilityFilesMatchComponent,
		ActInvoicesAccountabilityActInvoicesGrid2GridComponent,
		ActPaymentAccountabilityActPaymentGrid2GridComponent,
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
   
    AppRoutingModule,
BrowserAnimationsModule,
BrowserModule,
ButtonsModule,
ChartsModule,
DateInputsModule,
DialogModule,
DialogsModule,
DropDownListModule,
DropDownsModule,
EditorModule,
ExcelModule,
FormsModule,
GridModule,
HttpClientModule,
IndicatorsModule,
ScrollViewModule,
InputsModule,
LabelModule,
LayoutModule,
ListViewModule,



MenuModule,
NgxToggleModule,

NotificationModule,
panelbarRouting,
PDFExportModule,
PDFModule,
ReactiveFormsModule,

SortableModule,
ToolBarModule,
TreeViewModule,
IconsModule,
UploadModule,
WindowModule,
NgxDnDModule.forRoot(),
  ],
  providers:    [
    
    starServices,
    { provide: MessageService, useClass: MyMessageService } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true
    },
    { provide: RTL, useValue: "document.documentElement.dir == 'rtl'" },
    appRoutingProviders,
    { provide: APP_BASE_HREF, useValue : window.location.pathname },
    {provide: ICON_SETTINGS, useValue: { type: 'font' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
