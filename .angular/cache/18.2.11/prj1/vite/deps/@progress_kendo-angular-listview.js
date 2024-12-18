import {
  DropDownListComponent
} from "./chunk-U2GKXOFS.js";
import "./chunk-MLTKKSEN.js";
import {
  NumericTextBoxComponent
} from "./chunk-NV2WLC36.js";
import "./chunk-OM6466D5.js";
import "./chunk-LFIDXDLB.js";
import "./chunk-U5CKWJNL.js";
import {
  ButtonComponent
} from "./chunk-RJL4NHM7.js";
import {
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltToLeftIcon,
  caretAltToRightIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  EventsOutsideAngularDirective,
  Keys,
  ResizeBatchService,
  ResizeSensorComponent,
  anyChanged,
  hasObservers,
  isChanged,
  isDocumentAvailable
} from "./chunk-HRNBUZH3.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-GRNNJSKN.js";
import "./chunk-HWV6E67F.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import "./chunk-LMGKJMTG.js";
import {
  FormControl,
  FormGroup
} from "./chunk-XWKI3G3Z.js";
import "./chunk-A7ROUWFU.js";
import "./chunk-64BBXZIB.js";
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
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import "./chunk-PC7SNX6C.js";
import "./chunk-XIIBOQQH.js";
import {
  Subject,
  Subscription,
  switchMap,
  take
} from "./chunk-NXOOB3F7.js";
import "./chunk-4MWRP73S.js";

// node_modules/@progress/kendo-angular-pager/fesm2020/progress-kendo-angular-pager.mjs
var _c0 = ["dropdownlist"];
var _c1 = ["select"];
var _c2 = ["numbers"];
var _c3 = (a0) => ({
  "k-selected": a0
});
function PagerNumericButtonsComponent_option_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 9);
    ɵɵtext(1, "... ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("selected", false);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.start - 1));
  }
}
function PagerNumericButtonsComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const num_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", num_r3.toString())("selected", num_r3 === ctx_r1.currentPage)("ngClass", ɵɵpureFunction1(6, _c3, ctx_r1.currentPage === num_r3));
    ɵɵattribute("aria-label", ctx_r1.pageLabel(num_r3))("aria-current", ctx_r1.currentPage === num_r3 ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", num_r3, " ");
  }
}
function PagerNumericButtonsComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 11);
    ɵɵtext(1, "... ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("selected", false);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.end + 1));
  }
}
function PagerNumericButtonsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PagerNumericButtonsComponent_button_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePage(ctx_r1.start - 2));
    });
    ɵɵtext(1, "...");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.start - 1))("title", ctx_r1.pageLabel(ctx_r1.start - 1));
  }
}
function PagerNumericButtonsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function PagerNumericButtonsComponent_button_8_Template_button_click_0_listener() {
      const num_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePage(num_r6 - 1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const num_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size)("selected", ctx_r1.currentPage === num_r6);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(num_r6))("title", ctx_r1.pageLabel(num_r6))("aria-current", ctx_r1.currentPage === num_r6 ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", num_r6, " ");
  }
}
function PagerNumericButtonsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PagerNumericButtonsComponent_button_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePage(ctx_r1.end));
    });
    ɵɵtext(1, "...");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.end + 1))("title", ctx_r1.pageLabel(ctx_r1.end + 1));
  }
}
var _c4 = () => ({
  "k-pager-input": true,
  "k-label": true
});
var _c5 = (a0) => ({
  "aria-label": a0
});
var _c6 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function PagerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template.first == null ? null : ctx_r0.template.first.templateRef)("ngTemplateOutletContext", ctx_r0.templateContext);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_prev_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-prev-buttons", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_numeric_buttons_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-numeric-buttons", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size)("buttonCount", ctx_r0.buttonCount);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_input_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-input", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_next_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-next-buttons", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_page_sizes_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-page-sizes", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size)("pageSizes", ctx_r0.pageSizeValues);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_info_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-datapager-info");
  }
}
function PagerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵtemplate(2, PagerComponent_ng_container_2_kendo_datapager_prev_buttons_2_Template, 1, 1, "kendo-datapager-prev-buttons", 5)(3, PagerComponent_ng_container_2_kendo_datapager_numeric_buttons_3_Template, 1, 2, "kendo-datapager-numeric-buttons", 6)(4, PagerComponent_ng_container_2_kendo_datapager_input_4_Template, 1, 1, "kendo-datapager-input", 5)(5, PagerComponent_ng_container_2_kendo_datapager_next_buttons_5_Template, 1, 1, "kendo-datapager-next-buttons", 5);
    ɵɵelementEnd();
    ɵɵtemplate(6, PagerComponent_ng_container_2_kendo_datapager_page_sizes_6_Template, 1, 2, "kendo-datapager-page-sizes", 7)(7, PagerComponent_ng_container_2_kendo_datapager_info_7_Template, 1, 0, "kendo-datapager-info", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.previousNext);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.type === "numeric" && ctx_r0.buttonCount > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.type === "input");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.previousNext);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pageSizeValues);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.info);
  }
}
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
var PageSizeChangeEvent = class extends PreventableEvent {
  /**
   * Constructs the event arguments for the `pageSizeChange` event.
   * @param newPageSize - The newly selected page size.
   * @hidden
   */
  constructor(newPageSize) {
    super();
    this.newPageSize = newPageSize;
  }
};
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
  selectors: [["kendoPagerMessages"]],
  inputs: {
    firstPage: "firstPage",
    lastPage: "lastPage",
    previousPage: "previousPage",
    nextPage: "nextPage",
    page: "page",
    pageNumberInputTitle: "pageNumberInputTitle",
    itemsPerPage: "itemsPerPage",
    of: "of",
    items: "items",
    selectPage: "selectPage",
    inputLabel: "inputLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendoPagerMessages"
    }]
  }], null, {
    firstPage: [{
      type: Input
    }],
    lastPage: [{
      type: Input
    }],
    previousPage: [{
      type: Input
    }],
    nextPage: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    pageNumberInputTitle: [{
      type: Input
    }],
    itemsPerPage: [{
      type: Input
    }],
    of: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    selectPage: [{
      type: Input
    }],
    inputLabel: [{
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
  selectors: [["kendo-datapager-messages"]],
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
      selector: "kendo-datapager-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
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
  selectors: [["", "kendoDataPagerLocalizedMessages", ""]],
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
      selector: "[kendoDataPagerLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var PagerContextService = class {
  constructor() {
    this.changes = new Subject();
    this.pageChange = new Subject();
    this.pageSizeChange = new Subject();
  }
  get currentPage() {
    return this.skip / this.pageSize;
  }
  notifyChanges(changes) {
    this.total = changes.total;
    this.pageSize = changes.pageSize;
    this.skip = changes.skip;
    this.changes.next(changes);
  }
  changePage(page) {
    this.pageChange.next({
      skip: page * this.pageSize,
      take: this.pageSize
    });
  }
  changePageSize(event) {
    this.pageSizeChange.next(event);
  }
  nextPage() {
    const nextPage = this.currentPage + 1;
    if (nextPage * this.pageSize <= this.total) {
      this.changePage(nextPage);
    }
  }
  prevPage() {
    const prevPage = this.currentPage - 1;
    if (prevPage * this.pageSize >= 0) {
      this.changePage(prevPage);
    }
  }
};
var PagerElementComponent = class {
  constructor(localization, pagerContext, cd) {
    this.localization = localization;
    this.pagerContext = pagerContext;
    this.cd = cd;
    this.total = this.pagerContext.total;
    this.skip = this.pagerContext.skip;
    this.pageSize = this.pagerContext.pageSize;
    this.caretAltLeftIcon = caretAltLeftIcon;
    this.caretAltToLeftIcon = caretAltToLeftIcon;
    this.caretAltRightIcon = caretAltRightIcon;
    this.caretAltToRightIcon = caretAltToRightIcon;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  /**
   * @hidden
   *
   * @param {string} key
   * @returns {string}
   *
   * @memberOf PagerElementComponent
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   *
   * @param {number} page
   *
   * @memberOf PagerElementComponent
   */
  changePage(page) {
    this.pagerContext.changePage(page);
    return false;
  }
  /**
   * @hidden
   *
   * @memberOf PagerElementComponent
   */
  ngOnInit() {
    this.subscriptions = this.pagerContext.changes.subscribe(this.onChanges.bind(this));
    this.subscriptions.add(this.localization.changes.subscribe(() => this.cd.markForCheck()));
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  get prevArrowIcons() {
    return !this.localization.rtl ? ["caret-alt-to-left", "caret-alt-left"] : ["caret-alt-to-right", "caret-alt-right"];
  }
  get prevArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltToLeftIcon, this.caretAltLeftIcon] : [this.caretAltToRightIcon, this.caretAltRightIcon];
  }
  get nextArrowIcons() {
    return !this.localization.rtl ? ["caret-alt-right", "caret-alt-to-right"] : ["caret-alt-left", "caret-alt-to-left"];
  }
  get nextArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltRightIcon, this.caretAltToRightIcon] : [this.caretAltLeftIcon, this.caretAltToLeftIcon];
  }
};
PagerElementComponent.ɵfac = function PagerElementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerElementComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
};
PagerElementComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerElementComponent,
  selectors: [["kendo-pager-element"]],
  decls: 0,
  vars: 0,
  template: function PagerElementComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerElementComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pager-element",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var DEFAULT_PAGE_SIZE_VALUES = [5, 10, 20];
var focusableDirectiveSelector = "[kendoPagerFocusable]";
var getAllFocusableChildren = (parent2) => {
  return parent2.querySelectorAll(focusableDirectiveSelector);
};
var focusableSelector = ["a[href]:not([disabled])", "area[href]:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button", "iframe:not([disabled])", "object:not([disabled])", "embed:not([disabled])", "*[tabindex]:not([disabled])", '*[contenteditable]:not([disabled]):not([contenteditable="false"])'].join(",");
var DEFAULT_SIZE = "medium";
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    default:
      break;
  }
};
var PagerNavigationService = class {
  constructor() {
    this.isNavigable = false;
    this.innerNavigationChange = new Subject();
  }
  toggleInnerNavigation(value) {
    this.innerNavigationChange.next(value);
  }
  keepFocusWithinComponent(wrapper, target, event) {
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  getFirstAndLastFocusable(wrapper) {
    const all = getAllFocusableChildren(wrapper);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
};
var PagerFocusableDirective = class {
  constructor(navigationService, element, renderer) {
    this.navigationService = navigationService;
    this.element = element;
    this.renderer = renderer;
    this.subscriptions = new Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  innerNavigationChange(value) {
    if (!this.navigationService.isNavigable) {
      return;
    }
    const index = value ? "0" : "-1";
    if (this.nativeElement.matches(focusableSelector)) {
      this.renderer.setAttribute(this.nativeElement, "tabindex", index);
    }
    const focusableElements = this.nativeElement.querySelectorAll(focusableSelector);
    focusableElements.forEach((el) => {
      this.renderer.setAttribute(el, "tabindex", index);
    });
  }
};
PagerFocusableDirective.ɵfac = function PagerFocusableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerFocusableDirective)(ɵɵdirectiveInject(PagerNavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
PagerFocusableDirective.ɵdir = ɵɵdefineDirective({
  type: PagerFocusableDirective,
  selectors: [["", "kendoPagerFocusable", ""]],
  exportAs: ["kendoPagerFocusable"],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerFocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPagerFocusable]",
      exportAs: "kendoPagerFocusable",
      standalone: true
    }]
  }], function() {
    return [{
      type: PagerNavigationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, null);
})();
var PagerPrevButtonsComponent = class extends PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
    this.size = DEFAULT_SIZE;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerPrevButtonsComponent
   */
  get disabled() {
    return this.currentPage === 1 || !this.total;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
};
PagerPrevButtonsComponent.ɵfac = function PagerPrevButtonsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerPrevButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
};
PagerPrevButtonsComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerPrevButtonsComponent,
  selectors: [["kendo-datapager-prev-buttons"]],
  inputs: {
    size: "size"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 12,
  consts: [["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-first", 3, "click", "disabled", "icon", "svgIcon", "size", "title"], ["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "click", "disabled", "icon", "svgIcon", "size", "title"]],
  template: function PagerPrevButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function PagerPrevButtonsComponent_Template_button_click_0_listener() {
        return ctx.currentPage !== 1 ? ctx.changePage(0) : false;
      });
      ɵɵelementEnd();
      ɵɵelementStart(1, "button", 1);
      ɵɵlistener("click", function PagerPrevButtonsComponent_Template_button_click_1_listener() {
        return ctx.currentPage !== 1 ? ctx.changePage(ctx.currentPage - 2) : false;
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("disabled", ctx.disabled)("icon", ctx.prevArrowIcons[0])("svgIcon", ctx.prevArrowSVGIcons[0])("size", ctx.size)("title", ctx.textFor("firstPage"));
      ɵɵattribute("aria-label", ctx.textFor("firstPage"));
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.disabled)("icon", ctx.prevArrowIcons[1])("svgIcon", ctx.prevArrowSVGIcons[1])("size", ctx.size)("title", ctx.textFor("previousPage"));
      ɵɵattribute("aria-label", ctx.textFor("previousPage"));
    }
  },
  dependencies: [ButtonComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerPrevButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-prev-buttons",
      template: `
        <button
            type="button" kendoButton kendoPagerFocusable
            class="k-pager-nav k-pager-first"
            [disabled]="disabled"
            [icon]="prevArrowIcons[0]"
            [svgIcon]="prevArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('firstPage')"
            [attr.aria-label]="textFor('firstPage')"
            (click)="currentPage !== 1 ? changePage(0) : false">
        </button>
        <button
            type="button" kendoButton kendoPagerFocusable
            class="k-pager-nav"
            [disabled]="disabled"
            [icon]="prevArrowIcons[1]"
            [svgIcon]="prevArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('previousPage')"
            [attr.aria-label]="textFor('previousPage')"
            (click)="currentPage !== 1 ? changePage(currentPage-2) : false">
        </button>
    `,
      standalone: true,
      imports: [ButtonComponent, PagerFocusableDirective]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    size: [{
      type: Input
    }]
  });
})();
var PagerPageSizesComponent = class extends PagerElementComponent {
  constructor(localization, cd, pagerContext, element, ngZone) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.element = element;
    this.ngZone = ngZone;
    this.size = DEFAULT_SIZE;
    this._pageSizes = [];
  }
  /**
   * The page sizes collection. Can contain numbers and [PageSizeItem]({% slug api_pager_pagesizeitem %}) objects.
   *
   * @example
   *
   * ```ts-preview
   * _@Component({
   *    selector: 'my-app',
   *    template: `
   *        <div *ngFor="let item of pagedData" style="border: 1px solid black; padding: 10px;">
   *            <span>{{item.ProductID}}. </span>
   *            <span>{{item.ProductName}}</span>
   *        </div>
   *        <kendo-datapager
   *             [skip]="skip"
   *             [pageSize]="pageSize"
   *             [total]="total"
   *             (pageChange)="onPageChange($event)">
   *           <ng-template kendoDataPagerTemplate>
   *               <kendo-datapager-page-sizes [pageSizes]="pagesizes"></kendo-datapager-page-sizes>
   *           </ng-template>
   *        </kendo-datapager>
   *    `
   * })
   * class AppComponent {
   *    public data: any[] = products;
   *    public pagedData = [];
   *    public skip = 0;
   *    public pageSize = 2;
   *    public total = products.length;
   *    public pagesizes = [{text: 'One', value: 1}, {text: 'Two', value: 2}, {text: 'All', value : 'all'}];
   *
   *    public ngOnInit() {
   *        this.pageData();
   *    }
   *
   *    public onPageChange(e) {
   *        this.skip = e.skip;
   *        this.pageSize = e.take;
   *        this.pageData();
   *    }
   *
   *    private pageData() {
   *        this.pagedData = this.data.slice(this.skip, this.skip + this.pageSize);
   *    }
   * }
   *
   * const products = [{
   *   'ProductID' : 1,
   *   'ProductName' : "Chai",
   *   'SupplierID' : 1,
   *   'CategoryID' : 1,
   *   'QuantityPerUnit' : "10 boxes x 20 bags",
   *   'UnitPrice' : 18.0000,
   *   'UnitsInStock' : 39,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 10,
   *   'Discontinued' : false
   *
   * }, {
   *   'ProductID' : 2,
   *   'ProductName' : "Chang",
   *   'SupplierID' : 1,
   *   'CategoryID' : 1,
   *   'QuantityPerUnit' : "24 - 12 oz bottles",
   *   'UnitPrice' : 19.0000,
   *   'UnitsInStock' : 17,
   *   'UnitsOnOrder' : 40,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 3,
   *   'ProductName' : "Aniseed Syrup",
   *   'SupplierID' : 1,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "12 - 550 ml bottles",
   *   'UnitPrice' : 10.0000,
   *   'UnitsInStock' : 13,
   *   'UnitsOnOrder' : 70,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 4,
   *   'ProductName' : "Chef Anton\'s Cajun Seasoning",
   *   'SupplierID' : 2,
   *  'CategoryID' : 2,
   *   'QuantityPerUnit' : "48 - 6 oz jars",
   *   'UnitPrice' : 22.0000,
   *   'UnitsInStock' : 53,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 0,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 5,
   *   'ProductName' : "Chef Anton\'s Gumbo Mix",
   *   'SupplierID' : 2,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "36 boxes",
   *   'UnitPrice' : 21.3500,
   *   'UnitsInStock' : 0,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 0,
   *   'Discontinued' : true
   * }, {
   *   'ProductID' : 6,
   *   'ProductName' : "Grandma\'s Boysenberry Spread",
   *   'SupplierID' : 3,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "12 - 8 oz jars",
   *   'UnitPrice' : 25.0000,
   *   'UnitsInStock' : 120,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }];
   * ```
   *
   */
  set pageSizes(pageSizes) {
    let normalizedItems = [];
    if (Array.isArray(pageSizes)) {
      pageSizes.forEach((item) => {
        if (typeof item === "number") {
          normalizedItems.push({
            text: item.toString(),
            value: item
          });
        } else {
          normalizedItems.push(item);
        }
      });
    }
    if (this.pageSize && !normalizedItems.some((item) => item.value === this.pageSize)) {
      normalizedItems = [{
        text: this.pageSize.toString(),
        value: this.pageSize
      }, ...normalizedItems];
    }
    this._pageSizes = normalizedItems;
  }
  get pageSizes() {
    return this._pageSizes;
  }
  /**
   * @hidden
   *
   * @readonly
   */
  get classes() {
    return true;
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.element.nativeElement.addEventListener("keydown", this.keyDownHandler.bind(this), true);
    });
  }
  ngOnDestroy() {
    this.element.nativeElement.removeEventListener("keydown", this.keyDownHandler);
  }
  /**
   * @hidden
   */
  pageSizeChange(value, dropdownlist) {
    const event = new PageSizeChangeEvent(value);
    this.pagerContext.changePageSize(event);
    if (event.isDefaultPrevented()) {
      dropdownlist.writeValue(this.pageSize);
    }
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = typeof pageSize === "number" ? pageSize : this.total;
    this.cd.markForCheck();
  }
  keyDownHandler(ev) {
    if (ev.keyCode === Keys.Escape && this.dropDownList.isOpen) {
      ev.stopPropagation();
      this.dropDownList.toggle(false);
    }
  }
};
PagerPageSizesComponent.ɵfac = function PagerPageSizesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerPageSizesComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
PagerPageSizesComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerPageSizesComponent,
  selectors: [["kendo-datapager-page-sizes"]],
  viewQuery: function PagerPageSizesComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropDownList = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PagerPageSizesComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-pager-sizes", ctx.classes);
    }
  },
  inputs: {
    pageSizes: "pageSizes",
    size: "size"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 6,
  consts: [["dropdownlist", ""], ["kendoPagerFocusable", "", "textField", "text", "valueField", "value", 3, "valueChange", "size", "data", "valuePrimitive", "value"]],
  template: function PagerPageSizesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "kendo-dropdownlist", 1, 0);
      ɵɵlistener("valueChange", function PagerPageSizesComponent_Template_kendo_dropdownlist_valueChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        const dropdownlist_r2 = ɵɵreference(1);
        return ɵɵresetView(ctx.pageSizeChange($event, dropdownlist_r2));
      });
      ɵɵelementEnd();
      ɵɵtext(2);
    }
    if (rf & 2) {
      ɵɵproperty("size", ctx.size)("data", ctx.pageSizes)("valuePrimitive", true)("value", ctx.pageSize);
      ɵɵattribute("aria-label", ctx.textFor("itemsPerPage"));
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.textFor("itemsPerPage"), " ");
    }
  },
  dependencies: [DropDownListComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerPageSizesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-page-sizes",
      template: `
        <kendo-dropdownlist kendoPagerFocusable
            #dropdownlist
            [size]="size"
            [data]="pageSizes"
            textField="text"
            valueField="value"
            [valuePrimitive]="true"
            [value]="pageSize"
            (valueChange)="pageSizeChange($event, dropdownlist)"
            [attr.aria-label]="textFor('itemsPerPage')"></kendo-dropdownlist>
        {{ textFor('itemsPerPage') }}
    `,
      standalone: true,
      imports: [DropDownListComponent, PagerFocusableDirective]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PagerContextService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    dropDownList: [{
      type: ViewChild,
      args: ["dropdownlist", {
        static: true
      }]
    }],
    pageSizes: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    classes: [{
      type: HostBinding,
      args: ["class.k-pager-sizes"]
    }]
  });
})();
var PagerTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PagerTemplateDirective.ɵfac = function PagerTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PagerTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PagerTemplateDirective,
  selectors: [["", "kendoDataPagerTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDataPagerTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var PagerNumericButtonsComponent = class extends PagerElementComponent {
  constructor(localization, cd, pagerContext, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.renderer = renderer;
    this._size = DEFAULT_SIZE;
  }
  /**
   * Specifies the padding of the numeric buttons.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number[]}
   * @memberOf PagerNumericButtonsComponent
   */
  get buttons() {
    const result = [];
    for (let idx = this.start; idx <= this.end; idx++) {
      result.push(idx);
    }
    return result;
  }
  /**
   * @hidden
   */
  get end() {
    return Math.min(this.start + this.buttonCount - 1, this.totalPages);
  }
  /**
   * @hidden
   */
  get start() {
    const page = this.currentPage;
    const buttonCount = this.buttonCount;
    if (page > buttonCount) {
      const reminder = page % buttonCount;
      return reminder === 0 ? page - buttonCount + 1 : page - reminder + 1;
    }
    return 1;
  }
  ngAfterViewInit() {
    this.handleClasses(this.size, "size");
  }
  /**
   * @hidden
   */
  pageLabel(num) {
    const pageText = this.textFor("page");
    if (pageText) {
      return pageText + " " + num;
    }
    return num.toString();
  }
  /**
   * @hidden
   */
  onSelectChange(e) {
    const target = e.target;
    const valueAsNumber = Number(target.value);
    if (!Number.isNaN(valueAsNumber)) {
      this.changePage(valueAsNumber - 1);
    } else {
      if (target.value === "previousButtons") {
        this.changePage(this.start - 2);
      } else {
        this.changePage(this.end);
      }
    }
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  get pageChooserLabel() {
    return this.textFor("selectPage");
  }
  handleClasses(value, input) {
    const elem = this.selectElement?.nativeElement;
    const classes = getStylingClasses("picker", input, this[input], value);
    if (!elem) {
      return;
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
};
PagerNumericButtonsComponent.ɵfac = function PagerNumericButtonsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerNumericButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(Renderer2));
};
PagerNumericButtonsComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerNumericButtonsComponent,
  selectors: [["kendo-datapager-numeric-buttons"]],
  viewQuery: function PagerNumericButtonsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5, ElementRef);
      ɵɵviewQuery(_c2, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numbersElement = _t.first);
    }
  },
  inputs: {
    buttonCount: "buttonCount",
    size: "size"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 10,
  vars: 10,
  consts: [["select", ""], ["numbers", ""], ["kendoPagerFocusable", "", 1, "k-dropdown-list", "k-dropdown", "k-picker", "k-picker-solid", "k-rounded-md", 3, "change"], ["value", "previousButtons", 3, "selected", 4, "ngIf"], [3, "value", "selected", "ngClass", 4, "ngFor", "ngForOf"], ["value", "nextButtons", 3, "selected", 4, "ngIf"], [1, "k-pager-numbers"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "click", 4, "ngIf"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "selected", "click", 4, "ngFor", "ngForOf"], ["value", "previousButtons", 3, "selected"], [3, "value", "selected", "ngClass"], ["value", "nextButtons", 3, "selected"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "click", "size"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "click", "size", "selected"]],
  template: function PagerNumericButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "select", 2, 0);
      ɵɵlistener("change", function PagerNumericButtonsComponent_Template_select_change_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onSelectChange($event));
      });
      ɵɵtemplate(2, PagerNumericButtonsComponent_option_2_Template, 2, 2, "option", 3)(3, PagerNumericButtonsComponent_option_3_Template, 2, 8, "option", 4)(4, PagerNumericButtonsComponent_option_4_Template, 2, 2, "option", 5);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 6, 1);
      ɵɵtemplate(7, PagerNumericButtonsComponent_button_7_Template, 2, 3, "button", 7)(8, PagerNumericButtonsComponent_button_8_Template, 2, 6, "button", 8)(9, PagerNumericButtonsComponent_button_9_Template, 2, 3, "button", 7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("display", "none");
      ɵɵattribute("title", ctx.pageChooserLabel)("aria-label", ctx.pageChooserLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.start > 1);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.buttons);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.end < ctx.totalPages);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.start > 1);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.buttons);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.end < ctx.totalPages);
    }
  },
  dependencies: [PagerFocusableDirective, NgIf, NgForOf, NgClass, ButtonComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerNumericButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-numeric-buttons",
      template: `
        <select kendoPagerFocusable #select
            class="k-dropdown-list k-dropdown k-picker k-picker-solid k-rounded-md"
            [style.display]="'none'"
            [attr.title]="pageChooserLabel"
            [attr.aria-label]="pageChooserLabel"
            (change)="onSelectChange($event)">
            <option *ngIf="start > 1"
                value="previousButtons"
                [selected]="false"
                [attr.aria-label]="pageLabel(start - 1)">...
            </option>
            <option *ngFor="let num of buttons"
                [value]="num.toString()"
                [selected]="num === currentPage"
                [attr.aria-label]="pageLabel(num)"
                [attr.aria-current]="currentPage === num ? 'page' : undefined"
                [ngClass]="{'k-selected':currentPage === num}">
                {{num}}
            </option>
            <option *ngIf="end < totalPages"
                value="nextButtons"
                [selected]="false"
                [attr.aria-label]="pageLabel(end + 1)">...
            </option>
        </select>
        <div class="k-pager-numbers" #numbers>
            <button *ngIf="start > 1"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(start - 1)"
                [attr.title]="pageLabel(start - 1)"
                (click)="changePage(start - 2)">...</button>
            <button *ngFor="let num of buttons"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(num)"
                [attr.title]="pageLabel(num)"
                [attr.aria-current]="currentPage === num ? 'page' : undefined"
                [selected]="currentPage === num"
                (click)="changePage(num - 1)">
                {{num}}
            </button>
            <button *ngIf="end < totalPages"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(end + 1)"
                [attr.title]="pageLabel(end + 1)"
                (click)="changePage(end)">...</button>
        </div>
    `,
      standalone: true,
      imports: [PagerFocusableDirective, NgIf, NgForOf, NgClass, ButtonComponent]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PagerContextService
    }, {
      type: Renderer2
    }];
  }, {
    selectElement: [{
      type: ViewChild,
      args: ["select", {
        read: ElementRef
      }]
    }],
    numbersElement: [{
      type: ViewChild,
      args: ["numbers", {
        read: ElementRef
      }]
    }],
    buttonCount: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var PagerNextButtonsComponent = class extends PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
    this.size = DEFAULT_SIZE;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerNextButtonsComponent
   */
  get disabled() {
    return this.currentPage === this.totalPages || !this.total;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
};
PagerNextButtonsComponent.ɵfac = function PagerNextButtonsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerNextButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
};
PagerNextButtonsComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerNextButtonsComponent,
  selectors: [["kendo-datapager-next-buttons"]],
  inputs: {
    size: "size"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 12,
  consts: [["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "click", "size", "icon", "svgIcon", "disabled", "title"], ["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-last", 3, "click", "size", "icon", "svgIcon", "disabled", "title"]],
  template: function PagerNextButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function PagerNextButtonsComponent_Template_button_click_0_listener() {
        return ctx.currentPage !== ctx.totalPages ? ctx.changePage(ctx.currentPage) : false;
      });
      ɵɵelementEnd();
      ɵɵelementStart(1, "button", 1);
      ɵɵlistener("click", function PagerNextButtonsComponent_Template_button_click_1_listener() {
        return ctx.currentPage !== ctx.totalPages ? ctx.changePage(ctx.totalPages - 1) : false;
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("size", ctx.size)("icon", ctx.nextArrowIcons[0])("svgIcon", ctx.nextArrowSVGIcons[0])("disabled", ctx.disabled)("title", ctx.textFor("nextPage"));
      ɵɵattribute("aria-label", ctx.textFor("nextPage"));
      ɵɵadvance();
      ɵɵproperty("size", ctx.size)("icon", ctx.nextArrowIcons[1])("svgIcon", ctx.nextArrowSVGIcons[1])("disabled", ctx.disabled)("title", ctx.textFor("lastPage"));
      ɵɵattribute("aria-label", ctx.textFor("lastPage"));
    }
  },
  dependencies: [ButtonComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerNextButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-next-buttons",
      template: `
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[0]"
            [svgIcon]="nextArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav"
            [disabled]="disabled"
            [title]="textFor('nextPage')"
            [attr.aria-label]="textFor('nextPage')"
            (click)="currentPage !== totalPages ? changePage(currentPage) : false">
        </button>
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[1]"
            [svgIcon]="nextArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav k-pager-last"
            [disabled]="disabled"
            [title]="textFor('lastPage')"
            [attr.aria-label]="textFor('lastPage')"
            (click)="currentPage !== totalPages ? changePage(totalPages-1) : false">
        </button>
    `,
      standalone: true,
      imports: [ButtonComponent, PagerFocusableDirective]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    size: [{
      type: Input
    }]
  });
})();
var PagerInputComponent = class extends PagerElementComponent {
  constructor(localization, pagerContext, zone, cd, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.zone = zone;
    this.renderer = renderer;
    this.size = DEFAULT_SIZE;
    this.handleKeyDown = (event) => {
      const incomingValue = this.numericInput.value || this.current;
      if (event.keyCode === Keys.Enter) {
        event.preventDefault();
        if (incomingValue !== this.current) {
          this.zone.run(() => {
            this.changePage(incomingValue - 1);
          });
        }
      }
    };
    this.handleBlur = () => {
      const inputValue = this.numericInput.value;
      if (!inputValue) {
        this.numericInput.writeValue(this.current);
        return;
      }
      if (inputValue !== this.current) {
        this.zone.run(() => {
          this.changePage(inputValue - 1);
        });
      }
    };
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  /**
   * @hidden
   */
  get current() {
    return this.hasPages ? this.currentPage : 0;
  }
  /**
   * @hidden
   */
  get hasPages() {
    return this.totalPages !== 0;
  }
};
PagerInputComponent.ɵfac = function PagerInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerInputComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
};
PagerInputComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerInputComponent,
  selectors: [["kendo-datapager-input"]],
  viewQuery: function PagerInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NumericTextBoxComponent, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericInput = _t.first);
    }
  },
  inputs: {
    size: "size"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 21,
  consts: [[3, "ngClass"], ["kendoPagerFocusable", "", "format", "n0", 3, "spinners", "decimals", "size", "disabled", "value", "min", "max", "autoCorrect", "inputAttributes", "title", "kendoEventsOutsideAngular"]],
  template: function PagerInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelement(2, "kendo-numerictextbox", 1);
      ɵɵtext(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction0(15, _c4));
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.textFor("page"), " ");
      ɵɵadvance();
      ɵɵproperty("spinners", false)("decimals", 0)("size", ctx.size)("disabled", !ctx.hasPages)("value", ctx.current)("min", ctx.hasPages ? 1 : 0)("max", ctx.totalPages)("autoCorrect", true)("inputAttributes", ɵɵpureFunction1(16, _c5, ctx.textFor("inputLabel")))("title", ctx.textFor("pageNumberInputTitle"))("kendoEventsOutsideAngular", ɵɵpureFunction2(18, _c6, ctx.handleKeyDown, ctx.handleBlur));
      ɵɵadvance();
      ɵɵtextInterpolate2(" ", ctx.textFor("of"), " ", ctx.totalPages, " ");
    }
  },
  dependencies: [NgClass, NumericTextBoxComponent, PagerFocusableDirective, EventsOutsideAngularDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerInputComponent, [{
    type: Component,
    args: [{
      selector: "kendo-datapager-input",
      template: `
     <span [ngClass]="{'k-pager-input': true, 'k-label': true}">
        {{textFor('page')}}
        <kendo-numerictextbox kendoPagerFocusable
            [spinners]="false"
            [decimals]="0"
            format="n0"
            [size]="size"
            [disabled]="!hasPages"
            [value]="current"
            [min]="hasPages ? 1 : 0"
            [max]="totalPages"
            [autoCorrect]="true"
            [inputAttributes]="{
                'aria-label': textFor('inputLabel')
            }"
            [title]="textFor('pageNumberInputTitle')"
            [kendoEventsOutsideAngular]="{
                keydown: handleKeyDown,
                focusout: handleBlur
            }">
        </kendo-numerictextbox>
        {{textFor('of')}} {{totalPages}}
     </span>
    `,
      standalone: true,
      imports: [NgClass, NumericTextBoxComponent, PagerFocusableDirective, EventsOutsideAngularDirective]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }];
  }, {
    numericInput: [{
      type: ViewChild,
      args: [NumericTextBoxComponent, {
        static: true
      }]
    }],
    size: [{
      type: Input
    }]
  });
})();
var PagerInfoComponent = class extends PagerElementComponent {
  constructor(localization, cd, pagerContext) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get maxItems() {
    return Math.min(this.currentPage * this.pageSize, this.total);
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get currentPageText() {
    return this.total ? (this.currentPage - 1) * this.pageSize + 1 : 0;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerInfoComponent
   */
  get classes() {
    return true;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
};
PagerInfoComponent.ɵfac = function PagerInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerInfoComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService));
};
PagerInfoComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerInfoComponent,
  selectors: [["kendo-datapager-info"]],
  hostVars: 2,
  hostBindings: function PagerInfoComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-pager-info", ctx.classes);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 5,
  template: function PagerInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtext(0);
    }
    if (rf & 2) {
      ɵɵtextInterpolate5("", ctx.currentPageText, " - ", ctx.maxItems, " ", ctx.textFor("of"), " ", ctx.total, " ", ctx.textFor("items"), "");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerInfoComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-info",
      template: `{{currentPageText}} - {{maxItems}} {{textFor('of')}} {{total}} {{textFor('items')}}`,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PagerContextService
    }];
  }, {
    classes: [{
      type: HostBinding,
      args: ["class.k-pager-info"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-pager",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372430,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var RESPONSIVE_BREAKPOINT_MEDIUM = 600;
var RESPONSIVE_BREAKPOINT_LARGE = 768;
var PagerComponent = class {
  constructor(pagerContext, element, localization, renderer, ngZone, navigationService) {
    this.pagerContext = pagerContext;
    this.element = element;
    this.localization = localization;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.navigationService = navigationService;
    this.total = 0;
    this.skip = 0;
    this.buttonCount = 10;
    this.info = true;
    this.type = "numeric";
    this.previousNext = true;
    this.pageChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.pagerClass = true;
    this.widgetRole = "application";
    this.roleDescription = "pager";
    this.keyShortcuts = "Enter ArrowRight ArrowLeft";
    this.hostTabindex = "0";
    this.subscriptions = new Subscription();
    this._templateContext = {};
    this._pageSizeValues = DEFAULT_PAGE_SIZE_VALUES;
    this.isInnerNavigationEnabled = false;
    this._navigable = false;
    this._size = DEFAULT_SIZE;
    this.resizeHandler = () => {
      if (this.template?.first) {
        return;
      }
      const width = this.element.nativeElement.offsetWidth;
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.numericButtons) {
            const selectElement = this.numericButtons.selectElement.nativeElement;
            const numbersElement = this.numericButtons.numbersElement.nativeElement;
            this.renderer.removeStyle(numbersElement, "display");
            this.renderer.setStyle(selectElement, "display", "none");
            this.renderer.addClass(selectElement, "k-hidden");
            if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
              this.renderer.removeStyle(selectElement, "display");
              this.renderer.removeClass(selectElement, "k-hidden");
              this.renderer.setStyle(numbersElement, "display", "none");
            } else {
              this.renderer.addClass(selectElement, "k-hidden");
            }
          }
          if (this.pagerInfo) {
            this.renderer.removeStyle(this.pagerInfo.nativeElement, "display");
            if (width < RESPONSIVE_BREAKPOINT_LARGE) {
              this.renderer.setStyle(this.pagerInfo.nativeElement, "display", "none");
            }
          }
          if (this.pagerPageSizes) {
            this.renderer.removeStyle(this.pagerPageSizes.nativeElement, "display");
            if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
              this.renderer.setStyle(this.pagerPageSizes.nativeElement, "display", "none");
            }
          }
        });
      });
    };
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
  }
  /**
   * Shows a dropdown for selecting the page size.
   * When set to `true`, the dropdown will contain the default list of options - 5, 10, 20.
   * To customize the list of options, set `pageSizeValues` to an array of the desired values.
   * The array can contain numbers and [PageSizeItem]({% slug api_pager_pagesizeitem %}) objects.
   */
  set pageSizeValues(pageSizeValues) {
    this._pageSizeValues = Array.isArray(pageSizeValues) ? pageSizeValues : pageSizeValues ? DEFAULT_PAGE_SIZE_VALUES : false;
  }
  get pageSizeValues() {
    return this._pageSizeValues;
  }
  /**
   * If set to `true`, the user can use dedicated shortcuts to interact with the Pager ([see example]({% slug keyboard_navigation_pager %})).
   * By default, navigation is disabled and the Pager content is accessible in the normal tab sequence.
   * @default false
   */
  set navigable(value) {
    this._navigable = value;
    this.navigationService.isNavigable = value;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Specifies the padding of all Pager elements.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    const isInnerNavigationEnabled = ev.target !== this.element.nativeElement;
    this.navigationService.toggleInnerNavigation(isInnerNavigationEnabled);
  }
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  get templateContext() {
    const context = this._templateContext;
    context.totalPages = this.totalPages;
    context.total = this.total;
    context.skip = this.skip;
    context.pageSize = this.pageSize;
    context.currentPage = this.currentPage;
    return context;
  }
  ngOnInit() {
    this.subscriptions.add(this.pagerContext.pageChange.subscribe(this.changePage.bind(this)));
    this.subscriptions.add(this.pagerContext.pageSizeChange.subscribe(this.changePageSize.bind(this)));
    this.subscriptions.add(this.resizeSensor.resize.subscribe(() => this.resizeHandler()));
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
    if (this.navigable) {
      const wrapper = this.element.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        this.subscriptions.add(this.renderer.listen(wrapper, "keydown", this.keyDownHandler.bind(this)));
      });
    }
  }
  ngAfterViewInit() {
    this.resizeHandler();
    this.renderer.setAttribute(this.element.nativeElement, "aria-label", this.ariaLabel);
    this.subscriptions.add(this.template.changes.subscribe(() => {
      this.resizeHandler();
    }));
    this.handleClasses(this.size, "size");
  }
  ngOnChanges(changes) {
    if (anyChanged(["pageSize", "skip", "total"], changes, false)) {
      this.pagerContext.notifyChanges({
        pageSize: this.pageSize,
        skip: this.skip,
        total: this.total
      });
      this.renderer.setAttribute(this.element.nativeElement, "aria-label", this.ariaLabel);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  changePage(event) {
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  changePageSize(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      if (event.newPageSize === "all") {
        this.pageChange.emit({
          skip: 0,
          take: this.total
        });
      } else {
        this.pageChange.emit({
          skip: 0,
          take: event.newPageSize
        });
      }
    }
  }
  /**
   * @hidden
   */
  onPageSizeChange(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      this.pageChange.emit({
        skip: this.skip,
        take: event.newPageSize
      });
    }
  }
  textFor(value) {
    return this.localization.get(value);
  }
  get ariaLabel() {
    return `${this.textFor("page")} ${this.currentPage} ${this.textFor("of")} ${this.totalPages}`;
  }
  keyDownHandler(e) {
    const target = e.target;
    const wrapper = this.element.nativeElement;
    const isArrowLeftOrPageUp = e.keyCode === Keys.ArrowLeft || e.keyCode === Keys.PageUp;
    const isArrowRightOrPageDown = e.keyCode === Keys.ArrowRight || e.keyCode === Keys.PageDown;
    const isEnter = e.keyCode === Keys.Enter;
    const isHome = e.keyCode === Keys.Home;
    const isEnd = e.keyCode === Keys.End;
    const isEsc = e.keyCode === Keys.Escape;
    const isTab = e.keyCode === Keys.Tab;
    const isFirstPage = this.currentPage === 1;
    const isLastPage = this.currentPage === this.totalPages;
    this.ngZone.run(() => {
      if (isHome) {
        e.preventDefault();
        !isFirstPage && this.pagerContext.changePage(0);
      } else if (isEnd) {
        e.preventDefault();
        !isLastPage && this.pagerContext.changePage(this.totalPages - 1);
      } else if (this.isInnerNavigationEnabled) {
        if (isEsc) {
          this.navigationService.toggleInnerNavigation(false);
          wrapper.focus();
        } else if (isTab) {
          this.navigationService.keepFocusWithinComponent(wrapper, target, e);
        }
      } else {
        if (isArrowLeftOrPageUp) {
          e.preventDefault();
          !isFirstPage && this.pagerContext.prevPage();
        } else if (isArrowRightOrPageDown) {
          e.preventDefault();
          !isLastPage && this.pagerContext.nextPage();
        } else if (isEnter) {
          if (e.target !== wrapper) {
            return;
          }
          e.preventDefault();
          const [firstFocusable] = this.navigationService.getFirstAndLastFocusable(wrapper);
          this.navigationService.toggleInnerNavigation(true);
          firstFocusable?.focus();
        }
      }
    });
  }
  innerNavigationChange(value) {
    this.isInnerNavigationEnabled = value;
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("pager", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
};
PagerComponent.ɵfac = function PagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerComponent)(ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PagerNavigationService));
};
PagerComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerComponent,
  selectors: [["kendo-datapager"]],
  contentQueries: function PagerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PagerTemplateDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t);
    }
  },
  viewQuery: function PagerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ResizeSensorComponent, 7);
      ɵɵviewQuery(PagerInfoComponent, 5, ElementRef);
      ɵɵviewQuery(PagerPageSizesComponent, 5, ElementRef);
      ɵɵviewQuery(PagerNumericButtonsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerInfo = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerPageSizes = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericButtons = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function PagerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function PagerComponent_focusin_HostBindingHandler($event) {
        return ctx.focusHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.widgetRole)("aria-roledescription", ctx.roleDescription)("aria-keyshortcuts", ctx.keyShortcuts)("tabindex", ctx.hostTabindex)("dir", ctx.dir);
      ɵɵclassProp("k-pager", ctx.pagerClass);
    }
  },
  inputs: {
    total: "total",
    skip: "skip",
    pageSize: "pageSize",
    buttonCount: "buttonCount",
    info: "info",
    type: "type",
    pageSizeValues: "pageSizeValues",
    previousNext: "previousNext",
    navigable: "navigable",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange",
    pageSizeChange: "pageSizeChange"
  },
  exportAs: ["kendoDataPager"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, PagerContextService, PagerNavigationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.pager"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 2,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_0 = goog.getMsg("Go to the first page");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.pager.firstPage|The label for the first page button in the Pager:Go to the first page`;
    }
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_1 = goog.getMsg("Go to the previous page");
      i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.pager.previousPage|The label for the previous page button in the Pager:Go to the previous page`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_2 = goog.getMsg("Go to the next page");
      i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.pager.nextPage|The label for the next page button in the Pager:Go to the next page`;
    }
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_3 = goog.getMsg("Go to the last page");
      i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.pager.lastPage|The label for the last page button in the Pager:Go to the last page`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_4 = goog.getMsg("Page");
      i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.pager.page|The label before the current page number in the Pager:Page`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_5 = goog.getMsg("of");
      i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_5;
    } else {
      i18n_5 = $localize`:kendo.pager.of|The label before the total pages number in the Pager:of`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_6 = goog.getMsg("Page Number");
      i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_6;
    } else {
      i18n_6 = $localize`:kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager:Page Number`;
    }
    let i18n_7;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7 = goog.getMsg("items");
      i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7;
    } else {
      i18n_7 = $localize`:kendo.pager.items|The label after the total pages number in the Pager:items`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_8 = goog.getMsg("items per page");
      i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_8;
    } else {
      i18n_8 = $localize`:kendo.pager.itemsPerPage|The label for the page size chooser in the Pager:items per page`;
    }
    let i18n_9;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9 = goog.getMsg("Select page");
      i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9;
    } else {
      i18n_9 = $localize`:kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager:Select page`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_10 = goog.getMsg("Type a page number");
      i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_10;
    } else {
      i18n_10 = $localize`:kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number.:Type a page number`;
    }
    return [["kendoDataPagerLocalizedMessages", "", "firstPage", i18n_0, "previousPage", i18n_1, "nextPage", i18n_2, "lastPage", i18n_3, "page", i18n_4, "of", i18n_5, "pageNumberInputTitle", i18n_6, "items", i18n_7, "itemsPerPage", i18n_8, "selectPage", i18n_9, "inputLabel", i18n_10], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-pager-numbers-wrap"], [3, "size", 4, "ngIf"], [3, "size", "buttonCount", 4, "ngIf"], [3, "size", "pageSizes", 4, "ngIf"], [3, "size"], [3, "size", "buttonCount"], [3, "size", "pageSizes"]];
  },
  template: function PagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵtemplate(1, PagerComponent_ng_container_1_Template, 1, 2, "ng-container", 1)(2, PagerComponent_ng_container_2_Template, 8, 6, "ng-container", 2);
      ɵɵelement(3, "kendo-resize-sensor");
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.template.first == null ? null : ctx.template.first.templateRef);
      ɵɵadvance();
      ɵɵproperty("ngIf", !(ctx.template == null ? null : ctx.template.first == null ? null : ctx.template.first.templateRef));
    }
  },
  dependencies: [LocalizedMessagesDirective, NgIf, NgTemplateOutlet, PagerPrevButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerNextButtonsComponent, PagerPageSizesComponent, PagerInfoComponent, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-datapager",
      exportAs: "kendoDataPager",
      providers: [LocalizationService, PagerContextService, PagerNavigationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.pager"
      }],
      template: `
        <ng-container kendoDataPagerLocalizedMessages
            i18n-firstPage="kendo.pager.firstPage|The label for the first page button in the Pager"
            firstPage="Go to the first page"

            i18n-previousPage="kendo.pager.previousPage|The label for the previous page button in the Pager"
            previousPage="Go to the previous page"

            i18n-nextPage="kendo.pager.nextPage|The label for the next page button in the Pager"
            nextPage="Go to the next page"

            i18n-lastPage="kendo.pager.lastPage|The label for the last page button in the Pager"
            lastPage="Go to the last page"

            i18n-page="kendo.pager.page|The label before the current page number in the Pager"
            page="Page"

            i18n-of="kendo.pager.of|The label before the total pages number in the Pager"
            of="of"

            i18n-pageNumberInputTitle="kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager"
            pageNumberInputTitle="Page Number"

            i18n-items="kendo.pager.items|The label after the total pages number in the Pager"
            items="items"

            i18n-itemsPerPage="kendo.pager.itemsPerPage|The label for the page size chooser in the Pager"
            itemsPerPage="items per page"

            i18n-selectPage="kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager"
            selectPage="Select page"

            i18n-inputLabel="kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number."
            inputLabel="Type a page number"
         >
        </ng-container>
        <ng-container
            *ngIf="template.first?.templateRef"
            [ngTemplateOutlet]="template.first?.templateRef"
            [ngTemplateOutletContext]="templateContext">
        </ng-container>
        <ng-container *ngIf="!template?.first?.templateRef">
            <div class="k-pager-numbers-wrap">
                <kendo-datapager-prev-buttons [size]="size" *ngIf="previousNext"></kendo-datapager-prev-buttons>
                <kendo-datapager-numeric-buttons
                    [size]="size"
                    *ngIf="type === 'numeric' && buttonCount > 0"
                    [buttonCount]="buttonCount">
                </kendo-datapager-numeric-buttons>
                <kendo-datapager-input [size]="size" *ngIf="type === 'input'"></kendo-datapager-input>
                <kendo-datapager-next-buttons [size]="size" *ngIf="previousNext"></kendo-datapager-next-buttons>
            </div>
            <kendo-datapager-page-sizes *ngIf="pageSizeValues"
                [size]="size"
                [pageSizes]="pageSizeValues">
            </kendo-datapager-page-sizes>
            <kendo-datapager-info *ngIf='info'>
            </kendo-datapager-info>
        </ng-container>
        <kendo-resize-sensor></kendo-resize-sensor>
  `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgIf, NgTemplateOutlet, PagerPrevButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerNextButtonsComponent, PagerPageSizesComponent, PagerInfoComponent, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: PagerContextService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: PagerNavigationService
    }];
  }, {
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }],
    pagerInfo: [{
      type: ViewChild,
      args: [PagerInfoComponent, {
        read: ElementRef
      }]
    }],
    pagerPageSizes: [{
      type: ViewChild,
      args: [PagerPageSizesComponent, {
        read: ElementRef
      }]
    }],
    numericButtons: [{
      type: ViewChild,
      args: [PagerNumericButtonsComponent]
    }],
    template: [{
      type: ContentChildren,
      args: [PagerTemplateDirective]
    }],
    total: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    buttonCount: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    pageSizeValues: [{
      type: Input
    }],
    previousNext: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }],
    pagerClass: [{
      type: HostBinding,
      args: ["class.k-pager"]
    }],
    widgetRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    roleDescription: [{
      type: HostBinding,
      args: ["attr.aria-roledescription"]
    }],
    keyShortcuts: [{
      type: HostBinding,
      args: ["attr.aria-keyshortcuts"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }]
  });
})();
var KENDO_PAGER = [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent];
var PagerModule = class {
};
PagerModule.ɵfac = function PagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerModule)();
};
PagerModule.ɵmod = ɵɵdefineNgModule({
  type: PagerModule,
  imports: [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent],
  exports: [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent]
});
PagerModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [CustomMessagesComponent, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_PAGER],
      imports: [...KENDO_PAGER],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-listview/fesm2020/progress-kendo-angular-listview.mjs
var _c02 = ["contentContainer"];
var _c12 = (a0) => ({
  scroll: a0
});
var _c22 = () => ({
  pagerClass: "k-listview-pager k-listview-pager-top"
});
var _c32 = () => ({
  pagerClass: "k-listview-pager"
});
function ListViewComponent_0_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_0_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pagerTemplate_r1 = ɵɵreference(11);
    ɵɵproperty("ngTemplateOutlet", pagerTemplate_r1)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c22));
  }
}
function ListViewComponent_div_1_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, ListViewComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ListViewComponent_div_4_1_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_div_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_div_4_1_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.editTemplate == null ? null : ctx_r1.editTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.editTemplateContext(-1));
  }
}
function ListViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, ListViewComponent_div_4_1_Template, 1, 2, null, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("index", -1)("ngClass", ctx_r1.itemClass)("ngStyle", ctx_r1.itemStyle);
    ɵɵattribute("role", ctx_r1.listItemRole)("data-kendo-listview-item-index", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.editTemplate);
  }
}
function ListViewComponent_div_5_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, ListViewComponent_div_5_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("index", index_r3)("ngClass", ctx_r1.itemClass)("ngStyle", ctx_r1.itemStyle);
    ɵɵattribute("role", ctx_r1.listItemRole)("aria-posinset", ctx_r1.itemPosInSet(index_r3))("aria-setsize", ctx_r1.total)("data-kendo-listview-item-index", index_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.isEdited(index_r3) ? ctx_r1.editTemplate == null ? null : ctx_r1.editTemplate.templateRef : ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.isEdited(index_r3) ? ctx_r1.editTemplateContext(index_r3) : ctx_r1.templateContext(index_r3));
  }
}
function ListViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "span", 14);
    ɵɵtext(2, "Loading");
    ɵɵelementEnd();
    ɵɵelement(3, "div", 15)(4, "div", 16);
    ɵɵelementEnd();
  }
}
function ListViewComponent_7_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_7_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate.templateRef);
  }
}
function ListViewComponent_div_8_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, ListViewComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function ListViewComponent_9_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_9_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pagerTemplate_r1 = ɵɵreference(11);
    ɵɵproperty("ngTemplateOutlet", pagerTemplate_r1)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c32));
  }
}
function ListViewComponent_ng_template_10_kendo_datapager_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-datapager", 19);
    ɵɵlistener("pageChange", function ListViewComponent_ng_template_10_kendo_datapager_0_Template_kendo_datapager_pageChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handlePageChange($event));
    })("pageSizeChange", function ListViewComponent_ng_template_10_kendo_datapager_0_Template_kendo_datapager_pageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.pageSizeChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pagerClass_r5 = ɵɵnextContext().pagerClass;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(pagerClass_r5);
    ɵɵproperty("total", ctx_r1.total)("pageSize", ctx_r1.pageSize)("skip", ctx_r1.skip)("buttonCount", ctx_r1.pagerSettings.buttonCount)("info", ctx_r1.pagerSettings.info)("previousNext", ctx_r1.pagerSettings.previousNext)("type", ctx_r1.pagerSettings.type)("pageSizeValues", ctx_r1.pagerSettings.pageSizeValues);
  }
}
function ListViewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_ng_template_10_kendo_datapager_0_Template, 1, 10, "kendo-datapager", 18);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.pageable);
  }
}
var _c42 = ["kendoListViewEditCommand", ""];
var _c52 = ["*"];
function EditCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function EditCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function EditCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c62 = ["kendoListViewAddCommand", ""];
function AddCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function AddCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function AddCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c7 = ["kendoListViewSaveCommand", ""];
function SaveCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function SaveCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function SaveCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c8 = ["kendoListViewCancelCommand", ""];
function CancelCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function CancelCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function CancelCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c9 = ["kendoListViewRemoveCommand", ""];
function RemoveCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function RemoveCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function RemoveCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var packageMetadata2 = {
  name: "@progress/kendo-angular-listview",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372460,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var LISTVIEW_ITEM_SELECTOR = ".k-listview-item";
var isPresent = (item) => item !== null && item !== void 0;
var match = (element, selector) => {
  const matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  if (!isPresent(matcher)) {
    return false;
  }
  return matcher.call(element, selector);
};
var isListViewItem = (element) => {
  if (!isPresent(element)) {
    return false;
  }
  return match(element, LISTVIEW_ITEM_SELECTOR);
};
var getListItemIndex = (item) => {
  if (!isPresent(item)) {
    return null;
  }
  return Number(item.getAttribute("data-kendo-listview-item-index"));
};
var relatedTarget = (event) => {
  if (!isPresent(event.relatedTarget) || !isDocumentAvailable()) {
    return null;
  }
  return event.relatedTarget || document.activeElement;
};
var fitIntoRange = (contender, min, max) => {
  if (!isPresent(contender) || contender <= min) {
    return min;
  } else if (contender >= max) {
    return max;
  } else {
    return contender;
  }
};
var closestWithMatch = (element, selector) => {
  let parent2 = element;
  while (parent2 !== null && parent2.nodeType === 1) {
    if (match(parent2, selector)) {
      return parent2;
    }
    parent2 = parent2.parentElement || parent2.parentNode;
  }
  return null;
};
var getClosestListItemIndex = (element) => {
  if (!isPresent(element)) {
    return null;
  }
  const closestListViewItem = closestWithMatch(element, LISTVIEW_ITEM_SELECTOR);
  return getListItemIndex(closestListViewItem);
};
var NavigationService = class {
  constructor() {
    this.changes = new Subject();
    this.isFocused = false;
    this.activeIndex = null;
  }
  /**
   * Sets or gets if the navigation is enabled.
   * When no activeIndex is present, the navigation is inferred as disabled.
   * Toggling the service availability clears the current active index or activates the first one.
   */
  get isEnabled() {
    return isPresent(this.activeIndex);
  }
  set isEnabled(enabled) {
    if (enabled) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = null;
    }
    this.changes.next();
  }
  /**
   * Shows if the checked index should be the current available focus target (tabindex="0").
   */
  isActive(index) {
    return index === this.activeIndex;
  }
  handleKeyDown(event, totalItemsCount) {
    const {
      keyCode
    } = event;
    switch (keyCode) {
      case Keys.ArrowLeft:
      case Keys.ArrowUp:
        this.navigateToPrevious();
        break;
      case Keys.ArrowRight:
      case Keys.ArrowDown:
        this.navigateToNext(totalItemsCount);
        break;
      case Keys.Home: {
        const firstIndex = 0;
        this.navigateTo(firstIndex);
        break;
      }
      case Keys.End: {
        const lastIndex = totalItemsCount - 1;
        this.navigateTo(lastIndex);
        break;
      }
      default:
        return;
    }
    event.preventDefault();
  }
  handleFocusIn(event) {
    const target = event.target;
    if (!isListViewItem(target)) {
      const listViewItemSelector = ".k-listview-item";
      const closestListViewItem = closestWithMatch(target, listViewItemSelector);
      const isListViewItemChild = isPresent(closestListViewItem);
      if (isListViewItemChild) {
        const itemIndex = getListItemIndex(closestListViewItem);
        this.setActiveIndex(itemIndex);
      }
      return;
    }
    const targetIndex = getListItemIndex(target);
    if (this.isFocused && targetIndex === this.activeIndex) {
      return;
    }
    this.activeIndex = targetIndex;
    this.isFocused = true;
    this.changes.next();
  }
  handleFocusOut(event) {
    if (!isListViewItem(event.target) || isListViewItem(relatedTarget(event))) {
      return;
    }
    this.isFocused = false;
    this.changes.next();
  }
  /**
   * Sets the `activeIndex` and triggers changes without focusing the corresponding ListView item.
   */
  setActiveIndex(index) {
    if (!this.isEnabled) {
      return;
    }
    if (index === this.activeIndex) {
      return;
    }
    this.activeIndex = index;
    this.changes.next();
  }
  /**
   * Focuses item at the targeted index. If no index is passed, the current `activeIndex` is used.
   * The passed target index is normalized to fit the min/max available indices bounds.
   */
  focusIndex(index, totalItemsCount) {
    if (!this.isEnabled) {
      return;
    }
    const parsed = parseInt(index, 10);
    const firstIndex = 0;
    const lastIndex = totalItemsCount - 1;
    const targetIndex = isNaN(parsed) ? this.activeIndex : fitIntoRange(parsed, firstIndex, lastIndex);
    this.navigateTo(targetIndex);
  }
  navigateTo(index) {
    if (this.isFocused && this.activeIndex === index) {
      return;
    }
    this.isFocused = true;
    this.activeIndex = index;
    this.changes.next();
  }
  navigateToPrevious() {
    const previousIndex = Math.max(this.activeIndex - 1, 0);
    this.navigateTo(previousIndex);
  }
  navigateToNext(totalItemsCount) {
    const lastAvailableIndex = totalItemsCount - 1;
    const nextIndex = Math.min(this.activeIndex + 1, lastAvailableIndex);
    this.navigateTo(nextIndex);
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)();
};
NavigationService.ɵprov = ɵɵdefineInjectable({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], null, null);
})();
var ListViewNavigableItemDirective = class {
  constructor(hostElement, renderer, navigationService) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.navigationService = navigationService;
  }
  ngOnChanges() {
    this.updateNavigationState();
  }
  ngOnInit() {
    this.navigationSubscription = this.navigationService.changes.subscribe(this.updateNavigationState.bind(this));
  }
  ngOnDestroy() {
    if (isPresent(this.navigationSubscription)) {
      this.navigationSubscription.unsubscribe();
    }
  }
  updateNavigationState() {
    this.updateTabIndex();
    this.updateFocusedState();
  }
  updateFocusedState() {
    const shouldFocus = this.navigationService.isActive(this.index) && this.navigationService.isFocused;
    const focusedCssClass = "k-focus";
    if (shouldFocus) {
      this.renderer.addClass(this.hostElement.nativeElement, focusedCssClass);
      this.hostElement.nativeElement.focus();
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, focusedCssClass);
    }
  }
  updateTabIndex() {
    if (!this.navigationService.isEnabled) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    } else if (this.navigationService.isActive(this.index)) {
      this.renderer.setAttribute(this.hostElement.nativeElement, "tabindex", "0");
    } else {
      this.renderer.setAttribute(this.hostElement.nativeElement, "tabindex", "-1");
    }
  }
};
ListViewNavigableItemDirective.ɵfac = function ListViewNavigableItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListViewNavigableItemDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NavigationService));
};
ListViewNavigableItemDirective.ɵdir = ɵɵdefineDirective({
  type: ListViewNavigableItemDirective,
  selectors: [["", "kendoListViewNavigableItem", ""]],
  inputs: {
    index: "index"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewNavigableItemDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewNavigableItem]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NavigationService
    }];
  }, {
    index: [{
      type: Input
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
  selectors: [["", "kendoListViewItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewItemTemplate]",
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
  selectors: [["", "kendoListViewHeaderTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewHeaderTemplate]",
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
  selectors: [["", "kendoListViewFooterTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewFooterTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var LoaderTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
LoaderTemplateDirective.ɵfac = function LoaderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
LoaderTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: LoaderTemplateDirective,
  selectors: [["", "kendoListViewLoaderTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewLoaderTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var EditTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
EditTemplateDirective.ɵfac = function EditTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EditTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
EditTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: EditTemplateDirective,
  selectors: [["", "kendoListViewEditTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewEditTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var isEqual = (index) => (item) => item.index === index;
var isNotEqual = (index) => (item) => item.index !== index;
var isNewItem = (index) => index === -1 || index === void 0;
var EditService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.changes = new EventEmitter();
    this.editedIndices = [];
    this.changedSource = new Subject();
    this.changed = this.changedSource.asObservable().pipe(switchMap(() => this.ngZone.onStable.asObservable().pipe(take(1))));
  }
  editItem(index, group = void 0) {
    this.editedIndices.push({
      index,
      group
    });
    this.onChanged();
  }
  addItem(group) {
    this.newItem = {
      group
    };
    this.onChanged();
  }
  isEditing() {
    return this.editedIndices.length > 0;
  }
  get hasNewItem() {
    return isPresent(this.newItem);
  }
  get newDataItem() {
    if (this.hasNewItem) {
      return this.newItem.group.value;
    }
    return {};
  }
  get newItemGroup() {
    if (this.hasNewItem) {
      return this.newItem.group;
    }
    return new FormGroup({});
  }
  editGroup(index) {
    return this.context(index).group;
  }
  close(index) {
    if (isNewItem(index)) {
      this.newItem = void 0;
      return;
    }
    this.editedIndices = this.editedIndices.filter(isNotEqual(index));
    this.onChanged();
  }
  context(index) {
    if (isNewItem(index)) {
      return this.newItem;
    }
    return this.findByIndex(index);
  }
  isEdited(index) {
    if (isNewItem(index) && isPresent(this.newItem)) {
      return true;
    }
    return isPresent(this.findByIndex(index));
  }
  hasEdited(index) {
    return isPresent(this.context(index));
  }
  beginEdit(itemIndex) {
    this.changes.emit({
      action: "edit",
      itemIndex
    });
  }
  beginAdd() {
    this.changes.emit({
      action: "add"
    });
  }
  endEdit(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: "cancel",
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  save(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: "save",
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  remove(itemIndex) {
    this.changes.emit({
      action: "remove",
      itemIndex
    });
  }
  findByIndex(index) {
    return this.editedIndices.find(isEqual(index));
  }
  onChanged() {
    this.ngZone.runOutsideAngular(() => {
      this.changedSource.next();
    });
  }
};
EditService.ɵfac = function EditService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EditService)(ɵɵinject(NgZone));
};
EditService.ɵprov = ɵɵdefineInjectable({
  token: EditService,
  factory: EditService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var DEFAULT_PAGER_SETTINGS = {
  position: "bottom",
  buttonCount: 5,
  info: true,
  previousNext: true,
  type: "numeric",
  pageSizeValues: [5, 10, 20]
};
var createControl = (source) => (acc, key) => {
  acc[key] = new FormControl(source[key]);
  return acc;
};
var ListViewComponent = class {
  constructor(ngZone, element, renderer, changeDetectorRef, editService, navigationService) {
    this.ngZone = ngZone;
    this.element = element;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.editService = editService;
    this.navigationService = navigationService;
    this.className = true;
    this.bordered = true;
    this.loading = false;
    this.containerRole = "list";
    this.listItemRole = "listitem";
    this.scrollBottom = new EventEmitter();
    this.pageChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.edit = new EventEmitter();
    this.cancel = new EventEmitter();
    this.save = new EventEmitter();
    this.remove = new EventEmitter();
    this.add = new EventEmitter();
    this._skip = 0;
    this._navigable = false;
    validatePackage(packageMetadata2);
    this.attachEditHandlers();
  }
  /**
   * Specifies whether the keyboard navigation is enabled
   * ([see example]({% slug keyboard_navigation_listview %})).
   * By default, the navigation is disabled.
   */
  set navigable(navigable) {
    if (!navigable && isPresent(this.removeNavigationListeners)) {
      this.removeNavigationListeners();
      this.removeNavigationListeners = null;
      this.navigationService.isEnabled = false;
    } else if (navigable && !isPresent(this.removeNavigationListeners)) {
      this.addNavigationListeners();
      this.navigationService.isEnabled = true;
    }
    this._navigable = navigable;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Defines the number of records to be skipped by the pager
   * ([more details]({% slug paging_listview %})).
   */
  set skip(skip) {
    const parsed = parseInt(skip, 10);
    const defaultSkipValue = 0;
    this._skip = !isNaN(parsed) ? parsed : defaultSkipValue;
  }
  get skip() {
    return this._skip;
  }
  /**
   * Configures whether the ListView will render a pager
   * ([more details]({% slug paging_listview %})).
   * Providing a boolean value will render a pager with the default settings.
   */
  set pageable(pageable) {
    this._pageable = pageable;
    this.pagerSettings = pageable ? Object.assign({}, DEFAULT_PAGER_SETTINGS, pageable) : null;
  }
  get pageable() {
    return this._pageable;
  }
  /**
   * @hidden
   *
   * Gets the data items passed to the ListView.
   * If a ListViewDataResult is passed, the data value is used. If an array is passed - it's directly used.
   */
  get items() {
    if (!isPresent(this.data)) {
      return [];
    }
    return Array.isArray(this.data) ? this.data : this.data.data;
  }
  /**
   * @hidden
   *
   * Gets the total number of records passed to the ListView.
   * If a ListViewDataResult is passed, the total value is used. If an array is passed - its length is used.
   */
  get total() {
    if (!this.pageable) {
      return;
    }
    if (!isPresent(this.data)) {
      return 0;
    }
    return Array.isArray(this.data) ? this.data.length : this.data.total;
  }
  /**
   * @hidden
   */
  get containerTabindex() {
    return this.navigable ? -1 : null;
  }
  /**
   * Gets the current active item index
   * ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)).
   * Returns `null` when the keyboard navigation is disabled.
   */
  get activeIndex() {
    return this.navigationService.activeIndex;
  }
  ngOnChanges(changes) {
    if (isChanged("height", changes, false)) {
      this.renderer.setStyle(this.element.nativeElement, "height", `${this.height}px`);
    }
  }
  ngOnDestroy() {
    if (isPresent(this.editServiceSubscription)) {
      this.editServiceSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  templateContext(index) {
    return {
      "$implicit": this.items[index],
      "isLast": index === this.items.length - 1,
      "isFirst": index === 0,
      "dataItem": this.items[index],
      "index": index
    };
  }
  /**
   * @hidden
   */
  editTemplateContext(index) {
    const isNew = index === -1;
    const group = isNew ? this.editService.newItemGroup : this.editService.editGroup(index);
    return {
      "$implicit": group,
      "formGroup": group,
      "dataItem": isNew ? this.editService.newDataItem : this.items[index],
      "isNew": isNew,
      "index": index
    };
  }
  /**
   * Focuses the item at the specified index ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)):
   * - If no index is specified, the current active index will be focused.
   * - If the passed value is below `0`, the first item receives focus.
   * - If the passed value is above the last available index, the last item receives focus.
   *
   * > The index param is based on the logical structure of the ListView and does not correspond to the data item index -
   * > i.e. the index `0` corresponds to the first rendered list item. Paging is not taken into account.
   * > Also, for the focusing to work, the `navigable` prop must first be set to `true`.
   */
  focus(index) {
    const totalRenderedItems = this.listViewItems.length;
    this.navigationService.focusIndex(index, totalRenderedItems);
  }
  /**
   * Creates a new item editor ([see example]({% slug editing_template_forms_listview %}#toc-adding-records)).
   *
   * @param {FormGroup} group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi']) that describes
   * the edit form. If called with a data item, it will build the `FormGroup` from the data item fields.
   */
  addItem(group) {
    const isFormGroup = group instanceof FormGroup;
    if (!isFormGroup) {
      const fields = Object.keys(group).reduce(createControl(group), {});
      group = new FormGroup(fields);
    }
    this.editService.addItem(group);
  }
  /**
   * Switches the specified item to edit mode ([see example]({% slug editing_template_forms_listview %}#toc-editing-records)).
   *
   * @param index - The item index that will be switched to edit mode.
   * @param group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi'])
   * that describes the edit form.
   */
  editItem(index, group) {
    this.editService.editItem(index, group);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * Closes the editor for a given item ([see example]({% slug editing_template_forms_listview %}#toc-cancelling-editing)).
   *
   * @param {number} index - The item index that will be switched out of the edit mode. If no index is provided, it is assumed
   * that the new item editor will be closed.
   */
  closeItem(index) {
    this.editService.close(index);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * @hidden
   */
  isEdited(index) {
    return this.editService.isEdited(index);
  }
  /**
   * @hidden
   */
  handlePageChange(event) {
    this.scrollToContainerTop();
    const firstIndex = 0;
    this.navigationService.setActiveIndex(firstIndex);
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  handleContentScroll() {
    if (!hasObservers(this.scrollBottom)) {
      return;
    }
    const THRESHOLD = 2;
    const {
      scrollHeight,
      scrollTop,
      clientHeight
    } = this.contentContainer.nativeElement;
    const atBottom = scrollHeight - clientHeight - scrollTop <= THRESHOLD;
    if (atBottom) {
      this.ngZone.run(() => {
        const event = {
          sender: this
        };
        this.scrollBottom.emit(event);
      });
    }
  }
  /**
   * @hidden
   */
  itemPosInSet(index) {
    if (!this.pageable) {
      return;
    }
    return this.skip + index + 1;
  }
  scrollToContainerTop() {
    const container = this.contentContainer.nativeElement;
    container.scrollTop = 0;
    container.scrollLeft = 0;
  }
  addNavigationListeners() {
    this.ngZone.runOutsideAngular(() => {
      const removeKeydownListener = this.renderer.listen(this.contentContainer.nativeElement, "keydown", (event) => this.navigationService.handleKeyDown(event, this.listViewItems.length));
      const removeFocusInListener = this.renderer.listen(this.contentContainer.nativeElement, "focusin", (event) => this.navigationService.handleFocusIn(event));
      const removeFocusOutListener = this.renderer.listen(this.contentContainer.nativeElement, "focusout", (event) => this.navigationService.handleFocusOut(event));
      this.removeNavigationListeners = () => {
        removeKeydownListener();
        removeFocusInListener();
        removeFocusOutListener();
      };
    });
  }
  attachEditHandlers() {
    if (!isPresent(this.editService)) {
      return;
    }
    this.editServiceSubscription = this.editService.changes.subscribe(this.emitCRUDEvent.bind(this));
  }
  emitCRUDEvent(args) {
    const {
      action,
      itemIndex,
      formGroup
    } = args;
    let dataItem = this.items[itemIndex];
    if (action !== "add" && formGroup) {
      dataItem = formGroup.value;
    }
    Object.assign(args, {
      dataItem,
      sender: this
    });
    this[action].emit(args);
  }
};
ListViewComponent.ɵfac = function ListViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListViewComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(NavigationService));
};
ListViewComponent.ɵcmp = ɵɵdefineComponent({
  type: ListViewComponent,
  selectors: [["kendo-listview"]],
  contentQueries: function ListViewComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, LoaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, EditTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loaderTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
    }
  },
  viewQuery: function ListViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 7);
      ɵɵviewQuery(ListViewNavigableItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewItems = _t);
    }
  },
  hostVars: 6,
  hostBindings: function ListViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-listview", ctx.className)("k-d-flex", ctx.className)("k-listview-bordered", ctx.bordered);
    }
  },
  inputs: {
    bordered: "bordered",
    data: "data",
    loading: "loading",
    containerStyle: "containerStyle",
    itemStyle: "itemStyle",
    containerClass: "containerClass",
    itemClass: "itemClass",
    containerLabel: "containerLabel",
    containerRole: "containerRole",
    listItemRole: "listItemRole",
    navigable: "navigable",
    pageSize: "pageSize",
    skip: "skip",
    pageable: "pageable",
    height: "height"
  },
  outputs: {
    scrollBottom: "scrollBottom",
    pageChange: "pageChange",
    pageSizeChange: "pageSizeChange",
    edit: "edit",
    cancel: "cancel",
    save: "save",
    remove: "remove",
    add: "add"
  },
  exportAs: ["kendoListView"],
  standalone: true,
  features: [ɵɵProvidersFeature([EditService, NavigationService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.listview"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 17,
  consts: [["contentContainer", ""], ["pagerTemplate", ""], [4, "ngIf"], ["class", "k-listview-header", 4, "ngIf"], [1, "k-listview-content", 3, "ngClass", "ngStyle", "kendoEventsOutsideAngular", "scope"], ["class", "k-listview-item", "kendoListViewNavigableItem", "", 3, "index", "ngClass", "ngStyle", 4, "ngIf"], ["class", "k-listview-item", "kendoListViewNavigableItem", "", 3, "index", "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "k-loading-mask", 4, "ngIf"], ["class", "k-listview-footer", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-listview-header"], [3, "ngTemplateOutlet"], ["kendoListViewNavigableItem", "", 1, "k-listview-item", 3, "index", "ngClass", "ngStyle"], [1, "k-loading-mask"], [1, "k-loading-text"], [1, "k-loading-image"], [1, "k-loading-color"], [1, "k-listview-footer"], [3, "class", "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues", "pageChange", "pageSizeChange", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues"]],
  template: function ListViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ListViewComponent_0_Template, 1, 3, null, 2)(1, ListViewComponent_div_1_Template, 2, 1, "div", 3);
      ɵɵelementStart(2, "div", 4, 0);
      ɵɵtemplate(4, ListViewComponent_div_4_Template, 2, 6, "div", 5)(5, ListViewComponent_div_5_Template, 2, 9, "div", 6)(6, ListViewComponent_div_6_Template, 5, 0, "div", 7)(7, ListViewComponent_7_Template, 1, 1, null, 2);
      ɵɵelementEnd();
      ɵɵtemplate(8, ListViewComponent_div_8_Template, 2, 1, "div", 8)(9, ListViewComponent_9_Template, 1, 3, null, 2)(10, ListViewComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", (ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "bottom");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.containerStyle)("kendoEventsOutsideAngular", ɵɵpureFunction1(15, _c12, ctx.handleContentScroll))("scope", ctx);
      ɵɵattribute("tabindex", ctx.containerTabindex)("role", ctx.containerRole)("aria-label", ctx.containerLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.editService.hasNewItem);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.items);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading && !ctx.loaderTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading && ctx.loaderTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.footerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", (ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "top");
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgClass, NgStyle, EventsOutsideAngularDirective, ListViewNavigableItemDirective, NgForOf, PagerComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoListView",
      selector: "kendo-listview",
      providers: [EditService, NavigationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.listview"
      }],
      template: `
        <!-- top pager -->
        <ng-template
            *ngIf="pagerSettings?.position !== 'bottom'"
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager k-listview-pager-top' }"
        >
        </ng-template>

        <!-- header -->
        <div
            *ngIf="headerTemplate"
            class="k-listview-header"
        >
            <ng-template
                [ngTemplateOutlet]="headerTemplate?.templateRef"
            >
            </ng-template>
        </div>

        <!-- content -->
        <div
            #contentContainer
            [attr.tabindex]="containerTabindex"
            class="k-listview-content"
            [ngClass]="containerClass"
            [ngStyle]="containerStyle"
            [kendoEventsOutsideAngular]="{
                scroll: handleContentScroll
            }"
            [scope]="this"
            [attr.role]="containerRole"
            [attr.aria-label]="containerLabel"
        >
            <!-- new item edit template -->
            <div
                *ngIf="editService.hasNewItem"
                class="k-listview-item"
                [attr.role]="listItemRole"
                kendoListViewNavigableItem
                [index]="-1"
                [attr.data-kendo-listview-item-index]="-1"
                [ngClass]="itemClass"
                [ngStyle]="itemStyle"
            >
                <ng-template
                    *ngIf="editTemplate"
                    [ngTemplateOutlet]="editTemplate?.templateRef"
                    [ngTemplateOutletContext]="editTemplateContext(-1)"
                >
                </ng-template>
            </div>

            <!-- items -->
            <div
                *ngFor="let dataItem of items; let index = index; let first = first; let last = last;"
                class="k-listview-item"
                [attr.role]="listItemRole"
                [attr.aria-posinset]="itemPosInSet(index)"
                [attr.aria-setsize]="total"
                kendoListViewNavigableItem
                [index]="index"
                [attr.data-kendo-listview-item-index]="index"
                [ngClass]="itemClass"
                [ngStyle]="itemStyle"
            >
                <ng-template
                    [ngTemplateOutlet]="isEdited(index) ? editTemplate?.templateRef : itemTemplate?.templateRef"
                    [ngTemplateOutletContext]="isEdited(index) ? editTemplateContext(index) : templateContext(index)"
                >
                </ng-template>
            </div>

            <!-- loading indicator -->
            <div
                *ngIf="loading && !loaderTemplate"
                class="k-loading-mask"
            >
                <!-- TODO: the k-loading-text is hidden with css but read by readers - review when implementing accessibility + possible localization case -->
                <span class="k-loading-text">Loading</span>
                <div class="k-loading-image"></div>
                <div class="k-loading-color"></div>
            </div>
            <ng-template
                *ngIf="loading && loaderTemplate"
                [ngTemplateOutlet]="loaderTemplate.templateRef"
            >
            </ng-template>
        </div>

        <!-- footer -->
        <div
            *ngIf="footerTemplate"
            class="k-listview-footer"
        >
            <ng-template
                [ngTemplateOutlet]="footerTemplate?.templateRef"
            >
            </ng-template>
        </div>

        <!-- bottom pager -->
        <ng-template
            *ngIf="pagerSettings?.position !== 'top'"
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager' }"
        >
        </ng-template>

        <!-- pager template -->
        <ng-template #pagerTemplate let-pagerClass="pagerClass">
            <kendo-datapager
                *ngIf="pageable"
                [class]="pagerClass"
                [total]="total"
                [pageSize]="pageSize"
                [skip]="skip"
                [buttonCount]="pagerSettings.buttonCount"
                [info]="pagerSettings.info"
                [previousNext]="pagerSettings.previousNext"
                [type]="pagerSettings.type"
                [pageSizeValues]="pagerSettings.pageSizeValues"
                (pageChange)="handlePageChange($event)"
                (pageSizeChange)="pageSizeChange.emit($event)"
            >
            </kendo-datapager>
        </ng-template>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, NgClass, NgStyle, EventsOutsideAngularDirective, ListViewNavigableItemDirective, NgForOf, PagerComponent]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: EditService
    }, {
      type: NavigationService
    }];
  }, {
    className: [{
      type: HostBinding,
      args: ["class.k-listview"]
    }, {
      type: HostBinding,
      args: ["class.k-d-flex"]
    }],
    itemTemplate: [{
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
    loaderTemplate: [{
      type: ContentChild,
      args: [LoaderTemplateDirective, {
        static: false
      }]
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["contentContainer", {
        static: true
      }]
    }],
    editTemplate: [{
      type: ContentChild,
      args: [EditTemplateDirective, {
        static: false
      }]
    }],
    listViewItems: [{
      type: ViewChildren,
      args: [ListViewNavigableItemDirective]
    }],
    bordered: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-listview-bordered"]
    }],
    data: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    itemStyle: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    itemClass: [{
      type: Input
    }],
    containerLabel: [{
      type: Input
    }],
    containerRole: [{
      type: Input
    }],
    listItemRole: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    pageable: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    scrollBottom: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }],
    edit: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    save: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    add: [{
      type: Output
    }]
  });
})();
var DataBindingDirective = class {
  constructor(listView) {
    this.listView = listView;
    this.subscriptions = new Subscription();
  }
  /**
   * The array of data which will be used to populate the ListView.
   */
  set data(data) {
    this._data = data || [];
    this.updateListViewData();
  }
  get data() {
    return this._data;
  }
  ngOnInit() {
    this.subscriptions.add(this.listView.pageChange.subscribe(this.handlePageChange.bind(this)));
    this.subscriptions.add(this.listView.pageSizeChange.subscribe(this.handlePageSizeChange.bind(this)));
    this.updateListViewData();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handlePageChange(event) {
    this.listView.skip = event.skip;
    this.listView.pageSize = event.take;
    this.updateListViewData();
  }
  handlePageSizeChange(event) {
    this.listView.pageSize = Number(event.newPageSize);
  }
  updateListViewData() {
    const from = this.listView.skip || 0;
    const to = from + (this.listView.pageSize || this.data.length);
    this.listView.data = {
      data: this.data.slice(from, to),
      total: this.data.length
    };
  }
};
DataBindingDirective.ɵfac = function DataBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DataBindingDirective)(ɵɵdirectiveInject(ListViewComponent));
};
DataBindingDirective.ɵdir = ɵɵdefineDirective({
  type: DataBindingDirective,
  selectors: [["", "kendoListViewBinding", ""]],
  inputs: {
    data: [0, "kendoListViewBinding", "data"]
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ListViewComponent
    }];
  }, {
    data: [{
      type: Input,
      args: ["kendoListViewBinding"]
    }]
  });
})();
var PageSizeChangeEvent2 = class extends PageSizeChangeEvent {
};
var EditCommandDirective = class extends ButtonComponent {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.beginEdit(index);
  }
};
EditCommandDirective.ɵfac = function EditCommandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EditCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
EditCommandDirective.ɵcmp = ɵɵdefineComponent({
  type: EditCommandDirective,
  selectors: [["", "kendoListViewEditCommand", ""]],
  hostBindings: function EditCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function EditCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c42,
  ngContentSelectors: _c52,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function EditCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, EditCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, EditCommandDirective_span_1_Template, 2, 1, "span", 1)(2, EditCommandDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewEditCommand]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: EditService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var AddCommandDirective = class extends ButtonComponent {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    this.editService.beginAdd();
  }
};
AddCommandDirective.ɵfac = function AddCommandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AddCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
AddCommandDirective.ɵcmp = ɵɵdefineComponent({
  type: AddCommandDirective,
  selectors: [["", "kendoListViewAddCommand", ""]],
  hostBindings: function AddCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function AddCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c62,
  ngContentSelectors: _c52,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function AddCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AddCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, AddCommandDirective_span_1_Template, 2, 1, "span", 1)(2, AddCommandDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewAddCommand]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: EditService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveCommandDirective = class extends ButtonComponent {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.save(index);
    }
  }
};
SaveCommandDirective.ɵfac = function SaveCommandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SaveCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
SaveCommandDirective.ɵcmp = ɵɵdefineComponent({
  type: SaveCommandDirective,
  selectors: [["", "kendoListViewSaveCommand", ""]],
  hostBindings: function SaveCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SaveCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c7,
  ngContentSelectors: _c52,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function SaveCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SaveCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, SaveCommandDirective_span_1_Template, 2, 1, "span", 1)(2, SaveCommandDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewSaveCommand]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: EditService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelCommandDirective = class extends ButtonComponent {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.endEdit(index);
    }
  }
};
CancelCommandDirective.ɵfac = function CancelCommandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CancelCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
CancelCommandDirective.ɵcmp = ɵɵdefineComponent({
  type: CancelCommandDirective,
  selectors: [["", "kendoListViewCancelCommand", ""]],
  hostBindings: function CancelCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CancelCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c8,
  ngContentSelectors: _c52,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function CancelCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CancelCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, CancelCommandDirective_span_1_Template, 2, 1, "span", 1)(2, CancelCommandDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewCancelCommand]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: EditService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RemoveCommandDirective = class extends ButtonComponent {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.remove(index);
  }
};
RemoveCommandDirective.ɵfac = function RemoveCommandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RemoveCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
RemoveCommandDirective.ɵcmp = ɵɵdefineComponent({
  type: RemoveCommandDirective,
  selectors: [["", "kendoListViewRemoveCommand", ""]],
  hostBindings: function RemoveCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function RemoveCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c9,
  ngContentSelectors: _c52,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function RemoveCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, RemoveCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, RemoveCommandDirective_span_1_Template, 2, 1, "span", 1)(2, RemoveCommandDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewRemoveCommand]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: EditService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var KENDO_LISTVIEW = [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective];
var ListViewModule = class {
};
ListViewModule.ɵfac = function ListViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListViewModule)();
};
ListViewModule.ɵmod = ɵɵdefineNgModule({
  type: ListViewModule,
  imports: [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective],
  exports: [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective]
});
ListViewModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [ListViewComponent, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_LISTVIEW],
      exports: [...KENDO_LISTVIEW],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
export {
  AddCommandDirective,
  CancelCommandDirective,
  DataBindingDirective,
  EditCommandDirective,
  EditTemplateDirective,
  FooterTemplateDirective,
  HeaderTemplateDirective,
  ItemTemplateDirective,
  KENDO_LISTVIEW,
  ListViewComponent,
  ListViewModule,
  LoaderTemplateDirective,
  PageSizeChangeEvent2 as PageSizeChangeEvent,
  RemoveCommandDirective,
  SaveCommandDirective
};
//# sourceMappingURL=@progress_kendo-angular-listview.js.map
