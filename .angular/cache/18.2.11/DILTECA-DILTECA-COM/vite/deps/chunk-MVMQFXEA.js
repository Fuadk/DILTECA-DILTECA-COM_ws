import {
  DataBoundComponent,
  ExpandDirective,
  ExpandableComponent,
  FlatDataBindingDirective,
  HierarchyBindingDirective,
  SelectDirective,
  TreeViewComponent
} from "./chunk-UXCDU2CG.js";
import {
  TextBoxComponent,
  TextBoxModule,
  TextBoxPrefixTemplateDirective
} from "./chunk-GQBAIJWP.js";
import {
  DialogContainerService,
  DialogService,
  WindowContainerService,
  WindowService
} from "./chunk-PVTJ4MB3.js";
import {
  ButtonComponent,
  ButtonModule
} from "./chunk-EZZZ6A5H.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-XWKI3G3Z.js";
import {
  ActionSheetComponent,
  ActionSheetModule,
  ActionSheetTemplateDirective
} from "./chunk-TVFGUZRF.js";
import {
  PopupModule,
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  caretAltDownIcon,
  plusIcon,
  searchIcon,
  xCircleIcon,
  xIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconComponent,
  IconWrapperComponent,
  IconsModule,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  AdornmentsModule,
  EventsModule,
  EventsOutsideAngularDirective,
  KendoInput,
  Keys,
  MultiTabStop,
  PrefixTemplateDirective,
  ResizeBatchService,
  ResizeSensorComponent,
  ResizeSensorModule,
  SeparatorComponent,
  SuffixTemplateDirective,
  TemplateContextDirective,
  anyChanged,
  closest,
  getter,
  guid,
  hasObservers,
  isChanged,
  isControlRequired,
  isDocumentAvailable,
  isObjectPresent,
  isSafari,
  parseAttributes,
  pointers,
  removeHTMLAttributes,
  setHTMLAttributes,
  touchEnabled
} from "./chunk-HRNBUZH3.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-GRNNJSKN.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-JQMZVAPB.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Injector,
  Input,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  fromEvent,
  merge
} from "./chunk-PC7SNX6C.js";
import {
  partition
} from "./chunk-XIIBOQQH.js";
import {
  Subject,
  Subscription,
  auditTime,
  catchError,
  concatMap,
  debounceTime,
  filter,
  interval,
  map,
  of,
  skipWhile,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime
} from "./chunk-NXOOB3F7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@progress/kendo-angular-dropdowns/fesm2020/progress-kendo-angular-dropdowns.mjs
var _c0 = ["kendoSearchbar", ""];
var _c1 = ["content"];
var _c2 = ["list"];
var _c3 = ["virtualContainer"];
var _c4 = (a0, a1, a2) => ({
  "height.px": a0,
  "minHeight.px": a1,
  "boxSizing": a2
});
var _c5 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
var _c6 = (a0, a1) => ({
  "k-disabled": a0,
  "k-table-alt-row": a1
});
function ListComponent_div_0_1_ng_template_0_Template(rf, ctx) {
}
function ListComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.fixedGroupTemplate.templateRef, ctx_r1.currentGroup));
  }
}
function ListComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.listGroupStickyHeaderTextClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentGroup);
  }
}
function ListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, ListComponent_div_0_1_Template, 1, 4, null, 7)(2, ListComponent_div_0_ng_template_2_Template, 2, 3, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.listGroupStickyHeaderClass);
    ɵɵproperty("ngStyle", ɵɵpureFunction3(5, _c4, ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight, ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight, ctx_r1.virtual ? "border-box" : "inherit"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.fixedGroupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.fixedGroupTemplate);
  }
}
function ListComponent_5_ng_template_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 16);
    ɵɵlistener("change", function ListComponent_5_ng_template_0_input_1_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const itemIndex_r4 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCheckedChange($event, itemIndex_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const itemIndex_r4 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.checkboxClasses)("checked", ctx_r1.isChecked(itemIndex_r4));
  }
}
function ListComponent_5_ng_template_0_2_ng_template_0_Template(rf, ctx) {
}
function ListComponent_5_ng_template_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_5_ng_template_0_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const dataItem_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.template.templateRef, dataItem_r5));
  }
}
function ListComponent_5_ng_template_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getText(dataItem_r5));
  }
}
function ListComponent_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 14);
    ɵɵtemplate(1, ListComponent_5_ng_template_0_input_1_Template, 1, 2, "input", 15)(2, ListComponent_5_ng_template_0_2_Template, 1, 4, null, 7)(3, ListComponent_5_ng_template_0_ng_template_3_Template, 2, 1, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const itemIndex_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.listItemClass);
    ɵɵproperty("checkboxes", ctx_r1.checkboxes)("height", ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight)("index", itemIndex_r4 + ctx_r1.startFrom)("multipleSelection", ctx_r1.multipleSelection)("ngClass", ɵɵpureFunction2(13, _c6, ctx_r1.isDisabled(itemIndex_r4), ctx_r1.isAltRow(itemIndex_r4)));
    ɵɵattribute("id", ctx_r1.optionPrefix + "-" + itemIndex_r4)("tabIndex", -1)("aria-selected", ctx_r1.isItemSelected(itemIndex_r4));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkboxes.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.template);
  }
}
function ListComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_5_ng_template_0_Template, 4, 16, "ng-template", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.data);
  }
}
function ListComponent_6_ng_template_0_li_0_3_ng_template_0_Template(rf, ctx) {
}
function ListComponent_6_ng_template_0_li_0_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_6_ng_template_0_li_0_3_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const dataItem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.groupTemplate.templateRef, dataItem_r6.value));
  }
}
function ListComponent_6_ng_template_0_li_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const dataItem_r6 = ɵɵnextContext(2).$implicit;
    ɵɵtextInterpolate(dataItem_r6.value);
  }
}
function ListComponent_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 20, 2)(2, "span");
    ɵɵtemplate(3, ListComponent_6_ng_template_0_li_0_3_Template, 1, 4, null, 7)(4, ListComponent_6_ng_template_0_li_0_ng_template_4_Template, 1, 1, "ng-template", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const dataItem_r6 = ctx_r6.$implicit;
    const itemIndex_r8 = ctx_r6.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.listGroupItemClass);
    ɵɵclassProp("k-table-alt-row", ctx_r1.isAltRow(itemIndex_r8 - 1));
    ɵɵproperty("ngStyle", ɵɵpureFunction3(12, _c4, ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight, ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight, ctx_r1.virtual ? "border-box" : "inherit"));
    ɵɵattribute("group-index", dataItem_r6.index)("id", ctx_r1.optionPrefix + "-" + itemIndex_r8)("tabIndex", -1);
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.listGroupItemTextClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.groupTemplate);
  }
}
function ListComponent_6_ng_template_0_li_1_2_ng_template_0_Template(rf, ctx) {
}
function ListComponent_6_ng_template_0_li_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_6_ng_template_0_li_1_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const dataItem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.template.templateRef, dataItem_r6.value));
  }
}
function ListComponent_6_ng_template_0_li_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getText(dataItem_r6.value));
  }
}
function ListComponent_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 21, 2);
    ɵɵtemplate(2, ListComponent_6_ng_template_0_li_1_2_Template, 1, 4, null, 7)(3, ListComponent_6_ng_template_0_li_1_ng_template_3_Template, 2, 1, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const dataItem_r6 = ctx_r6.$implicit;
    const itemIndex_r8 = ctx_r6.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.listItemClass);
    ɵɵproperty("height", ctx_r1.virtual == null ? null : ctx_r1.virtual.itemHeight)("index", dataItem_r6.offsetIndex)("multipleSelection", ctx_r1.multipleSelection)("ngClass", ɵɵpureFunction2(12, _c6, ctx_r1.isDisabled(dataItem_r6.offsetIndex), ctx_r1.isAltRow(itemIndex_r8 - 1)));
    ɵɵattribute("absolute-index", dataItem_r6.index)("id", ctx_r1.optionPrefix + "-" + itemIndex_r8)("tabIndex", -1)("aria-selected", ctx_r1.isItemSelected(dataItem_r6.offsetIndex));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.template);
  }
}
function ListComponent_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_6_ng_template_0_li_0_Template, 5, 16, "li", 18)(1, ListComponent_6_ng_template_0_li_1_Template, 4, 15, "li", 19);
  }
  if (rf & 2) {
    const dataItem_r6 = ctx.$implicit;
    ɵɵproperty("ngIf", dataItem_r6.header);
    ɵɵadvance();
    ɵɵproperty("ngIf", !dataItem_r6.header);
  }
}
function ListComponent_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_6_ng_template_0_Template, 2, 2, "ng-template", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.data);
  }
}
function ListComponent_kendo_resize_sensor_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 22);
    ɵɵlistener("resize", function ListComponent_kendo_resize_sensor_7_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.listResize.emit());
    });
    ɵɵelementEnd();
  }
}
function ListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23, 3)(2, "div")(3, "kendo-resize-sensor", 22);
    ɵɵlistener("resize", function ListComponent_div_8_Template_kendo_resize_sensor_resize_3_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.listResize.emit());
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r1.scrollHeight, "px");
  }
}
var _c7 = ["actionSheetSearchBar"];
var _c8 = (a0) => ({
  duration: a0
});
function ResponsiveRendererComponent_ng_template_2_kendo_textbox_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon", 19);
  }
}
function ResponsiveRendererComponent_ng_template_2_kendo_textbox_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-textbox", 17, 1);
    ɵɵlistener("valueChange", function ResponsiveRendererComponent_ng_template_2_kendo_textbox_10_Template_kendo_textbox_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onValueChange($event));
    });
    ɵɵtemplate(2, ResponsiveRendererComponent_ng_template_2_kendo_textbox_10_ng_template_2_Template, 1, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r2.searchBarValue)("size", ctx_r2.size);
  }
}
function ResponsiveRendererComponent_ng_template_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ResponsiveRendererComponent_ng_template_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "button", 21);
    ɵɵlistener("click", function ResponsiveRendererComponent_ng_template_2_div_14_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCancel.emit());
    })("keydown.enter", function ResponsiveRendererComponent_ng_template_2_div_14_Template_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r5);
      return ɵɵresetView($event.stopImmediatePropagation());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 22);
    ɵɵlistener("click", function ResponsiveRendererComponent_ng_template_2_div_14_Template_button_click_3_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onApply.emit());
    })("keydown.enter", function ResponsiveRendererComponent_ng_template_2_div_14_Template_button_keydown_enter_3_listener($event) {
      ɵɵrestoreView(_r5);
      return ɵɵresetView($event.stopImmediatePropagation());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.messageFor("cancelButton"), " ");
    ɵɵadvance();
    ɵɵproperty("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.messageFor("applyButton"), " ");
  }
}
function ResponsiveRendererComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 8);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 9)(8, "button", 10);
    ɵɵlistener("click", function ResponsiveRendererComponent_ng_template_2_Template_button_click_8_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closePopup.emit());
    });
    ɵɵelementEnd()()();
    ɵɵelementStart(9, "div", 11);
    ɵɵtemplate(10, ResponsiveRendererComponent_ng_template_2_kendo_textbox_10_Template, 3, 2, "kendo-textbox", 12);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 13)(12, "div", 14);
    ɵɵtemplate(13, ResponsiveRendererComponent_ng_template_2_ng_container_13_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd()();
    ɵɵtemplate(14, ResponsiveRendererComponent_ng_template_2_div_14_Template, 5, 4, "div", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r2.title);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.subtitle);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r2.xIcon)("size", ctx_r2.size)("tabIndex", -1);
    ɵɵattribute("title", ctx_r2.messageFor("clearTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.showTextInput);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.sharedPopupActionSheetTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showActionButtons);
  }
}
var _c9 = ["container"];
var _c10 = ["popupTemplate"];
var _c11 = ["optionsList"];
var _c12 = (a0) => ({
  templateRef: a0
});
function AutoCompleteComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function AutoCompleteComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, AutoCompleteComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function AutoCompleteComponent_kendo_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function AutoCompleteComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function AutoCompleteComponent_span_5_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    })("mousedown", function AutoCompleteComponent_span_5_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.clearButtonVisiblity);
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function AutoCompleteComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
}
function AutoCompleteComponent_kendo_separator_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function AutoCompleteComponent_span_8_ng_template_1_Template(rf, ctx) {
}
function AutoCompleteComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtemplate(1, AutoCompleteComponent_span_8_ng_template_1_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function AutoCompleteComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoCompleteComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoCompleteComponent_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(16);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function AutoCompleteComponent_kendo_resize_sensor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 21);
    ɵɵlistener("resize", function AutoCompleteComponent_kendo_resize_sensor_13_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function AutoCompleteComponent_ng_template_15_0_ng_template_0_Template(rf, ctx) {
}
function AutoCompleteComponent_ng_template_15_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoCompleteComponent_ng_template_15_0_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate.templateRef));
  }
}
function AutoCompleteComponent_ng_template_15_div_3_ng_template_1_Template(rf, ctx) {
}
function AutoCompleteComponent_ng_template_15_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function AutoCompleteComponent_ng_template_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtemplate(1, AutoCompleteComponent_ng_template_15_div_3_ng_template_1_Template, 0, 0, "ng-template", 26)(2, AutoCompleteComponent_ng_template_15_div_3_ng_template_2_Template, 2, 1, "ng-template", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate == null ? null : ctx_r1.noDataTemplate.templateRef));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function AutoCompleteComponent_ng_template_15_4_ng_template_0_Template(rf, ctx) {
}
function AutoCompleteComponent_ng_template_15_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoCompleteComponent_ng_template_15_4_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate.templateRef));
  }
}
function AutoCompleteComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, AutoCompleteComponent_ng_template_15_0_Template, 1, 3, null, 7);
    ɵɵelementStart(1, "kendo-list", 22, 3);
    ɵɵlistener("pageChange", function AutoCompleteComponent_ng_template_15_Template_kendo_list_pageChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, AutoCompleteComponent_ng_template_15_div_3_Template, 3, 5, "div", 23)(4, AutoCompleteComponent_ng_template_15_4_Template, 1, 3, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("size", ctx_r1.size)("rounded", ctx_r1.rounded)("id", ctx_r1.listBoxId)("optionPrefix", ctx_r1.optionPrefix)("data", ctx_r1.data)("textField", ctx_r1.valueField)("valueField", ctx_r1.valueField)("template", ctx_r1.template)("groupTemplate", ctx_r1.groupTemplate)("fixedGroupTemplate", ctx_r1.fixedGroupTemplate)("height", ctx_r1.listHeight)("show", ctx_r1.isOpen)("virtual", ctx_r1.virtual)("showStickyHeader", ctx_r1.showStickyHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.data.length === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
  }
}
var _c13 = ["select"];
var _c14 = (a0) => ({
  mousedown: a0
});
function ComboBoxComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function ComboBoxComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtemplate(1, ComboBoxComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function ComboBoxComponent_kendo_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function ComboBoxComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function ComboBoxComponent_span_5_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.clearButtonVisiblity);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(5, _c14, ctx_r1.preventEventDefault));
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function ComboBoxComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
}
function ComboBoxComponent_kendo_separator_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function ComboBoxComponent_span_8_ng_template_1_Template(rf, ctx) {
}
function ComboBoxComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, ComboBoxComponent_span_8_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function ComboBoxComponent_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ComboBoxComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ComboBoxComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(19);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function ComboBoxComponent_kendo_resize_sensor_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 24);
    ɵɵlistener("resize", function ComboBoxComponent_kendo_resize_sensor_14_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function ComboBoxComponent_ng_template_18_0_ng_template_0_Template(rf, ctx) {
}
function ComboBoxComponent_ng_template_18_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ComboBoxComponent_ng_template_18_0_ng_template_0_Template, 0, 0, "ng-template", 27);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate.templateRef));
  }
}
function ComboBoxComponent_ng_template_18_div_3_ng_template_1_Template(rf, ctx) {
}
function ComboBoxComponent_ng_template_18_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function ComboBoxComponent_ng_template_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtemplate(1, ComboBoxComponent_ng_template_18_div_3_ng_template_1_Template, 0, 0, "ng-template", 29)(2, ComboBoxComponent_ng_template_18_div_3_ng_template_2_Template, 2, 1, "ng-template", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate ? ctx_r1.noDataTemplate.templateRef : void 0));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function ComboBoxComponent_ng_template_18_4_ng_template_0_Template(rf, ctx) {
}
function ComboBoxComponent_ng_template_18_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ComboBoxComponent_ng_template_18_4_ng_template_0_Template, 0, 0, "ng-template", 27);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate.templateRef));
  }
}
function ComboBoxComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ComboBoxComponent_ng_template_18_0_Template, 1, 3, null, 8);
    ɵɵelementStart(1, "kendo-list", 25, 4);
    ɵɵlistener("pageChange", function ComboBoxComponent_ng_template_18_Template_kendo_list_pageChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, ComboBoxComponent_ng_template_18_div_3_Template, 3, 5, "div", 26)(4, ComboBoxComponent_ng_template_18_4_Template, 1, 3, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("size", ctx_r1.size)("rounded", ctx_r1.rounded)("id", ctx_r1.listBoxId)("optionPrefix", ctx_r1.optionPrefix)("data", ctx_r1.data)("textField", ctx_r1.textField)("valueField", ctx_r1.valueField)("template", ctx_r1.template)("groupTemplate", ctx_r1.groupTemplate)("fixedGroupTemplate", ctx_r1.fixedGroupTemplate)("height", ctx_r1.listHeight)("show", ctx_r1.isOpen)("virtual", ctx_r1.virtual)("showStickyHeader", ctx_r1.showStickyHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.data.length === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
  }
}
var _c15 = (a0) => ({
  "k-disabled": a0
});
function DropDownListComponent_3_ng_template_0_Template(rf, ctx) {
}
function DropDownListComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownListComponent_3_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.valueTemplate.templateRef, ctx_r1.dataItem));
  }
}
function DropDownListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate(ctx_r1.getText());
  }
}
function DropDownListComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
}
function DropDownListComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DropDownListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownListComponent_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r3 = ɵɵreference(15);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r3);
  }
}
function DropDownListComponent_kendo_resize_sensor_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 18);
    ɵɵlistener("resize", function DropDownListComponent_kendo_resize_sensor_10_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function DropDownListComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵlistener("click", function DropDownListComponent_ng_template_14_ng_template_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      return ɵɵresetView($event.stopImmediatePropagation());
    });
    ɵɵelementStart(1, "span", 22);
    ɵɵelement(2, "kendo-icon-wrapper", 23);
    ɵɵelementStart(3, "input", 24, 4);
    ɵɵtwoWayListener("ngModelChange", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.filterText, $event) || (ctx_r1.filterText = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_keydown_3_listener($event) {
      ɵɵrestoreView(_r6);
      const searchInput_r7 = ɵɵreference(4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.keydown($event, searchInput_r7));
    })("input", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_input_3_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleFilter($event));
    })("focus", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_focus_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFilterFocus());
    })("blur", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_blur_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.blurFilterInput());
    })("click", function DropDownListComponent_ng_template_14_ng_template_0_Template_input_click_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleClick());
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.filterInputClasses);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.searchIcon);
    ɵɵadvance();
    ɵɵproperty("filterInput", ctx_r1.isFocused && !ctx_r1.touchEnabled)("dir", ctx_r1.direction);
    ɵɵtwoWayProperty("ngModel", ctx_r1.filterText);
    ɵɵattribute("aria-controls", ctx_r1.listBoxId)("aria-label", ctx_r1.messageFor("filterInputLabel"));
  }
}
function DropDownListComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25)(1, "div", 26);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.optionLabelSizeClass);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c15, ctx_r1.isDisabledDefaultItem))("index", -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getDefaultItemText(), " ");
  }
}
function DropDownListComponent_ng_template_14_ng_template_2_ng_template_2_Template(rf, ctx) {
}
function DropDownListComponent_ng_template_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25)(1, "div", 26);
    ɵɵtemplate(2, DropDownListComponent_ng_template_14_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.optionLabelSizeClass);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c15, ctx_r1.isDisabledDefaultItem))("index", -1);
    ɵɵadvance();
    ɵɵproperty("templateContext", ɵɵpureFunction2(6, _c5, ctx_r1.itemTemplate.templateRef, ctx_r1.defaultItem));
  }
}
function DropDownListComponent_ng_template_14_3_ng_template_0_Template(rf, ctx) {
}
function DropDownListComponent_ng_template_14_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownListComponent_ng_template_14_3_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate.templateRef));
  }
}
function DropDownListComponent_ng_template_14_div_6_ng_template_1_Template(rf, ctx) {
}
function DropDownListComponent_ng_template_14_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function DropDownListComponent_ng_template_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, DropDownListComponent_ng_template_14_div_6_ng_template_1_Template, 0, 0, "ng-template", 28)(2, DropDownListComponent_ng_template_14_div_6_ng_template_2_Template, 2, 1, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate ? ctx_r1.noDataTemplate.templateRef : void 0));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function DropDownListComponent_ng_template_14_7_ng_template_0_Template(rf, ctx) {
}
function DropDownListComponent_ng_template_14_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownListComponent_ng_template_14_7_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate.templateRef));
  }
}
function DropDownListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵtemplate(0, DropDownListComponent_ng_template_14_ng_template_0_Template, 5, 7, "ng-template", 9)(1, DropDownListComponent_ng_template_14_ng_template_1_Template, 3, 6, "ng-template", 9)(2, DropDownListComponent_ng_template_14_ng_template_2_Template, 3, 9, "ng-template", 9)(3, DropDownListComponent_ng_template_14_3_Template, 1, 3, null, 8);
    ɵɵelementStart(4, "kendo-list", 19, 3);
    ɵɵlistener("pageChange", function DropDownListComponent_ng_template_14_Template_kendo_list_pageChange_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(6, DropDownListComponent_ng_template_14_div_6_Template, 3, 5, "div", 20)(7, DropDownListComponent_ng_template_14_7_Template, 1, 3, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.filterable && !ctx_r1.isActionSheetExpanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.defaultItem && !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.defaultItem && ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.listBoxId)("size", ctx_r1.size)("rounded", ctx_r1.rounded)("optionPrefix", ctx_r1.optionPrefix)("data", ctx_r1.data)("textField", ctx_r1.textField)("valueField", ctx_r1.valueField)("template", ctx_r1.itemTemplate)("groupTemplate", ctx_r1.groupTemplate)("fixedGroupTemplate", ctx_r1.fixedGroupTemplate)("height", ctx_r1.listHeight)("show", ctx_r1.isOpen)("virtual", ctx_r1.virtual)("ariaLive", ctx_r1.ariaLive)("showStickyHeader", ctx_r1.showStickyHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.data.length === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
  }
}
var _c16 = ["*"];
var _c17 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => ({
  "k-focus": a0,
  "k-disabled": a1,
  "k-chip-sm": a2,
  "k-chip-md": a3,
  "k-chip-lg": a4,
  "k-rounded-sm": a5,
  "k-rounded-md": a6,
  "k-rounded-lg": a7,
  "k-rounded-full": a8,
  "k-chip-solid k-chip-solid-base": a9,
  "k-chip-flat k-chip-flat-base": a10,
  "k-chip-outline k-chip-outline-base": a11
});
function TagListComponent_div_0_2_ng_template_0_Template(rf, ctx) {
}
function TagListComponent_div_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TagListComponent_div_0_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TagListComponent_div_0_ng_template_3_1_ng_template_0_Template(rf, ctx) {
}
function TagListComponent_div_0_ng_template_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TagListComponent_div_0_ng_template_3_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tag_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r2.groupTemplate.templateRef, tag_r2));
  }
}
function TagListComponent_div_0_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tag_r2 = ɵɵnextContext(2).$implicit;
    ɵɵtextInterpolate2("", tag_r2.length, " ", tag_r2.length === 1 ? "item" : "items", " selected");
  }
}
function TagListComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TagListComponent_div_0_ng_template_3_1_Template, 1, 4, null, 10)(2, TagListComponent_div_0_ng_template_3_ng_template_2_Template, 1, 2, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.groupTemplate);
  }
}
function TagListComponent_div_0_ng_template_5_1_ng_template_0_Template(rf, ctx) {
}
function TagListComponent_div_0_ng_template_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TagListComponent_div_0_ng_template_5_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tag_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r2.template.templateRef, tag_r2));
  }
}
function TagListComponent_div_0_ng_template_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const tag_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate(ctx_r2.tagProp(tag_r2, ctx_r2.textField, index_r5));
  }
}
function TagListComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TagListComponent_div_0_ng_template_5_1_Template, 1, 4, null, 10)(2, TagListComponent_div_0_ng_template_5_ng_template_2_Template, 1, 1, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.template);
  }
}
function TagListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "span", 4);
    ɵɵtemplate(2, TagListComponent_div_0_2_Template, 1, 0, null, 5)(3, TagListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TagListComponent_div_0_ng_template_5_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 6)(8, "span", 7)(9, "kendo-icon-wrapper", 8);
    ɵɵlistener("mousedown", function TagListComponent_div_0_Template_kendo_icon_wrapper_mousedown_9_listener($event) {
      const ctx_r5 = ɵɵrestoreView(_r1);
      const tag_r2 = ctx_r5.$implicit;
      const index_r5 = ctx_r5.index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deleteTag($event, tag_r2, index_r5));
    });
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const index_r5 = ctx.index;
    const groupTag_r7 = ɵɵreference(4);
    const singleTag_r8 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunctionV(9, _c17, [index_r5 === ctx_r2.focused, ctx_r2.isTagDisabled(tag_r2, index_r5), ctx_r2.size === "small", ctx_r2.size === "medium", ctx_r2.size === "large", ctx_r2.rounded === "small", ctx_r2.rounded === "medium", ctx_r2.rounded === "large", ctx_r2.rounded === "full", ctx_r2.fillMode === "solid", ctx_r2.fillMode === "flat", ctx_r2.fillMode === "outline"]));
    ɵɵattribute("id", ctx_r2.itemId(tag_r2, index_r5))("aria-selected", true)("role", "option");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isGroupTag(tag_r2))("ngIfThen", groupTag_r7)("ngIfElse", singleTag_r8);
    ɵɵadvance(6);
    ɵɵattribute("aria-hidden", index_r5 !== ctx_r2.focused);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r2.xCircleIcon);
  }
}
function MultiSelectComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function MultiSelectComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtemplate(1, MultiSelectComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function MultiSelectComponent_kendo_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function MultiSelectComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("mousedown", function MultiSelectComponent_span_7_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearAll($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.clearButtonVisiblity);
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function MultiSelectComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
}
function MultiSelectComponent_kendo_separator_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function MultiSelectComponent_span_10_ng_template_1_Template(rf, ctx) {
}
function MultiSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, MultiSelectComponent_span_10_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function MultiSelectComponent_ng_template_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MultiSelectComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectComponent_ng_template_11_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(18);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function MultiSelectComponent_kendo_resize_sensor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 24);
    ɵɵlistener("resize", function MultiSelectComponent_kendo_resize_sensor_13_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function MultiSelectComponent_ng_template_17_0_ng_template_0_Template(rf, ctx) {
}
function MultiSelectComponent_ng_template_17_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectComponent_ng_template_17_0_ng_template_0_Template, 0, 0, "ng-template", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate.templateRef));
  }
}
function MultiSelectComponent_ng_template_17_div_1_2_ng_template_0_Template(rf, ctx) {
}
function MultiSelectComponent_ng_template_17_div_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectComponent_ng_template_17_div_1_2_ng_template_0_Template, 0, 0, "ng-template", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.customItemTemplate.templateRef, ctx_r1.text));
  }
}
function MultiSelectComponent_ng_template_17_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r1.text);
  }
}
function MultiSelectComponent_ng_template_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29)(1, "div", 30);
    ɵɵtemplate(2, MultiSelectComponent_ng_template_17_div_1_2_Template, 1, 4, null, 31)(3, MultiSelectComponent_ng_template_17_div_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelement(5, "kendo-icon-wrapper", 32);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const default_custom_item_template_r7 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.customItemSizeClass);
    ɵɵadvance();
    ɵɵproperty("multipleSelection", true)("index", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.customItemTemplate)("ngIfElse", default_custom_item_template_r7);
    ɵɵadvance(3);
    ɵɵproperty("svgIcon", ctx_r1.plusIcon);
  }
}
function MultiSelectComponent_ng_template_17_div_4_ng_template_1_Template(rf, ctx) {
}
function MultiSelectComponent_ng_template_17_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function MultiSelectComponent_ng_template_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtemplate(1, MultiSelectComponent_ng_template_17_div_4_ng_template_1_Template, 0, 0, "ng-template", 34)(2, MultiSelectComponent_ng_template_17_div_4_ng_template_2_Template, 2, 1, "ng-template", 35);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate ? ctx_r1.noDataTemplate.templateRef : void 0));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function MultiSelectComponent_ng_template_17_5_ng_template_0_Template(rf, ctx) {
}
function MultiSelectComponent_ng_template_17_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectComponent_ng_template_17_5_ng_template_0_Template, 0, 0, "ng-template", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate.templateRef));
  }
}
function MultiSelectComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, MultiSelectComponent_ng_template_17_0_Template, 1, 3, null, 8)(1, MultiSelectComponent_ng_template_17_div_1_Template, 6, 6, "div", 25);
    ɵɵelementStart(2, "kendo-list", 26, 3);
    ɵɵlistener("pageChange", function MultiSelectComponent_ng_template_17_Template_kendo_list_pageChange_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, MultiSelectComponent_ng_template_17_div_4_Template, 3, 5, "div", 27)(5, MultiSelectComponent_ng_template_17_5_Template, 1, 3, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.allowCustom && ctx_r1.text);
    ɵɵadvance();
    ɵɵproperty("size", ctx_r1.size)("rounded", ctx_r1.rounded)("id", ctx_r1.listBoxId)("optionPrefix", ctx_r1.optionPrefix)("data", ctx_r1.data)("textField", ctx_r1.textField)("valueField", ctx_r1.valueField)("template", ctx_r1.template)("groupTemplate", ctx_r1.groupTemplate)("fixedGroupTemplate", ctx_r1.fixedGroupTemplate)("height", ctx_r1.listHeight)("show", ctx_r1.isOpen)("multipleSelection", true)("virtual", ctx_r1.virtual)("checkboxes", ctx_r1.checkboxes)("isMultiselect", true)("isActionSheetExpanded", ctx_r1.isActionSheetExpanded)("showStickyHeader", ctx_r1.showStickyHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.data.length === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
  }
}
var _c18 = ["header"];
var _c19 = (a0, a1, a2) => ({
  templateRef: a0,
  $implicit: a1,
  column: a2
});
var _c20 = (a0, a1, a2, a3) => ({
  templateRef: a0,
  $implicit: a1,
  dataItem: a2,
  column: a3
});
function MultiColumnComboBoxComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function MultiColumnComboBoxComponent_kendo_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function MultiColumnComboBoxComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 22);
    ɵɵlistener("click", function MultiColumnComboBoxComponent_span_5_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.clearButtonVisiblity);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(5, _c14, ctx_r1.preventEventDefault));
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function MultiColumnComboBoxComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
}
function MultiColumnComboBoxComponent_kendo_separator_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-separator");
  }
}
function MultiColumnComboBoxComponent_span_8_ng_template_1_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_span_8_ng_template_1_Template, 0, 0, "ng-template", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function MultiColumnComboBoxComponent_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MultiColumnComboBoxComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(19);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function MultiColumnComboBoxComponent_kendo_resize_sensor_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 27);
    ɵɵlistener("resize", function MultiColumnComboBoxComponent_kendo_resize_sensor_14_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function MultiColumnComboBoxComponent_ng_template_18_0_ng_template_0_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_ng_template_18_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_18_0_ng_template_0_Template, 0, 0, "ng-template", 37);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef));
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_8_col_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "col");
  }
  if (rf & 2) {
    const column_r7 = ɵɵnextContext().$implicit;
    ɵɵstyleProp("width", column_r7.width, "px");
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_ng_container_8_col_1_Template, 1, 2, "col", 38);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r7.hidden && column_r7.matchesMedia);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r8 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", column_r8.title || column_r8.field, " ");
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_2_ng_template_0_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_2_ng_template_0_Template, 0, 0, "ng-template", 37);
  }
  if (rf & 2) {
    const column_r8 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("templateContext", ɵɵpureFunction3(1, _c19, column_r8.headerTemplate == null ? null : column_r8.headerTemplate.templateRef, column_r8, column_r8));
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 40);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_ng_container_1_Template, 2, 1, "ng-container", 11)(2, MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_2_Template, 1, 5, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r8 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngStyle", column_r8.headerStyle)("ngClass", column_r8.headerClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r8.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r8.headerTemplate);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_ng_container_11_th_1_Template, 3, 4, "th", 39);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r8.hidden && column_r8.matchesMedia);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r9 = ɵɵnextContext(2).$implicit;
    const dataItem_r10 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.textFrom(dataItem_r10, column_r9.field), " ");
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_2_ng_template_0_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_2_ng_template_0_Template, 0, 0, "ng-template", 37);
  }
  if (rf & 2) {
    const column_r9 = ɵɵnextContext(2).$implicit;
    const dataItem_r10 = ɵɵnextContext().$implicit;
    ɵɵproperty("templateContext", ɵɵpureFunction4(1, _c20, column_r9.cellTemplate == null ? null : column_r9.cellTemplate.templateRef, dataItem_r10, dataItem_r10, column_r9));
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 42);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_ng_container_1_Template, 2, 1, "ng-container", 11)(2, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_2_Template, 1, 6, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r9 = ɵɵnextContext().$implicit;
    ɵɵstyleProp("width", column_r9.width, "px");
    ɵɵproperty("ngClass", column_r9.class)("ngStyle", column_r9.style);
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r9.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r9.cellTemplate);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_span_1_Template, 3, 6, "span", 41);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r9.hidden && column_r9.matchesMedia);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_ng_container_0_Template, 2, 1, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.columns);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_div_16_ng_template_1_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_ng_template_18_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function MultiColumnComboBoxComponent_ng_template_18_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 43);
    ɵɵtemplate(1, MultiColumnComboBoxComponent_ng_template_18_div_16_ng_template_1_Template, 0, 0, "ng-template", 44)(2, MultiColumnComboBoxComponent_ng_template_18_div_16_ng_template_2_Template, 2, 1, "ng-template", 45);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate == null ? null : ctx_r1.noDataTemplate.templateRef));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_17_ng_template_6_Template(rf, ctx) {
}
function MultiColumnComboBoxComponent_ng_template_18_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 46)(2, "table", 47)(3, "tfoot", 48)(4, "tr", 34)(5, "td", 49);
    ɵɵtemplate(6, MultiColumnComboBoxComponent_ng_template_18_ng_container_17_ng_template_6_Template, 0, 0, "ng-template", 37);
    ɵɵelementEnd()()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(6);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate.templateRef));
  }
}
function MultiColumnComboBoxComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, MultiColumnComboBoxComponent_ng_template_18_0_Template, 1, 3, null, 11);
    ɵɵelementStart(1, "div", 28)(2, "div", 29, 4)(4, "div", 30, 5)(6, "table", 31)(7, "colgroup");
    ɵɵtemplate(8, MultiColumnComboBoxComponent_ng_template_18_ng_container_8_Template, 2, 1, "ng-container", 32);
    ɵɵelementEnd();
    ɵɵelementStart(9, "thead", 33)(10, "tr", 34);
    ɵɵtemplate(11, MultiColumnComboBoxComponent_ng_template_18_ng_container_11_Template, 2, 1, "ng-container", 32);
    ɵɵelementEnd()()()()();
    ɵɵtemplate(12, MultiColumnComboBoxComponent_ng_template_18_ng_template_12_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementStart(14, "kendo-list", 35, 7);
    ɵɵlistener("pageChange", function MultiColumnComboBoxComponent_ng_template_18_Template_kendo_list_pageChange_14_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange($event));
    })("listResize", function MultiColumnComboBoxComponent_ng_template_18_Template_kendo_list_listResize_14_listener() {
      ɵɵrestoreView(_r6);
      const header_r11 = ɵɵreference(3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHeaderPadding(header_r11));
    })("popupListScroll", function MultiColumnComboBoxComponent_ng_template_18_Template_kendo_list_popupListScroll_14_listener($event) {
      ɵɵrestoreView(_r6);
      const headerWrap_r12 = ɵɵreference(5);
      return ɵɵresetView(headerWrap_r12.scrollLeft = $event.target.scrollLeft);
    });
    ɵɵelementEnd();
    ɵɵtemplate(16, MultiColumnComboBoxComponent_ng_template_18_div_16_Template, 3, 5, "div", 36)(17, MultiColumnComboBoxComponent_ng_template_18_ng_container_17_Template, 7, 3, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowTemplate_r13 = ɵɵreference(13);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.tableSizeClass);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx_r1.columns);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.columns);
    ɵɵadvance(3);
    ɵɵproperty("optionPrefix", ctx_r1.optionPrefix)("data", ctx_r1.data)("textField", ctx_r1.textField)("valueField", ctx_r1.valueField)("template", ɵɵpureFunction1(19, _c12, rowTemplate_r13))("groupTemplate", ctx_r1.groupTemplate)("fixedGroupTemplate", ctx_r1.fixedGroupTemplate)("height", ctx_r1.listHeight)("show", ctx_r1.isOpen)("id", ctx_r1.listBoxId)("virtual", ctx_r1.virtual)("type", "dropdowngrid")("showStickyHeader", ctx_r1.showStickyHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.data.length === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
  }
}
var _c21 = ["treeview"];
var _c22 = ["filterInput"];
var _c23 = (a0) => ({
  blur: a0
});
function DropDownTreeComponent_3_ng_template_0_Template(rf, ctx) {
}
function DropDownTreeComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownTreeComponent_3_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("templateContext", ɵɵpureFunction2(1, _c5, ctx_r1.valueTemplate.templateRef, ctx_r1.dataItem));
  }
}
function DropDownTreeComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.text || ctx_r1.placeholder, " ");
  }
}
function DropDownTreeComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17);
    ɵɵlistener("click", function DropDownTreeComponent_span_5_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.clearButtonVisiblity);
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function DropDownTreeComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
}
function DropDownTreeComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DropDownTreeComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownTreeComponent_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(15);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function DropDownTreeComponent_ng_template_14_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 24)(1, "span", 25)(2, "span", 26);
    ɵɵelement(3, "kendo-icon-wrapper", 27);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 28, 3);
    ɵɵlistener("input", function DropDownTreeComponent_ng_template_14_span_0_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleFilterInputChange($event.target));
    })("keydown.arrowdown", function DropDownTreeComponent_ng_template_14_span_0_Template_input_keydown_arrowdown_4_listener($event) {
      ɵɵrestoreView(_r5);
      const filterInput_r6 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event, filterInput_r6));
    })("keydown.alt.arrowup", function DropDownTreeComponent_ng_template_14_span_0_Template_input_keydown_alt_arrowup_4_listener($event) {
      ɵɵrestoreView(_r5);
      const filterInput_r6 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event, filterInput_r6));
    })("keydown.escape", function DropDownTreeComponent_ng_template_14_span_0_Template_input_keydown_escape_4_listener($event) {
      ɵɵrestoreView(_r5);
      const filterInput_r6 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event, filterInput_r6));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.filterInputClasses);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r1.searchIcon);
    ɵɵadvance();
    ɵɵproperty("filterInput", ctx_r1.filterable && !ctx_r1.touchEnabled)("value", ctx_r1.filter)("kendoEventsOutsideAngular", ɵɵpureFunction1(7, _c23, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵattribute("aria-label", ctx_r1.messageFor("filterInputLabel"));
  }
}
function DropDownTreeComponent_ng_template_14_1_ng_template_0_Template(rf, ctx) {
}
function DropDownTreeComponent_ng_template_14_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownTreeComponent_ng_template_14_1_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef));
  }
}
function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-treeview", 29, 4);
    ɵɵtwoWayListener("selectedKeysChange", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_selectedKeysChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.selectedKeys, $event) || (ctx_r1.selectedKeys = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("focusout", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_focusout_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleBlur($event));
    })("keydown", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_keydown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event));
    })("selectionChange", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_selectionChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelectionChange($event));
    })("expand", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_expand_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.nodeExpand.emit($event));
    })("collapse", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_collapse_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.nodeCollapse.emit($event));
    })("childrenLoaded", function DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template_kendo_treeview_childrenLoaded_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChildrenLoaded());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("max-height", ctx_r1.listHeight, "px");
    ɵɵproperty("size", ctx_r1.size)("nodes", ctx_r1.data)("animate", false);
    ɵɵtwoWayProperty("selectedKeys", ctx_r1.selectedKeys);
    ɵɵproperty("selectBy", ctx_r1.selectBy)("textField", ctx_r1.textField)("children", ctx_r1.children)("hasChildren", ctx_r1.hasChildren)("loadOnDemand", ctx_r1.loadOnDemand)("isExpanded", ctx_r1.isNodeExpanded)("isDisabled", ctx_r1.itemDisabled)("nodeTemplate", ctx_r1.nodeTemplate)("filter", ctx_r1.filter)("isVisible", ctx_r1.isNodeVisible);
    ɵɵattribute("id", ctx_r1.treeViewId);
  }
}
function DropDownTreeComponent_ng_template_14_3_ng_template_0_Template(rf, ctx) {
}
function DropDownTreeComponent_ng_template_14_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownTreeComponent_ng_template_14_3_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef));
  }
}
function DropDownTreeComponent_ng_template_14_div_4_ng_template_1_Template(rf, ctx) {
}
function DropDownTreeComponent_ng_template_14_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function DropDownTreeComponent_ng_template_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵtemplate(1, DropDownTreeComponent_ng_template_14_div_4_ng_template_1_Template, 0, 0, "ng-template", 31)(2, DropDownTreeComponent_ng_template_14_div_4_ng_template_2_Template, 2, 1, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate == null ? null : ctx_r1.noDataTemplate.templateRef));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function DropDownTreeComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropDownTreeComponent_ng_template_14_span_0_Template, 6, 9, "span", 21)(1, DropDownTreeComponent_ng_template_14_1_Template, 1, 3, null, 8)(2, DropDownTreeComponent_ng_template_14_kendo_treeview_2_Template, 2, 17, "kendo-treeview", 22)(3, DropDownTreeComponent_ng_template_14_3_Template, 1, 3, null, 8)(4, DropDownTreeComponent_ng_template_14_div_4_Template, 3, 5, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.filterable && !ctx_r1.isActionSheetExpanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.data.length !== 0 && !ctx_r1.allNodesHidden);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.data.length === 0 || ctx_r1.allNodesHidden);
  }
}
function DropDownTreeComponent_kendo_resize_sensor_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 32);
    ɵɵlistener("resize", function DropDownTreeComponent_kendo_resize_sensor_16_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
var _c24 = ["checkAllInput"];
var _c25 = (a0) => ({
  focusout: a0
});
function MultiSelectTreeComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.placeholder, " ");
  }
}
function MultiSelectTreeComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function MultiSelectTreeComponent_span_4_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearAll($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("title", ctx_r1.messageFor("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function MultiSelectTreeComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
}
function MultiSelectTreeComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MultiSelectTreeComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectTreeComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const sharedPopupActionSheetTemplate_r4 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", sharedPopupActionSheetTemplate_r4);
  }
}
function MultiSelectTreeComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "span", 25)(2, "span", 26);
    ɵɵelement(3, "kendo-icon-wrapper", 27);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 28, 4);
    ɵɵlistener("input", function MultiSelectTreeComponent_ng_template_11_div_0_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleFilterInputChange($event.target));
    })("keydown", function MultiSelectTreeComponent_ng_template_11_div_0_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r6);
      const filterInput_r7 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event, filterInput_r7));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.filterInputClasses);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r1.searchIcon);
    ɵɵadvance();
    ɵɵproperty("filterInput", ctx_r1.filterable && !ctx_r1.touchEnabled)("value", ctx_r1.filter)("kendoEventsOutsideAngular", ɵɵpureFunction1(7, _c23, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵattribute("aria-label", ctx_r1.messageFor("filterInputLabel"));
  }
}
function MultiSelectTreeComponent_ng_template_11_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelectTreeComponent_ng_template_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectTreeComponent_ng_template_11_1_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef));
  }
}
function MultiSelectTreeComponent_ng_template_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30)(1, "span", 31)(2, "input", 32, 5);
    ɵɵlistener("checkedItemsChange", function MultiSelectTreeComponent_ng_template_11_div_2_Template_input_checkedItemsChange_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleCheckedItemsChange($event));
    })("keydown", function MultiSelectTreeComponent_ng_template_11_div_2_Template_input_keydown_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleKeydown($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "span", 33);
    ɵɵlistener("click", function MultiSelectTreeComponent_ng_template_11_div_2_Template_span_click_4_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleCheckAll());
    })("mousedown", function MultiSelectTreeComponent_ng_template_11_div_2_Template_span_mousedown_4_listener($event) {
      ɵɵrestoreView(_r8);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const treeview_r9 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checkAll", !ctx_r1.filterable && !ctx_r1.touchEnabled)("ngClass", ctx_r1.checkAllCheckboxClasses)("treeview", treeview_r9)("checkedItems", ctx_r1.checkedItems)("valueField", ctx_r1.valueField)("lastAction", ctx_r1.lastAction)("kendoEventsOutsideAngular", ɵɵpureFunction1(9, _c23, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.messageFor("checkAllText"), " ");
  }
}
function MultiSelectTreeComponent_ng_template_11_5_ng_template_0_Template(rf, ctx) {
}
function MultiSelectTreeComponent_ng_template_11_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultiSelectTreeComponent_ng_template_11_5_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("templateContext", ɵɵpureFunction1(1, _c12, ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef));
  }
}
function MultiSelectTreeComponent_ng_template_11_div_6_ng_template_1_Template(rf, ctx) {
}
function MultiSelectTreeComponent_ng_template_11_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.messageFor("noDataText"));
  }
}
function MultiSelectTreeComponent_ng_template_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtemplate(1, MultiSelectTreeComponent_ng_template_11_div_6_ng_template_1_Template, 0, 0, "ng-template", 35)(2, MultiSelectTreeComponent_ng_template_11_div_6_ng_template_2_Template, 2, 1, "ng-template", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("templateContext", ɵɵpureFunction1(3, _c12, ctx_r1.noDataTemplate == null ? null : ctx_r1.noDataTemplate.templateRef));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noDataTemplate);
  }
}
function MultiSelectTreeComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵtemplate(0, MultiSelectTreeComponent_ng_template_11_div_0_Template, 6, 9, "div", 19)(1, MultiSelectTreeComponent_ng_template_11_1_Template, 1, 3, null, 20)(2, MultiSelectTreeComponent_ng_template_11_div_2_Template, 6, 11, "div", 21);
    ɵɵelementStart(3, "kendo-treeview", 22, 3);
    ɵɵlistener("keydown", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_keydown_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleKeydown($event));
    })("nodeClick", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_nodeClick_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleNodeClick($event));
    })("expand", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_expand_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeExpand.emit($event));
    })("collapse", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_collapse_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeCollapse.emit($event));
    })("checkedItemsChange", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_checkedItemsChange_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleCheckedItemsChange($event));
    })("childrenLoaded", function MultiSelectTreeComponent_ng_template_11_Template_kendo_treeview_childrenLoaded_3_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChildrenLoaded());
    });
    ɵɵelementEnd();
    ɵɵtemplate(5, MultiSelectTreeComponent_ng_template_11_5_Template, 1, 3, null, 20)(6, MultiSelectTreeComponent_ng_template_11_div_6_Template, 3, 5, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.filterable && !ctx_r1.isActionSheetExpanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkAll);
    ɵɵadvance();
    ɵɵstyleProp("max-height", ctx_r1.listHeight, "px");
    ɵɵproperty("size", ctx_r1.size)("nodes", ctx_r1.data)("animate", false)("isHeterogeneous", ctx_r1.isHeterogeneous)("checkable", ctx_r1.checkableSettings)("checkedItems", ctx_r1.checkedItems)("valueField", ctx_r1.valueField)("textField", ctx_r1.textField)("children", ctx_r1.children)("hasChildren", ctx_r1.hasChildren)("isExpanded", ctx_r1.isNodeExpanded)("isDisabled", ctx_r1.itemDisabled)("nodeTemplate", ctx_r1.nodeTemplate)("loadOnDemand", ctx_r1.loadOnDemand)("filter", ctx_r1.filter)("isVisible", ctx_r1.isNodeVisible)("kendoEventsOutsideAngular", ɵɵpureFunction1(26, _c25, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵattribute("id", ctx_r1.treeViewId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.data || (ctx_r1.data == null ? null : ctx_r1.data.length) === 0 || ctx_r1.allNodesHidden);
  }
}
function MultiSelectTreeComponent_kendo_resize_sensor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 37);
    ɵɵlistener("resize", function MultiSelectTreeComponent_kendo_resize_sensor_13_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-dropdowns",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372396,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var isPresent = (value) => value !== null && value !== void 0;
var isNumber = (value) => !isNaN(value);
var guid2 = () => {
  let id = "";
  let i;
  let random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }
  return id;
};
var combineStr = (begin, end) => {
  return begin.concat(end.substr(end.toLowerCase().indexOf(begin.toLowerCase()) + begin.length));
};
var isArray = (value) => Array.isArray(value);
var isObject = (value) => isPresent(value) && typeof value === "object";
var isEmptyString = (value) => typeof value === "string" && value.length === 0;
var resolveValuesInArray = (values, data = [], valueField) => values.map((value) => {
  return data.find((item) => getter2(item, valueField) === value);
}).filter((value) => value !== void 0);
var validateComplexValues = (values, valueField) => isArray(values) && values.filter((item) => {
  return isObject(item) && getter2(item, valueField) !== void 0;
});
var resolveAllValues = (value, data, valueField) => {
  const customValues = validateComplexValues(value, valueField) || [];
  const resolvedValues = resolveValuesInArray(value, data, valueField) || [];
  return resolvedValues.concat(customValues);
};
var isObjectArray = (values) => {
  return isArray(values) && values.every((item) => isObject(item));
};
var selectedIndices = (values, data, valueField) => {
  const extractedValues = data.map((item) => {
    return isPresent(item) && isPresent(getter2(item, valueField)) ? getter2(item, valueField) : item;
  });
  return values.reduce((arr, item) => {
    const value = isPresent(item) && isPresent(getter2(item, valueField)) ? getter2(item, valueField) : item;
    const index = extractedValues.indexOf(value);
    if (index !== -1) {
      arr.push(index);
    }
    return arr;
  }, []);
};
var getter2 = (dataItem, field) => {
  if (!isPresent(dataItem)) {
    return null;
  }
  if (!isPresent(field) || !isObject(dataItem)) {
    return dataItem;
  }
  const valueFrom2 = getter(field);
  return valueFrom2(dataItem);
};
var sameCharsOnly = (word, character) => {
  for (let idx = 0; idx < word.length; idx++) {
    if (word.charAt(idx) !== character) {
      return false;
    }
  }
  return true;
};
var shuffleData = (data, splitIndex, defaultItem) => {
  let result = data;
  if (defaultItem) {
    result = [defaultItem].concat(result);
  }
  return result.slice(splitIndex).concat(result.slice(0, splitIndex));
};
var matchText = (text, word, ignoreCase) => {
  if (!isPresent(text)) {
    return false;
  }
  let temp = String(text);
  if (ignoreCase) {
    temp = temp.toLowerCase();
  }
  return temp.indexOf(word) === 0;
};
var hasProps = (obj, props) => {
  if (!isPresent(obj)) {
    return false;
  }
  return props.every((prop) => obj.hasOwnProperty(prop));
};
var isUntouched = (element) => element.className.includes("ng-untouched");
var noop = (_) => {
};
var matches = (element, selector) => {
  const matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  if (!matcher) {
    return false;
  }
  return matcher.call(element, selector);
};
var closest2 = (element, selector) => {
  let parent = element;
  while (parent !== null && parent.nodeType === 1) {
    if (matches(parent, selector)) {
      return parent;
    }
    parent = parent.parentElement || parent.parentNode;
  }
  return null;
};
var parseNumber = (num, defaultValue = 0) => {
  const normalizedValue = Number(num);
  return isNaN(normalizedValue) ? defaultValue : normalizedValue;
};
var inDropDown = (host, target, popupRef) => {
  return host.nativeElement.contains(target) || popupRef && popupRef.popupElement.contains(target);
};
var getHierarchicalItemLevel = (index) => {
  return (index || "").split("_").length - 1;
};
var fetchDescendentNodes = (lookup, filterExpression) => {
  if (!isPresent(lookup) || lookup.children.length === 0) {
    return [];
  }
  let descendants = lookup.children;
  if (isPresent(filterExpression)) {
    descendants = descendants.filter((descendent) => filterExpression(descendent.item));
  }
  descendants.forEach((child) => descendants = descendants.concat(fetchDescendentNodes(child, filterExpression)));
  return descendants;
};
var valueFrom = ({
  dataItem,
  index,
  level
}, valueField) => {
  const fields = Array.isArray(valueField) ? valueField : [valueField];
  const valueLevel = isPresent(level) ? level : getHierarchicalItemLevel(index);
  const normalizedLevel = Math.min(valueLevel, fields.length - 1);
  const field = fields[normalizedLevel];
  return getter(field)(dataItem);
};
var getSizeClass = (component, size) => {
  const SIZE_CLASSES = {
    "small": `k-${component}-sm`,
    "medium": `k-${component}-md`,
    "large": `k-${component}-lg`
  };
  return SIZE_CLASSES[size];
};
var getRoundedClass = (rounded) => {
  const ROUNDED_CLASSES = {
    "small": "k-rounded-sm",
    "medium": "k-rounded-md",
    "large": "k-rounded-lg",
    "full": "k-rounded-full"
  };
  return ROUNDED_CLASSES[rounded];
};
var getFillModeClass = (component, fillMode) => {
  const FILLMODE_CLASSES = {
    "solid": `k-${component}-solid`,
    "flat": `k-${component}-flat`,
    "outline": `k-${component}-outline`
  };
  return FILLMODE_CLASSES[fillMode];
};
var filterAndMap = (arr, predicate, mapper) => arr.reduce((acc, curr) => predicate(curr) ? [...acc, mapper(curr)] : acc, []);
var isJapanese = (input) => {
  const japaneseRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
  return japaneseRegex.test(input);
};
var isLetter = (text) => {
  const isLetter2 = /[a-zA-Z]/;
  return isLetter2.test(text) && text?.length === 1;
};
var getSearchableItems = (treeViewId, element) => {
  const nodeSeletor = `kendo-treeview[id='${treeViewId}'] li.k-treeview-item`;
  const liElements = Array.from(element.querySelectorAll(nodeSeletor));
  return liElements.map((liElement) => {
    return {
      text: liElement.innerText,
      index: liElement.getAttribute("data-treeindex")
    };
  });
};
var windowSize = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      return "large";
    } else if (window.innerWidth > 500) {
      return "medium";
    } else {
      return "small";
    }
  }
};
var isTruthy = (value) => !!value;
var updateActionSheetAdaptiveAppearance = (actionSheet, windowSize2, renderer) => {
  const element = actionSheet["element"].nativeElement.querySelector(".k-actionsheet");
  const animationContainer = actionSheet["element"].nativeElement.querySelector(".k-child-animation-container");
  if (windowSize2 === "medium") {
    renderer.removeClass(element, "k-actionsheet-fullscreen");
    renderer.addClass(element, "k-actionsheet-bottom");
    renderer.addClass(element, "k-adaptive-actionsheet");
    renderer.removeStyle(animationContainer, "top");
    renderer.removeStyle(animationContainer, "height");
    renderer.setStyle(animationContainer, "bottom", "0px");
  } else if (windowSize2 === "small") {
    renderer.removeClass(element, "k-actionsheet-bottom");
    renderer.addClass(element, "k-actionsheet-fullscreen");
    renderer.addClass(element, "k-adaptive-actionsheet");
    renderer.setStyle(animationContainer, "bottom", "0px");
    renderer.setStyle(animationContainer, "height", "100%");
  }
};
var setListBoxAriaLabelledBy = (optionsList, element, renderer) => {
  const listBox = optionsList.wrapper.nativeElement.querySelector("kendo-list ul");
  const ariaLabel = element.nativeElement.getAttribute("aria-labelledby") || element.nativeElement.getAttribute("data-kendo-label-id");
  if (ariaLabel) {
    renderer.setAttribute(listBox, "aria-labelledby", ariaLabel);
  }
};
var setActionSheetTitle = (element, actionSheetTitle) => {
  const ariaLabel = element.nativeElement.getAttribute("aria-labelledby") || element.nativeElement.getAttribute("data-kendo-label-id");
  if (!actionSheetTitle && ariaLabel) {
    return document.getElementById(ariaLabel).innerText;
  }
  return actionSheetTitle;
};
var animationDuration = 300;
var SearchBarComponent = class {
  constructor(localization, renderer, injector, input, ngZone) {
    this.localization = localization;
    this.injector = injector;
    this.input = input;
    this.ngZone = ngZone;
    this.ariaExpanded = null;
    this.role = "combobox";
    this.valueChange = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onClick = new EventEmitter();
    this.onNavigate = new EventEmitter();
    this._userInput = "";
    this._previousValue = "";
    this._placeholder = "";
    this._isSuggestable = false;
    this._isFilterable = false;
    this.subs = new Subscription();
    this.parsedAttributes = {};
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.renderer = renderer;
    this.renderer.addClass(this.input.nativeElement, "k-input-inner");
    this.renderer.setAttribute(this.input.nativeElement, "aria-haspopup", "listbox");
    this.renderer.setAttribute(this.input.nativeElement, "autocomplete", "off");
  }
  set readonly(readonly) {
    this._readonly = readonly;
    if (this._readonly) {
      this.renderer.setAttribute(this.input.nativeElement, "readonly", "");
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, "readonly");
    }
  }
  get readonly() {
    return this._readonly;
  }
  set disabled(disabled) {
    this._disabled = disabled;
    if (this._disabled) {
      this.renderer.setAttribute(this.input.nativeElement, "disabled", "");
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, "disabled");
    }
  }
  get disabled() {
    return this._disabled;
  }
  set isRequired(isRequired) {
    this._isRequired = isRequired;
    if (this._isRequired) {
      this.renderer.setAttribute(this.input.nativeElement, "required", "");
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, "required");
    }
  }
  get isRequired() {
    return this._isRequired;
  }
  set isSuggestable(isSuggestable) {
    this._isSuggestable = isSuggestable;
    this.setAriaAutocomplete();
  }
  get isSuggestable() {
    return this._isSuggestable;
  }
  set isFilterable(isFilterable) {
    this._isFilterable = isFilterable;
    this.setAriaAutocomplete();
  }
  get isFilterable() {
    return this._isFilterable;
  }
  get userInput() {
    return this._userInput;
  }
  set userInput(userInput) {
    this._userInput = userInput || "";
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * @hidden
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  get attrAriaInvalid() {
    return this.formControl?.invalid;
  }
  set placeholder(text) {
    this._placeholder = text || "";
    this.setInputSize();
  }
  get placeholder() {
    return this._placeholder;
  }
  get dir() {
    return this.direction;
  }
  get value() {
    return this.input.nativeElement.value;
  }
  get defaultAttributes() {
    return {
      id: this.id,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      placeholder: this.placeholder,
      tabIndex: this.tabIndex,
      tabindex: this.tabIndex,
      dir: this.direction,
      required: this.isRequired ? "" : null,
      "aria-haspopup": "listbox",
      "aria-expanded": this.ariaExpanded,
      "aria-controls": this.ariaControls,
      "aria-activedescendant": this.activeDescendant,
      "aria-busy": this.isLoading,
      "aria-invalid": this.formControl?.invalid
    };
  }
  get mutableAttributes() {
    return {
      autocomplete: "off",
      role: this.role,
      "aria-describedby": this.tagListId
    };
  }
  ngOnInit() {
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    let previousUserInput;
    if (this.input && (changes.userInput || changes.suggestedText)) {
      if (changes.userInput && changes.userInput.previousValue) {
        if (this._previousValue === changes.userInput.previousValue) {
          previousUserInput = this._previousValue;
        } else {
          previousUserInput = changes.userInput.currentValue || "";
        }
      } else {
        previousUserInput = this._previousValue;
      }
      const caretStart = this.input.nativeElement.selectionStart;
      const caretAtEnd = previousUserInput.length === caretStart;
      this.writeInputValue(this.suggestedText ? combineStr(this.userInput, this.suggestedText) : this.userInput);
      if (this.suggestedText) {
        this.setInputSelection(this.userInput.length, this.suggestedText.length);
      } else if (isSafari(navigator.userAgent) && !caretAtEnd) {
        this.setInputSelection(caretStart, this.userInput.length);
      } else if (caretAtEnd) {
        this.setInputSelection(this.userInput.length, this.userInput.length);
      } else {
        this.setInputSelection(caretStart, caretStart);
      }
      this._previousValue = this.userInput;
    }
  }
  ngAfterViewInit() {
    this.subs.add(this.input.nativeElement.addEventListener("input", (event) => this.handleInput(event)));
    this.subs.add(this.input.nativeElement.addEventListener("focus", (event) => this.handleFocus(event)));
    this.subs.add(this.input.nativeElement.addEventListener("blur", (event) => this.handleBlur(event)));
    this.subs.add(this.input.nativeElement.addEventListener("keydown", (event) => this.handleKeydown(event)));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  writeInputValue(text) {
    if (isDocumentAvailable()) {
      this.renderer.setProperty(this.input.nativeElement, "value", text);
    }
  }
  setInputSelection(start, end) {
    if (isDocumentAvailable() && this.input.nativeElement === document.activeElement) {
      try {
        this.input.nativeElement.setSelectionRange(start, end);
      } catch (e) {
      }
    }
  }
  setAriaAutocomplete() {
    if (this.isFilterable) {
      this.renderer.setAttribute(this.input.nativeElement, "aria-autocomplete", "list");
    }
    if (this.isSuggestable) {
      this.renderer.setAttribute(this.input.nativeElement, "aria-autocomplete", "inline");
    }
    if (this.isFilterable && this.isSuggestable) {
      this.renderer.setAttribute(this.input.nativeElement, "aria-autocomplete", "both");
    }
    if (!this.isFilterable && !this.isSuggestable) {
      this.renderer.removeAttribute(this.input.nativeElement, "aria-autocomplete");
    }
  }
  handleInput(event) {
    const target = event.target;
    const isBrowserSafari = isSafari(navigator.userAgent);
    const value = isBrowserSafari && isJapanese(target.value) ? event.data : target.value;
    if (value !== this.userInput) {
      this._previousValue = value;
      this.valueChange.emit(value);
    }
  }
  handleFocus(event) {
    this.onFocus.emit(event);
  }
  handleBlur(event) {
    this.onBlur.emit(event);
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    const keys = [Keys.ArrowUp, Keys.ArrowDown, Keys.ArrowLeft, Keys.ArrowRight, Keys.Enter, Keys.Escape, Keys.Delete, Keys.Backspace, Keys.Home, Keys.End, Keys.PageDown, Keys.PageUp];
    if (keys.indexOf(keyCode) > -1) {
      this.onNavigate.emit(event);
    }
  }
  focus() {
    if (isDocumentAvailable()) {
      this.input.nativeElement.focus();
    }
  }
  blur() {
    if (isDocumentAvailable()) {
      this.input.nativeElement.blur();
    }
  }
  setInputSize() {
    const lengthOf = (x) => x ? x.length : 0;
    const input = this.input.nativeElement;
    const placeholderLength = lengthOf(this.placeholder);
    const textLength = lengthOf(this.value);
    const size = Math.max(placeholderLength, textLength, 1);
    this.renderer.setAttribute(input, "size", size.toString());
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.input.nativeElement, this.ngZone);
  }
};
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SearchBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
SearchBarComponent.ɵcmp = ɵɵdefineComponent({
  type: SearchBarComponent,
  selectors: [["input", "kendoSearchbar", ""]],
  hostVars: 10,
  hostBindings: function SearchBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("aria-activedescendant", ctx.activeDescendant)("tabindex", ctx.tabIndex)("aria-busy", ctx.isLoading)("aria-controls", ctx.ariaControls)("aria-expanded", ctx.ariaExpanded)("aria-invalid", ctx.attrAriaInvalid)("placeholder", ctx.placeholder)("role", ctx.role)("dir", ctx.dir);
    }
  },
  inputs: {
    tagListId: "tagListId",
    readonly: "readonly",
    disabled: "disabled",
    isRequired: "isRequired",
    isSuggestable: "isSuggestable",
    isFilterable: "isFilterable",
    userInput: "userInput",
    suggestedText: "suggestedText",
    inputAttributes: "inputAttributes",
    id: "id",
    activeDescendant: "activeDescendant",
    tabIndex: "tabIndex",
    isLoading: "isLoading",
    ariaControls: "ariaControls",
    ariaExpanded: "ariaExpanded",
    placeholder: "placeholder"
  },
  outputs: {
    valueChange: "valueChange",
    onBlur: "onBlur",
    onFocus: "onFocus",
    onClick: "onClick",
    onNavigate: "onNavigate"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 0,
  vars: 0,
  template: function SearchBarComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{
      selector: "input[kendoSearchbar]",
      template: ``,
      standalone: true,
      imports: [EventsOutsideAngularDirective]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: Injector
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    tagListId: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    isRequired: [{
      type: Input
    }],
    isSuggestable: [{
      type: Input
    }],
    isFilterable: [{
      type: Input
    }],
    userInput: [{
      type: Input
    }],
    suggestedText: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }, {
      type: Input
    }],
    activeDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }, {
      type: Input
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }, {
      type: Input
    }],
    isLoading: [{
      type: HostBinding,
      args: ["attr.aria-busy"]
    }, {
      type: Input
    }],
    ariaControls: [{
      type: HostBinding,
      args: ["attr.aria-controls"]
    }, {
      type: Input
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }, {
      type: Input
    }],
    attrAriaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    placeholder: [{
      type: HostBinding,
      args: ["attr.placeholder"]
    }, {
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    valueChange: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onNavigate: [{
      type: Output
    }]
  });
})();
var ItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ItemTemplateDirective.ɵfac = function ItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ItemTemplateDirective,
  selectors: [["", "kendoDropDownListItemTemplate", ""], ["", "kendoComboBoxItemTemplate", ""], ["", "kendoAutoCompleteItemTemplate", ""], ["", "kendoMultiSelectItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListItemTemplate],[kendoComboBoxItemTemplate],[kendoAutoCompleteItemTemplate],[kendoMultiSelectItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var HeaderTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
HeaderTemplateDirective.ɵfac = function HeaderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
HeaderTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: HeaderTemplateDirective,
  selectors: [["", "kendoDropDownListHeaderTemplate", ""], ["", "kendoComboBoxHeaderTemplate", ""], ["", "kendoDropDownTreeHeaderTemplate", ""], ["", "kendoMultiColumnComboBoxHeaderTemplate", ""], ["", "kendoAutoCompleteHeaderTemplate", ""], ["", "kendoMultiSelectHeaderTemplate", ""], ["", "kendoMultiSelectTreeHeaderTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListHeaderTemplate],[kendoComboBoxHeaderTemplate],[kendoDropDownTreeHeaderTemplate],[kendoMultiColumnComboBoxHeaderTemplate],[kendoAutoCompleteHeaderTemplate],[kendoMultiSelectHeaderTemplate],[kendoMultiSelectTreeHeaderTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FooterTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
FooterTemplateDirective.ɵfac = function FooterTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
FooterTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: FooterTemplateDirective,
  selectors: [["", "kendoDropDownListFooterTemplate", ""], ["", "kendoComboBoxFooterTemplate", ""], ["", "kendoDropDownTreeFooterTemplate", ""], ["", "kendoMultiColumnComboBoxFooterTemplate", ""], ["", "kendoAutoCompleteFooterTemplate", ""], ["", "kendoMultiSelectFooterTemplate", ""], ["", "kendoMultiSelectTreeFooterTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListFooterTemplate],[kendoComboBoxFooterTemplate],[kendoDropDownTreeFooterTemplate],[kendoMultiColumnComboBoxFooterTemplate],[kendoAutoCompleteFooterTemplate],[kendoMultiSelectFooterTemplate],[kendoMultiSelectTreeFooterTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var GroupTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
GroupTemplateDirective.ɵfac = function GroupTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GroupTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
GroupTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: GroupTemplateDirective,
  selectors: [["", "kendoDropDownListGroupTemplate", ""], ["", "kendoComboBoxGroupTemplate", ""], ["", "kendoMultiColumnComboBoxGroupTemplate", ""], ["", "kendoAutoCompleteGroupTemplate", ""], ["", "kendoMultiSelectGroupTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListGroupTemplate],[kendoComboBoxGroupTemplate],[kendoMultiColumnComboBoxGroupTemplate],[kendoAutoCompleteGroupTemplate],[kendoMultiSelectGroupTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FixedGroupTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
FixedGroupTemplateDirective.ɵfac = function FixedGroupTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FixedGroupTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
FixedGroupTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: FixedGroupTemplateDirective,
  selectors: [["", "kendoDropDownListFixedGroupTemplate", ""], ["", "kendoComboBoxFixedGroupTemplate", ""], ["", "kendoMultiColumnComboBoxFixedGroupTemplate", ""], ["", "kendoAutoCompleteFixedGroupTemplate", ""], ["", "kendoMultiSelectFixedGroupTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FixedGroupTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListFixedGroupTemplate],[kendoComboBoxFixedGroupTemplate],[kendoMultiColumnComboBoxFixedGroupTemplate],[kendoAutoCompleteFixedGroupTemplate],[kendoMultiSelectFixedGroupTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var DataService = class {
  constructor() {
    this.grouped = false;
    this.groupIndices = [];
  }
  set data(data) {
    this._data = data;
    this.grouped = this.isGrouped(data);
    if (this.grouped) {
      this.groupIndices = this.getGroupIndices(data);
      this._flatData = this.flatten(data);
    }
  }
  get data() {
    if (this.grouped) {
      return this._flatData;
    }
    return this._data;
  }
  /**
   * @hidden
   * Used to get the actual items count, i.e. excluding the header items in case of grouping.
   */
  get itemsCount() {
    if (!isPresent(this.data) || this.data.length === 0) {
      return 0;
    }
    const items = this.grouped ? this._flatData.filter((item) => !item.header) : this.data;
    return items.length;
  }
  /**
   * @hidden
   * Used to determine if the component received grouped data.
   */
  isGrouped(data) {
    return isPresent(data) && data.length !== 0 && isPresent(data[0]) && hasProps(data[0], ["aggregates", "field", "items", "value"]);
  }
  /**
   * @hidden
   * Used to calculate the last item index of each group.
   */
  getGroupIndices(data) {
    const groupIndices = [];
    for (let i = 0; i <= data.length - 1; i++) {
      groupIndices[i] = (groupIndices[i - 1] || 0) + data[i].items.length;
    }
    return groupIndices;
  }
  /**
   * @hidden
   * Used to get a flat array containing all items matching certain criteria.
   */
  filter(predicate) {
    let result = [];
    if (this.isGrouped(this.data)) {
      for (let i = 0; i <= this.groupIndices.length - 1; i++) {
        const matches2 = this.data[i].items.filter(predicate);
        if (matches2) {
          result = result.concat(matches2);
        }
      }
    } else {
      result = this.data.filter(predicate);
    }
    return result;
  }
  /**
   * @hidden
   * Used to get the index of a given data item.
   */
  indexOf(item, startFrom = 0) {
    let predicate = (element) => {
      return element === item;
    };
    if (this.grouped) {
      predicate = (element) => {
        return element.value === item;
      };
    }
    return this.findIndex(predicate, startFrom);
  }
  /**
   * @hidden
   * Used to get the index of a data item based on an expression.
   */
  findIndex(predicate, startFrom = 0) {
    let index = -1;
    if (this.grouped) {
      const data = this._flatData.filter((item) => !item.header && item.offsetIndex >= startFrom);
      index = data.findIndex(predicate);
      index = data[index] ? data[index].offsetIndex : -1;
    } else {
      const data = this.data.slice(startFrom);
      const itemIndex = data.findIndex(predicate);
      index = itemIndex !== -1 ? itemIndex + startFrom : -1;
    }
    return index;
  }
  /**
   * @hidden
   * Used to get the closest group header prior to an item index.
   */
  closestGroup(index) {
    for (let i = index; i >= 0; i--) {
      if (this._flatData[i].header) {
        return this._flatData[i];
      }
    }
  }
  /**
   * @hidden
   * Used to get the first item matching the criteria.
   */
  find(predicate) {
    const index = this.findIndex(predicate);
    return this.itemAt(index);
  }
  /**
   * @hidden
   * Used to get the true index in a flattened data array.
   */
  flatIndex(index) {
    if (this.itemsCount === 0) {
      return -1;
    }
    if (this.grouped) {
      const match = this._flatData.find((item) => !item.header && item.offsetIndex === index);
      if (match) {
        return match.index;
      }
    } else {
      return index;
    }
    return -1;
  }
  /**
   * @hidden
   * Used to get the item at the provided index.
   */
  itemAt(index) {
    let dataItem;
    if (this.itemsCount === 0) {
      return dataItem;
    }
    if (this.grouped) {
      const match = this._flatData.find((item) => !item.header && item.offsetIndex === index);
      if (match) {
        dataItem = match.value;
      }
    } else {
      dataItem = this.data[index];
    }
    return dataItem;
  }
  /**
   * @hidden
   * Used to get the group at the provided index.
   */
  groupAt(index) {
    if (this.itemsCount === 0 || !this.isGrouped) {
      return;
    }
    return this._flatData.find((item) => item.header && item.index === index);
  }
  /**
   * @hidden
   * Used to get all group items indices.
   */
  groupItemsIndices() {
    if (this.isGrouped) {
      return filterAndMap(this.data, (item) => item.header, (mappedItem) => mappedItem.index);
    }
    return [];
  }
  /**
   * @hidden
   * Used to get the field by which the data is grouped.
   */
  groupField() {
    if (this.itemsCount === 0 || !this.isGrouped) {
      return null;
    }
    return this._data[0].field;
  }
  /**
   * @hidden
   * Used to get the group to which a dataItem belongs.
   */
  itemGroup(item) {
    if (!item || this.itemsCount === 0 || !this.isGrouped) {
      return;
    }
    const fieldName = this.groupField();
    if (fieldName) {
      return getter2(item, fieldName);
    }
  }
  flatten(data, group = void 0, offset = 0, groupIndex = 0) {
    let flat = [];
    if (isPresent(group)) {
      flat.push({
        header: true,
        index: groupIndex + offset,
        offsetIndex: groupIndex,
        value: group
      });
    }
    for (let i = 0; i < data.length; i++) {
      let result = [];
      if (data[i].items) {
        result = this.flatten(data[i].items, data[i].value, offset, i);
        offset = offset + data[i].items.length;
      } else {
        result.push({
          header: false,
          index: groupIndex + offset + i + 1,
          offsetIndex: offset + i,
          value: data[i]
        });
      }
      flat = flat.concat(result);
    }
    return flat;
  }
};
DataService.ɵfac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DataService)();
};
DataService.ɵprov = ɵɵdefineInjectable({
  token: DataService,
  factory: DataService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable
  }], null, null);
})();
var DisabledItemsService = class {
  constructor(dataService) {
    this.dataService = dataService;
    this.itemDisabled = null;
  }
  isIndexDisabled(index) {
    if (this.itemDisabled) {
      const item = this.dataService.itemAt(index);
      if (isPresent(item)) {
        return this.itemDisabled({
          dataItem: item,
          index
        });
      } else if (isPresent(this.defaultItem)) {
        return this.itemDisabled({
          dataItem: this.defaultItem,
          index: -1
        });
      }
    }
  }
  isItemDisabled(item) {
    if (this.itemDisabled) {
      const index = this.dataService.indexOf(item);
      if (index !== -1) {
        return this.itemDisabled({
          dataItem: item,
          index
        });
      } else if (isPresent(this.defaultItem)) {
        return this.itemDisabled({
          dataItem: this.defaultItem,
          index: -1
        });
      }
    }
  }
};
DisabledItemsService.ɵfac = function DisabledItemsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DisabledItemsService)(ɵɵinject(DataService));
};
DisabledItemsService.ɵprov = ɵɵdefineInjectable({
  token: DisabledItemsService,
  factory: DisabledItemsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisabledItemsService, [{
    type: Injectable
  }], function() {
    return [{
      type: DataService
    }];
  }, null);
})();
var SelectionService = class {
  constructor(disabledItemsService) {
    this.disabledItemsService = disabledItemsService;
    this.onSelect = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.total = 0;
    this.selectedIndices = [];
    this.indicesToBeRemoved = [];
    this.indicesToBeAdded = [];
  }
  getTotal() {
    return this.total;
  }
  isSelected(index) {
    return isPresent(this.selectedIndices.find((current) => current === index));
  }
  isFocused(index) {
    return index === this.focused;
  }
  focus(index) {
    if (this.isFocused(index)) {
      return;
    }
    this.focused = index;
    this.onFocus.emit(index);
  }
  select(index) {
    if (this.isSelected(index)) {
      return;
    }
    this.selectedIndices = [index];
    this.focused = index;
    this.onSelect.emit({
      indices: [index],
      newSelection: isPresent(index)
    });
  }
  add(index, preventClosingPopup) {
    if (this.isSelected(index)) {
      return;
    }
    this.selectedIndices.push(index);
    this.focused = index;
    this.onChange.emit({
      added: index,
      indices: this.selectedIndices.slice(),
      preventClosingPopup
    });
  }
  emitMultipleAddedRemoved() {
    this.onChange.emit({
      added: this.indicesToBeAdded,
      removed: this.indicesToBeRemoved,
      indices: this.selectedIndices.slice(),
      preventClosingPopup: true,
      isMultipleSelection: true
    });
    this.indicesToBeAdded = [];
    this.indicesToBeRemoved = [];
  }
  addMultiple(indices) {
    this.indicesToBeAdded = indices.slice();
    this.selectedIndices.push(...indices);
  }
  deselect(index, preventClosingPopup) {
    if (!this.isSelected(index)) {
      return;
    }
    const position = this.selectedIndices.indexOf(index);
    this.selectedIndices.splice(position, 1);
    this.focused = index;
    if (this.selected.length === 0) {
      this.lastClickedIndex = null;
    }
    this.onChange.emit({
      indices: this.selectedIndices.slice(),
      removed: index,
      preventClosingPopup
    });
  }
  unselectMultiple(indices) {
    indices.forEach((index) => {
      const position = this.selectedIndices.indexOf(index);
      this.selectedIndices.splice(position, 1);
    });
    this.indicesToBeRemoved = indices.slice();
  }
  change(index) {
    const newSelection = isPresent(index) && !this.isSelected(index);
    this.selectedIndices = [index];
    this.focused = index;
    this.onChange.emit({
      indices: [index],
      newSelection
    });
  }
  resetSelection(index) {
    this.selectedIndices = index instanceof Array ? index : [index];
    this.focused = this.selectedIndices[this.selectedIndices.length - 1];
  }
  get selected() {
    return this.selectedIndices.slice();
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    if (this.focusedIndex !== index) {
      this.focusedIndex = index;
      this.onFocus.emit(index);
    }
  }
  selectFromTo(from, to) {
    const addedIndices = [];
    for (let i = from; i <= to; i++) {
      if (!this.isSelected(i) && !this.disabledItemsService.isIndexDisabled(i)) {
        addedIndices.push(i);
      }
    }
    this.addMultiple(addedIndices);
  }
  unselectFromTo(from, to) {
    const indicesToBeUnselected = [];
    for (let i = from; i >= to; i--) {
      if (this.isSelected(i) && !this.disabledItemsService.isIndexDisabled(i)) {
        indicesToBeUnselected.push(i);
      }
    }
    this.unselectMultiple(indicesToBeUnselected);
  }
  unselectNotNeededIndices(startOfSelection, endOfSelection, totalItems) {
    const indicesToBeUnselected = [];
    for (let i = 0; i < startOfSelection; i++) {
      if (this.isSelected(i)) {
        indicesToBeUnselected.push(i);
      }
    }
    for (let i = endOfSelection + 1; i < totalItems; i++) {
      if (this.isSelected(i)) {
        indicesToBeUnselected.push(i);
      }
    }
    this.unselectMultiple(indicesToBeUnselected);
  }
};
SelectionService.ɵfac = function SelectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectionService)(ɵɵinject(DisabledItemsService));
};
SelectionService.ɵprov = ɵɵdefineInjectable({
  token: SelectionService,
  factory: SelectionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DisabledItemsService
    }];
  }, null);
})();
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["Tab"] = 4] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 5] = "Esc";
  NavigationAction2[NavigationAction2["Delete"] = 6] = "Delete";
  NavigationAction2[NavigationAction2["Backspace"] = 7] = "Backspace";
  NavigationAction2[NavigationAction2["Home"] = 8] = "Home";
  NavigationAction2[NavigationAction2["End"] = 9] = "End";
  NavigationAction2[NavigationAction2["Up"] = 10] = "Up";
  NavigationAction2[NavigationAction2["Down"] = 11] = "Down";
  NavigationAction2[NavigationAction2["Left"] = 12] = "Left";
  NavigationAction2[NavigationAction2["Right"] = 13] = "Right";
  NavigationAction2[NavigationAction2["PageDown"] = 14] = "PageDown";
  NavigationAction2[NavigationAction2["PageUp"] = 15] = "PageUp";
  NavigationAction2[NavigationAction2["SelectPrevious"] = 16] = "SelectPrevious";
  NavigationAction2[NavigationAction2["SelectNext"] = 17] = "SelectNext";
  NavigationAction2[NavigationAction2["SelectAll"] = 18] = "SelectAll";
  NavigationAction2[NavigationAction2["SelectAllToBeginning"] = 19] = "SelectAllToBeginning";
  NavigationAction2[NavigationAction2["SelectAllToEnd"] = 20] = "SelectAllToEnd";
})(NavigationAction || (NavigationAction = {}));
var MIN_INDEX = 0;
var NavigationEvent = class {
  /**
   * The index of the item to which the user navigated.
   */
  constructor(index, originalEvent) {
    this.index = index;
    this.originalEvent = originalEvent;
  }
};
var NavigationService = class {
  constructor(disabledItemsService, selectionService) {
    this.disabledItemsService = disabledItemsService;
    this.selectionService = selectionService;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.enter = new EventEmitter();
    this.tab = new EventEmitter();
    this.esc = new EventEmitter();
    this.up = new EventEmitter();
    this.right = new EventEmitter();
    this.down = new EventEmitter();
    this.left = new EventEmitter();
    this.delete = new EventEmitter();
    this.backspace = new EventEmitter();
    this.home = new EventEmitter();
    this.end = new EventEmitter();
    this.pagedown = new EventEmitter();
    this.pageup = new EventEmitter();
    this.selectnext = new EventEmitter();
    this.selectprevious = new EventEmitter();
    this.selectall = new EventEmitter();
    this.selectalltobeginning = new EventEmitter();
    this.selectalltoend = new EventEmitter();
  }
  process(args) {
    const keyCode = args.originalEvent.keyCode;
    const altKey = args.originalEvent.altKey;
    const shiftKey = args.originalEvent.shiftKey;
    const ctrlKey = args.originalEvent.ctrlKey || args.originalEvent.metaKey;
    const openOnSpace = args.openOnSpace;
    const closeOnSpace = args.closeOnSpace;
    let index;
    let action = NavigationAction.Undefined;
    if (altKey && keyCode === Keys.ArrowDown) {
      action = NavigationAction.Open;
    } else if (openOnSpace && keyCode === Keys.Space) {
      action = NavigationAction.Open;
    } else if (altKey && keyCode === Keys.ArrowUp) {
      action = NavigationAction.Close;
    } else if (closeOnSpace && keyCode === Keys.Space) {
      action = NavigationAction.Close;
    } else if (shiftKey && keyCode === Keys.ArrowUp) {
      action = NavigationAction.SelectPrevious;
    } else if (shiftKey && keyCode === Keys.ArrowDown) {
      action = NavigationAction.SelectNext;
    } else if (ctrlKey && keyCode === Keys.KeyA) {
      action = NavigationAction.SelectAll;
    } else if (ctrlKey && shiftKey && keyCode === Keys.Home) {
      action = NavigationAction.SelectAllToBeginning;
    } else if (ctrlKey && shiftKey && keyCode === Keys.End) {
      action = NavigationAction.SelectAllToEnd;
    } else if (keyCode === Keys.Enter) {
      action = NavigationAction.Enter;
    } else if (keyCode === Keys.Escape) {
      action = NavigationAction.Esc;
    } else if (keyCode === Keys.Tab) {
      action = NavigationAction.Tab;
    } else if (keyCode === Keys.ArrowUp) {
      index = this.next({
        current: args.current,
        start: args.min,
        end: args.max,
        step: -1
      });
      action = NavigationAction.Up;
    } else if (keyCode === Keys.ArrowLeft) {
      index = this.next({
        current: args.current,
        start: args.min,
        end: args.max,
        step: -1
      });
      action = NavigationAction.Left;
    } else if (keyCode === Keys.ArrowDown) {
      index = this.next({
        current: args.current,
        start: args.min,
        end: args.max,
        step: 1
      });
      action = NavigationAction.Down;
    } else if (keyCode === Keys.ArrowRight) {
      index = this.next({
        current: args.current,
        start: args.min,
        end: args.max,
        step: 1
      });
      action = NavigationAction.Right;
    } else if (keyCode === Keys.Home) {
      index = this.isDisabled(MIN_INDEX) ? args.current : MIN_INDEX;
      action = NavigationAction.Home;
    } else if (keyCode === Keys.End) {
      index = this.isDisabled(args.max) ? args.current : args.max;
      action = NavigationAction.End;
    } else if (keyCode === Keys.Delete) {
      action = NavigationAction.Delete;
    } else if (keyCode === Keys.Backspace) {
      action = NavigationAction.Backspace;
    } else if (keyCode === Keys.PageDown) {
      action = NavigationAction.PageDown;
    } else if (keyCode === Keys.PageUp) {
      action = NavigationAction.PageUp;
    }
    const eventData = new NavigationEvent(index, args.originalEvent);
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit(eventData);
    }
    return action;
  }
  next(args) {
    const {
      current,
      start,
      end,
      step
    } = args;
    const nextIndex = !isPresent(current) ? start : this.clampIndex(current + step, start, end);
    const firstFocusableIndex = this.firstFocusableIndex(nextIndex, start, end, step);
    if (isPresent(firstFocusableIndex)) {
      return firstFocusableIndex;
    }
    if (this.selectionService.isSelected(current) && current >= start) {
      return current;
    }
    const inversedStep = -1 * step;
    return this.firstFocusableIndex(nextIndex, start, end, inversedStep);
  }
  clampIndex(index, min, max) {
    if (!isPresent(index) || index < min) {
      return min;
    }
    if (index > max) {
      return max;
    }
    return index;
  }
  firstFocusableIndex(startIndex, min, max, step) {
    while (min <= startIndex && startIndex <= max) {
      if (!this.isDisabled(startIndex)) {
        return startIndex;
      }
      startIndex += step;
    }
    return void 0;
  }
  isDisabled(index) {
    if (this.disabledItemsService) {
      return this.disabledItemsService.isIndexDisabled(index);
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(DisabledItemsService), ɵɵinject(SelectionService));
};
NavigationService.ɵprov = ɵɵdefineInjectable({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: DisabledItemsService
    }, {
      type: SelectionService
    }];
  }, null);
})();
var NoDataTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
NoDataTemplateDirective.ɵfac = function NoDataTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NoDataTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
NoDataTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: NoDataTemplateDirective,
  selectors: [["", "kendoDropDownListNoDataTemplate", ""], ["", "kendoDropDownTreeNoDataTemplate", ""], ["", "kendoComboBoxNoDataTemplate", ""], ["", "kendoMultiColumnComboBoxNoDataTemplate", ""], ["", "kendoAutoCompleteNoDataTemplate", ""], ["", "kendoMultiSelectNoDataTemplate", ""], ["", "kendoMultiSelectTreeNoDataTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListNoDataTemplate],[kendoDropDownTreeNoDataTemplate],[kendoComboBoxNoDataTemplate],[kendoMultiColumnComboBoxNoDataTemplate],[kendoAutoCompleteNoDataTemplate],[kendoMultiSelectNoDataTemplate],[kendoMultiSelectTreeNoDataTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var PreventableEvent = class {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var FilterableComponent = class {
};
var ListItemDirective = class {
  constructor(element) {
    this.element = element;
  }
};
ListItemDirective.ɵfac = function ListItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListItemDirective)(ɵɵdirectiveInject(ElementRef));
};
ListItemDirective.ɵdir = ɵɵdefineDirective({
  type: ListItemDirective,
  selectors: [["li", "role", "option"], ["li", "role", "group"]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListItemDirective, [{
    type: Directive,
    args: [{
      selector: '"li[role=option], li[role=group]"',
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var SelectableDirective = class {
  constructor(selectionService) {
    this.checkboxes = {
      enabled: false
    };
    this.multipleSelection = false;
    this.selectionService = selectionService;
  }
  get focusedClassName() {
    return this.selectionService.isFocused(this.index);
  }
  get selectedClassName() {
    return !this.checkboxes.enabled && this.selectionService.isSelected(this.index);
  }
  onClick(event) {
    event.stopPropagation();
    this.selectionService.lastClickedIndex = this.index;
    if (this.checkboxes.enabled && !this.checkboxes.checkOnClick) {
      return;
    }
    if (this.multipleSelection) {
      if (this.selectionService.isSelected(this.index)) {
        this.selectionService.deselect(this.index);
      } else {
        this.selectionService.add(this.index);
      }
    } else {
      this.selectionService.change(this.index);
    }
  }
};
SelectableDirective.ɵfac = function SelectableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectableDirective)(ɵɵdirectiveInject(SelectionService));
};
SelectableDirective.ɵdir = ɵɵdefineDirective({
  type: SelectableDirective,
  selectors: [["", "kendoDropDownsSelectable", ""]],
  hostVars: 9,
  hostBindings: function SelectableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SelectableDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("index", ctx.index);
      ɵɵstyleProp("height", ctx.height, "px")("min-height", ctx.height, "px");
      ɵɵclassProp("k-focus", ctx.focusedClassName)("k-selected", ctx.selectedClassName);
    }
  },
  inputs: {
    index: "index",
    checkboxes: "checkboxes",
    height: "height",
    isMultiselect: "isMultiselect",
    multipleSelection: "multipleSelection"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownsSelectable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: SelectionService
    }];
  }, {
    index: [{
      type: HostBinding,
      args: ["attr.index"]
    }, {
      type: Input
    }],
    checkboxes: [{
      type: Input
    }],
    height: [{
      type: HostBinding,
      args: ["style.height.px"]
    }, {
      type: HostBinding,
      args: ["style.minHeight.px"]
    }, {
      type: Input
    }],
    isMultiselect: [{
      type: Input
    }],
    multipleSelection: [{
      type: Input
    }],
    focusedClassName: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    selectedClassName: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ListComponent = class {
  /* tslint:disable:member-ordering */
  constructor(dataService, wrapper, selectionService, disabledItemsService, cdr, zone, renderer) {
    this.dataService = dataService;
    this.wrapper = wrapper;
    this.selectionService = selectionService;
    this.disabledItemsService = disabledItemsService;
    this.cdr = cdr;
    this.zone = zone;
    this.renderer = renderer;
    this.selected = [];
    this.focused = -1;
    this.show = true;
    this.multipleSelection = false;
    this.type = "list";
    this.checkboxes = {
      enabled: false
    };
    this.rounded = "medium";
    this.onClick = new EventEmitter();
    this.pageChange = new EventEmitter();
    this.listResize = new EventEmitter();
    this.popupListScroll = new EventEmitter();
    this.startFrom = 0;
    this.lastLoaded = 0;
    this.lastScrollTop = 0;
    this.scrollToFocused = false;
    this._size = "medium";
    this.selectSubscription = merge(this.selectionService.onSelect.pipe(map((args) => args.indices[0])), this.selectionService.onFocus).pipe(
      // handle only the very last onSelect/onFocus emission
      switchMap((event) => this.zone.onStable.pipe(take(1), map(() => event)))
    ).subscribe(this.scrollToItem.bind(this));
    this.prepareClasses();
  }
  set data(data) {
    this._data = data[0] && data[0].header ? data.slice(0) : data;
  }
  get data() {
    return this._data;
  }
  set size(size) {
    if (this.type === "list") {
      this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("list", this.size));
      if (size) {
        this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("list", size));
      }
      this._size = size;
    }
  }
  get size() {
    return this._size;
  }
  get pageSize() {
    if (this.virtual.pageSize) {
      return this.virtual.pageSize;
    }
    const size = Math.round(this.height / this.virtual.itemHeight);
    return size;
  }
  get scrollHeight() {
    return this.virtual.total * this.virtual.itemHeight;
  }
  get overflowY() {
    if (isPresent(this.virtual)) {
      const overflow = this.hasVirtualScrollbar() ? "scroll" : "hidden";
      return overflow;
    }
  }
  /**
   * @hidden
   */
  get checkboxClasses() {
    return `${this.size ? getSizeClass("checkbox", this.size) : ""} ${this.rounded ? getRoundedClass(this.rounded) : ""}`;
  }
  ngOnChanges(changes) {
    if (isChanged("data", changes, false)) {
      if (this.lastLoaded <= 0) {
        this.lastLoaded = this.data.length - 1;
        this.scrollToFocused = !changes["data"].isFirstChange();
      }
      this.setOverflow();
    }
    if (isChanged("virtual", changes, false)) {
      this.setOverflow();
    }
    if (isChanged("type", changes, false)) {
      this.prepareClasses();
    }
  }
  ngAfterViewInit() {
    this.setComponentClasses();
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(this.content.nativeElement, "scroll").pipe(auditTime(100), tap(this.prefetchData.bind(this)), tap(this.findCurrentGroup.bind(this))).subscribe(() => {
        this.lastScrollTop = this.content.nativeElement.scrollTop;
      });
    });
    this.setGroupAttributes();
    this.setOverflow();
  }
  setGroupAttributes() {
    const liItems = document.querySelectorAll("li");
    let isGroup;
    let childrenliItemsIds = [];
    let firstGroupReached = false;
    let previousGroup;
    liItems.forEach((li, idx) => {
      isGroup = li.getAttribute("role") === "group";
      if (!isGroup && firstGroupReached) {
        this.renderer.setAttribute(li, "aria-describedby", previousGroup.getAttribute("id"));
        childrenliItemsIds.push(li.getAttribute("id"));
        if (idx + 1 >= liItems.length || liItems[idx + 1]?.getAttribute("role") === "group") {
          this.renderer.setAttribute(previousGroup, "aria-owns", childrenliItemsIds.join(" "));
          childrenliItemsIds = [];
        }
      }
      if (isGroup) {
        firstGroupReached = true;
        previousGroup = li;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.virtual) {
      this.positionItems();
    }
    if (this.items && this.scrollToFocused) {
      this.scrollToFocused = false;
      const scrollTarget = this.items.length && this.selectionService.focused === -1 ? 0 : this.selectionService.focused;
      this.scrollToItem(scrollTarget);
    }
    if (this.dataService.grouped) {
      this.findCurrentGroup();
    }
  }
  ngOnDestroy() {
    this.selectSubscription.unsubscribe();
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
  onCheckedChange(e, index) {
    const isChecked = e.target["checked"];
    if (isChecked && !this.selectionService.isSelected(index)) {
      this.selectionService.add(index);
    }
    if (!isChecked && this.selectionService.isSelected(index)) {
      this.selectionService.deselect(index);
    }
  }
  prepareClasses() {
    if (this.type === "list") {
      this.listContentClass = "k-list-content";
      this.listClass = "k-list-ul";
      this.listItemClass = "k-list-item";
      this.listVirtualClass = "k-virtual-list";
      this.listGroupStickyHeaderClass = "k-list-group-sticky-header";
      this.listGroupStickyHeaderTextClass = "k-list-header-text";
      this.listGroupItemClass = "k-list-group-item";
      this.listGroupItemTextClass = "k-list-item-text";
    } else {
      this.listContentClass = "k-table-body k-table-scroller";
      this.listClass = "k-table k-table-list";
      this.listItemClass = "k-table-row";
      this.listVirtualClass = "k-virtual-table";
      this.listGroupStickyHeaderClass = "k-table-group-sticky-header";
      this.listGroupStickyHeaderTextClass = "k-table-th";
      this.listGroupItemClass = "k-table-group-row";
      this.listGroupItemTextClass = "k-table-th";
    }
  }
  isChecked(index) {
    const normalizedIndex = this.virtual ? index + this.virtual.skip : index;
    return this.selectionService.isSelected(normalizedIndex);
  }
  firstVisibleItem() {
    const content = this.content.nativeElement;
    const rect = content.getBoundingClientRect();
    const disabled = Array.prototype.slice.call(content.querySelectorAll(".k-disabled"));
    disabled.forEach((el) => this.renderer.setStyle(el, "pointer-events", "auto"));
    const item = document.elementFromPoint(rect.left + 1, rect.top + 1);
    disabled.forEach((el) => this.renderer.setStyle(el, "pointer-events", "none"));
    return closest2(item, "li");
  }
  findCurrentGroup() {
    if (!this.dataService.grouped) {
      this.currentGroup = void 0;
      return;
    }
    const item = this.firstVisibleItem();
    if (item) {
      let index;
      if (item.getAttribute("role") === "group") {
        index = parseInt(item.getAttribute("group-index"), 10);
        this.currentGroup = this.dataService.groupAt(index).value;
      } else {
        index = parseInt(item.getAttribute("index"), 10);
        this.currentGroup = this.dataService.itemGroup(this.dataService.itemAt(index));
      }
    } else {
      this.currentGroup = void 0;
    }
    this.cdr.detectChanges();
  }
  prefetchData() {
    if (!this.virtual) {
      return;
    }
    const visibleItems = Math.trunc(this.content.nativeElement.clientHeight / this.virtual.itemHeight);
    const offsetY = this.content.nativeElement.scrollTop;
    const start = Math.trunc(offsetY / this.virtual.itemHeight);
    const down = offsetY > this.lastScrollTop;
    const nextPage = start + visibleItems >= this.lastLoaded && this.lastLoaded < this.virtual.total - 1;
    const leftOver = this.pageSize - (this.lastLoaded - this.startFrom);
    const prevPage = this.lastLoaded - this.pageSize + visibleItems >= start - leftOver;
    if (down && nextPage) {
      this.changePage(start);
    }
    if (!down && prevPage) {
      this.changePage(start - this.pageSize + visibleItems + 1);
    }
  }
  changePage(start) {
    this.zone.run(() => {
      let end = this.pageSize + start;
      if (end > this.virtual.total) {
        start--;
        end = this.virtual.total;
      }
      if (start < 0) {
        start = 0;
      }
      this.startFrom = start;
      this.lastLoaded = end;
      this.pageChange.emit({
        skip: start,
        take: this.pageSize
      });
    });
    this.setGroupAttributes();
  }
  index(groupIndex, itemIndex) {
    return groupIndex > 0 ? this.dataService.groupIndices[groupIndex - 1] + itemIndex : itemIndex;
  }
  getText(dataItem) {
    return getter2(dataItem, this.textField);
  }
  getValue(dataItem) {
    return getter2(dataItem, this.valueField);
  }
  isDisabled(index) {
    if (isPresent(this.virtual) && !this.dataService.grouped) {
      index += this.virtual.skip;
    }
    return this.disabledItemsService.isIndexDisabled(index);
  }
  isAltRow(index) {
    return this.type === "dropdowngrid" && index % 2 !== 0;
  }
  scrollToItem(index) {
    let flatIndex = index;
    if (this.dataService.grouped) {
      flatIndex = this.dataService.flatIndex(index);
    }
    if (this.virtual && flatIndex > -1) {
      this.scrollToIndex(flatIndex);
      return;
    }
    const items = this.items.toArray();
    if (isPresent(items[flatIndex]) && flatIndex !== -1) {
      this.scroll(items[flatIndex].element);
    }
  }
  scrollWithOnePage(action) {
    const content = this.content.nativeElement;
    const contentOffsetHeight = content.clientHeight;
    if (action === NavigationAction.PageDown) {
      content.scrollTop += contentOffsetHeight;
    } else if (action === NavigationAction.PageUp) {
      content.scrollTop -= contentOffsetHeight;
    }
  }
  scrollToIndex(index) {
    const content = this.content.nativeElement;
    let contentScrollTop = content.scrollTop;
    const itemOffsetTop = index * this.virtual.itemHeight;
    const itemOffsetHeight = this.virtual.itemHeight;
    const contentOffsetHeight = content.clientHeight;
    const bottomDistance = itemOffsetTop + itemOffsetHeight;
    if (contentScrollTop > itemOffsetTop) {
      contentScrollTop = itemOffsetTop;
    } else if (bottomDistance > contentScrollTop + contentOffsetHeight) {
      contentScrollTop = bottomDistance - contentOffsetHeight;
    }
    content.scrollTop = contentScrollTop;
  }
  scroll(item) {
    if (!item) {
      return;
    }
    const nativeElement = item.nativeElement;
    const content = this.content.nativeElement;
    const itemOffsetTop = nativeElement.offsetTop;
    const itemOffsetHeight = nativeElement.offsetHeight;
    let contentScrollTop = content.scrollTop;
    const contentOffsetHeight = content.clientHeight;
    const bottomDistance = itemOffsetTop + itemOffsetHeight;
    if (contentScrollTop > itemOffsetTop) {
      contentScrollTop = itemOffsetTop;
    } else if (bottomDistance > contentScrollTop + contentOffsetHeight) {
      contentScrollTop = bottomDistance - contentOffsetHeight;
    }
    content.scrollTop = contentScrollTop;
  }
  /**
   * Indicates whether a scrollbar is currently rendered in the list.
   */
  hasScrollbar() {
    if (!(isPresent(this.items) && this.items.length && isPresent(this.list) && isPresent(this.content))) {
      return false;
    }
    const hasVirtualScroll = isPresent(this.virtual) && this.hasVirtualScrollbar();
    return hasVirtualScroll || this.list.nativeElement.scrollHeight > this.content.nativeElement.offsetHeight;
  }
  isItemSelected(index) {
    return this.selectionService.isSelected(index) || null;
  }
  /**
   * Sets the list's content overflow (hides/shows scrollbar)
   */
  setOverflow() {
    if (this.virtual) {
      const overflow = this.hasVirtualScrollbar() ? "scroll" : "hidden";
      this.renderer.setStyle(this.content.nativeElement, "overflow-y", overflow);
    }
  }
  /**
   * Indicates whether the scrollbar should be visible in virtual mode.
   */
  hasVirtualScrollbar() {
    const contentOffsetHeight = this.content.nativeElement.offsetHeight;
    const virtualOffsetHeight = this.virtualContainer && this.virtualContainer.nativeElement.offsetHeight;
    return this.virtualContainer && virtualOffsetHeight > contentOffsetHeight;
  }
  positionItems() {
    this.items.forEach((item, index) => {
      const offsetY = (index + this.startFrom) * this.virtual.itemHeight;
      this.renderer.setStyle(item.element.nativeElement, "transform", `translateY(${offsetY}px`);
    });
  }
  /**
   * Indicates whether the first group header from the data set is in the targeted virtual page.
   */
  firstGroupHeaderInTargetedPage(itemIndex) {
    if (!isPresent(this.virtual)) {
      return true;
    }
    return this.virtual.skip === 0 && this.virtual.pageSize > itemIndex;
  }
  setComponentClasses() {
    if (this.type === "list") {
      this.renderer.addClass(this.wrapper.nativeElement, "k-list");
      if (this.size) {
        this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("list", this.size));
      }
    }
    if (this.type === "dropdowngrid") {
      this.renderer.setStyle(this.wrapper.nativeElement, "overflow-y", "scroll");
    }
    if (isPresent(this.virtual)) {
      this.renderer.addClass(this.wrapper.nativeElement, this.listVirtualClass);
    }
  }
};
ListComponent.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["kendo-list"]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(ListItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    selected: "selected",
    focused: "focused",
    textField: "textField",
    valueField: "valueField",
    height: "height",
    template: "template",
    groupTemplate: "groupTemplate",
    fixedGroupTemplate: "fixedGroupTemplate",
    show: "show",
    id: "id",
    optionPrefix: "optionPrefix",
    multipleSelection: "multipleSelection",
    virtual: "virtual",
    type: "type",
    checkboxes: "checkboxes",
    ariaLive: "ariaLive",
    isMultiselect: "isMultiselect",
    isActionSheetExpanded: "isActionSheetExpanded",
    showStickyHeader: "showStickyHeader",
    data: "data",
    size: "size",
    rounded: "rounded"
  },
  outputs: {
    onClick: "onClick",
    pageChange: "pageChange",
    listResize: "listResize",
    popupListScroll: "popupListScroll"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 17,
  consts: [["content", ""], ["list", ""], ["li", ""], ["virtualContainer", ""], [3, "class", "ngStyle", 4, "ngIf"], ["unselectable", "on", 3, "scroll"], ["role", "listbox"], [4, "ngIf"], [3, "resize", 4, "ngIf"], ["class", "k-height-container", "role", "presentation", 4, "ngIf"], [3, "ngStyle"], [3, "ngIf"], [3, "templateContext"], ["ngFor", "", 3, "ngForOf"], ["role", "option", "kendoDropDownsSelectable", "", 3, "checkboxes", "height", "index", "multipleSelection", "ngClass"], ["type", "checkbox", "class", "k-checkbox", "role", "presentation", "tabindex", "-1", "aria-hidden", "true", 3, "ngClass", "checked", "change", 4, "ngIf"], ["type", "checkbox", "role", "presentation", "tabindex", "-1", "aria-hidden", "true", 1, "k-checkbox", 3, "change", "ngClass", "checked"], [1, "k-list-item-text"], ["role", "group", 3, "class", "k-table-alt-row", "ngStyle", 4, "ngIf"], ["role", "option", "kendoDropDownsSelectable", "", 3, "height", "index", "multipleSelection", "class", "ngClass", 4, "ngIf"], ["role", "group", 3, "ngStyle"], ["role", "option", "kendoDropDownsSelectable", "", 3, "height", "index", "multipleSelection", "ngClass"], [3, "resize"], ["role", "presentation", 1, "k-height-container"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, ListComponent_div_0_Template, 3, 9, "div", 4);
      ɵɵelementStart(1, "div", 5, 0);
      ɵɵlistener("scroll", function ListComponent_Template_div_scroll_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.popupListScroll.emit($event));
      });
      ɵɵelementStart(3, "ul", 6, 1);
      ɵɵtemplate(5, ListComponent_5_Template, 1, 1, null, 7)(6, ListComponent_6_Template, 1, 1, null, 7)(7, ListComponent_kendo_resize_sensor_7_Template, 1, 0, "kendo-resize-sensor", 8);
      ɵɵelementEnd();
      ɵɵtemplate(8, ListComponent_div_8_Template, 4, 2, "div", 9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.dataService.grouped && ctx.showStickyHeader);
      ɵɵadvance();
      ɵɵclassMap(ctx.listContentClass);
      ɵɵstyleProp("overscroll-behavior", "none")("max-height", ctx.height, "px");
      ɵɵadvance(2);
      ɵɵclassMap(ctx.listClass);
      ɵɵattribute("id", ctx.id)("aria-live", ctx.ariaLive)("aria-multiselectable", ctx.isMultiselect)("aria-hidden", !ctx.show);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.dataService.grouped && ctx.show);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.dataService.grouped);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.virtual);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.virtual);
    }
  },
  dependencies: [NgIf, NgStyle, TemplateContextDirective, NgForOf, ListItemDirective, SelectableDirective, NgClass, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-list",
      template: `
    <div *ngIf="dataService.grouped && showStickyHeader"
        [class]="listGroupStickyHeaderClass"
        [ngStyle]="{
            'height.px': virtual?.itemHeight,
            'minHeight.px' : virtual?.itemHeight,
            'boxSizing' : virtual ? 'border-box' : 'inherit'}"
        >
        <ng-template *ngIf="fixedGroupTemplate"
            [templateContext]="{
                templateRef: fixedGroupTemplate.templateRef,
                $implicit: currentGroup
            }">
        </ng-template>
        <ng-template [ngIf]="!fixedGroupTemplate"><span [class]="listGroupStickyHeaderTextClass">{{ currentGroup }}</span></ng-template>
    </div>
    <div #content
        [class]="listContentClass"
        [style.overscrollBehavior]="'none'"
        [style.maxHeight.px]="height"
        unselectable="on"
        (scroll)="popupListScroll.emit($event)">
    <ul #list
        role="listbox"
        [class]="listClass"
        [attr.id]="id"
        [attr.aria-live]="ariaLive"
        [attr.aria-multiselectable]="isMultiselect"
        [attr.aria-hidden]="!show">
         <ng-template *ngIf="!dataService.grouped && show" ngFor let-dataItem let-itemIndex="index" [ngForOf]="data">
            <li
                role="option"
                kendoDropDownsSelectable
                [checkboxes]="checkboxes"
                [height]="virtual?.itemHeight"
                [index]="itemIndex + startFrom"
                [multipleSelection]="multipleSelection"
                [attr.id]="optionPrefix + '-' + itemIndex"
                [attr.tabIndex]="-1"
                [attr.aria-selected]="isItemSelected(itemIndex)"
                [class]="listItemClass"
                [ngClass]="{
                    'k-disabled': isDisabled(itemIndex),
                    'k-table-alt-row': isAltRow(itemIndex)
                }"
            >
                <input
                    *ngIf="checkboxes.enabled"
                    type="checkbox"
                    class="k-checkbox"
                    role="presentation"
                    tabindex="-1"
                    aria-hidden="true"
                    [ngClass]="checkboxClasses"
                    (change)="onCheckedChange($event, itemIndex)"
                    [checked]="isChecked(itemIndex)"
                />
                <ng-template *ngIf="template"
                    [templateContext]="{
                        templateRef: template.templateRef,
                        $implicit: dataItem
                    }">
                </ng-template>
                <ng-template [ngIf]="!template"><span class="k-list-item-text">{{ getText(dataItem) }}</span></ng-template>
            </li>
         </ng-template>
         <ng-template *ngIf="dataService.grouped" ngFor let-dataItem let-itemIndex="index" [ngForOf]="data">
            <li
                #li
                *ngIf="dataItem.header"
                role="group"
                [class]="listGroupItemClass"
                [class.k-table-alt-row]="isAltRow(itemIndex - 1)"
                [ngStyle]="{
                    'height.px': virtual?.itemHeight,
                    'minHeight.px' : virtual?.itemHeight,
                    'boxSizing' : virtual ? 'border-box' : 'inherit'}"
                [attr.group-index]="dataItem.index"
                [attr.id]="optionPrefix + '-' + itemIndex"
                [attr.tabIndex]="-1">
                    <span [class]="listGroupItemTextClass">
                        <ng-template *ngIf="groupTemplate"
                            [templateContext]="{
                                templateRef: groupTemplate.templateRef,
                                $implicit: dataItem.value
                        }">
                        </ng-template>
                        <ng-template [ngIf]="!groupTemplate">{{ dataItem.value }}</ng-template>
                    </span>
            </li>
            <li
                #li
                *ngIf="!dataItem.header"
                role="option"
                kendoDropDownsSelectable
                [height]="virtual?.itemHeight"
                [index]="dataItem.offsetIndex"
                [multipleSelection]="multipleSelection"
                [attr.absolute-index]="dataItem.index"
                [attr.id]="optionPrefix + '-' + itemIndex"
                [attr.tabIndex]="-1"
                [attr.aria-selected]="isItemSelected(dataItem.offsetIndex)"
                [class]="listItemClass"
                [ngClass]="{
                    'k-disabled': isDisabled(dataItem.offsetIndex),
                    'k-table-alt-row': isAltRow(itemIndex - 1)
                }"
            >
                <ng-template *ngIf="template"
                    [templateContext]="{
                        templateRef: template.templateRef,
                        $implicit: dataItem.value
                    }">
                </ng-template>
                <ng-template [ngIf]="!template"><span class="k-list-item-text">{{ getText(dataItem.value) }}</span></ng-template>
            </li>
        </ng-template>
        <kendo-resize-sensor
            *ngIf="!virtual"
            (resize)="listResize.emit()"
        >
        </kendo-resize-sensor>
    </ul>
    <div *ngIf="virtual" #virtualContainer class="k-height-container" role="presentation">
        <div [style.height.px]="scrollHeight">
            <kendo-resize-sensor (resize)="listResize.emit()"></kendo-resize-sensor>
        </div>
    </div>
    </div>
  `,
      standalone: true,
      imports: [NgIf, NgStyle, TemplateContextDirective, NgForOf, ListItemDirective, SelectableDirective, NgClass, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: DataService
    }, {
      type: ElementRef
    }, {
      type: SelectionService
    }, {
      type: DisabledItemsService
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    selected: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    groupTemplate: [{
      type: Input
    }],
    fixedGroupTemplate: [{
      type: Input
    }],
    show: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    optionPrefix: [{
      type: Input
    }],
    multipleSelection: [{
      type: Input
    }],
    virtual: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    checkboxes: [{
      type: Input
    }],
    ariaLive: [{
      type: Input
    }],
    isMultiselect: [{
      type: Input
    }],
    isActionSheetExpanded: [{
      type: Input
    }],
    showStickyHeader: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    listResize: [{
      type: Output
    }],
    popupListScroll: [{
      type: Output
    }],
    items: [{
      type: ViewChildren,
      args: [ListItemDirective]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    list: [{
      type: ViewChild,
      args: ["list", {
        static: true
      }]
    }],
    virtualContainer: [{
      type: ViewChild,
      args: ["virtualContainer", {
        static: false
      }]
    }]
  });
})();
var DEFAULTS = {
  pageSize: 50,
  itemHeight: 28
};
var normalizeVirtualizationSettings = (settings, defaultOverrides) => {
  const defaults = Object.assign({}, DEFAULTS, defaultOverrides);
  if (settings === true) {
    return defaults;
  }
  if (!settings) {
    return null;
  }
  return __spreadValues({
    pageSize: DEFAULTS.pageSize
  }, settings);
};
var ResponsiveRendererComponent = class {
  constructor(localization) {
    this.localization = localization;
    this.closePopup = new EventEmitter();
    this.textInputChange = new EventEmitter();
    this.navigate = new EventEmitter();
    this.onExpand = new EventEmitter();
    this.onCollapse = new EventEmitter();
    this.onApply = new EventEmitter();
    this.onCancel = new EventEmitter();
    this.searchBarValue = "";
    this.animationDuration = animationDuration;
    this.xIcon = xIcon;
  }
  messageFor(key) {
    return this.localization.get(key);
  }
  onValueChange(value) {
    this.searchBarValue = value;
    this.textInputChange.emit(value);
  }
};
ResponsiveRendererComponent.ɵfac = function ResponsiveRendererComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResponsiveRendererComponent)(ɵɵdirectiveInject(LocalizationService));
};
ResponsiveRendererComponent.ɵcmp = ɵɵdefineComponent({
  type: ResponsiveRendererComponent,
  selectors: [["responsive-renderer"]],
  viewQuery: function ResponsiveRendererComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ActionSheetComponent, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetSearchBar = _t.first);
    }
  },
  inputs: {
    title: "title",
    showActionButtons: "showActionButtons",
    subtitle: "subtitle",
    size: "size",
    showTextInput: "showTextInput",
    sharedPopupActionSheetTemplate: "sharedPopupActionSheetTemplate",
    isActionSheetExpanded: "isActionSheetExpanded",
    text: "text",
    placeholder: "placeholder"
  },
  outputs: {
    closePopup: "closePopup",
    textInputChange: "textInputChange",
    navigate: "navigate",
    onExpand: "onExpand",
    onCollapse: "onCollapse",
    onApply: "onApply",
    onCancel: "onCancel"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 4,
  consts: [["actionSheet", ""], ["actionSheetSearchBar", ""], [3, "overlayClick", "keydown", "expand", "collapse", "animation", "expanded"], ["kendoActionSheetTemplate", ""], [1, "k-text-center", "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group", "k-hbox"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["kendoButton", "", "icon", "x", "type", "button", "fillMode", "flat", "aria-hidden", "true", "innerCssClass", "k-button-icon", 3, "click", "svgIcon", "size", "tabIndex"], [1, "k-actionsheet-titlebar-group", "k-actionsheet-filter"], ["placeholder", "Filter", "class", "k-searchbox", "autocomplete", "off", 3, "value", "size", "valueChange", 4, "ngIf"], [1, "k-actionsheet-content", "!k-overflow-hidden"], [1, "k-list-container"], [4, "ngTemplateOutlet"], ["class", "k-actionsheet-footer k-actions k-actions-stretched", 4, "ngIf"], ["placeholder", "Filter", "autocomplete", "off", 1, "k-searchbox", 3, "valueChange", "value", "size"], ["kendoTextBoxPrefixTemplate", ""], ["name", "search"], [1, "k-actionsheet-footer", "k-actions", "k-actions-stretched"], ["kendoButton", "", "tabindex", "0", "aria-disabled", "false", "type", "button", "themeColor", "base", 3, "click", "keydown.enter", "size"], ["kendoButton", "", "tabindex", "0", "aria-disabled", "false", "type", "button", "themeColor", "primary", 3, "click", "keydown.enter", "size"]],
  template: function ResponsiveRendererComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "kendo-actionsheet", 2, 0);
      ɵɵlistener("overlayClick", function ResponsiveRendererComponent_Template_kendo_actionsheet_overlayClick_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.closePopup.emit());
      })("keydown", function ResponsiveRendererComponent_Template_kendo_actionsheet_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.navigate.emit($event));
      })("expand", function ResponsiveRendererComponent_Template_kendo_actionsheet_expand_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onExpand.emit());
      })("collapse", function ResponsiveRendererComponent_Template_kendo_actionsheet_collapse_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onCollapse.emit());
      });
      ɵɵtemplate(2, ResponsiveRendererComponent_ng_template_2_Template, 15, 9, "ng-template", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("animation", ɵɵpureFunction1(2, _c8, ctx.animationDuration))("expanded", ctx.isActionSheetExpanded);
    }
  },
  dependencies: [ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgIf, TextBoxComponent, TextBoxPrefixTemplateDirective, IconComponent, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveRendererComponent, [{
    type: Component,
    args: [{
      selector: "responsive-renderer",
      template: `
        <kendo-actionsheet
            #actionSheet
            [animation]="{ duration: animationDuration }"
            [expanded]="isActionSheetExpanded"
            (overlayClick)="closePopup.emit()"
            (keydown)="navigate.emit($event)"
            (expand)="onExpand.emit()"
            (collapse)="onCollapse.emit()"
        >
            <ng-template kendoActionSheetTemplate>
                <div class="k-text-center k-actionsheet-titlebar">
                    <div class="k-actionsheet-titlebar-group k-hbox">
                        <div class="k-actionsheet-title">
                            <div class="k-text-center">{{ title }}</div>
                            <div class="k-actionsheet-subtitle k-text-center">{{ subtitle }}</div>
                        </div>
                        <div class="k-actionsheet-actions">
                            <button
                                kendoButton
                                icon="x"
                                type="button"
                                [attr.title]="messageFor('clearTitle')"
                                [svgIcon]="xIcon"
                                fillMode="flat"
                                [size]="size"
                                [tabIndex]="-1"
                                aria-hidden="true"
                                innerCssClass="k-button-icon"
                                (click)="closePopup.emit()"
                            ></button>
                        </div>
                    </div>
                    <div class="k-actionsheet-titlebar-group k-actionsheet-filter">
                        <kendo-textbox
                            *ngIf="showTextInput"
                            #actionSheetSearchBar
                            [value]="searchBarValue"
                            [size]="size"
                            placeholder="Filter"
                            class="k-searchbox"
                            autocomplete="off"
                            (valueChange)="onValueChange($event)"
                        >
                            <ng-template kendoTextBoxPrefixTemplate>
                                <kendo-icon name="search"></kendo-icon>
                            </ng-template>
                        </kendo-textbox>
                    </div>
                </div>
                <div class="k-actionsheet-content !k-overflow-hidden">
                    <div class="k-list-container">
                        <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
                    </div>
                </div>

                <div *ngIf="showActionButtons" class="k-actionsheet-footer k-actions k-actions-stretched">
                    <button kendoButton 
                        tabindex="0"
                        aria-disabled="false"
                        type="button"
                        [size]="size"
                        themeColor="base"
                        (click)="onCancel.emit()"
                        (keydown.enter)="$event.stopImmediatePropagation()">
                        {{messageFor('cancelButton')}}
                    </button>
                    <button kendoButton
                        tabindex="0"
                        aria-disabled="false"
                        type="button"
                        [size]="size"
                        themeColor="primary"
                        (click)="onApply.emit()"
                        (keydown.enter)="$event.stopImmediatePropagation()">
                        {{messageFor('applyButton')}}
                    </button>
                </div>
            </ng-template>
        </kendo-actionsheet>
    `,
      standalone: true,
      imports: [ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgIf, TextBoxComponent, TextBoxPrefixTemplateDirective, IconComponent, NgTemplateOutlet]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    title: [{
      type: Input
    }],
    showActionButtons: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showTextInput: [{
      type: Input
    }],
    sharedPopupActionSheetTemplate: [{
      type: Input
    }],
    isActionSheetExpanded: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    closePopup: [{
      type: Output
    }],
    textInputChange: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    onExpand: [{
      type: Output
    }],
    onCollapse: [{
      type: Output
    }],
    onApply: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    actionSheet: [{
      type: ViewChild,
      args: [ActionSheetComponent]
    }],
    actionSheetSearchBar: [{
      type: ViewChild,
      args: ["actionSheetSearchBar"]
    }]
  });
})();
var SharedDropDownEventsDirective = class {
  constructor(ngZone, renderer, cdr) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.isFocusedChange = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.handleBlur = new EventEmitter();
    this.subscriptions = new Subscription();
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    let cursorInsideWrapper = false;
    let tabbing = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        this.cdr.detectChanges();
        if (!this.isFocused) {
          this.ngZone.run(() => {
            this.onFocus.emit();
            this.isFocused = true;
            this.isFocusedChange.emit(this.isFocused);
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          const closestTextbox = closest(args.relatedTarget, (element) => element === hostElement);
          if (!closestTextbox) {
            this.handleBlur.emit();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper) {
            this.handleBlur.emit();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.keyCode === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
SharedDropDownEventsDirective.ɵfac = function SharedDropDownEventsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SharedDropDownEventsDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
SharedDropDownEventsDirective.ɵdir = ɵɵdefineDirective({
  type: SharedDropDownEventsDirective,
  selectors: [["", "kendoDropDownSharedEvents", ""]],
  inputs: {
    hostElement: "hostElement",
    clearButtonClicked: "clearButtonClicked",
    isFocused: "isFocused"
  },
  outputs: {
    isFocusedChange: "isFocusedChange",
    onFocus: "onFocus",
    handleBlur: "handleBlur"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedDropDownEventsDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownSharedEvents]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostElement: [{
      type: Input
    }],
    clearButtonClicked: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    isFocusedChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    handleBlur: [{
      type: Output
    }]
  });
})();
var Messages = class extends ComponentMessages {
};
Messages.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(__ngFactoryType__) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages)))(__ngFactoryType__ || Messages);
  };
})();
Messages.ɵdir = ɵɵdefineDirective({
  type: Messages,
  inputs: {
    noDataText: "noDataText",
    clearTitle: "clearTitle",
    checkAllText: "checkAllText",
    selectButtonText: "selectButtonText",
    filterInputLabel: "filterInputLabel",
    popupLabel: "popupLabel",
    applyButton: "applyButton",
    cancelButton: "cancelButton"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive
  }], null, {
    noDataText: [{
      type: Input
    }],
    clearTitle: [{
      type: Input
    }],
    checkAllText: [{
      type: Input
    }],
    selectButtonText: [{
      type: Input
    }],
    filterInputLabel: [{
      type: Input
    }],
    popupLabel: [{
      type: Input
    }],
    applyButton: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedMessagesDirective.ɵfac = function LocalizedMessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedMessagesDirective,
  selectors: [["", "kendoDropDownListLocalizedMessages", ""], ["", "kendoDropDownTreeLocalizedMessages", ""], ["", "kendoComboBoxLocalizedMessages", ""], ["", "kendoMultiColumnComboBoxLocalizedMessages", ""], ["", "kendoAutoCompleteLocalizedMessages", ""], ["", "kendoMultiSelectLocalizedMessages", ""], ["", "kendoMultiSelectTreeLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => LocalizedMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `
    [kendoDropDownListLocalizedMessages],
    [kendoDropDownTreeLocalizedMessages],
    [kendoComboBoxLocalizedMessages],
    [kendoMultiColumnComboBoxLocalizedMessages],
    [kendoAutoCompleteLocalizedMessages],
    [kendoMultiSelectLocalizedMessages],
    [kendoMultiSelectTreeLocalizedMessages]
  `,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var NO_VALUE = "";
var DEFAULT_SIZE$5 = "medium";
var DEFAULT_ROUNDED$5 = "medium";
var DEFAULT_FILL_MODE$5 = "solid";
var AUTOCOMPLETE_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoCompleteComponent)
};
var AutoCompleteComponent = class {
  constructor(localization, dataService, popupService, selectionService, navigationService, disabledItemsService, _zone, cdr, renderer, hostElement, injector) {
    this.localization = localization;
    this.dataService = dataService;
    this.popupService = popupService;
    this.selectionService = selectionService;
    this.navigationService = navigationService;
    this.disabledItemsService = disabledItemsService;
    this._zone = _zone;
    this.cdr = cdr;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.injector = injector;
    this.animationDuration = animationDuration;
    this.xIcon = xIcon;
    this.highlightFirst = true;
    this.showStickyHeader = true;
    this.focusableId = `k-${guid2()}`;
    this.placeholder = "";
    this.adaptiveMode = "none";
    this.title = "";
    this._listHeight = 200;
    this.clearButton = true;
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.filterable = false;
    this.valueChange = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.widgetClasses = true;
    this.listBoxId = `k-${guid2()}`;
    this.optionPrefix = `k-${guid2()}`;
    this.windowSize = "large";
    this.onChangeCallback = noop;
    this.onTouchedCallback = noop;
    this.popupMouseDownHandler = (event) => event.preventDefault();
    this._popupSettings = {
      animate: true
    };
    this._open = false;
    this._value = "";
    this.subs = new Subscription();
    this.valueChangeSubject = new Subject();
    this._isFocused = false;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.wrapper = this.hostElement.nativeElement;
    this.data = [];
    this.subscribeEvents();
    this.subscribeTouchEvents();
    this.selectionService.resetSelection([-1]);
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  get width() {
    let wrapperOffsetWidth = 0;
    if (isDocumentAvailable()) {
      wrapperOffsetWidth = this.wrapper.offsetWidth;
    }
    const width = this.popupSettings.width || wrapperOffsetWidth;
    const minWidth = isNaN(wrapperOffsetWidth) ? wrapperOffsetWidth : `${wrapperOffsetWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get height() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  get listContainerClasses() {
    const containerClasses = ["k-list-container", "k-autocomplete-popup"];
    if (this.popupSettings.popupClass) {
      containerClasses.push(this.popupSettings.popupClass);
    }
    return containerClasses;
  }
  get suggestion() {
    if (!this.text || !this.suggestedText) {
      this.suggestedText = void 0;
      return;
    }
    const hasMatch = this.suggestedText.toLowerCase().startsWith(this.text.toLowerCase());
    const shouldSuggest = this.suggest && !this.backspacePressed;
    if (shouldSuggest && hasMatch) {
      return this.suggestedText;
    }
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  get clearButtonVisiblity() {
    if (touchEnabled) {
      return "visible";
    }
  }
  get ariaControls() {
    return this.isOpen ? this.listBoxId : void 0;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl);
  }
  /**
   * Toggles the visibility of the popup or actionSheet.
   * If you use the `toggle` method to open or close the popup or actionSheet, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !this._open;
      this._toggle(shouldOpen);
    });
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(this._open || this.isActionSheetExpanded);
  }
  /**
   * @hidden
   */
  handleClick() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.togglePopup(true);
    }
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    if (isDisabled || sameState) {
      return;
    }
    const isDefaultPrevented = this.triggerPopupEvents(open);
    if (!isDefaultPrevented) {
      this._toggle(open);
    }
  }
  get activeDescendant() {
    if (!this.isOpen || !isPresent(this.selectionService.focused) || this.selectionService.focused === -1) {
      return null;
    }
    return this.optionPrefix + "-" + this.selectionService.focused;
  }
  /**
   * Sets the data of the AutoComplete.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this.dataService.data = data || [];
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    if (this.filterable) {
      this.selectionService.focused = this.isOpen && this.data.length && this.highlightFirst ? this.firstFocusableIndex(0) : -1;
    }
    if (this.suggest && this.dataService.itemsCount > 0) {
      this.suggestedText = getter2(this.dataService.itemAt(0), this.valueField);
    }
  }
  get data() {
    const virtual = this.virtual;
    if (virtual) {
      const start = virtual.skip || 0;
      const end = start + virtual.pageSize;
      virtual.total = this.dataService.data.length;
      return this.dataService.data.slice(start, end);
    }
    return this.dataService.data;
  }
  /**
   * Sets the value of the AutoComplete.
   */
  set value(newValue) {
    this.verifySettings(newValue);
    this._value = newValue || NO_VALUE;
    this.text = this.value;
    this.cdr.markForCheck();
  }
  get value() {
    return this._value || NO_VALUE;
  }
  /**
   * Sets the subtitle of the ActionSheet that is rendered instead of the Popup when using small screen devices.
   * By default the ActionSheet subtitle uses the text provided for the `placeholder` of the AutoComplete.
  */
  set subtitle(_subtitle) {
    this._subtitle = _subtitle;
  }
  get subtitle() {
    return this._subtitle || this.placeholder;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * Configures the popup of the AutoComplete.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped. The `auto` mode is not supported when virtual scrolling is enabled.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * Defines a Boolean function that is executed for each data item in the component
   * ([see examples]({% slug disableditems_autocomplete %})).
   * Determines whether the item will be disabled.
   */
  set itemDisabled(fn) {
    if (typeof fn !== "function") {
      throw new Error(`itemDisabled must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.disabledItemsService.itemDisabled = fn;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Enables the [virtualization]({% slug virtualization_autocomplete %}) functionality.
   */
  set virtual(settings) {
    this._virtualSettings = normalizeVirtualizationSettings(settings);
  }
  get virtual() {
    return this._virtualSettings;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$5;
    this.renderer.removeClass(this.wrapper, getSizeClass("input", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper, getSizeClass("input", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$5;
    this.renderer.removeClass(this.wrapper, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$5;
    this.renderer.removeClass(this.wrapper, getFillModeClass("input", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper, getFillModeClass("input", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  get isFocused() {
    return this._isFocused;
  }
  set isFocused(isFocused) {
    this.renderer[isFocused ? "addClass" : "removeClass"](this.wrapper, "k-focus");
    this._isFocused = isFocused;
  }
  get isDisabled() {
    return this.disabled;
  }
  get isLoading() {
    return this.loading;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get isActionSheetExpanded() {
    return this.actionSheet?.expanded;
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.wrapper, "tabindex");
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.detectChanges();
    }));
    this.setComponentClasses();
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    this.cdr.detectChanges();
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  ngOnDestroy() {
    this.destroyPopup();
    this.subs.unsubscribe();
    if (this.touchstartDisposeHandler) {
      this.touchstartDisposeHandler();
    }
  }
  ngOnChanges(changes) {
    const virtual = this.virtual;
    const requestInitialData = virtual && changes["data"] && changes["data"].isFirstChange();
    if (requestInitialData) {
      this.pageChange({
        skip: 0,
        take: virtual.pageSize
      });
    }
  }
  /**
   * Resets the value of the AutoComplete.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
   */
  reset() {
    this.value = NO_VALUE;
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  onAdaptiveTextBoxChange(text) {
    this.search(text);
  }
  /**
   * @hidden
   */
  clearValue(event) {
    event.stopImmediatePropagation();
    this.focus();
    this.change(NO_VALUE);
    if (this.filterable) {
      this.filterChange.emit("");
    }
    this.selectionService.resetSelection([]);
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * Focuses a specific item of the AutoComplete based on a provided index.
   * If null or invalid index is provided the focus will be removed.
   */
  focusItemAt(index) {
    const isInRange = index >= 0 && index < this.data.length;
    if (isPresent(index) && isInRange && !this.disabledItemsService.isIndexDisabled(index)) {
      this.selectionService.focus(index);
    } else {
      this.selectionService.focus(-1);
    }
  }
  /**
   * Focuses the AutoComplete.
   */
  focus() {
    if (!this.disabled) {
      this.searchbar.focus();
    }
  }
  /**
   * Blurs the AutoComplete.
   */
  blur() {
    if (!this.disabled) {
      this.searchbar.blur();
    }
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
      this.cdr.detectChanges();
    }
    if (this._open && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.width;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  emitChange(value) {
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }
  verifySettings(newValue) {
    if (!isDevMode()) {
      return;
    }
    if (isPresent(newValue) && typeof newValue !== "string") {
      throw new Error("Expected value of type string. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/autocomplete/value-binding/");
    }
  }
  search(text, startFrom = 0) {
    const index = this.findIndex(text, startFrom);
    if (this.disabledItemsService.isIndexDisabled(index)) {
      if (index + 1 < this.dataService.itemsCount) {
        this.search(text, index + 1);
      } else {
        this.selectionService.focus(-1);
      }
    } else {
      this.selectionService.focus(index);
      if (this.suggest) {
        this.suggestedText = getter2(this.dataService.itemAt(index), this.valueField);
      }
    }
  }
  navigate(index) {
    if (!this.isOpen) {
      return;
    }
    this.selectionService.focus(index);
  }
  /**
   * @hidden
   */
  handleNavigate(event) {
    const focused = isNaN(this.selectionService.focused) ? this.firstFocusableIndex(0) : this.selectionService.focused;
    if (this.disabled || this.readonly || isNaN(focused)) {
      return;
    }
    const action = this.navigationService.process({
      current: focused,
      max: this.dataService.itemsCount - 1,
      min: 0,
      originalEvent: event
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Backspace && action !== NavigationAction.Delete && action !== NavigationAction.Home && action !== NavigationAction.End && action !== NavigationAction.Left && action !== NavigationAction.Right && action !== NavigationAction.PageDown && action !== NavigationAction.PageUp && (action === NavigationAction.Enter && this.isOpen || action !== NavigationAction.Enter)) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && this.isActionSheetExpanded) {
      event.stopImmediatePropagation();
      this.togglePopup(false);
    }
  }
  handleEnter(event) {
    const focused = this.selectionService.focused;
    let value;
    if (this.isOpen) {
      event.originalEvent.preventDefault();
    }
    if (focused >= 0) {
      value = getter2(this.dataService.itemAt(focused), this.valueField);
    } else {
      const match = this.suggest && this.suggestedText && this.data.length && getter2(this.dataService.itemAt(0), this.valueField).toLowerCase() === this.searchbar.value.toLowerCase();
      if (this.isOpen && match) {
        value = this.suggestedText;
      } else {
        value = this.searchbar.value;
      }
    }
    if (this.isActionSheetExpanded && focused >= 0) {
      this.togglePopup(false);
    }
    this.change(value);
  }
  handleEscape() {
    if (this.isOpen) {
      this.togglePopup(false);
    } else {
      this.value = "";
    }
    this.selectionService.focused = -1;
    this.suggestedText = null;
  }
  /**
   * @hidden
   */
  searchBarChange(text) {
    const currentTextLength = isPresent(this.text) ? this.text.length : 0;
    this.backspacePressed = text.length < currentTextLength ? true : false;
    this.text = text;
    this.togglePopup(text.length > 0);
    if (!this.highlightFirst) {
      this.selectionService.focused = -1;
    }
    if (this.filterable) {
      this.filterChange.emit(text);
    } else if (this.highlightFirst) {
      this.search(text);
    }
  }
  /**
   * @hidden
   */
  onFilterChange(text) {
    if (this.filterable) {
      this.filterChange.emit(text);
    } else if (this.highlightFirst) {
      this.search(text);
    }
  }
  /**
   * @hidden
   */
  handleInputFocus() {
    this.handleFocus();
    if (hasObservers(this.inputFocus)) {
      this._zone.run(() => {
        this.inputFocus.emit();
      });
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this._zone.run(() => {
      if (!this.isFocused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    if (!this.isActionSheetExpanded) {
      this.isFocused = false;
      const valueHasChanged = this.value !== this.text;
      const runInZone = hasObservers(this.onBlur) || hasObservers(this.close) || isUntouched(this.wrapper) || valueHasChanged;
      if (runInZone) {
        this._zone.run(() => {
          if (valueHasChanged) {
            this.change(this.searchbar.value);
          }
          this.onBlur.emit();
          this.onTouchedCallback();
          this.togglePopup(false);
        });
      } else {
        this.togglePopup(false);
      }
    }
  }
  /**
   * @hidden
   */
  handleInputBlur() {
    if (!this.isActionSheetExpanded) {
      const focused = this.filterable ? this.selectionService.focused : -1;
      this.searchbar.input.nativeElement.scrollLeft = 0;
      let dataItem;
      let text;
      if (focused !== -1) {
        dataItem = this.dataService.itemAt(focused);
        text = getter2(dataItem, this.valueField) || "";
      } else {
        text = this.searchbar.value;
      }
      const exactMatch = text === this.searchbar.value;
      const insensitiveMatch = text.toLowerCase() === this.searchbar.value.toLowerCase();
      if (!exactMatch && insensitiveMatch) {
        this.selectionService.resetSelection([]);
      }
      const valueHasChanged = this.value !== this.text;
      const runInZone = hasObservers(this.inputBlur) || hasObservers(this.close) || isUntouched(this.wrapper) || valueHasChanged || this.formControl?.updateOn === "blur";
      if (runInZone) {
        this._zone.run(() => {
          if (valueHasChanged) {
            this.change(this.searchbar.value);
          }
          this.inputBlur.emit();
          this.onTouchedCallback();
          this.togglePopup(false);
        });
      } else {
        this.togglePopup(false);
      }
    }
  }
  /**
   * @hidden
   */
  pageChange(event) {
    const virtual = this.virtual;
    virtual.skip = event.skip;
  }
  change(value) {
    this.togglePopup(false);
    this.valueChangeSubject.next(value);
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.valueChangeSubject.subscribe((value) => {
      const hasChange = this.value !== value;
      const index = this.findIndex(value);
      this.selectionService.focused = index;
      this.value = value;
      this.text = value;
      if (hasChange) {
        this.emitChange(value);
      }
    }));
    this.subs.add(this.selectionService.onChange.subscribe(this.handleItemChange.bind(this)));
    this.subs.add(this.selectionService.onFocus.subscribe(this.handleItemFocus.bind(this)));
    this.subs.add(merge(this.navigationService.up, this.navigationService.down).subscribe((event) => this.navigate(event.index)));
    this.subs.add(this.navigationService.close.subscribe(() => this.togglePopup(false)));
    this.subs.add(this.navigationService.open.subscribe(() => this.togglePopup(true)));
    this.subs.add(this.navigationService.enter.subscribe(this.handleEnter.bind(this)));
    this.subs.add(this.navigationService.esc.subscribe(this.handleEscape.bind(this)));
    this.subs.add(merge(this.navigationService.pagedown, this.navigationService.pageup).subscribe((event) => {
      if (this.isOpen) {
        event.originalEvent.preventDefault();
        this.optionsList.scrollWithOnePage(NavigationAction[event.originalEvent.code]);
      }
    }));
  }
  findIndex(value, startFrom = 0) {
    let index;
    if (value && value.length && this.dataService.itemsCount) {
      index = this.dataService.findIndex(this.findIndexPredicate(value), startFrom);
    } else {
      index = -1;
    }
    return index;
  }
  subscribeTouchEvents() {
    if (!isDocumentAvailable() || !touchEnabled) {
      return;
    }
    this._zone.runOutsideAngular(() => (
      // Roll up AutoComplete on iOS when tapped outside
      this.touchstartDisposeHandler = this.renderer.listen(document, "touchstart", (e) => {
        const target = e.target;
        if (this.isFocused && !inDropDown(this.hostElement, target, this.popupRef)) {
          this._zone.run(() => this.blur());
        }
      })
    ));
  }
  handleItemChange(event) {
    const index = event.indices.length ? event.indices[0] : void 0;
    this.selectionService.resetSelection([-1]);
    if (!isPresent(index)) {
      return;
    }
    const text = getter2(this.dataService.itemAt(index), this.valueField);
    this.change(text);
    if (this.isActionSheetExpanded) {
      this.togglePopup(false);
    }
  }
  handleItemFocus(_event) {
    const focused = this.selectionService.focused;
    const shouldSuggest = Boolean(this.suggest && this.data && this.data.length && focused >= 0);
    if (shouldSuggest) {
      this.suggestedText = getter2(this.dataService.itemAt(focused), this.valueField);
    }
  }
  createPopup() {
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.popupTemplate,
      popupClass: this.listContainerClasses,
      positionMode: "absolute",
      popupAlign: popupPosition,
      anchorAlign: anchorPosition
    });
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.width;
    popupWrapper.addEventListener("mousedown", this.popupMouseDownHandler);
    popupWrapper.style.minWidth = min;
    popupWrapper.style.width = max;
    popupWrapper.style.height = this.height;
    popupWrapper.setAttribute("dir", this.direction);
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    this.subs.add(this.popupRef.popupOpen.subscribe(() => {
      this.cdr.detectChanges();
      setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
      this.optionsList.scrollToItem(this.selectionService.focused);
      this.selectionService.focus(this.selectionService.focused);
      this.opened.emit();
    }));
    this.subs.add(this.popupRef.popupClose.subscribe(() => {
      this.closed.emit();
    }));
    this.subs.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => this.togglePopup(false)));
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.popupElement.removeEventListener("mousedown", this.popupMouseDownHandler);
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  _toggle(open) {
    this._open = open;
    this.destroyPopup();
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    }
    if (this._open) {
      this.createPopup();
    }
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  firstFocusableIndex(index) {
    const maxIndex = this.data.length - 1;
    if (this.disabledItemsService.isIndexDisabled(index)) {
      return index < maxIndex ? this.firstFocusableIndex(index + 1) : void 0;
    } else {
      return index;
    }
  }
  findIndexPredicate(text) {
    if (this.dataService.grouped) {
      return (item) => {
        let itemText = getter2(item.value, this.valueField);
        itemText = !isPresent(itemText) ? "" : itemText.toString().toLowerCase();
        return itemText.startsWith(text.toLowerCase());
      };
    } else {
      return (item) => {
        let itemText = getter2(item, this.valueField);
        itemText = !isPresent(itemText) ? "" : itemText.toString().toLowerCase();
        return itemText.startsWith(text.toLowerCase());
      };
    }
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper, getSizeClass("input", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper, getFillModeClass("input", this.fillMode));
    }
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    this.actionSheetSearchBar.value = "";
    this.filterable && this.filterChange.emit("");
    this.searchbar.input.nativeElement.focus();
    this.closed.emit();
  }
  openActionSheet() {
    this.actionSheet.toggle(true);
    this.cdr.detectChanges();
    setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
    this.title = setActionSheetTitle(this.searchbar.input, this.title);
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.optionsList.scrollToItem(this.selectionService.focused);
    this.selectionService.focus(this.selectionService.focused);
    this.actionSheetSearchBar.focus();
  }
};
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AutoCompleteComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector));
};
AutoCompleteComponent.ɵcmp = ɵɵdefineComponent({
  type: AutoCompleteComponent,
  selectors: [["kendo-autocomplete"]],
  contentQueries: function AutoCompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FixedGroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedGroupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
    }
  },
  viewQuery: function AutoCompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(SearchBarComponent, 7);
      ɵɵviewQuery(_c11, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchbar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsList = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function AutoCompleteComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-autocomplete", ctx.widgetClasses)("k-input", ctx.widgetClasses)("k-disabled", ctx.isDisabled)("k-loading", ctx.isLoading);
    }
  },
  inputs: {
    highlightFirst: "highlightFirst",
    showStickyHeader: "showStickyHeader",
    focusableId: "focusableId",
    data: "data",
    value: "value",
    valueField: "valueField",
    placeholder: "placeholder",
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle",
    popupSettings: "popupSettings",
    listHeight: "listHeight",
    loading: "loading",
    clearButton: "clearButton",
    suggest: "suggest",
    disabled: "disabled",
    itemDisabled: "itemDisabled",
    readonly: "readonly",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    filterable: "filterable",
    virtual: "virtual",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    valueChange: "valueChange",
    filterChange: "filterChange",
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    onFocus: "focus",
    onBlur: "blur",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur"
  },
  exportAs: ["kendoAutoComplete"],
  standalone: true,
  features: [ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.autocomplete"
  }, {
    provide: FilterableComponent,
    useExisting: forwardRef(() => AutoCompleteComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => AutoCompleteComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 17,
  vars: 30,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_0 = goog.getMsg("NO DATA FOUND");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.autocomplete.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_1 = goog.getMsg("clear");
      i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.autocomplete.clearTitle|The title of the clear button:clear`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_2 = goog.getMsg("Options list");
      i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.autocomplete.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    return [["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["optionsList", ""], ["kendoAutoCompleteLocalizedMessages", "", "noDataText", i18n_0, "clearTitle", i18n_1, "popupLabel", i18n_2], ["kendoDropDownSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], ["kendoSearchbar", "", 3, "onNavigate", "valueChange", "onBlur", "onFocus", "click", "ariaExpanded", "isSuggestable", "isFilterable", "isLoading", "ariaControls", "id", "activeDescendant", "userInput", "suggestedText", "disabled", "readonly", "tabIndex", "isRequired", "placeholder", "inputAttributes"], ["class", "k-clear-value", "role", "button", "tabindex", "-1", 3, "visibility", "click", "mousedown", 4, "ngIf"], ["class", "k-icon k-i-loading k-input-loading-icon", 4, "ngIf"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], [3, "resize", 4, "ngIf"], [3, "closePopup", "textInputChange", "navigate", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "subtitle", "placeholder"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], ["role", "button", "tabindex", "-1", 1, "k-clear-value", 3, "click", "mousedown"], ["name", "x", 3, "svgIcon"], [1, "k-icon", "k-i-loading", "k-input-loading-icon"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [4, "ngTemplateOutlet"], [3, "resize"], [3, "pageChange", "size", "rounded", "id", "optionPrefix", "data", "textField", "valueField", "template", "groupTemplate", "fixedGroupTemplate", "height", "show", "virtual", "showStickyHeader"], ["class", "k-no-data", 4, "ngIf"], [3, "templateContext"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "ngIf"]];
  },
  template: function AutoCompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 4);
      ɵɵelementContainerStart(1, 5);
      ɵɵtwoWayListener("isFocusedChange", function AutoCompleteComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function AutoCompleteComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function AutoCompleteComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, AutoCompleteComponent_span_2_Template, 2, 1, "span", 6)(3, AutoCompleteComponent_kendo_separator_3_Template, 1, 0, "kendo-separator", 7);
      ɵɵelementStart(4, "input", 8);
      ɵɵlistener("onNavigate", function AutoCompleteComponent_Template_input_onNavigate_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      })("valueChange", function AutoCompleteComponent_Template_input_valueChange_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.searchBarChange($event));
      })("onBlur", function AutoCompleteComponent_Template_input_onBlur_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputBlur());
      })("onFocus", function AutoCompleteComponent_Template_input_onFocus_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputFocus());
      })("click", function AutoCompleteComponent_Template_input_click_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleClick());
      });
      ɵɵelementEnd();
      ɵɵtemplate(5, AutoCompleteComponent_span_5_Template, 2, 4, "span", 9)(6, AutoCompleteComponent_span_6_Template, 1, 0, "span", 10)(7, AutoCompleteComponent_kendo_separator_7_Template, 1, 0, "kendo-separator", 7)(8, AutoCompleteComponent_span_8_Template, 2, 1, "span", 11);
      ɵɵelementContainerEnd();
      ɵɵtemplate(9, AutoCompleteComponent_ng_template_9_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(11, null, 1);
      ɵɵtemplate(13, AutoCompleteComponent_kendo_resize_sensor_13_Template, 1, 0, "kendo-resize-sensor", 12);
      ɵɵelementStart(14, "responsive-renderer", 13);
      ɵɵlistener("closePopup", function AutoCompleteComponent_Template_responsive_renderer_closePopup_14_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("textInputChange", function AutoCompleteComponent_Template_responsive_renderer_textInputChange_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onFilterChange($event));
      })("navigate", function AutoCompleteComponent_Template_responsive_renderer_navigate_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(15, AutoCompleteComponent_ng_template_15_Template, 5, 17, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(16);
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ariaExpanded", ctx.isOpen)("isSuggestable", ctx.suggest)("isFilterable", ctx.filterable)("isLoading", ctx.isLoading)("ariaControls", ctx.ariaControls)("id", ctx.focusableId)("activeDescendant", ctx.activeDescendant)("userInput", ctx.text)("suggestedText", ctx.suggestion)("disabled", ctx.disabled)("readonly", ctx.readonly || ctx.isAdaptive)("tabIndex", ctx.tabIndex)("isRequired", ctx.isControlRequired)("placeholder", ctx.placeholder)("inputAttributes", ctx.inputAttributes);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.loading && !ctx.readonly && ctx.clearButton && (ctx.text == null ? null : ctx.text.length));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate && ctx.suffixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
      ɵɵadvance();
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", true)("subtitle", ctx.subtitle)("placeholder", ctx.placeholder);
    }
  },
  dependencies: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, IconWrapperComponent, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoAutoComplete",
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.autocomplete"
      }, {
        provide: FilterableComponent,
        useExisting: forwardRef(() => AutoCompleteComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => AutoCompleteComponent)
      }],
      selector: "kendo-autocomplete",
      template: `
        <ng-container kendoAutoCompleteLocalizedMessages
            i18n-noDataText="kendo.autocomplete.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-clearTitle="kendo.autocomplete.clearTitle|The title of the clear button"
            clearTitle="clear"

            i18n-popupLabel="kendo.autocomplete.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"
        >
        </ng-container>

        <ng-container
            kendoDropDownSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-separator>
            <input
                kendoSearchbar
                [ariaExpanded]="isOpen"
                [isSuggestable]="suggest"
                [isFilterable]="filterable"
                [isLoading]="isLoading"
                [ariaControls]="ariaControls"
                [id]="focusableId"
                [activeDescendant]="activeDescendant"
                [userInput]="text"
                [suggestedText]="suggestion"
                [disabled]="disabled"
                [readonly]="readonly || this.isAdaptive"
                [tabIndex]="tabIndex"
                [isRequired]="isControlRequired"
                [placeholder]="placeholder"
                [inputAttributes]="inputAttributes"
                (onNavigate)="handleNavigate($event)"
                (valueChange)="searchBarChange($event)"
                (onBlur)="handleInputBlur()"
                (onFocus)="handleInputFocus()"
                (click)="handleClick()"
            />
            <span
                *ngIf="!loading && !readonly && (clearButton && text?.length)"
                class="k-clear-value"
                [style.visibility]="clearButtonVisiblity"
                [attr.title]="messageFor('clearTitle')"
                role="button"
                tabindex="-1"
                (click)="clearValue($event)"
                (mousedown)="$event.preventDefault()"
            >
                <kendo-icon-wrapper
                    name="x"
                    [svgIcon]="xIcon"
                >
                </kendo-icon-wrapper>
            </span>
            <span *ngIf="loading" class="k-icon k-i-loading k-input-loading-icon"></span>
            <kendo-separator *ngIf="suffixTemplate && suffixTemplate.showSeparator"></kendo-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
        </ng-container>

        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <ng-container #container></ng-container>
        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="true"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (textInputChange)="onFilterChange($event)"
            (navigate)="handleNavigate($event)"
            [placeholder]="placeholder"
            >
        </responsive-renderer>

        <ng-template #sharedPopupActionSheetTemplate>
            <!--header template-->
            <ng-template *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate.templateRef
                }">
            </ng-template>
            <!--list-->
            <kendo-list
                #optionsList
                [size]="size"
                [rounded]="rounded"
                [id]="listBoxId"
                [optionPrefix]="optionPrefix"
                [data]="data"
                [textField]="valueField"
                [valueField]="valueField"
                [template]="template"
                [groupTemplate]="groupTemplate"
                [fixedGroupTemplate]="fixedGroupTemplate"
                [height]="listHeight"
                [show]="isOpen"
                [virtual]="virtual"
                [showStickyHeader]="showStickyHeader"
                (pageChange)="pageChange($event)"
            >
            </kendo-list>
            <!--no-data template-->
            <div class="k-no-data" *ngIf="data.length === 0">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate?.templateRef
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
            <!--footer template-->
            <ng-template *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate.templateRef
                }">
            </ng-template>
        </ng-template>
  `,
      standalone: true,
      imports: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, IconWrapperComponent, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, ListComponent]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: DataService
    }, {
      type: PopupService
    }, {
      type: SelectionService
    }, {
      type: NavigationService
    }, {
      type: DisabledItemsService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: Injector
    }];
  }, {
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    highlightFirst: [{
      type: Input
    }],
    showStickyHeader: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    suggest: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    filterable: [{
      type: Input
    }],
    virtual: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: [GroupTemplateDirective, {
        static: false
      }]
    }],
    fixedGroupTemplate: [{
      type: ContentChild,
      args: [FixedGroupTemplateDirective, {
        static: false
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    searchbar: [{
      type: ViewChild,
      args: [SearchBarComponent, {
        static: true
      }]
    }],
    optionsList: [{
      type: ViewChild,
      args: ["optionsList", {
        static: false
      }]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-autocomplete"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var MultiselectMessages = {
  "array": "Expected values of array type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselect/value-binding",
  "object": "Expected values of Object type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselect/value-binding/#toc-object-values",
  "primitive": "Expected values of primitive type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselect/value-binding/#toc-primitive-values",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselect/data-binding/#toc-arrays-of-complex-data"
};
var MultiSelectTreeMessages = {
  "array": "Expected values of array type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselecttree/value-binding",
  "primitive": "Expected values of primitive type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselecttree/value-binding/#toc-primitive-values",
  "object": "Expected values of type Object. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselecttree/value-binding/#toc-object-values",
  "dataItems": "Expected dataItems of type Object[] to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/api/MultiSelectTreeComponent/#toc-dataitems",
  "dataItemsLength": "Expected dataItems length to match the number of provided values. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/api/MultiSelectTreeComponent/#toc-dataitems",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multiselecttree/value-binding",
  "valueDepth": "Expected valueDepth of type number[] to be set. See https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/api/MultiSelectTreeComponent/#toc-valuedepth",
  "valueDepthLength": "Expected valueDepth length to match the number of provided values. See https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/api/MultiSelectTreeComponent/#toc-valuedepth"
};
var ComboBoxMessages = {
  "object": "Expected value of type Object. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/combobox/value-binding/#toc-object-values",
  "primitive": "Expected value of primitive type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/combobox/value-binding/#toc-primitive-values",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/combobox/data-binding/#toc-arrays-of-complex-data",
  "noItemHeight": "Expected virtual.itemHeight of type number."
};
var MultiColumnComboBoxMessages = {
  "data": "Provided data must consist only of objects. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multicolumncombobox/data-binding/",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/multicolumncombobox/data-binding/#toc-fields-configuration"
};
var DropDownListMessages = {
  "defaultItem": "defaultItem and data items must be of same type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/api/DropDownListComponent/#toc-defaultitem",
  "object": "Expected value of type Object. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/value-binding/#toc-object-values",
  "primitive": "Expected value of primitive type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/value-binding/#toc-primitive-values",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/data-binding/#toc-arrays-of-complex-data"
};
var DropDownTreeMessages = {
  "primitive": "Expected value of primitive type. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdowntree/value-binding/#toc-primitive-values",
  "object": "Expected value of type Object. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdowntree/value-binding/#toc-object-values",
  "dataItem": "Expected dataItem of type Object to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/api/DropDownTreeComponent/#toc-dataitem",
  "textAndValue": "Expected textField and valueField options to be set. See https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdowntree/value-binding",
  "valueDepth": "Expected valueDepth to be set. See https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/api/DropDownTreeComponent/#toc-valuedepth"
};
var COMBOBOX_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComboBoxComponent)
};
var DEFAULT_SIZE$4 = "medium";
var DEFAULT_ROUNDED$4 = "medium";
var DEFAULT_FILL_MODE$4 = "solid";
var ComboBoxComponent = class extends MultiTabStop {
  constructor(wrapper, localization, popupService, selectionService, navigationService, disabledItemsService, dataService, zone, cdr, renderer, injector, hostElement) {
    super();
    this.wrapper = wrapper;
    this.localization = localization;
    this.popupService = popupService;
    this.selectionService = selectionService;
    this.navigationService = navigationService;
    this.disabledItemsService = disabledItemsService;
    this.dataService = dataService;
    this.zone = zone;
    this.cdr = cdr;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    this.animationDuration = animationDuration;
    this.xIcon = xIcon;
    this.caretAltDownIcon = caretAltDownIcon;
    this.selected = [];
    this.showStickyHeader = true;
    this.focusableId = `k-${guid2()}`;
    this.allowCustom = false;
    this.valueNormalizer = (text) => text.pipe(map((userInput) => userInput));
    this.placeholder = "";
    this.adaptiveMode = "none";
    this.title = "";
    this._listHeight = 200;
    this.suggest = false;
    this.clearButton = true;
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.filterable = false;
    this.valueChange = new EventEmitter();
    this.selectionChange = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.escape = new EventEmitter();
    this.widgetClasses = true;
    this._isFocused = false;
    this.windowSize = "large";
    this.listBoxId = `k-${guid2()}`;
    this.optionPrefix = `k-${guid2()}`;
    this.onChangeCallback = (_) => {
    };
    this.onTouchedCallback = (_) => {
    };
    this.defaultVirtualItemHeight = 28;
    this.defaultVirtualPageSize = 50;
    this._filtering = false;
    this._text = "";
    this.filterText = "";
    this._open = false;
    this._popupSettings = {
      animate: true
    };
    this.popupMouseDownHandler = (event) => event.preventDefault();
    this.customValueSubject = new Subject();
    this.valueSubject = new Subject();
    this.clearValueSubject = new Subject();
    this.subs = new Subscription();
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.data = [];
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  set text(text) {
    this._text = isPresent(text) ? text.toString() : "";
  }
  get text() {
    return this._text;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    return this.isOpen ? this.listBoxId : void 0;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl);
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    if (isDisabled || sameState) {
      return;
    }
    const isDefaultPrevented = this.triggerPopupEvents(open);
    if (!isDefaultPrevented) {
      this._toggle(open);
    }
  }
  get activeDescendant() {
    if (!this.isOpen || !isPresent(this.selectionService.focused) || this.selectionService.focused === -1) {
      return null;
    }
    return this.optionPrefix + "-" + this.selectionService.focused;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * Sets the data of the ComboBox.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this.dataService.data = data || [];
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.setState();
    if (this._filtering) {
      const queryAndDataPresent = this.text.length > 0 && this.dataService.itemsCount > 0;
      const index = queryAndDataPresent ? this.firstFocusableIndex(0) : -1;
      this.selectionService.focused = index;
    }
    if (this.suggest && this.dataService.itemsCount && this.text) {
      this.suggestedText = getter2(this.dataService.itemAt(0), this.textField);
    }
  }
  get data() {
    const virtual = this.virtual;
    if (virtual) {
      const start = virtual.skip || 0;
      const end = start + virtual.pageSize;
      virtual.total = this.dataService.data.length;
      return this.dataService.data.slice(start, end);
    }
    return this.dataService.data;
  }
  /**
   * Sets the value of the ComboBox.
   * It can either be of the primitive (string, numbers) or of the complex (objects) type.
   * To define the type, use the `valuePrimitive` option.
   *
   * > All selected values which are not present in the dataset are considered custom values.
   * > When the `Enter` key is pressed or the component loses focus, custom values get dismissed unless `allowCustom` is set to `true`.
   */
  set value(newValue) {
    this._value = newValue;
    this.setState();
    this.cdr.markForCheck();
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the type of the selected value.
   * If set to `true`, the selected value has to be of the primitive type
   * ([more information and example]({% slug valuebinding_combobox %}#toc-primitive-values-from-object-fields)).
   */
  set valuePrimitive(isPrimitive) {
    this._valuePrimitive = isPrimitive;
  }
  get valuePrimitive() {
    if (!isPresent(this._valuePrimitive)) {
      return !isPresent(this.valueField);
    }
    return this._valuePrimitive;
  }
  /**
   * Sets the subtitle of the ActionSheet that is rendered instead of the Popup when using small screen devices.
   * By default the ActionSheet subtitle uses the text provided for the `placeholder` of the AutoComplete.
  */
  set subtitle(_subtitle) {
    this._subtitle = _subtitle;
  }
  get subtitle() {
    return this._subtitle || this.placeholder;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * Configures the popup of the ComboBox.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped. The `auto` mode is not supported when virtual scrolling is enabled.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * Defines a Boolean function that is executed for each data item in the component
   * ([see examples]({% slug disableditems_combobox %})). Determines whether the item will be disabled.
   */
  set itemDisabled(fn) {
    if (typeof fn !== "function") {
      throw new Error(`itemDisabled must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.disabledItemsService.itemDisabled = fn;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Enables the [virtualization]({% slug virtualization_combobox %}) functionality.
   */
  set virtual(settings) {
    this._virtualSettings = normalizeVirtualizationSettings(settings, {
      itemHeight: this.defaultVirtualItemHeight,
      pageSize: this.defaultVirtualPageSize
    });
  }
  get virtual() {
    return this._virtualSettings;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$4;
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$4;
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$4;
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  get isDisabled() {
    return this.disabled;
  }
  get isLoading() {
    return this.loading;
  }
  get dir() {
    return this.direction;
  }
  get isFocused() {
    return this._isFocused;
  }
  set isFocused(value) {
    this.renderer[value ? "addClass" : "removeClass"](this.wrapper.nativeElement, "k-focus");
    this._isFocused = value;
  }
  get clearButtonVisiblity() {
    if (touchEnabled) {
      return "visible";
    }
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * @hidden
   */
  get isActionSheetExpanded() {
    return this.actionSheet?.expanded;
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  get popupWidth() {
    let wrapperOffsetWidth = 0;
    if (isDocumentAvailable()) {
      wrapperOffsetWidth = this.wrapper.nativeElement.offsetWidth;
    }
    const width = this.popupSettings.width || wrapperOffsetWidth;
    const minWidth = isNaN(wrapperOffsetWidth) ? wrapperOffsetWidth : `${wrapperOffsetWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get popupHeight() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    this.attachStreams();
    this.createValueStream();
    this.subscribeTouchEvents();
    this.attachSelectClickHandler();
    this.setComponentClasses();
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    this.cdr.detectChanges();
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  createValueStream() {
    const valueStream = this.valueSubject.pipe(filter((candidate) => {
      const current = getter2(this.value, this.valueField);
      const newValue = getter2(candidate, this.valueField);
      let newText = getter2(candidate, this.textField);
      if (!isPresent(this.value) && !isPresent(newValue)) {
        return false;
      }
      if (isPresent(newText)) {
        newText = newText.toString();
      }
      if (current === newValue && this.text === newText) {
        this.clearFilter();
        return false;
      } else {
        return true;
      }
    }), map((candidate) => {
      const newValue = getter2(candidate, this.valueField);
      const newText = getter2(candidate, this.textField);
      return {
        dataItem: candidate,
        text: newText,
        value: this.valuePrimitive ? newValue : candidate
      };
    }));
    const customValueStreams = partition(() => this.allowCustom)(this.customValueSubject.pipe(throttleTime(300)));
    const allowCustomValueStream = customValueStreams[0].pipe(tap(() => {
      this.loading = true;
      this.disabled = true;
      this.cdr.detectChanges();
    }), filter(() => {
      const hasChange = this.text !== getter2(this.value, this.valueField);
      this.loading = hasChange;
      this.disabled = hasChange;
      if (!hasChange) {
        this.clearFilter();
      }
      return hasChange;
    }), this.valueNormalizer, map((normalizedValue) => {
      return {
        custom: true,
        dataItem: normalizedValue,
        text: this.text,
        value: normalizedValue
      };
    }));
    const disableCustomValueStream = customValueStreams[1].pipe(map(() => {
      return {
        custom: true,
        dataItem: void 0,
        text: void 0,
        value: void 0
      };
    }));
    const clearValueStream = this.clearValueSubject.pipe(map(() => ({
      dataItem: void 0,
      text: void 0,
      value: void 0
    })));
    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
    const merged = merge(valueStream, allowCustomValueStream, disableCustomValueStream, clearValueStream);
    this.valueSubscription = merged.pipe(catchError(() => {
      const selectionChanged = getter2(this.dataItem, this.valueField) !== void 0;
      this.dataItem = void 0;
      this.value = void 0;
      this.text = void 0;
      this.loading = false;
      this.disabled = false;
      if (selectionChanged) {
        this.selectionChange.emit(void 0);
      }
      this.emitValueChange();
      this.createValueStream();
      return of(null);
    })).subscribe((state) => {
      const selectionChanged = getter2(this.dataItem, this.valueField) !== getter2(state.dataItem, this.valueField);
      this.dataItem = state.dataItem;
      this.value = state.value;
      this.text = state.text;
      this.loading = false;
      this.disabled = false;
      this.clearFilter();
      if (state.custom) {
        this.selectionService.focused = -1;
      }
      if (selectionChanged) {
        const selectionArgs = state.custom ? void 0 : this.dataItem;
        this.selectionChange.emit(selectionArgs);
      }
      this.emitValueChange();
    });
  }
  attachStreams() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.detectChanges();
    }));
    this.subs.add(merge(this.navigationService.up, this.navigationService.down, this.navigationService.home, this.navigationService.end).pipe(filter((event) => isPresent(event.index))).subscribe((event) => this.navigate(event.index)));
    this.subs.add(this.navigationService.open.subscribe(this.handleNavigationOpen.bind(this)));
    this.subs.add(this.navigationService.close.subscribe(() => this.togglePopup(false)));
    this.subs.add(merge(this.navigationService.pagedown, this.navigationService.pageup).subscribe((event) => {
      if (this.isOpen) {
        event.originalEvent.preventDefault();
        this.optionsList.scrollWithOnePage(NavigationAction[event.originalEvent.code]);
      }
    }));
    this.subs.add(this.navigationService.esc.subscribe(this.handleEscape.bind(this)));
    this.subs.add(this.navigationService.enter.pipe(tap((event) => {
      if (this.isOpen) {
        event.originalEvent.preventDefault();
      }
    })).subscribe(this.handleEnter.bind(this)));
    this.subs.add(merge(this.selectionService.onChange, this.selectionService.onSelect.pipe(filter((_) => !this.isOpen))).pipe(tap((_) => {
      this._filtering = false;
      this.togglePopup(false);
    }), map((event) => this.dataService.itemAt(event.indices[0]))).subscribe((dataItem) => {
      this.change(dataItem);
    }));
    this.subs.add(this.selectionService.onSelect.pipe(filter((_) => this.isOpen), tap((_) => this._filtering = false), map((event) => this.dataService.itemAt(event.indices[0]))).subscribe((dataItem) => {
      const selectionChanged = getter2(dataItem, this.valueField) !== getter2(this.dataItem, this.valueField);
      this.updateState({
        dataItem
      });
      if (selectionChanged) {
        this.selectionChange.emit(dataItem);
      }
    }));
  }
  ngOnDestroy() {
    this.destroyPopup();
    this.subs.unsubscribe();
    if (isPresent(this.valueSubscription)) {
      this.valueSubscription.unsubscribe();
    }
    if (this.touchstartDisposeHandler) {
      this.touchstartDisposeHandler();
    }
    if (this.selectClickDisposeHandler) {
      this.selectClickDisposeHandler();
    }
  }
  ngOnChanges(changes) {
    const virtual = this.virtual;
    const requestInitialData = virtual && changes["data"] && changes["data"].isFirstChange();
    if (requestInitialData) {
      this.pageChange({
        skip: 0,
        take: virtual.pageSize
      });
    }
    if (isChanged("valueNormalizer", changes)) {
      this.createValueStream();
    }
    if (anyChanged(["textField", "valueField", "valuePrimitive"], changes, false)) {
      this.setState();
    }
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  /**
   * Focuses a specific item of the ComboBox based on a provided index.
   * If null or invalid index is provided the focus will be removed.
   */
  focusItemAt(index) {
    const isInRange = index >= 0 && index < this.data.length;
    if (isPresent(index) && isInRange && !this.disabledItemsService.isIndexDisabled(index)) {
      this.selectionService.focus(index);
    } else {
      this.selectionService.focus(-1);
    }
  }
  /**
   * Focuses the ComboBox.
   */
  focus() {
    if (!this.disabled) {
      this.searchbar.focus();
    }
  }
  /**
   * Blurs the ComboBox.
   */
  blur() {
    if (!this.disabled) {
      this.searchbar.blur();
    }
  }
  /**
   * Toggles the visibility of the popup or actionSheet. If you use the `toggle` method to open or close the popup or actionSheet,
   * the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !this._open;
      this._toggle(shouldOpen);
      this.cdr.markForCheck();
    });
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(this._open || this.isActionSheetExpanded);
  }
  /**
   * @hidden
   */
  handleClick() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.togglePopup(true);
    }
  }
  /**
   * Resets the value of the ComboBox.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
   */
  reset() {
    this.value = void 0;
    this.clearState();
    this.resetSelection();
  }
  /**
   * @hidden
   *
   * Used by the TextBoxContainer to determine if the floating label
   * should be rendered in the input when the component is not focused.
   */
  isEmpty() {
    const textEmpty = !isPresent(this.text) || isEmptyString(this.text);
    const valueEmpty = !isPresent(this.value) || isEmptyString(this.value);
    return textEmpty && valueEmpty;
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  clearValue(event) {
    event?.stopImmediatePropagation();
    if (event) {
      this.focus();
    }
    this._previousDataItem = void 0;
    this.selectionService.resetSelection([]);
    this.clearValueSubject.next();
    this._filtering = false;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value === null ? void 0 : value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  get selectButtonClasses() {
    return `${this.size ? getSizeClass("button", this.size) : ""} ${this.fillMode ? "k-button-" + this.fillMode : ""} ${this.fillMode ? "k-button-" + this.fillMode + "-base" : ""}
        `;
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
      this.cdr.detectChanges();
    }
    if (this.isOpen && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.popupWidth;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (this.valuePrimitive === true && isPresent(this.value) && typeof this.value === "object") {
      throw new Error(ComboBoxMessages.primitive);
    }
    if (this.valuePrimitive === false && isPresent(this.value) && typeof this.value !== "object") {
      throw new Error(ComboBoxMessages.object);
    }
    const valueOrText = !isPresent(this.valueField) !== !isPresent(this.textField);
    if (valueOrText) {
      throw new Error(ComboBoxMessages.textAndValue);
    }
    if (this.virtual && isNaN(this.virtual.itemHeight)) {
      throw new Error(ComboBoxMessages.noItemHeight);
    }
  }
  setState() {
    if (this._filtering) {
      return;
    }
    const value = this.value;
    const valueField = this.valueField;
    const resolved = this.findDataItem({
      valueField,
      value
    });
    if (isPresent(resolved.index) && resolved.index !== -1) {
      this.updateState({
        dataItem: resolved.dataItem,
        confirm: true
      });
      this.resetSelection(resolved.index);
    } else if (isPresent(value) && this.allowCustom) {
      this.updateState({
        dataItem: value
      });
      this.resetSelection(-1);
    } else if (this._previousDataItem && this.value) {
      this.updateState({
        dataItem: this._previousDataItem
      });
      this.resetSelection();
    } else {
      this.clearState();
      this.resetSelection(-1);
    }
  }
  updateState({
    dataItem,
    confirm = false
  }) {
    this.dataItem = dataItem;
    this.text = getter2(dataItem, this.textField);
    if (confirm) {
      this._previousDataItem = dataItem;
    }
  }
  clearState() {
    this.text = void 0;
    this.dataItem = void 0;
  }
  resetSelection(index) {
    const clear = !isPresent(index) || index < 0;
    this.selectionService.resetSelection(clear ? [] : [index]);
    this.selectionService.focused = index;
  }
  firstFocusableIndex(index) {
    const maxIndex = this.data.length - 1;
    if (this.disabledItemsService.isIndexDisabled(index)) {
      return index < maxIndex ? this.firstFocusableIndex(index + 1) : void 0;
    } else {
      return index;
    }
  }
  findIndexPredicate(text) {
    if (this.dataService.grouped) {
      return (item) => {
        let itemText = getter2(item.value, this.textField);
        itemText = !isPresent(itemText) ? "" : itemText.toString().toLowerCase();
        return itemText.startsWith(text.toLowerCase());
      };
    } else {
      return (item) => {
        let itemText = getter2(item, this.textField);
        itemText = !isPresent(itemText) ? "" : itemText.toString().toLowerCase();
        return itemText.startsWith(text.toLowerCase());
      };
    }
  }
  findDataItem({
    valueField,
    value
  }) {
    const result = {
      dataItem: null,
      index: -1
    };
    const comparer = (element) => {
      const dataItem = this.dataService.grouped ? element.value : element;
      return getter2(dataItem, valueField) === getter2(value, valueField);
    };
    const index = this.dataService.findIndex(comparer);
    result.dataItem = this.dataService.itemAt(index);
    result.index = index;
    return result;
  }
  search(text, startFrom = 0) {
    const index = this.findIndex(text, startFrom);
    if (this.disabledItemsService.isIndexDisabled(index)) {
      if (index + 1 < this.dataService.itemsCount) {
        this.search(text, index + 1);
      } else {
        this.selectionService.focus(-1);
      }
    } else {
      this.selectionService.focus(index);
      if (this.suggest) {
        this.suggestedText = getter2(this.dataService.itemAt(index), this.textField);
      }
    }
  }
  /**
   * @hidden
   */
  onAdaptiveTextBoxChange(text) {
    if (this.filterable && this.filterText !== text) {
      this.filterText = text;
      this.filterChange.emit(text);
    } else {
      this.search(text);
    }
  }
  /**
   * @hidden
   */
  getSuggestion() {
    const hasSelected = !!this.selectionService.selected.length;
    const shouldSuggest = this.suggest && !this.backspacePressed && this.suggestedText && this.text;
    if (!hasSelected && shouldSuggest && this.suggestedText.toLowerCase().startsWith(this.text.toLowerCase())) {
      return this.suggestedText;
    } else {
      this.suggestedText = void 0;
    }
  }
  navigate(index) {
    if (this.dataService.itemsCount === 0) {
      return;
    }
    this.text = getter2(this.dataService.itemAt(index), this.textField);
    this.selectionService.select(index);
  }
  /**
   * @hidden
   */
  handleNavigate(event) {
    const hasSelected = isPresent(this.selectionService.selected[0]);
    const focused = isNaN(this.selectionService.focused) ? this.firstFocusableIndex(0) : this.selectionService.focused;
    let offset = 0;
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.keyCode === Keys.Home || event.keyCode === Keys.End) {
      return;
    }
    if (!hasSelected) {
      if (event.keyCode === Keys.ArrowDown) {
        offset = -1;
      } else if (event.keyCode === Keys.ArrowUp) {
        offset = 1;
      }
    }
    const action = this.navigationService.process({
      current: offset + focused,
      max: this.dataService.itemsCount - 1,
      min: 0,
      originalEvent: event
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Left && action !== NavigationAction.Right && action !== NavigationAction.Backspace && action !== NavigationAction.Delete && action !== NavigationAction.PageDown && action !== NavigationAction.PageUp && (action === NavigationAction.Enter && this.isOpen || action !== NavigationAction.Enter)) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && this.isActionSheetExpanded) {
      event.stopImmediatePropagation();
      this.togglePopup(false);
    }
  }
  handleEnter() {
    const text = this.text;
    const focused = this.selectionService.focused;
    const hasFocused = isPresent(focused) && focused !== -1;
    const previousText = getter2(this._previousDataItem, this.textField) || "";
    const focusedItemText = getter2(this.dataService.itemAt(focused), this.textField);
    const textHasChanged = text !== previousText;
    this.togglePopup(false);
    this._filtering = false;
    if (this.allowCustom && textHasChanged) {
      if (text === focusedItemText || this.useSuggestion()) {
        this.selectionService.change(focused);
      } else {
        this.change(text, true);
      }
    }
    if (!this.allowCustom) {
      if (hasFocused) {
        this.selectionService.change(focused);
      } else if (textHasChanged) {
        this.change(text, true);
      }
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.zone.run(() => {
      if (!this.isFocused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    if (!this.isActionSheetExpanded) {
      this._filtering = false;
      this.searchbar.input.nativeElement.scrollLeft = 0;
      this.isFocused = false;
      const unresolvedSelection = getter2(this.dataItem, this.valueField) !== getter2(this.value, this.valueField);
      const currentText = this.searchbar.value;
      const textHasChanged = currentText !== (getter2(this.dataItem, this.textField) || "");
      const valueHasChanged = unresolvedSelection || textHasChanged;
      const runInZone = valueHasChanged || hasObservers(this.onBlur) || hasObservers(this.close) || isUntouched(this.wrapper.nativeElement);
      if (runInZone) {
        this.zone.run(() => {
          if (valueHasChanged) {
            const lowerCaseMatch = isPresent(this.focusedItemText) && this.focusedItemText.toLowerCase() === currentText.toLowerCase();
            if (lowerCaseMatch || unresolvedSelection) {
              this.selectionService.change(this.selectionService.focused);
            } else {
              this.change(currentText, true);
            }
          }
          this.onBlur.emit();
          this.onTouchedCallback();
          this.togglePopup(false);
        });
      } else {
        this.togglePopup(false);
      }
    }
  }
  /**
   * @hidden
   */
  handleInputBlur() {
    if (!this.isActionSheetExpanded) {
      this._filtering = false;
      this.searchbar.input.nativeElement.scrollLeft = 0;
      const unresolvedSelection = getter2(this.dataItem, this.valueField) !== getter2(this.value, this.valueField);
      const currentText = this.searchbar.value;
      const textHasChanged = currentText !== (getter2(this.dataItem, this.textField) || "");
      const valueHasChanged = unresolvedSelection || textHasChanged;
      const runInZone = valueHasChanged || hasObservers(this.onBlur) || hasObservers(this.close) || isUntouched(this.wrapper.nativeElement) || this.formControl?.updateOn === "blur";
      if (runInZone) {
        this.zone.run(() => {
          if (valueHasChanged) {
            const lowerCaseMatch = isPresent(this.focusedItemText) && this.focusedItemText.toLowerCase() === currentText.toLowerCase();
            if (lowerCaseMatch || unresolvedSelection) {
              this.selectionService.change(this.selectionService.focused);
            } else {
              this.change(currentText, true);
            }
          }
          this.inputBlur.emit();
          this.onTouchedCallback();
          this.togglePopup(false);
        });
      } else {
        this.togglePopup(false);
      }
    }
  }
  /**
   * @hidden
   */
  handleEscape() {
    this.isOpen ? this.togglePopup(false) : this.clearValue();
    const hasSelected = this.selectionService.selected.length > 0;
    if (!hasSelected) {
      this.suggestedText = null;
      this.selectionService.focused = -1;
    }
    hasObservers(this.escape) && this.escape.emit();
  }
  /**
   * @hidden
   */
  handleNavigationOpen() {
    this.restoreItemFocus();
    this.togglePopup(true);
  }
  /**
   * @hidden
   */
  searchBarChange(text) {
    const currentTextLength = this.text ? this.text.length : 0;
    this.backspacePressed = text.length < currentTextLength ? true : false;
    this.text = text;
    this.selectionService.resetSelection([]);
    this.togglePopup(true);
    this._filtering = true;
    if (this.filterable && this.filterText !== text) {
      this.filterText = text;
      this.filterChange.emit(text);
    } else {
      this.search(text);
    }
  }
  /**
   * @hidden
   */
  handleInputFocus() {
    this.handleFocus();
    if (hasObservers(this.inputFocus)) {
      this.zone.run(() => this.inputFocus.emit());
    }
  }
  /**
   * @hidden
   */
  pageChange(event) {
    const virtual = this.virtual;
    virtual.skip = event.skip;
  }
  change(candidate, isCustom = false) {
    if (isCustom) {
      this.customValueSubject.next(candidate);
    } else {
      this.valueSubject.next(candidate);
      if (this.isActionSheetExpanded) {
        this.togglePopup(false);
      }
    }
  }
  emitValueChange() {
    this.onChangeCallback(this.value);
    this.valueChange.emit(this.value);
    this._previousDataItem = this.dataItem;
  }
  /**
   * @hidden
   */
  selectClick() {
    if (!touchEnabled) {
      this.searchbar.focus();
      this.isFocused = true;
    }
    if (!this.isOpen) {
      this.restoreItemFocus();
    }
    this.togglePopup(!this.isOpen);
  }
  get listContainerClasses() {
    return ["k-list-container", "k-combobox-popup"].concat(this.popupSettings.popupClass || []);
  }
  /**
   * @hidden
   */
  preventEventDefault(event) {
    event.preventDefault();
  }
  get focusedItemText() {
    const focused = this.selectionService.focused;
    if (!isPresent(focused) || focused === -1) {
      return null;
    }
    const itemText = getter2(this.dataService.itemAt(focused), this.textField);
    return !isPresent(itemText) ? "" : itemText.toString();
  }
  /**
   * Focuses the first match when there's text in the input field, but no focused item.
   */
  restoreItemFocus() {
    const hasFocus = isPresent(this.selectionService.focused) && this.selectionService.focused > -1;
    if (!hasFocus && this.text && this.dataService.itemsCount) {
      if (this.filterable) {
        this.selectionService.focused = this.firstFocusableIndex(0);
      } else {
        this.search(this.text);
      }
    }
  }
  useSuggestion() {
    if (!(this.suggest && isPresent(this.searchbar.value))) {
      return false;
    }
    const focusedDataItem = this.dataService.itemAt(this.selectionService.focused);
    const focusedItemText = getter2(focusedDataItem, this.textField);
    if (!isPresent(focusedItemText)) {
      return false;
    }
    return this.searchbar.value.toLowerCase() === focusedItemText.toLowerCase();
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.popupElement.removeEventListener("mousedown", this.popupMouseDownHandler);
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  createPopup() {
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.popupTemplate,
      popupClass: this.listContainerClasses,
      positionMode: "absolute",
      anchorAlign: anchorPosition,
      popupAlign: popupPosition
    });
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.popupWidth;
    popupWrapper.addEventListener("mousedown", this.popupMouseDownHandler);
    popupWrapper.style.minWidth = min;
    popupWrapper.style.width = max;
    popupWrapper.style.height = this.popupHeight;
    popupWrapper.setAttribute("dir", this.direction);
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    this.popupRef.popupOpen.subscribe(() => {
      this.cdr.detectChanges();
      setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
      this.optionsList.scrollToItem(this.selectionService.focused);
      this.selectionService.focus(this.selectionService.focused);
      this.opened.emit();
    });
    this.popupRef.popupClose.subscribe(() => {
      this.closed.emit();
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.togglePopup(false));
  }
  _toggle(open) {
    this._open = open;
    this.destroyPopup();
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    }
    if (this._open) {
      this.windowSize = windowSize();
      this.createPopup();
    }
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  clearFilter() {
    if (!(this.filterable && this.filterText)) {
      return;
    }
    this.filterText = "";
    this.filterChange.emit(this.filterText);
  }
  subscribeTouchEvents() {
    if (!isDocumentAvailable() || !touchEnabled) {
      return;
    }
    this.zone.runOutsideAngular(() => (
      // Roll up ComboBox on iOS when tapped outside
      this.touchstartDisposeHandler = this.renderer.listen(document, "touchstart", (e) => {
        const target = e.target;
        const isInDropDown = inDropDown(this.wrapper, target, this.popupRef);
        if (this.isFocused && !isInDropDown) {
          this.zone.run(() => this.blur());
        } else if (this.isOpen && !isInDropDown) {
          this.zone.run(() => this.togglePopup(false));
        }
      })
    ));
  }
  attachSelectClickHandler() {
    const selectElement = this.select.nativeElement;
    const event = pointers ? "pointerdown" : "click";
    this.selectClickDisposeHandler = this.renderer.listen(selectElement, event, this.selectClick.bind(this));
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    }
  }
  findIndex(value, startFrom = 0) {
    let index;
    if (value && value.length && this.dataService.itemsCount) {
      index = this.dataService.findIndex(this.findIndexPredicate(value), startFrom);
    } else {
      index = -1;
    }
    return index;
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    this.actionSheetSearchBar.value = "";
    this.filterable && this.filterChange.emit("");
    this.searchbar.input.nativeElement.focus();
    this.closed.emit();
  }
  openActionSheet() {
    this.windowSize = windowSize();
    this.actionSheet.toggle(true);
    this.cdr.detectChanges();
    setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
    this.title = setActionSheetTitle(this.searchbar.input, this.title);
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.optionsList.scrollToItem(this.selectionService.focused);
    this.selectionService.focus(this.selectionService.focused);
    this.actionSheetSearchBar.focus();
  }
};
ComboBoxComponent.ɵfac = function ComboBoxComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ComboBoxComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
ComboBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: ComboBoxComponent,
  selectors: [["kendo-combobox"]],
  contentQueries: function ComboBoxComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FixedGroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedGroupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
    }
  },
  viewQuery: function ComboBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(SearchBarComponent, 7);
      ɵɵviewQuery(_c11, 5);
      ɵɵviewQuery(_c13, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchbar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.select = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function ComboBoxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-combobox", ctx.widgetClasses)("k-input", ctx.widgetClasses)("k-disabled", ctx.isDisabled)("k-loading", ctx.isLoading);
    }
  },
  inputs: {
    icon: "icon",
    svgIcon: "svgIcon",
    inputAttributes: "inputAttributes",
    showStickyHeader: "showStickyHeader",
    focusableId: "focusableId",
    allowCustom: "allowCustom",
    data: "data",
    value: "value",
    textField: "textField",
    valueField: "valueField",
    valuePrimitive: "valuePrimitive",
    valueNormalizer: "valueNormalizer",
    placeholder: "placeholder",
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle",
    popupSettings: "popupSettings",
    listHeight: "listHeight",
    loading: "loading",
    suggest: "suggest",
    clearButton: "clearButton",
    disabled: "disabled",
    itemDisabled: "itemDisabled",
    readonly: "readonly",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    filterable: "filterable",
    virtual: "virtual",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode"
  },
  outputs: {
    valueChange: "valueChange",
    selectionChange: "selectionChange",
    filterChange: "filterChange",
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    onFocus: "focus",
    onBlur: "blur",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur",
    escape: "escape"
  },
  exportAs: ["kendoComboBox"],
  standalone: true,
  features: [ɵɵProvidersFeature([COMBOBOX_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.combobox"
  }, {
    provide: FilterableComponent,
    useExisting: forwardRef(() => ComboBoxComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => ComboBoxComponent)
  }, {
    provide: MultiTabStop,
    useExisting: forwardRef(() => ComboBoxComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 20,
  vars: 37,
  consts: () => {
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_3 = goog.getMsg("NO DATA FOUND");
      i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.combobox.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_4 = goog.getMsg("clear");
      i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.combobox.clearTitle|The title of the clear button:clear`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_5 = goog.getMsg("Select");
      i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_5;
    } else {
      i18n_5 = $localize`:kendo.combobox.selectButtonText|The text set as aria-label on the select button:Select`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_6 = goog.getMsg("Options list");
      i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_6;
    } else {
      i18n_6 = $localize`:kendo.combobox.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    return [["select", ""], ["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["optionsList", ""], ["kendoComboBoxLocalizedMessages", "", "noDataText", i18n_3, "clearTitle", i18n_4, "selectButtonText", i18n_5, "popupLabel", i18n_6], ["kendoDropDownSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], ["kendoSearchbar", "", 3, "onNavigate", "valueChange", "onBlur", "onFocus", "click", "ariaExpanded", "ariaControls", "id", "isLoading", "isSuggestable", "isFilterable", "activeDescendant", "userInput", "suggestedText", "disabled", "readonly", "tabIndex", "isRequired", "placeholder", "inputAttributes"], ["class", "k-clear-value", "aria-hidden", "true", 3, "visibility", "kendoEventsOutsideAngular", "click", 4, "ngIf"], ["class", "k-i-loading k-input-loading-icon k-icon", 4, "ngIf"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], ["tabindex", "-1", "unselectable", "on", "type", "button", 1, "k-input-button", "k-button", "k-icon-button", 3, "keydown.enter", "ngClass", "kendoEventsOutsideAngular"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [3, "resize", 4, "ngIf"], [3, "closePopup", "textInputChange", "navigate", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "subtitle", "placeholder"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], ["aria-hidden", "true", 1, "k-clear-value", 3, "click", "kendoEventsOutsideAngular"], ["name", "x", 3, "svgIcon"], [1, "k-i-loading", "k-input-loading-icon", "k-icon"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [4, "ngTemplateOutlet"], [3, "resize"], [3, "pageChange", "size", "rounded", "id", "optionPrefix", "data", "textField", "valueField", "template", "groupTemplate", "fixedGroupTemplate", "height", "show", "virtual", "showStickyHeader"], ["class", "k-no-data", 4, "ngIf"], [3, "templateContext"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "ngIf"]];
  },
  template: function ComboBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementContainerStart(1, 6);
      ɵɵtwoWayListener("isFocusedChange", function ComboBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function ComboBoxComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function ComboBoxComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, ComboBoxComponent_span_2_Template, 2, 1, "span", 7)(3, ComboBoxComponent_kendo_separator_3_Template, 1, 0, "kendo-separator", 8);
      ɵɵelementStart(4, "input", 9);
      ɵɵlistener("onNavigate", function ComboBoxComponent_Template_input_onNavigate_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      })("valueChange", function ComboBoxComponent_Template_input_valueChange_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.searchBarChange($event));
      })("onBlur", function ComboBoxComponent_Template_input_onBlur_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputBlur());
      })("onFocus", function ComboBoxComponent_Template_input_onFocus_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputFocus());
      })("click", function ComboBoxComponent_Template_input_click_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleClick());
      });
      ɵɵelementEnd();
      ɵɵtemplate(5, ComboBoxComponent_span_5_Template, 2, 7, "span", 10)(6, ComboBoxComponent_span_6_Template, 1, 0, "span", 11)(7, ComboBoxComponent_kendo_separator_7_Template, 1, 0, "kendo-separator", 8)(8, ComboBoxComponent_span_8_Template, 2, 1, "span", 12);
      ɵɵelementStart(9, "button", 13, 0);
      ɵɵlistener("keydown.enter", function ComboBoxComponent_Template_button_keydown_enter_9_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView($event.stopImmediatePropagation());
      });
      ɵɵelement(11, "kendo-icon-wrapper", 14);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
      ɵɵtemplate(12, ComboBoxComponent_ng_template_12_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, ComboBoxComponent_kendo_resize_sensor_14_Template, 1, 0, "kendo-resize-sensor", 15);
      ɵɵelementContainer(15, null, 2);
      ɵɵelementStart(17, "responsive-renderer", 16);
      ɵɵlistener("closePopup", function ComboBoxComponent_Template_responsive_renderer_closePopup_17_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("textInputChange", function ComboBoxComponent_Template_responsive_renderer_textInputChange_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onAdaptiveTextBoxChange($event));
      })("navigate", function ComboBoxComponent_Template_responsive_renderer_navigate_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(18, ComboBoxComponent_ng_template_18_Template, 5, 17, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(19);
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ariaExpanded", ctx.isOpen)("ariaControls", ctx.ariaControls)("id", ctx.focusableId)("isLoading", ctx.loading)("isSuggestable", ctx.suggest)("isFilterable", ctx.filterable)("activeDescendant", ctx.activeDescendant)("userInput", ctx.text)("suggestedText", ctx.getSuggestion())("disabled", ctx.disabled)("readonly", ctx.readonly || ctx.isAdaptive)("tabIndex", ctx.tabIndex)("isRequired", ctx.isControlRequired)("placeholder", ctx.placeholder)("inputAttributes", ctx.inputAttributes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.clearButton && !ctx.loading && !ctx.disabled && !ctx.readonly && (ctx.text == null ? null : ctx.text.length));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate && ctx.suffixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.selectButtonClasses)("kendoEventsOutsideAngular", ɵɵpureFunction1(35, _c14, ctx.preventEventDefault));
      ɵɵattribute("aria-label", ctx.messageFor("selectButtonText"));
      ɵɵadvance(2);
      ɵɵproperty("name", ctx.icon || "caret-alt-down")("svgIcon", ctx.svgIcon || ctx.caretAltDownIcon);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
      ɵɵadvance(3);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", true)("subtitle", ctx.subtitle)("placeholder", ctx.placeholder);
    }
  },
  dependencies: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgClass, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoComboBox",
      providers: [COMBOBOX_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.combobox"
      }, {
        provide: FilterableComponent,
        useExisting: forwardRef(() => ComboBoxComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ComboBoxComponent)
      }, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => ComboBoxComponent)
      }],
      selector: "kendo-combobox",
      template: `
        <ng-container kendoComboBoxLocalizedMessages
            i18n-noDataText="kendo.combobox.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-clearTitle="kendo.combobox.clearTitle|The title of the clear button"
            clearTitle="clear"

            i18n-selectButtonText="kendo.combobox.selectButtonText|The text set as aria-label on the select button"
            selectButtonText="Select"

            i18n-popupLabel="kendo.combobox.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"
        >
        </ng-container>

        <ng-container
            kendoDropDownSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-separator>
            <input 
                kendoSearchbar
                [ariaExpanded]="isOpen"
                [ariaControls]="ariaControls"
                [id]="focusableId"
                [isLoading]="loading"
                [isSuggestable]="suggest"
                [isFilterable]="filterable"
                [activeDescendant]="activeDescendant"
                [userInput]="text"
                [suggestedText]="getSuggestion()"
                [disabled]="disabled"
                [readonly]="readonly || isAdaptive"
                [tabIndex]="tabIndex"
                [isRequired]="isControlRequired"
                [placeholder]="placeholder"
                [inputAttributes]="inputAttributes"
                (onNavigate)="handleNavigate($event)"
                (valueChange)="searchBarChange($event)"
                (onBlur)="handleInputBlur()"
                (onFocus)="handleInputFocus()"
                (click)="handleClick()"
            />
            <span
                *ngIf="clearButton && !loading && !disabled && !readonly && text?.length"
                class="k-clear-value"
                [style.visibility]="clearButtonVisiblity"
                aria-hidden="true"
                [attr.title]="messageFor('clearTitle')"
                (click)="clearValue($event)"
                [kendoEventsOutsideAngular]="{
                    mousedown: preventEventDefault
                }"
            >
                <kendo-icon-wrapper
                    name="x"
                    [svgIcon]="xIcon"
                >
                </kendo-icon-wrapper>
            </span>
            <span *ngIf="loading" class="k-i-loading k-input-loading-icon k-icon"></span>
            <kendo-separator *ngIf="suffixTemplate && suffixTemplate.showSeparator"></kendo-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
            <button
                #select
                tabindex="-1"
                unselectable="on"
                type="button"
                class="k-input-button k-button k-icon-button"
                [ngClass]="selectButtonClasses"
                [attr.aria-label]="messageFor('selectButtonText')"
                (keydown.enter)="$event.stopImmediatePropagation();"
                [kendoEventsOutsideAngular]="{
                    mousedown: preventEventDefault
                }"
            >
                <kendo-icon-wrapper
                    [name]="icon || 'caret-alt-down'"
                    innerCssClass="k-button-icon"
                    [svgIcon]="svgIcon || caretAltDownIcon"
                >
                </kendo-icon-wrapper>
            </button>
        </ng-container>

        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>
        <ng-container #container></ng-container>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="true"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (textInputChange)="onAdaptiveTextBoxChange($event)"
            (navigate)="handleNavigate($event)"
            [placeholder]="placeholder"
            >
        </responsive-renderer>
        <ng-template #sharedPopupActionSheetTemplate>
            <!--header template-->
            <ng-template *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate.templateRef
                }">
            </ng-template>
            <!--list-->
            <kendo-list
                #optionsList
                [size]="size"
                [rounded]="rounded"
                [id]="listBoxId"
                [optionPrefix]="optionPrefix"
                [data]="data"
                [textField]="textField"
                [valueField]="valueField"
                [template]="template"
                [groupTemplate]="groupTemplate"
                [fixedGroupTemplate]="fixedGroupTemplate"
                [height]="listHeight"
                [show]="isOpen"
                [virtual]="virtual"
                [showStickyHeader]="showStickyHeader"
                (pageChange)="pageChange($event)"
            >
            </kendo-list>
            <!--no-data template-->
            <div class="k-no-data" *ngIf="data.length === 0">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate ? noDataTemplate.templateRef : undefined
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
            <!--footer template-->
            <ng-template *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate.templateRef
                }">
            </ng-template>
        </ng-template>
  `,
      standalone: true,
      imports: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgClass, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, ListComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: PopupService
    }, {
      type: SelectionService
    }, {
      type: NavigationService
    }, {
      type: DisabledItemsService
    }, {
      type: DataService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    showStickyHeader: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    allowCustom: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    valuePrimitive: [{
      type: Input
    }],
    valueNormalizer: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    suggest: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    filterable: [{
      type: Input
    }],
    virtual: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: [GroupTemplateDirective, {
        static: false
      }]
    }],
    fixedGroupTemplate: [{
      type: ContentChild,
      args: [FixedGroupTemplateDirective, {
        static: false
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    searchbar: [{
      type: ViewChild,
      args: [SearchBarComponent, {
        static: true
      }]
    }],
    optionsList: [{
      type: ViewChild,
      args: ["optionsList", {
        static: false
      }]
    }],
    select: [{
      type: ViewChild,
      args: ["select", {
        static: true
      }]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-combobox"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ValueTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ValueTemplateDirective.ɵfac = function ValueTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ValueTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ValueTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ValueTemplateDirective,
  selectors: [["", "kendoDropDownListValueTemplate", ""], ["", "kendoDropDownTreeValueTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownListValueTemplate],[kendoDropDownTreeValueTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FilterInputDirective = class {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
  }
  ngOnChanges() {
    if (this.focused) {
      this.nextTick(() => this.element.nativeElement.focus());
    }
  }
  nextTick(fn) {
    this.zone.runOutsideAngular(() => setTimeout(fn));
  }
};
FilterInputDirective.ɵfac = function FilterInputDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FilterInputDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
FilterInputDirective.ɵdir = ɵɵdefineDirective({
  type: FilterInputDirective,
  selectors: [["", "filterInput", ""]],
  inputs: {
    focused: [0, "filterInput", "focused"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterInputDirective, [{
    type: Directive,
    args: [{
      selector: "[filterInput]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    focused: [{
      type: Input,
      args: ["filterInput"]
    }]
  });
})();
var DROPDOWNLIST_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownListComponent)
};
var DEFAULT_SIZE$3 = "medium";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_FILL_MODE$3 = "solid";
var DropDownListComponent = class {
  constructor(wrapper, localization, popupService, selectionService, navigationService, disabledItemsService, dataService, _zone, renderer, cdr, injector) {
    this.wrapper = wrapper;
    this.localization = localization;
    this.popupService = popupService;
    this.selectionService = selectionService;
    this.navigationService = navigationService;
    this.disabledItemsService = disabledItemsService;
    this.dataService = dataService;
    this._zone = _zone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.injector = injector;
    this.touchEnabled = touchEnabled;
    this.animationDuration = animationDuration;
    this.xIcon = xIcon;
    this.searchIcon = searchIcon;
    this.caretAltDownSVGIcon = caretAltDownIcon;
    this.showStickyHeader = true;
    this.adaptiveMode = "none";
    this.title = "";
    this.subtitle = "";
    this.windowSize = "large";
    this._listHeight = 200;
    this.readonly = false;
    this.filterable = false;
    this.ignoreCase = true;
    this.delay = 500;
    this.tabindex = 0;
    this.leftRightArrowsNavigation = true;
    this.valueChange = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.selectionChange = new EventEmitter();
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.hostClasses = true;
    this.focusableId = `k-${guid2()}`;
    this.role = "combobox";
    this.haspopup = "listbox";
    this.groupIndices = [];
    this.optionPrefix = `k-${guid2()}`;
    this.filterText = "";
    this.listBoxId = `k-${guid2()}`;
    this.subs = new Subscription();
    this._isFocused = false;
    this.onTouchedCallback = (_) => {
    };
    this.onChangeCallback = (_) => {
    };
    this.word = "";
    this.last = "";
    this.filterFocused = new EventEmitter();
    this.filterBlurred = new EventEmitter();
    this.hostElementFocused = new EventEmitter();
    this.hostElementBlurred = new EventEmitter();
    this._open = false;
    this._popupSettings = {
      animate: true
    };
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.data = [];
    this.subscribeEvents();
    this.subscribeTouchEvents();
    this.subscribeFocusEvents();
    this.popupMouseDownHandler = this.onMouseDown.bind(this);
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  get width() {
    const wrapperWidth = isDocumentAvailable() ? this.wrapper.nativeElement.offsetWidth : 0;
    const width = this.popupSettings.width || wrapperWidth;
    const minWidth = isNaN(wrapperWidth) ? wrapperWidth : `${wrapperWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get height() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  get widgetTabIndex() {
    if (this.disabled) {
      return void 0;
    }
    const providedTabIndex = Number(this.tabIndex);
    const defaultTabIndex = 0;
    return !isNaN(providedTabIndex) ? providedTabIndex : defaultTabIndex;
  }
  get ariaActivedescendant() {
    if (!isPresent(this.dataItem) || !this.isOpen) {
      return;
    }
    return this.optionPrefix + "-" + this.selectionService.focused;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * @hidden
   */
  onFilterChange(text) {
    if (this.filterable) {
      this.filterChange.emit(text);
    }
  }
  /**
   * @hidden
   */
  get ariaLive() {
    return this.filterable ? "polite" : "off";
  }
  /**
   * Sets the data of the DropDownList.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this.dataService.data = data || [];
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.setState();
  }
  get data() {
    const virtual = this.virtual;
    if (virtual) {
      const start = virtual.skip || 0;
      const end = start + virtual.pageSize;
      virtual.total = this.dataService.data.length;
      return this.dataService.data.slice(start, end);
    }
    return this.dataService.data;
  }
  /**
   * Sets the value of the DropDownList.
   * It can either be of the primitive (string, numbers) or of the complex (objects) type.
   * To define the type, use the `valuePrimitive` option.
   *
   * > All selected values which are not present in the source are ignored.
   */
  set value(newValue) {
    if (!isPresent(newValue)) {
      this._previousDataItem = void 0;
    }
    this._value = newValue;
    this.setState();
    this.cdr.markForCheck();
  }
  get value() {
    return this._value;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isActionSheetExpanded() {
    return this.actionSheet?.expanded;
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * Configures the popup of the DropDownList.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped. The `auto` mode is not supported when virtual scrolling is enabled.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * Defines a Boolean function that is executed for each data item in the component
   * ([see examples]({% slug disableditems_ddl %})). Determines whether the item will be disabled.
   */
  set itemDisabled(fn) {
    if (typeof fn !== "function") {
      throw new Error(`itemDisabled must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.disabledItemsService.itemDisabled = fn;
  }
  /**
   * Enables the [virtualization]({% slug virtualization_ddl %}) functionality.
   */
  set virtual(settings) {
    this._virtualSettings = normalizeVirtualizationSettings(settings);
  }
  get virtual() {
    return this._virtualSettings;
  }
  /**
   * Specifies the type of the selected value
   * ([more information and example]({% slug valuebinding_ddl %}#toc-primitive-values-from-object-fields)).
   * If set to `true`, the selected value has to be of a primitive value.
   */
  set valuePrimitive(isPrimitive) {
    this._valuePrimitive = isPrimitive;
  }
  get valuePrimitive() {
    if (!isPresent(this._valuePrimitive)) {
      return !isPresent(this.valueField);
    }
    return this._valuePrimitive;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$3;
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("picker", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("picker", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = rounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("picker", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("picker", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * @hidden
   */
  blurComponent(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    this.hostElementBlurred.emit();
  }
  /**
   * @hidden
   */
  blurFilterInput() {
    this.filterBlurred.emit();
  }
  /**
   * @hidden
   */
  focusComponent(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    this.hostElementFocused.emit();
    if (!this.isFocused) {
      this.isFocused = true;
      if (hasObservers(this.onFocus)) {
        this._zone.run(() => {
          this.onFocus.emit();
        });
      }
    }
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
    }
    if (this.isOpen && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.width;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  get isDisabledClass() {
    return this.disabled || null;
  }
  get isLoading() {
    return this.loading;
  }
  get dir() {
    return this.direction;
  }
  get hostTabIndex() {
    return this.widgetTabIndex;
  }
  get readonlyClass() {
    return this.readonly;
  }
  get readonlyAttr() {
    return this.readonly ? "" : null;
  }
  get isBusy() {
    return this.isLoading;
  }
  get hostAriaInvalid() {
    return this.formControl ? this.formControl?.invalid.toString() : null;
  }
  /**
   * @hidden
   */
  keydown(event, input) {
    if (input) {
      event.stopPropagation();
    }
    const firstIndex = isPresent(this.defaultItem) ? -1 : 0;
    const focused = isNaN(this.selectionService.focused) ? this.firstFocusableIndex(firstIndex) : this.selectionService.focused;
    let offset = 0;
    if (this.disabled || this.readonly) {
      return;
    }
    const isHomeEnd = event.keyCode === Keys.Home || event.keyCode === Keys.End;
    const isFilterFocused = this.filterable && this.isFocused && this.isOpen;
    if (isFilterFocused && isHomeEnd) {
      return;
    }
    const hasSelected = isPresent(this.selectionService.selected[0]);
    const focusedItemNotSelected = isPresent(this.selectionService.focused) && !this.selectionService.isSelected(this.selectionService.focused);
    if (!hasSelected || focusedItemNotSelected) {
      if (event.keyCode === Keys.ArrowDown || event.keyCode === Keys.ArrowRight && this.leftRightArrowsNavigation) {
        offset = -1;
      } else if (event.keyCode === Keys.ArrowUp || event.keyCode === Keys.ArrowLeft && this.leftRightArrowsNavigation) {
        offset = 1;
      }
    }
    const eventData = event;
    const action = this.navigationService.process({
      current: focused + offset,
      max: this.dataService.itemsCount - 1,
      min: this.defaultItem ? -1 : 0,
      originalEvent: eventData,
      openOnSpace: !this.isOpen,
      closeOnSpace: this.isOpen && !input && !(event.target instanceof HTMLInputElement)
    });
    const leftRightKeys = action === NavigationAction.Left || action === NavigationAction.Right && this.leftRightArrowsNavigation;
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && action !== NavigationAction.Backspace && action !== NavigationAction.Delete && action !== NavigationAction.PageDown && action !== NavigationAction.PageUp && action !== NavigationAction.SelectAll && !(leftRightKeys && this.filterable) && action !== NavigationAction.Enter) {
      eventData.preventDefault();
    }
    if (action === NavigationAction.Tab && this.isActionSheetExpanded) {
      this.togglePopup(false);
    }
  }
  /**
   * @hidden
   */
  keypress(event) {
    if (this.disabled || this.readonly || this.filterable) {
      return;
    }
    this.onKeyPress(event);
  }
  /**
   * @hidden
   */
  click() {
    if (!this.isActionSheetExpanded) {
      this.focus();
      this.togglePopup(!this.isOpen);
    }
  }
  set isFocused(isFocused) {
    this.renderer[isFocused ? "addClass" : "removeClass"](this.wrapper.nativeElement, "k-focus");
    this._isFocused = isFocused;
  }
  get isFocused() {
    return this._isFocused;
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", "false");
    if (this.ariaActivedescendant) {
      this.renderer.setAttribute(this.wrapper.nativeElement, "aria-activedescendant", this.ariaActivedescendant);
    }
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.detectChanges();
    }));
    this.assignAriaDescribedBy();
    this.setComponentClasses();
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  /**
   * @hidden
   * Used by the TextBoxContainer to determine if the component is empty.
   */
  isEmpty() {
    const value = this.value;
    return !(value === 0 || value === false || value || this.defaultItem);
  }
  /**
   * @hidden
   */
  onFilterFocus() {
    this.filterFocused.emit();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.destroyPopup();
    this.subs.unsubscribe();
    this.unSubscribeFocusEvents();
    if (this.touchstartDisposeHandler) {
      this.touchstartDisposeHandler();
    }
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    const virtual = this.virtual;
    const requestInitialData = virtual && changes["data"] && changes["data"].isFirstChange();
    if (requestInitialData) {
      this.pageChange({
        skip: 0,
        take: virtual.pageSize
      });
    }
    if (isChanged("defaultItem", changes, false)) {
      this.disabledItemsService.defaultItem = this.defaultItem;
    }
    if (anyChanged(["textField", "valueField", "valuePrimitive", "defaultItem", "itemDisabled"], changes, false)) {
      this.setState();
    }
  }
  /**
   * @hidden
   */
  ngAfterContentChecked() {
    this.verifySettings();
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * Focuses a specific item of the DropDownList based on a provided index.
   * If there is a default item it is positioned at index -1.
   * If null or invalid index is provided the focus will be removed.
   */
  focusItemAt(index) {
    const minIndex = isPresent(this.defaultItem) ? -1 : 0;
    const isInRange = minIndex <= index && index < this.data.length;
    if (isPresent(index) && isInRange && !this.disabledItemsService.isIndexDisabled(index)) {
      this.selectionService.focus(index);
    } else {
      this.selectionService.focus(null);
    }
  }
  /**
   * Focuses the DropDownList.
   */
  focus() {
    if (!this.disabled) {
      this.wrapper.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownList.
   */
  blur() {
    if (!this.disabled) {
      this.wrapper.nativeElement.blur();
      this.cdr.detectChanges();
    }
  }
  /**
   * Toggles the visibility of the popup or actionSheet
   * ([see example]({% slug openstate_ddl %}#toc-setting-the-initially-opened-component)).
   * If you use the `toggle` method to open or close the popup, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !this._open;
      this._toggle(shouldOpen);
    });
  }
  _toggle(open) {
    this._open = open;
    this.destroyPopup();
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    }
    if (this._open) {
      this.createPopup();
    }
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    if (isDisabled || sameState) {
      return;
    }
    const isDefaultPrevented = this.triggerPopupEvents(open);
    if (!isDefaultPrevented) {
      if (!open && this.filterable && this.isFocused) {
        this.focus();
      }
      this._toggle(open);
    }
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(this._open || this.isActionSheetExpanded);
  }
  /**
   * Resets the value of the DropDownList.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
   */
  reset() {
    this.value = void 0;
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value === null ? void 0 : value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  get selectButtonClasses() {
    return `${this.size ? getSizeClass("button", this.size) : ""} ${this.fillMode ? "k-button-" + this.fillMode : ""} ${this.fillMode ? "k-button-" + this.fillMode + "-base" : ""}`;
  }
  /**
   * @hidden
   */
  get filterInputClasses() {
    return `${this.size ? getSizeClass("input", this.size) : ""} ${this.fillMode ? "k-input-" + this.fillMode : ""} ${this.rounded ? getRoundedClass(this.rounded) : ""}`;
  }
  /**
   * @hidden
   */
  get optionLabelSizeClass() {
    return `${this.size ? getSizeClass("list", this.size) : ""}`;
  }
  /**
   * @hidden
   */
  get listContainerClasses() {
    const containerClasses = ["k-list-container", "k-dropdownlist-popup"];
    if (this.popupSettings.popupClass) {
      containerClasses.push(this.popupSettings.popupClass);
    }
    return containerClasses;
  }
  /**
   * @hidden
   */
  get isDisabledDefaultItem() {
    return this.disabledItemsService.isItemDisabled(this.defaultItem);
  }
  /**
   * @hidden
   */
  getText() {
    return this.text;
  }
  /**
   * @hidden
   */
  getDefaultItemText() {
    return getter2(this.defaultItem, this.textField);
  }
  createPopup() {
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      anchorAlign: anchorPosition,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.popupTemplate,
      popupAlign: popupPosition,
      popupClass: this.listContainerClasses,
      positionMode: "absolute"
    });
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", "true");
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-controls", this.listBoxId);
    this.setAriaactivedescendant();
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.width;
    popupWrapper.addEventListener("mousedown", this.popupMouseDownHandler);
    popupWrapper.style.minWidth = min;
    popupWrapper.style.width = max;
    popupWrapper.style.height = this.height;
    popupWrapper.setAttribute("dir", this.direction);
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    const listBox = popupWrapper.querySelector("ul.k-list-ul");
    const ariaLabel = this.wrapper.nativeElement.getAttribute("aria-labelledby");
    if (ariaLabel) {
      listBox.setAttribute("aria-labelledby", ariaLabel);
    }
    this.subs.add(this.popupRef.popupOpen.subscribe(() => {
      this.cdr.detectChanges();
      setListBoxAriaLabelledBy(this.optionsList, this.wrapper, this.renderer);
      this.optionsList.scrollToItem(this.selectionService.focused);
      this.selectionService.focus(this.selectionService.focused);
      this.opened.emit();
    }));
    this.subs.add(this.popupRef.popupClose.subscribe(() => {
      this.closed.emit();
    }));
    if (!this.filterable) {
      this.subs.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => this.togglePopup(false)));
    }
  }
  destroyPopup() {
    if (this.popupRef) {
      this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", "false");
      this.renderer.removeAttribute(this.wrapper.nativeElement, "aria-controls");
      this.renderer.removeAttribute(this.wrapper.nativeElement, "aria-activedescendant");
      this.popupRef.popupElement.removeEventListener("mousedown", this.popupMouseDownHandler);
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  updateState({
    dataItem,
    confirm = false
  }) {
    this.dataItem = dataItem;
    this.text = getter2(dataItem, this.textField);
    if (confirm) {
      this._previousDataItem = dataItem;
    }
  }
  clearState() {
    this.text = void 0;
    this.dataItem = void 0;
  }
  resetSelection(index) {
    const clear = !isPresent(index);
    this.selectionService.resetSelection(clear ? [] : [index]);
    this.selectionService.focused = clear ? this.firstFocusableIndex(0) : index;
  }
  onSelectionChange({
    dataItem
  }) {
    this.updateState({
      dataItem
    });
    this.selectionChange.emit(dataItem);
    this.assignAriaDescribedBy();
    this.setAriaactivedescendant();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.selectionService.onSelect.pipe(filter((_) => this.isOpen), map(this.itemFromEvent.bind(this))).subscribe(this.onSelectionChange.bind(this)));
    this.subs.add(merge(this.selectionService.onSelect.pipe(filter((_) => !this.isOpen)), this.selectionService.onChange).pipe(map(this.itemFromEvent.bind(this)), tap((_) => this.togglePopup(false))).subscribe(({
      dataItem,
      value: newValue,
      newSelection
    }) => {
      if (newSelection) {
        this.onSelectionChange({
          dataItem
        });
      }
      const shouldUsePrevious = !isPresent(dataItem) && this._previousDataItem;
      const shouldUseNewValue = newValue !== getter2(this.value, this.valueField);
      if (shouldUsePrevious) {
        this.updateState({
          dataItem: this._previousDataItem
        });
        this.resetSelection();
      } else if (shouldUseNewValue) {
        this.value = this.valuePrimitive ? newValue : dataItem;
        this._previousDataItem = dataItem;
        this.emitChange(this.value);
      }
      this.clearFilter();
    }));
    this.subs.add(merge(this.navigationService.up, this.navigationService.down, this.navigationService.left.pipe(filter(() => this.leftRightArrowsNavigation), skipWhile(() => this.filterable)), this.navigationService.right.pipe(filter(() => this.leftRightArrowsNavigation), skipWhile(() => this.filterable)), this.navigationService.home, this.navigationService.end).pipe(filter((event) => !isNaN(event.index))).subscribe((event) => this.selectionService.select(event.index)));
    this.subs.add(merge(this.navigationService.pagedown, this.navigationService.pageup).subscribe((event) => {
      if (this.isOpen) {
        event.originalEvent.preventDefault();
        this.optionsList.scrollWithOnePage(NavigationAction[event.originalEvent.code]);
      }
    }));
    this.subs.add(this.navigationService.open.subscribe(() => this.togglePopup(true)));
    this.subs.add(this.navigationService.close.subscribe(() => {
      this.togglePopup(false);
      this.focus();
    }));
    this.subs.add(this.navigationService.enter.pipe(tap((event) => event.originalEvent.preventDefault())).subscribe(this.handleEnter.bind(this)));
    this.subs.add(this.navigationService.esc.subscribe(this.handleEscape.bind(this)));
    this.subs.add(this.filterBlurred.pipe(concatMap(() => interval(10).pipe(take(1), takeUntil(this.hostElementFocused)))).subscribe(() => {
      this.hostElementBlurred.emit();
    }));
    this._zone.runOutsideAngular(() => {
      this.subs.add(merge(this.hostElementBlurred.pipe(concatMap(() => interval(10).pipe(take(1), takeUntil(this.filterFocused)))), this.navigationService.tab).pipe(tap((event) => event instanceof NavigationEvent && this.focus()), filter(() => this.isFocused)).subscribe(() => this.componentBlur()));
    });
  }
  setAriaactivedescendant() {
    if (this.ariaActivedescendant) {
      this.renderer.setAttribute(this.wrapper.nativeElement, "aria-activedescendant", this.ariaActivedescendant);
      const searchInput = this.popupRef.popupElement.querySelector('input[role="searchbox"]');
      if (searchInput) {
        this.renderer.setAttribute(searchInput, "aria-activedescendant", this.ariaActivedescendant);
      }
    }
  }
  subscribeTouchEvents() {
    if (!isDocumentAvailable() || !this.touchEnabled) {
      return;
    }
    this._zone.runOutsideAngular(() => (
      // Roll up DropDownList on iOS when tapped outside
      this.touchstartDisposeHandler = this.renderer.listen(document, "touchstart", (e) => {
        const target = e.target;
        if (this.isFocused && !inDropDown(this.wrapper, target, this.popupRef)) {
          this._zone.run(() => {
            if (this.filterFocused) {
              this.togglePopup(false);
            }
            this.blur();
          });
        }
      })
    ));
  }
  subscribeFocusEvents() {
    if (isDocumentAvailable()) {
      this.focusComponent = this.focusComponent.bind(this);
      this.blurComponent = this.blurComponent.bind(this);
      this._zone.runOutsideAngular(() => {
        const useCapture = true;
        document.addEventListener("focus", this.focusComponent, useCapture);
        document.addEventListener("blur", this.blurComponent, useCapture);
      });
    }
  }
  unSubscribeFocusEvents() {
    if (isDocumentAvailable()) {
      const useCapture = true;
      document.removeEventListener("focus", this.focusComponent, useCapture);
      document.removeEventListener("blur", this.blurComponent, useCapture);
    }
  }
  itemFromEvent(event) {
    const index = event.indices[0];
    let dataItem = this.dataService.itemAt(index);
    dataItem = isPresent(dataItem) ? dataItem : this.currentOrDefault(index);
    const value = getter2(dataItem, this.valueField);
    const newSelection = event.newSelection;
    return {
      dataItem,
      index,
      newSelection,
      value
    };
  }
  currentOrDefault(selectedIndex) {
    const defaultItemIndex = -1;
    if (isPresent(this.dataItem) && selectedIndex !== defaultItemIndex) {
      return this.dataItem;
    } else {
      return this.defaultItem;
    }
  }
  firstFocusableIndex(index) {
    const maxIndex = this.dataService.itemsCount - 1;
    if (this.disabledItemsService.isIndexDisabled(index)) {
      return index < maxIndex ? this.firstFocusableIndex(index + 1) : void 0;
    } else {
      return index;
    }
  }
  handleEnter() {
    if (this.isOpen) {
      this.selectionService.change(this.selectionService.focused);
      this.focus();
    } else {
      this.togglePopup(true);
    }
  }
  handleEscape() {
    if (isPresent(this.selectionService.selected[0])) {
      this.selectionService.change(this.selectionService.selected[0]);
    } else {
      this.togglePopup(false);
      this.clearFilter();
    }
    this.focus();
  }
  clearFilter() {
    if (!(this.filterable && this.filterText)) {
      return;
    }
    this.filterText = "";
    this.cdr.markForCheck();
    this.filterChange.emit(this.filterText);
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (this.defaultItem && this.valueField && typeof this.defaultItem !== "object") {
      throw new Error(DropDownListMessages.defaultItem);
    }
    if (this.valuePrimitive === true && isPresent(this.value) && typeof this.value === "object") {
      throw new Error(DropDownListMessages.primitive);
    }
    if (this.valuePrimitive === false && isPresent(this.value) && typeof this.value !== "object") {
      throw new Error(DropDownListMessages.object);
    }
    const valueOrText = !isPresent(this.valueField) !== !isPresent(this.textField);
    if (valueOrText) {
      throw new Error(DropDownListMessages.textAndValue);
    }
  }
  componentBlur() {
    if (!this.isActionSheetExpanded) {
      this.isFocused = false;
      const selectionPresent = isPresent(this.selectionService.selected[0]);
      const valueHasChanged = selectionPresent && getter2(this.value, this.valueField) !== getter2(this.dataService.itemAt(this.selectionService.selected[0]), this.valueField);
      if (valueHasChanged || hasObservers(this.close) || hasObservers(this.onBlur) || hasObservers(this.filterChange) || isUntouched(this.wrapper.nativeElement) || this.formControl?.updateOn === "blur") {
        this._zone.run(() => {
          if (valueHasChanged) {
            this.selectionService.change(this.selectionService.selected[0]);
          }
          this.togglePopup(false);
          this.clearFilter();
          this.onBlur.emit();
          this.onTouchedCallback();
        });
      } else {
        this.togglePopup(false);
        this.cdr.markForCheck();
      }
    }
  }
  /**
   * @hidden
   */
  onMouseDown(event) {
    const tagName = event.target.tagName.toLowerCase();
    if (tagName !== "input") {
      event.preventDefault();
    }
  }
  onKeyPress(event) {
    if (event.which === 0 || event.keyCode === Keys.Enter) {
      return;
    }
    let character = String.fromCharCode(event.charCode || event.keyCode);
    if (this.ignoreCase) {
      character = character.toLowerCase();
    }
    if (character === " ") {
      event.preventDefault();
    }
    this.word += character;
    this.last = character;
    this.search();
  }
  search() {
    clearTimeout(this.typingTimeout);
    if (!this.filterable) {
      this.typingTimeout = setTimeout(() => {
        this.word = "";
      }, this.delay);
      this.selectNext();
    }
  }
  selectNext() {
    let data = this.dataService.filter((item) => isPresent(item) && !item.header && !this.disabledItemsService.isItemDisabled(item)).map((item) => {
      if (this.dataService.grouped) {
        return {
          item: item.value,
          itemIndex: item.offsetIndex
        };
      }
      return {
        item,
        itemIndex: this.dataService.indexOf(item)
      };
    });
    const isInLoop = sameCharsOnly(this.word, this.last);
    let dataLength = data.length;
    const hasSelected = !isNaN(this.selectionService.selected[0]);
    let startIndex = !hasSelected ? 0 : this.selectionService.selected[0];
    let text, index, defaultItem;
    if (this.defaultItem && !this.disabledItemsService.isItemDisabled(this.defaultItem)) {
      defaultItem = {
        item: this.defaultItem,
        itemIndex: -1
      };
      dataLength += 1;
      startIndex += 1;
    }
    startIndex += isInLoop && hasSelected ? 1 : 0;
    data = shuffleData(data, startIndex, defaultItem);
    index = 0;
    for (; index < dataLength; index++) {
      text = getter2(data[index].item, this.textField);
      const loopMatch = Boolean(isInLoop && matchText(text, this.last, this.ignoreCase));
      const nextMatch = Boolean(matchText(text, this.word, this.ignoreCase));
      if (loopMatch || nextMatch) {
        index = data[index].itemIndex;
        break;
      }
    }
    if (index !== dataLength) {
      this.navigate(index);
    }
  }
  emitChange(value) {
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }
  navigate(index) {
    this.selectionService.select(index);
  }
  findDataItem({
    valueField,
    value
  }) {
    const result = {
      dataItem: null,
      index: -1
    };
    const prop = (dataItem) => getter2(dataItem, valueField);
    let comparer;
    if (this.dataService.grouped) {
      comparer = (element) => {
        return prop(element.value) === prop(value);
      };
    } else {
      comparer = (element) => {
        return prop(element) === prop(value);
      };
    }
    const index = this.dataService.findIndex(comparer);
    result.dataItem = this.dataService.itemAt(index);
    result.index = index;
    return result;
  }
  setState() {
    const value = this.value;
    const valueField = this.valueField;
    const textField = this.textField;
    const primitive = this.valuePrimitive;
    if (this.defaultItem) {
      const defaultValue = getter2(this.defaultItem, valueField);
      const currentValue = getter2(value, valueField);
      if (!isPresent(value) || currentValue === defaultValue) {
        this.updateState({
          dataItem: this.defaultItem,
          confirm: true
        });
        this.resetSelection(-1);
        if (this.filterable && this.filterText && this.dataService.itemsCount) {
          this.selectionService.focused = this.firstFocusableIndex(0);
        }
        return;
      }
    }
    const resolved = this.findDataItem({
      valueField,
      value
    });
    const ofSameType = !(primitive && textField);
    if (resolved.dataItem) {
      this.updateState({
        dataItem: resolved.dataItem,
        confirm: true
      });
      this.resetSelection(resolved.index);
    } else if (isPresent(value) && ofSameType) {
      this.updateState({
        dataItem: value
      });
      this.resetSelection();
    } else if (this._previousDataItem) {
      this.updateState({
        dataItem: this._previousDataItem
      });
      this.resetSelection();
    } else {
      this.clearState();
      this.resetSelection();
    }
  }
  /**
   * @hidden
   */
  handleFilter(event) {
    this.filterChange.emit(event.target.value);
  }
  /**
   * @hidden
   */
  handleClick() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.togglePopup(true);
    }
  }
  /**
   * @hidden
   */
  pageChange(event) {
    const virtual = this.virtual;
    virtual.skip = event.skip;
  }
  assignAriaDescribedBy() {
    const currentValue = this.wrapper.nativeElement.getAttribute("aria-describedby") || "";
    const trimmed = currentValue.replace(this.valueLabelId, "").trim();
    this.valueLabelId = `k-${guid2()}`;
    const newValue = `${this.valueLabelId} ${trimmed}`.trim();
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-describedby", newValue);
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("picker", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("picker", this.fillMode));
    }
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    if (this.filterable) {
      this.actionSheetSearchBar.value = "";
      this.filterChange.emit("");
    }
    this.closed.emit();
  }
  openActionSheet() {
    this.windowSize = windowSize();
    this.actionSheet.toggle(true);
    this.cdr.detectChanges();
    setListBoxAriaLabelledBy(this.optionsList, this.wrapper, this.renderer);
    this.title = setActionSheetTitle(this.wrapper, this.title);
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.optionsList.scrollToItem(this.selectionService.focused);
    this.selectionService.focus(this.selectionService.focused);
    if (this.filterable) {
      this.actionSheetSearchBar.focus();
    }
  }
};
DropDownListComponent.ɵfac = function DropDownListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector));
};
DropDownListComponent.ɵcmp = ɵɵdefineComponent({
  type: DropDownListComponent,
  selectors: [["kendo-dropdownlist"]],
  contentQueries: function DropDownListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FixedGroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, ValueTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedGroupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
    }
  },
  viewQuery: function DropDownListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(_c11, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsList = _t.first);
    }
  },
  hostVars: 19,
  hostBindings: function DropDownListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DropDownListComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keypress", function DropDownListComponent_keypress_HostBindingHandler($event) {
        return ctx.keypress($event);
      })("click", function DropDownListComponent_click_HostBindingHandler() {
        return ctx.click();
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabledClass)("id", ctx.focusableId)("dir", ctx.dir)("tabindex", ctx.hostTabIndex)("readonly", ctx.readonlyAttr)("aria-busy", ctx.isBusy)("role", ctx.role)("aria-haspopup", ctx.haspopup)("aria-invalid", ctx.hostAriaInvalid);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-dropdownlist", ctx.hostClasses)("k-picker", ctx.hostClasses)("k-disabled", ctx.isDisabledClass)("k-loading", ctx.isLoading);
    }
  },
  inputs: {
    customIconClass: "customIconClass",
    showStickyHeader: "showStickyHeader",
    icon: "icon",
    svgIcon: "svgIcon",
    loading: "loading",
    data: "data",
    value: "value",
    textField: "textField",
    valueField: "valueField",
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle",
    popupSettings: "popupSettings",
    listHeight: "listHeight",
    defaultItem: "defaultItem",
    disabled: "disabled",
    itemDisabled: "itemDisabled",
    readonly: "readonly",
    filterable: "filterable",
    virtual: "virtual",
    ignoreCase: "ignoreCase",
    delay: "delay",
    valuePrimitive: "valuePrimitive",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    leftRightArrowsNavigation: "leftRightArrowsNavigation",
    focusableId: [0, "id", "focusableId"]
  },
  outputs: {
    valueChange: "valueChange",
    filterChange: "filterChange",
    selectionChange: "selectionChange",
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    onFocus: "focus",
    onBlur: "blur"
  },
  exportAs: ["kendoDropDownList"],
  standalone: true,
  features: [ɵɵProvidersFeature([DROPDOWNLIST_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.dropdownlist"
  }, {
    provide: FilterableComponent,
    useExisting: forwardRef(() => DropDownListComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => DropDownListComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 16,
  vars: 18,
  consts: () => {
    let i18n_7;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_7 = goog.getMsg("NO DATA FOUND");
      i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_7;
    } else {
      i18n_7 = $localize`:kendo.dropdownlist.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_8 = goog.getMsg("Select");
      i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_8;
    } else {
      i18n_8 = $localize`:kendo.dropdownlist.selectButtonText|The text set as aria-label on the select button:Select`;
    }
    let i18n_9;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_9 = goog.getMsg("Filter");
      i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_9;
    } else {
      i18n_9 = $localize`:kendo.dropdownlist.filterInputLabel|The text set as aria-label on the filter input:Filter`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_10 = goog.getMsg("Options list");
      i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_10;
    } else {
      i18n_10 = $localize`:kendo.dropdownlist.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    return [["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["optionsList", ""], ["searchInput", ""], ["kendoDropDownListLocalizedMessages", "", "noDataText", i18n_7, "selectButtonText", i18n_8, "filterInputLabel", i18n_9, "popupLabel", i18n_10], ["unselectable", "on", 1, "k-input-inner", 3, "click", "id"], [1, "k-input-value-text"], [4, "ngIf"], [3, "ngIf"], ["class", "k-i-loading k-input-loading-icon k-icon", 4, "ngIf"], ["tabindex", "-1", "unselectable", "on", "type", "button", 1, "k-input-button", "k-button", "k-icon-button", 3, "ngClass", "kendoEventsOutsideAngular"], ["unselectable", "on", "innerCssClass", "k-button-icon", 3, "name", "customFontClass", "svgIcon"], [3, "resize", 4, "ngIf"], [3, "closePopup", "textInputChange", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "subtitle"], [3, "templateContext"], [1, "k-i-loading", "k-input-loading-icon", "k-icon"], [4, "ngTemplateOutlet"], [3, "resize"], [3, "pageChange", "id", "size", "rounded", "optionPrefix", "data", "textField", "valueField", "template", "groupTemplate", "fixedGroupTemplate", "height", "show", "virtual", "ariaLive", "showStickyHeader"], ["class", "k-no-data", 4, "ngIf"], [1, "k-list-filter", 3, "click"], [1, "k-searchbox", "k-input", 3, "ngClass"], ["innerCssClass", "k-input-icon", "name", "search", 1, "k-icon", 3, "svgIcon"], ["role", "searchbox", "aria-autocomplete", "list", "aria-haspopup", "listbox", "tabindex", "-1", 1, "k-input-inner", 3, "ngModelChange", "keydown", "input", "focus", "blur", "click", "filterInput", "dir", "ngModel"], [1, "k-list", 3, "ngClass"], ["kendoDropDownsSelectable", "", 1, "k-list-optionlabel", 3, "ngClass", "index"], [1, "k-no-data"], [3, "ngIf", "templateContext"]];
  },
  template: function DropDownListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementStart(1, "span", 6);
      ɵɵlistener("click", function DropDownListComponent_Template_span_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView($event.preventDefault());
      });
      ɵɵelementStart(2, "span", 7);
      ɵɵtemplate(3, DropDownListComponent_3_Template, 1, 4, null, 8)(4, DropDownListComponent_ng_template_4_Template, 1, 1, "ng-template", 9);
      ɵɵelementEnd()();
      ɵɵtemplate(5, DropDownListComponent_span_5_Template, 1, 0, "span", 10);
      ɵɵelementStart(6, "button", 11);
      ɵɵelement(7, "kendo-icon-wrapper", 12);
      ɵɵelementEnd();
      ɵɵtemplate(8, DropDownListComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(10, DropDownListComponent_kendo_resize_sensor_10_Template, 1, 0, "kendo-resize-sensor", 13);
      ɵɵelementContainer(11, null, 1);
      ɵɵelementStart(13, "responsive-renderer", 14);
      ɵɵlistener("closePopup", function DropDownListComponent_Template_responsive_renderer_closePopup_13_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("textInputChange", function DropDownListComponent_Template_responsive_renderer_textInputChange_13_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onFilterChange($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(14, DropDownListComponent_ng_template_14_Template, 8, 21, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r3 = ɵɵreference(15);
      ɵɵadvance();
      ɵɵproperty("id", ctx.valueLabelId);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.valueTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.valueTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.selectButtonClasses)("kendoEventsOutsideAngular", ɵɵpureFunction1(16, _c14, ctx.onMouseDown));
      ɵɵattribute("aria-label", ctx.messageFor("selectButtonText"));
      ɵɵadvance();
      ɵɵproperty("name", ctx.icon || "caret-alt-down")("customFontClass", ctx.customIconClass)("svgIcon", ctx.svgIcon || ctx.caretAltDownSVGIcon);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
      ɵɵadvance(3);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r3)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", ctx.filterable)("subtitle", ctx.subtitle);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgIf, TemplateContextDirective, NgClass, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ResponsiveRendererComponent, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FilterInputDirective, FormsModule, NgModel, SelectableDirective, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownListComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownList",
      providers: [DROPDOWNLIST_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownlist"
      }, {
        provide: FilterableComponent,
        useExisting: forwardRef(() => DropDownListComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => DropDownListComponent)
      }],
      selector: "kendo-dropdownlist",
      template: `
        <ng-container kendoDropDownListLocalizedMessages
            i18n-noDataText="kendo.dropdownlist.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-selectButtonText="kendo.dropdownlist.selectButtonText|The text set as aria-label on the select button"
            selectButtonText="Select"

            i18n-filterInputLabel="kendo.dropdownlist.filterInputLabel|The text set as aria-label on the filter input"
            filterInputLabel="Filter"

            i18n-popupLabel="kendo.dropdownlist.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"
        >
        </ng-container>
        <span class="k-input-inner" unselectable="on" [id]="valueLabelId" (click)="$event.preventDefault()">
            <span class="k-input-value-text">
                <ng-template *ngIf="valueTemplate"
                    [templateContext]="{
                        templateRef: valueTemplate.templateRef,
                        $implicit: dataItem
                    }">
                </ng-template>
                <ng-template [ngIf]="!valueTemplate">{{ getText() }}</ng-template>
            </span>
        </span>
        <span *ngIf="loading" class="k-i-loading k-input-loading-icon k-icon"></span>
        <button
            tabindex="-1"
            unselectable="on"
            type="button"
            class="k-input-button k-button k-icon-button"
            [ngClass]="selectButtonClasses"
            [attr.aria-label]="messageFor('selectButtonText')"
            [kendoEventsOutsideAngular]="{
                mousedown: onMouseDown
            }"
        >
            <kendo-icon-wrapper
                unselectable="on"
                [name]="icon || 'caret-alt-down'"
                innerCssClass="k-button-icon"
                [customFontClass]="customIconClass"
                [svgIcon]="svgIcon || caretAltDownSVGIcon"
            >
            </kendo-icon-wrapper>
        </button>
        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>
        <ng-container #container></ng-container>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="filterable"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (textInputChange)="onFilterChange($event)"
            >
        </responsive-renderer>

        <ng-template #sharedPopupActionSheetTemplate>
            <!--filterable-->
            <ng-template [ngIf]="filterable && !isActionSheetExpanded">
                <div class="k-list-filter" (click)="$event.stopImmediatePropagation()">
                    <span
                        class="k-searchbox k-input"
                        [ngClass]="filterInputClasses">
                        <kendo-icon-wrapper
                            class="k-icon"
                            innerCssClass="k-input-icon"
                            name="search"
                            [svgIcon]="searchIcon">
                        </kendo-icon-wrapper>
                        <input
                            #searchInput
                            role="searchbox"
                            aria-autocomplete="list"
                            aria-haspopup="listbox"
                            [attr.aria-controls]="listBoxId"
                            tabindex="-1"
                            [filterInput]="isFocused && !touchEnabled"
                            [attr.aria-label]="messageFor('filterInputLabel')"
                            [dir]="direction"
                            [(ngModel)]="filterText"
                            class="k-input-inner"
                            (keydown)="keydown($event, searchInput)"
                            (input)="handleFilter($event)"
                            (focus)="onFilterFocus()"
                            (blur)="blurFilterInput()"
                            (click)="handleClick()" />
                    </span>
                </div>
            </ng-template>
            <!--default item-->
            <ng-template [ngIf]="defaultItem && !itemTemplate">
                <div
                    class="k-list"
                    [ngClass]="optionLabelSizeClass"
                >
                    <div class="k-list-optionlabel" [ngClass]="{ 'k-disabled': isDisabledDefaultItem }" kendoDropDownsSelectable [index]="-1">
                        {{ getDefaultItemText() }}
                    </div>
                </div>
            </ng-template>
            <ng-template [ngIf]="defaultItem && itemTemplate">
                <div
                    class="k-list"
                    [ngClass]="optionLabelSizeClass"
                >
                    <div class="k-list-optionlabel" [ngClass]="{ 'k-disabled': isDisabledDefaultItem }" kendoDropDownsSelectable [index]="-1">
                        <ng-template
                            [templateContext]="{
                                templateRef: itemTemplate.templateRef,
                                $implicit: defaultItem
                            }">
                        </ng-template>
                    </div>
                </div>
            </ng-template>
            <!--header template-->
            <ng-template *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate.templateRef
                }">
            </ng-template>
            <!--list-->           
            <kendo-list
                #optionsList
                [id]="listBoxId"
                [size]="size"
                [rounded]="rounded"
                [optionPrefix]="optionPrefix"
                [data]="data"
                [textField]="textField"
                [valueField]="valueField"
                [template]="itemTemplate"
                [groupTemplate]="groupTemplate"
                [fixedGroupTemplate]="fixedGroupTemplate"
                [height]="listHeight"
                [show]="isOpen"
                [virtual]="virtual"
                [ariaLive]="ariaLive"
                [showStickyHeader]="showStickyHeader"
                (pageChange)="pageChange($event)">
            </kendo-list>
            <!--no-data template-->
            <div class="k-no-data" *ngIf="data.length === 0">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate ? noDataTemplate.templateRef : undefined
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
            <!--footer template-->
            <ng-template *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate.templateRef
                }">
            </ng-template>
        </ng-template>
  `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgIf, TemplateContextDirective, NgClass, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ResponsiveRendererComponent, ReactiveFormsModule, FilterInputDirective, FormsModule, SelectableDirective, ListComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: PopupService
    }, {
      type: SelectionService
    }, {
      type: NavigationService
    }, {
      type: DisabledItemsService
    }, {
      type: DataService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: Injector
    }];
  }, {
    customIconClass: [{
      type: Input
    }],
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    showStickyHeader: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    defaultItem: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    filterable: [{
      type: Input
    }],
    virtual: [{
      type: Input
    }],
    ignoreCase: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    valuePrimitive: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    leftRightArrowsNavigation: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: [GroupTemplateDirective, {
        static: false
      }]
    }],
    fixedGroupTemplate: [{
      type: ContentChild,
      args: [FixedGroupTemplateDirective, {
        static: false
      }]
    }],
    valueTemplate: [{
      type: ContentChild,
      args: [ValueTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    optionsList: [{
      type: ViewChild,
      args: ["optionsList", {
        static: false
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-dropdownlist"]
    }, {
      type: HostBinding,
      args: ["class.k-picker"]
    }],
    isDisabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }],
    focusableId: [{
      type: Input,
      args: ["id"]
    }, {
      type: HostBinding,
      args: ["attr.id"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    readonlyClass: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    readonlyAttr: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    isBusy: [{
      type: HostBinding,
      args: ["attr.aria-busy"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    haspopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    hostAriaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keypress: [{
      type: HostListener,
      args: ["keypress", ["$event"]]
    }],
    click: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CustomItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
CustomItemTemplateDirective.ɵfac = function CustomItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CustomItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
CustomItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: CustomItemTemplateDirective,
  selectors: [["", "kendoMultiSelectCustomItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectCustomItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var TagTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
TagTemplateDirective.ɵfac = function TagTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TagTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
TagTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: TagTemplateDirective,
  selectors: [["", "kendoMultiSelectTagTemplate", ""], ["", "kendoMultiSelectTreeTagTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectTagTemplate],[kendoMultiSelectTreeTagTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var GroupTagTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
GroupTagTemplateDirective.ɵfac = function GroupTagTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GroupTagTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
GroupTagTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: GroupTagTemplateDirective,
  selectors: [["", "kendoMultiSelectGroupTagTemplate", ""], ["", "kendoMultiSelectTreeGroupTagTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupTagTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectGroupTagTemplate],[kendoMultiSelectTreeGroupTagTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var RemoveTagEvent = class extends PreventableEvent {
  /**
   * Constructs the event arguments for the `remove` event.
   * @param dataItem - The data item or an array of data items that will be removed.
   */
  constructor(dataItem) {
    super();
    this.dataItem = dataItem;
  }
};
var normalizeCheckboxesSettings = (settings) => {
  if (isObject(settings)) {
    const defaultSettings = {
      enabled: true,
      checkOnClick: true
    };
    return Object.assign({}, defaultSettings, settings);
  }
  return {
    enabled: Boolean(settings),
    checkOnClick: true
  };
};
var TagListComponent = class {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.xCircleIcon = xCircleIcon;
    this.rounded = "medium";
    this.fillMode = "solid";
    this.disabledIndices = /* @__PURE__ */ new Set();
    this.removeTag = new EventEmitter();
    this.hostClasses = true;
    this.taglistRole = "listbox";
    this.multiselectable = true;
    this._size = "medium";
  }
  set size(size) {
    this.renderer.removeClass(this.hostElement.nativeElement, getSizeClass("chip-list", this.size));
    if (size) {
      this.renderer.addClass(this.hostElement.nativeElement, getSizeClass("chip-list", size));
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
  get hostId() {
    return this.id;
  }
  tagProp(tag, prop, index) {
    const propField = prop && this.getPropField(tag, prop, index);
    return getter2(tag, propField);
  }
  isTagDisabled(tag, positionIndex) {
    if (this.isGroupTag(tag)) {
      return tag.every((_tag, index) => this.disabledIndices.has(index + positionIndex));
    }
    return this.disabledIndices.has(positionIndex);
  }
  deleteTag(event, tag, index) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!this.disabled && event.which === 1) {
      this.removeTag.emit({
        tag,
        index
      });
    }
  }
  itemId(tag, index) {
    if (tag) {
      return this.tagPrefix + "-" + index;
    }
  }
  isGroupTag(tag) {
    return tag instanceof Array;
  }
  tagAriaHidden(index) {
    return isPresent(this.focused) && this.focused !== index;
  }
  getPropField(tag, prop, index) {
    const fieldsCount = prop.length - 1;
    if (typeof prop === "string") {
      return prop;
    } else if (this.valueDepth) {
      const depth = this.valueDepth[index];
      return fieldsCount < depth ? prop[fieldsCount] : prop[depth];
    } else {
      return prop.find((item) => item in tag);
    }
  }
};
TagListComponent.ɵfac = function TagListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TagListComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
TagListComponent.ɵcmp = ɵɵdefineComponent({
  type: TagListComponent,
  selectors: [["kendo-taglist"]],
  hostVars: 7,
  hostBindings: function TagListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.hostId)("role", ctx.taglistRole)("aria-multiselectable", ctx.multiselectable);
      ɵɵclassProp("k-chip-list", ctx.hostClasses)("k-selection-multiple", ctx.hostClasses);
    }
  },
  inputs: {
    tags: "tags",
    textField: "textField",
    valueField: "valueField",
    valueDepth: "valueDepth",
    focused: "focused",
    template: "template",
    groupTemplate: "groupTemplate",
    disabled: "disabled",
    tagPrefix: "tagPrefix",
    id: "id",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    disabledIndices: "disabledIndices"
  },
  outputs: {
    removeTag: "removeTag"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c16,
  decls: 2,
  vars: 1,
  consts: [["groupTag", ""], ["singleTag", ""], ["class", "k-chip", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "k-chip", 3, "ngClass"], [1, "k-chip-content"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "k-chip-actions"], ["aria-label", "delete", 1, "k-chip-action", "k-chip-remove-action"], ["name", "x-circle", 3, "mousedown", "svgIcon"], [1, "k-chip-label", "k-text-ellipsis"], [4, "ngIf"], [3, "ngIf"], [3, "templateContext"]],
  template: function TagListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TagListComponent_div_0_Template, 10, 22, "div", 2);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.tags);
    }
  },
  dependencies: [NgForOf, NgClass, NgIf, TemplateContextDirective, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-taglist",
      template: `
        <div
            *ngFor="let tag of tags; let index = index;"
            [attr.id]="itemId(tag, index)"
            [attr.aria-selected]="true"
            [attr.role]="'option'"
            class="k-chip"
            [ngClass]="{
                'k-focus': index === focused,
                'k-disabled': isTagDisabled(tag, index),
                'k-chip-sm': size === 'small',
                'k-chip-md': size === 'medium',
                'k-chip-lg': size === 'large',
                'k-rounded-sm': rounded === 'small',
                'k-rounded-md': rounded === 'medium',
                'k-rounded-lg': rounded === 'large',
                'k-rounded-full': rounded === 'full',
                'k-chip-solid k-chip-solid-base': fillMode === 'solid',
                'k-chip-flat k-chip-flat-base': fillMode === 'flat',
                'k-chip-outline k-chip-outline-base': fillMode === 'outline'
            }"
        >
            <span class="k-chip-content">
                <ng-template *ngIf="isGroupTag(tag); then groupTag else singleTag"></ng-template>
                <ng-template #groupTag>
                    <span class="k-chip-label k-text-ellipsis">
                        <ng-template *ngIf="groupTemplate"
                            [templateContext]="{
                            templateRef: groupTemplate.templateRef,
                            $implicit: tag
                        }">
                        </ng-template>
                        <ng-template [ngIf]="!groupTemplate">{{ tag.length }} {{ tag.length === 1 ? 'item' : 'items' }} selected</ng-template>
                    </span>
                </ng-template>
                <ng-template #singleTag>
                    <span class="k-chip-label k-text-ellipsis">
                        <ng-template *ngIf="template"
                            [templateContext]="{
                            templateRef: template.templateRef,
                            $implicit: tag
                        }">
                        </ng-template>
                        <ng-template [ngIf]="!template">{{ tagProp(tag, textField, index) }}</ng-template>
                    </span>
                </ng-template>
            </span>
            <span class="k-chip-actions">
                <span aria-label="delete" [attr.aria-hidden]="index !== focused" class="k-chip-action k-chip-remove-action">
                    <kendo-icon-wrapper
                        (mousedown)="deleteTag($event, tag, index)"
                        name="x-circle"
                        [svgIcon]="xCircleIcon"
                    >
                    </kendo-icon-wrapper>
                </span>
            </span>
        </div>
        <ng-content></ng-content>
  `,
      standalone: true,
      imports: [NgForOf, NgClass, NgIf, TemplateContextDirective, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    tags: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    valueDepth: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    groupTemplate: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tagPrefix: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    disabledIndices: [{
      type: Input
    }],
    removeTag: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }, {
      type: HostBinding,
      args: ["class.k-selection-multiple"]
    }],
    hostId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    taglistRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    multiselectable: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }]
  });
})();
var MULTISELECT_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectComponent)
};
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_FILL_MODE$2 = "solid";
var MultiSelectComponent = class {
  constructor(wrapper, localization, popupService, dataService, selectionService, navigationService, disabledItemsService, cdr, differs, renderer, _zone, injector, hostElement) {
    this.wrapper = wrapper;
    this.localization = localization;
    this.popupService = popupService;
    this.dataService = dataService;
    this.selectionService = selectionService;
    this.navigationService = navigationService;
    this.disabledItemsService = disabledItemsService;
    this.cdr = cdr;
    this.differs = differs;
    this.renderer = renderer;
    this._zone = _zone;
    this.injector = injector;
    this.hostElement = hostElement;
    this.animationDuration = animationDuration;
    this.xIcon = xIcon;
    this.plusIcon = plusIcon;
    this.listBoxId = `k-${guid2()}`;
    this.tagListId = `k-${guid2()}`;
    this.tagPrefix = "tag-" + guid2();
    this.optionPrefix = "option-" + guid2();
    this.focusedTagIndex = void 0;
    this.showStickyHeader = true;
    this.focusableId = `k-${guid2()}`;
    this.autoClose = true;
    this.tabindex = 0;
    this.adaptiveMode = "none";
    this.title = "";
    this.disabled = false;
    this.readonly = false;
    this.filterable = false;
    this._listHeight = 200;
    this.clearButton = true;
    this.tagMapper = (tags) => tags || [];
    this.allowCustom = false;
    this.valueNormalizer = (text) => text.pipe(map((userInput) => {
      const comparer = (item) => typeof item === "string" && userInput.toLowerCase() === item.toLowerCase();
      const matchingValue = this.value.find(comparer);
      if (matchingValue) {
        return matchingValue;
      }
      const matchingItem = this.dataService.find(comparer);
      return matchingItem ? matchingItem : userInput;
    }));
    this.filterChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.removeTag = new EventEmitter();
    this.hostClasses = true;
    this.windowSize = "large";
    this.initialized = false;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._valueHolder = [];
    this.onChangeCallback = (_) => {
    };
    this.onTouchedCallback = (_) => {
    };
    this._placeholder = "";
    this._open = false;
    this._value = [];
    this._popupSettings = {
      animate: true
    };
    this._checkboxes = {
      enabled: false
    };
    this._isFocused = false;
    this.selectedDataItems = [];
    this.customValueSubject = new Subject();
    this.subs = new Subscription();
    validatePackage(packageMetadata);
    this.popupMouseDownHandler = this.onMouseDown.bind(this);
    this.data = [];
    this.direction = this.localization.rtl ? "rtl" : "ltr";
    this.subscribeEvents();
    this.subscribeTouchEvents();
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    return this.isOpen ? this.listBoxId : void 0;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl);
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * Focuses a specific item of the MultiSelect based on a provided index.
   * If there is a custom item it is positioned at index -1.
   * If null or invalid index is provided the focus will be removed.
   */
  focusItemAt(index) {
    const minIndex = this.allowCustom ? -1 : 0;
    const isInRange = minIndex <= 0 && index < this.data.length;
    if (isPresent(index) && isInRange && !this.disabledItemsService.isIndexDisabled(index)) {
      this.selectionService.focus(index);
    } else {
      this.selectionService.focus(null);
    }
  }
  /**
   * Focuses the MultiSelect.
   */
  focus() {
    if (!this.disabled) {
      this.searchbar.focus();
    }
  }
  /**
   * @hidden
   */
  handleInputFocus() {
    this.handleFocus();
    if (hasObservers(this.inputFocus)) {
      this._zone.run(() => {
        this.inputFocus.emit();
      });
    }
  }
  /**
   * @hidden
   */
  onAdaptiveTextBoxChange(text) {
    if (this.filterable) {
      this.filterChange.emit(text);
      return;
    }
    this.searchTextAndFocus(text);
  }
  /**
   * Blurs the MultiSelect.
   */
  blur() {
    if (!this.disabled) {
      this.searchbar.blur();
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this._zone.run(() => {
      if (!this.isFocused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    if (!this.isActionSheetExpanded) {
      if (!this.isFocused) {
        return;
      }
      this.isFocused = false;
      if (hasObservers(this.onBlur) || hasObservers(this.filterChange) || hasObservers(this.close) || isUntouched(this.wrapper.nativeElement)) {
        this._zone.run(() => {
          this.closePopup();
          if (!(this.isOpen && this.allowCustom)) {
            this.clearFilter();
          }
          this.onBlur.emit();
          this.onTouchedCallback();
        });
      } else {
        if (!this.allowCustom) {
          this.clearFilter();
        }
        this.closePopup();
      }
    }
  }
  /**
   * @hidden
   */
  handleInputBlur() {
    if (!this.isActionSheetExpanded) {
      if (!this.isFocused) {
        return;
      }
      if (hasObservers(this.inputBlur) || hasObservers(this.filterChange) || hasObservers(this.close) || isUntouched(this.wrapper.nativeElement) || this.formControl?.updateOn === "blur") {
        this._zone.run(() => {
          this.closePopup();
          if (!(this.isOpen && this.allowCustom)) {
            this.clearFilter();
          }
          this.inputBlur.emit();
          this.onTouchedCallback();
        });
      } else {
        if (!this.allowCustom) {
          this.clearFilter();
        }
        this.closePopup();
      }
    }
  }
  /**
   * @hidden
   */
  onMouseDown(event) {
    event.preventDefault();
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
      this.cdr.detectChanges();
    }
    if (this.isOpen && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.width;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * Sets the data of the MultiSelect.
   *
   * > The data has to be provided in an array-like list of items.
   */
  set data(data) {
    this.dataService.data = data || [];
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    if (this.initialized) {
      this.setState(this.value);
    }
  }
  get data() {
    const virtual = this.virtual;
    if (virtual) {
      const start = virtual.skip || 0;
      const end = start + virtual.pageSize;
      virtual.total = this.dataService.data.length;
      return this.dataService.data.slice(start, end);
    }
    return this.dataService.data;
  }
  /**
   * Sets the value of the MultiSelect. It can be either of the primitive (string, numbers) or of the complex (objects) type.
   * To define the type, use the `valuePrimitive` option.
   *
   * > All selected values which are not present in the source are ignored.
   */
  set value(values) {
    this._value = values ? values : [];
    if (!this.differ && this.value) {
      this.differ = this.differs.find(this.value).create();
    }
    this.valueChangeDetected = true;
    if (this.initialized) {
      this.setState(this.value);
    }
  }
  get value() {
    return this._value;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The hint which is displayed when the component is empty.
   * When the values are selected, it disappears.
   */
  set placeholder(text) {
    this._placeholder = text || "";
  }
  get placeholder() {
    return this.selectedDataItems.length ? "" : this._placeholder;
  }
  /**
   * Sets the subtitle of the ActionSheet that is rendered instead of the Popup when using small screen devices.
   * By default the ActionSheet subtitle uses the text provided for the `placeholder` of the AutoComplete.
  */
  set subtitle(_subtitle) {
    this._subtitle = _subtitle;
  }
  get subtitle() {
    return this._subtitle || this.placeholder;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * Defines a Boolean function that is executed for each data item in the component
   * ([see examples]({% slug disableditems_multiselect %})). Determines whether the item will be disabled.
   */
  set itemDisabled(fn) {
    if (typeof fn !== "function") {
      throw new Error(`itemDisabled must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.disabledItemsService.itemDisabled = fn;
  }
  /**
   * Specifies whether checkboxes will be rendered before each item in the popup list.
   */
  set checkboxes(settings) {
    this._checkboxes = normalizeCheckboxesSettings(settings);
  }
  get checkboxes() {
    return this._checkboxes;
  }
  /**
   * Enables the [virtualization]({% slug virtualization_multiselect %}) functionality.
   */
  set virtual(settings) {
    this._virtualSettings = normalizeVirtualizationSettings(settings);
  }
  get virtual() {
    return this._virtualSettings;
  }
  /**
   * Configures the popup of the MultiSelect.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped. The `auto` mode is not supported when virtual scrolling is enabled.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * Specifies the type of the selected value.
   * If set to `true`, the selected value has to be of the primitive type
   * ([more information and example]({% slug valuebinding_multiselect %}#toc-primitive-values-from-object-fields)).
   */
  set valuePrimitive(isPrimitive) {
    this._valuePrimitive = isPrimitive;
  }
  get valuePrimitive() {
    if (!isPresent(this._valuePrimitive)) {
      return !isPresent(this.valueField);
    }
    return this._valuePrimitive;
  }
  get dir() {
    return this.direction;
  }
  get disabledClass() {
    return this.disabled;
  }
  get isLoading() {
    return this.loading;
  }
  /**
   * @hidden
   */
  get isActionSheetExpanded() {
    return this.actionSheet?.expanded;
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  get listContainerClasses() {
    const containerClasses = ["k-list-container", "k-multiselect-popup"];
    if (this.popupSettings.popupClass) {
      containerClasses.push(this.popupSettings.popupClass);
    }
    return containerClasses;
  }
  /**
   * @hidden
   */
  get customItemSizeClass() {
    return `${this.size ? getSizeClass("list", this.size) : ""}`;
  }
  get width() {
    let wrapperOffsetWidth = 0;
    if (isDocumentAvailable()) {
      wrapperOffsetWidth = this.wrapper.nativeElement.offsetWidth;
    }
    const width = this.popupSettings.width || wrapperOffsetWidth;
    const minWidth = isNaN(wrapperOffsetWidth) ? wrapperOffsetWidth : `${wrapperOffsetWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get height() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  get activeDescendant() {
    const focusedTagIndex = this.focusedTagIndex;
    const focusedListIndex = this.selectionService.focused;
    let prefix;
    let focusedIndex;
    if (isPresent(focusedTagIndex) && !this.isOpen) {
      focusedIndex = focusedTagIndex;
      prefix = this.tagPrefix;
    } else if (isPresent(focusedListIndex) && focusedListIndex !== -1 && this.isOpen) {
      focusedIndex = focusedListIndex;
      prefix = this.optionPrefix;
    } else {
      return null;
    }
    return prefix + "-" + focusedIndex;
  }
  get clearButtonVisiblity() {
    if (touchEnabled) {
      return "visible";
    }
  }
  /**
   * @hidden
   */
  applyValue() {
    this.value = this._valueHolder;
    this._valueHolder = [];
    this.emitValueChange();
    this.togglePopup(false);
  }
  /**
   * @hidden
   */
  cancelValue() {
    this._valueHolder = [];
    this.togglePopup(false);
  }
  /**
   * @hidden
   */
  verifySettings() {
    if (!isDevMode() || this.value.length === 0) {
      return;
    }
    if (!isArray(this.value)) {
      throw new Error(MultiselectMessages.array);
    }
    if (this.valuePrimitive === true && isObjectArray(this.value)) {
      throw new Error(MultiselectMessages.primitive);
    }
    if (this.valuePrimitive === false && !isObjectArray(this.value)) {
      throw new Error(MultiselectMessages.object);
    }
    const valueOrText = !isPresent(this.valueField) !== !isPresent(this.textField);
    if (valueOrText) {
      throw new Error(MultiselectMessages.textAndValue);
    }
  }
  /**
   * @hidden
   */
  change(event) {
    if (event.isMultipleSelection) {
      if (isPresent(event.added) && event.added.length > 0) {
        event.added.forEach((itemIndex) => {
          const dataItem = this.dataService.itemAt(itemIndex);
          const newItem = this.valuePrimitive && isPresent(dataItem) && isPresent(getter2(dataItem, this.valueField)) ? getter2(dataItem, this.valueField) : dataItem;
          if (newItem) {
            if (!this.isAdaptive || !this.isActionSheetExpanded) {
              this.value = [...this.value, newItem];
            } else {
              this._valueHolder = [...this._valueHolder, newItem];
            }
          }
        });
      }
      if (isPresent(event.removed) && event.removed.length > 0) {
        event.removed.forEach((itemIndex) => {
          const dataItem = this.dataService.itemAt(itemIndex);
          const filter2 = (item) => getter2(item, this.valueField) !== getter2(dataItem, this.valueField);
          if (!this.isAdaptive || !this.isActionSheetExpanded) {
            this.value = this.value.filter(filter2);
          } else {
            this._valueHolder = this._valueHolder.filter(filter2);
          }
        });
        this.cdr.detectChanges();
      }
    } else {
      const isCustomItem = (isPresent(event.added) || isPresent(event.removed)) && (event.added === -1 || event.removed === -1);
      if (isCustomItem) {
        this.addCustomValue(this.text);
        return;
      }
      if (isPresent(event.added)) {
        const dataItem = this.dataService.itemAt(event.added);
        const newItem = this.valuePrimitive && isPresent(dataItem) && isPresent(getter2(dataItem, this.valueField)) ? getter2(dataItem, this.valueField) : dataItem;
        if (!this.isAdaptive || !this.isActionSheetExpanded) {
          this.value = [...this.value, newItem];
        } else {
          this._valueHolder = [...this._valueHolder, newItem];
        }
      }
      if (isPresent(event.removed)) {
        const dataItem = this.dataService.itemAt(event.removed);
        const filter2 = (item) => getter2(item, this.valueField) !== getter2(dataItem, this.valueField);
        if (!this.isAdaptive || !this.isActionSheetExpanded) {
          this.value = this.value.filter(filter2);
        } else {
          this._valueHolder = this._valueHolder.filter(filter2);
        }
        this.selectionService.focused = event.removed;
        this.cdr.detectChanges();
      }
    }
    if (!this.isAdaptive || !this.isActionSheetExpanded) {
      this.emitValueChange();
    }
  }
  /**
   * @hidden
   */
  setState(value) {
    let data = this.dataService.data;
    if (this.dataService.grouped) {
      data = data.filter((item) => !item.header).map((item) => item.value);
    }
    const selection = selectedIndices(this.value, data, this.valueField);
    this.selectionService.resetSelection(selection);
    if (this.disabledItemsService.isIndexDisabled(this.selectionService.focused)) {
      this.selectionService.focused = this.firstFocusableIndex(0);
    }
    if (this.isOpen && this.selectionService.focused === void 0) {
      if (this.dataService.itemsCount > 0) {
        this.selectionService.focused = this.firstFocusableIndex(0);
      } else if (this.allowCustom) {
        this.selectionService.focused = -1;
      }
    }
    if (this.valuePrimitive && !this.valueField) {
      this.selectedDataItems = value.slice();
    }
    if (isObjectArray(value) || this.valuePrimitive && this.valueField) {
      this.selectedDataItems = resolveAllValues(value, data, this.valueField);
    }
    if (this.selectedDataItems.length < value.length) {
      this.selectedDataItems = value.map((current) => {
        const dataItem = this.selectedDataItems.find((item) => getter2(item, this.valueField) === getter2(current, this.valueField));
        return isPresent(dataItem) ? dataItem : this.resolveDataItemFromTags(current);
      }).filter((dataItem) => isPresent(dataItem));
    }
    this.tags = this.tagMapper(this.selectedDataItems.slice(0));
    this.disabledIndices = this.disabledItemsMapper();
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleFilter(text) {
    this.text = text;
    if (text && !this.isOpen) {
      this.openPopup();
    }
    if (this.filterable) {
      this.filterChange.emit(text);
    } else {
      this.searchTextAndFocus(text);
    }
    this.searchbar.setInputSize();
  }
  /**
   * @hidden
   */
  pageChange(event) {
    const virtual = this.virtual;
    virtual.skip = event.skip;
  }
  /**
   * @hidden
   */
  clearFilter() {
    if (this.filterable && this.text) {
      this.filterChange.emit("");
    }
    this.text = "";
    this.searchbar.input.nativeElement.value = "";
    this.searchbar.setInputSize();
  }
  /**
   * @hidden
   */
  handleNavigate(event) {
    const navigateInput = this.text && event.keyCode !== Keys.ArrowDown && event.keyCode !== Keys.ArrowUp;
    const selectValue = this.text && event.keyCode === Keys.Enter || event.keyCode === Keys.Escape;
    const deleteTag = !this.text && event.keyCode === Keys.Backspace && this.tags.length > 0;
    if (event.keyCode === Keys.Backspace && this.isActionSheetExpanded) {
      return;
    }
    if (deleteTag) {
      this.handleBackspace();
      return;
    }
    if (this.disabled || navigateInput && !selectValue) {
      return;
    }
    const eventData = event;
    const focused = isNaN(this.selectionService.focused) ? -1 : this.selectionService.focused;
    const action = this.navigationService.process({
      current: focused,
      max: this.dataService.itemsCount - 1,
      min: this.allowCustom && this.text ? -1 : 0,
      open: this.isOpen,
      originalEvent: eventData
    });
    if (action !== NavigationAction.Undefined && (action === NavigationAction.Enter && this.isOpen || action !== NavigationAction.Enter) && !this.isActionSheetExpanded && action === NavigationAction.Tab) {
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  handleRemoveTag({
    tag
  }) {
    const eventArgs = new RemoveTagEvent(tag);
    if (this.disabled || this.readonly) {
      return;
    }
    this.focus();
    this.removeTag.emit(eventArgs);
    if (eventArgs.isDefaultPrevented()) {
      return;
    }
    if (tag instanceof Array) {
      this.removeGroupTag(tag);
    } else {
      this.removeSingleTag(tag);
    }
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  clearAll(event) {
    event?.stopImmediatePropagation();
    event?.preventDefault();
    this.focus();
    this.clearFilter();
    this.selectionService.lastClickedIndex = null;
    const selected = this.selectionService.selected;
    this.value = this.value.filter((_item, index) => this.disabledItemsService.isIndexDisabled(selected[index]));
    this.emitValueChange();
  }
  /**
   * @hidden
   */
  addCustomValue(text) {
    this.customValueSubject.next(text);
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  ngDoCheck() {
    const valueChanges = this.differ && this.differ.diff(this.value);
    if (valueChanges && !this.valueChangeDetected) {
      this.setState(this.value);
    }
    this.valueChangeDetected = false;
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    this.createCustomValueStream();
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.markForCheck();
    }));
    this.setState(this.value);
    this.setComponentClasses();
    this.initialized = true;
  }
  ngOnChanges(changes) {
    const virtual = this.virtual;
    const requestInitialData = virtual && changes.data && changes.data.isFirstChange();
    if (requestInitialData) {
      this.pageChange({
        skip: 0,
        take: virtual.pageSize
      });
    }
    if (isChanged("valueNormalizer", changes)) {
      this.createCustomValueStream();
    }
    if (anyChanged(["textField", "valueField", "valuePrimitive"], changes)) {
      this.setState(this.value);
    }
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    this.cdr.detectChanges();
    this.searchbar.setInputSize();
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "mousedown", this.handleMousedown.bind(this)));
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "keydown", this.handleKeydown.bind(this)));
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
    this._zone.onStable.pipe(take(1)).subscribe(() => {
      const ariaLabel = this.searchbar.input.nativeElement.getAttribute("aria-labelledby") || this.searchbar.input.nativeElement.getAttribute("data-kendo-label-id");
      if (ariaLabel) {
        this.renderer.setAttribute(this.tagList.hostElement.nativeElement, "aria-labelledby", ariaLabel);
      }
    });
  }
  ngOnDestroy() {
    this._toggle(false);
    this.unsubscribeEvents();
  }
  /**
   * Toggles the visibility of the popup or actionSheet
   * ([see example]({% slug openstate_multiselect %}#toc-setting-the-initially-opened-component)).
   * If you use the `toggle` method to open or close the popup or actionSheet, the respective `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !this._open;
      this._toggle(shouldOpen);
      this.cdr.markForCheck();
    });
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(this._open || this.isActionSheetExpanded);
  }
  /**
   * Resets the value of the MultiSelect.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
   */
  reset() {
    this.text = "";
    this.value = [];
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  // NG MODEL BINDINGS
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value || [];
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  onTagMapperChange() {
    this.tags = this.tagMapper(this.selectedDataItems.slice(0));
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleClick() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.togglePopup(true);
    }
  }
  set isFocused(isFocused) {
    this.renderer[isFocused ? "addClass" : "removeClass"](this.wrapper.nativeElement, "k-focus");
    this._isFocused = isFocused;
  }
  get isFocused() {
    return this._isFocused;
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    const isOpen = () => this.isOpen;
    const isClosed = () => !this.isOpen;
    const isTagFocused = () => !this.isOpen && this.focusedTagIndex !== void 0;
    [this.selectionService.onChange.subscribe(this.handleItemChange.bind(this)), this.navigationService.esc.subscribe(this.closePopup.bind(this)), this.navigationService.enter.pipe(filter(isOpen)).subscribe(this.handleEnter.bind(this)), this.navigationService.open.subscribe(this.openPopup.bind(this)), this.navigationService.close.subscribe(this.handleClose.bind(this)), this.navigationService.up.pipe(filter(isOpen)).subscribe((event) => this.handleUp(event.index)), this.navigationService.home.pipe(filter(() => isClosed)).subscribe(this.handleHome.bind(this)), this.navigationService.end.pipe(filter(() => isClosed)).subscribe(this.handleEnd.bind(this)), this.navigationService.backspace.pipe(filter(isTagFocused)).subscribe(this.handleBackspace.bind(this)), this.navigationService.delete.pipe(filter(isTagFocused)).subscribe(this.handleDelete.bind(this)), this.navigationService.left.subscribe(this.direction === "rtl" ? this.handleRightKey.bind(this) : this.handleLeftKey.bind(this)), this.navigationService.right.subscribe(this.direction === "rtl" ? this.handleLeftKey.bind(this) : this.handleRightKey.bind(this)), this.navigationService.down.subscribe((event) => this.handleDownKey(event.index)), this.navigationService.selectprevious.pipe(filter(isOpen)).subscribe((event) => this.handleSelectUpDown(event)), this.navigationService.selectnext.pipe(filter(isOpen)).subscribe((event) => this.handleSelectUpDown(event)), this.navigationService.selectalltobeginning.pipe(filter(isOpen)).subscribe(() => this.handleSelectAllToBeginning()), this.navigationService.selectalltoend.pipe(filter(isOpen)).subscribe(() => this.handleSelectAllToEnd()), merge(this.navigationService.pagedown, this.navigationService.pageup).subscribe((event) => {
      if (this.isOpen) {
        event.originalEvent.preventDefault();
        this.optionsList.scrollWithOnePage(NavigationAction[event.originalEvent.code]);
      }
    })].forEach((s) => this.subs.add(s));
  }
  subscribeTouchEvents() {
    if (!isDocumentAvailable() || !touchEnabled) {
      return;
    }
    this._zone.runOutsideAngular(() => (
      // Roll up MultiSelect on iOS when tapped outside
      this.touchstartDisposeHandler = this.renderer.listen(document, "touchstart", (e) => {
        const target = e.target;
        if ((this.isFocused || this.isOpen) && !inDropDown(this.wrapper, target, this.popupRef)) {
          this._zone.run(() => {
            this.blur();
            if (this.isOpen) {
              this.togglePopup(false);
            }
          });
        }
      })
    ));
  }
  unsubscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.unsubscribe();
    if (this.customValueSubscription) {
      this.customValueSubscription.unsubscribe();
    }
    if (this.touchstartDisposeHandler) {
      this.touchstartDisposeHandler();
    }
  }
  removeGroupTag(dataItems) {
    let data = this.dataService.data;
    if (this.dataService.grouped) {
      data = data.filter((item) => !item.header).map((item) => item.value);
    }
    const dataItemValues = new Set(dataItems.map((item) => getter2(item, this.valueField)));
    this.value = this.value.filter((value) => {
      const index = selectedIndices([value], data, this.valueField)[0];
      const isDataItemDisabled = this.disabledItemsService.isIndexDisabled(index);
      return !dataItemValues.has(getter2(value, this.valueField)) || isDataItemDisabled;
    });
    this.emitValueChange();
  }
  removeSingleTag(dataItem) {
    let data = this.dataService.data;
    if (this.dataService.grouped) {
      data = data.filter((item) => !item.header).map((item) => item.value);
    }
    const index = selectedIndices([dataItem], data, this.valueField)[0];
    if (this.disabledItemsService.isIndexDisabled(index)) {
      return;
    }
    if (isNumber(index)) {
      this.selectionService.deselect(index);
      this.selectionService.focused = index;
      this.togglePopup(false);
    } else {
      const filter2 = (item) => getter2(item, this.valueField) !== getter2(dataItem, this.valueField);
      this.value = this.value.filter(filter2);
      this.emitValueChange();
    }
  }
  /**
   * @hidden
   *
   * Determines which of the provided tags should be disabled and stores their position indices
   */
  disabledItemsMapper() {
    const {
      selected
    } = this.selectionService;
    return new Set(this.selectedDataItems.reduce((indices, _item, index) => {
      if (this.disabledItemsService.isIndexDisabled(selected[index])) {
        indices.push(index);
      }
      return indices;
    }, []));
  }
  createCustomValueStream() {
    if (this.customValueSubscription) {
      this.customValueSubscription.unsubscribe();
    }
    this.customValueSubscription = this.customValueSubject.pipe(tap(() => {
      this.loading = true;
      this.disabled = true;
      this.cdr.detectChanges();
    }), this.valueNormalizer, catchError(() => {
      this.loading = false;
      this.disabled = false;
      if (this.autoClose) {
        this.togglePopup(false);
      }
      if (this.autoClose || !this.filterable) {
        this.clearFilter();
      }
      this.nextTick(() => {
        this.searchbar.focus();
      });
      this.createCustomValueStream();
      return of(null);
    })).subscribe((normalizedValue) => {
      this.loading = false;
      this.disabled = false;
      if (isPresent(normalizedValue)) {
        const newValue = this.valuePrimitive ? getter2(normalizedValue, this.valueField) : normalizedValue;
        const itemIndex = this.dataService.indexOf(newValue);
        const customItem = itemIndex === -1;
        if (this.value.indexOf(newValue) === -1) {
          this.tags = this.tagMapper([...this.selectedDataItems, normalizedValue]);
          if (!customItem) {
            this.selectionService.add(itemIndex);
          } else {
            this.value = [...this.value, newValue];
          }
        } else {
          if (!customItem && this.selectionService.isSelected(itemIndex)) {
            this.selectionService.deselect(itemIndex);
            this.selectionService.focused = itemIndex;
          } else {
            this.value = this.value.filter((item) => getter2(item, this.valueField) !== newValue);
          }
        }
        this.emitValueChange();
      }
      if (this.autoClose) {
        this.togglePopup(false);
      }
      if (this.autoClose || !this.filterable) {
        this.clearFilter();
      }
      this.nextTick(() => {
        this.searchbar.focus();
      });
    });
  }
  handleItemChange(event) {
    this.change(event);
    if (this.autoClose && !event.preventClosingPopup && !this.isActionSheetExpanded) {
      this.togglePopup(false);
    }
    if (this.autoClose || !this.filterable) {
      this.clearFilter();
    }
  }
  handleMousedown(event) {
    if (event.target.closest(".k-input-prefix") || event.target.closest(".k-input-suffix")) {
      return;
    }
    if (!this.isActionSheetExpanded) {
      const inputElement = this.searchbar.input.nativeElement;
      if (event.button === 0) {
        if (this.isFocused && this.isOpen && event.target === inputElement) {
          return;
        }
        if (!touchEnabled || touchEnabled && event.target.tagName !== "SPAN") {
          this.searchbar.focus();
        }
        if (this.popupRef && this.popupRef.popupElement.contains(event.target)) {
          return;
        }
        event.preventDefault();
        this.togglePopup(!this.isOpen);
      }
    }
  }
  handleKeydown(event) {
    if (this.isFocused && this.isOpen && (event.ctrlKey || event.metaKey) && event.keyCode === Keys.KeyA) {
      event.preventDefault();
      this.handleSelectAll();
    }
  }
  handleEnter(event) {
    const service = this.selectionService;
    const focusedIndex = this.selectionService.focused;
    this.selectionService.lastClickedIndex = focusedIndex;
    if (this.isOpen) {
      event.originalEvent.preventDefault();
    }
    if (focusedIndex === -1) {
      if (this.allowCustom && this.text) {
        this.addCustomValue(this.text);
      }
      return;
    }
    if (service.isSelected(focusedIndex)) {
      service.deselect(focusedIndex);
      service.focused = focusedIndex;
    } else {
      service.add(focusedIndex);
    }
    if (this.autoClose && !this.isActionSheetExpanded) {
      this.togglePopup(false);
    }
    if (this.autoClose || !this.filterable) {
      this.clearFilter();
    }
  }
  handleClose() {
    this.closePopup();
    this.searchbar.focus();
  }
  handleEnd() {
    this.focusedTagIndex = this.tags.length - 1;
  }
  handleHome() {
    this.focusedTagIndex = 0;
  }
  sortSelectionAscending() {
    return this.selectionService.selected.sort((a, b) => a - b);
  }
  handleSelectAll() {
    const selectedItemsCount = this.selectionService.selected.length;
    const dataItemsCount = this.dataService.data.length;
    const dataItemsWithoutHeadersCount = this.dataService.data.filter((i) => !i.header).length;
    if (!this.dataService.grouped && selectedItemsCount === dataItemsCount || this.dataService.grouped && selectedItemsCount === dataItemsWithoutHeadersCount) {
      this.clearAll();
    } else {
      this.selectionService.selectFromTo(0, dataItemsCount - 1);
      this.selectionService.emitMultipleAddedRemoved();
    }
  }
  handleSelectAllToBeginning() {
    const selectedItemsCount = this.selectionService.selected.length;
    const dataItemsCount = this.dataService.data.length;
    const focusedItem = this.selectionService.focused;
    const largestIndex = this.sortSelectionAscending()[selectedItemsCount - 1];
    if (selectedItemsCount !== dataItemsCount) {
      this.selectionService.unselectFromTo(largestIndex, focusedItem + 1);
      this.selectionService.selectFromTo(0, focusedItem);
    }
    this.nextTick(() => this.selectionService.focus(0));
    this.selectionService.emitMultipleAddedRemoved();
  }
  handleSelectAllToEnd() {
    const selectedItemsCount = this.selectionService.selected.length;
    const dataItemsCount = this.dataService.data.length;
    const focusedItem = this.selectionService.focused;
    if (selectedItemsCount !== dataItemsCount) {
      this.selectionService.unselectFromTo(focusedItem - 1, 0);
      this.selectionService.selectFromTo(focusedItem, dataItemsCount - 1);
    }
    if (this.dataService.grouped) {
      const lastItemIndex = this.dataService.groupIndices[this.dataService.groupIndices.length - 1] - 1;
      this.nextTick(() => this.selectionService.focus(lastItemIndex));
    } else {
      this.nextTick(() => this.selectionService.focus(dataItemsCount - 1));
    }
    this.selectionService.emitMultipleAddedRemoved();
  }
  handleSelectUpDown(event) {
    const focusedIndex = this.selectionService.focused;
    if (!isPresent(focusedIndex)) {
      return;
    }
    let indexToSelect;
    if (event.originalEvent.key === "ArrowUp") {
      indexToSelect = focusedIndex > 0 ? focusedIndex - 1 : focusedIndex;
    } else {
      indexToSelect = focusedIndex < this.dataService.data.length - 1 ? focusedIndex + 1 : focusedIndex;
    }
    if (!isPresent(this.selectionService.lastClickedIndex)) {
      this.selectionService.lastClickedIndex = focusedIndex;
    }
    this.selectRangeFromTo(indexToSelect);
  }
  /**
   * Selects all items between the focused item and the last clicked item (index). Also removes all other selected items.
   */
  selectRangeFromTo(indexToSelect) {
    const lastClickedIndex = this.selectionService.lastClickedIndex;
    if (lastClickedIndex > indexToSelect) {
      this.selectionService.unselectNotNeededIndices(indexToSelect, lastClickedIndex, this.dataService.data.length);
      this.selectionService.selectFromTo(indexToSelect, this.selectionService.lastClickedIndex);
      this.selectionService.emitMultipleAddedRemoved();
    } else {
      this.selectionService.unselectNotNeededIndices(lastClickedIndex, indexToSelect, this.dataService.data.length);
      this.selectionService.selectFromTo(lastClickedIndex, indexToSelect);
      this.selectionService.emitMultipleAddedRemoved();
    }
    this.nextTick(() => this.selectionService.focus(indexToSelect));
  }
  handleUp(index) {
    this.selectionService.focused = index;
  }
  handleBackspace() {
    if (this.focusedTagIndex !== void 0) {
      this.handleDelete();
    } else {
      this.handleRemoveTag({
        tag: this.tags[this.tags.length - 1]
      });
      this.searchbar.focus();
    }
  }
  handleDelete() {
    this.handleRemoveTag({
      tag: this.tags[this.focusedTagIndex]
    });
    if (this.focusedTagIndex === this.tags.length) {
      this.focusedTagIndex = void 0;
    }
  }
  handleLeftKey() {
    if (this.focusedTagIndex === void 0 || this.focusedTagIndex < 0) {
      this.focusedTagIndex = this.tags.length - 1;
    } else if (this.focusedTagIndex !== 0) {
      this.focusedTagIndex--;
    }
  }
  handleDownKey(index) {
    if (this.isOpen) {
      this.selectionService.focused = index || this.firstFocusableIndex(0);
    } else {
      this.openPopup();
    }
  }
  handleRightKey() {
    const last = this.tags.length - 1;
    if (this.focusedTagIndex === last) {
      this.focusedTagIndex = void 0;
    } else if (this.focusedTagIndex < last) {
      this.focusedTagIndex++;
    }
  }
  findIndex(text, startsFrom = 0) {
    let itemText;
    text = text.toLowerCase();
    const index = this.dataService.findIndex((item) => {
      if (this.dataService.grouped) {
        itemText = getter2(item.value, this.textField);
      } else {
        itemText = getter2(item, this.textField);
      }
      itemText = !isPresent(itemText) ? "" : itemText.toString().toLowerCase();
      return text && itemText.startsWith(text);
    }, startsFrom);
    if (this.disabledItemsService.isIndexDisabled(index)) {
      return index + 1 > this.dataService.itemsCount ? -1 : this.findIndex(text, index + 1);
    } else {
      return index;
    }
  }
  searchTextAndFocus(text) {
    const index = this.findIndex(text);
    this.selectionService.focused = index;
  }
  closePopup() {
    this.togglePopup(false);
    this.focusedTagIndex = void 0;
  }
  openPopup() {
    this.togglePopup(true);
    this.focusedTagIndex = void 0;
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    if (isDisabled || sameState) {
      return;
    }
    const isDefaultPrevented = this.triggerPopupEvents(open);
    if (!isDefaultPrevented) {
      this._toggle(open);
    }
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  _toggle(open) {
    this._open = open;
    this.destroyPopup();
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
      this.focus();
    }
    if (this._open) {
      this.createPopup();
    }
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.popupElement.removeEventListener("mousedown", this.popupMouseDownHandler);
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  createPopup() {
    if (this.virtual) {
      this.virtual.skip = 0;
    }
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      anchorAlign: anchorPosition,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.popupTemplate,
      popupAlign: popupPosition,
      popupClass: this.listContainerClasses,
      positionMode: "absolute"
    });
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.width;
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    popupWrapper.addEventListener("mousedown", this.popupMouseDownHandler);
    popupWrapper.style.minWidth = min;
    popupWrapper.style.width = max;
    popupWrapper.style.height = this.height;
    popupWrapper.setAttribute("dir", this.direction);
    const listBox = popupWrapper.querySelector("ul.k-list-ul");
    this.popupRef.popupOpen.subscribe(() => {
      this.cdr.detectChanges();
      setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
      this.optionsList.scrollToItem(this.selectionService.focused);
      this.selectionService.focus(this.selectionService.focused);
      this.opened.emit();
    });
    this.popupRef.popupClose.subscribe(() => {
      this.closed.emit();
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopup(false);
    });
  }
  emitValueChange() {
    this.onChangeCallback(this.value);
    this.valueChange.emit(this.value);
  }
  resolveDataItemFromTags(value) {
    if (!(this.tags && this.tags.length && isPresent(value))) {
      return void 0;
    }
    const tags = this.tags.reduce((acc, tag) => {
      const items = isArray(tag) ? tag : [tag];
      acc.push(...items);
      return acc;
    }, []);
    return tags.find((tag) => getter2(tag, this.valueField) === getter2(value, this.valueField));
  }
  firstFocusableIndex(index) {
    const maxIndex = this.dataService.itemsCount;
    if (this.disabledItemsService.isIndexDisabled(index)) {
      const nextIndex = index + 1;
      return nextIndex < maxIndex ? this.firstFocusableIndex(nextIndex) : void 0;
    } else {
      return index;
    }
  }
  nextTick(f) {
    this._zone.runOutsideAngular(() => {
      setTimeout(() => this._zone.run(f));
    });
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    }
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    this.actionSheetSearchBar.value = "";
    this.filterable && this.filterChange.emit("");
    this.closed.emit();
  }
  openActionSheet() {
    this.windowSize = windowSize();
    this.actionSheet.toggle(true);
    this._valueHolder = [...this.value];
    this.cdr.detectChanges();
    setListBoxAriaLabelledBy(this.optionsList, this.searchbar.input, this.renderer);
    this.title = setActionSheetTitle(this.searchbar.input, this.title);
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.optionsList.scrollToItem(this.selectionService.focused);
    this.selectionService.focus(this.selectionService.focused);
    this.actionSheetSearchBar.focus();
  }
};
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
MultiSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: MultiSelectComponent,
  selectors: [["kendo-multiselect"]],
  contentQueries: function MultiSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, CustomItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FixedGroupTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, TagTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTagTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedGroupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTagTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
    }
  },
  viewQuery: function MultiSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(SearchBarComponent, 7);
      ɵɵviewQuery(TagListComponent, 7);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(_c11, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchbar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsList = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-multiselect", ctx.hostClasses)("k-input", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-loading", ctx.isLoading);
    }
  },
  inputs: {
    showStickyHeader: "showStickyHeader",
    focusableId: "focusableId",
    autoClose: "autoClose",
    loading: "loading",
    data: "data",
    value: "value",
    valueField: "valueField",
    textField: "textField",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    placeholder: "placeholder",
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle",
    disabled: "disabled",
    itemDisabled: "itemDisabled",
    checkboxes: "checkboxes",
    readonly: "readonly",
    filterable: "filterable",
    virtual: "virtual",
    popupSettings: "popupSettings",
    listHeight: "listHeight",
    valuePrimitive: "valuePrimitive",
    clearButton: "clearButton",
    tagMapper: "tagMapper",
    allowCustom: "allowCustom",
    valueNormalizer: "valueNormalizer",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    filterChange: "filterChange",
    valueChange: "valueChange",
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    onFocus: "focus",
    onBlur: "blur",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur",
    removeTag: "removeTag"
  },
  exportAs: ["kendoMultiSelect"],
  standalone: true,
  features: [ɵɵProvidersFeature([MULTISELECT_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.multiselect"
  }, {
    provide: FilterableComponent,
    useExisting: forwardRef(() => MultiSelectComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => MultiSelectComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 19,
  vars: 43,
  consts: () => {
    let i18n_11;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_11 = goog.getMsg("NO DATA FOUND");
      i18n_11 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_11;
    } else {
      i18n_11 = $localize`:kendo.multiselect.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_12 = goog.getMsg("clear");
      i18n_12 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_12;
    } else {
      i18n_12 = $localize`:kendo.multiselect.clearTitle|The title of the clear button:clear`;
    }
    let i18n_13;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_13 = goog.getMsg("Options list");
      i18n_13 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_13;
    } else {
      i18n_13 = $localize`:kendo.multiselect.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_14 = goog.getMsg("Apply");
      i18n_14 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_14;
    } else {
      i18n_14 = $localize`:kendo.multiselect.applyButton|The text of the Apply button in the action sheet:Apply`;
    }
    let i18n_15;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_15 = goog.getMsg("Cancel");
      i18n_15 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_15;
    } else {
      i18n_15 = $localize`:kendo.multiselect.cancelButton|The text of the Cancel button in the action sheet:Cancel`;
    }
    return [["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["optionsList", ""], ["default_custom_item_template", ""], ["kendoMultiSelectLocalizedMessages", "", "noDataText", i18n_11, "clearTitle", i18n_12, "popupLabel", i18n_13, "applyButton", i18n_14, "cancelButton", i18n_15], ["kendoDropDownSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], [1, "k-input-values"], [3, "removeTag", "size", "rounded", "fillMode", "id", "tags", "textField", "valueField", "focused", "disabled", "template", "groupTemplate", "tagPrefix", "disabledIndices"], ["kendoSearchbar", "", 3, "onNavigate", "valueChange", "onBlur", "onFocus", "click", "ariaControls", "ariaExpanded", "id", "tagListId", "isLoading", "isFilterable", "activeDescendant", "userInput", "disabled", "readonly", "tabIndex", "isRequired", "placeholder", "inputAttributes"], ["class", "k-clear-value", "role", "button", "tabindex", "-1", 3, "visibility", "mousedown", 4, "ngIf"], ["class", "k-icon k-i-loading k-input-loading-icon", 4, "ngIf"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], [3, "resize", 4, "ngIf"], [3, "closePopup", "textInputChange", "navigate", "onApply", "onCancel", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "showActionButtons", "subtitle", "placeholder"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], ["role", "button", "tabindex", "-1", 1, "k-clear-value", 3, "mousedown"], ["name", "x", 1, "k-icon", 3, "svgIcon"], [1, "k-icon", "k-i-loading", "k-input-loading-icon"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [4, "ngTemplateOutlet"], [3, "resize"], ["class", "k-list", 3, "ngClass", 4, "ngIf"], [3, "pageChange", "size", "rounded", "id", "optionPrefix", "data", "textField", "valueField", "template", "groupTemplate", "fixedGroupTemplate", "height", "show", "multipleSelection", "virtual", "checkboxes", "isMultiselect", "isActionSheetExpanded", "showStickyHeader"], ["class", "k-no-data", 4, "ngIf"], [3, "templateContext"], [1, "k-list", 3, "ngClass"], ["kendoDropDownsSelectable", "", 1, "k-list-item", "k-custom-item", 3, "multipleSelection", "index"], [4, "ngIf", "ngIfElse"], ["name", "plus", 1, "k-icon", 3, "svgIcon"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "ngIf"]];
  },
  template: function MultiSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementContainerStart(1, 6);
      ɵɵtwoWayListener("isFocusedChange", function MultiSelectComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function MultiSelectComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function MultiSelectComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, MultiSelectComponent_span_2_Template, 2, 1, "span", 7)(3, MultiSelectComponent_kendo_separator_3_Template, 1, 0, "kendo-separator", 8);
      ɵɵelementStart(4, "div", 9)(5, "kendo-taglist", 10);
      ɵɵlistener("removeTag", function MultiSelectComponent_Template_kendo_taglist_removeTag_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleRemoveTag($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(6, "input", 11);
      ɵɵlistener("onNavigate", function MultiSelectComponent_Template_input_onNavigate_6_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      })("valueChange", function MultiSelectComponent_Template_input_valueChange_6_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFilter($event));
      })("onBlur", function MultiSelectComponent_Template_input_onBlur_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputBlur());
      })("onFocus", function MultiSelectComponent_Template_input_onFocus_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputFocus());
      })("click", function MultiSelectComponent_Template_input_click_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleClick());
      });
      ɵɵelementEnd()();
      ɵɵtemplate(7, MultiSelectComponent_span_7_Template, 2, 4, "span", 12)(8, MultiSelectComponent_span_8_Template, 1, 0, "span", 13)(9, MultiSelectComponent_kendo_separator_9_Template, 1, 0, "kendo-separator", 8)(10, MultiSelectComponent_span_10_Template, 2, 1, "span", 14);
      ɵɵelementContainerEnd();
      ɵɵtemplate(11, MultiSelectComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(13, MultiSelectComponent_kendo_resize_sensor_13_Template, 1, 0, "kendo-resize-sensor", 15);
      ɵɵelementContainer(14, null, 1);
      ɵɵelementStart(16, "responsive-renderer", 16);
      ɵɵlistener("closePopup", function MultiSelectComponent_Template_responsive_renderer_closePopup_16_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("textInputChange", function MultiSelectComponent_Template_responsive_renderer_textInputChange_16_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onAdaptiveTextBoxChange($event));
      })("navigate", function MultiSelectComponent_Template_responsive_renderer_navigate_16_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      })("onApply", function MultiSelectComponent_Template_responsive_renderer_onApply_16_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.applyValue());
      })("onCancel", function MultiSelectComponent_Template_responsive_renderer_onCancel_16_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.cancelValue());
      });
      ɵɵelementEnd();
      ɵɵtemplate(17, MultiSelectComponent_ng_template_17_Template, 6, 22, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(18);
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance(2);
      ɵɵproperty("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("id", ctx.tagListId)("tags", ctx.tags)("textField", ctx.textField)("valueField", ctx.valueField)("focused", ctx.focusedTagIndex)("disabled", ctx.disabled)("template", ctx.tagTemplate)("groupTemplate", ctx.groupTagTemplate)("tagPrefix", ctx.tagPrefix)("disabledIndices", ctx.disabledIndices);
      ɵɵadvance();
      ɵɵproperty("ariaControls", ctx.ariaControls)("ariaExpanded", ctx.isOpen)("id", ctx.focusableId)("tagListId", ctx.tagListId)("isLoading", ctx.loading)("isFilterable", ctx.filterable)("activeDescendant", ctx.activeDescendant)("userInput", ctx.text)("disabled", ctx.disabled)("readonly", ctx.readonly || ctx.isAdaptive)("tabIndex", ctx.tabIndex)("isRequired", ctx.isControlRequired)("placeholder", ctx.placeholder)("inputAttributes", ctx.inputAttributes);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.loading && !ctx.readonly && ctx.clearButton && ((ctx.tags == null ? null : ctx.tags.length) || (ctx.text == null ? null : ctx.text.length)));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate && ctx.suffixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
      ɵɵadvance(3);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", true)("showActionButtons", true)("subtitle", ctx.subtitle)("placeholder", ctx.placeholder);
    }
  },
  dependencies: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, TagListComponent, SearchBarComponent, IconWrapperComponent, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, NgClass, SelectableDirective, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoMultiSelect",
      providers: [MULTISELECT_VALUE_ACCESSOR, DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.multiselect"
      }, {
        provide: FilterableComponent,
        useExisting: forwardRef(() => MultiSelectComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => MultiSelectComponent)
      }],
      selector: "kendo-multiselect",
      template: `
        <ng-container kendoMultiSelectLocalizedMessages
            i18n-noDataText="kendo.multiselect.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-clearTitle="kendo.multiselect.clearTitle|The title of the clear button"
            clearTitle="clear"

            i18n-popupLabel="kendo.multiselect.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"

            i18n-applyButton="kendo.multiselect.applyButton|The text of the Apply button in the action sheet"
            applyButton="Apply"

            i18n-cancelButton="kendo.multiselect.cancelButton|The text of the Cancel button in the action sheet"
            cancelButton="Cancel"
        >
        </ng-container>

        <ng-container
            kendoDropDownSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-separator>
            <div class="k-input-values">
                <kendo-taglist
                    [size]="size"
                    [rounded]="rounded"
                    [fillMode]="fillMode"
                    [id]="tagListId"
                    [tags]="tags"
                    [textField]="textField"
                    [valueField]="valueField"
                    [focused]="focusedTagIndex"
                    [disabled]="disabled"
                    [template]="tagTemplate"
                    [groupTemplate]="groupTagTemplate"
                    [tagPrefix]="tagPrefix"
                    [disabledIndices]="disabledIndices"
                    (removeTag)="handleRemoveTag($event)"
                >
                </kendo-taglist>
                <input
                    kendoSearchbar
                    [ariaControls]="ariaControls"
                    [ariaExpanded]="isOpen"
                    [id]="focusableId"
                    [tagListId]="tagListId"
                    [isLoading]="loading"
                    [isFilterable]="filterable"
                    [activeDescendant]="activeDescendant"
                    [userInput]="text"
                    [disabled]="disabled"
                    [readonly]="readonly || this.isAdaptive"
                    [tabIndex]="tabIndex"
                    [isRequired]="isControlRequired"
                    [placeholder]="placeholder"
                    [inputAttributes]="inputAttributes"
                    (onNavigate)="handleNavigate($event)"
                    (valueChange)="handleFilter($event)"
                    (onBlur)="handleInputBlur()"
                    (onFocus)="handleInputFocus()"
                    (click)="handleClick()"
                />
            </div>

            <span
                *ngIf="!loading && !readonly && clearButton && (tags?.length || text?.length)"
                class="k-clear-value"
                [style.visibility]="clearButtonVisiblity"
                [attr.title]="messageFor('clearTitle')"
                role="button"
                tabindex="-1"
                (mousedown)="clearAll($event)"
            >
                <kendo-icon-wrapper
                    class="k-icon"
                    name="x"
                    [svgIcon]="xIcon"
                >
                </kendo-icon-wrapper>
            </span>
            <span
                *ngIf="loading"
                class="k-icon k-i-loading k-input-loading-icon"
            >
            </span>
            <kendo-separator *ngIf="suffixTemplate && suffixTemplate.showSeparator"></kendo-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
        </ng-container>

        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>
        <ng-container #container></ng-container>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="true"
            [showActionButtons]="true"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (textInputChange)="onAdaptiveTextBoxChange($event)"
            [placeholder]="placeholder"
            (navigate)="handleNavigate($event)"
            (onApply)="applyValue()"
            (onCancel)="cancelValue()"
            >
        </responsive-renderer>

        <ng-template #sharedPopupActionSheetTemplate>
            <!--header template-->
            <ng-template *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate.templateRef
                }">
            </ng-template>
            <!--custom item template-->
            <div
                *ngIf="allowCustom && text"
                class="k-list"
                [ngClass]="customItemSizeClass"
            >
                <div class="k-list-item k-custom-item" kendoDropDownsSelectable [multipleSelection]="true" [index]="-1">
                    <ng-template *ngIf="customItemTemplate;else default_custom_item_template"
                        [templateContext]="{
                            templateRef: customItemTemplate.templateRef,
                            $implicit: text
                        }">
                    </ng-template>
                    <ng-template #default_custom_item_template>{{ text }}</ng-template>
                    <kendo-icon-wrapper
                        class="k-icon"
                        name="plus"
                        [svgIcon]="plusIcon"
                    >
                    </kendo-icon-wrapper>
                </div>
            </div>
            <!--list-->
            <kendo-list
                #optionsList
                [size]="size"
                [rounded]="rounded"
                [id]="listBoxId"
                [optionPrefix]="optionPrefix"
                [data]="data"
                [textField]="textField"
                [valueField]="valueField"
                [template]="template"
                [groupTemplate]="groupTemplate"
                [fixedGroupTemplate]="fixedGroupTemplate"
                [height]="listHeight"
                [show]="isOpen"
                [multipleSelection]="true"
                [virtual]="virtual"
                (pageChange)="pageChange($event)"
                [checkboxes]="checkboxes"
                [isMultiselect]="true"
                [isActionSheetExpanded]="isActionSheetExpanded"
                [showStickyHeader]="showStickyHeader"
            >
            </kendo-list>
            <!--no data template-->
            <div class="k-no-data" *ngIf="data.length === 0">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate ? noDataTemplate.templateRef : undefined
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
            <!--footer template-->
            <ng-template *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate.templateRef
                }">
            </ng-template>
        </ng-template>
  `,
      standalone: true,
      imports: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, TagListComponent, SearchBarComponent, IconWrapperComponent, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, NgClass, SelectableDirective, ListComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: PopupService
    }, {
      type: DataService
    }, {
      type: SelectionService
    }, {
      type: NavigationService
    }, {
      type: DisabledItemsService
    }, {
      type: ChangeDetectorRef
    }, {
      type: KeyValueDiffers
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    showStickyHeader: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    checkboxes: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    filterable: [{
      type: Input
    }],
    virtual: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    valuePrimitive: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    tagMapper: [{
      type: Input
    }],
    allowCustom: [{
      type: Input
    }],
    valueNormalizer: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    filterChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    removeTag: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    searchbar: [{
      type: ViewChild,
      args: [SearchBarComponent, {
        static: true
      }]
    }],
    tagList: [{
      type: ViewChild,
      args: [TagListComponent, {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    optionsList: [{
      type: ViewChild,
      args: ["optionsList", {
        static: false
      }]
    }],
    template: [{
      type: ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    customItemTemplate: [{
      type: ContentChild,
      args: [CustomItemTemplateDirective, {
        static: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: [GroupTemplateDirective, {
        static: false
      }]
    }],
    fixedGroupTemplate: [{
      type: ContentChild,
      args: [FixedGroupTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    tagTemplate: [{
      type: ContentChild,
      args: [TagTemplateDirective, {
        static: false
      }]
    }],
    groupTagTemplate: [{
      type: ContentChild,
      args: [GroupTagTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-multiselect"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }]
  });
})();
var ColumnCellTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ColumnCellTemplateDirective.ɵfac = function ColumnCellTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ColumnCellTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnCellTemplateDirective,
  selectors: [["", "kendoMultiColumnComboBoxColumnCellTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiColumnComboBoxColumnCellTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var ColumnHeaderTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ColumnHeaderTemplateDirective.ɵfac = function ColumnHeaderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ColumnHeaderTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnHeaderTemplateDirective,
  selectors: [["", "kendoMultiColumnComboBoxColumnHeaderTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiColumnComboBoxColumnHeaderTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var ComboBoxColumnComponent = class {
  constructor() {
    this.hidden = false;
    this.matchesMedia = true;
  }
};
ComboBoxColumnComponent.ɵfac = function ComboBoxColumnComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ComboBoxColumnComponent)();
};
ComboBoxColumnComponent.ɵcmp = ɵɵdefineComponent({
  type: ComboBoxColumnComponent,
  selectors: [["kendo-combobox-column"]],
  contentQueries: function ComboBoxColumnComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ColumnCellTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, ColumnHeaderTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
    }
  },
  inputs: {
    field: "field",
    title: "title",
    width: "width",
    hidden: "hidden",
    style: "style",
    headerStyle: "headerStyle",
    class: "class",
    headerClass: "headerClass",
    media: "media"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ComboBoxColumnComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboBoxColumnComponent, [{
    type: Component,
    args: [{
      selector: "kendo-combobox-column",
      template: "",
      standalone: true
    }]
  }], null, {
    cellTemplate: [{
      type: ContentChild,
      args: [ColumnCellTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ColumnHeaderTemplateDirective, {
        static: false
      }]
    }],
    field: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    hidden: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    headerStyle: [{
      type: Input
    }],
    class: [{
      type: Input
    }],
    headerClass: [{
      type: Input
    }],
    media: [{
      type: Input
    }]
  });
})();
var SCROLLBAR_WIDTH;
var scrollbarWidth = () => {
  if (isNaN(SCROLLBAR_WIDTH)) {
    const div = document.createElement("div");
    div.style.cssText = "overflow: scroll; overflow-x: hidden; zoom: 1; clear: both; display: block;";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    SCROLLBAR_WIDTH = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return SCROLLBAR_WIDTH;
};
var allColumnsWidthsSet = (columns) => {
  if (!isPresent(columns) || columns.length === 0) {
    return false;
  }
  return columns.toArray().every((column) => !isNaN(column.width) && column.width > 0);
};
var getRowWidthFromColumnsMeta = (columns) => {
  if (!allColumnsWidthsSet(columns)) {
    return null;
  }
  const bordersWidth = 2;
  const initialRowWidht = scrollbarWidth() + bordersWidth;
  return columns.reduce((totalWidth, column) => {
    if (!column.hidden && column.matchesMedia) {
      totalWidth += parseInt(column.width, 10);
    }
    return totalWidth;
  }, initialRowWidht);
};
var MultiColumnComboBoxComponent = class extends ComboBoxComponent {
  constructor(localization, popupService, selectionService, navigationService, disabledItemsService, dataService, zone, changeDetector, renderer, wrapper, injector, hostElement) {
    super(wrapper, localization, popupService, selectionService, navigationService, disabledItemsService, dataService, zone, changeDetector, renderer, injector, hostElement);
    this.hostElement = hostElement;
    this.animationDuration = animationDuration;
    this.hostClasses = true;
    this.removeWindowResizeListener = noop;
    this.defaultVirtualItemHeight = 36;
    this.defaultVirtualPageSize = 30;
  }
  /**
   * @hidden
   */
  get isDisabled() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  set header(header) {
    this.updateHeaderPadding(header && header.nativeElement);
  }
  get popupWidth() {
    const wrapperOffsetWidth = this.wrapper.nativeElement.offsetWidth;
    const min = `${wrapperOffsetWidth}px`;
    const width = this.popupSettings.width || getRowWidthFromColumnsMeta(this.columns) || wrapperOffsetWidth;
    const max = isNaN(width) ? width : `${width}px`;
    return {
      min,
      max
    };
  }
  /**
   * @hidden
   */
  get tableSizeClass() {
    return `${this.size ? getSizeClass("table", this.size) : ""}`;
  }
  /**
   * @hidden
   */
  get listContainerClasses() {
    return ["k-popup", "k-dropdowngrid-popup"].concat(this.popupSettings.popupClass || []);
  }
  ngAfterViewInit() {
    this.updateColumnsMediaState();
    this.addWindowResizeListener();
    this.windowSize = windowSize();
    this.cdr.detectChanges();
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.removeWindowResizeListener();
  }
  /**
   * @hidden
   */
  textFrom(dataItem, field) {
    return getter2(dataItem, field);
  }
  /**
   * @hidden
   *
   * Adds or removes a padding value at the end of the header container equal to the size of the scrollbar.
   * As when the items container has a scrollbar, the column headers and the cells are misaligned.
   * When the container has a scrollbar, the padding style is added, and when there is none - it is removed.
   */
  updateHeaderPadding(header) {
    if (!isPresent(header)) {
      return;
    }
    const headerPaddingPosition = this.localization.rtl ? "padding-left" : "padding-right";
    if (this.optionsList.hasScrollbar() && scrollbarWidth() > 0) {
      this.renderer.setStyle(header, headerPaddingPosition, `${scrollbarWidth()}px`);
    } else {
      this.renderer.removeStyle(header, headerPaddingPosition);
    }
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (isPresent(this.data) && this.data.length > 0 && this.data.some((item) => !isObject(item))) {
      throw new Error(MultiColumnComboBoxMessages.data);
    }
    if (!isPresent(this.valueField) || !isPresent(this.textField)) {
      throw new Error(MultiColumnComboBoxMessages.textAndValue);
    }
    super.verifySettings();
  }
  addWindowResizeListener() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.zone.runOutsideAngular(() => this.removeWindowResizeListener = this.renderer.listen(window, "resize", this.updateColumnsMediaState.bind(this)));
  }
  updateColumnsMediaState() {
    if (!(isPresent(this.columns) && isDocumentAvailable()) || this.isActionSheetExpanded) {
      return;
    }
    this.columns.forEach((column) => {
      const matchesMedia = !column.media || window.matchMedia(column.media).matches;
      if (column.matchesMedia !== matchesMedia) {
        column.matchesMedia = matchesMedia;
        if (this.isOpen) {
          this.zone.run(() => this.popupRef.popupElement.style.width = this.popupWidth.max);
        }
      }
    });
  }
};
MultiColumnComboBoxComponent.ɵfac = function MultiColumnComboBoxComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiColumnComboBoxComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DisabledItemsService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
MultiColumnComboBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: MultiColumnComboBoxComponent,
  selectors: [["kendo-multicolumncombobox"]],
  contentQueries: function MultiColumnComboBoxComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ComboBoxColumnComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columns = _t);
    }
  },
  viewQuery: function MultiColumnComboBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c18, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function MultiColumnComboBoxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-dropdowngrid", ctx.hostClasses)("k-disabled", ctx.isDisabled);
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SelectionService, DataService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.multicolumncombobox"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiColumnComboBoxComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => MultiColumnComboBoxComponent)
  }, {
    provide: FilterableComponent,
    useExisting: forwardRef(() => MultiColumnComboBoxComponent)
  }, {
    provide: MultiTabStop,
    useExisting: forwardRef(() => MultiColumnComboBoxComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 20,
  vars: 37,
  consts: () => {
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_16 = goog.getMsg("NO DATA FOUND");
      i18n_16 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_16;
    } else {
      i18n_16 = $localize`:kendo.multicolumncombobox.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_17;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_17 = goog.getMsg("clear");
      i18n_17 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_17;
    } else {
      i18n_17 = $localize`:kendo.multicolumncombobox.clearTitle|The title of the clear button:clear`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_18 = goog.getMsg("Select");
      i18n_18 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_18;
    } else {
      i18n_18 = $localize`:kendo.multicolumncombobox.selectButtonText|The title of the select button:Select`;
    }
    let i18n_19;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_19 = goog.getMsg("Options list");
      i18n_19 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_19;
    } else {
      i18n_19 = $localize`:kendo.multicolumncombobox.popupLabel|The label of the popup element that contains the list of options
                when its role is 'region':Options list`;
    }
    return [["select", ""], ["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["header", ""], ["headerWrap", ""], ["rowTemplate", ""], ["optionsList", ""], ["kendoMultiColumnComboBoxLocalizedMessages", "", "noDataText", i18n_16, "clearTitle", i18n_17, "selectButtonText", i18n_18, "popupLabel", i18n_19], ["kendoDropDownSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], ["kendoSearchbar", "", 3, "onNavigate", "valueChange", "onBlur", "onFocus", "click", "ariaControls", "ariaExpanded", "id", "isLoading", "isSuggestable", "isFilterable", "activeDescendant", "userInput", "suggestedText", "disabled", "readonly", "tabIndex", "isRequired", "placeholder", "inputAttributes"], ["class", "k-clear-value", "aria-hidden", "true", 3, "visibility", "kendoEventsOutsideAngular", "click", 4, "ngIf"], ["class", "k-i-loading k-input-loading-icon k-icon", 4, "ngIf"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], ["tabindex", "-1", "aria-hidden", "true", "unselectable", "on", "type", "button", 1, "k-input-button", "k-button", "k-icon-button", 3, "ngClass", "kendoEventsOutsideAngular"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [3, "resize", 4, "ngIf"], [3, "closePopup", "textInputChange", "navigate", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "subtitle", "placeholder"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], ["aria-hidden", "true", 1, "k-clear-value", 3, "click", "kendoEventsOutsideAngular"], ["name", "x", 3, "svgIcon"], [1, "k-i-loading", "k-input-loading-icon", "k-icon"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [4, "ngTemplateOutlet"], [3, "resize"], [1, "k-data-table", 3, "ngClass"], [1, "k-table-header"], [1, "k-table-header-wrap"], ["role", "presentation", 1, "k-table"], [4, "ngFor", "ngForOf"], [1, "k-table-thead"], [1, "k-table-row"], [3, "pageChange", "listResize", "popupListScroll", "optionPrefix", "data", "textField", "valueField", "template", "groupTemplate", "fixedGroupTemplate", "height", "show", "id", "virtual", "type", "showStickyHeader"], ["class", "k-no-data", 4, "ngIf"], [3, "templateContext"], [3, "width", 4, "ngIf"], ["class", "k-table-th", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "k-table-th", 3, "ngStyle", "ngClass"], ["class", "k-table-td", 3, "ngClass", "width", "ngStyle", 4, "ngIf"], [1, "k-table-td", 3, "ngClass", "ngStyle"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "ngIf"], [1, "k-table-footer"], [1, "k-table"], [1, "k-table-tfoot"], [1, "k-table-td"]];
  },
  template: function MultiColumnComboBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 8);
      ɵɵelementContainerStart(1, 9);
      ɵɵtwoWayListener("isFocusedChange", function MultiColumnComboBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function MultiColumnComboBoxComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function MultiColumnComboBoxComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, MultiColumnComboBoxComponent_span_2_Template, 2, 1, "span", 10)(3, MultiColumnComboBoxComponent_kendo_separator_3_Template, 1, 0, "kendo-separator", 11);
      ɵɵelementStart(4, "input", 12);
      ɵɵlistener("onNavigate", function MultiColumnComboBoxComponent_Template_input_onNavigate_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      })("valueChange", function MultiColumnComboBoxComponent_Template_input_valueChange_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.searchBarChange($event));
      })("onBlur", function MultiColumnComboBoxComponent_Template_input_onBlur_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputBlur());
      })("onFocus", function MultiColumnComboBoxComponent_Template_input_onFocus_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputFocus());
      })("click", function MultiColumnComboBoxComponent_Template_input_click_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleClick());
      });
      ɵɵelementEnd();
      ɵɵtemplate(5, MultiColumnComboBoxComponent_span_5_Template, 2, 7, "span", 13)(6, MultiColumnComboBoxComponent_span_6_Template, 1, 0, "span", 14)(7, MultiColumnComboBoxComponent_kendo_separator_7_Template, 1, 0, "kendo-separator", 11)(8, MultiColumnComboBoxComponent_span_8_Template, 2, 1, "span", 15);
      ɵɵelementStart(9, "button", 16, 0);
      ɵɵelement(11, "kendo-icon-wrapper", 17);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
      ɵɵtemplate(12, MultiColumnComboBoxComponent_ng_template_12_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, MultiColumnComboBoxComponent_kendo_resize_sensor_14_Template, 1, 0, "kendo-resize-sensor", 18);
      ɵɵelementContainer(15, null, 2);
      ɵɵelementStart(17, "responsive-renderer", 19);
      ɵɵlistener("closePopup", function MultiColumnComboBoxComponent_Template_responsive_renderer_closePopup_17_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("textInputChange", function MultiColumnComboBoxComponent_Template_responsive_renderer_textInputChange_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onAdaptiveTextBoxChange($event));
      })("navigate", function MultiColumnComboBoxComponent_Template_responsive_renderer_navigate_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleNavigate($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(18, MultiColumnComboBoxComponent_ng_template_18_Template, 18, 21, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(19);
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ariaControls", ctx.ariaControls)("ariaExpanded", ctx.isOpen)("id", ctx.focusableId)("isLoading", ctx.loading)("isSuggestable", ctx.suggest)("isFilterable", ctx.filterable)("activeDescendant", ctx.activeDescendant)("userInput", ctx.text)("suggestedText", ctx.getSuggestion())("disabled", ctx.disabled)("readonly", ctx.readonly)("tabIndex", ctx.tabIndex)("isRequired", ctx.isControlRequired)("placeholder", ctx.placeholder)("inputAttributes", ctx.inputAttributes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.clearButton && !ctx.loading && !ctx.disabled && (!ctx.readonly || ctx.readonly && ctx.isAdaptiveModeEnabled && ctx.windowSize !== "large") && (ctx.text == null ? null : ctx.text.length));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate && ctx.suffixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.selectButtonClasses)("kendoEventsOutsideAngular", ɵɵpureFunction1(35, _c14, ctx.preventEventDefault));
      ɵɵattribute("aria-label", ctx.messageFor("selectButtonText"));
      ɵɵadvance(2);
      ɵɵproperty("name", ctx.icon || "caret-alt-down")("svgIcon", ctx.svgIcon || ctx.caretAltDownIcon);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
      ɵɵadvance(3);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", true)("subtitle", ctx.subtitle)("placeholder", ctx.placeholder);
    }
  },
  dependencies: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgClass, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, NgForOf, NgStyle, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiColumnComboBoxComponent, [{
    type: Component,
    args: [{
      providers: [SelectionService, DataService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.multicolumncombobox"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiColumnComboBoxComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => MultiColumnComboBoxComponent)
      }, {
        provide: FilterableComponent,
        useExisting: forwardRef(() => MultiColumnComboBoxComponent)
      }, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => MultiColumnComboBoxComponent)
      }],
      selector: "kendo-multicolumncombobox",
      template: `
        <ng-container
            kendoMultiColumnComboBoxLocalizedMessages
            i18n-noDataText="
                kendo.multicolumncombobox.noDataText|The text displayed in the popup when there are no items
            "
            noDataText="NO DATA FOUND"
            i18n-clearTitle="kendo.multicolumncombobox.clearTitle|The title of the clear button"
            clearTitle="clear"
            i18n-selectButtonText="kendo.multicolumncombobox.selectButtonText|The title of the select button"
            selectButtonText="Select"
            i18n-popupLabel="
                kendo.multicolumncombobox.popupLabel|The label of the popup element that contains the list of options
                when its role is 'region'
            "
            popupLabel="Options list"
        ></ng-container>

        <ng-container
            kendoDropDownSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-separator>
            <input 
                kendoSearchbar
                [ariaControls]="ariaControls"
                [ariaExpanded]="isOpen"
                [id]="focusableId"
                [isLoading]="loading"
                [isSuggestable]="suggest"
                [isFilterable]="filterable"
                [activeDescendant]="activeDescendant"
                [userInput]="text"
                [suggestedText]="getSuggestion()"
                [disabled]="disabled"
                [readonly]="readonly"
                [tabIndex]="tabIndex"
                [isRequired]="isControlRequired"
                [placeholder]="placeholder"
                [inputAttributes]="inputAttributes"
                (onNavigate)="handleNavigate($event)"
                (valueChange)="searchBarChange($event)"
                (onBlur)="handleInputBlur()"
                (onFocus)="handleInputFocus()"
                (click)="handleClick()"
            />
            <span
                *ngIf="clearButton && !loading && !disabled && (!readonly || readonly && isAdaptiveModeEnabled && windowSize !== 'large')  && text?.length"
                class="k-clear-value"
                [style.visibility]="clearButtonVisiblity"
                aria-hidden="true"
                [attr.title]="messageFor('clearTitle')"
                (click)="clearValue($event)"
                [kendoEventsOutsideAngular]="{
                    mousedown: preventEventDefault
                }"
            >
                <kendo-icon-wrapper name="x" [svgIcon]="xIcon"> </kendo-icon-wrapper>
            </span>

            <span *ngIf="loading" class="k-i-loading k-input-loading-icon k-icon"></span>
            <kendo-separator *ngIf="suffixTemplate && suffixTemplate.showSeparator"></kendo-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
            <button
                #select
                tabindex="-1"
                aria-hidden="true"
                unselectable="on"
                type="button"
                class="k-input-button k-button k-icon-button"
                [ngClass]="selectButtonClasses"
                [attr.aria-label]="messageFor('selectButtonText')"
                [kendoEventsOutsideAngular]="{
                    mousedown: preventEventDefault
                }"
            >
                <kendo-icon-wrapper
                    [name]="icon || 'caret-alt-down'"
                    innerCssClass="k-button-icon"
                    [svgIcon]="svgIcon || caretAltDownIcon"
                >
                </kendo-icon-wrapper>
            </button>
        </ng-container>

        <ng-template #popupTemplate>
            <!--popup/actionsheet content-->
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>

        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"> </kendo-resize-sensor>

        <!-- when the popupSettings.appendTo value is set to 'component', this container is used -->
        <ng-container #container></ng-container>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="true"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (textInputChange)="onAdaptiveTextBoxChange($event)"
            (navigate)="handleNavigate($event)"
            [placeholder]="placeholder"
            >
        </responsive-renderer>

        <ng-template #sharedPopupActionSheetTemplate>
            <!--user-defined header template -->
            <ng-template
                *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate?.templateRef
                }"
            >
            </ng-template>
            <!--data table-->
            <div class="k-data-table" [ngClass]="tableSizeClass">
                <!--grid header-->
                <div #header class="k-table-header">
                    <div #headerWrap class="k-table-header-wrap">
                        <table class="k-table" role="presentation">
                            <colgroup>
                                <ng-container *ngFor="let column of columns">
                                    <col *ngIf="!column.hidden && column.matchesMedia" [style.width.px]="column.width" />
                                </ng-container>
                            </colgroup>
                            <thead class="k-table-thead">
                                <tr class="k-table-row">
                                    <ng-container *ngFor="let column of columns">
                                        <th
                                            *ngIf="!column.hidden && column.matchesMedia"
                                            class="k-table-th"
                                            [ngStyle]="column.headerStyle"
                                            [ngClass]="column.headerClass"
                                        >
                                            <ng-container *ngIf="!column.headerTemplate">
                                                {{ column.title || column.field }}
                                            </ng-container>
                                            <ng-template
                                                *ngIf="column.headerTemplate"
                                                [templateContext]="{
                                                    templateRef: column.headerTemplate?.templateRef,
                                                    $implicit: column,
                                                    column: column
                                                }"
                                            >
                                            </ng-template>
                                        </th>
                                    </ng-container>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <!-- item template -->
                <ng-template #rowTemplate let-dataItem>
                    <ng-container *ngFor="let column of columns">
                        <span
                            *ngIf="!column.hidden && column.matchesMedia"
                            class="k-table-td"
                            [ngClass]="column.class"
                            [style.width.px]="column.width"
                            [ngStyle]="column.style"
                        >
                            <ng-container *ngIf="!column.cellTemplate">
                                {{ textFrom(dataItem, column.field) }}
                            </ng-container>
                            <ng-template
                                *ngIf="column.cellTemplate"
                                [templateContext]="{
                                    templateRef: column.cellTemplate?.templateRef,
                                    $implicit: dataItem,
                                    dataItem: dataItem,
                                    column: column
                                }"
                            >
                            </ng-template>
                        </span>
                    </ng-container>
                </ng-template>
                <kendo-list
                    #optionsList
                    [optionPrefix]="optionPrefix"
                    [data]="data"
                    [textField]="textField"
                    [valueField]="valueField"
                    [template]="{ templateRef: rowTemplate }"
                    [groupTemplate]="groupTemplate"
                    [fixedGroupTemplate]="fixedGroupTemplate"
                    [height]="listHeight"
                    [show]="isOpen"
                    [id]="listBoxId"
                    [virtual]="virtual"
                    [type]="'dropdowngrid'"
                    [showStickyHeader]="showStickyHeader"
                    (pageChange)="pageChange($event)"
                    (listResize)="updateHeaderPadding(header)"
                    (popupListScroll)="headerWrap.scrollLeft = $event.target.scrollLeft;"
                >
                </kendo-list>

                <!--no-data template-->
                <div class="k-no-data" *ngIf="data.length === 0">
                    <ng-template
                        [ngIf]="noDataTemplate"
                        [templateContext]="{
                            templateRef: noDataTemplate?.templateRef
                        }"
                    >
                    </ng-template>
                    <ng-template [ngIf]="!noDataTemplate">
                        <div>{{ messageFor('noDataText') }}</div>
                    </ng-template>
                </div>

                <!--user-defined footer template-->
                <ng-container *ngIf="footerTemplate">
                    <div class="k-table-footer">
                        <table class="k-table">
                            <tfoot class="k-table-tfoot">
                                <tr class="k-table-row">
                                    <td class="k-table-td">
                                        <ng-template
                                            [templateContext]="{
                                                templateRef: footerTemplate.templateRef
                                            }"
                                        >
                                        </ng-template>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </ng-container>
            </div>
        </ng-template>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, SharedDropDownEventsDirective, NgIf, NgTemplateOutlet, SeparatorComponent, SearchBarComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgClass, ResizeSensorComponent, ResponsiveRendererComponent, TemplateContextDirective, NgForOf, NgStyle, ListComponent]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PopupService
    }, {
      type: SelectionService
    }, {
      type: NavigationService
    }, {
      type: DisabledItemsService
    }, {
      type: DataService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-dropdowngrid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    columns: [{
      type: ContentChildren,
      args: [ComboBoxColumnComponent]
    }],
    header: [{
      type: ViewChild,
      args: ["header", {
        static: false
      }]
    }]
  });
})();
var NodeTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
NodeTemplateDirective.ɵfac = function NodeTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
NodeTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: NodeTemplateDirective,
  selectors: [["", "kendoDropDownTreeNodeTemplate", ""], ["", "kendoMultiSelectTreeNodeTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownTreeNodeTemplate], [kendoMultiSelectTreeNodeTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var DEFAULT_POPUP_SETTINGS$1 = {
  animate: true
};
var hasChildren$1 = () => false;
var fetchChildren$1 = () => of([]);
var itemDisabled$1 = () => false;
var isNodeVisible$1 = () => true;
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$1 = "medium";
var DEFAULT_FILL_MODE$1 = "solid";
var stopPropagation = (event) => event.stopImmediatePropagation();
var DropDownTreeComponent = class {
  constructor(injector, wrapper, popupService, navigationService, renderer, _zone, cdr, localization) {
    this.injector = injector;
    this.wrapper = wrapper;
    this.popupService = popupService;
    this.navigationService = navigationService;
    this.renderer = renderer;
    this._zone = _zone;
    this.cdr = cdr;
    this.localization = localization;
    this.touchEnabled = touchEnabled;
    this.animationDuration = animationDuration;
    this.searchIcon = searchIcon;
    this.caretAltDownIcon = caretAltDownIcon;
    this.xIcon = xIcon;
    this.hostClasses = true;
    this.role = "combobox";
    this.ariaHasPopup = "tree";
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.nodeExpand = new EventEmitter();
    this.nodeCollapse = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.clearButton = true;
    this.hasChildren = hasChildren$1;
    this.fetchChildren = fetchChildren$1;
    this.placeholder = "";
    this._listHeight = 200;
    this.disabled = false;
    this.readonly = false;
    this.valuePrimitive = false;
    this.itemDisabled = itemDisabled$1;
    this.isNodeVisible = isNodeVisible$1;
    this.loadOnDemand = true;
    this.filterable = false;
    this.filter = "";
    this.focusableId = `k-${guid()}`;
    this.selectedKeys = [];
    this.adaptiveMode = "none";
    this.title = "";
    this.subtitle = "";
    this.windowSize = "large";
    this.isActionSheetExpanded = false;
    this.filterStateChange = new EventEmitter();
    this.allNodesHidden = false;
    this.valueLabelId = `k-${guid()}`;
    this.treeViewId = `k-${guid()}`;
    this._popupSettings = DEFAULT_POPUP_SETTINGS$1;
    this._tabindex = 0;
    this._isFocused = false;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._searchableNodes = [];
    this._typedValue = "";
    this.printableCharacters = new Subject();
    this.subs = new Subscription();
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop;
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subscribeEvents();
    this.subscribeTouchEvents();
    this.subscribeFocusEvents();
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  get isReadonly() {
    return this.readonly ? "" : null;
  }
  get hostAriaInvalid() {
    return this.formControl ? this.formControl.invalid.toString() : null;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get isLoading() {
    return this.loading;
  }
  get isBusy() {
    return this.loading ? "true" : null;
  }
  get hostAriaControls() {
    return this.isOpen ? this.treeViewId : void 0;
  }
  get id() {
    return this.focusableId;
  }
  get hostTabIndex() {
    return this.tabindex;
  }
  get isAriaExpanded() {
    return this.isOpen;
  }
  get hostAriaAutocomplete() {
    return this.filterable ? "list" : null;
  }
  set treeview(treeview) {
    if (treeview) {
      if (this.isFocused && !this.filterable || this.touchEnabled) {
        treeview.focus();
      }
      treeview.animate = true;
      this._treeview = treeview;
    }
  }
  get treeview() {
    return this._treeview;
  }
  /**
   * Sets the data of the DropDownTree.
   *
   * > The data has to be provided in an array-like list with objects.
   */
  set data(data) {
    this._nodes = data;
    this.setState();
  }
  get data() {
    return this._nodes;
  }
  /**
   * Sets the value of the DropDownTree.
   * It can either be of the primitive (string, numbers) or of the complex (objects) type.
   * To define the type, use the `valuePrimitive` option.
   *
   */
  set value(newValue) {
    this._value = newValue;
    this.setState();
  }
  get value() {
    return this._value;
  }
  /**
   * Configures the popup of the DropDownTree.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({}, DEFAULT_POPUP_SETTINGS$1, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Keeps the current `dataItem` object in order to resolve selection.
   * Needs to be provided when `value` is bound in and `valuePrimitive` is set to true.
   */
  set dataItem(item) {
    this._dataItem = item;
    this.setState();
  }
  get dataItem() {
    return this._dataItem ? this._dataItem : this.value;
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabindex(value) {
    const providedTabIndex = Number(value);
    const defaultTabIndex = 0;
    this._tabindex = !isNaN(providedTabIndex) ? providedTabIndex : defaultTabIndex;
  }
  get tabindex() {
    return this.disabled ? -1 : this._tabindex;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("picker", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("picker", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$1;
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("picker", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("picker", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  set isFocused(isFocused) {
    this.renderer[isFocused ? "addClass" : "removeClass"](this.wrapper.nativeElement, "k-focus");
    this._isFocused = isFocused;
  }
  get isFocused() {
    return this._isFocused;
  }
  get width() {
    const wrapperWidth = this.wrapper.nativeElement.offsetWidth;
    const width = this.popupSettings.width || wrapperWidth;
    const minWidth = isNaN(wrapperWidth) ? wrapperWidth : `${wrapperWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get height() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(isPresent(this.popupRef) || this.isActionSheetExpanded);
  }
  get clearButtonVisiblity() {
    if (this.touchEnabled) {
      return "visible";
    }
  }
  get isFilterActive() {
    return this.filterInput && document.activeElement === this.filterInput.nativeElement;
  }
  /**
   * @hidden
   */
  onFilterChange(text) {
    if (this.filterable) {
      this.filterChange.emit(text);
    }
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   *
   * Alias for `isNodeExpanded`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  set isExpanded(callback) {
    this.isNodeExpanded = callback;
  }
  get isExpanded() {
    return this.isNodeExpanded;
  }
  /**
   * @hidden
   *
   * Alias for `nodeExpand`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  get expand() {
    return this.nodeExpand;
  }
  /**
   * @hidden
   *
   * Alias for `nodeCollapse`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  get collapse() {
    return this.nodeCollapse;
  }
  /**
   * @hidden
   *
   * Alias for `data`. Used for compatibility with the `DataBoundComponent` interface.
   * Required for the data-binding directives.
   */
  set nodes(nodes) {
    this.data = nodes;
  }
  get nodes() {
    return this.data;
  }
  /**
   * @hidden
   *
   * Alias for `fetchChildren`. Used for compatibility with the `DataBoundComponent` interface.
   * Required for the data-binding directives
   */
  set children(callback) {
    this.fetchChildren = callback;
  }
  get children() {
    return this.fetchChildren;
  }
  /**
   * @hidden
   *
   * Alias for `isNodeVisible`. Used for compatibility with the `DataBoundComponent` interface.
   * The `DataBoundComponent` interface is used in the data-binding directives.
   */
  set isVisible(callback) {
    this.isNodeVisible = callback;
  }
  get isVisible() {
    return this.isNodeVisible;
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  ngOnInit() {
    this.subs.add(this.printableCharacters.pipe(tap((char) => {
      this._typedValue += char;
      const itemToFocus = this._searchableNodes.find((node) => {
        return node.text.toLowerCase().indexOf(this._typedValue) === 0;
      });
      this.treeview.focus(itemToFocus?.index);
    }), debounceTime(1e3)).subscribe(() => {
      this._typedValue = "";
    }));
    this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    this.assignAriaDescribedBy();
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.markForCheck();
    }));
    this.setComponentClasses();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.destroyPopup();
    this.unsubscribeEvents();
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (anyChanged(["textField", "valueField", "valuePrimitive"], changes, false)) {
      this.setState();
    }
    if (isChanged("value", changes, false)) {
      if (changes["value"] && !changes["dataItem"] && !this.valuePrimitive) {
        this.dataItem = this.value;
      }
    }
  }
  /**
   * @hidden
   */
  ngAfterContentChecked() {
    this.verifySettings();
    if (this.data?.length > 0 && this.popupRef) {
      this.allNodesHidden = this.areNodesHidden(this.data);
    }
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "click", this.handleClick.bind(this)));
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "keydown", this.handleKeydown.bind(this)));
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
    }
    if (this.isOpen && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.width;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  /**
   * @hidden
   *
   * Used by the kendo-floatinglabel component to determine if the floating label
   * should be rendered inside the input when the component is not focused.
   */
  isEmpty() {
    return !this.text && !this.placeholder;
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    if (isDisabled || sameState) {
      return;
    }
    const togglePrevented = this.triggerPopupEvents(open);
    if (!togglePrevented) {
      if (open) {
        this.createPopup();
      } else {
        this.destroyPopup();
      }
    }
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    if (!this.isFocused) {
      this.isFocused = true;
      if (hasObservers(this.onFocus)) {
        this._zone.run(() => {
          this.onFocus.emit();
        });
      }
    }
  }
  /**
   * @hidden
   */
  handleBlur(e) {
    if (!this.isActionSheetExpanded) {
      const relatedTarget = e && e.relatedTarget;
      if (this.wrapper.nativeElement.contains(relatedTarget) || this.isOpen && this.popupRef.popupElement.contains(relatedTarget)) {
        return;
      }
      this.isFocused = false;
      this.togglePopup(false);
      if (hasObservers(this.onBlur) || isUntouched(this.wrapper.nativeElement) || this.formControl?.updateOn === "blur") {
        this._zone.run(() => {
          this.onBlur.emit();
          this.onTouchedCallback();
        });
      }
    }
  }
  /**
   * @hidden
   */
  handleKeydown(event, input) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.keyCode === Keys.Tab && this.isActionSheetExpanded) {
      this.togglePopup(false);
      return;
    }
    if (!this.isFilterActive && isLetter(event.key) && !this.actionSheetSearchBar?.onFocus) {
      this.printableCharacters.next(event.key);
    }
    const eventData = event;
    this.navigationService.process({
      originalEvent: eventData,
      openOnSpace: !this.isOpen,
      closeOnSpace: this.isOpen && !input && !(event.target instanceof HTMLInputElement)
    });
  }
  /**
   * Focuses a specific item of the DropDownTree based on a provided index in the format of `1_1`.
   * The targeted item should be expanded in order for it to be focused.
   * If null or invalid index is provided the focus will be set on the first item.
   */
  focusItemAt(index) {
    if (this.treeview) {
      const lookup = this.treeview.itemLookup(index);
      const isItemDisabled = !isPresent(lookup) || this.treeview.isDisabled(lookup.item.dataItem, lookup.item.index);
      if (!isItemDisabled) {
        this.treeview.focus(index);
      }
    }
  }
  /**
   * Focuses the DropDownTree.
   */
  focus() {
    if (!this.disabled) {
      this.wrapper.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownTree.
   */
  blur() {
    if (!this.disabled) {
      this.wrapper.nativeElement.blur();
    }
  }
  /**
   * Resets the value of the DropDownTree.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `valueChange` event will not be fired.
   */
  reset() {
    this.value = void 0;
    this.dataItem = void 0;
  }
  /**
   * Toggles the visibility of the popup or actionSheet.
   * ([see example]({% slug openstate_ddt %})).
   * If you use the `toggle` method to open or close the popup or actionSheet, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !isPresent(this.popupRef);
      this.destroyPopup();
      if (shouldOpen) {
        this.createPopup();
      }
    });
  }
  /**
   * @hidden
   */
  get popupContainerClasses() {
    const containerClasses = ["k-dropdowntree-popup"];
    if (this.popupSettings.popupClass) {
      containerClasses.push(this.popupSettings.popupClass);
    }
    return containerClasses;
  }
  /**
   * @hidden
   */
  onSelectionChange({
    dataItem,
    index
  }) {
    this.valueDepth = index.split("_").length - 1;
    const valueField = this.getField(this.valueField, dataItem);
    const newValue = this.valuePrimitive ? getter(valueField)(dataItem) : dataItem;
    const shouldUpdateValue = newValue !== this.value;
    if (shouldUpdateValue) {
      this.value = newValue;
      this.dataItem = dataItem;
      this.emitValueChange(this.value);
    }
    this.togglePopup(false);
    this.focus();
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  clearValue(event) {
    event.stopImmediatePropagation();
    this.focus();
    this.value = void 0;
    this.dataItem = void 0;
    this.clearState();
    this.valueChange.emit(void 0);
    this.emitValueChange();
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * @hidden
   */
  preventEventDefault(event) {
    event.preventDefault();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    if (!isPresent(value) && isPresent(this.value)) {
      this.dataItem = null;
    }
    this.value = value === null ? void 0 : value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleFilterInputChange(input) {
    const value = typeof input === "string" ? input : input.value;
    this.filter = value;
    this.filterChange.next(value);
    this.allNodesHidden = this.areNodesHidden(this.nodes);
    this._zone.onStable.pipe(take(1)).subscribe(() => {
      if (this.data.length === 0 || this.allNodesHidden || this.filter === "") {
        this.filterInput?.nativeElement.focus();
      }
    });
  }
  /**
   * @hidden
   */
  get selectButtonClasses() {
    return `${this.size ? getSizeClass("button", this.size) : ""} ${this.fillMode ? "k-button-" + this.fillMode : ""} ${this.fillMode ? "k-button-" + this.fillMode + "-base" : ""}`;
  }
  /**
   * @hidden
   */
  get filterInputClasses() {
    return `${this.size ? getSizeClass("input", this.size) : ""} ${this.fillMode ? "k-input-" + this.fillMode : ""} ${this.rounded ? getRoundedClass(this.rounded) : ""}`;
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (this.valuePrimitive === true && isPresent(this.value) && typeof this.value === "object") {
      throw new Error(DropDownTreeMessages.primitive);
    }
    if (this.valuePrimitive === true && isPresent(this.value) && typeof this.dataItem !== "object") {
      throw new Error(DropDownTreeMessages.dataItem);
    }
    if (this.valuePrimitive === false && isPresent(this.value) && typeof this.value !== "object") {
      throw new Error(DropDownTreeMessages.object);
    }
    if (!isPresent(this.valueField) || !isPresent(this.textField)) {
      throw new Error(DropDownTreeMessages.textAndValue);
    }
    if ((isArray(this.valueField) || isArray(this.textField)) && isPresent(this.value) && !isPresent(this.valueDepth)) {
      throw new Error(DropDownTreeMessages.valueDepth);
    }
  }
  emitValueChange(value) {
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }
  getText(textField, dataItem) {
    if (isPresent(dataItem) && isPresent(textField)) {
      const field = this.getField(textField, dataItem);
      return getter(field)(dataItem);
    }
    return null;
  }
  /**
   * @hidden
   */
  onChildrenLoaded() {
    setTimeout(() => {
      if (this.popupRef) {
        this._searchableNodes = getSearchableItems(this.treeViewId, this.popupRef.popupElement);
      }
      if (this.isActionSheetExpanded) {
        this._searchableNodes = getSearchableItems(this.treeViewId, this.actionSheet.element.nativeElement);
      }
    });
  }
  /**
   * @hidden
   */
  onExpand() {
    this._searchableNodes = getSearchableItems(this.treeViewId, this.actionSheet.element.nativeElement);
    this.isActionSheetExpanded = true;
  }
  /**
   * @hidden
   */
  onCollapse() {
    this.isActionSheetExpanded = false;
  }
  /**
   * @hidden
   *
   * Determines the `valueField` and `textField` for a specific level in the data set
   *  @param field - the field value (string | string[])
   *  @param value - current value
   */
  getField(field, value) {
    const fieldsCount = field.length - 1;
    if (typeof field === "string") {
      return field;
    } else if (isPresent(this.valueDepth)) {
      return fieldsCount < this.valueDepth ? field[fieldsCount] : field[this.valueDepth];
    } else {
      return field.find((item) => item in value);
    }
  }
  areNodesHidden(nodes) {
    return nodes.every((node, index) => !this.isVisible(node, String(index)));
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  createPopup() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      this.cdr.detectChanges();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      appendTo: this.appendTo,
      anchorAlign: anchorPosition,
      content: this.popupTemplate,
      popupAlign: popupPosition,
      positionMode: "absolute",
      popupClass: this.popupContainerClasses
    });
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.width;
    this.renderer.setStyle(popupWrapper, "minWidth", min);
    this.renderer.setStyle(popupWrapper, "width", max);
    this.renderer.setStyle(popupWrapper, "height", this.height);
    this.renderer.setAttribute(popupWrapper, "dir", this.direction);
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    this.popupRef.popupOpen.subscribe(() => {
      this.allNodesHidden = this.areNodesHidden(this.data);
      this.popupRef.popupElement.addEventListener("click", (event) => stopPropagation(event));
      this.cdr.detectChanges();
      this.opened.emit();
      this._searchableNodes = getSearchableItems(this.treeViewId, this.popupRef.popupElement);
    });
    this.popupRef.popupClose.subscribe(() => {
      this.closed.emit();
    });
  }
  destroyPopup() {
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    }
    if (this.popupRef) {
      this.popupRef.popupElement.removeEventListener("click", (event) => stopPropagation(event));
      this.popupRef.close();
      this.popupRef = null;
      if (this.filter !== "") {
        this.filter = "";
        this.allNodesHidden = false;
        if (hasObservers(this.filterChange)) {
          this._zone.run(() => {
            this.filterChange.emit("");
          });
        }
      }
    }
  }
  handleClick(e) {
    this.windowSize = windowSize();
    if (!this.isActionSheetExpanded) {
      if (this.popupRef && !this.popupRef.popupElement.contains(e.target) || !this.popupRef && !e.target.className.includes("k-treeview-leaf")) {
        this.togglePopup(!this.isOpen);
      }
    }
  }
  handleEscape() {
    this.togglePopup(false);
    this.focus();
  }
  setState() {
    if (isPresent(this.value) && isPresent(this.dataItem) && isPresent(this.valueField)) {
      this.text = this.getText(this.textField, this.dataItem);
      const valueField = this.getField(this.valueField, this.dataItem);
      this.selectBy = valueField;
      this.selectedKeys = [getter(valueField)(this.dataItem)];
    } else {
      this.clearState();
    }
    this.cdr.markForCheck();
  }
  clearState() {
    this.text = void 0;
    this.selectedKeys = [];
  }
  subscribeEvents() {
    [this.navigationService.open.subscribe((event) => {
      event.originalEvent.preventDefault();
      this.togglePopup(true);
    }), this.navigationService.close.subscribe((event) => {
      event.originalEvent.preventDefault();
      this.togglePopup(false);
      this.focus();
    }), this.navigationService.enter.pipe(tap((event) => event.originalEvent.preventDefault())).subscribe((e) => {
      if (e.originalEvent.target === this.wrapper.nativeElement) {
        this.togglePopup(true);
      }
      if (!this.isOpen) {
        this.focus();
      }
    }), this.navigationService.esc.subscribe(() => this.handleEscape()), this.navigationService.tab.subscribe(() => {
      this.focus();
      if (this.isOpen) {
        this.treeview.blur();
        this.removeTreeViewFromTabOrder();
      }
    }), this.navigationService.down.subscribe((event) => {
      if (!this.treeview) {
        return;
      }
      event.originalEvent.preventDefault();
      if (!this.treeview.isActive) {
        this.treeview.focus();
      }
    }), this.navigationService.up.subscribe((event) => {
      if (!this.treeview) {
        return;
      }
      event.originalEvent.preventDefault();
      if (this.filterable && this.treeview["navigationService"]["activeIndex"] === "0") {
        if (this.isActionSheetExpanded) {
          this.actionSheetSearchBar.focus();
        } else {
          this.filterInput.nativeElement.focus();
        }
      }
    })].forEach((sub) => this.subs.add(sub));
  }
  subscribeTouchEvents() {
    if (!isDocumentAvailable() || !this.touchEnabled) {
      return;
    }
    this._zone.runOutsideAngular(() => (
      // Roll up DropDownTree on iOS when tapped outside
      this.touchstartDisposeHandler = this.renderer.listen(document, "touchstart", (e) => {
        const target = e.target;
        if (this.isFocused && !inDropDown(this.wrapper, target, this.popupRef)) {
          this._zone.run(() => {
            if (this.isOpen) {
              this.treeview.blur();
            }
            this.blur();
          });
        }
      })
    ));
  }
  subscribeFocusEvents() {
    if (isDocumentAvailable()) {
      this.handleFocus = this.handleFocus.bind(this);
      this.handleDocumentBlur = this.handleDocumentBlur.bind(this);
      this._zone.runOutsideAngular(() => {
        const useCapture = true;
        document.addEventListener("focus", this.handleFocus, useCapture);
        document.addEventListener("blur", this.handleDocumentBlur, useCapture);
      });
    }
  }
  unSubscribeFocusEvents() {
    if (isDocumentAvailable()) {
      const useCapture = true;
      document.removeEventListener("focus", this.handleFocus, useCapture);
      document.removeEventListener("blur", this.handleDocumentBlur, useCapture);
    }
  }
  unsubscribeEvents() {
    this.subs.unsubscribe();
    this.unSubscribeFocusEvents();
    if (this.touchstartDisposeHandler) {
      this.touchstartDisposeHandler();
    }
  }
  handleDocumentBlur(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    this.handleBlur(event);
  }
  assignAriaDescribedBy() {
    const currentValue = this.wrapper.nativeElement.getAttribute("aria-describedby") || "";
    const newValue = `${this.valueLabelId} ${currentValue.trim()}`.trim();
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-describedby", newValue);
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("picker", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("picker", this.fillMode));
    }
  }
  /**
   * Remove the `TreeView` from the tab order, otherwise a focus loop between the page elements will occur
   * and the user will not be able to tab to the rest of the browser elements
   */
  removeTreeViewFromTabOrder() {
    const nodes = this.treeview.element.nativeElement.querySelectorAll("li");
    nodes.forEach((item) => {
      if (item.getAttribute("tabindex") === "0") {
        this.lastNodeOnFocus = item;
        this.lastNodeOnFocus.setAttribute("tabindex", "-1");
      }
    });
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    if (this.filterable) {
      this.actionSheetSearchBar.value = "";
      this.filterChange.emit("");
    }
    this.wrapper.nativeElement.focus();
    this.closed.emit();
  }
  openActionSheet() {
    this.windowSize = windowSize();
    this.isActionSheetExpanded = true;
    this.actionSheet.toggle(true);
    this.title = setActionSheetTitle(this.wrapper, this.title);
    this.cdr.detectChanges();
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.removeTreeViewFromTabOrder();
    this.filterable && this.actionSheetSearchBar.focus();
  }
};
DropDownTreeComponent.ɵfac = function DropDownTreeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownTreeComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService));
};
DropDownTreeComponent.ɵcmp = ɵɵdefineComponent({
  type: DropDownTreeComponent,
  selectors: [["kendo-dropdowntree"]],
  contentQueries: function DropDownTreeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NodeTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, ValueTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueTemplate = _t.first);
    }
  },
  viewQuery: function DropDownTreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(_c21, 5);
      ɵɵviewQuery(_c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeview = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterInput = _t.first);
    }
  },
  hostVars: 22,
  hostBindings: function DropDownTreeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("readonly", ctx.isReadonly)("aria-invalid", ctx.hostAriaInvalid)("aria-disabled", ctx.isDisabled)("aria-busy", ctx.isBusy)("aria-controls", ctx.hostAriaControls)("id", ctx.id)("dir", ctx.direction)("tabindex", ctx.hostTabIndex)("role", ctx.role)("aria-haspopup", ctx.ariaHasPopup)("aria-expanded", ctx.isAriaExpanded)("aria-autocomplete", ctx.hostAriaAutocomplete);
      ɵɵclassProp("k-dropdowntree", ctx.hostClasses)("k-picker", ctx.hostClasses)("k-disabled", ctx.isDisabled)("k-loading", ctx.isLoading)("k-readonly", ctx.readonly);
    }
  },
  inputs: {
    icon: "icon",
    svgIcon: "svgIcon",
    loading: "loading",
    clearButton: "clearButton",
    data: "data",
    value: "value",
    textField: "textField",
    valueField: "valueField",
    valueDepth: "valueDepth",
    hasChildren: "hasChildren",
    fetchChildren: "fetchChildren",
    placeholder: "placeholder",
    popupSettings: "popupSettings",
    dataItem: "dataItem",
    listHeight: "listHeight",
    disabled: "disabled",
    readonly: "readonly",
    valuePrimitive: "valuePrimitive",
    tabindex: "tabindex",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    itemDisabled: "itemDisabled",
    isNodeExpanded: "isNodeExpanded",
    isNodeVisible: "isNodeVisible",
    loadOnDemand: "loadOnDemand",
    filterable: "filterable",
    filter: "filter",
    focusableId: "focusableId",
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle"
  },
  outputs: {
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    nodeExpand: "nodeExpand",
    nodeCollapse: "nodeCollapse",
    onFocus: "focus",
    onBlur: "blur",
    valueChange: "valueChange",
    filterChange: "filterChange"
  },
  exportAs: ["kendoDropDownTree"],
  standalone: true,
  features: [ɵɵProvidersFeature([DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.dropdowntree"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropDownTreeComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => DropDownTreeComponent)
  }, {
    provide: DataBoundComponent,
    useExisting: forwardRef(() => DropDownTreeComponent)
  }, {
    provide: ExpandableComponent,
    useExisting: forwardRef(() => DropDownTreeComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 17,
  vars: 15,
  consts: () => {
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_20 = goog.getMsg("NO DATA FOUND");
      i18n_20 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_20;
    } else {
      i18n_20 = $localize`:kendo.dropdowntree.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_21;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_21 = goog.getMsg("clear");
      i18n_21 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_21;
    } else {
      i18n_21 = $localize`:kendo.dropdowntree.clearTitle|The title of the clear button:clear`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_22 = goog.getMsg("Select");
      i18n_22 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_22;
    } else {
      i18n_22 = $localize`:kendo.dropdowntree.selectButtonText|The text set as aria-label on the select button:Select`;
    }
    let i18n_23;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_23 = goog.getMsg("Filter");
      i18n_23 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_23;
    } else {
      i18n_23 = $localize`:kendo.dropdowntree.filterInputLabel|The text set as aria-label on the filter input:Filter`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_24 = goog.getMsg("Options list");
      i18n_24 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_24;
    } else {
      i18n_24 = $localize`:kendo.dropdowntree.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    return [["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["filterInput", ""], ["treeview", ""], ["kendoDropDownTreeLocalizedMessages", "", "noDataText", i18n_20, "clearTitle", i18n_21, "selectButtonText", i18n_22, "filterInputLabel", i18n_23, "popupLabel", i18n_24], [1, "k-input-inner", 3, "click"], [1, "k-input-value-text"], [4, "ngIf"], [3, "ngIf"], ["class", "k-clear-value", "aria-hidden", "true", 3, "visibility", "click", 4, "ngIf"], ["class", "k-i-loading k-input-loading-icon k-icon", 4, "ngIf"], ["tabindex", "-1", "type", "button", "aria-hidden", "true", 1, "k-input-button", "k-button", "k-icon-button", 3, "ngClass"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [3, "closePopup", "onExpand", "onCollapse", "textInputChange", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "subtitle"], [3, "resize", 4, "ngIf"], [3, "templateContext"], ["aria-hidden", "true", 1, "k-clear-value", 3, "click"], ["name", "x", 3, "svgIcon"], [1, "k-i-loading", "k-input-loading-icon", "k-icon"], [4, "ngTemplateOutlet"], ["class", "k-list-filter", 4, "ngIf"], ["kendoTreeViewSelectable", "", 3, "size", "nodes", "maxHeight", "animate", "selectedKeys", "selectBy", "textField", "children", "hasChildren", "loadOnDemand", "isExpanded", "isDisabled", "nodeTemplate", "filter", "isVisible", "selectedKeysChange", "focusout", "keydown", "selectionChange", "expand", "collapse", "childrenLoaded", 4, "ngIf"], ["class", "k-no-data", 4, "ngIf"], [1, "k-list-filter"], [1, "k-textbox", "k-input", 3, "ngClass"], [1, "k-input-prefix"], ["name", "search", 1, "k-icon", 3, "svgIcon"], ["role", "textbox", 1, "k-input-inner", 3, "input", "keydown.arrowdown", "keydown.alt.arrowup", "keydown.escape", "filterInput", "value", "kendoEventsOutsideAngular", "scope"], ["kendoTreeViewSelectable", "", 3, "selectedKeysChange", "focusout", "keydown", "selectionChange", "expand", "collapse", "childrenLoaded", "size", "nodes", "animate", "selectedKeys", "selectBy", "textField", "children", "hasChildren", "loadOnDemand", "isExpanded", "isDisabled", "nodeTemplate", "filter", "isVisible"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "resize"]];
  },
  template: function DropDownTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementStart(1, "span", 6);
      ɵɵlistener("click", function DropDownTreeComponent_Template_span_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView($event.preventDefault());
      });
      ɵɵelementStart(2, "span", 7);
      ɵɵtemplate(3, DropDownTreeComponent_3_Template, 1, 4, null, 8)(4, DropDownTreeComponent_ng_template_4_Template, 1, 1, "ng-template", 9);
      ɵɵelementEnd()();
      ɵɵtemplate(5, DropDownTreeComponent_span_5_Template, 2, 4, "span", 10)(6, DropDownTreeComponent_span_6_Template, 1, 0, "span", 11);
      ɵɵelementStart(7, "button", 12);
      ɵɵelement(8, "kendo-icon-wrapper", 13);
      ɵɵelementEnd();
      ɵɵtemplate(9, DropDownTreeComponent_ng_template_9_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(11, null, 1);
      ɵɵelementStart(13, "responsive-renderer", 14);
      ɵɵlistener("closePopup", function DropDownTreeComponent_Template_responsive_renderer_closePopup_13_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("onExpand", function DropDownTreeComponent_Template_responsive_renderer_onExpand_13_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onExpand());
      })("onCollapse", function DropDownTreeComponent_Template_responsive_renderer_onCollapse_13_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onCollapse());
      })("textInputChange", function DropDownTreeComponent_Template_responsive_renderer_textInputChange_13_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFilterInputChange($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(14, DropDownTreeComponent_ng_template_14_Template, 5, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(16, DropDownTreeComponent_kendo_resize_sensor_16_Template, 1, 0, "kendo-resize-sensor", 15);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(15);
      ɵɵadvance();
      ɵɵattribute("id", ctx.valueLabelId);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.valueTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.valueTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.loading && !ctx.readonly && ctx.clearButton && (ctx.text == null ? null : ctx.text.length) && !ctx.disabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.selectButtonClasses);
      ɵɵattribute("aria-label", ctx.messageFor("selectButtonText"));
      ɵɵadvance();
      ɵɵproperty("name", ctx.icon || "caret-alt-down")("svgIcon", ctx.svgIcon || ctx.caretAltDownIcon);
      ɵɵadvance(5);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", ctx.filterable)("subtitle", ctx.subtitle);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgIf, TemplateContextDirective, IconWrapperComponent, NgClass, NgTemplateOutlet, ResponsiveRendererComponent, FilterInputDirective, EventsOutsideAngularDirective, TreeViewComponent, SelectDirective, ResizeSensorComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownTreeComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownTree",
      providers: [DataService, SelectionService, NavigationService, DisabledItemsService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdowntree"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DropDownTreeComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => DropDownTreeComponent)
      }, {
        provide: DataBoundComponent,
        useExisting: forwardRef(() => DropDownTreeComponent)
      }, {
        provide: ExpandableComponent,
        useExisting: forwardRef(() => DropDownTreeComponent)
      }],
      selector: "kendo-dropdowntree",
      template: `
        <ng-container kendoDropDownTreeLocalizedMessages
            i18n-noDataText="kendo.dropdowntree.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-clearTitle="kendo.dropdowntree.clearTitle|The title of the clear button"
            clearTitle="clear"

            i18n-selectButtonText="kendo.dropdowntree.selectButtonText|The text set as aria-label on the select button"
            selectButtonText="Select"

            i18n-filterInputLabel="kendo.dropdowntree.filterInputLabel|The text set as aria-label on the filter input"
            filterInputLabel="Filter"

            i18n-popupLabel="kendo.dropdowntree.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"
        >
        </ng-container>
        <span
            [attr.id]="valueLabelId"
            class="k-input-inner"
            (click)="$event.preventDefault()"
        >
            <span class="k-input-value-text">
                <ng-template *ngIf="valueTemplate"
                    [templateContext]="{
                        templateRef: valueTemplate.templateRef,
                        $implicit: dataItem
                    }">
                </ng-template>
                <ng-template [ngIf]="!valueTemplate"> {{ text || placeholder }} </ng-template>
            </span>
        </span>
        <span
            *ngIf="!loading && !readonly && clearButton && text?.length && !disabled"
            class="k-clear-value"
            [style.visibility]="clearButtonVisiblity"
            aria-hidden="true"
            [attr.title]="messageFor('clearTitle')"
            (click)="clearValue($event)"
        >
            <kendo-icon-wrapper
                name="x"
                [svgIcon]="xIcon"
            >
            </kendo-icon-wrapper>
        </span>
        <span *ngIf="loading" class="k-i-loading k-input-loading-icon k-icon"></span>
        <button
            tabindex="-1"
            type="button"
            aria-hidden="true"
            class="k-input-button k-button k-icon-button"
            [ngClass]="selectButtonClasses"
            [attr.aria-label]="messageFor('selectButtonText')"
        >
            <kendo-icon-wrapper
                [name]="icon || 'caret-alt-down'"
                innerCssClass="k-button-icon"
                [svgIcon]="svgIcon || caretAltDownIcon"
            >
            </kendo-icon-wrapper>
        </button>
        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <ng-container #container></ng-container>

        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="filterable"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (onExpand)="onExpand()"
            (onCollapse)="onCollapse()"
            (textInputChange)="handleFilterInputChange($event)"
        >
        </responsive-renderer>
        <ng-template #sharedPopupActionSheetTemplate>
            <span
                *ngIf="filterable && !isActionSheetExpanded"
                class="k-list-filter"
            >
                <span
                    class="k-textbox k-input"
                    [ngClass]="filterInputClasses"
                >
                    <span class="k-input-prefix">
                        <kendo-icon-wrapper
                            class="k-icon"
                            name="search"
                            [svgIcon]="searchIcon"
                        >
                        </kendo-icon-wrapper>
                    </span>
                    <input
                        #filterInput
                        (input)="handleFilterInputChange($event.target)"
                        [filterInput]="filterable && !touchEnabled"
                        (keydown.arrowdown)="handleKeydown($event, filterInput)"
                        (keydown.alt.arrowup)="handleKeydown($event, filterInput)"
                        (keydown.escape)="handleKeydown($event, filterInput)"
                        [attr.aria-label]="messageFor('filterInputLabel')"
                        [value]="filter"
                        class="k-input-inner"
                        role="textbox"
                        [kendoEventsOutsideAngular]="{
                            blur: handleBlur
                        }"
                        [scope]="this"
                    >
                </span>
            </span>
            <!--header template-->
            <ng-template
                *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate?.templateRef
                }">
            </ng-template>
            <kendo-treeview
                #treeview
                [attr.id]="treeViewId"
                *ngIf="data.length !== 0 && !allNodesHidden"
                [size]="size"
                [nodes]="data"
                [style.maxHeight.px]="listHeight"
                [animate]="false"
                [(selectedKeys)]="selectedKeys"
                [selectBy]="selectBy"
                [textField]="textField"
                kendoTreeViewSelectable
                [children]="children"
                [hasChildren]="hasChildren"
                [loadOnDemand]="loadOnDemand"
                [isExpanded]="isNodeExpanded"
                [isDisabled]="itemDisabled"
                [nodeTemplate]="nodeTemplate"
                [filter]="filter"
                [isVisible]="isNodeVisible"
                (focusout)="handleBlur($event)"
                (keydown)="handleKeydown($event)"
                (selectionChange)="onSelectionChange($event)"
                (expand)="nodeExpand.emit($event)"
                (collapse)="nodeCollapse.emit($event)"
                (childrenLoaded)="onChildrenLoaded()"
            >
            </kendo-treeview>
            <!--footer template-->
            <ng-template
                *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate?.templateRef
                }">
            </ng-template>
            <!--no-data template-->
            <div class="k-no-data" *ngIf="data.length === 0 || allNodesHidden">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate?.templateRef
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
        </ng-template>

        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgIf, TemplateContextDirective, IconWrapperComponent, NgClass, NgTemplateOutlet, ResponsiveRendererComponent, FilterInputDirective, EventsOutsideAngularDirective, TreeViewComponent, SelectDirective, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }, {
      type: PopupService
    }, {
      type: NavigationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }];
  }, {
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-dropdowntree"]
    }, {
      type: HostBinding,
      args: ["class.k-picker"]
    }],
    isReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    hostAriaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }],
    isBusy: [{
      type: HostBinding,
      args: ["attr.aria-busy"]
    }],
    hostAriaControls: [{
      type: HostBinding,
      args: ["attr.aria-controls"]
    }],
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaHasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    isAriaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    hostAriaAutocomplete: [{
      type: HostBinding,
      args: ["attr.aria-autocomplete"]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: [NodeTemplateDirective, {
        static: false
      }]
    }],
    valueTemplate: [{
      type: ContentChild,
      args: [ValueTemplateDirective, {
        static: false
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    treeview: [{
      type: ViewChild,
      args: ["treeview", {
        static: false
      }]
    }],
    filterInput: [{
      type: ViewChild,
      args: ["filterInput", {
        static: false
      }]
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    nodeExpand: [{
      type: Output
    }],
    nodeCollapse: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    loading: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    valueDepth: [{
      type: Input
    }],
    hasChildren: [{
      type: Input
    }],
    fetchChildren: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    dataItem: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    valuePrimitive: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    isNodeExpanded: [{
      type: Input
    }],
    isNodeVisible: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }],
    filterable: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }]
  });
})();
var nodeIndex$1 = (item) => (item || {}).key;
var buildTreeItem = (dataItem, valueField, currentLevelIndex) => {
  if (!isPresent(dataItem)) {
    return null;
  }
  return {
    dataItem,
    key: valueFrom({
      dataItem,
      level: currentLevelIndex
    }, valueField) + "_" + currentLevelIndex
  };
};
var MultiSelectTreeLookupService = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  reset() {
    this.map.clear();
  }
  registerChildren(index, children) {
    const item = this.item(index);
    if (!item) {
      return;
    }
    item.children = children;
  }
  item(index) {
    return this.map.get(index) || null;
  }
  registerItem(item, parent) {
    const currentLookup = {
      children: [],
      item,
      parent: this.item(nodeIndex$1(parent))
    };
    this.map.set(item.key, currentLookup);
  }
  itemLookup(index) {
    const item = this.item(index);
    if (!item) {
      return null;
    }
    return {
      children: this.mapChildren(item.children),
      item: item.item,
      parent: item.parent
    };
  }
  mapChildren(children = []) {
    return children.map((c) => {
      const {
        item,
        parent,
        children: children2
      } = this.item(c.key);
      return {
        children: this.mapChildren(children2),
        item,
        parent
      };
    });
  }
};
MultiSelectTreeLookupService.ɵfac = function MultiSelectTreeLookupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectTreeLookupService)();
};
MultiSelectTreeLookupService.ɵprov = ɵɵdefineInjectable({
  token: MultiSelectTreeLookupService,
  factory: MultiSelectTreeLookupService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectTreeLookupService, [{
    type: Injectable
  }], null, null);
})();
var BaseCheckDirective = class {
  addItem(item) {
    if (this.isItemChecked(item)) {
      return;
    }
    const level = getHierarchicalItemLevel(item.index);
    const key = this.getKey(item, level);
    const candidate = __spreadProps(__spreadValues({}, item), {
      level,
      key
    });
    this.checkedItems.push(candidate);
    this.checkedKeys.add(key);
  }
  removeItem(item) {
    if (!this.isItemChecked(item)) {
      return;
    }
    const level = getHierarchicalItemLevel(item.index);
    const key = this.getKey(item, level);
    const candidate = __spreadProps(__spreadValues({}, item), {
      level,
      key
    });
    this.checkedItems = this.checkedItems.filter((item2) => valueFrom(item2, this.valueField) !== valueFrom(candidate, this.valueField));
    this.checkedKeys.delete(key);
  }
  isItemChecked(item) {
    const level = item.index.split("_").length - 1;
    item.level = level;
    const key = this.getKey(item, level);
    return this.checkedKeys.has(key);
  }
  updateItems() {
    this.checkedItems = this.checkedItems || [];
    this.checkedKeys = new Set(this.checkedItems.map((item) => item.key));
  }
  /**
   * Adds the item's depth to the item's value to allow duplicate values on different levels.
   *
   * @param item - The checked key.
   * @returns { string } - A string key consisting of the item's `valueField` value and its depth (depth is 0 if data is homogeneous).
   */
  getKey(item, level) {
    return valueFrom(item, this.valueField) + "_" + (this.isHeterogeneous ? level : 0);
  }
};
BaseCheckDirective.ɵfac = function BaseCheckDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BaseCheckDirective)();
};
BaseCheckDirective.ɵdir = ɵɵdefineDirective({
  type: BaseCheckDirective,
  inputs: {
    valueField: "valueField",
    checkedItems: "checkedItems",
    isHeterogeneous: "isHeterogeneous"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseCheckDirective, [{
    type: Directive
  }], null, {
    valueField: [{
      type: Input
    }],
    checkedItems: [{
      type: Input
    }],
    isHeterogeneous: [{
      type: Input
    }]
  });
})();
var CheckDirective = class extends BaseCheckDirective {
  constructor(treeView) {
    super();
    this.treeView = treeView;
    this.checkedItemsChange = new EventEmitter();
    this.checkedKeys = /* @__PURE__ */ new Set();
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.treeView.checkedChange.subscribe(this.handleCheckedChange.bind(this)));
    this.treeView.isChecked = this.getCheckedState.bind(this);
  }
  ngOnChanges(changes) {
    if (isPresent(changes["checkable"])) {
      this.toggleCheckOnClick();
    }
    if (isPresent(changes["checkedItems"])) {
      this.updateItems();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.unsubscribeClick();
  }
  getCheckedState(dataItem, index) {
    if (this.isItemChecked({
      dataItem,
      index
    })) {
      return "checked";
    } else if (this.checkable.checkChildren && this.isItemIndeterminate(this.treeView.itemLookup(index))) {
      return "indeterminate";
    } else {
      return "none";
    }
  }
  handleCheckedChange(node) {
    this.checkNode(node);
    const checkParents = this.checkable.checkChildren;
    if (checkParents) {
      this.checkParents(node.parent);
    }
    this.checkedItemsChange.emit(this.checkedItems.slice());
  }
  toggleCheckOnClick() {
    this.unsubscribeClick();
    if (this.checkable.checkOnClick) {
      this.clickSubscription = this.treeView.nodeClick.pipe(filter((event) => event.type === "click")).subscribe((event) => {
        const lookup = this.treeView.itemLookup(event.item.index);
        this.handleCheckedChange(lookup);
      });
    }
  }
  unsubscribeClick() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
      this.clickSubscription = null;
    }
  }
  checkNode(lookup) {
    if (this.treeView.isDisabled(lookup.item.dataItem, lookup.item.index)) {
      return;
    }
    const target = lookup.item;
    const pendingCheck = [target];
    if (this.checkable.checkChildren) {
      const filter2 = (item) => this.treeView.isVisible(item.dataItem, item.index) && !this.treeView.isDisabled(item.dataItem, item.index);
      fetchDescendentNodes(lookup, filter2).forEach((lookup2) => pendingCheck.push(lookup2.item));
    }
    const shouldCheck = !this.isItemChecked(target);
    pendingCheck.forEach((item) => {
      if (shouldCheck) {
        this.addItem(item);
      } else {
        this.removeItem(item);
      }
    });
  }
  checkParents(parent) {
    let currentParent = parent;
    while (currentParent) {
      const allChildrenSelected = currentParent.children.every((item) => this.isItemChecked(item));
      if (allChildrenSelected) {
        this.addItem(currentParent.item);
      } else {
        this.removeItem(currentParent.item);
      }
      currentParent = currentParent.parent;
    }
  }
  isItemIndeterminate(lookup) {
    const children = lookup.children;
    if (!Array.isArray(children) || children.length === 0) {
      return false;
    }
    let index = 0;
    let child = children[index];
    while (isPresent(child)) {
      if (this.isItemChecked(child.item) || this.isItemIndeterminate(child)) {
        return true;
      }
      index += 1;
      child = children[index];
    }
    return false;
  }
};
CheckDirective.ɵfac = function CheckDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckDirective)(ɵɵdirectiveInject(TreeViewComponent));
};
CheckDirective.ɵdir = ɵɵdefineDirective({
  type: CheckDirective,
  selectors: [["", "kendoMultiSelectTreeCheckable", ""]],
  inputs: {
    checkable: "checkable",
    valueField: "valueField",
    checkedItems: "checkedItems"
  },
  outputs: {
    checkedItemsChange: "checkedItemsChange"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectTreeCheckable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }];
  }, {
    checkable: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    checkedItems: [{
      type: Input
    }],
    checkedItemsChange: [{
      type: Output
    }]
  });
})();
var CheckAllDirective = class extends BaseCheckDirective {
  constructor(element, zone, cdr, renderer) {
    super();
    this.element = element;
    this.zone = zone;
    this.cdr = cdr;
    this.renderer = renderer;
    this.checkedItemsChange = new EventEmitter();
    this.checkedKeys = /* @__PURE__ */ new Set();
  }
  handleChange(event) {
    this.currentCheckedState = event.checked;
    this.currentIndeterminateState = this.isIndeterminate;
    this.treeview.nodes.map((_value, index) => {
      const itemIndex = String(index);
      const itemLookup = this.treeview.itemLookup(itemIndex);
      this.checkNode(itemLookup);
    });
    this.checkedItemsChange.emit(this.checkedItems.slice());
  }
  get isIndeterminate() {
    const isIndeterminate = this.treeview.nodes.some((_node, index) => {
      const itemIndex = String(index);
      const itemLookup = this.treeview.itemLookup(itemIndex);
      return this.someChecked(itemLookup);
    });
    return this.isChecked ? false : isIndeterminate;
  }
  get isChecked() {
    const isChecked = this.treeview.nodes.every((_node, index) => {
      const itemIndex = String(index);
      const itemLookup = this.treeview.itemLookup(itemIndex);
      return this.allChecked(itemLookup);
    });
    return isChecked;
  }
  ngOnChanges(changes) {
    if (isPresent(changes["checkedItems"])) {
      this.updateItems();
      this.renderer.setProperty(this.element.nativeElement, "checked", this.isChecked);
      this.renderer.setProperty(this.element.nativeElement, "indeterminate", this.isIndeterminate);
    }
  }
  ngOnInit() {
    if (this.focused) {
      this.nextTick(() => this.element.nativeElement.focus());
    }
  }
  nextTick(fn) {
    this.zone.runOutsideAngular(() => setTimeout(fn));
  }
  checkNode(itemLookup) {
    if (this.treeview.isDisabled(itemLookup.item.dataItem, itemLookup.item.index)) {
      return;
    }
    const pendingCheck = [];
    const filter2 = (item) => this.treeview.isVisible(item.dataItem, item.index) && !this.treeview.isDisabled(item.dataItem, item.index);
    pendingCheck.push(itemLookup.item);
    fetchDescendentNodes(itemLookup, filter2).forEach((lookup) => pendingCheck.push(lookup.item));
    pendingCheck.forEach((item) => {
      if (this.currentIndeterminateState) {
        if (this.lastAction === "check") {
          this.addItem(item);
        } else {
          this.removeItem(item);
        }
        return;
      }
      if (this.currentCheckedState) {
        this.addItem(item);
      } else {
        this.removeItem(item);
      }
    });
  }
  allChecked(lookup) {
    const children = lookup && lookup.children;
    if (!Array.isArray(children)) {
      return;
    }
    const childrenChecked = children.every((child) => {
      if (child.children.length) {
        return this.isItemChecked(child.item) && this.allChecked(child);
      }
      return this.isItemChecked(child.item);
    });
    return childrenChecked && this.isItemChecked(lookup.item);
  }
  someChecked(lookup) {
    const children = lookup && lookup.children;
    if (!Array.isArray(children)) {
      return;
    }
    const childrenChecked = children.some((child) => {
      if (child.children.length) {
        return this.isItemChecked(child.item) || this.someChecked(child);
      }
      return this.isItemChecked(child.item);
    });
    return childrenChecked || this.isItemChecked(lookup.item);
  }
};
CheckAllDirective.ɵfac = function CheckAllDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckAllDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
};
CheckAllDirective.ɵdir = ɵɵdefineDirective({
  type: CheckAllDirective,
  selectors: [["", "checkAll", ""]],
  hostBindings: function CheckAllDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function CheckAllDirective_change_HostBindingHandler($event) {
        return ctx.handleChange($event.target);
      });
    }
  },
  inputs: {
    lastAction: "lastAction",
    treeview: "treeview",
    checkedItems: "checkedItems",
    valueField: "valueField",
    focused: [0, "checkAll", "focused"]
  },
  outputs: {
    checkedItemsChange: "checkedItemsChange"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckAllDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "[checkAll]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }];
  }, {
    lastAction: [{
      type: Input
    }],
    treeview: [{
      type: Input
    }],
    checkedItems: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    focused: [{
      type: Input,
      args: ["checkAll"]
    }],
    checkedItemsChange: [{
      type: Output
    }],
    handleChange: [{
      type: HostListener,
      args: ["change", ["$event.target"]]
    }]
  });
})();
var DEFAULT_POPUP_SETTINGS = {
  animate: true
};
var DEFAULT_CHECKABLE_SETTINGS = {
  checkChildren: true,
  checkOnClick: true
};
var hasChildren = () => false;
var fetchChildren = () => of([]);
var itemDisabled = () => false;
var isNodeVisible = () => true;
var DEFAULT_SIZE = "medium";
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var MultiSelectTreeComponent = class {
  constructor(injector, wrapper, popupService, renderer, navigationService, _zone, localization, cdr, lookup) {
    this.injector = injector;
    this.wrapper = wrapper;
    this.popupService = popupService;
    this.renderer = renderer;
    this.navigationService = navigationService;
    this._zone = _zone;
    this.localization = localization;
    this.cdr = cdr;
    this.lookup = lookup;
    this.touchEnabled = touchEnabled;
    this.animationDuration = animationDuration;
    this.searchIcon = searchIcon;
    this.xIcon = xIcon;
    this.hostClasses = true;
    this.treeViewId = `k-${guid()}`;
    this.role = "combobox";
    this.ariaHasPopup = "tree";
    this.adaptiveMode = "none";
    this.title = "";
    this.windowSize = "large";
    this.isActionSheetExpanded = false;
    this.valueDepth = [];
    this.placeholder = "";
    this._listHeight = 200;
    this.disabled = false;
    this.readonly = false;
    this.valuePrimitive = false;
    this.loadOnDemand = false;
    this.focusableId = `k-${guid()}`;
    this.clearButton = true;
    this.filterable = false;
    this.checkAll = false;
    this.hasChildren = hasChildren;
    this.fetchChildren = fetchChildren;
    this.isNodeVisible = isNodeVisible;
    this.itemDisabled = itemDisabled;
    this.tagMapper = (tags) => tags || [];
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.open = new EventEmitter();
    this.opened = new EventEmitter();
    this.close = new EventEmitter();
    this.closed = new EventEmitter();
    this.nodeExpand = new EventEmitter();
    this.nodeCollapse = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.removeTag = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.filterStateChange = new EventEmitter();
    this.filter = "";
    this.checkedItems = [];
    this.showAfter = 0;
    this.allNodesHidden = false;
    this.tagListId = `k-${guid()}`;
    this.tagPrefix = "tag-" + guid();
    this.focusedTagIndex = void 0;
    this._value = [];
    this._tabindex = 0;
    this._popupSettings = DEFAULT_POPUP_SETTINGS;
    this._checkableSettings = DEFAULT_CHECKABLE_SETTINGS;
    this._isFocused = false;
    this._initiallyCheckedItems = [];
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._searchableNodes = [];
    this._typedValue = "";
    this.printableCharacters = new Subject();
    this.subs = new Subscription();
    this.lastAction = "check";
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop;
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subscribeEvents();
    this.subscribeFocusEvents();
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get hostAriaAutocomplete() {
    return this.filterable ? "list" : null;
  }
  get isLoading() {
    return this.loading;
  }
  get hostAriaInvalid() {
    return this.formControl ? this.formControl.invalid.toString() : null;
  }
  get isBusy() {
    return this.loading ? "true" : null;
  }
  get id() {
    return this.focusableId;
  }
  get hostTabIndex() {
    return this.tabindex;
  }
  get isReadonly() {
    return this.readonly ? "" : null;
  }
  get ariaDescribedBy() {
    return this.tagListId;
  }
  get ariaActiveDescendant() {
    return this.focusedTagId;
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * @hidden
   */
  onFilterChange(text) {
    if (this.filterable) {
      this.filterChange.emit(text);
    }
  }
  /**
   * @hidden
   */
  onExpand() {
    this._searchableNodes = getSearchableItems(this.treeViewId, this.actionSheet.element.nativeElement);
    this.isActionSheetExpanded = true;
  }
  /**
   * @hidden
   */
  onCollapse() {
    this.isActionSheetExpanded = false;
  }
  /**
   * Sets the subtitle of the ActionSheet that is rendered instead of the Popup when using small screen devices.
   * By default the ActionSheet subtitle uses the text provided for the `placeholder` of the AutoComplete.
  */
  set subtitle(_subtitle) {
    this._subtitle = _subtitle;
  }
  get subtitle() {
    return this._subtitle || this.placeholder;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  handleKeydown(event, input) {
    if (event.target === this.filterInput?.nativeElement && (event.keyCode === Keys.ArrowLeft || event.keyCode === Keys.ArrowRight)) {
      return;
    }
    if (input) {
      event.stopImmediatePropagation();
    }
    const deleteTag = this.isWrapperActive && event.keyCode === Keys.Backspace && this.tags.length > 0;
    if (deleteTag) {
      this.handleBackspace();
      return;
    }
    if (this.disabled || this.readonly) {
      return;
    }
    if (!this.isFilterActive && isLetter(event.key) && !this.actionSheetSearchBar?.onFocus) {
      this.printableCharacters.next(event.key);
    }
    const eventData = event;
    const action = this.navigationService.process({
      originalEvent: eventData,
      openOnSpace: !this.isOpen,
      closeOnSpace: false
    });
    if (action === NavigationAction.Open) {
      eventData.preventDefault();
    }
    if (this.isOpen && action === NavigationAction.Enter) {
      const spaceKeyDownEvent = new KeyboardEvent("keydown", {
        "key": " ",
        "code": "Space",
        "keyCode": 32,
        "which": 32
      });
      this.treeview?.element.nativeElement.dispatchEvent(spaceKeyDownEvent);
    }
  }
  /**
   * @hidden
   */
  get actionSheet() {
    return this.responsiveRendererComponent?.actionSheet;
  }
  /**
   * @hidden
   */
  get actionSheetSearchBar() {
    return this.responsiveRendererComponent?.actionSheetSearchBar;
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  set treeview(treeview) {
    this._treeview = treeview;
    if (treeview) {
      if (this.isFocused && !this.filterable && !this.checkAll || this.touchEnabled) {
        treeview.focus();
      }
      Promise.resolve(null).then(() => this.treeview.animate = true);
    }
  }
  get treeview() {
    return this._treeview;
  }
  /**
   * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabindex(value) {
    const providedTabIndex = parseNumber(value);
    const defaultTabIndex = 0;
    this._tabindex = !isNaN(providedTabIndex) ? providedTabIndex : defaultTabIndex;
  }
  get tabindex() {
    return this.disabled ? -1 : this._tabindex;
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    if (size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    if (rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   *
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    if (fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Configures the popup of the MultiSelectTree.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped.
   * - `height: Number`&mdash;Sets the height of the popup container.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({}, DEFAULT_POPUP_SETTINGS, settings);
    this.cdr.detectChanges();
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Defines the checkable settings of the MultiSelecTree nodes.
   * If no value is provided, the default [`CheckableSettings`]({% slug api_dropdowns_multiselecttreecheckablesettings %}) are applied.
   */
  set checkableSettings(settings) {
    this._checkableSettings = Object.assign({}, DEFAULT_CHECKABLE_SETTINGS, settings);
  }
  get checkableSettings() {
    return this._checkableSettings;
  }
  /**
   * Sets the data of the MultiSelectTree.
   *
   * > The data has to be provided in an array-like list with objects.
   */
  set data(data) {
    this._nodes = data;
    this.setState();
    if (this.isContentInit) {
      this.registerLookupItems(data);
    }
  }
  get data() {
    return this._nodes;
  }
  /**
   * Sets the value of the MultiSelectTree.
   * It can either be of the primitive (string, numbers) or of the complex (objects) type.
   * To define the type, use the `valuePrimitive` option.
   *
   */
  set value(value) {
    this._value = value ? value : [];
    this.setState();
  }
  get value() {
    return this._value;
  }
  /**
   * Keeps the current `dataItems` object in order to resolve selection.
   * Needs to be provided when when programmatically setting a `value` and `valuePrimitive` is set to `true`.
   */
  set dataItems(items) {
    this._dataItems = (items || []).map((dataItem, index) => {
      if (hasProps(dataItem, ["dataItem", "index", "level"])) {
        return dataItem;
      }
      const level = this.valueDepth[index] || 0;
      const key = valueFrom({
        dataItem,
        level
      }, this.valueField) + "_" + (this.isHeterogeneous ? this.valueDepth[index] : 0);
      return {
        dataItem,
        index: null,
        level,
        key
      };
    });
    this.setState();
  }
  get dataItems() {
    return this._dataItems || this.value.map((value, index) => {
      const level = this.valueDepth[index] || 0;
      const key = valueFrom({
        dataItem: value,
        level
      }, this.valueField) + "_" + (this.isHeterogeneous ? this.valueDepth[index] : 0);
      return {
        dataItem: value,
        index: null,
        level,
        key
      };
    });
  }
  /**
   * Sets the height of the options list in the popup. By default, `listHeight` is 200px.
   *
   * > The `listHeight` property affects only the list of options and not the whole popup container.
   * > To set the height of the popup container, use `popupSettings.height`.
   *
   * > When using `adaptiveMode` and the screen size is `small` or `medium` the `listHeight` property is set to null.
   */
  set listHeight(_listHeight) {
    this._listHeight = _listHeight;
  }
  get listHeight() {
    if (this.isAdaptive) {
      return;
    }
    return this._listHeight;
  }
  /**
   * @hidden
   */
  get focusedTagId() {
    if (!isPresent(this.focusedTagIndex) || this.isOpen) {
      return null;
    }
    return this.tagPrefix + "-" + this.focusedTagIndex;
  }
  set isFocused(isFocused) {
    this.renderer[isFocused ? "addClass" : "removeClass"](this.wrapper.nativeElement, "k-focus");
    this._isFocused = isFocused;
  }
  get isFocused() {
    return this._isFocused;
  }
  /**
   * Returns the current open state. Returns `true` if the popup or actionSheet is open.
   */
  get isOpen() {
    return isTruthy(isPresent(this.popupRef) || this.isActionSheetExpanded);
  }
  get width() {
    const wrapperWidth = this.wrapper.nativeElement.offsetWidth;
    const width = this.popupSettings.width || wrapperWidth;
    const minWidth = isNaN(wrapperWidth) ? wrapperWidth : `${wrapperWidth}px`;
    const maxWidth = isNaN(width) ? width : `${width}px`;
    return {
      min: minWidth,
      max: maxWidth
    };
  }
  get height() {
    const popupHeight = this.popupSettings.height;
    return isPresent(popupHeight) ? `${popupHeight}px` : "auto";
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * @hidden
   */
  get popupContainerClasses() {
    const containerClasses = ["k-multiselecttree-popup"];
    if (this.popupSettings.popupClass) {
      containerClasses.push(this.popupSettings.popupClass);
    }
    return containerClasses;
  }
  /**
   * @hidden
   *
   * Alias for `data`. Used for compatibility with the `DataBoundComponent` interface.
   * Required for the data-binding directives.
   */
  set nodes(nodes) {
    this.data = nodes;
  }
  get nodes() {
    return this.data;
  }
  /**
   * @hidden
   *
   * Alias for `fetchChildren`. Used for compatibility with the `DataBoundComponent` interface.
   * Required for the data-binding directives
   */
  set children(callback) {
    this.fetchChildren = callback;
  }
  get children() {
    return this.fetchChildren;
  }
  /**
   * @hidden
   *
   * Alias for `nodeExpand`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  get expand() {
    return this.nodeExpand;
  }
  /**
   * @hidden
   *
   * Alias for `nodeCollapse`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  get collapse() {
    return this.nodeCollapse;
  }
  /**
   * @hidden
   *
   * Alias for `isNodeExpanded`. Used for compatibility with the `ExpandableComponent` interface.
   * Required for the expand-directive.
   */
  set isExpanded(callback) {
    this.isNodeExpanded = callback;
  }
  get isExpanded() {
    return this.isNodeExpanded;
  }
  /**
   * @hidden
   *
   * Alias for `isNodeVisible`. Used for compatibility with the `DataBoundComponent` interface.
   * The `DataBoundComponent` interface is used in the data-binding directives.
   */
  set isVisible(callback) {
    this.isNodeVisible = callback;
  }
  get isVisible() {
    return this.isNodeVisible;
  }
  get isTagFocused() {
    return !this.isOpen && this.focusedTagIndex !== void 0;
  }
  get isTreeViewActive() {
    return this.treeview && this.treeview.isActive;
  }
  get isWrapperActive() {
    return document.activeElement === this.wrapper.nativeElement;
  }
  get isFilterActive() {
    return this.filterInput && document.activeElement === this.filterInput.nativeElement;
  }
  get isCheckAllActive() {
    return this.checkAllInput && document.activeElement === this.checkAllInput.nativeElement;
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.isAdaptiveModeEnabled && this.windowSize !== windowSize()) {
      if (this.isOpen) {
        this.togglePopup(false);
      }
      this.windowSize = windowSize();
    }
    if (this.isOpen && !this.isActionSheetExpanded) {
      const popupWrapper = this.popupRef.popupElement;
      const {
        min,
        max
      } = this.width;
      popupWrapper.style.minWidth = min;
      popupWrapper.style.width = max;
    }
  }
  ngOnInit() {
    this.subs.add(this.printableCharacters.pipe(tap((char) => {
      this._typedValue += char;
      const itemToFocus = this._searchableNodes.find((node) => {
        return node.text.toLowerCase().indexOf(this._typedValue) === 0;
      });
      this.treeview.focus(itemToFocus?.index);
    }), debounceTime(1e3)).subscribe(() => {
      this._typedValue = "";
    }));
    this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", String(this.isOpen));
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.cdr.markForCheck();
    }));
    this.setComponentClasses();
    this._initiallyCheckedItems = [...this.checkedItems];
  }
  ngAfterViewInit() {
    this.windowSize = windowSize();
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "click", this.handleClick.bind(this)));
    this.subs.add(this.renderer.listen(this.wrapper.nativeElement, "keydown", this.handleKeydown.bind(this)));
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.destroyPopup();
    this.unsubscribeEvents();
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (anyChanged(["textField", "valueField", "valuePrimitive"], changes, false)) {
      this.isHeterogeneous = this.valueField && isArray(this.valueField);
      this.setState();
    }
    if (anyChanged(["valueDepth", "value", "dataItems"], changes, false)) {
      if (changes["value"] && !changes["dataItems"] && !this.valuePrimitive) {
        this.dataItems = this.value;
      } else {
        this.dataItems = this.dataItems.map((item, index) => __spreadProps(__spreadValues({}, item), {
          key: valueFrom({
            dataItem: item.dataItem,
            index: null,
            level: this.valueDepth[index] || 0
          }, this.valueField) + "_" + (this.isHeterogeneous ? this.valueDepth[index] : 0),
          level: this.valueDepth[index] || 0
        }));
      }
    }
    if (anyChanged(["data", "children", "hasChildren", "loadOnDemand", "valueField"], changes, true) && !this.loadOnDemand) {
      this.lookup.reset();
      this.registerLookupItems(this.data);
    }
  }
  /**
   * @hidden
   */
  ngAfterContentChecked() {
    this.verifySettings();
    if (this.data?.length > 0 && this.popupRef) {
      this.allNodesHidden = this.areNodesHidden(this.data);
    }
  }
  /**
   * @hidden
   */
  applyValue() {
    this.value = this._tempValue;
    this._initiallyCheckedItems = [...this.checkedItems];
    this.emitValueChange(this.value);
    this.setTags();
    this.toggle(false);
  }
  /**
   * @hidden
   */
  cancelValue() {
    this.checkedItems = [...this._initiallyCheckedItems];
    this.togglePopup(false);
  }
  ngAfterContentInit() {
    this.isContentInit = true;
    this.registerLookupItems(this.data);
  }
  /**
   * @hidden
   *
   * Used by the kendo-floatinglabel component to determine if the floating label
   * should be rendered inside the input when the component is not focused.
   */
  isEmpty() {
    return !this.placeholder && (!isPresent(this.value) || this.value.length === 0);
  }
  /**
   * Focuses the MultiSelectTree.
   */
  focus() {
    if (!this.disabled) {
      this.wrapper.nativeElement.focus();
    }
  }
  /**
   * Blurs the MultiSelectTree.
   */
  blur() {
    if (!this.disabled) {
      this.wrapper.nativeElement.blur();
    }
  }
  /**
   * Focuses a specific item of the MultiSelectTree based on a provided index in the format of `1_1`.
   * The targeted item should be expanded in order for it to be focused.
   * If null or invalid index is provided the focus will be set on the first item.
   */
  focusItemAt(index) {
    if (this.treeview) {
      const lookup = this.treeview.itemLookup(index);
      const isItemDisabled = !isPresent(lookup) || this.treeview.isDisabled(lookup.item.dataItem, lookup.item.index);
      if (!isItemDisabled) {
        this.treeview.focus(index);
      }
    }
  }
  /**
   * Resets the value of the MultiSelectTree.
   * If you use the `reset` method to clear the value of the component,
   * the model will not update automatically and the `valueChange` event will not be fired.
   */
  reset() {
    this.value = [];
    this.dataItems = [];
    this.valueDepth = [];
  }
  /**
   * Toggles the visibility of the popup or actionSheet
   * ([see example]({% slug openstate_multiselecttree %})).
   * If you use the `toggle` method to open or close the popup, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    Promise.resolve(null).then(() => {
      const shouldOpen = isPresent(open) ? open : !isPresent(this.popupRef);
      this.destroyPopup();
      if (shouldOpen) {
        this.createPopup();
      }
    });
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    if (!this.isFocused) {
      this.isFocused = true;
      if (hasObservers(this.onFocus)) {
        this._zone.run(() => {
          this.onFocus.emit();
        });
      }
      if (this.isOpen && this.treeview) {
        if (this.lastNodeOnFocus) {
          this.lastNodeOnFocus.setAttribute("tabindex", "0");
        }
        this.treeview.focus();
      }
    }
  }
  /**
   * @hidden
   */
  handleBlur(e) {
    if (!this.isActionSheetExpanded) {
      const relatedTarget = e && e.relatedTarget;
      if (this.wrapper.nativeElement.contains(relatedTarget) || this.isOpen && this.popupRef.popupElement.contains(relatedTarget)) {
        return;
      }
      this.isFocused = false;
      this.togglePopup(false);
      this.cdr.markForCheck();
      if (hasObservers(this.onBlur) || isUntouched(this.wrapper.nativeElement) || this.formControl?.updateOn === "blur") {
        this._zone.run(() => {
          this.onBlur.emit();
          this.onTouchedCallback();
        });
      }
    }
  }
  /**
   * @hidden
   */
  handleNodeClick(node) {
    if (!this.isFocused) {
      const parent = node.originalEvent.target.parentElement.parentElement;
      this.lastNodeOnFocus = parent;
      this.focus();
    }
  }
  /**
   * @hidden
   */
  togglePopup(open) {
    const isDisabled = this.disabled || this.readonly;
    const sameState = this.isOpen === open;
    this._zone.run(() => {
      this.focusedTagIndex = void 0;
    });
    if (isDisabled || sameState) {
      return;
    }
    const togglePrevented = this.triggerPopupEvents(open);
    if (!togglePrevented) {
      if (open) {
        this.createPopup();
      } else {
        this.destroyPopup();
      }
    } else {
      this.removeTreeViewFromTabOrder();
    }
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  handleCheckedItemsChange(items) {
    this.valueDepth = items.map((item) => item.level);
    this.lastAction = items.length > this.dataItems.length ? "check" : "uncheck";
    this.dataItems = items.slice();
    this.updateValue(this.dataItems);
  }
  /**
   * @hidden
   */
  handleRemoveTag({
    tag,
    index
  }) {
    if (this.disabled || this.readonly) {
      return;
    }
    const eventArgs = new RemoveTagEvent(tag);
    this.removeTag.emit(eventArgs);
    if (eventArgs.isDefaultPrevented()) {
      return;
    }
    if (tag instanceof Array) {
      this.dataItems = this.dataItems.filter((_item, i) => i < this.showAfter || this.disabledIndices.has(i));
      this.valueDepth = this.valueDepth.filter((_item, i) => i < this.showAfter || this.disabledIndices.has(i));
    } else if (this.loadOnDemand) {
      this.dataItems = this.dataItems.filter((_item, i) => i !== index || this.disabledIndices.has(i));
      this.valueDepth = this.valueDepth.filter((_item, i) => i !== index || this.disabledIndices.has(i));
    } else {
      const dataItem = this.dataItems[index];
      const itemKey = dataItem.key;
      const lookup = this.lookup.itemLookup(itemKey);
      const pendingCheck = [lookup.item];
      if (this.checkableSettings.checkChildren) {
        fetchDescendentNodes(lookup).forEach((lookup2) => pendingCheck.push(lookup2.item));
        pendingCheck.push(...this.removeParents(lookup.parent));
      }
      const keysToRemove = pendingCheck.map((item) => item.key);
      this.dataItems = this.dataItems.filter((_item, i) => {
        return !keysToRemove.includes(_item.key) || this.disabledIndices.has(i);
      });
      this.valueDepth = this.dataItems.map((i) => i.level);
    }
    this.updateValue(this.dataItems);
    if (!this.isFocused) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  handleTagMapperChange(showAfter) {
    this.showAfter = parseNumber(showAfter);
    this.setTags();
  }
  /**
   * @hidden
   */
  clearAll(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    this.focus();
    this.value = this.value.filter((_item, index) => this.disabledIndices.has(index));
    this.dataItems = this.dataItems.filter((_item, index) => this.disabledIndices.has(index));
    this.valueDepth = this.valueDepth.filter((_depth, index) => this.disabledIndices.has(index));
    this.emitValueChange(this.value);
  }
  /**
   * @hidden
   */
  writeValue(value) {
    if (!this.valuePrimitive && isPresent(value)) {
      this.dataItems = value;
    }
    if (!isPresent(value) && isPresent(this.value)) {
      this.dataItems = null;
    }
    this.value = value || [];
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleFilterInputChange(input) {
    this.filter = input.value;
    this.filterChange.next(input.value);
  }
  /**
   * @hidden
   */
  get filterInputClasses() {
    return `${this.size ? getSizeClass("input", this.size) : ""} ${this.fillMode ? "k-input-" + this.fillMode : ""} ${this.rounded ? getRoundedClass(this.rounded) : ""}`;
  }
  /**
   * @hidden
   */
  get checkAllCheckboxClasses() {
    return `${this.size ? getSizeClass("checkbox", this.size) : ""}`;
  }
  /**
   * @hidden
   */
  toggleCheckAll() {
    this.checkAllInput.nativeElement.focus();
    this.checkAllInput.nativeElement.click();
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (!isPresent(this.valueField) || !isPresent(this.textField)) {
      throw new Error(MultiSelectTreeMessages.textAndValue);
    }
    if (!isArray(this.value)) {
      throw new Error(MultiSelectTreeMessages.array);
    }
    if (this.value.length > 0) {
      if (this.valuePrimitive && this.value.some((item) => isObject(item))) {
        throw new Error(MultiSelectTreeMessages.primitive);
      }
      const isEveryDataItemObject = this.dataItems.every((item) => isObject(item.dataItem));
      if (this.valuePrimitive && !isArray(this.dataItems)) {
        throw new Error(MultiSelectTreeMessages.dataItems);
      }
      if (this.valuePrimitive && !isEveryDataItemObject) {
        throw new Error(MultiSelectTreeMessages.dataItems);
      }
      if (this.valuePrimitive && this.dataItems.length !== this.value.length) {
        throw new Error(MultiSelectTreeMessages.dataItemsLength);
      }
      if (!this.valuePrimitive && !isObjectArray(this.value)) {
        throw new Error(MultiSelectTreeMessages.object);
      }
      if ((isArray(this.valueField) || isArray(this.textField)) && !isArray(this.valueDepth)) {
        throw new Error(MultiSelectTreeMessages.valueDepth);
      }
      if ((isArray(this.valueField) || isArray(this.textField)) && this.valueDepth.length === 0) {
        throw new Error(MultiSelectTreeMessages.valueDepth);
      }
      if ((isArray(this.valueField) || isArray(this.textField)) && this.valueDepth.length !== this.value.length) {
        throw new Error(MultiSelectTreeMessages.valueDepthLength);
      }
    }
  }
  areNodesHidden(nodes) {
    return nodes.every((node, index) => !this.isVisible(node, String(index)));
  }
  emitValueChange(value) {
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }
  triggerPopupEvents(open) {
    const eventArgs = new PreventableEvent();
    if (hasObservers(this.open) || hasObservers(this.close)) {
      this._zone.run(() => {
        if (open) {
          this.open.emit(eventArgs);
        } else {
          this.close.emit(eventArgs);
        }
      });
    }
    return eventArgs.isDefaultPrevented();
  }
  createPopup() {
    this.windowSize = windowSize();
    if (this.isAdaptive) {
      this.openActionSheet();
      this.cdr.detectChanges();
      return;
    }
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      appendTo: this.appendTo,
      anchorAlign: anchorPosition,
      content: this.popupTemplate,
      popupAlign: popupPosition,
      positionMode: "absolute",
      popupClass: this.popupContainerClasses
    });
    const popupWrapper = this.popupRef.popupElement;
    const {
      min,
      max
    } = this.width;
    if (!this.appendTo) {
      this.renderer.setAttribute(popupWrapper, "role", "region");
      this.renderer.setAttribute(popupWrapper, "aria-label", this.messageFor("popupLabel"));
    }
    popupWrapper.style.minWidth = min;
    popupWrapper.style.width = max;
    popupWrapper.style.height = this.height;
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-controls", this.treeViewId);
    this.renderer.setAttribute(popupWrapper, "dir", this.direction);
    this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", "true");
    this.popupRef.popupOpen.subscribe(() => {
      this.cdr.detectChanges();
      this.opened.emit();
      this._searchableNodes = getSearchableItems(this.treeViewId, this.popupRef.popupElement);
    });
    this.popupRef.popupClose.subscribe(() => {
      if (hasObservers(this.closed)) {
        this._zone.run(() => {
          this.closed.emit();
        });
      }
    });
  }
  destroyPopup() {
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    }
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.renderer.setAttribute(this.wrapper.nativeElement, "aria-expanded", "false");
      this.renderer.removeAttribute(this.wrapper.nativeElement, "aria-controls");
      if (this.filter !== "") {
        this.filter = "";
        this.allNodesHidden = false;
        if (hasObservers(this.filterChange)) {
          this._zone.run(() => {
            this.filterChange.emit("");
          });
        }
      }
    }
  }
  handleClick(e) {
    if (this.popupRef && this.popupRef.popupElement.contains(e.target) || this.isActionSheetExpanded) {
      return;
    }
    this.togglePopup(!this.isOpen);
  }
  subscribeEvents() {
    [this.navigationService.open.subscribe((event) => {
      event.originalEvent.preventDefault();
      this.togglePopup(true);
    }), this.navigationService.enter.pipe(tap((event) => event.originalEvent.preventDefault())).subscribe(() => this.togglePopup(true)), merge(this.navigationService.close, this.navigationService.esc).subscribe((event) => {
      event.originalEvent.preventDefault();
      this.focus();
      this.togglePopup(false);
    }), this.navigationService.tab.subscribe(this.handleTabKey.bind(this)), this.navigationService.up.subscribe(this.handleUpKey.bind(this)), this.navigationService.down.subscribe(this.handleDownKey.bind(this)), this.navigationService.left.pipe(filter(() => !this.isTreeViewActive)).subscribe(this.direction === "rtl" ? this.handleRightKey.bind(this) : this.handleLeftKey.bind(this)), this.navigationService.right.pipe(filter(() => !this.isTreeViewActive)).subscribe(this.direction === "rtl" ? this.handleLeftKey.bind(this) : this.handleRightKey.bind(this)), this.navigationService.home.pipe(filter(() => !this.isOpen)).subscribe(this.handleHome.bind(this)), this.navigationService.end.pipe(filter(() => !this.isOpen)).subscribe(this.handleEnd.bind(this)), this.navigationService.backspace.pipe(filter(() => this.isTagFocused)).subscribe(this.handleBackspace.bind(this)), this.navigationService.delete.pipe(filter(() => this.isTagFocused)).subscribe(this.handleDelete.bind(this))].forEach((sub) => this.subs.add(sub));
  }
  subscribeFocusEvents() {
    if (isDocumentAvailable()) {
      this.handleFocus = this.handleFocus.bind(this);
      this.handleDocumentBlur = this.handleDocumentBlur.bind(this);
      this._zone.runOutsideAngular(() => {
        const useCapture = true;
        document.addEventListener("focus", this.handleFocus, useCapture);
        document.addEventListener("blur", this.handleDocumentBlur, useCapture);
      });
    }
  }
  unSubscribeFocusEvents() {
    if (isDocumentAvailable()) {
      const useCapture = true;
      document.removeEventListener("focus", this.handleFocus, useCapture);
      document.removeEventListener("blur", this.handleDocumentBlur, useCapture);
    }
  }
  handleDocumentBlur(event) {
    if (event.target !== this.wrapper.nativeElement) {
      return;
    }
    event.stopImmediatePropagation();
    this.handleBlur(event);
  }
  handleTabKey() {
    if (!this.isActionSheetExpanded) {
      this.focus();
    }
    if (this.isOpen) {
      this.treeview.blur();
      this.removeTreeViewFromTabOrder();
    }
  }
  handleUpKey(event) {
    if (!this.treeview) {
      return;
    }
    event.originalEvent.preventDefault();
    if (this.isWrapperActive) {
      return;
    }
    const isFirstNodeActive = this.treeview["navigationService"]["activeIndex"] === "0";
    if (this.filterable && this.isFilterActive) {
      this.focus();
    } else if (this.checkAll && !this.isCheckAllActive && isFirstNodeActive) {
      this.checkAllInput.nativeElement.focus();
    } else if (this.isCheckAllActive || isFirstNodeActive) {
      if (this.filterable) {
        this.isActionSheetExpanded ? this.actionSheetSearchBar.focus() : this.filterInput.nativeElement.focus();
      } else {
        if (!this.isActionSheetExpanded) {
          this.focus();
        }
      }
    }
  }
  handleDownKey(event) {
    if (!this.treeview) {
      return;
    }
    event.originalEvent.preventDefault();
    if (this.filterable && this.isWrapperActive) {
      this.filterInput.nativeElement.focus();
    } else if (this.checkAll && (this.isWrapperActive || this.isFilterActive)) {
      this.checkAllInput.nativeElement.focus();
    } else if (!this.treeview.isActive) {
      this.treeview.focus();
    }
    this.focusedTagIndex = void 0;
  }
  handleRightKey(event) {
    event.originalEvent.preventDefault();
    const last = this.tags.length - 1;
    if (this.focusedTagIndex === last) {
      this.focusedTagIndex = void 0;
    } else if (this.focusedTagIndex < last) {
      this.focusedTagIndex++;
    } else if (!this.focusedTagIndex) {
      this.focusedTagIndex = 0;
    }
  }
  handleLeftKey(event) {
    event.originalEvent.preventDefault();
    if (this.focusedTagIndex === void 0 || this.focusedTagIndex < 0) {
      this.focusedTagIndex = this.tags.length - 1;
    } else if (this.focusedTagIndex !== 0) {
      this.focusedTagIndex--;
    }
  }
  handleEnd(event) {
    event.originalEvent.preventDefault();
    this.focusedTagIndex = this.tags.length - 1;
  }
  handleHome(event) {
    event.originalEvent.preventDefault();
    this.focusedTagIndex = 0;
  }
  handleBackspace() {
    if (this.focusedTagIndex !== void 0) {
      this.handleDelete();
    } else {
      const tag = this.tags[this.tags.length - 1];
      const index = this.tags.length - 1;
      this.handleRemoveTag({
        tag,
        index
      });
    }
  }
  handleDelete() {
    const tag = this.tags[this.focusedTagIndex];
    const index = this.focusedTagIndex;
    this.handleRemoveTag({
      tag,
      index
    });
    if (this.focusedTagIndex === this.tags.length) {
      this.focusedTagIndex = void 0;
    }
  }
  unsubscribeEvents() {
    this.subs.unsubscribe();
    this.unSubscribeFocusEvents();
  }
  /**
   * Remove the `TreeView` from the tab order, otherwise a focus loop between the page elements will occur
   * and the user will not be able to tab to the rest of the browser elements
   */
  removeTreeViewFromTabOrder() {
    const nodes = this.treeview.element.nativeElement.querySelectorAll("li");
    nodes.forEach((item) => {
      if (item.getAttribute("tabindex") === "0") {
        this.lastNodeOnFocus = item;
        this.lastNodeOnFocus.setAttribute("tabindex", "-1");
      }
    });
  }
  setState() {
    if (isPresent(this.dataItems) && isPresent(this.valueField)) {
      if (!this.isActionSheetExpanded) {
        this.setTags();
      }
      this.checkedItems = this.dataItems.slice();
    }
    this.cdr.markForCheck();
  }
  setTags() {
    const source = this.dataItems.map((item) => item.dataItem);
    this.tags = this.tagMapper(source);
    this.disabledIndices = this.disabledItemsMapper();
    this.dataItems.sort((a, b) => this.tags.indexOf(a.dataItem) - this.tags.indexOf(b.dataItem));
  }
  updateValue(value) {
    const newValue = this.valuePrimitive ? value.map((item) => valueFrom(item, this.valueField)) : value.map((item) => item.dataItem);
    if (this.isActionSheetExpanded) {
      this._tempValue = newValue.slice();
    } else {
      this.value = newValue;
      this.emitValueChange(this.value);
    }
  }
  /**
   * @hidden
   */
  onChildrenLoaded() {
    setTimeout(() => {
      if (this.popupRef) {
        this._searchableNodes = getSearchableItems(this.treeViewId, this.popupRef.popupElement);
      }
      if (this.isActionSheetExpanded) {
        this._searchableNodes = getSearchableItems(this.treeViewId, this.actionSheet.element.nativeElement);
      }
    });
  }
  /**
   * @hidden
   *
   * Determines which of the provided tags should be disabled and stores their position indices
   */
  disabledItemsMapper() {
    return new Set(this.dataItems.reduce((indices, item, index) => {
      if (this.itemDisabled(item.dataItem, item.index)) {
        indices.push(index);
      }
      return indices;
    }, []));
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    }
  }
  removeParents(parent) {
    let currentParent = parent;
    const nodes = [];
    while (currentParent) {
      nodes.push(currentParent.item);
      currentParent = currentParent.parent;
    }
    return nodes;
  }
  /**
   * Creates an internal map of the available tree items to be used as a reference
   * to retrieve the item's children/parent and determine the checked sate
   */
  registerLookupItems(data, parentItem = null, levelIndex = 0) {
    if (!isPresent(data) || data.length === 0) {
      return;
    }
    const parentIndex = nodeIndex$1(parentItem);
    const treeItems = data.map((node) => buildTreeItem(node, this.valueField, levelIndex));
    if (isPresent(parentItem)) {
      this.lookup.registerChildren(parentIndex, treeItems);
    }
    treeItems.forEach((item) => {
      this.lookup.registerItem(item, parentItem);
      if (!this.loadOnDemand) {
        this.registerChildLookupItems(item, levelIndex);
      }
    });
  }
  registerChildLookupItems(item, levelIndex) {
    if (this.hasChildren(item.dataItem)) {
      this.children(item.dataItem).subscribe((children) => {
        const index = this.isHeterogeneous ? levelIndex + 1 : 0;
        this.registerLookupItems(children, item, index);
      });
    }
  }
  closeActionSheet() {
    this.wrapper.nativeElement.focus();
    this.actionSheet.toggle(false);
    if (this.filterable) {
      this.actionSheetSearchBar.value = "";
      this.filterChange.emit("");
    }
    this.closed.emit();
  }
  openActionSheet() {
    this.windowSize = windowSize();
    this.actionSheet.toggle(true);
    this.title = setActionSheetTitle(this.wrapper, this.title);
    this.cdr.detectChanges();
    updateActionSheetAdaptiveAppearance(this.actionSheet, this.windowSize, this.renderer);
    this.cdr.detectChanges();
    this.opened.emit();
    this.filterable && this.actionSheetSearchBar.focus();
  }
};
MultiSelectTreeComponent.ɵfac = function MultiSelectTreeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectTreeComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MultiSelectTreeLookupService));
};
MultiSelectTreeComponent.ɵcmp = ɵɵdefineComponent({
  type: MultiSelectTreeComponent,
  selectors: [["kendo-multiselecttree"]],
  contentQueries: function MultiSelectTreeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NodeTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, TagTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, GroupTagTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTagTemplate = _t.first);
    }
  },
  viewQuery: function MultiSelectTreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResponsiveRendererComponent, 5);
      ɵɵviewQuery(_c10, 7);
      ɵɵviewQuery(_c9, 7, ViewContainerRef);
      ɵɵviewQuery(_c21, 5);
      ɵɵviewQuery(_c22, 5);
      ɵɵviewQuery(_c24, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responsiveRendererComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeview = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkAllInput = _t.first);
    }
  },
  hostVars: 22,
  hostBindings: function MultiSelectTreeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("aria-autocomplete", ctx.hostAriaAutocomplete)("aria-invalid", ctx.hostAriaInvalid)("aria-busy", ctx.isBusy)("id", ctx.id)("dir", ctx.direction)("tabindex", ctx.hostTabIndex)("role", ctx.role)("aria-haspopup", ctx.ariaHasPopup)("readonly", ctx.isReadonly)("aria-describedby", ctx.ariaDescribedBy)("aria-activedescendant", ctx.ariaActiveDescendant);
      ɵɵclassProp("k-multiselecttree", ctx.hostClasses)("k-input", ctx.hostClasses)("k-disabled", ctx.isDisabled)("k-loading", ctx.isLoading)("k-readonly", ctx.readonly);
    }
  },
  inputs: {
    adaptiveMode: "adaptiveMode",
    title: "title",
    subtitle: "subtitle",
    tabindex: "tabindex",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    popupSettings: "popupSettings",
    checkableSettings: "checkableSettings",
    data: "data",
    value: "value",
    dataItems: "dataItems",
    textField: "textField",
    valueField: "valueField",
    valueDepth: "valueDepth",
    loading: "loading",
    placeholder: "placeholder",
    listHeight: "listHeight",
    disabled: "disabled",
    readonly: "readonly",
    valuePrimitive: "valuePrimitive",
    loadOnDemand: "loadOnDemand",
    focusableId: "focusableId",
    clearButton: "clearButton",
    filterable: "filterable",
    checkAll: "checkAll",
    hasChildren: "hasChildren",
    fetchChildren: "fetchChildren",
    isNodeExpanded: "isNodeExpanded",
    isNodeVisible: "isNodeVisible",
    itemDisabled: "itemDisabled",
    tagMapper: "tagMapper"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur",
    open: "open",
    opened: "opened",
    close: "close",
    closed: "closed",
    nodeExpand: "nodeExpand",
    nodeCollapse: "nodeCollapse",
    valueChange: "valueChange",
    removeTag: "removeTag",
    filterChange: "filterChange"
  },
  exportAs: ["kendoMultiSelectTree"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, NavigationService, DataService, DisabledItemsService, SelectionService, MultiSelectTreeLookupService, {
    provide: L10N_PREFIX,
    useValue: "kendo.multiselecttree"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectTreeComponent)
  }, {
    provide: DataBoundComponent,
    useExisting: forwardRef(() => MultiSelectTreeComponent)
  }, {
    provide: ExpandableComponent,
    useExisting: forwardRef(() => MultiSelectTreeComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => MultiSelectTreeComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 14,
  vars: 24,
  consts: () => {
    let i18n_25;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_25 = goog.getMsg("NO DATA FOUND");
      i18n_25 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_25;
    } else {
      i18n_25 = $localize`:kendo.multiselecttree.noDataText|The text displayed in the popup when there are no items:NO DATA FOUND`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_26 = goog.getMsg("clear");
      i18n_26 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_26;
    } else {
      i18n_26 = $localize`:kendo.multiselecttree.clearTitle|The title of the clear button:clear`;
    }
    let i18n_27;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_27 = goog.getMsg("Check all");
      i18n_27 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_27;
    } else {
      i18n_27 = $localize`:kendo.multiselecttree.checkAllText|The text displayed for the check-all checkbox:Check all`;
    }
    let i18n_28;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_28 = goog.getMsg("Filter");
      i18n_28 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_28;
    } else {
      i18n_28 = $localize`:kendo.multiselecttree.filterInputLabel|The text set as aria-label on the filter input:Filter`;
    }
    let i18n_29;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_29 = goog.getMsg("Options list");
      i18n_29 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_29;
    } else {
      i18n_29 = $localize`:kendo.multiselecttree.popupLabel|The label of the popup element that contains the list of options when its role is 'region':Options list`;
    }
    let i18n_30;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_30 = goog.getMsg("Apply");
      i18n_30 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_30;
    } else {
      i18n_30 = $localize`:kendo.multiselecttree.applyButton|The text of the Apply button in the action sheet:Apply`;
    }
    let i18n_31;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_31 = goog.getMsg("Cancel");
      i18n_31 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DROPDOWNS_FESM2020_PROGRESS_KENDO_ANGULAR_DROPDOWNS_MJS_31;
    } else {
      i18n_31 = $localize`:kendo.multiselecttree.cancelButton|The text of the Cancel button in the action sheet:Cancel`;
    }
    return [["popupTemplate", ""], ["container", ""], ["sharedPopupActionSheetTemplate", ""], ["treeview", ""], ["filterInput", ""], ["checkAllInput", ""], ["kendoMultiSelectTreeLocalizedMessages", "", "noDataText", i18n_25, "clearTitle", i18n_26, "checkAllText", i18n_27, "filterInputLabel", i18n_28, "popupLabel", i18n_29, "applyButton", i18n_30, "cancelButton", i18n_31], [1, "k-input-values", 3, "removeTag", "size", "rounded", "fillMode", "id", "tags", "focused", "textField", "valueField", "valueDepth", "disabled", "tagPrefix", "template", "groupTemplate", "disabledIndices"], [1, "k-input-inner", "k-readonly"], ["class", "k-input-value-text", 4, "ngIf"], ["class", "k-clear-value", "role", "button", "tabindex", "-1", 3, "click", 4, "ngIf"], ["class", "k-icon k-i-loading k-input-loading-icon", 4, "ngIf"], [3, "closePopup", "onExpand", "onCollapse", "textInputChange", "onApply", "onCancel", "sharedPopupActionSheetTemplate", "isActionSheetExpanded", "title", "showTextInput", "showActionButtons", "subtitle"], [3, "resize", 4, "ngIf"], [1, "k-input-value-text"], ["role", "button", "tabindex", "-1", 1, "k-clear-value", 3, "click"], ["name", "x", 1, "k-icon", 3, "svgIcon"], [1, "k-icon", "k-i-loading", "k-input-loading-icon"], [4, "ngTemplateOutlet"], ["class", "k-list-filter", 4, "ngIf"], [4, "ngIf"], ["class", "k-check-all", 4, "ngIf"], ["kendoMultiSelectTreeCheckable", "", 3, "keydown", "nodeClick", "expand", "collapse", "checkedItemsChange", "childrenLoaded", "size", "nodes", "animate", "isHeterogeneous", "checkable", "checkedItems", "valueField", "textField", "children", "hasChildren", "isExpanded", "isDisabled", "nodeTemplate", "loadOnDemand", "filter", "isVisible", "kendoEventsOutsideAngular", "scope"], ["class", "k-no-data", 4, "ngIf"], [1, "k-list-filter"], [1, "k-textbox", "k-input", 3, "ngClass"], [1, "k-input-prefix"], ["name", "search", 1, "k-icon", 3, "svgIcon"], ["role", "searchbox", "tabindex", "0", "aria-disabled", "false", "aria-readonly", "false", 1, "k-input-inner", 3, "input", "keydown", "filterInput", "value", "kendoEventsOutsideAngular", "scope"], [3, "templateContext"], [1, "k-check-all"], [1, "k-checkbox-wrap"], ["type", "checkbox", "role", "checkbox", "tabindex", "0", "aria-disabled", "false", "aria-readonly", "false", 1, "k-checkbox", 3, "checkedItemsChange", "keydown", "checkAll", "ngClass", "treeview", "checkedItems", "valueField", "lastAction", "kendoEventsOutsideAngular", "scope"], [1, "k-checkbox-label", 3, "click", "mousedown"], [1, "k-no-data"], [3, "ngIf", "templateContext"], [3, "ngIf"], [3, "resize"]];
  },
  template: function MultiSelectTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 6);
      ɵɵelementStart(1, "kendo-taglist", 7);
      ɵɵlistener("removeTag", function MultiSelectTreeComponent_Template_kendo_taglist_removeTag_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleRemoveTag($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "span", 8);
      ɵɵtemplate(3, MultiSelectTreeComponent_span_3_Template, 2, 1, "span", 9);
      ɵɵelementEnd();
      ɵɵtemplate(4, MultiSelectTreeComponent_span_4_Template, 2, 2, "span", 10)(5, MultiSelectTreeComponent_span_5_Template, 1, 0, "span", 11)(6, MultiSelectTreeComponent_ng_template_6_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(8, null, 1);
      ɵɵelementStart(10, "responsive-renderer", 12);
      ɵɵlistener("closePopup", function MultiSelectTreeComponent_Template_responsive_renderer_closePopup_10_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.togglePopup(false));
      })("onExpand", function MultiSelectTreeComponent_Template_responsive_renderer_onExpand_10_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onExpand());
      })("onCollapse", function MultiSelectTreeComponent_Template_responsive_renderer_onCollapse_10_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onCollapse());
      })("textInputChange", function MultiSelectTreeComponent_Template_responsive_renderer_textInputChange_10_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onFilterChange($event));
      })("onApply", function MultiSelectTreeComponent_Template_responsive_renderer_onApply_10_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.applyValue());
      })("onCancel", function MultiSelectTreeComponent_Template_responsive_renderer_onCancel_10_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.cancelValue());
      });
      ɵɵelementEnd();
      ɵɵtemplate(11, MultiSelectTreeComponent_ng_template_11_Template, 7, 28, "ng-template", null, 2, ɵɵtemplateRefExtractor)(13, MultiSelectTreeComponent_kendo_resize_sensor_13_Template, 1, 0, "kendo-resize-sensor", 13);
    }
    if (rf & 2) {
      const sharedPopupActionSheetTemplate_r4 = ɵɵreference(12);
      ɵɵadvance();
      ɵɵproperty("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("id", ctx.tagListId)("tags", ctx.tags)("focused", ctx.focusedTagIndex)("textField", ctx.textField)("valueField", ctx.valueField)("valueDepth", ctx.valueDepth)("disabled", ctx.disabled)("tagPrefix", ctx.tagPrefix)("template", ctx.tagTemplate)("groupTemplate", ctx.groupTagTemplate)("disabledIndices", ctx.disabledIndices);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.tags || !ctx.tags.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.disabled && !ctx.loading && !ctx.readonly && ctx.clearButton && (ctx.tags == null ? null : ctx.tags.length));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance(5);
      ɵɵproperty("sharedPopupActionSheetTemplate", sharedPopupActionSheetTemplate_r4)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.title)("showTextInput", ctx.filterable)("showActionButtons", true)("subtitle", ctx.subtitle);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.isOpen || ctx.isAdaptiveModeEnabled);
    }
  },
  dependencies: [LocalizedMessagesDirective, TagListComponent, NgIf, IconWrapperComponent, NgTemplateOutlet, ResponsiveRendererComponent, NgClass, FilterInputDirective, EventsOutsideAngularDirective, TemplateContextDirective, CheckAllDirective, TreeViewComponent, CheckDirective, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectTreeComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoMultiSelectTree",
      providers: [LocalizationService, NavigationService, DataService, DisabledItemsService, SelectionService, MultiSelectTreeLookupService, {
        provide: L10N_PREFIX,
        useValue: "kendo.multiselecttree"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiSelectTreeComponent)
      }, {
        provide: DataBoundComponent,
        useExisting: forwardRef(() => MultiSelectTreeComponent)
      }, {
        provide: ExpandableComponent,
        useExisting: forwardRef(() => MultiSelectTreeComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => MultiSelectTreeComponent)
      }],
      selector: "kendo-multiselecttree",
      template: `
        <ng-container kendoMultiSelectTreeLocalizedMessages
            i18n-noDataText="kendo.multiselecttree.noDataText|The text displayed in the popup when there are no items"
            noDataText="NO DATA FOUND"

            i18n-clearTitle="kendo.multiselecttree.clearTitle|The title of the clear button"
            clearTitle="clear"

            i18n-checkAllText="kendo.multiselecttree.checkAllText|The text displayed for the check-all checkbox"
            checkAllText="Check all"

            i18n-filterInputLabel="kendo.multiselecttree.filterInputLabel|The text set as aria-label on the filter input"
            filterInputLabel="Filter"

            i18n-popupLabel="kendo.multiselecttree.popupLabel|The label of the popup element that contains the list of options when its role is 'region'"
            popupLabel="Options list"

            i18n-applyButton="kendo.multiselecttree.applyButton|The text of the Apply button in the action sheet"
            applyButton="Apply"

            i18n-cancelButton="kendo.multiselecttree.cancelButton|The text of the Cancel button in the action sheet"
            cancelButton="Cancel"
        >
        </ng-container>
        <kendo-taglist
            class="k-input-values"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [id]="tagListId"
            [tags]="tags"
            [focused]="focusedTagIndex"
            [textField]="textField"
            [valueField]="valueField"
            [valueDepth]="valueDepth"
            [disabled]="disabled"
            [tagPrefix]="tagPrefix"
            [template]="tagTemplate"
            [groupTemplate]="groupTagTemplate"
            [disabledIndices]="disabledIndices"
            (removeTag)="handleRemoveTag($event)"
        >
        </kendo-taglist>
        <span class="k-input-inner k-readonly">
            <span 
                *ngIf="!tags || !tags.length"
                class="k-input-value-text"
            >
                {{ placeholder }}
            </span>
        </span>
        <span
            *ngIf="!disabled && !loading && !readonly && clearButton && tags?.length"
            class="k-clear-value"
            [attr.title]="messageFor('clearTitle')"
            role="button"
            tabindex="-1"
            (click)="clearAll($event)"
        >
            <kendo-icon-wrapper
                class="k-icon"
                name="x"
                [svgIcon]="xIcon"
            >
            </kendo-icon-wrapper>
        </span>
        <span
            *ngIf="loading"
            class="k-icon k-i-loading k-input-loading-icon"
        >
        </span>
        <ng-template #popupTemplate>
            <ng-container *ngTemplateOutlet="sharedPopupActionSheetTemplate"></ng-container>
        </ng-template>
        <ng-container #container></ng-container>
        <!--adaptive rendering-->
        <responsive-renderer
            [sharedPopupActionSheetTemplate]="sharedPopupActionSheetTemplate"
            [isActionSheetExpanded]="isActionSheetExpanded"
            [title]="title"
            [showTextInput]="filterable"
            [showActionButtons]="true"
            [subtitle]="subtitle"
            (closePopup)="togglePopup(false)"
            (onExpand)="onExpand()"
            (onCollapse)="onCollapse()"
            (textInputChange)="onFilterChange($event)"
            (onApply)="applyValue()"
            (onCancel)="cancelValue()"
            >
        </responsive-renderer>
        <ng-template #sharedPopupActionSheetTemplate>
            <div
                *ngIf="filterable && !isActionSheetExpanded"
                class="k-list-filter"
                >
                <span
                    class="k-textbox k-input"
                    [ngClass]="filterInputClasses"
                >
                    <span class="k-input-prefix">
                        <kendo-icon-wrapper
                            class="k-icon"
                            name="search"
                            [svgIcon]="searchIcon"
                        >
                        </kendo-icon-wrapper>
                    </span>
                    <input
                        #filterInput
                        (input)="handleFilterInputChange($event.target)"
                        [filterInput]="filterable && !touchEnabled"
                        [attr.aria-label]="messageFor('filterInputLabel')"
                        (keydown)="handleKeydown($event, filterInput)"
                        [value]="filter"
                        class="k-input-inner"
                        role="searchbox"
                        tabindex="0"
                        aria-disabled="false"
                        aria-readonly="false"
                        [kendoEventsOutsideAngular]="{
                            blur: handleBlur
                        }"
                        [scope]="this"
                    >
                </span>
            </div>
            <!--header template-->
            <ng-template
                *ngIf="headerTemplate"
                [templateContext]="{
                    templateRef: headerTemplate?.templateRef
                }">
            </ng-template>
            <div *ngIf="checkAll" class="k-check-all">
                <span class="k-checkbox-wrap">
                    <input
                        #checkAllInput
                        [checkAll]="!filterable && !touchEnabled"
                        type="checkbox"
                        class="k-checkbox"
                        [ngClass]="checkAllCheckboxClasses"
                        role="checkbox"
                        tabindex="0"
                        aria-disabled="false"
                        aria-readonly="false"
                        [treeview]="treeview"
                        [checkedItems]="checkedItems"
                        [valueField]="valueField"
                        [lastAction]="lastAction"
                        (checkedItemsChange)="handleCheckedItemsChange($event)"
                        (keydown)="handleKeydown($event)"
                        [kendoEventsOutsideAngular]="{
                            blur: handleBlur
                        }"
                        [scope]="this"
                    >
                </span>
                <span
                    class="k-checkbox-label"
                    (click)="toggleCheckAll()"
                    (mousedown)="$event.preventDefault()"
                >
                    {{ messageFor('checkAllText') }}
                </span>
            </div>
            <kendo-treeview
                #treeview
                [size]="size"
                [attr.id]="treeViewId"
                [nodes]="data"
                [style.maxHeight.px]="listHeight"
                [animate]="false"
                kendoMultiSelectTreeCheckable
                [isHeterogeneous]="isHeterogeneous"
                [checkable]="checkableSettings"
                [checkedItems]="checkedItems"
                [valueField]="valueField"
                [textField]="textField"
                [children]="children"
                [hasChildren]="hasChildren"
                [isExpanded]="isNodeExpanded"
                [isDisabled]="itemDisabled"
                [nodeTemplate]="nodeTemplate"
                [loadOnDemand]="loadOnDemand"
                [filter]="filter"
                [isVisible]="isNodeVisible"
                (keydown)="handleKeydown($event)"
                (nodeClick)="handleNodeClick($event)"
                (expand)="nodeExpand.emit($event)"
                (collapse)="nodeCollapse.emit($event)"
                (checkedItemsChange)="handleCheckedItemsChange($event)"
                [kendoEventsOutsideAngular]="{
                    focusout: handleBlur
                }"
                [scope]="this"
                (childrenLoaded)="onChildrenLoaded()"
            >
            </kendo-treeview>
            <!--footer template-->
            <ng-template
                *ngIf="footerTemplate"
                [templateContext]="{
                    templateRef: footerTemplate?.templateRef
                }">
            </ng-template>
            <!--no-data template-->
            <div class="k-no-data" *ngIf="!data || data?.length === 0 || allNodesHidden">
                <ng-template [ngIf]="noDataTemplate"
                    [templateContext]="{
                        templateRef: noDataTemplate?.templateRef
                    }">
                </ng-template>
                <ng-template [ngIf]="!noDataTemplate">
                    <div>{{ messageFor('noDataText') }}</div>
                </ng-template>
            </div>
        </ng-template>

        <kendo-resize-sensor *ngIf="isOpen || isAdaptiveModeEnabled" (resize)="onResize()"></kendo-resize-sensor>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, TagListComponent, NgIf, IconWrapperComponent, NgTemplateOutlet, ResponsiveRendererComponent, NgClass, FilterInputDirective, EventsOutsideAngularDirective, TemplateContextDirective, CheckAllDirective, TreeViewComponent, CheckDirective, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }, {
      type: PopupService
    }, {
      type: Renderer2
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: MultiSelectTreeLookupService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-multiselecttree"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    hostAriaAutocomplete: [{
      type: HostBinding,
      args: ["attr.aria-autocomplete"]
    }],
    isLoading: [{
      type: HostBinding,
      args: ["class.k-loading"]
    }],
    hostAriaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isBusy: [{
      type: HostBinding,
      args: ["attr.aria-busy"]
    }],
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaHasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    isReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    ariaDescribedBy: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }],
    ariaActiveDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }],
    adaptiveMode: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    responsiveRendererComponent: [{
      type: ViewChild,
      args: [ResponsiveRendererComponent]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: [NodeTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    tagTemplate: [{
      type: ContentChild,
      args: [TagTemplateDirective, {
        static: false
      }]
    }],
    groupTagTemplate: [{
      type: ContentChild,
      args: [GroupTagTemplateDirective, {
        static: false
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    treeview: [{
      type: ViewChild,
      args: ["treeview", {
        static: false
      }]
    }],
    filterInput: [{
      type: ViewChild,
      args: ["filterInput", {
        static: false
      }]
    }],
    checkAllInput: [{
      type: ViewChild,
      args: ["checkAllInput", {
        static: false
      }]
    }],
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    checkableSettings: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    dataItems: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    valueDepth: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    listHeight: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    valuePrimitive: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    filterable: [{
      type: Input
    }],
    checkAll: [{
      type: Input
    }],
    hasChildren: [{
      type: Input
    }],
    fetchChildren: [{
      type: Input
    }],
    isNodeExpanded: [{
      type: Input
    }],
    isNodeVisible: [{
      type: Input
    }],
    itemDisabled: [{
      type: Input
    }],
    tagMapper: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    nodeExpand: [{
      type: Output
    }],
    nodeCollapse: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    removeTag: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }]
  });
})();
var DropDownTreeFlatBindingDirective = class extends FlatDataBindingDirective {
  constructor(dropDownTree) {
    super(dropDownTree);
    this.dropDownTree = dropDownTree;
  }
  /**
   * The nodes which will be displayed by the DropDownTree.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   */
  set filter(term) {
    super.filter = term;
  }
  ngOnChanges(changes) {
    if (isChanged("nodes", changes, false)) {
      this.dropDownTree.nodes = changes["nodes"].currentValue;
      super.nodes = changes["nodes"].currentValue;
    }
    super.ngOnChanges(changes);
  }
};
DropDownTreeFlatBindingDirective.ɵfac = function DropDownTreeFlatBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownTreeFlatBindingDirective)(ɵɵdirectiveInject(DataBoundComponent));
};
DropDownTreeFlatBindingDirective.ɵdir = ɵɵdefineDirective({
  type: DropDownTreeFlatBindingDirective,
  selectors: [["", "kendoDropDownTreeFlatBinding", ""]],
  inputs: {
    nodes: [0, "kendoDropDownTreeFlatBinding", "nodes"],
    idField: [0, "valueField", "idField"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownTreeFlatBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownTreeFlatBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    nodes: [{
      type: Input,
      args: ["kendoDropDownTreeFlatBinding"]
    }],
    idField: [{
      type: Input,
      args: ["valueField"]
    }]
  });
})();
var DropDownTreeHierarchyBindingDirective = class extends HierarchyBindingDirective {
  constructor(dropDownTree) {
    super(dropDownTree);
    this.dropDownTree = dropDownTree;
  }
  /**
   * The nodes which will be displayed by the DropDownTree.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   */
  set filter(term) {
    super.filter = term;
  }
  ngOnChanges(changes) {
    if (isChanged("nodes", changes, false)) {
      this.dropDownTree.nodes = changes["nodes"].currentValue;
      super.nodes = changes["nodes"].currentValue;
    }
    super.ngOnChanges(changes);
  }
};
DropDownTreeHierarchyBindingDirective.ɵfac = function DropDownTreeHierarchyBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownTreeHierarchyBindingDirective)(ɵɵdirectiveInject(DataBoundComponent));
};
DropDownTreeHierarchyBindingDirective.ɵdir = ɵɵdefineDirective({
  type: DropDownTreeHierarchyBindingDirective,
  selectors: [["", "kendoDropDownTreeHierarchyBinding", ""]],
  inputs: {
    nodes: [0, "kendoDropDownTreeHierarchyBinding", "nodes"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownTreeHierarchyBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownTreeHierarchyBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    nodes: [{
      type: Input,
      args: ["kendoDropDownTreeHierarchyBinding"]
    }]
  });
})();
var MultiSelectTreeFlatBindingDirective = class extends FlatDataBindingDirective {
  constructor(multiSelectTree) {
    super(multiSelectTree);
    this.multiSelectTree = multiSelectTree;
  }
  /**
   * The nodes which will be displayed by the MultiSelectTree.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   */
  set filter(term) {
    super.filter = term;
  }
  ngOnChanges(changes) {
    if (isChanged("nodes", changes, false)) {
      this.multiSelectTree.nodes = changes["nodes"].currentValue;
      super.nodes = changes["nodes"].currentValue;
    }
    super.ngOnChanges(changes);
  }
};
MultiSelectTreeFlatBindingDirective.ɵfac = function MultiSelectTreeFlatBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectTreeFlatBindingDirective)(ɵɵdirectiveInject(DataBoundComponent));
};
MultiSelectTreeFlatBindingDirective.ɵdir = ɵɵdefineDirective({
  type: MultiSelectTreeFlatBindingDirective,
  selectors: [["", "kendoMultiSelectTreeFlatBinding", ""]],
  inputs: {
    nodes: [0, "kendoMultiSelectTreeFlatBinding", "nodes"],
    idField: [0, "valueField", "idField"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectTreeFlatBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectTreeFlatBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    nodes: [{
      type: Input,
      args: ["kendoMultiSelectTreeFlatBinding"]
    }],
    idField: [{
      type: Input,
      args: ["valueField"]
    }]
  });
})();
var MultiSelectTreeHierarchyBindingDirective = class extends HierarchyBindingDirective {
  constructor(multiSelectTree) {
    super(multiSelectTree);
    this.multiSelectTree = multiSelectTree;
  }
  /**
   * The nodes which will be displayed by the MultiSelectTree.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   */
  set filter(term) {
    super.filter = term;
  }
  ngOnChanges(changes) {
    if (isChanged("nodes", changes, false)) {
      this.multiSelectTree.nodes = changes["nodes"].currentValue;
      super.nodes = changes["nodes"].currentValue;
    }
    super.ngOnChanges(changes);
  }
};
MultiSelectTreeHierarchyBindingDirective.ɵfac = function MultiSelectTreeHierarchyBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectTreeHierarchyBindingDirective)(ɵɵdirectiveInject(DataBoundComponent));
};
MultiSelectTreeHierarchyBindingDirective.ɵdir = ɵɵdefineDirective({
  type: MultiSelectTreeHierarchyBindingDirective,
  selectors: [["", "kendoMultiSelectTreeHierarchyBinding", ""]],
  inputs: {
    nodes: [0, "kendoMultiSelectTreeHierarchyBinding", "nodes"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectTreeHierarchyBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectTreeHierarchyBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    nodes: [{
      type: Input,
      args: ["kendoMultiSelectTreeHierarchyBinding"]
    }]
  });
})();
var DropDownTreesExpandDirective = class extends ExpandDirective {
  constructor(dropDownTree) {
    super(dropDownTree);
    this.dropDownTree = dropDownTree;
  }
  /**
   * @hidden
   *
   * Ensures a user-defined `isNodeExpanded` callback will not be overriden by the default directive setup.
   * Implemented as a value setter in the base directive, this just overrides the input name.
   */
  set isExpanded(value) {
    this.dropDownTree.isExpanded = value;
  }
};
DropDownTreesExpandDirective.ɵfac = function DropDownTreesExpandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownTreesExpandDirective)(ɵɵdirectiveInject(ExpandableComponent));
};
DropDownTreesExpandDirective.ɵdir = ɵɵdefineDirective({
  type: DropDownTreesExpandDirective,
  selectors: [["", "kendoDropDownTreeExpandable", ""], ["", "kendoMultiSelectTreeExpandable", ""]],
  inputs: {
    isExpanded: [0, "isNodeExpanded", "isExpanded"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownTreesExpandDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownTreeExpandable], [kendoMultiSelectTreeExpandable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ExpandableComponent
    }];
  }, {
    isExpanded: [{
      type: Input,
      args: ["isNodeExpanded"]
    }]
  });
})();
var DEFAULT_FILTER_SETTINGS = {
  caseSensitive: false,
  operator: "startsWith"
};
var FilterDirective = class {
  constructor(component) {
    this.component = component;
    this.filterable = true;
    this._data = [];
  }
  /**
   * The initial data that will be used as a source array for the filtering operations.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  ngOnInit() {
    this.component.filterable = this.filterable;
    this.filterChangeSubscription = this.component.filterChange.subscribe(this.handleFilterChange.bind(this));
  }
  ngOnDestroy() {
    if (isPresent(this.filterChangeSubscription)) {
      this.filterChangeSubscription.unsubscribe();
    }
  }
  handleFilterChange(query) {
    this.component.data = this.data.filter((item) => this.matchesAnyField(item, query));
  }
  matchesAnyField(item, query) {
    const normalizedQuery = this.normalizeValue(query);
    const {
      fields
    } = this.filterSettings;
    if (fields.length === 0) {
      return this.checkItem(item, normalizedQuery);
    }
    return fields.some((field) => this.checkItem(getter2(item, field), normalizedQuery));
  }
  checkItem(target, query) {
    target = this.normalizeValue(target);
    if (this.filterSettings.operator === "contains") {
      return target.indexOf(query) !== -1;
    } else {
      return target.indexOf(query) === 0;
    }
  }
  normalizeValue(value) {
    const normalizedValue = isPresent(value) ? value.toString() : "";
    return this.filterSettings.caseSensitive ? normalizedValue : normalizedValue.toLowerCase();
  }
  getFilterFields(providedFields) {
    if (!this.component.textField && !this.component.valueField) {
      return [];
    }
    if (isArray(providedFields) && providedFields.length > 0) {
      return providedFields;
    } else {
      const textField = this.component.textField || this.component.valueField;
      return [textField];
    }
  }
  get filterSettings() {
    const settings = this.rawSettings;
    const providedFields = isPresent(settings) && typeof settings === "object" ? settings.fields : [];
    return Object.assign({}, DEFAULT_FILTER_SETTINGS, settings, {
      fields: this.getFilterFields(providedFields)
    });
  }
};
FilterDirective.ɵfac = function FilterDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FilterDirective)(ɵɵdirectiveInject(FilterableComponent));
};
FilterDirective.ɵdir = ɵɵdefineDirective({
  type: FilterDirective,
  selectors: [["", "kendoDropDownFilter", ""]],
  inputs: {
    data: "data",
    rawSettings: [0, "kendoDropDownFilter", "rawSettings"],
    filterable: "filterable"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownFilter]",
      standalone: true
    }]
  }], function() {
    return [{
      type: FilterableComponent
    }];
  }, {
    data: [{
      type: Input
    }],
    rawSettings: [{
      type: Input,
      args: ["kendoDropDownFilter"]
    }],
    filterable: [{
      type: Input
    }]
  });
})();
var CustomMessagesComponent = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
CustomMessagesComponent.ɵfac = function CustomMessagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
CustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: CustomMessagesComponent,
  selectors: [["kendo-dropdownlist-messages"], ["kendo-combobox-messages"], ["kendo-multicolumncombobox-messages"], ["kendo-autocomplete-messages"], ["kendo-multiselect-messages"], ["kendo-dropdowntree-messages"], ["kendo-multiselecttree-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => CustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function CustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-dropdownlist-messages,kendo-combobox-messages,kendo-multicolumncombobox-messages,kendo-autocomplete-messages,kendo-multiselect-messages,kendo-dropdowntree-messages,kendo-multiselecttree-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SummaryTagDirective = class {
  constructor(multiSelectComponent) {
    this.multiSelectComponent = multiSelectComponent;
    this.showAfter = 0;
    this.createTagMapper();
  }
  ngOnChanges(changes) {
    if (isPresent(changes.showAfter)) {
      this.createTagMapper();
      this.multiSelectComponent.onTagMapperChange();
    }
  }
  createTagMapper() {
    const showAfter = parseNumber(this.showAfter);
    this.multiSelectComponent.tagMapper = (tags) => {
      if (tags.length > showAfter) {
        const result = tags.slice(0, showAfter);
        result.push(tags.slice(showAfter, tags.length));
        return result;
      } else {
        return tags;
      }
    };
  }
};
SummaryTagDirective.ɵfac = function SummaryTagDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SummaryTagDirective)(ɵɵdirectiveInject(MultiSelectComponent));
};
SummaryTagDirective.ɵdir = ɵɵdefineDirective({
  type: SummaryTagDirective,
  selectors: [["", "kendoMultiSelectSummaryTag", ""]],
  inputs: {
    showAfter: [0, "kendoMultiSelectSummaryTag", "showAfter"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SummaryTagDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectSummaryTag]",
      standalone: true
    }]
  }], function() {
    return [{
      type: MultiSelectComponent
    }];
  }, {
    showAfter: [{
      type: Input,
      args: ["kendoMultiSelectSummaryTag"]
    }]
  });
})();
var MultiSelectTreeSummaryTagDirective = class {
  constructor(multiSelectTreeComponent) {
    this.multiSelectTreeComponent = multiSelectTreeComponent;
    this.showAfter = 0;
    this.createTagMapper();
  }
  ngOnChanges(changes) {
    if (isPresent(changes.showAfter)) {
      this.createTagMapper();
      this.multiSelectTreeComponent.handleTagMapperChange(this.showAfter);
    }
  }
  createTagMapper() {
    const showAfter = parseNumber(this.showAfter);
    this.multiSelectTreeComponent.tagMapper = (tags) => {
      if (tags.length > showAfter) {
        return [...tags.slice(0, showAfter), tags.slice(showAfter)];
      } else {
        return tags;
      }
    };
  }
};
MultiSelectTreeSummaryTagDirective.ɵfac = function MultiSelectTreeSummaryTagDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectTreeSummaryTagDirective)(ɵɵdirectiveInject(MultiSelectTreeComponent));
};
MultiSelectTreeSummaryTagDirective.ɵdir = ɵɵdefineDirective({
  type: MultiSelectTreeSummaryTagDirective,
  selectors: [["", "kendoMultiSelectTreeSummaryTag", ""]],
  inputs: {
    showAfter: [0, "kendoMultiSelectTreeSummaryTag", "showAfter"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectTreeSummaryTagDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMultiSelectTreeSummaryTag]",
      standalone: true
    }]
  }], function() {
    return [{
      type: MultiSelectTreeComponent
    }];
  }, {
    showAfter: [{
      type: Input,
      args: ["kendoMultiSelectTreeSummaryTag"]
    }]
  });
})();
var KENDO_AUTOCOMPLETE = [AutoCompleteComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent];
var KENDO_COMBOBOX = [ComboBoxComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent];
var KENDO_MULTICOLUMNCOMBOBOX = [MultiColumnComboBoxComponent, ComboBoxColumnComponent, ColumnHeaderTemplateDirective, ColumnCellTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent];
var KENDO_DROPDOWNLIST = [DropDownListComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent];
var KENDO_MULTISELECT = [MultiSelectComponent, SummaryTagDirective, CustomItemTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent];
var KENDO_DROPDOWNTREE = [DropDownTreeComponent, DropDownTreeFlatBindingDirective, DropDownTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent];
var KENDO_MULTISELECTTREE = [MultiSelectTreeComponent, MultiSelectTreeFlatBindingDirective, MultiSelectTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, MultiSelectTreeSummaryTagDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent];
var KENDO_DROPDOWNS = [...KENDO_AUTOCOMPLETE, ...KENDO_COMBOBOX, ...KENDO_MULTICOLUMNCOMBOBOX, ...KENDO_DROPDOWNLIST, ...KENDO_MULTISELECT, ...KENDO_DROPDOWNTREE, ...KENDO_MULTISELECTTREE];
var DropDownTreesModule = class {
};
DropDownTreesModule.ɵfac = function DropDownTreesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownTreesModule)();
};
DropDownTreesModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownTreesModule,
  imports: [DropDownTreeComponent, DropDownTreeFlatBindingDirective, DropDownTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent, MultiSelectTreeComponent, MultiSelectTreeFlatBindingDirective, MultiSelectTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, MultiSelectTreeSummaryTagDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent],
  exports: [DropDownTreeComponent, DropDownTreeFlatBindingDirective, DropDownTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent, MultiSelectTreeComponent, MultiSelectTreeFlatBindingDirective, MultiSelectTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, MultiSelectTreeSummaryTagDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent]
});
DropDownTreesModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService],
  imports: [DropDownTreeComponent, CustomMessagesComponent, MultiSelectTreeComponent, CustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownTreesModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_DROPDOWNTREE, ...KENDO_MULTISELECTTREE],
      exports: [...KENDO_DROPDOWNTREE, ...KENDO_MULTISELECTTREE],
      providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService]
    }]
  }], null, null);
})();
var DropDownsModule = class {
};
DropDownsModule.ɵfac = function DropDownsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownsModule)();
};
DropDownsModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownsModule,
  imports: [AutoCompleteComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, ComboBoxComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, ColumnHeaderTemplateDirective, ColumnCellTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, DropDownListComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, MultiSelectComponent, SummaryTagDirective, CustomItemTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, DropDownTreeComponent, DropDownTreeFlatBindingDirective, DropDownTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent, MultiSelectTreeComponent, MultiSelectTreeFlatBindingDirective, MultiSelectTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, MultiSelectTreeSummaryTagDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent],
  exports: [AutoCompleteComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, ComboBoxComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, ColumnHeaderTemplateDirective, ColumnCellTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, DropDownListComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, MultiSelectComponent, SummaryTagDirective, CustomItemTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, DropDownTreeComponent, DropDownTreeFlatBindingDirective, DropDownTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent, MultiSelectTreeComponent, MultiSelectTreeFlatBindingDirective, MultiSelectTreeHierarchyBindingDirective, DropDownTreesExpandDirective, NodeTemplateDirective, MultiSelectTreeSummaryTagDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, CustomMessagesComponent, AdornmentsModule]
});
DropDownsModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService, IconsService, DialogContainerService, DialogService, WindowService, WindowContainerService],
  imports: [AutoCompleteComponent, CustomMessagesComponent, SeparatorComponent, ComboBoxComponent, CustomMessagesComponent, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, CustomMessagesComponent, SeparatorComponent, DropDownListComponent, CustomMessagesComponent, MultiSelectComponent, CustomMessagesComponent, SeparatorComponent, DropDownTreeComponent, CustomMessagesComponent, MultiSelectTreeComponent, CustomMessagesComponent, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownsModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DROPDOWNS, AdornmentsModule],
      imports: [...KENDO_DROPDOWNS],
      providers: [PopupService, ResizeBatchService, IconsService, DialogContainerService, DialogService, WindowService, WindowContainerService]
    }]
  }], null, null);
})();
var MultiSelectModule = class {
};
MultiSelectModule.ɵfac = function MultiSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MultiSelectModule)();
};
MultiSelectModule.ɵmod = ɵɵdefineNgModule({
  type: MultiSelectModule,
  imports: [MultiSelectComponent, SummaryTagDirective, CustomItemTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent],
  exports: [MultiSelectComponent, SummaryTagDirective, CustomItemTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, GroupTagTemplateDirective, TagTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, AdornmentsModule]
});
MultiSelectModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService, IconsService],
  imports: [MultiSelectComponent, CustomMessagesComponent, SeparatorComponent, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_MULTISELECT],
      exports: [...KENDO_MULTISELECT, AdornmentsModule],
      providers: [PopupService, ResizeBatchService, IconsService]
    }]
  }], null, null);
})();
var SHARED_DIRECTIVES = [HeaderTemplateDirective, FooterTemplateDirective, ItemTemplateDirective, GroupTemplateDirective, FixedGroupTemplateDirective, NoDataTemplateDirective, ValueTemplateDirective, TagTemplateDirective, GroupTagTemplateDirective, LocalizedMessagesDirective, CustomMessagesComponent, FilterDirective, FilterInputDirective];
var SharedDirectivesModule = class {
};
SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SharedDirectivesModule)();
};
SharedDirectivesModule.ɵmod = ɵɵdefineNgModule({
  type: SharedDirectivesModule,
  imports: [HeaderTemplateDirective, FooterTemplateDirective, ItemTemplateDirective, GroupTemplateDirective, FixedGroupTemplateDirective, NoDataTemplateDirective, ValueTemplateDirective, TagTemplateDirective, GroupTagTemplateDirective, LocalizedMessagesDirective, CustomMessagesComponent, FilterDirective, FilterInputDirective],
  exports: [HeaderTemplateDirective, FooterTemplateDirective, ItemTemplateDirective, GroupTemplateDirective, FixedGroupTemplateDirective, NoDataTemplateDirective, ValueTemplateDirective, TagTemplateDirective, GroupTagTemplateDirective, LocalizedMessagesDirective, CustomMessagesComponent, FilterDirective, FilterInputDirective]
});
SharedDirectivesModule.ɵinj = ɵɵdefineInjector({
  imports: [CustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedDirectivesModule, [{
    type: NgModule,
    args: [{
      imports: [SHARED_DIRECTIVES],
      exports: [SHARED_DIRECTIVES]
    }]
  }], null, null);
})();
var INTERNAL_DIRECTIVES = [ListComponent, ListItemDirective, SelectableDirective, SearchBarComponent, TemplateContextDirective, TagListComponent, CheckDirective, CheckAllDirective, ResponsiveRendererComponent];
var SharedModule = class {
};
SharedModule.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SharedModule)();
};
SharedModule.ɵmod = ɵɵdefineNgModule({
  type: SharedModule,
  imports: [ListComponent, ListItemDirective, SelectableDirective, SearchBarComponent, TemplateContextDirective, TagListComponent, CheckDirective, CheckAllDirective, ResponsiveRendererComponent, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule],
  exports: [ListComponent, ListItemDirective, SelectableDirective, SearchBarComponent, TemplateContextDirective, TagListComponent, CheckDirective, CheckAllDirective, ResponsiveRendererComponent, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule]
});
SharedModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [ListComponent, SearchBarComponent, TagListComponent, ResponsiveRendererComponent, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [INTERNAL_DIRECTIVES, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule],
      exports: [INTERNAL_DIRECTIVES, FormsModule, ReactiveFormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule, EventsModule, IconsModule, ActionSheetModule, ButtonModule, TextBoxModule],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var AutoCompleteModule = class {
};
AutoCompleteModule.ɵfac = function AutoCompleteModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AutoCompleteModule)();
};
AutoCompleteModule.ɵmod = ɵɵdefineNgModule({
  type: AutoCompleteModule,
  imports: [AutoCompleteComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent],
  exports: [AutoCompleteComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, AdornmentsModule]
});
AutoCompleteModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService, IconsService],
  imports: [AutoCompleteComponent, CustomMessagesComponent, SeparatorComponent, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_AUTOCOMPLETE],
      exports: [...KENDO_AUTOCOMPLETE, AdornmentsModule],
      providers: [PopupService, ResizeBatchService, IconsService]
    }]
  }], null, null);
})();
var ComboBoxModule = class {
};
ComboBoxModule.ɵfac = function ComboBoxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ComboBoxModule)();
};
ComboBoxModule.ɵmod = ɵɵdefineNgModule({
  type: ComboBoxModule,
  imports: [ComboBoxComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, ColumnHeaderTemplateDirective, ColumnCellTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent],
  exports: [ComboBoxComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, ColumnHeaderTemplateDirective, ColumnCellTemplateDirective, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent, SuffixTemplateDirective, PrefixTemplateDirective, SeparatorComponent, AdornmentsModule]
});
ComboBoxModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService, IconsService],
  imports: [ComboBoxComponent, CustomMessagesComponent, SeparatorComponent, MultiColumnComboBoxComponent, ComboBoxColumnComponent, CustomMessagesComponent, SeparatorComponent, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboBoxModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_COMBOBOX, ...KENDO_MULTICOLUMNCOMBOBOX],
      exports: [...KENDO_COMBOBOX, ...KENDO_MULTICOLUMNCOMBOBOX, AdornmentsModule],
      providers: [PopupService, ResizeBatchService, IconsService]
    }]
  }], null, null);
})();
var DropDownListModule = class {
};
DropDownListModule.ɵfac = function DropDownListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownListModule)();
};
DropDownListModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownListModule,
  imports: [DropDownListComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent],
  exports: [DropDownListComponent, FixedGroupTemplateDirective, FooterTemplateDirective, GroupTemplateDirective, HeaderTemplateDirective, ItemTemplateDirective, ValueTemplateDirective, NoDataTemplateDirective, FilterDirective, CustomMessagesComponent]
});
DropDownListModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService, IconsService],
  imports: [DropDownListComponent, CustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownListModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_DROPDOWNLIST],
      exports: [...KENDO_DROPDOWNLIST],
      providers: [PopupService, ResizeBatchService, IconsService]
    }]
  }], null, null);
})();

export {
  SearchBarComponent,
  ItemTemplateDirective,
  HeaderTemplateDirective,
  FooterTemplateDirective,
  GroupTemplateDirective,
  FixedGroupTemplateDirective,
  NoDataTemplateDirective,
  PreventableEvent,
  FilterableComponent,
  ListItemDirective,
  SelectableDirective,
  ListComponent,
  ResponsiveRendererComponent,
  LocalizedMessagesDirective,
  AutoCompleteComponent,
  ComboBoxComponent,
  ValueTemplateDirective,
  FilterInputDirective,
  DropDownListComponent,
  CustomItemTemplateDirective,
  TagTemplateDirective,
  GroupTagTemplateDirective,
  RemoveTagEvent,
  TagListComponent,
  MultiSelectComponent,
  ColumnCellTemplateDirective,
  ColumnHeaderTemplateDirective,
  ComboBoxColumnComponent,
  MultiColumnComboBoxComponent,
  NodeTemplateDirective,
  DropDownTreeComponent,
  CheckDirective,
  CheckAllDirective,
  MultiSelectTreeComponent,
  DropDownTreeFlatBindingDirective,
  DropDownTreeHierarchyBindingDirective,
  MultiSelectTreeFlatBindingDirective,
  MultiSelectTreeHierarchyBindingDirective,
  DropDownTreesExpandDirective,
  FilterDirective,
  CustomMessagesComponent,
  SummaryTagDirective,
  MultiSelectTreeSummaryTagDirective,
  KENDO_AUTOCOMPLETE,
  KENDO_COMBOBOX,
  KENDO_MULTICOLUMNCOMBOBOX,
  KENDO_DROPDOWNLIST,
  KENDO_MULTISELECT,
  KENDO_DROPDOWNTREE,
  KENDO_MULTISELECTTREE,
  KENDO_DROPDOWNS,
  DropDownTreesModule,
  DropDownsModule,
  MultiSelectModule,
  SharedDirectivesModule,
  SharedModule,
  AutoCompleteModule,
  ComboBoxModule,
  DropDownListModule
};
//# sourceMappingURL=chunk-MVMQFXEA.js.map
