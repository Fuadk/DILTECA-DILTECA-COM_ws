
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmLoginComponent } from '../components/adm/adm-login/adm-login.component';
import { AdmBlankComponent} from '../components/adm/adm-blank/adm-blank.component'
import { DspDashboardComponent } from '../components/dsp/dsp-dashboard/dsp-dashboard.component';
import { DspReportsComponent } from '../components/dsp/dsp-reports/dsp-reports.component';

import { RoutinesFormComponent } from '../components/adm/routines-form/routines-form.component';
import { MenusFormComponent } from '../components/adm/menus-form/menus-form.component';
import { AdmUserGroupAuthorityComponent } from '../components/adm/adm-user-group-authority/adm-user-group-authority.component';
import { AdmUserAuthorityComponent } from '../components/adm/adm-user-authority/adm-user-authority.component';
import { AdmRulesTreeComponent } from '../components/adm/adm-rules-tree/adm-rules-tree.component';
import { AdmGroupAuthorityComponent } from '../components/adm/adm-group-authority/adm-group-authority.component';
import { AdmGroupinfoFormComponent } from '../components/adm/adm-groupinfo-form/adm-groupinfo-form.component';
import { AdmUserInformationFormComponent } from '../components/adm/adm-user-information-form/adm-user-information-form.component';
import { AdmRulesComponent } from '../components/adm/adm-rules/adm-rules.component';
import { AdmDashboardDefComponent } from '../components/adm/adm-dashboard-def/adm-dashboard-def.component';
import { AdmStatisticsComponent } from '../components/adm/adm-statistics/adm-statistics.component';
import { DspFormDefFormComponent } from '../components/dsp/dsp-form-def-form/dsp-form-def-form.component';
import { DspFormDragComponent } from '../components/dsp/dsp-form-drag/dsp-form-drag.component';
import { LogTransGridComponent } from '../components/adm/log-trans-grid/log-trans-grid.component';
import { AdmLogTransComponent } from '../components/adm/adm-log-trans/adm-log-trans.component';
import { SomCodesComponent } from '../components/adm/som-codes/som-codes.component';
import { AdmMenusRoutinesDragComponent } from '../components/adm/adm-menus-routines-drag/adm-menus-routines-drag.component';
import { AdmMenusRoutinesComponent }     from '../components/adm/adm-menus-routines/adm-menus-routines.component';










import { ActFileDefAccountabilityActFileDefFormFormComponent } from '../components/accountability/accountability-act-file-def-form/accountability-act-file-def-form.component';
import { ActInvoicesAccountabilityActInvoicesGridGridComponent } from '../components/accountability/accountability-act-invoices-grid/accountability-act-invoices-grid.component';
import { ActPaymentAccountabilityActPaymentGridGridComponent } from '../components/accountability/accountability-act-payment-grid/accountability-act-payment-grid.component';
import { AccountabilityFileFieldsComponent } from '../components/accountability/accountability-file-fields/accountability-file-fields.component';
import { ActFieldsAccountabilityActFieldsGridGridComponent } from '../components/accountability/accountability-act-fields-grid/accountability-act-fields-grid.component';
import { ActFileDefAccountabilityActFileDefGridGridComponent } from '../components/accountability/accountability-act-file-def-grid/accountability-act-file-def-grid.component';


import { AccountabilityInvoicesComponent } from '../components/accountability/accountability-invoices/accountability-invoices.component';
import { ActInvoicesAccountabilityActInvoicesFormFormComponent } from '../components/accountability/accountability-act-invoices-form/accountability-act-invoices-form.component';
import { ActPaymentAccountabilityActPaymentFormFormComponent } from '../components/accountability/accountability-act-payment-form/accountability-act-payment-form.component';
import { AccountabilityPaymentsComponent } from '../components/accountability/accountability-payments/accountability-payments.component';
import { ActRuleDefAccountabilityActRuleDefFormFormComponent } from '../components/accountability/accountability-act-rule-def-form/accountability-act-rule-def-form.component';

import { ActRuleActionAccountabilityActRuleActionGridGridComponent } from '../components/accountability/accountability-act-rule-action-grid/accountability-act-rule-action-grid.component';
import { ActRuleItemAccountabilityActRuleItemGridGridComponent } from '../components/accountability/accountability-act-rule-item-grid/accountability-act-rule-item-grid.component';
import { AccountabilityRulesComponent } from '../components/accountability/accountability-rules/accountability-rules.component';
import { AccountabilityFilesFieldsComponent } from '../components/accountability/accountability-files-fields/accountability-files-fields.component';
import { AccountabilityFilesComponent } from '../components/accountability/accountability-files/accountability-files.component';
import { ActRuleItemAccountabilityActRuleItemFormFormComponent } from '../components/accountability/accountability-act-rule-item-form/accountability-act-rule-item-form.component';
import { ActRuleActionAccountabilityActRuleActionFormFormComponent } from '../components/accountability/accountability-act-rule-action-form/accountability-act-rule-action-form.component';
import { AccountabilityFilesMatchComponent } from '../components/accountability/accountability-files-match/accountability-files-match.component';
import { ActInvoicesAccountabilityActInvoicesGrid2GridComponent } from '../components/accountability/accountability-act-invoices-grid2/accountability-act-invoices-grid2.component';
import { ActPaymentAccountabilityActPaymentGrid2GridComponent } from '../components/accountability/accountability-act-payment-grid2/accountability-act-payment-grid2.component';
//point1

export const PanelbarRoutes: Routes = [
        { path: '', component: AdmBlankComponent },
        { path: 'adm_login', component: AdmLoginComponent },
        { path: 'PRVDASH', component: DspDashboardComponent },
        { path: 'PRVRPRT', component: DspReportsComponent },
		{ path: 'SOMMNU', component: AdmMenusRoutinesComponent },
		{ path: 'routines_form', component: RoutinesFormComponent },
		{ path: 'menus_form', component: MenusFormComponent },
		{ path: 'SOMAUTH', component: AdmUserGroupAuthorityComponent },
		{ path: 'adm_user_authority', component: AdmUserAuthorityComponent },
		{ path: 'adm_group_authority', component: AdmGroupAuthorityComponent },
		{ path: 'adm_groupinfo_form', component: AdmGroupinfoFormComponent },
		{ path: 'adm_user_information_form', component: AdmUserInformationFormComponent },
		{ path: 'SOMRULEDEF_old', component: AdmRulesComponent },
		{ path: 'SOMRULEDEF', component: AdmRulesTreeComponent },
		{ path: 'SOMSTATDEF', component: AdmStatisticsComponent },

        { path: 'dsp_form_def_form', component: DspFormDefFormComponent },

		{ path: 'PRVFORMD', component: DspFormDragComponent },
		{ path: 'log_trans_grid', component: LogTransGridComponent },
		{ path: 'adm_log_trans', component: AdmLogTransComponent },
		{ path: 'SOMCODES', component: SomCodesComponent },
		{ path: 'SOMMNUDRAG', component: AdmMenusRoutinesDragComponent },
	









	{ path: 'accountability_act_file_def_form', component: ActFileDefAccountabilityActFileDefFormFormComponent },
	{ path: 'accountability_act_invoices_grid', component: ActInvoicesAccountabilityActInvoicesGridGridComponent },
	{ path: 'accountability_act_payment_grid', component: ActPaymentAccountabilityActPaymentGridGridComponent },
	{ path: 'accountability_file_fields', component: AccountabilityFileFieldsComponent },
	{ path: 'accountability_act_fields_grid', component: ActFieldsAccountabilityActFieldsGridGridComponent },
	{ path: 'accountability_act_file_def_grid', component: ActFileDefAccountabilityActFileDefGridGridComponent },


	{ path: 'accountability_invoices', component: AccountabilityInvoicesComponent },
	{ path: 'accountability_act_invoices_form', component: ActInvoicesAccountabilityActInvoicesFormFormComponent },
	{ path: 'accountability_act_payment_form', component: ActPaymentAccountabilityActPaymentFormFormComponent },
	{ path: 'accountability_payments', component: AccountabilityPaymentsComponent },
	{ path: 'accountability_act_rule_def_form', component: ActRuleDefAccountabilityActRuleDefFormFormComponent },

	{ path: 'accountability_act_rule_action_grid', component: ActRuleActionAccountabilityActRuleActionGridGridComponent },
	{ path: 'accountability_act_rule_item_grid', component: ActRuleItemAccountabilityActRuleItemGridGridComponent },
	{ path: 'accountability_rules', component: AccountabilityRulesComponent },
	{ path: 'accountability_files_fields', component: AccountabilityFilesFieldsComponent },
	{ path: 'accountability_files', component: AccountabilityFilesComponent },
	{ path: 'accountability_act_rule_item_form', component: ActRuleItemAccountabilityActRuleItemFormFormComponent },
	{ path: 'accountability_act_rule_action_form', component: ActRuleActionAccountabilityActRuleActionFormFormComponent },
	{ path: 'accountability_files_match', component: AccountabilityFilesMatchComponent },
	{ path: 'accountability_act_invoices_grid2', component: ActInvoicesAccountabilityActInvoicesGrid2GridComponent },
	{ path: 'accountability_act_payment_grid2', component: ActPaymentAccountabilityActPaymentGrid2GridComponent },
//point2
      
];

//if (this.paramConfig.DEBUG_FLAG) console.log(PanelbarRoutes);
export const appRoutingProviders: any[] = [
];

export const panelbarRouting: ModuleWithProviders<any> = RouterModule.forRoot(PanelbarRoutes);
//export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes, { initialNavigation : false });

