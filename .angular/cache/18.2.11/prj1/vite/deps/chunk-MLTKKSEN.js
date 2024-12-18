import {
  CheckBoxComponent,
  TextBoxComponent,
  TextBoxPrefixTemplateDirective
} from "./chunk-NV2WLC36.js";
import {
  DialogContainerService,
  DialogService,
  WindowContainerService,
  WindowService
} from "./chunk-U5CKWJNL.js";
import {
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  cancelIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  insertBottomIcon,
  insertMiddleIcon,
  insertTopIcon,
  plusIcon,
  searchIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  Draggable,
  Keys,
  ResizeBatchService,
  anyChanged,
  getter,
  guid,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  setter
} from "./chunk-HRNBUZH3.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-GRNNJSKN.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LMGKJMTG.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-JQMZVAPB.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  merge
} from "./chunk-PC7SNX6C.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  Subscription,
  catchError,
  delay,
  filter,
  finalize,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-NXOOB3F7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@progress/kendo-angular-treeview/fesm2020/progress-kendo-angular-treeview.mjs
var _c0 = ["kendoTreeViewGroup", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c2 = (a0) => ({
  index: a0
});
function TreeViewGroupComponent_li_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13);
    ɵɵlistener("click", function TreeViewGroupComponent_li_0_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const node_r3 = ctx_r1.$implicit;
      const index_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.expandNode(ctx_r4.nodeIndex(index_r4), node_r3, !ctx_r4.isExpanded(node_r3, ctx_r4.nodeIndex(index_r4))));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const node_r3 = ctx_r1.$implicit;
    const index_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", !ctx_r4.isItemExpandable(node_r3, index_r4));
    ɵɵproperty("kendoTreeViewLoading", ctx_r4.nodeIndex(index_r4));
    ɵɵadvance();
    ɵɵproperty("name", ctx_r4.getFontIcon(node_r3, ctx_r4.nodeIndex(index_r4)))("svgIcon", ctx_r4.getSvgIcon(node_r3, ctx_r4.nodeIndex(index_r4)));
  }
}
function TreeViewGroupComponent_li_0_kendo_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-checkbox", 15, 0);
    ɵɵlistener("checkedStateChange", function TreeViewGroupComponent_li_0_kendo_checkbox_3_Template_kendo_checkbox_checkedStateChange_0_listener() {
      ɵɵrestoreView(_r6);
      const checkbox_r7 = ɵɵreference(1);
      const index_r4 = ɵɵnextContext().index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.checkNode(ctx_r4.nodeIndex(index_r4), checkbox_r7));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const node_r3 = ctx_r1.$implicit;
    const index_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r4.isItemDisabled(node_r3, index_r4))("size", ctx_r4.size)("checkedState", ctx_r4.getCheckBoxState(node_r3, ctx_r4.nodeIndex(index_r4)))("tabindex", -1)("inputAttributes", ctx_r4.getCheckboxAttributes(index_r4));
  }
}
function TreeViewGroupComponent_li_0_ng_container_7_ng_template_1_Template(rf, ctx) {
}
function TreeViewGroupComponent_li_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeViewGroupComponent_li_0_ng_container_7_ng_template_1_Template, 0, 0, "ng-template", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const node_r3 = ctx_r1.$implicit;
    const index_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.nodeTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, node_r3, ctx_r4.nodeIndex(index_r4)));
  }
}
function TreeViewGroupComponent_li_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.nodeText(node_r3), " ");
  }
}
function TreeViewGroupComponent_li_0_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const node_r3 = ctx_r1.$implicit;
    const index_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r4.size)("nodes", ctx_r4.fetchChildren)("loadOnDemand", ctx_r4.loadOnDemand)("checkboxes", ctx_r4.checkboxes)("expandIcons", ctx_r4.expandIcons)("selectable", ctx_r4.selectable)("touchActions", ctx_r4.touchActions)("children", ctx_r4.children)("hasChildren", ctx_r4.hasChildren)("isChecked", ctx_r4.isChecked)("isDisabled", ctx_r4.isDisabled)("hasCheckbox", ctx_r4.hasCheckbox)("disabled", ctx_r4.isItemDisabled(node_r3, index_r4))("expandDisabledNodes", ctx_r4.expandDisabledNodes)("isExpanded", ctx_r4.isExpanded)("isSelected", ctx_r4.isSelected)("isVisible", ctx_r4.isVisible)("nodeTemplateRef", ctx_r4.nodeTemplateRef)("loadMoreButtonTemplateRef", ctx_r4.loadMoreButtonTemplateRef)("parentIndex", ctx_r4.nodeIndex(index_r4))("parentDataItem", node_r3)("textField", ctx_r4.nextFields)("loadMoreService", ctx_r4.loadMoreService)("@toggle", true)("trackBy", ctx_r4.trackBy)("disableParentNodesOnly", ctx_r4.disableParentNodesOnly);
  }
}
function TreeViewGroupComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 3)(1, "div", 4);
    ɵɵtemplate(2, TreeViewGroupComponent_li_0_span_2_Template, 2, 5, "span", 5)(3, TreeViewGroupComponent_li_0_kendo_checkbox_3_Template, 2, 5, "kendo-checkbox", 6);
    ɵɵelementStart(4, "span", 7)(5, "span", 8);
    ɵɵelementContainerStart(6, 9);
    ɵɵtemplate(7, TreeViewGroupComponent_li_0_ng_container_7_Template, 2, 5, "ng-container", 10)(8, TreeViewGroupComponent_li_0_ng_container_8_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
    ɵɵelementEnd()()();
    ɵɵtemplate(9, TreeViewGroupComponent_li_0_ul_9_Template, 1, 26, "ul", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("k-hidden", !ctx_r4.isVisible(node_r3, ctx_r4.nodeIndex(index_r4)));
    ɵɵproperty("dataItem", node_r3)("index", ctx_r4.nodeIndex(index_r4))("parentDataItem", ctx_r4.parentDataItem)("parentIndex", ctx_r4.parentIndex)("loadOnDemand", ctx_r4.loadOnDemand)("checkable", ctx_r4.checkboxes)("isChecked", ctx_r4.isChecked(node_r3, ctx_r4.nodeIndex(index_r4)))("isDisabled", ctx_r4.isItemDisabled(node_r3, index_r4))("isVisible", ctx_r4.isVisible(node_r3, ctx_r4.nodeIndex(index_r4)))("expandable", ctx_r4.expandIcons && ctx_r4.hasChildren(node_r3))("isExpanded", ctx_r4.isExpanded(node_r3, ctx_r4.nodeIndex(index_r4)))("selectable", ctx_r4.selectable)("isSelected", ctx_r4.isSelected(node_r3, ctx_r4.nodeIndex(index_r4)));
    ɵɵattribute("aria-setsize", ctx_r4.totalNodesCount)("data-treeindex", ctx_r4.nodeIndex(index_r4));
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r4.setItemClasses(ctx_r4.data.length, index_r4));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.expandIcons && ctx_r4.hasChildren(node_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.checkboxes && ctx_r4.hasCheckbox(node_r3, ctx_r4.nodeIndex(index_r4)));
    ɵɵadvance();
    ɵɵstyleProp("touch-action", ctx_r4.touchActions ? "" : "none");
    ɵɵclassProp("k-disabled", ctx_r4.isItemDisabled(node_r3, index_r4));
    ɵɵproperty("id", ctx_r4.nodeIndex(index_r4))("dataItem", node_r3)("index", ctx_r4.nodeIndex(index_r4))("initialSelection", ctx_r4.isSelected(node_r3, ctx_r4.nodeIndex(index_r4)))("isSelected", ctx_r4.isSelected);
    ɵɵattribute("data-treeindex", ctx_r4.nodeIndex(index_r4));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", ctx_r4.hasTemplate);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.isExpanded(node_r3, ctx_r4.nodeIndex(index_r4)) && ctx_r4.hasChildren(node_r3));
  }
}
function TreeViewGroupComponent_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
}
function TreeViewGroupComponent_li_1_5_ng_template_0_Template(rf, ctx) {
}
function TreeViewGroupComponent_li_1_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeViewGroupComponent_li_1_5_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.loadMoreButtonTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r4.loadMoreButtonIndex));
  }
}
function TreeViewGroupComponent_li_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.loadMoreTitle, " ");
  }
}
function TreeViewGroupComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 18)(1, "div", 19);
    ɵɵtemplate(2, TreeViewGroupComponent_li_1_span_2_Template, 1, 0, "span", 20);
    ɵɵelementStart(3, "span", 21)(4, "span", 8);
    ɵɵtemplate(5, TreeViewGroupComponent_li_1_5_Template, 1, 4, null, 22)(6, TreeViewGroupComponent_li_1_ng_container_6_Template, 2, 1, "ng-container", 22);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("k-treeview-load-more-checkboxes-container", ctx_r4.checkboxes);
    ɵɵproperty("selectable", false)("checkable", false)("expandable", false)("index", ctx_r4.loadMoreButtonIndex)("parentDataItem", ctx_r4.parentDataItem)("parentIndex", ctx_r4.parentIndex);
    ɵɵattribute("data-treeindex", ctx_r4.loadMoreButtonIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.loadingMoreNodes);
    ɵɵadvance();
    ɵɵproperty("index", ctx_r4.loadMoreButtonIndex);
    ɵɵattribute("data-treeindex", ctx_r4.loadMoreButtonIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.loadMoreButtonTemplateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.loadMoreButtonTemplateRef);
  }
}
var _c3 = ["assetsContainer"];
var _c4 = ["searchbox"];
function TreeViewComponent_span_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("svgIcon", ctx_r1.searchIcon);
  }
}
function TreeViewComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5)(1, "kendo-textbox", 6, 1);
    ɵɵlistener("valueChange", function TreeViewComponent_span_1_Template_kendo_textbox_valueChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.filterChange.emit($event));
    });
    ɵɵtemplate(3, TreeViewComponent_span_1_ng_template_3_Template, 1, 1, "ng-template", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("size", ctx_r1.size)("value", ctx_r1.filter)("clearButton", true)("placeholder", ctx_r1.filterInputPlaceholder);
  }
}
var _c5 = (a0, a1, a2, a3) => ({
  text: a0,
  action: a1,
  sourceItem: a2,
  destinationItem: a3
});
function DragClueComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "kendo-icon-wrapper", 1);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.statusIconClass)("svgIcon", ctx_r0.statusSVGIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.text);
  }
}
function DragClueComponent_1_ng_template_0_Template(rf, ctx) {
}
function DragClueComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DragClueComponent_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c5, ctx_r0.text, ctx_r0.action, ctx_r0.sourceItem, ctx_r0.destinationItem));
  }
}
var _c6 = (a0, a1, a2) => ({
  action: a0,
  sourceItem: a1,
  destinationItem: a2
});
function DropHintComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "div", 3)(2, "div", 4);
    ɵɵelementEnd();
  }
}
function DropHintComponent_1_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function DropHintComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropHintComponent_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DropHintComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropHintComponent_1_ng_template_0_Template, 1, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c6, ctx_r0.action, ctx_r0.sourceItem, ctx_r0.destinationItem));
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-treeview",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372338,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DataChangeNotificationService = class {
  constructor() {
    this.changes = new EventEmitter();
  }
  notify() {
    this.changes.emit();
  }
};
var hasChildren = () => false;
var isChecked = () => "none";
var isDisabled = () => false;
var hasCheckbox = () => true;
var isExpanded = () => true;
var isSelected = () => false;
var isVisible = () => true;
var trackBy = (_, item) => item;
var ExpandStateService = class {
  constructor() {
    this.changes = new Subject();
  }
  expand(index, dataItem) {
    this.changes.next({
      dataItem,
      index,
      expand: true
    });
  }
  collapse(index, dataItem) {
    this.changes.next({
      dataItem,
      index,
      expand: false
    });
  }
};
ExpandStateService.ɵfac = function ExpandStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExpandStateService)();
};
ExpandStateService.ɵprov = ɵɵdefineInjectable({
  token: ExpandStateService,
  factory: ExpandStateService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpandStateService, [{
    type: Injectable
  }], null, null);
})();
var IndexBuilderService = class {
  constructor() {
    this.INDEX_SEPARATOR = "_";
  }
  nodeIndex(index = "", parentIndex = "") {
    return `${parentIndex}${parentIndex ? this.INDEX_SEPARATOR : ""}${index}`;
  }
  indexForLevel(index, level) {
    return index.split(this.INDEX_SEPARATOR).slice(0, level).join(this.INDEX_SEPARATOR);
  }
  lastLevelIndex(index = "") {
    const parts = index.split(this.INDEX_SEPARATOR);
    if (!parts.length) {
      return NaN;
    }
    return parseInt(parts[parts.length - 1], 10);
  }
  level(index) {
    return index.split(this.INDEX_SEPARATOR).length;
  }
};
IndexBuilderService.ɵfac = function IndexBuilderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IndexBuilderService)();
};
IndexBuilderService.ɵprov = ɵɵdefineInjectable({
  token: IndexBuilderService,
  factory: IndexBuilderService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexBuilderService, [{
    type: Injectable
  }], null, null);
})();
var LoadingNotificationService = class {
  constructor() {
    this.changes = new Subject();
  }
  notifyLoaded(index) {
    this.changes.next(index);
  }
};
LoadingNotificationService.ɵfac = function LoadingNotificationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadingNotificationService)();
};
LoadingNotificationService.ɵprov = ɵɵdefineInjectable({
  token: LoadingNotificationService,
  factory: LoadingNotificationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingNotificationService, [{
    type: Injectable
  }], null, null);
})();
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var match = (element, selector) => {
  const matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  if (!matcher) {
    return false;
  }
  return matcher.call(element, selector.toLowerCase());
};
var closestWithMatch = (element, selector) => {
  if (!document.documentElement.contains(element)) {
    return null;
  }
  let parent = element;
  while (parent !== null && parent.nodeType === 1) {
    if (match(parent, selector)) {
      return parent;
    }
    parent = parent.parentElement || parent.parentNode;
  }
  return null;
};
var noop = () => {
};
var isPresent = (value) => value !== null && value !== void 0;
var isBlank = (value) => value === null || value === void 0;
var isArray = (value) => Array.isArray(value);
var isNullOrEmptyString = (value) => isBlank(value) || value.trim().length === 0;
var isBoolean = (value) => typeof value === "boolean";
var closestNode = (element) => {
  const selector = "li.k-treeview-item";
  if (!isDocumentAvailable()) {
    return null;
  }
  if (element.closest) {
    return element.closest(selector);
  } else {
    return closestWithMatch(element, selector);
  }
};
var isFocusable = (element) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const skipTab = tabIndex === "-1";
    let focusable = tabIndex !== null && !skipTab;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled && !skipTab;
    }
    return focusable;
  }
  return false;
};
var isContent = (element) => {
  const scopeSelector = ".k-treeview-leaf:not(.k-treeview-load-more-button),.k-treeview-item,.k-treeview";
  if (!isDocumentAvailable()) {
    return null;
  }
  let node = element;
  while (node && !match(node, scopeSelector)) {
    node = node.parentNode;
  }
  if (node) {
    return match(node, ".k-treeview-leaf:not(.k-treeview-load-more-button)");
  }
};
var getContentElement = (parent) => {
  if (!isPresent(parent)) {
    return null;
  }
  const selector = ".k-treeview-leaf:not(.k-treeview-load-more-button)";
  if (match(parent, selector)) {
    return parent;
  }
  return parent.querySelector(selector);
};
var isLoadMoreButton = (element) => {
  return isPresent(closestWithMatch(element, ".k-treeview-leaf.k-treeview-load-more-button"));
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var hasParent = (element, container) => {
  return Boolean(closest(element, (node) => node === container));
};
var focusableNode = (element) => element.nativeElement.querySelector('li[tabindex="0"]');
var nodeId = (node) => node ? node.getAttribute("data-treeindex") : "";
var nodeIndex = (item) => (item || {}).index;
var dataItemsEqual = (first, second) => {
  if (!isPresent(first) && !isPresent(second)) {
    return true;
  }
  return isPresent(first) && isPresent(second) && first.item.dataItem === second.item.dataItem;
};
var getDataItem = (lookup) => {
  if (!isPresent(lookup)) {
    return lookup;
  }
  return lookup.item.dataItem;
};
var isArrayWithAtLeastOneItem = (v) => v && Array.isArray(v) && v.length !== 0;
var filterTree = (items, term, {
  operator,
  ignoreCase,
  mode
}, textField, depth = 0) => {
  const field = typeof textField === "string" ? textField : textField[depth];
  items.forEach((wrapper) => {
    const matcher = typeof operator === "string" ? matchByFieldAndCase(field, operator, ignoreCase) : operator;
    const isMatch = matcher(wrapper.dataItem, term);
    wrapper.isMatch = isMatch;
    wrapper.visible = isMatch;
    wrapper.containsMatches = false;
    if (isMatch) {
      setParentChain(wrapper.parent);
    }
    if (wrapper.children && wrapper.children.length > 0) {
      if (mode === "strict" || !isMatch) {
        filterTree(wrapper.children, term, {
          operator,
          ignoreCase,
          mode
        }, textField, depth + 1);
      } else {
        makeAllVisible(wrapper.children);
      }
    }
  });
};
var setParentChain = (node) => {
  if (!isPresent(node)) {
    return;
  }
  node.containsMatches = true;
  node.visible = true;
  if (isPresent(node.parent) && !node.parent.containsMatches) {
    setParentChain(node.parent);
  }
};
var makeAllVisible = (nodes) => {
  nodes.forEach((node) => {
    node.visible = true;
    if (node.children) {
      makeAllVisible(node.children);
    }
  });
};
var operators = {
  contains: (a, b) => a.indexOf(b) >= 0,
  doesnotcontain: (a, b) => a.indexOf(b) === -1,
  startswith: (a, b) => a.lastIndexOf(b, 0) === 0,
  doesnotstartwith: (a, b) => a.lastIndexOf(b, 0) === -1,
  endswith: (a, b) => a.indexOf(b, a.length - b.length) >= 0,
  doesnotendwith: (a, b) => a.indexOf(b, a.length - b.length) < 0
};
var matchByCase = (matcher, ignoreCase) => (a, b) => {
  if (ignoreCase) {
    return matcher(a.toLowerCase(), b.toLowerCase());
  }
  return matcher(a, b);
};
var matchByFieldAndCase = (field, operator, ignoreCase) => (dataItem, term) => matchByCase(operators[operator], ignoreCase)(getter(field)(dataItem), term);
var buildTreeIndex = (parentIndex, itemIndex) => {
  return [parentIndex, itemIndex].filter((part) => isPresent(part)).join("_");
};
var buildTreeItem = (dataItem, currentLevelIndex, parentIndex) => {
  if (!isPresent(dataItem)) {
    return null;
  }
  return {
    dataItem,
    index: buildTreeIndex(parentIndex, currentLevelIndex)
  };
};
var fetchLoadedDescendants = (lookup, filterExpression) => {
  if (!isPresent(lookup) || lookup.children.length === 0) {
    return [];
  }
  let descendants = lookup.children;
  if (isPresent(filterExpression)) {
    descendants = descendants.filter(filterExpression);
  }
  descendants.forEach((child) => descendants = descendants.concat(fetchLoadedDescendants(child, filterExpression)));
  return descendants;
};
var sameValues = (as, bs) => {
  if (as.size !== bs.size) {
    return false;
  }
  return Array.from(as).every((v) => bs.has(v));
};
var getSizeClass = (component, size) => {
  const SIZE_CLASSES = {
    "small": `k-${component}-sm`,
    "medium": `k-${component}-md`,
    "large": `k-${component}-lg`
  };
  return SIZE_CLASSES[size];
};
var safe = (node) => node || {};
var safeChildren = (node) => safe(node).children || [];
var lastVisibleNode = (nodes) => {
  if (!Array.isArray(nodes) || nodes.length === 0) {
    return null;
  }
  const nodesCount = nodes.length;
  const lastIndex = nodesCount - 1;
  for (let index = lastIndex; index >= 0; index -= 1) {
    const node = nodes[index];
    if (node.visible) {
      return node;
    }
  }
  return null;
};
var NavigationModel = class {
  constructor() {
    this.ib = new IndexBuilderService();
    this.nodes = [];
  }
  firstVisibleNode() {
    return (this.nodes || []).find((node) => node.visible);
  }
  lastVisibleNode() {
    let node = lastVisibleNode(this.nodes);
    while (isPresent(node) && safeChildren(node).length > 0) {
      const children = safeChildren(node);
      const lastVisibleChild = lastVisibleNode(children);
      if (!isPresent(lastVisibleChild)) {
        return node;
      }
      node = lastVisibleChild;
    }
    return node;
  }
  closestNode(index) {
    const {
      prev
    } = safe(this.findNode(index));
    const sibling = prev || this.firstVisibleNode();
    return safe(sibling).index === index ? this.visibleSibling(sibling, 1) : sibling;
  }
  firstFocusableNode() {
    return this.nodes.find((node) => {
      return !node.disabled && node.visible;
    });
  }
  findNode(index) {
    return this.find(index, this.nodes);
  }
  findParent(index) {
    const parentLevel = this.ib.level(index) - 1;
    return this.findNode(this.ib.indexForLevel(index, parentLevel));
  }
  findVisibleChild(index) {
    const node = this.findNode(index);
    const children = safeChildren(node);
    return children.find((child) => child.visible);
  }
  findVisiblePrev(item) {
    const index = item.index;
    const parent = this.findParent(index);
    const levelIndex = this.ib.lastLevelIndex(index);
    const prevNodes = this.container(parent).slice(0, levelIndex);
    const prevNodesHidden = prevNodes.every((node) => !node.visible);
    if (levelIndex === 0 || prevNodesHidden) {
      return parent;
    }
    const currentNode = this.findNode(index);
    let prev = this.visibleSibling(currentNode, -1);
    if (prev) {
      let children = this.container(prev);
      while (children.length > 0 && children.some((node) => node.visible)) {
        prev = lastVisibleNode(children);
        children = this.container(prev);
      }
    }
    return prev;
  }
  findVisibleNext(item) {
    const children = this.container(item);
    const hasVisibleChildren = children.some((child) => child.visible);
    if (children.length === 0 || !hasVisibleChildren) {
      return this.visibleSibling(item, 1);
    }
    return children.find((child) => child.visible);
  }
  registerItem(id2, index, disabled, loadMoreButton = false, visible = true) {
    const children = [];
    const level = this.ib.level(index);
    const parent = this.findParent(index);
    if (parent || level === 1) {
      const node = {
        id: id2,
        children,
        index,
        parent,
        disabled,
        loadMoreButton,
        visible
      };
      this.insert(node, parent);
    }
  }
  unregisterItem(id2, index) {
    const node = this.find(index, this.nodes);
    if (!node || node.id !== id2) {
      return;
    }
    const children = this.container(node.parent);
    children.splice(children.indexOf(node), 1);
  }
  childLevel(nodes) {
    const children = nodes.filter((node) => isPresent(node));
    if (!children || !children.length) {
      return 1;
    }
    return this.ib.level(children[0].index);
  }
  container(node) {
    return node ? node.children : this.nodes;
  }
  find(index, nodes) {
    const childLevel = this.childLevel(nodes);
    const indexToMatch = this.ib.indexForLevel(index, childLevel);
    const isLeaf = childLevel === this.ib.level(index);
    const node = nodes.find((n) => n && n.index === indexToMatch);
    if (!node) {
      return null;
    }
    return isLeaf ? node : this.find(index, node.children);
  }
  insert(node, parent) {
    const nodes = this.container(parent);
    nodes.splice(this.ib.lastLevelIndex(node.index), 0, node);
  }
  visibleSibling(node, offset) {
    if (!node) {
      return null;
    }
    const parent = this.findParent(node.index);
    const container = this.container(parent);
    let nextItemIndex = container.indexOf(node) + offset;
    let nextItem = container[nextItemIndex];
    while (isPresent(nextItem)) {
      if (nextItem.visible) {
        return nextItem;
      }
      nextItemIndex += offset;
      nextItem = container[nextItemIndex];
    }
    return this.visibleSibling(parent, offset);
  }
};
var NavigationService = class {
  constructor(localization) {
    this.localization = localization;
    this.expands = new Subject();
    this.moves = new Subject();
    this.checks = new Subject();
    this.selects = new Subject();
    this.deselectAllButCurrentItem = new Subject();
    this.loadMore = new Subject();
    this.navigable = true;
    this.selection = "single";
    this.isTreeViewActive = false;
    this.actions = {
      [Keys.ArrowUp]: () => this.activate(this.model.findVisiblePrev(this.focusableItem), true),
      [Keys.ArrowDown]: () => this.activate(this.model.findVisibleNext(this.focusableItem), true),
      [Keys.ArrowLeft]: () => !this.isLoadMoreButton && this.expand({
        expand: this.localization.rtl,
        intercept: this.localization.rtl ? this.moveToFirstVisibleChild : this.moveToParent
      }),
      [Keys.ArrowRight]: () => !this.isLoadMoreButton && this.expand({
        expand: !this.localization.rtl,
        intercept: this.localization.rtl ? this.moveToParent : this.moveToFirstVisibleChild
      }),
      [Keys.Home]: () => this.activate(this.model.firstVisibleNode(), true),
      [Keys.End]: () => this.activate(this.model.lastVisibleNode(), true),
      [Keys.Enter]: (e) => this.handleEnter(e),
      [Keys.Space]: () => this.handleSpace()
    };
    this.isFocused = false;
    this.shouldScroll = false;
    this._model = new NavigationModel();
    this.moveToFirstVisibleChild = this.moveToFirstVisibleChild.bind(this);
    this.moveToParent = this.moveToParent.bind(this);
  }
  get model() {
    return this._model;
  }
  set model(model) {
    this._model = model;
  }
  get activeIndex() {
    return nodeIndex(this.activeItem) || null;
  }
  get isActiveExpanded() {
    return this.activeItem && this.activeItem.children.length > 0;
  }
  get isLoadMoreButton() {
    return this.activeItem && this.activeItem.loadMoreButton;
  }
  get focusableItem() {
    return this.activeItem || this.model.firstFocusableNode();
  }
  activate(item, shouldScroll = false) {
    if (!this.navigable || !item || this.isActive(nodeIndex(item))) {
      return;
    }
    this.isFocused = true;
    this.activeItem = item || this.activeItem;
    this.shouldScroll = shouldScroll;
    this.notifyMove();
  }
  activateParent(index) {
    this.activate(this.model.findParent(index));
  }
  activateIndex(index) {
    if (!index) {
      return;
    }
    this.activate(this.model.findNode(index));
  }
  activateClosest(index) {
    if (!index || nodeIndex(this.focusableItem) !== index) {
      return;
    }
    this.activeItem = this.model.closestNode(index);
    this.notifyMove();
  }
  activateFocusable() {
    if (this.activeItem) {
      return;
    }
    this.activeItem = this.model.firstVisibleNode();
    this.notifyMove();
  }
  deactivate() {
    if (!this.navigable || !this.isFocused) {
      return;
    }
    this.isFocused = false;
    this.notifyMove();
  }
  checkIndex(index) {
    if (!this.isDisabled(index)) {
      this.checks.next(index);
    }
  }
  selectIndex(index) {
    if (!this.isDisabled(index)) {
      this.selects.next(index);
    }
  }
  notifyLoadMore(index) {
    if (!isPresent(index)) {
      return;
    }
    this.loadMore.next(index);
  }
  isActive(index) {
    if (!index) {
      return false;
    }
    return this.isFocused && this.activeIndex === index;
  }
  isFocusable(index) {
    return nodeIndex(this.focusableItem) === index;
  }
  isDisabled(index) {
    if (!index) {
      return false;
    }
    return this.model.findNode(index).disabled;
  }
  registerItem(id2, index, disabled, loadMoreButton = false, visible = true) {
    const itemAtIndex = this.model.findNode(index);
    if (isPresent(itemAtIndex)) {
      this.model.unregisterItem(itemAtIndex.id, itemAtIndex.index);
      if (this.isActive(index)) {
        this.deactivate();
      }
    }
    this.model.registerItem(id2, index, disabled, loadMoreButton, visible);
  }
  updateItem(index, disabled, visible = true) {
    const itemAtIndex = this.model.findNode(index);
    if (isPresent(itemAtIndex)) {
      if (this.isActive(index)) {
        this.deactivate();
      }
    }
    itemAtIndex.disabled = disabled;
    itemAtIndex.visible = visible;
  }
  unregisterItem(id2, index) {
    if (this.isActive(index)) {
      this.activateParent(index);
    }
    this.model.unregisterItem(id2, index);
  }
  move(e) {
    if (!this.navigable) {
      return;
    }
    const moveAction = this.actions[e.keyCode];
    if (!moveAction) {
      return;
    }
    moveAction(e);
    e.preventDefault();
  }
  expand({
    expand,
    intercept
  }) {
    const index = nodeIndex(this.activeItem);
    if (!index || intercept(index)) {
      return;
    }
    this.notifyExpand(expand);
  }
  moveToParent() {
    if (this.isActiveExpanded) {
      return false;
    }
    this.activate(this.model.findParent(nodeIndex(this.activeItem)));
    return true;
  }
  moveToFirstVisibleChild() {
    if (!this.isActiveExpanded) {
      return false;
    }
    this.activate(this.model.findVisibleChild(nodeIndex(this.activeItem)));
    return true;
  }
  notifyExpand(expand) {
    this.expands.next(this.navigationState(expand));
  }
  notifyMove() {
    this.moves.next(this.navigationState());
  }
  navigationState(expand = false) {
    return {
      expand,
      index: this.activeIndex,
      isFocused: this.isFocused,
      shouldScroll: this.shouldScroll
    };
  }
  handleEnter(event) {
    if (!this.navigable) {
      return;
    }
    if (this.isLoadMoreButton) {
      this.notifyLoadMore(this.activeIndex);
    } else {
      const isCtrlPressed = event.ctrlKey || event.metaKey;
      if (isCtrlPressed) {
        this.selectIndex(this.activeIndex);
      } else {
        if (this.selection === "multiple") {
          this.deselectAllButCurrentItem.next({
            dataItem: this.activeItem,
            index: this.activeIndex
          });
        } else {
          this.selectIndex(this.activeIndex);
        }
      }
    }
  }
  handleSpace() {
    if (!this.navigable) {
      return;
    }
    if (this.isLoadMoreButton) {
      this.notifyLoadMore(this.activeIndex);
    } else {
      this.checkIndex(this.activeIndex);
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(LocalizationService));
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
      type: LocalizationService
    }];
  }, null);
})();
var NodeChildrenService = class {
  constructor() {
    this.changes = new Subject();
  }
  childrenLoaded(item, children) {
    this.changes.next({
      item,
      children
    });
  }
};
NodeChildrenService.ɵfac = function NodeChildrenService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeChildrenService)();
};
NodeChildrenService.ɵprov = ɵɵdefineInjectable({
  token: NodeChildrenService,
  factory: NodeChildrenService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeChildrenService, [{
    type: Injectable
  }], null, null);
})();
var NodeTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
NodeTemplateDirective.ɵfac = function NodeTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
NodeTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: NodeTemplateDirective,
  selectors: [["", "kendoTreeViewNodeTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewNodeTemplate]",
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
var LoadMoreButtonTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
LoadMoreButtonTemplateDirective.ɵfac = function LoadMoreButtonTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadMoreButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
LoadMoreButtonTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: LoadMoreButtonTemplateDirective,
  selectors: [["", "kendoTreeViewLoadMoreButtonTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadMoreButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewLoadMoreButtonTemplate]",
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
var DataBoundComponent = class {
};
DataBoundComponent.ɵfac = function DataBoundComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DataBoundComponent)();
};
DataBoundComponent.ɵprov = ɵɵdefineInjectable({
  token: DataBoundComponent,
  factory: DataBoundComponent.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataBoundComponent, [{
    type: Injectable
  }], null, null);
})();
var ExpandableComponent = class {
};
ExpandableComponent.ɵfac = function ExpandableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExpandableComponent)();
};
ExpandableComponent.ɵprov = ɵɵdefineInjectable({
  token: ExpandableComponent,
  factory: ExpandableComponent.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpandableComponent, [{
    type: Injectable
  }], null, null);
})();
var SelectionService = class {
  constructor() {
    this.changes = new Subject();
  }
  isFirstSelected(index) {
    return this.firstIndex === index;
  }
  setFirstSelected(index, selected) {
    if (this.firstIndex === index && selected === false) {
      this.firstIndex = null;
    } else if (!this.firstIndex && selected) {
      this.firstIndex = index;
    }
  }
  select(index, dataItem) {
    this.changes.next({
      dataItem,
      index
    });
  }
};
SelectionService.ɵfac = function SelectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectionService)();
};
SelectionService.ɵprov = ɵɵdefineInjectable({
  token: SelectionService,
  factory: SelectionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectionService, [{
    type: Injectable
  }], null, null);
})();
var INDEX_REGEX = /\d+$/;
var TreeViewLookupService = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  reset() {
    this.map.clear();
  }
  registerItem(item, parent) {
    const currentLookup = {
      children: [],
      item,
      parent: this.item(nodeIndex(parent))
    };
    this.map.set(item.index, currentLookup);
  }
  registerChildren(index, children) {
    const item = this.item(index);
    if (!item) {
      return;
    }
    item.children = children;
  }
  unregisterItem(index, dataItem) {
    const current = this.item(index);
    if (current && current.item.dataItem === dataItem) {
      this.map.delete(index);
      if (current.parent && current.parent.children) {
        current.parent.children = current.parent.children.filter((item) => item.dataItem !== dataItem);
      }
    }
  }
  replaceItem(index, item, parent) {
    if (!item) {
      return;
    }
    this.unregisterItem(index, item.dataItem);
    this.registerItem(item, parent);
    this.addToParent(item, parent);
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
  hasItem(index) {
    return this.map.has(index);
  }
  item(index) {
    return this.map.get(index) || null;
  }
  addToParent(item, parent) {
    if (parent) {
      const parentItem = this.item(parent.index);
      const index = parseInt(INDEX_REGEX.exec(item.index)[0], 10);
      parentItem.children = parentItem.children || [];
      parentItem.children.splice(index, 0, item);
    }
  }
  mapChildren(children = []) {
    return children.map((c) => {
      const {
        item,
        parent,
        children: children2
      } = this.item(c.index);
      return {
        children: this.mapChildren(children2),
        item,
        parent
      };
    });
  }
};
TreeViewLookupService.ɵfac = function TreeViewLookupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewLookupService)();
};
TreeViewLookupService.ɵprov = ɵɵdefineInjectable({
  token: TreeViewLookupService,
  factory: TreeViewLookupService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewLookupService, [{
    type: Injectable
  }], null, null);
})();
var TreeViewItemContentDirective = class {
  constructor(element, navigationService, selectionService, renderer) {
    this.element = element;
    this.navigationService = navigationService;
    this.selectionService = selectionService;
    this.renderer = renderer;
    this.initialSelection = false;
    this.isSelected = isSelected;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.navigationService.moves.subscribe(this.updateFocusClass.bind(this)));
    this.subscriptions.add(this.navigationService.selects.pipe(filter((index) => index === this.index)).subscribe((index) => this.selectionService.select(index, this.dataItem)));
    this.subscriptions.add(this.selectionService.changes.subscribe(() => {
      this.updateSelectionClass(this.isSelected(this.dataItem, this.index));
    }));
  }
  ngOnChanges(changes) {
    if (changes["initialSelection"]) {
      this.updateSelectionClass(this.initialSelection);
    }
    if (changes["index"]) {
      this.updateFocusClass();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateFocusClass() {
    this.render(this.navigationService.isActive(this.index), "k-focus");
  }
  updateSelectionClass(selected) {
    this.render(selected, "k-selected");
  }
  render(addClass, className) {
    const action = addClass ? "addClass" : "removeClass";
    this.renderer[action](this.element.nativeElement, className);
  }
};
TreeViewItemContentDirective.ɵfac = function TreeViewItemContentDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewItemContentDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(Renderer2));
};
TreeViewItemContentDirective.ɵdir = ɵɵdefineDirective({
  type: TreeViewItemContentDirective,
  selectors: [["", "kendoTreeViewItemContent", ""]],
  inputs: {
    dataItem: "dataItem",
    index: "index",
    initialSelection: "initialSelection",
    isSelected: "isSelected"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewItemContentDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewItemContent]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NavigationService
    }, {
      type: SelectionService
    }, {
      type: Renderer2
    }];
  }, {
    dataItem: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    initialSelection: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }]
  });
})();
var LoadingIndicatorDirective = class {
  constructor(expandService, loadingService, cd) {
    this.expandService = expandService;
    this.loadingService = loadingService;
    this.cd = cd;
    this._loading = false;
  }
  get loading() {
    return this._loading;
  }
  set loading(value) {
    this._loading = value;
    this.cd.markForCheck();
  }
  ngOnInit() {
    const loadingNotifications = this.loadingService.changes.pipe(filter((index) => index === this.index));
    this.subscription = this.expandService.changes.pipe(filter(({
      index
    }) => index === this.index), tap(({
      expand
    }) => {
      if (!expand && this.loading) {
        this.loading = false;
      }
    }), filter(({
      expand
    }) => expand), switchMap((x) => of(x).pipe(delay(100), takeUntil(loadingNotifications)))).subscribe(() => this.loading = true);
    this.subscription.add(loadingNotifications.subscribe(() => this.loading = false));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
LoadingIndicatorDirective.ɵfac = function LoadingIndicatorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadingIndicatorDirective)(ɵɵdirectiveInject(ExpandStateService), ɵɵdirectiveInject(LoadingNotificationService), ɵɵdirectiveInject(ChangeDetectorRef));
};
LoadingIndicatorDirective.ɵdir = ɵɵdefineDirective({
  type: LoadingIndicatorDirective,
  selectors: [["", "kendoTreeViewLoading", ""]],
  hostVars: 2,
  hostBindings: function LoadingIndicatorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-i-loading", ctx.loading);
    }
  },
  inputs: {
    index: [0, "kendoTreeViewLoading", "index"]
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingIndicatorDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewLoading]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ExpandStateService
    }, {
      type: LoadingNotificationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    loading: [{
      type: HostBinding,
      args: ["class.k-i-loading"]
    }],
    index: [{
      type: Input,
      args: ["kendoTreeViewLoading"]
    }]
  });
})();
var buildItem = (index, dataItem) => ({
  dataItem,
  index
});
var id = 0;
var TREE_ITEM_ROLE = "treeitem";
var BUTTON_ROLE = "button";
var TreeViewItemDirective = class {
  constructor(element, expandService, navigationService, selectionService, lookupService, renderer, ib) {
    this.element = element;
    this.expandService = expandService;
    this.navigationService = navigationService;
    this.selectionService = selectionService;
    this.lookupService = lookupService;
    this.renderer = renderer;
    this.ib = ib;
    this.role = TREE_ITEM_ROLE;
    this.loadOnDemand = true;
    this.isDisabled = false;
    this.isVisible = true;
    this.ariaChecked = "false";
    this.id = id++;
    this.isInitialized = false;
    this.subscriptions = [];
    this.subscribe();
  }
  set isChecked(checked) {
    if (checked === "checked") {
      this.ariaChecked = "true";
    } else if (checked === "indeterminate") {
      this.ariaChecked = "mixed";
    } else {
      this.ariaChecked = "false";
    }
  }
  get isExpanded() {
    return this._isExpanded || false;
  }
  set isExpanded(isExpanded2) {
    this._isExpanded = isExpanded2;
  }
  get isSelected() {
    return this._isSelected || false;
  }
  set isSelected(isSelected2) {
    this._isSelected = isSelected2;
  }
  get isButton() {
    return this.role === BUTTON_ROLE;
  }
  get treeItem() {
    return buildItem(this.index, this.dataItem);
  }
  get parentTreeItem() {
    return this.parentDataItem ? buildItem(this.parentIndex, this.parentDataItem) : null;
  }
  ngOnInit() {
    if (this.loadOnDemand && !this.isButton) {
      this.lookupService.registerItem(this.treeItem, this.parentTreeItem);
    }
    this.registerNavigationItem();
    this.isInitialized = true;
    this.setAttribute("role", this.role);
    this.setAriaAttributes();
    this.updateTabIndex();
  }
  ngOnChanges(changes) {
    const {
      index
    } = changes;
    if (anyChanged(["index", "checkable", "isChecked", "expandable", "isExpanded", "selectable", "isSelected"], changes)) {
      this.setAriaAttributes();
    }
    if (this.loadOnDemand && !this.isButton) {
      this.moveLookupItem(changes);
    }
    this.moveNavigationItem(index);
    if (anyChanged(["isDisabled", "isVisible"], changes)) {
      this.updateNodeAvailability();
    }
  }
  ngOnDestroy() {
    this.navigationService.unregisterItem(this.id, this.index);
    if (this.loadOnDemand && !this.isButton) {
      this.lookupService.unregisterItem(this.index, this.dataItem);
    }
    this.subscriptions = this.subscriptions.reduce((list, callback) => (callback.unsubscribe(), list), []);
  }
  subscribe() {
    this.subscriptions = [this.navigationService.moves.subscribe((navState) => {
      this.updateTabIndex();
      this.focusItem(navState.shouldScroll);
    }), this.navigationService.expands.pipe(filter(({
      index
    }) => index === this.index && !this.isDisabled)).subscribe(({
      expand
    }) => this.expand(expand))];
  }
  registerNavigationItem() {
    this.navigationService.registerItem(this.id, this.index, this.isDisabled, this.isButton, this.isVisible);
    this.activateItem();
  }
  activateItem() {
    if (this.isDisabled) {
      return;
    }
    const navigationService = this.navigationService;
    const selectionService = this.selectionService;
    const index = this.index;
    selectionService.setFirstSelected(index, this.isSelected);
    if (!navigationService.isActive(index) && selectionService.isFirstSelected(index)) {
      navigationService.activateIndex(index);
    }
  }
  expand(shouldExpand) {
    this.expandService[shouldExpand ? "expand" : "collapse"](this.index, this.dataItem);
  }
  isFocusable() {
    return !this.isDisabled && this.navigationService.isFocusable(this.index);
  }
  focusItem(scrollIntoView = false) {
    if (this.isInitialized && this.navigationService.isActive(this.index)) {
      this.element.nativeElement.focus({
        preventScroll: !scrollIntoView
      });
    }
  }
  moveLookupItem(changes = {}) {
    const {
      dataItem,
      index,
      parentDataItem,
      parentIndex
    } = changes;
    if (index && index.firstChange || //skip first change
    !dataItem && !index && !parentDataItem && !parentIndex) {
      return;
    }
    const oldIndex = (index || {}).previousValue || this.index;
    this.lookupService.replaceItem(oldIndex, this.treeItem, this.parentTreeItem);
  }
  moveNavigationItem(indexChange = {}) {
    const {
      currentValue,
      firstChange,
      previousValue
    } = indexChange;
    if (!firstChange && isPresent(currentValue) && isPresent(previousValue)) {
      this.navigationService.unregisterItem(this.id, previousValue);
      this.navigationService.registerItem(this.id, currentValue, this.isDisabled, this.isButton);
    }
  }
  updateNodeAvailability() {
    const service = this.navigationService;
    if (this.isDisabled || !this.isVisible && this.navigationService.isTreeViewActive) {
      service.activateClosest(this.index);
    } else {
      service.activateFocusable();
    }
    service.updateItem(this.index, this.isDisabled, this.isVisible);
  }
  setAriaAttributes() {
    this.setAttribute("aria-level", this.ib.level(this.index).toString());
    this.setAttribute("aria-expanded", this.expandable ? this.isExpanded.toString() : null);
    this.setAttribute("aria-selected", this.selectable ? this.isSelected.toString() : null);
    this.setAttribute("aria-checked", this.checkable ? this.ariaChecked : null);
  }
  updateTabIndex() {
    this.setAttribute("tabIndex", this.isFocusable() ? "0" : "-1");
  }
  setAttribute(attr, value) {
    if (!isPresent(value)) {
      this.renderer.removeAttribute(this.element.nativeElement, attr);
      return;
    }
    this.renderer.setAttribute(this.element.nativeElement, attr, value);
  }
};
TreeViewItemDirective.ɵfac = function TreeViewItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewItemDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ExpandStateService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(TreeViewLookupService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(IndexBuilderService));
};
TreeViewItemDirective.ɵdir = ɵɵdefineDirective({
  type: TreeViewItemDirective,
  selectors: [["", "kendoTreeViewItem", ""]],
  inputs: {
    dataItem: "dataItem",
    index: "index",
    parentDataItem: "parentDataItem",
    parentIndex: "parentIndex",
    role: "role",
    loadOnDemand: "loadOnDemand",
    checkable: "checkable",
    selectable: "selectable",
    expandable: "expandable",
    isChecked: "isChecked",
    isDisabled: "isDisabled",
    isVisible: "isVisible",
    isExpanded: "isExpanded",
    isSelected: "isSelected"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewItemDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewItem]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ExpandStateService
    }, {
      type: NavigationService
    }, {
      type: SelectionService
    }, {
      type: TreeViewLookupService
    }, {
      type: Renderer2
    }, {
      type: IndexBuilderService
    }];
  }, {
    dataItem: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    parentDataItem: [{
      type: Input
    }],
    parentIndex: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }],
    checkable: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }],
    isChecked: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isVisible: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }]
  });
})();
var TOP_ITEM = "k-treeview-top";
var MID_ITEM = "k-treeview-mid";
var BOT_ITEM = "k-treeview-bot";
var TreeViewGroupComponent = class {
  constructor(expandService, loadingService, indexBuilder2, treeViewLookupService, navigationService, nodeChildrenService, dataChangeNotification, changeDetectorRef, localization, renderer) {
    this.expandService = expandService;
    this.loadingService = loadingService;
    this.indexBuilder = indexBuilder2;
    this.treeViewLookupService = treeViewLookupService;
    this.navigationService = navigationService;
    this.nodeChildrenService = nodeChildrenService;
    this.dataChangeNotification = dataChangeNotification;
    this.changeDetectorRef = changeDetectorRef;
    this.localization = localization;
    this.renderer = renderer;
    this.caretAltDownIcon = caretAltDownIcon;
    this.caretAltRightIcon = caretAltRightIcon;
    this.caretAltLeftIcon = caretAltLeftIcon;
    this.kGroupClass = true;
    this.loadOnDemand = true;
    this.textField = "";
    this.size = "medium";
    this.initialNodesLoaded = false;
    this.loadingMoreNodes = false;
    this.isItemExpandable = (node, index) => this.expandDisabledNodes || !this.isItemDisabled(node, index);
    this._data = [];
    this.singleRecordSubscriptions = new Subscription();
    this.localizationSubscriptions = new Subscription();
    this.isChecked = () => "none";
    this.isDisabled = () => false;
    this.hasCheckbox = () => true;
    this.isExpanded = () => false;
    this.isVisible = () => true;
    this.isSelected = () => false;
    this.children = () => of([]);
    this.hasChildren = () => false;
  }
  get role() {
    return this.parentIndex ? "group" : "tree";
  }
  getFontIcon(node, index) {
    return this.isExpanded(node, index) ? "caret-alt-down" : !this.localization.rtl ? "caret-alt-right" : "caret-alt-left";
  }
  getSvgIcon(node, index) {
    return this.isExpanded(node, index) ? caretAltDownIcon : !this.localization.rtl ? caretAltRightIcon : caretAltLeftIcon;
  }
  get moreNodesAvailable() {
    if (!isPresent(this.loadMoreService) || this.data.length === 0) {
      return false;
    }
    return this.pageSize < this.totalNodesCount;
  }
  get pageSize() {
    if (!isPresent(this.loadMoreService)) {
      return null;
    }
    return this.loadMoreService.getGroupSize(this.parentDataItem);
  }
  set pageSize(pageSize) {
    this.loadMoreService.setGroupSize(this.parentDataItem, pageSize);
  }
  get data() {
    if (isPresent(this.pageSize)) {
      const normalizedSizeValue = this.pageSize > 0 ? this.pageSize : 0;
      return this._data.slice(0, normalizedSizeValue);
    }
    return this._data;
  }
  set data(data) {
    this._data = data;
    this.registerLoadedNodes(this.data);
  }
  get loadMoreButtonIndex() {
    if (!this.loadMoreService) {
      return null;
    }
    return this.nodeIndex(this.data.length);
  }
  /**
   * Represents the total number of nodes for the current level.
   */
  get totalNodesCount() {
    if (!this.loadMoreService) {
      return this.data.length;
    }
    return this.loadMoreService.getTotalNodesCount(this.parentDataItem, this._data.length);
  }
  get hasTemplate() {
    return isPresent(this.nodeTemplateRef);
  }
  expandNode(index, dataItem, expand) {
    if (expand) {
      this.expandService.expand(index, dataItem);
    } else {
      this.expandService.collapse(index, dataItem);
    }
  }
  checkNode(index, checkBox) {
    this.navigationService.checkIndex(index);
    this.navigationService.activateIndex(index);
    if (checkBox?.input) {
      this.renderer.removeClass(checkBox.input.nativeElement, "k-focus");
    }
  }
  nodeIndex(index) {
    return this.indexBuilder.nodeIndex(index.toString(), this.parentIndex);
  }
  nodeText(dataItem) {
    const textField = isArray(this.textField) ? this.textField[0] : this.textField;
    return getter(textField)(dataItem);
  }
  getCheckBoxState(item, index) {
    const state = this.isChecked(item, index);
    if (state === "indeterminate") {
      return state;
    }
    return state === "checked";
  }
  getCheckboxAttributes(index) {
    return {
      "aria-hidden": "true",
      role: "none",
      "aria-labelledby": this.nodeIndex(index)
    };
  }
  ngOnDestroy() {
    if (isPresent(this.nodesSubscription)) {
      this.nodesSubscription.unsubscribe();
    }
    if (isPresent(this.loadMoreNodesSubscription)) {
      this.loadMoreNodesSubscription.unsubscribe();
    }
    this.singleRecordSubscriptions.unsubscribe();
    this.localizationSubscriptions.unsubscribe();
  }
  ngOnInit() {
    this.subscribeToNodesChange();
    this.singleRecordSubscriptions.add(this.dataChangeNotification.changes.subscribe(this.subscribeToNodesChange.bind(this)));
    this.singleRecordSubscriptions.add(this.navigationService.loadMore.pipe(filter((index) => index === this.loadMoreButtonIndex)).subscribe(this.loadMoreNodes.bind(this)));
    this.localizationSubscriptions.add(this.localization.changes.subscribe(this.l10nChange.bind(this)));
  }
  ngOnChanges(changes) {
    if (changes.parentIndex && this.loadOnDemand) {
      this.setNodeChildren(this.mapToTreeItem(this.data));
    }
    if (this.localization.get("loadMore")) {
      this.loadMoreTitle = this.localization.get("loadMore");
    }
  }
  l10nChange() {
    if (this.localization.get("loadMore")) {
      this.loadMoreTitle = this.localization.get("loadMore");
    }
    this.changeDetectorRef.markForCheck();
  }
  fetchChildren(node, index) {
    return this.children(node).pipe(catchError(() => {
      this.loadingService.notifyLoaded(index);
      return EMPTY;
    }), tap(() => this.loadingService.notifyLoaded(index)));
  }
  get nextFields() {
    if (isArray(this.textField)) {
      return this.textField.length > 1 ? this.textField.slice(1) : this.textField;
    }
    return [this.textField];
  }
  loadMoreNodes() {
    if (isPresent(this.loadMoreService.loadMoreNodes)) {
      this.fetchMoreNodes();
    } else {
      this.loadMoreLocalNodes();
    }
  }
  /**
   * @hidden
   */
  isItemDisabled(node, index) {
    return this.disabled && !this.disableParentNodesOnly || this.isDisabled(node, this.nodeIndex(index));
  }
  /**
   * @hidden
   */
  setItemClasses(dataLength, index) {
    if (dataLength === 1) {
      return this.parentIndex ? BOT_ITEM : `${TOP_ITEM} ${BOT_ITEM}`;
    }
    if (index === 0) {
      return TOP_ITEM;
    }
    if (index > 0 && index < dataLength - 1) {
      return MID_ITEM;
    }
    return index === this.totalNodesCount - 1 ? BOT_ITEM : MID_ITEM;
  }
  loadMoreLocalNodes() {
    const initialLoadMoreButtonIndex = this.loadMoreButtonIndex;
    this.pageSize += this.loadMoreService.getInitialPageSize(this.parentDataItem);
    this.registerLoadedNodes(this.data);
    this.changeDetectorRef.detectChanges();
    this.reselectItemAt(initialLoadMoreButtonIndex);
  }
  fetchMoreNodes() {
    if (this.loadingMoreNodes) {
      return;
    }
    this.loadingMoreNodes = true;
    if (isPresent(this.loadMoreNodesSubscription)) {
      this.loadMoreNodesSubscription.unsubscribe();
    }
    this.loadMoreNodesSubscription = this.loadMoreService.loadMoreNodes({
      dataItem: this.parentDataItem,
      skip: this.data.length,
      take: this.loadMoreService.getInitialPageSize(this.parentDataItem)
    }).pipe(finalize(() => this.loadingMoreNodes = false)).subscribe((items) => {
      if (!(Array.isArray(items) && items.length > 0)) {
        return;
      }
      const initialLoadMoreButtonIndex = this.loadMoreButtonIndex;
      this.pageSize += items.length;
      this.data = this.data.concat(items);
      if (this.navigationService.isActive(initialLoadMoreButtonIndex)) {
        this.changeDetectorRef.detectChanges();
        this.reselectItemAt(initialLoadMoreButtonIndex);
      }
    });
  }
  setNodeChildren(children) {
    this.treeViewLookupService.registerChildren(this.parentIndex, children);
  }
  mapToTreeItem(data) {
    if (!this.parentIndex) {
      return [];
    }
    return data.map((dataItem, idx) => ({
      dataItem,
      index: this.nodeIndex(idx)
    }));
  }
  emitChildrenLoaded(children) {
    if (!this.parentIndex) {
      return;
    }
    const contentChildren = children.filter((item) => item.dataItem);
    this.nodeChildrenService.childrenLoaded({
      dataItem: this.parentDataItem,
      index: this.parentIndex
    }, contentChildren);
  }
  subscribeToNodesChange() {
    if (this.nodesSubscription) {
      this.nodesSubscription.unsubscribe();
    }
    this.nodesSubscription = this.nodes(this.parentDataItem, this.parentIndex).subscribe((data) => {
      this.data = data;
      this.initialNodesLoaded = true;
    });
  }
  reselectItemAt(index) {
    if (!isPresent(index)) {
      return;
    }
    this.navigationService.deactivate();
    this.navigationService.activateIndex(index);
  }
  registerLoadedNodes(nodes = []) {
    const mappedChildren = this.mapToTreeItem(nodes);
    if (this.loadOnDemand) {
      this.setNodeChildren(mappedChildren);
    }
    this.emitChildrenLoaded(mappedChildren);
  }
};
TreeViewGroupComponent.ɵfac = function TreeViewGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewGroupComponent)(ɵɵdirectiveInject(ExpandStateService), ɵɵdirectiveInject(LoadingNotificationService), ɵɵdirectiveInject(IndexBuilderService), ɵɵdirectiveInject(TreeViewLookupService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NodeChildrenService), ɵɵdirectiveInject(DataChangeNotificationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2));
};
TreeViewGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeViewGroupComponent,
  selectors: [["", "kendoTreeViewGroup", ""]],
  hostVars: 3,
  hostBindings: function TreeViewGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("k-treeview-group", ctx.kGroupClass);
    }
  },
  inputs: {
    checkboxes: "checkboxes",
    expandIcons: "expandIcons",
    disabled: "disabled",
    selectable: "selectable",
    touchActions: "touchActions",
    disableParentNodesOnly: "disableParentNodesOnly",
    loadOnDemand: "loadOnDemand",
    trackBy: "trackBy",
    nodes: "nodes",
    textField: "textField",
    parentDataItem: "parentDataItem",
    parentIndex: "parentIndex",
    nodeTemplateRef: "nodeTemplateRef",
    loadMoreButtonTemplateRef: "loadMoreButtonTemplateRef",
    loadMoreService: "loadMoreService",
    size: "size",
    expandDisabledNodes: "expandDisabledNodes",
    isChecked: "isChecked",
    isDisabled: "isDisabled",
    hasCheckbox: "hasCheckbox",
    isExpanded: "isExpanded",
    isVisible: "isVisible",
    isSelected: "isSelected",
    children: "children",
    hasChildren: "hasChildren"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 2,
  vars: 3,
  consts: [["checkbox", ""], ["class", "k-treeview-item", "kendoTreeViewItem", "", 3, "k-hidden", "dataItem", "index", "parentDataItem", "parentIndex", "loadOnDemand", "checkable", "isChecked", "isDisabled", "isVisible", "expandable", "isExpanded", "selectable", "isSelected", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "k-treeview-item", "kendoTreeViewItem", "", "role", "button", 3, "k-treeview-load-more-checkboxes-container", "selectable", "checkable", "expandable", "index", "parentDataItem", "parentIndex", 4, "ngIf"], ["kendoTreeViewItem", "", 1, "k-treeview-item", 3, "dataItem", "index", "parentDataItem", "parentIndex", "loadOnDemand", "checkable", "isChecked", "isDisabled", "isVisible", "expandable", "isExpanded", "selectable", "isSelected"], [3, "ngClass"], ["class", "k-treeview-toggle", 3, "k-disabled", "kendoTreeViewLoading", "click", 4, "ngIf"], [3, "disabled", "size", "checkedState", "tabindex", "inputAttributes", "checkedStateChange", 4, "ngIf"], ["kendoTreeViewItemContent", "", 1, "k-treeview-leaf", 3, "id", "dataItem", "index", "initialSelection", "isSelected"], [1, "k-treeview-leaf-text"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["kendoTreeViewGroup", "", "role", "group", 3, "size", "nodes", "loadOnDemand", "checkboxes", "expandIcons", "selectable", "touchActions", "children", "hasChildren", "isChecked", "isDisabled", "hasCheckbox", "disabled", "expandDisabledNodes", "isExpanded", "isSelected", "isVisible", "nodeTemplateRef", "loadMoreButtonTemplateRef", "parentIndex", "parentDataItem", "textField", "loadMoreService", "trackBy", "disableParentNodesOnly", 4, "ngIf"], [1, "k-treeview-toggle", 3, "click", "kendoTreeViewLoading"], [3, "name", "svgIcon"], [3, "checkedStateChange", "disabled", "size", "checkedState", "tabindex", "inputAttributes"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoTreeViewGroup", "", "role", "group", 3, "size", "nodes", "loadOnDemand", "checkboxes", "expandIcons", "selectable", "touchActions", "children", "hasChildren", "isChecked", "isDisabled", "hasCheckbox", "disabled", "expandDisabledNodes", "isExpanded", "isSelected", "isVisible", "nodeTemplateRef", "loadMoreButtonTemplateRef", "parentIndex", "parentDataItem", "textField", "loadMoreService", "trackBy", "disableParentNodesOnly"], ["kendoTreeViewItem", "", "role", "button", 1, "k-treeview-item", 3, "selectable", "checkable", "expandable", "index", "parentDataItem", "parentIndex"], [1, "k-treeview-bot"], ["class", "k-icon k-i-loading", 4, "ngIf"], ["kendoTreeViewItemContent", "", 1, "k-treeview-leaf", "k-treeview-load-more-button", 3, "index"], [4, "ngIf"], [1, "k-icon", "k-i-loading"]],
  template: function TreeViewGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TreeViewGroupComponent_li_0_Template, 10, 33, "li", 1)(1, TreeViewGroupComponent_li_1_Template, 7, 14, "li", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.initialNodesLoaded && ctx.moreNodesAvailable);
    }
  },
  dependencies: [TreeViewGroupComponent, NgForOf, TreeViewItemDirective, NgClass, NgIf, LoadingIndicatorDirective, IconWrapperComponent, CheckBoxComponent, TreeViewItemContentDirective, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault],
  encapsulation: 2,
  data: {
    animation: [trigger("toggle", [transition("void => *", [style({
      height: 0
    }), animate("0.1s ease-in", style({
      height: "*"
    }))]), transition("* => void", [style({
      height: "*"
    }), animate("0.1s ease-in", style({
      height: 0
    }))])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewGroupComponent, [{
    type: Component,
    args: [{
      animations: [trigger("toggle", [transition("void => *", [style({
        height: 0
      }), animate("0.1s ease-in", style({
        height: "*"
      }))]), transition("* => void", [style({
        height: "*"
      }), animate("0.1s ease-in", style({
        height: 0
      }))])])],
      // eslint-disable-next-line
      selector: "[kendoTreeViewGroup]",
      template: `
        <li
            *ngFor="let node of data; let index = index; trackBy: trackBy"
            class="k-treeview-item"
            [class.k-hidden]="!isVisible(node, nodeIndex(index))"
            kendoTreeViewItem
            [attr.aria-setsize]="totalNodesCount"
            [dataItem]="node"
            [index]="nodeIndex(index)"
            [parentDataItem]="parentDataItem"
            [parentIndex]="parentIndex"
            [loadOnDemand]="loadOnDemand"
            [checkable]="checkboxes"
            [isChecked]="isChecked(node, nodeIndex(index))"
            [isDisabled]="isItemDisabled(node, index)"
            [isVisible]="isVisible(node, nodeIndex(index))"
            [expandable]="expandIcons && hasChildren(node)"
            [isExpanded]="isExpanded(node, nodeIndex(index))"
            [selectable]="selectable"
            [isSelected]="isSelected(node, nodeIndex(index))"
            [attr.data-treeindex]="nodeIndex(index)"
        >
            <div [ngClass]="setItemClasses(data.length, index)">
                <span
                    [class.k-disabled]="!isItemExpandable(node, index)"
                    class="k-treeview-toggle"
                    [kendoTreeViewLoading]="nodeIndex(index)"
                    (click)="expandNode(nodeIndex(index), node, !isExpanded(node, nodeIndex(index)))"
                    *ngIf="expandIcons && hasChildren(node)"
                >
                    <kendo-icon-wrapper
                        [name]="getFontIcon(node, nodeIndex(index))"
                        [svgIcon]="getSvgIcon(node, nodeIndex(index))">
                    </kendo-icon-wrapper>
                </span>
                <kendo-checkbox
                    #checkbox
                    *ngIf="checkboxes && hasCheckbox(node, nodeIndex(index))"
                    [disabled]="isItemDisabled(node, index)"
                    [size]="size"
                    [checkedState]="getCheckBoxState(node, nodeIndex(index))"
                    (checkedStateChange)="checkNode(nodeIndex(index), checkbox)"
                    [tabindex]="-1"
                    [inputAttributes]="getCheckboxAttributes(index)"
                ></kendo-checkbox>
                <span kendoTreeViewItemContent
                    [id]="nodeIndex(index)"
                    [attr.data-treeindex]="nodeIndex(index)"
                    [dataItem]="node"
                    [index]="nodeIndex(index)"
                    [initialSelection]="isSelected(node, nodeIndex(index))"
                    [isSelected]="isSelected"
                    class="k-treeview-leaf"
                    [style.touch-action]="touchActions ? '' : 'none'"
                    [class.k-disabled]="isItemDisabled(node, index)"
                >
                    <span class="k-treeview-leaf-text">
                        <ng-container [ngSwitch]="hasTemplate">
                            <ng-container *ngSwitchCase="true">
                                <ng-template
                                    [ngTemplateOutlet]="nodeTemplateRef"
                                    [ngTemplateOutletContext]="{
                                        $implicit: node,
                                        index: nodeIndex(index)
                                    }"
                                >
                                </ng-template>
                            </ng-container>
                            <ng-container *ngSwitchDefault>
                                {{nodeText(node)}}
                            </ng-container>
                        </ng-container>
                    </span>
                </span>
            </div>
            <ul
                *ngIf="isExpanded(node, nodeIndex(index)) && hasChildren(node)"
                kendoTreeViewGroup
                role="group"
                [size]="size"
                [nodes]="fetchChildren"
                [loadOnDemand]="loadOnDemand"
                [checkboxes]="checkboxes"
                [expandIcons]="expandIcons"
                [selectable]="selectable"
                [touchActions]="touchActions"
                [children]="children"
                [hasChildren]="hasChildren"
                [isChecked]="isChecked"
                [isDisabled]="isDisabled"
                [hasCheckbox]="hasCheckbox"
                [disabled]="isItemDisabled(node, index)"
                [expandDisabledNodes]="expandDisabledNodes"
                [isExpanded]="isExpanded"
                [isSelected]="isSelected"
                [isVisible]="isVisible"
                [nodeTemplateRef]="nodeTemplateRef"
                [loadMoreButtonTemplateRef]="loadMoreButtonTemplateRef"
                [parentIndex]="nodeIndex(index)"
                [parentDataItem]="node"
                [textField]="nextFields"
                [loadMoreService]="loadMoreService"
                [@toggle]="true"
                [trackBy]="trackBy"
                [disableParentNodesOnly]="disableParentNodesOnly"
            >
            </ul>
        </li>
        <li
            *ngIf="initialNodesLoaded && moreNodesAvailable"
            class="k-treeview-item"
            [class.k-treeview-load-more-checkboxes-container]="checkboxes"
            kendoTreeViewItem
            role="button"
            [selectable]="false"
            [checkable]="false"
            [expandable]="false"
            [index]="loadMoreButtonIndex"
            [parentDataItem]="parentDataItem"
            [parentIndex]="parentIndex"
            [attr.data-treeindex]="loadMoreButtonIndex"
        >
            <div class="k-treeview-bot">
                <span
                    *ngIf="loadingMoreNodes"
                    class="k-icon k-i-loading"
                >
                </span>
                <span
                    class="k-treeview-leaf k-treeview-load-more-button"
                    [attr.data-treeindex]="loadMoreButtonIndex"
                    kendoTreeViewItemContent
                    [index]="loadMoreButtonIndex"
                >
                    <span class="k-treeview-leaf-text">
                        <ng-template
                            *ngIf="loadMoreButtonTemplateRef"
                            [ngTemplateOutlet]="loadMoreButtonTemplateRef"
                            [ngTemplateOutletContext]="{
                                index: loadMoreButtonIndex
                            }"
                        >
                        </ng-template>
                        <ng-container *ngIf="!loadMoreButtonTemplateRef">
                            {{ loadMoreTitle }}
                        </ng-container>
                    </span>
                </span>
            </div>
        </li>
    `,
      standalone: true,
      imports: [NgForOf, TreeViewItemDirective, NgClass, NgIf, LoadingIndicatorDirective, IconWrapperComponent, CheckBoxComponent, TreeViewItemContentDirective, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault]
    }]
  }], function() {
    return [{
      type: ExpandStateService
    }, {
      type: LoadingNotificationService
    }, {
      type: IndexBuilderService
    }, {
      type: TreeViewLookupService
    }, {
      type: NavigationService
    }, {
      type: NodeChildrenService
    }, {
      type: DataChangeNotificationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }];
  }, {
    kGroupClass: [{
      type: HostBinding,
      args: ["class.k-treeview-group"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    checkboxes: [{
      type: Input
    }],
    expandIcons: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    touchActions: [{
      type: Input
    }],
    disableParentNodesOnly: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    nodes: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    parentDataItem: [{
      type: Input
    }],
    parentIndex: [{
      type: Input
    }],
    nodeTemplateRef: [{
      type: Input
    }],
    loadMoreButtonTemplateRef: [{
      type: Input
    }],
    loadMoreService: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    expandDisabledNodes: [{
      type: Input
    }],
    isChecked: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    hasCheckbox: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    isVisible: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    children: [{
      type: Input
    }],
    hasChildren: [{
      type: Input
    }]
  });
})();
var TreeViewMessages = class extends ComponentMessages {
};
TreeViewMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵTreeViewMessages_BaseFactory;
  return function TreeViewMessages_Factory(__ngFactoryType__) {
    return (ɵTreeViewMessages_BaseFactory || (ɵTreeViewMessages_BaseFactory = ɵɵgetInheritedFactory(TreeViewMessages)))(__ngFactoryType__ || TreeViewMessages);
  };
})();
TreeViewMessages.ɵdir = ɵɵdefineDirective({
  type: TreeViewMessages,
  selectors: [["kendo-treeview-messages-base"]],
  inputs: {
    loadMore: "loadMore"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-treeview-messages-base"
    }]
  }], null, {
    loadMore: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class extends TreeViewMessages {
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
  selectors: [["", "kendoTreeViewLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TreeViewMessages,
    useExisting: forwardRef(() => LocalizedMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TreeViewMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: "[kendoTreeViewLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var nextId = 0;
var LOAD_MORE_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/treeview/load-more-button/";
var providers = [ExpandStateService, IndexBuilderService, TreeViewLookupService, LoadingNotificationService, NodeChildrenService, NavigationService, SelectionService, DataChangeNotificationService, LocalizationService, {
  provide: L10N_PREFIX,
  useValue: "kendo.treeview"
}, {
  provide: DataBoundComponent,
  useExisting: forwardRef(() => TreeViewComponent)
}, {
  provide: ExpandableComponent,
  useExisting: forwardRef(() => TreeViewComponent)
}];
var TreeViewComponent = class {
  constructor(element, changeDetectorRef, expandService, navigationService, nodeChildrenService, selectionService, treeViewLookupService, ngZone, renderer, dataChangeNotification, localization) {
    this.element = element;
    this.changeDetectorRef = changeDetectorRef;
    this.expandService = expandService;
    this.navigationService = navigationService;
    this.nodeChildrenService = nodeChildrenService;
    this.selectionService = selectionService;
    this.treeViewLookupService = treeViewLookupService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.dataChangeNotification = dataChangeNotification;
    this.localization = localization;
    this.searchIcon = searchIcon;
    this.classNames = true;
    this.filterInputPlaceholder = "";
    this.fetchNodes = () => this.data;
    this.childrenLoaded = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.expand = new EventEmitter();
    this.collapse = new EventEmitter();
    this.nodeDragStart = new EventEmitter();
    this.nodeDrag = new EventEmitter();
    this.filterStateChange = new EventEmitter();
    this.nodeDrop = new EventEmitter();
    this.nodeDragEnd = new EventEmitter();
    this.addItem = new EventEmitter();
    this.removeItem = new EventEmitter();
    this.checkedChange = new EventEmitter();
    this.selectionChange = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.nodeClick = new EventEmitter();
    this.nodeDblClick = new EventEmitter();
    this.trackBy = trackBy;
    this.isDisabled = isDisabled;
    this.hasCheckbox = hasCheckbox;
    this.isVisible = isVisible;
    this.navigable = true;
    this.children = () => of([]);
    this.loadOnDemand = true;
    this.filterable = false;
    this.filter = "";
    this.disableParentNodesOnly = false;
    this.checkboxes = false;
    this.expandIcons = false;
    this.selectable = false;
    this.touchActions = true;
    this.data = new BehaviorSubject([]);
    this._animate = true;
    this._size = "medium";
    this.subscriptions = new Subscription();
    this.domSubscriptions = [];
    this._nextId = nextId;
    validatePackage(packageMetadata);
    nextId++;
  }
  /** @hidden */
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  /**
   * Determines whether the content animation is enabled.
   */
  set animate(value) {
    this._animate = value;
  }
  get animate() {
    return !this._animate;
  }
  /**
   * @hidden
   *
   * Defines the template for each node.
   * Takes precedence over nested templates in the TreeView tag.
   */
  set nodeTemplateRef(template) {
    this._nodeTemplateRef = template;
  }
  get nodeTemplateRef() {
    return this._nodeTemplateRef || this.nodeTemplateQuery;
  }
  /**
   * @hidden
   *
   * Defines the template for each load-more button.
   * Takes precedence over nested templates in the TreeView tag.
   */
  set loadMoreButtonTemplateRef(template) {
    this._loadMoreButtonTemplateRef = template;
  }
  get loadMoreButtonTemplateRef() {
    return this._loadMoreButtonTemplateRef || this.loadMoreButtonTemplateQuery;
  }
  /**
   * The nodes which will be displayed by the TreeView
   * ([see example]({% slug databinding_treeview %})).
   */
  set nodes(value) {
    this.data.next(value || []);
    this.dataChangeNotification.notify();
  }
  get nodes() {
    return this.data.value;
  }
  /**
   * A function which determines if a specific node has child nodes
   * ([see example]({% slug databinding_treeview %})).
   */
  get hasChildren() {
    return this._hasChildren || hasChildren;
  }
  set hasChildren(callback) {
    this._hasChildren = callback;
    this.expandIcons = Boolean(this._isExpanded && this._hasChildren);
  }
  /**
   * A function which determines if a specific node is checked
   * ([see example]({% slug checkboxes_treeview %}#toc-modifying-the-checked-state)).
   */
  get isChecked() {
    return this._isChecked || isChecked;
  }
  set isChecked(callback) {
    this._isChecked = callback;
    this.checkboxes = Boolean(this._isChecked);
  }
  /**
   * A function which determines if a specific node is expanded.
   */
  get isExpanded() {
    return this._isExpanded || isExpanded;
  }
  set isExpanded(callback) {
    this._isExpanded = callback;
    this.expandIcons = Boolean(this._isExpanded && this._hasChildren);
  }
  /**
   * A function which determines if a specific node is selected
   * ([see example]({% slug selection_treeview %}#toc-modifying-the-selection)).
   */
  get isSelected() {
    return this._isSelected || isSelected;
  }
  set isSelected(callback) {
    this._isSelected = callback;
    this.selectable = Boolean(this._isSelected);
  }
  /**
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : "medium";
    if (this.size !== "none") {
      this.renderer.removeClass(this.element.nativeElement, getSizeClass("treeview", this.size));
    }
    this.renderer.addClass(this.element.nativeElement, getSizeClass("treeview", newSize));
    this._size = size;
  }
  get size() {
    return this._size;
  }
  get isActive() {
    return this.navigationService.isTreeViewActive;
  }
  /**
   * @hidden
   */
  get treeviewId() {
    return `treeview_${this._nextId}`;
  }
  ngOnChanges(changes) {
    this.navigationService.navigable = Boolean(this.navigable);
    if (anyChanged(["nodes", "children", "hasChildren", "loadOnDemand"], changes, false) && !this.loadOnDemand) {
      this.preloadChildNodes();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.domSubscriptions.forEach((subscription) => subscription());
  }
  ngOnInit() {
    this.subscriptions.add(this.nodeChildrenService.changes.subscribe((x) => this.childrenLoaded.emit(x)));
    this.subscriptions.add(this.expandService.changes.subscribe(({
      index,
      dataItem,
      expand
    }) => expand ? this.expand.emit({
      index,
      dataItem
    }) : this.collapse.emit({
      index,
      dataItem
    })));
    this.subscriptions.add(this.navigationService.checks.subscribe((x) => this.checkedChange.emit(this.treeViewLookupService.itemLookup(x))));
    this.subscriptions.add(this.selectionService.changes.subscribe((x) => {
      if (hasObservers(this.selectionChange)) {
        this.ngZone.run(() => {
          this.selectionChange.emit(x);
        });
      }
    }));
    if (this.element) {
      this.ngZone.runOutsideAngular(() => {
        this.attachDomHandlers();
      });
    }
    if (this.size) {
      this.renderer.addClass(this.element.nativeElement, getSizeClass("treeview", this.size));
    }
  }
  ngAfterViewInit() {
    if (this.searchbox) {
      this.renderer.setAttribute(this.searchbox.input.nativeElement, "role", "searchbox");
      this.renderer.setAttribute(this.searchbox.input.nativeElement, "aria-controls", this.treeviewId);
      this.renderer.setAttribute(this.searchbox.input.nativeElement, "aria-label", "searchbar");
    }
  }
  /**
   * Blurs the focused TreeView item.
   */
  blur() {
    if (!isDocumentAvailable()) {
      return;
    }
    const target = focusableNode(this.element);
    if (document.activeElement === target) {
      target.blur();
    }
  }
  /**
   * Focuses the first focusable item in the TreeView component if no hierarchical index is provided.
   *
   * @example
   * ```ts
   * import { Component } from '@angular/core';
   *
   *  @Component({
   *      selector: 'my-app',
   *      template: `
   *      <button (click)="treeview.focus('1')">Focuses the second node</button>
   *      <kendo-treeview
   *          #treeview
   *          [nodes]="data"
   *          textField="text"
   *      >
   *      </kendo-treeview>
   *  `
   *  })
   *  export class AppComponent {
   *      public data: any[] = [
   *          { text: "Furniture" },
   *          { text: "Decor" }
   *      ];
   *  }
   * ```
   */
  focus(index) {
    const focusIndex = index || nodeIndex(this.navigationService.focusableItem);
    this.navigationService.activateIndex(focusIndex);
    const target = focusableNode(this.element);
    if (target) {
      target.focus();
    }
  }
  /**
   * Based on the specified index, returns the TreeItemLookup node.
   *
   * @param index - The index of the node.
   * @returns {TreeItemLookup} - The item that was searched (looked up).
   */
  itemLookup(index) {
    return this.treeViewLookupService.itemLookup(index);
  }
  /**
   * Triggers the [`children`]({% slug api_treeview_treeviewcomponent %}#toc-children) function for every expanded node,
   * causing all rendered child nodes to be fetched again.
   */
  rebindChildren() {
    this.dataChangeNotification.notify();
  }
  /**
   * Triggers the `expand` event for the provided node and displays it's loading indicator.
   */
  expandNode(item, index) {
    this.expandService.expand(index, item);
  }
  /**
   * Triggers the `collapse` event for the provided node.
   */
  collapseNode(item, index) {
    this.expandService.collapse(index, item);
  }
  /**
   * Gets the current page size of the checked data item children collection
   * ([see example]({% slug loadmorebutton_treeview %}#toc-managing-page-sizes)).
   *
   * > Since the root nodes collection is not associated with any parent data item, pass `null` as `dataItem` param to get its page size.
   *
   * @param dataItem {any} - The parent data item of the targeted collection.
   * @returns {number} - The page size of the checked data item children collection.
   */
  getNodePageSize(dataItem) {
    this.verifyLoadMoreService();
    return this.loadMoreService.getGroupSize(dataItem);
  }
  /**
   * Sets the page size of the targeted data item children collection
   * ([see example]({% slug loadmorebutton_treeview %}#toc-managing-page-sizes)).
   *
   * > Since the root nodes collection is not associated with any parent data item, pass `null` as `dataItem` param to target its page size.
   *
   * @param dataItem {any} - The parent data item of the targeted collection.
   * @param pageSize {number} - The new page size.
   */
  setNodePageSize(dataItem, pageSize) {
    this.verifyLoadMoreService();
    this.loadMoreService.setGroupSize(dataItem, pageSize);
  }
  /**
   * @hidden
   *
   * Clears the current TreeViewLookupService node map and re-registers all nodes anew.
   * Child nodes are acquired through the provided `children` callback.
   */
  preloadChildNodes() {
    this.treeViewLookupService.reset();
    this.registerLookupItems(this.nodes);
  }
  attachDomHandlers() {
    const element = this.element.nativeElement;
    this.clickHandler = this.clickHandler.bind(this);
    this.domSubscriptions.push(this.renderer.listen(element, "contextmenu", this.clickHandler), this.renderer.listen(element, "click", this.clickHandler), this.renderer.listen(element, "dblclick", this.clickHandler), this.renderer.listen(element, "focusin", this.focusHandler.bind(this)), this.renderer.listen(element, "focusout", this.blurHandler.bind(this)), this.renderer.listen(element, "keydown", this.keydownHandler.bind(this)));
  }
  focusHandler(e) {
    let focusItem;
    if (match(e.target, ".k-treeview-item")) {
      focusItem = e.target;
    } else if (!isFocusable(e.target)) {
      focusItem = closestNode(e.target);
    }
    if (focusItem) {
      const nodeIndex2 = nodeId(e.target);
      if (this.navigationService.isDisabled(nodeIndex2)) {
        return;
      }
      this.navigationService.activateIndex(nodeIndex2);
      if (!this.isActive && hasObservers(this.onFocus)) {
        this.ngZone.run(() => {
          this.onFocus.emit();
        });
      }
      this.navigationService.isTreeViewActive = true;
    }
  }
  blurHandler(e) {
    if (this.isActive && match(e.target, ".k-treeview-item") && (!e.relatedTarget || !match(e.relatedTarget, ".k-treeview-item") || !hasParent(e.relatedTarget, this.element.nativeElement))) {
      this.navigationService.deactivate();
      this.navigationService.isTreeViewActive = false;
      if (hasObservers(this.onBlur)) {
        this.ngZone.run(() => {
          this.onBlur.emit();
        });
      }
    }
  }
  clickHandler(e) {
    const target = e.target;
    if (e.type === "contextmenu" && !hasObservers(this.nodeClick) || e.type === "click" && !hasObservers(this.nodeClick) && !hasObservers(this.selectionChange) && !isLoadMoreButton(target) || e.type === "dblclick" && !hasObservers(this.nodeDblClick) || isFocusable(target) || !isContent(target) && !isLoadMoreButton(target) || !hasParent(target, this.element.nativeElement)) {
      return;
    }
    const index = nodeId(closestNode(target));
    if (!index || this.navigationService.isDisabled(index)) {
      return;
    }
    this.ngZone.run(() => {
      const lookup = this.treeViewLookupService.itemLookup(index);
      if (e.type === "click") {
        const loadMoreButton = this.navigationService.model.findNode(index).loadMoreButton;
        if (loadMoreButton) {
          this.navigationService.notifyLoadMore(index);
          return;
        } else {
          this.navigationService.selectIndex(index);
        }
      }
      const emitter = e.type === "dblclick" ? this.nodeDblClick : this.nodeClick;
      emitter.emit({
        item: lookup.item,
        originalEvent: e,
        type: e.type
      });
    });
  }
  keydownHandler(e) {
    if (this.isActive && this.navigable) {
      this.ngZone.run(() => {
        this.navigationService.move(e);
      });
    }
  }
  verifyLoadMoreService() {
    if (isDevMode() && !isPresent(this.loadMoreService)) {
      throw new Error(`To use the TreeView paging functionality, you need to assign the \`kendoTreeViewLoadMore\` directive. See ${LOAD_MORE_DOC_LINK$1}.`);
    }
  }
  registerLookupItems(data, parentItem = null) {
    if (!isPresent(data) || data.length === 0) {
      return;
    }
    const parentIndex = nodeIndex(parentItem);
    const treeItems = data.map((node, index) => buildTreeItem(node, index, parentIndex));
    if (isPresent(parentItem)) {
      this.treeViewLookupService.registerChildren(parentIndex, treeItems);
    }
    treeItems.forEach((item) => {
      this.treeViewLookupService.registerItem(item, parentItem);
      if (this.hasChildren(item.dataItem)) {
        this.children(item.dataItem).subscribe((children) => this.registerLookupItems(children, item));
      }
    });
  }
};
TreeViewComponent.ɵfac = function TreeViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ExpandStateService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NodeChildrenService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(TreeViewLookupService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DataChangeNotificationService), ɵɵdirectiveInject(LocalizationService));
};
TreeViewComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeViewComponent,
  selectors: [["kendo-treeview"]],
  contentQueries: function TreeViewComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NodeTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, LoadMoreButtonTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplateQuery = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadMoreButtonTemplateQuery = _t.first);
    }
  },
  viewQuery: function TreeViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7, ViewContainerRef);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.assetsContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchbox = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function TreeViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.animate);
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-treeview", ctx.classNames);
    }
  },
  inputs: {
    filterInputPlaceholder: "filterInputPlaceholder",
    expandDisabledNodes: "expandDisabledNodes",
    animate: "animate",
    nodeTemplateRef: [0, "nodeTemplate", "nodeTemplateRef"],
    loadMoreButtonTemplateRef: [0, "loadMoreButtonTemplate", "loadMoreButtonTemplateRef"],
    trackBy: "trackBy",
    nodes: "nodes",
    textField: "textField",
    hasChildren: "hasChildren",
    isChecked: "isChecked",
    isDisabled: "isDisabled",
    hasCheckbox: "hasCheckbox",
    isExpanded: "isExpanded",
    isSelected: "isSelected",
    isVisible: "isVisible",
    navigable: "navigable",
    children: "children",
    loadOnDemand: "loadOnDemand",
    filterable: "filterable",
    filter: "filter",
    size: "size",
    disableParentNodesOnly: "disableParentNodesOnly"
  },
  outputs: {
    childrenLoaded: "childrenLoaded",
    onBlur: "blur",
    onFocus: "focus",
    expand: "expand",
    collapse: "collapse",
    nodeDragStart: "nodeDragStart",
    nodeDrag: "nodeDrag",
    filterStateChange: "filterStateChange",
    nodeDrop: "nodeDrop",
    nodeDragEnd: "nodeDragEnd",
    addItem: "addItem",
    removeItem: "removeItem",
    checkedChange: "checkedChange",
    selectionChange: "selectionChange",
    filterChange: "filterChange",
    nodeClick: "nodeClick",
    nodeDblClick: "nodeDblClick"
  },
  exportAs: ["kendoTreeView"],
  standalone: true,
  features: [ɵɵProvidersFeature(providers), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 24,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TREEVIEW_FESM2020_PROGRESS_KENDO_ANGULAR_TREEVIEW_MJS_0 = goog.getMsg("Load more...");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_USERTEMP_USERWS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TREEVIEW_FESM2020_PROGRESS_KENDO_ANGULAR_TREEVIEW_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.treeview.loadMore|The title of the Load More button:Load more...`;
    }
    return [["assetsContainer", ""], ["searchbox", ""], ["kendoTreeViewLocalizedMessages", "", "loadMore", i18n_0], ["class", "k-treeview-filter", 4, "ngIf"], ["kendoTreeViewGroup", "", "role", "tree", 1, "k-treeview-lines", 3, "size", "loadOnDemand", "checkboxes", "expandIcons", "selectable", "touchActions", "children", "hasChildren", "isChecked", "isDisabled", "hasCheckbox", "disableParentNodesOnly", "isExpanded", "isSelected", "isVisible", "nodeTemplateRef", "loadMoreButtonTemplateRef", "textField", "nodes", "loadMoreService", "trackBy", "expandDisabledNodes"], [1, "k-treeview-filter"], [3, "valueChange", "size", "value", "clearButton", "placeholder"], ["kendoTextBoxPrefixTemplate", ""], ["innerCssClass", "k-input-icon", "name", "search", 3, "svgIcon"]];
  },
  template: function TreeViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 2);
      ɵɵtemplate(1, TreeViewComponent_span_1_Template, 4, 4, "span", 3);
      ɵɵelement(2, "ul", 4);
      ɵɵelementContainer(3, null, 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.filterable);
      ɵɵadvance();
      ɵɵproperty("size", ctx.size)("loadOnDemand", ctx.loadOnDemand)("checkboxes", ctx.checkboxes)("expandIcons", ctx.expandIcons)("selectable", ctx.selectable)("touchActions", ctx.touchActions)("children", ctx.children)("hasChildren", ctx.hasChildren)("isChecked", ctx.isChecked)("isDisabled", ctx.isDisabled)("hasCheckbox", ctx.hasCheckbox)("disableParentNodesOnly", ctx.disableParentNodesOnly)("isExpanded", ctx.isExpanded)("isSelected", ctx.isSelected)("isVisible", ctx.isVisible)("nodeTemplateRef", ctx.nodeTemplateRef == null ? null : ctx.nodeTemplateRef.templateRef)("loadMoreButtonTemplateRef", ctx.loadMoreButtonTemplateRef == null ? null : ctx.loadMoreButtonTemplateRef.templateRef)("textField", ctx.textField)("nodes", ctx.fetchNodes)("loadMoreService", ctx.loadMoreService)("trackBy", ctx.trackBy)("expandDisabledNodes", ctx.expandDisabledNodes);
      ɵɵattribute("id", ctx.treeviewId);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgIf, TextBoxComponent, TextBoxPrefixTemplateDirective, IconWrapperComponent, TreeViewGroupComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.Default,
      exportAs: "kendoTreeView",
      providers,
      selector: "kendo-treeview",
      template: `
        <ng-container kendoTreeViewLocalizedMessages
            i18n-loadMore="kendo.treeview.loadMore|The title of the Load More button"
            loadMore="Load more..."
        >
        </ng-container>
        <span
            class="k-treeview-filter"
            *ngIf="filterable"
        >
            <kendo-textbox
                #searchbox
                [size]="size"
                [value]="filter"
                [clearButton]="true"
                (valueChange)="filterChange.emit($event)"
                [placeholder]="filterInputPlaceholder"
            >
                <ng-template kendoTextBoxPrefixTemplate>
                    <kendo-icon-wrapper
                        innerCssClass="k-input-icon"
                        name="search"
                        [svgIcon]="searchIcon"
                        >
                    </kendo-icon-wrapper>
                </ng-template>
            </kendo-textbox>
        </span>
        <ul class="k-treeview-lines"
            kendoTreeViewGroup
            [attr.id]="treeviewId"
            role="tree"
            [size]="size"
            [loadOnDemand]="loadOnDemand"
            [checkboxes]="checkboxes"
            [expandIcons]="expandIcons"
            [selectable]="selectable"
            [touchActions]="touchActions"
            [children]="children"
            [hasChildren]="hasChildren"
            [isChecked]="isChecked"
            [isDisabled]="isDisabled"
            [hasCheckbox]="hasCheckbox"
            [disableParentNodesOnly]="disableParentNodesOnly"
            [isExpanded]="isExpanded"
            [isSelected]="isSelected"
            [isVisible]="isVisible"
            [nodeTemplateRef]="nodeTemplateRef?.templateRef"
            [loadMoreButtonTemplateRef]="loadMoreButtonTemplateRef?.templateRef"
            [textField]="textField"
            [nodes]="fetchNodes"
            [loadMoreService]="loadMoreService"
            [trackBy]="trackBy"
            [expandDisabledNodes]="expandDisabledNodes"
        >
        </ul>
        <ng-container #assetsContainer></ng-container>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgIf, TextBoxComponent, TextBoxPrefixTemplateDirective, IconWrapperComponent, TreeViewGroupComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: ExpandStateService
    }, {
      type: NavigationService
    }, {
      type: NodeChildrenService
    }, {
      type: SelectionService
    }, {
      type: TreeViewLookupService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: DataChangeNotificationService
    }, {
      type: LocalizationService
    }];
  }, {
    classNames: [{
      type: HostBinding,
      args: ["class.k-treeview"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    assetsContainer: [{
      type: ViewChild,
      args: ["assetsContainer", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    searchbox: [{
      type: ViewChild,
      args: ["searchbox"]
    }],
    filterInputPlaceholder: [{
      type: Input
    }],
    expandDisabledNodes: [{
      type: Input
    }],
    animate: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["@.disabled"]
    }],
    childrenLoaded: [{
      type: Output
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    nodeDragStart: [{
      type: Output
    }],
    nodeDrag: [{
      type: Output
    }],
    filterStateChange: [{
      type: Output
    }],
    nodeDrop: [{
      type: Output
    }],
    nodeDragEnd: [{
      type: Output
    }],
    addItem: [{
      type: Output
    }],
    removeItem: [{
      type: Output
    }],
    checkedChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    nodeClick: [{
      type: Output
    }],
    nodeDblClick: [{
      type: Output
    }],
    nodeTemplateQuery: [{
      type: ContentChild,
      args: [NodeTemplateDirective, {
        static: false
      }]
    }],
    nodeTemplateRef: [{
      type: Input,
      args: ["nodeTemplate"]
    }],
    loadMoreButtonTemplateQuery: [{
      type: ContentChild,
      args: [LoadMoreButtonTemplateDirective, {
        static: false
      }]
    }],
    loadMoreButtonTemplateRef: [{
      type: Input,
      args: ["loadMoreButtonTemplate"]
    }],
    trackBy: [{
      type: Input
    }],
    nodes: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    hasChildren: [{
      type: Input
    }],
    isChecked: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    hasCheckbox: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    isVisible: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    children: [{
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
    size: [{
      type: Input
    }],
    disableParentNodesOnly: [{
      type: Input
    }]
  });
})();
var indexChecked = (keys, index) => keys.filter((k) => k === index).length > 0;
var matchKey = (index) => (k) => {
  if (index === k) {
    return true;
  }
  if (!k.split) {
    return false;
  }
  return k.split("_").reduce(({
    key,
    result
  }, part) => {
    key += part;
    if (index === key || result) {
      return {
        result: true
      };
    }
    key += "_";
    return {
      key,
      result: false
    };
  }, {
    key: "",
    result: false
  }).result;
};
var CheckDirective = class {
  constructor(treeView, zone) {
    this.treeView = treeView;
    this.zone = zone;
    this.checkedKeysChange = new EventEmitter();
    this.subscriptions = new Subscription();
    this.checkActions = {
      "multiple": (e) => this.checkMultiple(e),
      "single": (e) => this.checkSingle(e)
    };
    this.state = /* @__PURE__ */ new Set();
    this.subscriptions.add(this.treeView.checkedChange.subscribe((e) => this.check(e)));
    const expandedItems = [];
    this.subscriptions.add(this.treeView.childrenLoaded.pipe(filter(() => this.options.checkChildren && this.treeView.loadOnDemand), tap((item) => expandedItems.push(item)), switchMap(() => this.zone.onStable.pipe(take(1)))).subscribe(() => this.addCheckedItemsChildren(expandedItems)));
    this.treeView.isChecked = this.isItemChecked.bind(this);
  }
  /**
   * @hidden
   */
  set isChecked(value) {
    this.treeView.isChecked = value;
  }
  get options() {
    const defaultOptions = {
      checkChildren: true,
      checkParents: true,
      enabled: true,
      mode: "multiple",
      uncheckCollapsedChildren: false
    };
    if (!isPresent(this.checkable) || typeof this.checkable === "string") {
      return defaultOptions;
    }
    const checkSettings = isBoolean(this.checkable) ? {
      enabled: this.checkable
    } : this.checkable;
    return Object.assign(defaultOptions, checkSettings);
  }
  ngOnChanges(changes) {
    if (changes.checkable) {
      this.treeView.checkboxes = this.options.enabled;
      this.toggleCheckOnClick();
    }
    if (isChanged("checkedKeys", changes, false) && changes.checkedKeys.currentValue !== this.lastChange) {
      this.state = new Set(changes.checkedKeys.currentValue);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.unsubscribeClick();
  }
  isItemChecked(dataItem, index) {
    if (!this.checkKey) {
      return this.isIndexChecked(index);
    }
    const hasKey = this.state.has(this.itemKey({
      dataItem,
      index
    }));
    return hasKey ? "checked" : "none";
  }
  isIndexChecked(index) {
    const checkedKeys = Array.from(this.state).filter(matchKey(index));
    if (indexChecked(checkedKeys, index)) {
      return "checked";
    }
    const {
      mode,
      checkParents
    } = this.options;
    if (mode === "multiple" && checkParents && checkedKeys.length) {
      return "indeterminate";
    }
    return "none";
  }
  itemKey(item) {
    if (!isPresent(this.checkKey)) {
      return item.index;
    }
    if (typeof this.checkKey === "string" && isPresent(item.dataItem)) {
      return item.dataItem[this.checkKey];
    }
    if (typeof this.checkKey === "function") {
      return this.checkKey(item);
    }
  }
  check(e) {
    const {
      enabled,
      mode
    } = this.options;
    const performSelection = this.checkActions[mode] || noop;
    if (!enabled) {
      return;
    }
    performSelection(e);
  }
  checkSingle(node) {
    const key = this.itemKey(node.item);
    const hasKey = this.state.has(key);
    this.state.clear();
    if (!hasKey) {
      this.state.add(key);
    }
    this.notify();
  }
  checkMultiple(node) {
    this.checkNode(node);
    if (this.options.checkParents) {
      this.checkParents(node.parent);
    }
    this.notify();
  }
  toggleCheckOnClick() {
    this.unsubscribeClick();
    if (this.options.checkOnClick) {
      this.clickSubscription = this.treeView.nodeClick.subscribe((args) => {
        if (args.type === "click") {
          const lookup = this.treeView.itemLookup(args.item.index);
          this.check(lookup);
        }
      });
    }
  }
  unsubscribeClick() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
      this.clickSubscription = null;
    }
  }
  checkNode(node) {
    if (!isPresent(node.item.dataItem) || this.treeView.isDisabled(node.item.dataItem, node.item.index) || !this.treeView.hasCheckbox(node.item.dataItem, node.item.index)) {
      return;
    }
    const currentKey = this.itemKey(node.item);
    if (!isPresent(currentKey)) {
      return;
    }
    const pendingCheck = [currentKey];
    if (this.options.checkChildren) {
      const descendants = fetchLoadedDescendants(node, ({
        item
      }) => this.treeView.disableParentNodesOnly || this.options.checkDisabledChildren ? this.treeView.isVisible(item.dataItem, item.index) : this.treeView.isVisible(item.dataItem, item.index) && !this.treeView.isDisabled(item.dataItem, item.index) && this.treeView.hasCheckbox(item.dataItem, item.index));
      pendingCheck.push(...descendants.filter((item) => this.options.checkDisabledChildren || !this.treeView.isDisabled(item.item.dataItem, item.item.index) || this.treeView.hasCheckbox(item.item.dataItem, item.item.index)).map(({
        item
      }) => this.itemKey(item)));
    }
    const shouldCheck = !this.state.has(currentKey);
    pendingCheck.forEach((key) => {
      if (shouldCheck) {
        this.state.add(key);
      } else {
        this.state.delete(key);
        if (this.options.uncheckCollapsedChildren && this.options.mode === "multiple" && this.treeView.loadOnDemand) {
          if (this.checkKey && this.treeView.hasChildren(node.item.dataItem)) {
            this.uncheckChildren(node.item.dataItem, node.item.index);
            return;
          }
          const checkedKeys = Array.from(this.state).filter(matchKey(node.item.index));
          checkedKeys.forEach((key2) => this.state.delete(key2));
        }
      }
    });
  }
  uncheckChildren(dataItem, parentNodeIndex) {
    this.treeView.children(dataItem).subscribe((children) => children.forEach((item, index) => {
      const nodeIndex2 = `${parentNodeIndex}_${index}`;
      this.state.delete(this.itemKey({
        dataItem: item,
        index: nodeIndex2
      }));
      if (this.treeView.hasChildren(item)) {
        this.uncheckChildren(item, nodeIndex2);
      }
    }));
  }
  checkParents(parent) {
    if (!isPresent(parent)) {
      return;
    }
    let currentParent = parent;
    while (currentParent) {
      const parentKey = this.itemKey(currentParent.item);
      const isDisabled2 = this.treeView.isDisabled(currentParent.item.dataItem, currentParent.item.index);
      const allChildrenSelected = currentParent.children.every((item) => this.state.has(this.itemKey(item)));
      const hasCheckbox2 = this.treeView.hasCheckbox(currentParent.item.dataItem, currentParent.item.index);
      if (hasCheckbox2 && (!isDisabled2 || this.options.checkDisabledChildren) && allChildrenSelected) {
        this.state.add(parentKey);
      } else {
        this.state.delete(parentKey);
      }
      currentParent = currentParent.parent;
    }
  }
  allChildrenSelected(children) {
    return children.every((item) => {
      const childrenSel = this.allChildrenSelected(item.children);
      return this.state.has(this.itemKey(item.item)) && childrenSel;
    });
  }
  notify() {
    this.lastChange = Array.from(this.state);
    this.checkedKeysChange.emit(this.lastChange);
  }
  addCheckedItemsChildren(lookups) {
    if (!isPresent(lookups) || lookups.length === 0) {
      return;
    }
    const initiallyCheckedItemsCount = this.state.size;
    const disabledItems = /* @__PURE__ */ new Set();
    lookups.forEach((lookup) => {
      const itemKey = this.itemKey(lookup.item);
      if (!this.state.has(itemKey)) {
        return;
      }
      lookup.children.forEach((item) => {
        if (!this.treeView.isDisabled(lookup.item.dataItem, lookup.item.index) && !this.treeView.isDisabled(item.dataItem, item.index) && this.treeView.hasCheckbox(lookup.item.dataItem, lookup.item.index) && this.treeView.hasCheckbox(item.dataItem, item.index) || this.treeView.disableParentNodesOnly || this.options.checkDisabledChildren) {
          this.state.add(this.itemKey(item));
        }
        if (this.treeView.disableParentNodesOnly && !this.options.checkDisabledChildren && (this.treeView.isDisabled(item.dataItem, item.index) || !this.treeView.hasCheckbox(item.dataItem, item.index))) {
          disabledItems.add(this.itemKey(item));
        }
      });
    });
    disabledItems.forEach((item) => this.state.delete(item));
    const hasNewlyCheckedItems = initiallyCheckedItemsCount !== this.state.size;
    if (hasNewlyCheckedItems) {
      this.zone.run(() => this.notify());
    }
  }
};
CheckDirective.ɵfac = function CheckDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckDirective)(ɵɵdirectiveInject(TreeViewComponent), ɵɵdirectiveInject(NgZone));
};
CheckDirective.ɵdir = ɵɵdefineDirective({
  type: CheckDirective,
  selectors: [["", "kendoTreeViewCheckable", ""]],
  inputs: {
    isChecked: "isChecked",
    checkKey: [0, "checkBy", "checkKey"],
    checkedKeys: "checkedKeys",
    checkable: [0, "kendoTreeViewCheckable", "checkable"]
  },
  outputs: {
    checkedKeysChange: "checkedKeysChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewCheckable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }, {
      type: NgZone
    }];
  }, {
    isChecked: [{
      type: Input
    }],
    checkKey: [{
      type: Input,
      args: ["checkBy"]
    }],
    checkedKeys: [{
      type: Input
    }],
    checkable: [{
      type: Input,
      args: ["kendoTreeViewCheckable"]
    }],
    checkedKeysChange: [{
      type: Output
    }]
  });
})();
var DisableDirective = class {
  constructor(treeView, cdr) {
    this.treeView = treeView;
    this.cdr = cdr;
    this.disabledKeys = [];
    this.treeView.isDisabled = (dataItem, index) => this.disabledKeys.indexOf(this.itemKey({
      dataItem,
      index
    })) > -1;
  }
  /**
   * @hidden
   */
  set isDisabled(value) {
    this.treeView.isDisabled = value;
  }
  ngOnChanges(changes = {}) {
    const {
      disabledKeys
    } = changes;
    if (disabledKeys && !disabledKeys.firstChange) {
      this.cdr.markForCheck();
    }
  }
  itemKey(e) {
    if (!this.disableKey) {
      return e.index;
    }
    if (typeof this.disableKey === "string") {
      return e.dataItem[this.disableKey];
    }
    if (typeof this.disableKey === "function") {
      return this.disableKey(e);
    }
  }
};
DisableDirective.ɵfac = function DisableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DisableDirective)(ɵɵdirectiveInject(TreeViewComponent), ɵɵdirectiveInject(ChangeDetectorRef));
};
DisableDirective.ɵdir = ɵɵdefineDirective({
  type: DisableDirective,
  selectors: [["", "kendoTreeViewDisable", ""]],
  inputs: {
    isDisabled: "isDisabled",
    disableKey: [0, "kendoTreeViewDisable", "disableKey"],
    disabledKeys: "disabledKeys"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewDisable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    isDisabled: [{
      type: Input
    }],
    disableKey: [{
      type: Input,
      args: ["kendoTreeViewDisable"]
    }],
    disabledKeys: [{
      type: Input
    }]
  });
})();
var DragAndDropEditingDirective = class {
  constructor(treeview) {
    this.treeview = treeview;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.treeview.addItem.subscribe(this.handleAdd.bind(this)));
    this.subscriptions.add(this.treeview.removeItem.subscribe(this.handleRemove.bind(this)));
  }
  /**
   * Specifies the handlers called on drag-and-drop [`addItem`]({% slug api_treeview_treeviewcomponent %}#toc-additem)
   * and [`removeItem`]({% slug api_treeview_treeviewcomponent %}#toc-removeitem) events.
   */
  set editService(service) {
    this.treeview.editService = service;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleAdd(args) {
    if (!isPresent(this.treeview.editService)) {
      throw new Error("No `editService` provided. Either provide your own implementation or use this directive in combination with one of the data binding directives (`kendoTreeViewHierarchyBinding` or `kendoTreeViewFlatDataBinding`).");
    }
    this.treeview.editService.add(args);
  }
  handleRemove(args) {
    if (!isPresent(this.treeview.editService)) {
      throw new Error("No `editService` provided. Either provide your own implementation or use this directive in combination with one of the data binding directives (`kendoTreeViewHierarchyBinding` or `kendoTreeViewFlatDataBinding`).");
    }
    this.treeview.editService.remove(args);
  }
};
DragAndDropEditingDirective.ɵfac = function DragAndDropEditingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragAndDropEditingDirective)(ɵɵdirectiveInject(TreeViewComponent));
};
DragAndDropEditingDirective.ɵdir = ɵɵdefineDirective({
  type: DragAndDropEditingDirective,
  selectors: [["", "kendoTreeViewDragAndDropEditing", ""]],
  inputs: {
    editService: "editService"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropEditingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewDragAndDropEditing]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }];
  }, {
    editService: [{
      type: Input
    }]
  });
})();
var DropAction;
(function(DropAction2) {
  DropAction2[DropAction2["Add"] = 0] = "Add";
  DropAction2[DropAction2["InsertTop"] = 1] = "InsertTop";
  DropAction2[DropAction2["InsertBottom"] = 2] = "InsertBottom";
  DropAction2[DropAction2["InsertMiddle"] = 3] = "InsertMiddle";
  DropAction2[DropAction2["Invalid"] = 4] = "Invalid";
})(DropAction || (DropAction = {}));
var DropPosition;
(function(DropPosition2) {
  DropPosition2[DropPosition2["Over"] = 0] = "Over";
  DropPosition2[DropPosition2["Before"] = 1] = "Before";
  DropPosition2[DropPosition2["After"] = 2] = "After";
})(DropPosition || (DropPosition = {}));
var ScrollDirection;
(function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["Up"] = -1] = "Up";
  ScrollDirection2[ScrollDirection2["Down"] = 1] = "Down";
})(ScrollDirection || (ScrollDirection = {}));
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
var TreeItemDropEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(initializer, originalEvent) {
    super();
    this.isValid = true;
    Object.assign(this, initializer);
    this.originalEvent = originalEvent;
  }
  /**
   * Specifies if the drop action should be marked as valid.
   * If set to `false`, the [`addItem`]({% slug api_treeview_treeviewcomponent %}#toc-additem) and
   * [`removeItem`]({% slug api_treeview_treeviewcomponent %}#toc-removeitem) events will not be fired and the drag clue
   * will be animated back to the source item to indicate the action is marked as invalid.
   */
  setValid(isValid) {
    this.isValid = isValid;
  }
};
var TreeItemDragStartEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(initializer) {
    super();
    Object.assign(this, initializer);
  }
};
var TreeItemDragEvent = class {
  /** @hidden */
  constructor() {
  }
};
var DragClueComponent = class {
  constructor(cdr) {
    this.cdr = cdr;
    this.hostClasses = true;
    this.posistionStyle = "fixed";
  }
  get statusIconClass() {
    switch (this.action) {
      case DropAction.Add:
        return "plus";
      case DropAction.InsertTop:
        return "insert-top";
      case DropAction.InsertBottom:
        return "insert-bottom";
      case DropAction.InsertMiddle:
        return "insert-middle";
      case DropAction.Invalid:
      default:
        return "cancel";
    }
  }
  get statusSVGIcon() {
    switch (this.action) {
      case DropAction.Add:
        return plusIcon;
      case DropAction.InsertTop:
        return insertTopIcon;
      case DropAction.InsertBottom:
        return insertBottomIcon;
      case DropAction.InsertMiddle:
        return insertMiddleIcon;
      case DropAction.Invalid:
      default:
        return cancelIcon;
    }
  }
  // exposed as a public method that can be called from outside as the component uses `OnPush` strategy
  detectChanges() {
    this.cdr.detectChanges();
  }
};
DragClueComponent.ɵfac = function DragClueComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragClueComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
DragClueComponent.ɵcmp = ɵɵdefineComponent({
  type: DragClueComponent,
  selectors: [["kendo-treeview-drag-clue"]],
  hostVars: 6,
  hostBindings: function DragClueComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.posistionStyle);
      ɵɵclassProp("k-header", ctx.hostClasses)("k-drag-clue", ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["innerCssClass", "k-drag-status", 3, "name", "svgIcon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function DragClueComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DragClueComponent_ng_container_0_Template, 4, 3, "ng-container", 0)(1, DragClueComponent_1_Template, 1, 7, null, 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.template);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragClueComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-treeview-drag-clue",
      template: `
        <ng-container *ngIf="!template">
            <kendo-icon-wrapper
                innerCssClass="k-drag-status"
                [name]="statusIconClass"
                [svgIcon]="statusSVGIcon"
                >
            </kendo-icon-wrapper>
            <span>{{text}}</span>
        </ng-container>

        <ng-template
            *ngIf="template"
            [ngTemplateOutlet]="template"
            [ngTemplateOutletContext]="{
                text: text,
                action: action,
                sourceItem: sourceItem,
                destinationItem: destinationItem
            }"
        >
        </ng-template>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgTemplateOutlet]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-header"]
    }, {
      type: HostBinding,
      args: ["class.k-drag-clue"]
    }],
    posistionStyle: [{
      type: HostBinding,
      args: ["style.position"]
    }]
  });
})();
var DragAndDropAssetService = class {
  get componentRef() {
    if (!isPresent(this._componentRef)) {
      throw new Error("The `initalize` method must be called before calling other service methods.");
    }
    return this._componentRef;
  }
  set componentRef(componentRef) {
    this._componentRef = componentRef;
  }
  get element() {
    return this.componentRef.location.nativeElement;
  }
  ngOnDestroy() {
    if (!isPresent(this._componentRef)) {
      return;
    }
    this.element.parentElement.removeChild(this.element);
    this.componentRef.destroy();
    this.componentRef = null;
  }
  show() {
    this.element.style.display = "";
  }
  hide() {
    this.element.style.display = "none";
  }
  move(left, top, offset = 0) {
    this.element.style.left = `${left + offset}px`;
    this.element.style.top = `${top + offset}px`;
  }
};
DragAndDropAssetService.ɵfac = function DragAndDropAssetService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragAndDropAssetService)();
};
DragAndDropAssetService.ɵprov = ɵɵdefineInjectable({
  token: DragAndDropAssetService,
  factory: DragAndDropAssetService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropAssetService, [{
    type: Injectable
  }], null, null);
})();
var hasRelativeStackingContext = memoize(() => {
  if (!(isDocumentAvailable() && isPresent(document.body))) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const innerDiv = document.createElement("div");
  innerDiv.innerText = "child";
  innerDiv.style.position = "fixed";
  innerDiv.style.top = `${top}px`;
  parent.appendChild(innerDiv);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
function memoize(fn) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fn(...args);
    called = true;
    return result;
  };
}
var getContainerOffset = (element) => {
  if (!(element && hasRelativeStackingContext())) {
    return {
      left: 0,
      top: 0
    };
  }
  let offsetParent = element.parentElement;
  while (offsetParent) {
    if (window.getComputedStyle(offsetParent).transform !== "none") {
      break;
    }
    offsetParent = offsetParent.parentElement;
  }
  if (offsetParent) {
    const rect = offsetParent.getBoundingClientRect();
    return {
      left: rect.left - offsetParent.scrollLeft,
      top: rect.top - offsetParent.scrollTop
    };
  }
  return {
    left: 0,
    top: 0
  };
};
var getDropAction = (dropPosition, dropTarget) => {
  if (!(isPresent(dropPosition) && isPresent(dropTarget))) {
    return DropAction.Invalid;
  }
  switch (dropPosition) {
    case DropPosition.Over:
      return DropAction.Add;
    case DropPosition.Before:
      return isPresent(closestNode(dropTarget).previousElementSibling) ? DropAction.InsertMiddle : DropAction.InsertTop;
    case DropPosition.After:
      return isPresent(closestNode(dropTarget).nextElementSibling) ? DropAction.InsertMiddle : DropAction.InsertBottom;
    default:
      return DropAction.Invalid;
  }
};
var getDropPosition = (draggedItem, target, clientY, targetTreeView, containerOffset) => {
  if (!(isPresent(draggedItem) && isPresent(target) && isPresent(targetTreeView) && isPresent(containerOffset))) {
    return;
  }
  const item = closestWithMatch(target, ".k-treeview-top, .k-treeview-mid, .k-treeview-bot");
  if (!isPresent(item)) {
    return;
  }
  const content = getContentElement(item);
  const targetChildOfDraggedItem = hasParent(item, closestNode(draggedItem));
  if (!isPresent(content) || content === draggedItem || targetChildOfDraggedItem) {
    return;
  }
  const itemViewPortCoords = content.getBoundingClientRect();
  const itemDivisionHeight = itemViewPortCoords.height / (isContent(target) ? 4 : 2);
  const pointerPosition = clientY - containerOffset.top;
  const itemTop = itemViewPortCoords.top - containerOffset.top;
  if (pointerPosition < itemTop + itemDivisionHeight) {
    return DropPosition.Before;
  }
  if (pointerPosition >= itemTop + itemViewPortCoords.height - itemDivisionHeight) {
    return DropPosition.After;
  }
  return DropPosition.Over;
};
var treeItemFromEventTarget = (treeView, dropTarget) => {
  if (!(isPresent(treeView) && isPresent(dropTarget))) {
    return null;
  }
  const node = closestNode(dropTarget);
  const index = nodeId(node);
  const lookup = treeView.itemLookup(index);
  if (!(isPresent(lookup) && isPresent(lookup.item.dataItem))) {
    return null;
  }
  return lookup;
};
var collapseEmptyParent = (parent, parentNodes, treeview) => {
  if (isPresent(parent) && parentNodes.length === 0 && treeview.isExpanded(parent.item.dataItem, parent.item.index)) {
    treeview.collapseNode(parent.item.dataItem, parent.item.index);
  }
};
var expandDropTarget = (dropTarget, treeView) => {
  if (!treeView.isExpanded(dropTarget.item.dataItem, dropTarget.item.index)) {
    treeView.expandNode(dropTarget.item.dataItem, dropTarget.item.index);
  }
};
var getDropTarget = (event) => {
  if (!(isDocumentAvailable() && isPresent(document.elementFromPoint))) {
    return event.target;
  }
  return document.elementFromPoint(event.clientX, event.clientY);
};
var updateMovedItemIndex = (newIndex, originalIndex) => {
  const movedItemNewIndexParts = newIndex.split("_");
  const originalItemIndexParts = originalIndex.split("_");
  if (movedItemNewIndexParts.length < originalItemIndexParts.length) {
    return newIndex;
  }
  const originalItemParentPathLength = originalItemIndexParts.length - 1;
  const originalItemParentPath = originalItemIndexParts.slice(0, originalItemParentPathLength).join("_");
  const movedItemParentPath = movedItemNewIndexParts.slice(0, originalItemParentPathLength).join("_");
  const originalItemIndexLevel = originalItemIndexParts.length - 1;
  const originalItemLevelIndex = Number(originalItemIndexParts[originalItemIndexLevel]);
  const movedItemLevelIndex = Number(movedItemNewIndexParts[originalItemIndexLevel]);
  if (originalItemParentPath === movedItemParentPath && movedItemLevelIndex > originalItemLevelIndex) {
    movedItemNewIndexParts[originalItemIndexLevel] = String(movedItemLevelIndex - 1);
    return movedItemNewIndexParts.join("_");
  }
  return newIndex;
};
var SCROLLBAR_REG_EXP = new RegExp("(auto|scroll)");
var getScrollableContainer = (node) => {
  while (isPresent(node) && node.nodeName !== "HTML") {
    const hasOverflow = node.scrollHeight > node.clientHeight;
    const hasScrollbar = SCROLLBAR_REG_EXP.test(getComputedStyle(node).overflowY);
    if (hasOverflow && hasScrollbar) {
      return node;
    }
    node = node.parentNode;
  }
  return node;
};
var isTopReached = (element) => Math.floor(element.scrollTop) <= 0;
var isBottomReached = (element) => Math.ceil(element.scrollTop) >= element.scrollHeight - element.clientHeight;
var scrollElementBy = (element, step, direction) => {
  if (!(isPresent(element) && isDocumentAvailable())) {
    return;
  }
  const initialScrollTop = element.scrollTop;
  let currentStep = step;
  let iterations = 0;
  while (initialScrollTop === element.scrollTop && !(direction === ScrollDirection.Up && isTopReached(element)) && !(direction === ScrollDirection.Down && isBottomReached(element)) && iterations < 20) {
    element.scrollTop += currentStep * direction;
    currentStep += 1;
    iterations += 1;
  }
};
var CLUE_OFFSET = 10;
var RETURN_ANIMATION_DURATION = 200;
var DragClueService = class extends DragAndDropAssetService {
  constructor(componentFactoryResolver) {
    super();
    this.componentFactoryResolver = componentFactoryResolver;
  }
  initialize(container, template) {
    if (isPresent(this._componentRef)) {
      this.ngOnDestroy();
    }
    const clueComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DragClueComponent);
    this.componentRef = container.createComponent(clueComponentFactory);
    this.hide();
    this.componentRef.instance.template = template;
    this.componentRef.changeDetectorRef.detectChanges();
  }
  ngOnDestroy() {
    this.cancelReturnAnimation();
    this.cancelScroll();
    super.ngOnDestroy();
  }
  move(left, top) {
    super.move(left, top, CLUE_OFFSET);
  }
  animateDragClueToElementPosition(target) {
    if (!(isPresent(target) && isPresent(this.element.animate))) {
      this.hide();
      return;
    }
    const targetElementViewPortCoords = target.getBoundingClientRect();
    const clueElementViewPortCoords = this.element.getBoundingClientRect();
    this.returnAnimation = this.element.animate([{
      transform: "translate(0, 0)"
    }, {
      transform: `translate(${targetElementViewPortCoords.left - clueElementViewPortCoords.left}px, ${targetElementViewPortCoords.top - clueElementViewPortCoords.top}px)`
    }], RETURN_ANIMATION_DURATION);
    this.returnAnimation.onfinish = () => this.hide();
  }
  cancelReturnAnimation() {
    if (!isPresent(this.returnAnimation)) {
      return;
    }
    this.returnAnimation.cancel();
    this.returnAnimation = null;
  }
  updateDragClueData(action, sourceItem, destinationItem) {
    const dragClue = this.componentRef.instance;
    if (action === dragClue.action && dataItemsEqual(sourceItem, dragClue.sourceItem) && dataItemsEqual(destinationItem, dragClue.destinationItem)) {
      return;
    }
    dragClue.action = action;
    dragClue.sourceItem = sourceItem;
    dragClue.destinationItem = destinationItem;
    dragClue.detectChanges();
  }
  updateText(text) {
    if (text === this.componentRef.instance.text) {
      return;
    }
    this.componentRef.instance.text = text;
    this.componentRef.instance.detectChanges();
  }
  /**
   * Triggers the first scrollable parent to scroll upwards or downwards.
   * Uses setInterval, so should be called outside the angular zone.
   */
  scrollIntoView({
    step,
    interval
  }) {
    this.cancelScroll();
    const scrollableContainer = getScrollableContainer(this.element);
    if (!isPresent(scrollableContainer)) {
      return;
    }
    const containerRect = scrollableContainer.getBoundingClientRect();
    const clueRect = this.element.getBoundingClientRect();
    const firstVisibleClientTopPart = Math.max(containerRect.top, 0);
    const topLimit = firstVisibleClientTopPart + clueRect.height;
    const bottomLimit = firstVisibleClientTopPart + Math.min(containerRect.bottom, scrollableContainer.clientHeight);
    if (clueRect.top < topLimit) {
      this.scrollInterval = setInterval(() => scrollElementBy(scrollableContainer, step, ScrollDirection.Up), interval);
    } else if (clueRect.bottom > bottomLimit) {
      this.scrollInterval = setInterval(() => scrollElementBy(scrollableContainer, step, ScrollDirection.Down), interval);
    }
  }
  /**
   * Cancels out the on-going scroll animation, if present.
   */
  cancelScroll() {
    if (isPresent(this.scrollInterval)) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
};
DragClueService.ɵfac = function DragClueService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragClueService)(ɵɵinject(ComponentFactoryResolver$1));
};
DragClueService.ɵprov = ɵɵdefineInjectable({
  token: DragClueService,
  factory: DragClueService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragClueService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }];
  }, null);
})();
var DropHintComponent = class {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.hostClass = true;
    this.position = "fixed";
    this.pointerEvents = "none";
  }
  // exposed as a public method that can be called from outside as the component uses `OnPush` strategy
  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
};
DropHintComponent.ɵfac = function DropHintComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropHintComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
DropHintComponent.ɵcmp = ɵɵdefineComponent({
  type: DropHintComponent,
  selectors: [["kendo-treeview-drop-hint"]],
  hostVars: 6,
  hostBindings: function DropHintComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.position)("pointer-events", ctx.pointerEvents);
      ɵɵclassProp("k-drop-hint-container", ctx.hostClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["class", "k-drop-hint k-drop-hint-h", 4, "ngIf"], [4, "ngIf"], [1, "k-drop-hint", "k-drop-hint-h"], [1, "k-drop-hint-start"], [1, "k-drop-hint-line"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function DropHintComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DropHintComponent_div_0_Template, 3, 0, "div", 0)(1, DropHintComponent_1_Template, 1, 6, null, 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.template);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropHintComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-treeview-drop-hint",
      template: `
        <div
            *ngIf="!template"
            class="k-drop-hint k-drop-hint-h"
        >
            <div class='k-drop-hint-start'></div>
            <div class='k-drop-hint-line'></div>
        </div>

        <ng-template
            *ngIf="template"
            [ngTemplateOutlet]="template"
            [ngTemplateOutletContext]="{
                action: action,
                sourceItem: sourceItem,
                destinationItem: destinationItem
            }"
        >
        <ng-template>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-drop-hint-container"]
    }],
    position: [{
      type: HostBinding,
      args: ["style.position"]
    }],
    pointerEvents: [{
      type: HostBinding,
      args: ["style.pointer-events"]
    }]
  });
})();
var DropHintService = class extends DragAndDropAssetService {
  constructor(componentFactoryResolver) {
    super();
    this.componentFactoryResolver = componentFactoryResolver;
  }
  initialize(container, template) {
    if (isPresent(this._componentRef)) {
      this.ngOnDestroy();
    }
    const hintComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DropHintComponent);
    this.componentRef = container.createComponent(hintComponentFactory);
    this.hide();
    this.componentRef.instance.template = template;
    this.componentRef.changeDetectorRef.detectChanges();
  }
  updateDropHintData(action, sourceItem, destinationItem) {
    const dropHint = this.componentRef.instance;
    if (action === dropHint.action && dataItemsEqual(sourceItem, dropHint.sourceItem) && dataItemsEqual(destinationItem, dropHint.destinationItem)) {
      return;
    }
    dropHint.action = action;
    dropHint.sourceItem = sourceItem;
    dropHint.destinationItem = destinationItem;
    dropHint.detectChanges();
  }
};
DropHintService.ɵfac = function DropHintService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropHintService)(ɵɵinject(ComponentFactoryResolver$1));
};
DropHintService.ɵprov = ɵɵdefineInjectable({
  token: DropHintService,
  factory: DropHintService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropHintService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }];
  }, null);
})();
var DragClueTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DragClueTemplateDirective.ɵfac = function DragClueTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragClueTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DragClueTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DragClueTemplateDirective,
  selectors: [["", "kendoTreeViewDragClueTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragClueTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewDragClueTemplate]",
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
var DropHintTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DropHintTemplateDirective.ɵfac = function DropHintTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropHintTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DropHintTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DropHintTemplateDirective,
  selectors: [["", "kendoTreeViewDropHintTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropHintTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewDropHintTemplate]",
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
var DEFAULT_SCROLL_SETTINGS = {
  enabled: true,
  step: 1,
  interval: 1
};
var DragAndDropDirective = class {
  constructor(element, zone, treeview, dragClueService, dropHintService) {
    this.element = element;
    this.zone = zone;
    this.treeview = treeview;
    this.dragClueService = dragClueService;
    this.dropHintService = dropHintService;
    this.allowCopy = false;
    this.dropZoneTreeViews = [];
    this.startDragAfter = 5;
    this.autoScroll = true;
    this.userSelectStyle = "none";
    this.containerOffset = {
      top: 0,
      left: 0
    };
    this.treeview.touchActions = false;
  }
  get scrollSettings() {
    const userProvidedSettings = typeof this.autoScroll === "boolean" ? {
      enabled: this.autoScroll
    } : this.autoScroll;
    return Object.assign({}, DEFAULT_SCROLL_SETTINGS, userProvidedSettings);
  }
  ngAfterContentInit() {
    this.initalizeDraggable();
    this.dragClueService.initialize(this.treeview.assetsContainer, this.dragClueTemplate && this.dragClueTemplate.templateRef);
    this.dropHintService.initialize(this.treeview.assetsContainer, this.dropHintTemplate && this.dropHintTemplate.templateRef);
  }
  ngOnDestroy() {
    this.draggable.destroy();
  }
  /**
   * @hidden
   */
  handlePress({
    originalEvent
  }) {
    if (!isContent(originalEvent.target)) {
      return;
    }
    this.draggedItem = closestWithMatch(originalEvent.target, ".k-treeview-leaf");
    this.pendingDragStartEvent = originalEvent;
  }
  /**
   * @hidden
   */
  handleDrag({
    originalEvent,
    clientX,
    clientY
  }) {
    if (this.shouldInitiateDragStart({
      clientX,
      clientY
    })) {
      this.initiateDragStart();
    }
    if (!isPresent(this.draggedItem) || isPresent(this.pendingDragStartEvent)) {
      return;
    }
    const dropTarget = getDropTarget(originalEvent);
    if (hasObservers(this.treeview.nodeDrag)) {
      this.zone.run(() => this.notifyDrag(originalEvent, dropTarget));
    }
    const targetTreeView = this.getTargetTreeView(dropTarget);
    const dropPosition = getDropPosition(this.draggedItem, dropTarget, clientY, targetTreeView, this.containerOffset);
    const dropHintAnchor = closestWithMatch(dropTarget, ".k-treeview-top, .k-treeview-mid, .k-treeview-bot");
    const dropAction = getDropAction(dropPosition, dropTarget);
    const sourceItem = treeItemFromEventTarget(this.treeview, this.draggedItem);
    const destinationItem = treeItemFromEventTarget(targetTreeView, dropTarget);
    this.updateDropHintState(dropPosition, dropHintAnchor, dropAction, sourceItem, destinationItem);
    this.updateDragClueState(dropAction, clientX, clientY, sourceItem, destinationItem);
    if (this.scrollSettings.enabled) {
      this.dragClueService.scrollIntoView(this.scrollSettings);
    }
  }
  /**
   * @hidden
   */
  handleRelease({
    originalEvent,
    clientY
  }) {
    if (this.scrollSettings.enabled) {
      this.dragClueService.cancelScroll();
    }
    if (!isPresent(this.draggedItem) || isPresent(this.pendingDragStartEvent)) {
      this.pendingDragStartEvent = null;
      this.draggedItem = null;
      return;
    }
    const dropTarget = getDropTarget(originalEvent);
    const sourceTree = this.treeview;
    const destinationTree = this.getTargetTreeView(dropTarget);
    const dropPosition = getDropPosition(this.draggedItem, dropTarget, clientY, this.getTargetTreeView(dropTarget), this.containerOffset);
    const sourceItem = treeItemFromEventTarget(sourceTree, this.draggedItem);
    const destinationItem = treeItemFromEventTarget(destinationTree, dropTarget);
    if (isPresent(destinationItem) && isPresent(dropPosition)) {
      this.zone.run(() => this.notifyDrop({
        sourceItem,
        destinationItem,
        dropPosition,
        sourceTree,
        destinationTree
      }, originalEvent));
    } else {
      this.dragClueService.animateDragClueToElementPosition(this.draggedItem);
    }
    if (hasObservers(this.treeview.nodeDragEnd)) {
      this.zone.run(() => this.notifyDragEnd({
        sourceItem,
        destinationItem,
        originalEvent
      }));
    }
    this.dropHintService.hide();
    this.draggedItem = null;
  }
  updateDropHintState(dropPosition, dropHintAnchor, dropAction, sourceItem, destinationItem) {
    if (!isPresent(dropHintAnchor) || dropPosition === DropPosition.Over || !isPresent(dropPosition)) {
      this.dropHintService.hide();
      return;
    }
    const anchorViewPortCoords = dropHintAnchor.getBoundingClientRect();
    const insertBefore = dropPosition === DropPosition.Before;
    const top = insertBefore ? anchorViewPortCoords.top : anchorViewPortCoords.top + anchorViewPortCoords.height;
    this.dropHintService.updateDropHintData(dropAction, sourceItem, destinationItem);
    this.dropHintService.move(anchorViewPortCoords.left - this.containerOffset.left, top - this.containerOffset.top);
    this.dropHintService.show();
  }
  updateDragClueState(dropAction, clientX, clientY, sourceItem, destinationItem) {
    this.dragClueService.move(clientX - this.containerOffset.left, clientY - this.containerOffset.top);
    this.dragClueService.updateDragClueData(dropAction, sourceItem, destinationItem);
    this.dragClueService.show();
  }
  initalizeDraggable() {
    this.draggable = new Draggable({
      press: this.handlePress.bind(this),
      drag: this.handleDrag.bind(this),
      release: this.handleRelease.bind(this)
    });
    this.zone.runOutsideAngular(() => this.draggable.bindTo(this.element.nativeElement));
  }
  notifyDragStart(originalEvent, dropTarget) {
    const sourceItem = treeItemFromEventTarget(this.treeview, dropTarget);
    const event = new TreeItemDragStartEvent({
      sourceItem,
      originalEvent
    });
    this.treeview.nodeDragStart.emit(event);
    return event;
  }
  notifyDrag(originalEvent, dropTarget) {
    const dragEvent = {
      sourceItem: treeItemFromEventTarget(this.treeview, this.draggedItem),
      destinationItem: treeItemFromEventTarget(this.getTargetTreeView(dropTarget), dropTarget),
      originalEvent
    };
    this.treeview.nodeDrag.emit(dragEvent);
  }
  notifyDrop(args, originalEvent) {
    const event = new TreeItemDropEvent(args, originalEvent);
    args.destinationTree.nodeDrop.emit(event);
    this.disableAnimationsForNextTick(args.destinationTree);
    if (args.sourceTree !== args.destinationTree) {
      this.disableAnimationsForNextTick(args.sourceTree);
    }
    if (!event.isDefaultPrevented() && event.isValid) {
      this.dragClueService.hide();
      args.destinationTree.addItem.emit(args);
      if (!(originalEvent.ctrlKey && this.allowCopy)) {
        args.sourceTree.removeItem.emit(args);
      }
    } else if (event.isDefaultPrevented()) {
      this.dragClueService.hide();
    } else if (!event.isValid) {
      this.dragClueService.animateDragClueToElementPosition(this.draggedItem);
    }
  }
  notifyDragEnd(dragEndEvent) {
    this.treeview.nodeDragEnd.emit(dragEndEvent);
  }
  getTargetTreeView(dropTarget) {
    const treeViewTagName = this.treeview.element.nativeElement.tagName;
    const targetTreeView = closestWithMatch(dropTarget, treeViewTagName);
    return [this.treeview, ...this.dropZoneTreeViews].find((treeView) => isPresent(treeView) && treeView.element.nativeElement === targetTreeView);
  }
  disableAnimationsForNextTick(treeView) {
    if (treeView.animate) {
      return;
    }
    treeView.animate = false;
    this.zone.runOutsideAngular(() => setTimeout(() => treeView.animate = true));
  }
  shouldInitiateDragStart(currentPointerCoords) {
    if (!isPresent(this.pendingDragStartEvent)) {
      return false;
    }
    const distanceFromPointerDown = Math.sqrt(Math.pow(this.pendingDragStartEvent.clientX - currentPointerCoords.clientX, 2) + Math.pow(this.pendingDragStartEvent.clientY - currentPointerCoords.clientY, 2));
    return distanceFromPointerDown >= this.startDragAfter;
  }
  initiateDragStart() {
    if (hasObservers(this.treeview.nodeDragStart)) {
      const dragStartEvent = this.zone.run(() => this.notifyDragStart(this.pendingDragStartEvent, getDropTarget(this.pendingDragStartEvent)));
      if (dragStartEvent.isDefaultPrevented()) {
        this.pendingDragStartEvent = null;
        this.draggedItem = null;
        return;
      }
    }
    this.dragClueService.cancelReturnAnimation();
    this.dragClueService.updateText(this.draggedItem.innerText);
    this.containerOffset = getContainerOffset(this.draggedItem);
    this.pendingDragStartEvent = null;
  }
};
DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragAndDropDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TreeViewComponent), ɵɵdirectiveInject(DragClueService), ɵɵdirectiveInject(DropHintService));
};
DragAndDropDirective.ɵdir = ɵɵdefineDirective({
  type: DragAndDropDirective,
  selectors: [["", "kendoTreeViewDragAndDrop", ""]],
  contentQueries: function DragAndDropDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DragClueTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, DropHintTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dragClueTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropHintTemplate = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("user-select", ctx.userSelectStyle)("-ms-user-select", ctx.userSelectStyle)("-moz-user-select", ctx.userSelectStyle)("-webkit-user-select", ctx.userSelectStyle);
    }
  },
  inputs: {
    allowCopy: "allowCopy",
    dropZoneTreeViews: "dropZoneTreeViews",
    startDragAfter: "startDragAfter",
    autoScroll: "autoScroll"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([DragClueService, DropHintService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewDragAndDrop]",
      providers: [DragClueService, DropHintService],
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: TreeViewComponent
    }, {
      type: DragClueService
    }, {
      type: DropHintService
    }];
  }, {
    allowCopy: [{
      type: Input
    }],
    dropZoneTreeViews: [{
      type: Input
    }],
    startDragAfter: [{
      type: Input
    }],
    autoScroll: [{
      type: Input
    }],
    dragClueTemplate: [{
      type: ContentChild,
      args: [DragClueTemplateDirective, {
        static: false
      }]
    }],
    dropHintTemplate: [{
      type: ContentChild,
      args: [DropHintTemplateDirective, {
        static: false
      }]
    }],
    userSelectStyle: [{
      type: HostBinding,
      args: ["style.user-select"]
    }, {
      type: HostBinding,
      args: ["style.-ms-user-select"]
    }, {
      type: HostBinding,
      args: ["style.-moz-user-select"]
    }, {
      type: HostBinding,
      args: ["style.-webkit-user-select"]
    }]
  });
})();
var DEFAULT_FILTER_EXPAND_SETTINGS = {
  maxAutoExpandResults: -1,
  expandMatches: false,
  expandedOnClear: "none"
};
var ExpandDirective = class {
  constructor(component) {
    this.component = component;
    this.expandOnFilter = false;
    this.expandedKeysChange = new EventEmitter();
    this.subscriptions = new Subscription();
    this.state = /* @__PURE__ */ new Set();
    this.originalExpandedKeys = /* @__PURE__ */ new Set();
    this.isFiltered = false;
    this.updateExpandedNodes = (collection, node, autoExpandMatches) => {
      if (node.containsMatches || node.isMatch && autoExpandMatches && isArrayWithAtLeastOneItem(node.children)) {
        collection.push(this.itemKey({
          dataItem: node.dataItem,
          index: node.index
        }));
      }
      if (isArrayWithAtLeastOneItem(node.children)) {
        node.children.forEach((child) => {
          this.updateExpandedNodes(collection, child, autoExpandMatches);
        });
      }
    };
    this.getEveryExpandKey = (collection, node) => {
      if (isArrayWithAtLeastOneItem(node.children)) {
        collection.push(this.itemKey({
          dataItem: node.dataItem,
          index: node.index
        }));
      }
      if (isArrayWithAtLeastOneItem(node.children)) {
        node.children.forEach((child) => {
          this.getEveryExpandKey(collection, child);
        });
      }
    };
    this.subscriptions.add(merge(this.component.expand.pipe(map((e) => __spreadValues({
      expand: true
    }, e))), this.component.collapse.pipe(map((e) => __spreadValues({
      expand: false
    }, e)))).subscribe(this.toggleExpand.bind(this)));
    if (this.component.filterStateChange) {
      this.subscriptions.add(this.component.filterStateChange.subscribe(this.handleAutoExpand.bind(this)));
    }
    this.component.isExpanded = (dataItem, index) => this.state.has(this.itemKey({
      dataItem,
      index
    }));
  }
  /**
   * @hidden
   */
  set isExpanded(value) {
    this.component.isExpanded = value;
  }
  get filterExpandSettings() {
    const settings = isBoolean(this.expandOnFilter) ? {
      enabled: this.expandOnFilter
    } : __spreadProps(__spreadValues({}, this.expandOnFilter), {
      enabled: true
    });
    return Object.assign({}, DEFAULT_FILTER_EXPAND_SETTINGS, settings);
  }
  ngOnChanges(changes) {
    if (isChanged("expandedKeys", changes, false) && changes["expandedKeys"].currentValue !== this.lastChange) {
      this.state = new Set(changes["expandedKeys"].currentValue);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  itemKey(e) {
    if (this.expandKey) {
      if (typeof this.expandKey === "string") {
        return e.dataItem[this.expandKey];
      }
      if (typeof this.expandKey === "function") {
        return this.expandKey(e);
      }
    }
    return e.index;
  }
  toggleExpand({
    index,
    dataItem,
    expand
  }) {
    const key = this.itemKey({
      index,
      dataItem
    });
    const isExpanded2 = this.state.has(key);
    let notify = false;
    if (isExpanded2 && !expand) {
      this.state.delete(key);
      notify = true;
    } else if (!isExpanded2 && expand) {
      this.state.add(key);
      notify = true;
    }
    if (notify) {
      this.notify();
    }
  }
  handleAutoExpand({
    nodes,
    matchCount,
    term
  }) {
    if (!this.filterExpandSettings.enabled) {
      return;
    }
    const {
      maxAutoExpandResults,
      expandMatches: autoExpandMatches,
      expandedOnClear
    } = this.filterExpandSettings;
    if (!this.isFiltered) {
      this.originalExpandedKeys = new Set(this.state);
    }
    const exitingFilteredState = this.isFiltered && !term;
    const maxExceeded = maxAutoExpandResults !== -1 && matchCount > maxAutoExpandResults;
    const exitAutoExpandedState = exitingFilteredState || maxExceeded;
    if (exitAutoExpandedState) {
      switch (expandedOnClear) {
        case "initial": {
          if (!sameValues(this.state, this.originalExpandedKeys)) {
            this.state = this.originalExpandedKeys;
            this.notify();
          }
          break;
        }
        case "all": {
          this.state = new Set(nodes.reduce((acc, rootNode) => {
            this.getEveryExpandKey(acc, rootNode);
            return acc;
          }, []));
          this.notify();
          break;
        }
        case "unchanged": {
          break;
        }
        case "none":
        default: {
          if (this.state.size !== 0) {
            this.state.clear();
            this.notify();
          }
          break;
        }
      }
      this.isFiltered = false;
      return;
    }
    const indicesToExpand = new Set(nodes.reduce((acc, rootNode) => {
      this.updateExpandedNodes(acc, rootNode, autoExpandMatches);
      return acc;
    }, []));
    if (!sameValues(this.state, indicesToExpand)) {
      this.state = indicesToExpand;
      this.notify();
    }
    this.isFiltered = true;
  }
  notify() {
    this.lastChange = Array.from(this.state);
    this.expandedKeysChange.emit(this.lastChange);
  }
};
ExpandDirective.ɵfac = function ExpandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExpandDirective)(ɵɵdirectiveInject(ExpandableComponent));
};
ExpandDirective.ɵdir = ɵɵdefineDirective({
  type: ExpandDirective,
  selectors: [["", "kendoTreeViewExpandable", ""]],
  inputs: {
    isExpanded: "isExpanded",
    expandKey: [0, "expandBy", "expandKey"],
    expandOnFilter: "expandOnFilter",
    expandedKeys: "expandedKeys"
  },
  outputs: {
    expandedKeysChange: "expandedKeysChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpandDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewExpandable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ExpandableComponent
    }];
  }, {
    isExpanded: [{
      type: Input
    }],
    expandKey: [{
      type: Input,
      args: ["expandBy"]
    }],
    expandOnFilter: [{
      type: Input
    }],
    expandedKeysChange: [{
      type: Output
    }],
    expandedKeys: [{
      type: Input
    }]
  });
})();
var compose = (...args) => (data) => args.reduceRight((acc, curr) => curr(acc), data);
var copyPageSize = (treeview, source, target) => {
  if (!isPresent(treeview.loadMoreService)) {
    return;
  }
  const sourceGroupSize = treeview.getNodePageSize(source);
  treeview.setNodePageSize(target, sourceGroupSize);
};
var incrementPageSize = (treeview, dataItem) => {
  if (!isPresent(treeview.loadMoreService)) {
    return;
  }
  const currentPageSize = treeview.getNodePageSize(dataItem);
  treeview.setNodePageSize(dataItem, currentPageSize + 1);
};
var decrementPageSize = (treeview, dataItem) => {
  if (!isPresent(treeview.loadMoreService)) {
    return;
  }
  const currentPageSize = treeview.getNodePageSize(dataItem);
  treeview.setNodePageSize(dataItem, currentPageSize - 1);
};
var FlatEditingService = class {
  constructor(flatBinding) {
    this.flatBinding = flatBinding;
  }
  add({
    sourceItem,
    destinationItem,
    dropPosition,
    sourceTree,
    destinationTree
  }) {
    const clonedSourceDataItem = Object.assign({}, getDataItem(sourceItem));
    if (dropPosition === DropPosition.Over) {
      expandDropTarget(destinationItem, destinationTree);
      const destinationItemId = getter(this.flatBinding.idField)(getDataItem(destinationItem));
      setter(this.flatBinding.parentIdField)(clonedSourceDataItem, destinationItemId);
      const lastChildNodeIndex = this.getLastVisibleChildNodeIndex(destinationTree, this.flatBinding.originalData, getDataItem(destinationItem));
      const targetIndex = lastChildNodeIndex + 1;
      this.flatBinding.originalData.splice(targetIndex, 0, clonedSourceDataItem);
      this.rebindData();
      const focusTarget = this.fetchChildNodes(getDataItem(destinationItem), destinationTree).indexOf(clonedSourceDataItem);
      this.movedItemNewIndex = buildTreeIndex(destinationItem.item.index, focusTarget);
    } else {
      const shiftIndex = dropPosition === DropPosition.After ? 1 : 0;
      const targetIndex = this.flatBinding.originalData.indexOf(getDataItem(destinationItem)) + shiftIndex;
      this.flatBinding.originalData.splice(targetIndex, 0, clonedSourceDataItem);
      const destinationItemParentId = getter(this.flatBinding.parentIdField)(getDataItem(destinationItem));
      setter(this.flatBinding.parentIdField)(clonedSourceDataItem, destinationItemParentId);
      this.rebindData();
      const parentIndex = destinationItem.parent ? destinationItem.parent.item.index : null;
      const parentContainer = destinationItem.parent ? this.fetchChildNodes(getDataItem(destinationItem.parent), destinationTree) : destinationTree.nodes;
      const focusTarget = parentContainer.indexOf(clonedSourceDataItem);
      this.movedItemNewIndex = buildTreeIndex(parentIndex, focusTarget);
    }
    if (sourceTree !== destinationTree) {
      this.addChildNodes(clonedSourceDataItem, sourceTree);
    }
    const updatedParent = dropPosition === DropPosition.Over ? getDataItem(destinationItem) : getDataItem(destinationItem.parent);
    incrementPageSize(destinationTree, updatedParent);
    copyPageSize(destinationTree, getDataItem(sourceItem), clonedSourceDataItem);
    if (sourceTree !== destinationTree && !destinationTree.loadOnDemand) {
      destinationTree.preloadChildNodes();
    }
    if (sourceTree !== destinationTree) {
      destinationTree.changeDetectorRef.detectChanges();
      destinationTree.focus(this.movedItemNewIndex);
    }
  }
  remove({
    sourceItem,
    sourceTree,
    destinationTree
  }) {
    const sourceDataItem = getDataItem(sourceItem);
    const sourceItemIndex = this.flatBinding.originalData.indexOf(sourceDataItem);
    this.flatBinding.originalData.splice(sourceItemIndex, 1);
    if (sourceTree !== destinationTree) {
      this.removeChildNodes(sourceDataItem, sourceTree);
    }
    this.rebindData();
    const parentChildren = sourceItem.parent ? sourceItem.parent.children : [];
    collapseEmptyParent(sourceItem.parent, parentChildren, sourceTree);
    decrementPageSize(sourceTree, getDataItem(sourceItem.parent));
    if (!sourceTree.loadOnDemand) {
      sourceTree.preloadChildNodes();
    }
    if (sourceTree === destinationTree) {
      destinationTree.changeDetectorRef.detectChanges();
      const index = updateMovedItemIndex(this.movedItemNewIndex, sourceItem.item.index);
      destinationTree.focus(index);
    }
  }
  addChildNodes(dataItem, source) {
    const itemChildren = this.fetchAllDescendantNodes(dataItem, source);
    this.flatBinding.originalData.push(...itemChildren);
  }
  removeChildNodes(dataItem, source) {
    const sourceChildren = this.fetchAllDescendantNodes(dataItem, source);
    sourceChildren.forEach((item) => {
      const index = this.flatBinding.originalData.indexOf(item);
      this.flatBinding.originalData.splice(index, 1);
    });
  }
  fetchAllDescendantNodes(node, treeview) {
    let nodes = this.fetchChildNodes(node, treeview);
    nodes.forEach((node2) => nodes = nodes.concat(this.fetchAllDescendantNodes(node2, treeview) || []));
    return nodes;
  }
  fetchChildNodes(node, treeview) {
    if (!node) {
      return [];
    }
    let nodes = [];
    treeview.children(node).pipe(take(1)).subscribe((children) => nodes = nodes.concat(children || []));
    return nodes;
  }
  getLastVisibleChildNodeIndex(treeview, data, node) {
    if (!isPresent(treeview.loadMoreService) || !treeview.hasChildren(node)) {
      return data.length;
    }
    const visibleNodesCount = treeview.loadMoreService.getGroupSize(node);
    const visibleChildren = this.fetchChildNodes(node, treeview).slice(0, visibleNodesCount);
    const lastNode = visibleChildren[visibleChildren.length - 1];
    const lastNodeIndex = data.indexOf(lastNode);
    return lastNodeIndex;
  }
  rebindData() {
    this.flatBinding.nodes = this.flatBinding.originalData;
    this.flatBinding.updateNodes(this.flatBinding.originalData);
  }
};
var DEFAULT_FILTER_SETTINGS = {
  operator: "contains",
  ignoreCase: true,
  mode: "lenient"
};
var FilteringBase = class {
  constructor(component) {
    this.component = component;
    this.visibleNodes = /* @__PURE__ */ new Set();
    this._filterSettings = DEFAULT_FILTER_SETTINGS;
  }
  /**
   * The settings which are applied when performing a filter on the component's data.
   */
  set filterSettings(settings) {
    this._filterSettings = __spreadValues(__spreadValues({}, DEFAULT_FILTER_SETTINGS), settings);
  }
  get filterSettings() {
    return this._filterSettings;
  }
  /**
   * Applies a filter and changes the visibility of the component's nodes accordingly.
   */
  set filter(term) {
    this.handleFilterChange(term);
  }
  /**
   * @hidden
   */
  handleFilterChange(term) {
    if (!this.filterData) {
      return;
    }
    this.resetNodesVisibility(this.filterData);
    if (term) {
      filterTree(this.filterData, term, this.filterSettings, this.component.textField);
    }
    this.updateVisibleNodes(this.filterData);
    if (isPresent(this.component.filterStateChange)) {
      this.component.filterStateChange.emit({
        nodes: this.filterData,
        matchCount: this.visibleNodes.size,
        term,
        filterSettings: this.filterSettings
      });
    }
  }
  updateVisibleNodes(items) {
    items.forEach((wrapper) => {
      if (wrapper.visible) {
        this.visibleNodes.add(wrapper.dataItem);
      }
      if (wrapper.children) {
        this.updateVisibleNodes(wrapper.children);
      }
    });
  }
  resetNodesVisibility(items) {
    this.visibleNodes.clear();
    items.forEach((wrapper) => {
      wrapper.visible = true;
      if (wrapper.children) {
        this.resetNodesVisibility(wrapper.children);
      }
    });
  }
};
FilteringBase.ɵfac = function FilteringBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FilteringBase)(ɵɵdirectiveInject(DataBoundComponent));
};
FilteringBase.ɵdir = ɵɵdefineDirective({
  type: FilteringBase,
  inputs: {
    filterSettings: "filterSettings",
    filter: "filter"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilteringBase, [{
    type: Directive
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    filterSettings: [{
      type: Input
    }],
    filter: [{
      type: Input
    }]
  });
})();
var findChildren = (prop, nodes, value) => nodes.filter((x) => prop(x) === value);
var indexBuilder$1 = new IndexBuilderService();
var mapToTree = (currentLevelNodes, allNodes, parentIdField, idField, parent = null, parentIndex = "") => {
  if (!isArrayWithAtLeastOneItem(currentLevelNodes)) {
    return [];
  }
  return currentLevelNodes.map((node, idx) => {
    const index = indexBuilder$1.nodeIndex(idx.toString(), parentIndex);
    const wrapper = {
      dataItem: node,
      index,
      parent,
      visible: true
    };
    wrapper.children = mapToTree(findChildren(getter(parentIdField), allNodes || [], getter(idField)(node)), allNodes, parentIdField, idField, wrapper, index);
    return wrapper;
  });
};
var FlatDataBindingDirective = class extends FilteringBase {
  constructor(component) {
    super(component);
    this.component = component;
    this.loadOnDemand = true;
    this.originalData = [];
    this.component.isVisible = (node) => this.visibleNodes.has(node);
  }
  /**
   * The nodes which will be displayed by the TreeView.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   * A callback which determines whether a TreeView node should be rendered as hidden.
   */
  set isVisible(fn) {
    this.component.isVisible = fn;
  }
  /**
   * @hidden
   */
  ngOnInit() {
    if (isPresent(this.parentIdField) && isPresent(this.idField)) {
      const fetchChildren = (node) => findChildren(getter(this.parentIdField), this.originalData || [], getter(this.idField)(node));
      this.component.hasChildren = (node) => fetchChildren(node).length > 0;
      this.component.children = (node) => of(fetchChildren(node));
      this.component.editService = new FlatEditingService(this);
      this.component.filterChange.subscribe(this.handleFilterChange.bind(this));
      if (this.component.filter) {
        this.handleFilterChange(this.component.filter);
      }
      if (!this.loadOnDemand && isPresent(this.component.preloadChildNodes)) {
        this.component.preloadChildNodes();
      }
    }
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (isChanged("parentIdField", changes, false)) {
      this.nodes = this.originalData;
      this.updateNodes(this.originalData);
    }
    if (isChanged("nodes", changes, false)) {
      this.updateNodes(changes["nodes"].currentValue);
    }
    if (anyChanged(["nodes", "loadOnDemand"], changes) && !this.loadOnDemand && isPresent(this.component.preloadChildNodes)) {
      this.component.preloadChildNodes();
    }
  }
  /**
   * @hidden
   */
  updateNodes(values) {
    this.originalData = values || [];
    if (!isNullOrEmptyString(this.parentIdField)) {
      const prop = getter(this.parentIdField);
      this.component.nodes = this.originalData.filter(compose(isBlank, prop));
      this.filterData = mapToTree(this.component.nodes, this.originalData, this.parentIdField, this.idField);
      this.updateVisibleNodes(this.filterData);
    } else {
      this.component.nodes = this.originalData.slice(0);
    }
  }
};
FlatDataBindingDirective.ɵfac = function FlatDataBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlatDataBindingDirective)(ɵɵdirectiveInject(DataBoundComponent));
};
FlatDataBindingDirective.ɵdir = ɵɵdefineDirective({
  type: FlatDataBindingDirective,
  selectors: [["", "kendoTreeViewFlatDataBinding", ""]],
  inputs: {
    nodes: "nodes",
    parentIdField: "parentIdField",
    idField: "idField",
    loadOnDemand: "loadOnDemand",
    isVisible: "isVisible"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatDataBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewFlatDataBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }];
  }, {
    nodes: [{
      type: Input
    }],
    parentIdField: [{
      type: Input
    }],
    idField: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }],
    isVisible: [{
      type: Input
    }]
  });
})();
var HierarchyEditingService = class {
  constructor(hierarchyBinding) {
    this.hierarchyBinding = hierarchyBinding;
  }
  add({
    sourceItem,
    destinationItem,
    dropPosition,
    sourceTree,
    destinationTree
  }) {
    const clonedSourceDataItem = Object.assign({}, getDataItem(sourceItem));
    if (dropPosition === DropPosition.Over) {
      expandDropTarget(destinationItem, destinationTree);
      const destinationChildren = this.childrenFor(getDataItem(destinationItem));
      const targetIndex = isPresent(destinationTree.loadMoreService) ? Math.min(destinationTree.loadMoreService.getGroupSize(getDataItem(destinationItem)), destinationChildren.length) : (
        // the page size might be greater than the actual children array length
        destinationChildren.length
      );
      destinationChildren.splice(targetIndex, 0, clonedSourceDataItem);
      setter(this.hierarchyBinding.childrenField)(getDataItem(destinationItem), destinationChildren);
      this.movedItemNewIndex = buildTreeIndex(destinationItem.item.index, targetIndex);
    } else {
      const destinationParentNodes = this.getParentNodes(destinationItem, destinationTree);
      const shiftIndex = dropPosition === DropPosition.After ? 1 : 0;
      const targetIndex = destinationParentNodes.indexOf(getDataItem(destinationItem)) + shiftIndex;
      destinationParentNodes.splice(targetIndex, 0, clonedSourceDataItem);
      const parentIndex = destinationItem.parent ? destinationItem.parent.item.index : null;
      this.movedItemNewIndex = buildTreeIndex(parentIndex, targetIndex);
    }
    const updatedParent = dropPosition === DropPosition.Over ? getDataItem(destinationItem) : getDataItem(destinationItem.parent);
    incrementPageSize(destinationTree, updatedParent);
    copyPageSize(destinationTree, getDataItem(sourceItem), clonedSourceDataItem);
    if (sourceTree !== destinationTree && !destinationTree.loadOnDemand) {
      destinationTree.preloadChildNodes();
    }
    if (sourceTree !== destinationTree) {
      destinationTree.changeDetectorRef.detectChanges();
      destinationTree.focus(this.movedItemNewIndex);
    }
  }
  remove({
    sourceItem,
    sourceTree,
    destinationTree
  }) {
    const sourceParentNodes = this.getParentNodes(sourceItem, sourceTree);
    const sourceItemIndex = sourceParentNodes.indexOf(getDataItem(sourceItem));
    sourceParentNodes.splice(sourceItemIndex, 1);
    collapseEmptyParent(sourceItem.parent, sourceParentNodes, sourceTree);
    decrementPageSize(sourceTree, getDataItem(sourceItem.parent));
    if (!sourceTree.loadOnDemand) {
      sourceTree.preloadChildNodes();
    }
    if (sourceTree === destinationTree) {
      destinationTree.changeDetectorRef.detectChanges();
      const index = updateMovedItemIndex(this.movedItemNewIndex, sourceItem.item.index);
      destinationTree.focus(index);
    }
  }
  getParentNodes(node, treeView) {
    return isPresent(node.parent) ? this.childrenFor(getDataItem(node.parent)) : treeView.nodes;
  }
  childrenFor(dataItem) {
    return getter(this.hierarchyBinding.childrenField)(dataItem) || [];
  }
};
var indexBuilder = new IndexBuilderService();
var mapToWrappers = (currentLevelNodes, childrenField, parent = null, parentIndex = "") => {
  if (!isArrayWithAtLeastOneItem(currentLevelNodes)) {
    return [];
  }
  return currentLevelNodes.map((node, idx) => {
    const index = indexBuilder.nodeIndex(idx.toString(), parentIndex);
    const wrapper = {
      dataItem: node,
      index,
      parent,
      visible: true
    };
    wrapper.children = mapToWrappers(getter(childrenField)(node), childrenField, wrapper, index);
    return wrapper;
  });
};
var HierarchyBindingDirective = class extends FilteringBase {
  constructor(component, dragAndDropDirective) {
    super(component);
    this.component = component;
    this.dragAndDropDirective = dragAndDropDirective;
    this.loadOnDemand = true;
    this.originalData = [];
    const shouldFilter = !isPresent(this.dragAndDropDirective);
    this.component.isVisible = shouldFilter ? (node) => this.visibleNodes.has(node) : isVisible;
  }
  /**
   * The field name which holds the data items of the child component.
   */
  set childrenField(value) {
    if (!value) {
      throw new Error("'childrenField' cannot be empty");
    }
    this._childrenField = value;
  }
  /**
   * The field name which holds the data items of the child component.
   */
  get childrenField() {
    return this._childrenField;
  }
  /**
   * The nodes which will be displayed by the TreeView.
   */
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get nodes() {
    return this._nodes;
  }
  /**
   * @hidden
   * A callback which determines whether a TreeView node should be rendered as hidden.
   */
  set isVisible(fn) {
    this.component.isVisible = fn;
  }
  ngOnInit() {
    if (isPresent(this.childrenField)) {
      this.component.children = (item) => of(getter(this.childrenField)(item));
      this.component.hasChildren = (item) => {
        const children = getter(this.childrenField)(item);
        return Boolean(children && children.length);
      };
      this.component.editService = new HierarchyEditingService(this);
      this.component.filterChange.subscribe(this.handleFilterChange.bind(this));
      if (this.component.filter) {
        this.handleFilterChange(this.component.filter);
      }
      if (!this.loadOnDemand && isPresent(this.component.preloadChildNodes)) {
        this.component.preloadChildNodes();
      }
    }
  }
  ngOnChanges(changes) {
    if (isChanged("childrenField", changes, false)) {
      this.nodes = this.originalData;
      this.updateNodes(this.originalData);
    }
    if (isChanged("nodes", changes, false)) {
      this.updateNodes(changes["nodes"].currentValue);
    }
    if (anyChanged(["nodes", "loadOnDemand"], changes) && !this.loadOnDemand && isPresent(this.component.preloadChildNodes)) {
      this.component.preloadChildNodes();
    }
  }
  /**
   * @hidden
   */
  updateNodes(values) {
    this.originalData = values || [];
    this.filterData = mapToWrappers(values, this.childrenField) || [];
    this.updateVisibleNodes(this.filterData);
  }
};
HierarchyBindingDirective.ɵfac = function HierarchyBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HierarchyBindingDirective)(ɵɵdirectiveInject(DataBoundComponent), ɵɵdirectiveInject(DragAndDropDirective, 9));
};
HierarchyBindingDirective.ɵdir = ɵɵdefineDirective({
  type: HierarchyBindingDirective,
  selectors: [["", "kendoTreeViewHierarchyBinding", ""]],
  inputs: {
    childrenField: "childrenField",
    nodes: "nodes",
    isVisible: "isVisible",
    loadOnDemand: "loadOnDemand"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HierarchyBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewHierarchyBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DataBoundComponent
    }, {
      type: DragAndDropDirective,
      decorators: [{
        type: Optional
      }, {
        type: Host
      }]
    }];
  }, {
    childrenField: [{
      type: Input
    }],
    nodes: [{
      type: Input
    }],
    isVisible: [{
      type: Input
    }],
    loadOnDemand: [{
      type: Input
    }]
  });
})();
var LOAD_MORE_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/treeview/load-more-button/";
var LoadMoreDirective = class {
  constructor(treeview) {
    this.treeview = treeview;
    this.pageSizes = /* @__PURE__ */ new Map();
    this.rootLevelId = guid();
    this.treeview.loadMoreService = {
      getInitialPageSize: this.getInitalPageSize.bind(this),
      getGroupSize: this.getGroupSize.bind(this),
      setGroupSize: this.setGroupSize.bind(this),
      getTotalNodesCount: this.getTotalNodesCount.bind(this)
    };
  }
  /**
   * Specifies the callback that will be called when the load more button is clicked.
   * Providing a function is only required when additional nodes are fetched on demand
   * ([see example]({% slug loadmorebutton_treeview %}#toc-remote-data)).
   */
  set loadMoreNodes(loadMoreNodes) {
    if (typeof loadMoreNodes === "string") {
      return;
    }
    this.treeview.loadMoreService.loadMoreNodes = loadMoreNodes;
  }
  ngOnChanges() {
    this.verifySettings();
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (!isPresent(this.pageSize)) {
      throw new Error(`To use the TreeView \`kendoTreeViewLoadMore\` directive, you need to assign a \`pageSize\` value. See ${LOAD_MORE_DOC_LINK}.`);
    }
    const loadMoreNodes = this.treeview.loadMoreService.loadMoreNodes;
    if (isPresent(loadMoreNodes) && typeof loadMoreNodes !== "function") {
      throw new Error(`The passed value to the \`kendoTreeViewLoadMore\` directive must be a function that retrieves additional nodes. See ${LOAD_MORE_DOC_LINK}.`);
    }
    if (isPresent(loadMoreNodes) && !isPresent(this.totalField)) {
      throw new Error(`When a function to fetch additional nodes is provided to the \`kendoTreeViewLoadMore\` directive, the \`totalField\` and \`totalRootNodes\` values must also be provided. See ${LOAD_MORE_DOC_LINK}.`);
    }
  }
  getGroupSize(dataItem) {
    const itemKey = dataItem || this.rootLevelId;
    return this.pageSizes.has(itemKey) ? this.pageSizes.get(itemKey) : this.pageSize;
  }
  setGroupSize(dataItem, pageSize) {
    const itemKey = dataItem || this.rootLevelId;
    const normalizedSizeValue = pageSize > 0 ? pageSize : 0;
    this.pageSizes.set(itemKey, normalizedSizeValue);
  }
  getTotalNodesCount(dataItem, loadedNodesCount) {
    if (isPresent(dataItem) && isPresent(this.totalField)) {
      return dataItem[this.totalField];
    } else if (!isPresent(dataItem) && isPresent(this.totalRootNodes)) {
      return this.totalRootNodes;
    } else {
      return loadedNodesCount;
    }
  }
  getInitalPageSize() {
    return this.pageSize;
  }
};
LoadMoreDirective.ɵfac = function LoadMoreDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadMoreDirective)(ɵɵdirectiveInject(TreeViewComponent));
};
LoadMoreDirective.ɵdir = ɵɵdefineDirective({
  type: LoadMoreDirective,
  selectors: [["", "kendoTreeViewLoadMore", ""]],
  inputs: {
    loadMoreNodes: [0, "kendoTreeViewLoadMore", "loadMoreNodes"],
    pageSize: "pageSize",
    totalRootNodes: "totalRootNodes",
    totalField: "totalField"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadMoreDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewLoadMore]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }];
  }, {
    loadMoreNodes: [{
      type: Input,
      args: ["kendoTreeViewLoadMore"]
    }],
    pageSize: [{
      type: Input
    }],
    totalRootNodes: [{
      type: Input
    }],
    totalField: [{
      type: Input
    }]
  });
})();
var CustomMessagesComponent = class extends TreeViewMessages {
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
  selectors: [["kendo-treeview-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TreeViewMessages,
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
        provide: TreeViewMessages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-treeview-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SelectDirective = class {
  constructor(treeView, navigationService) {
    this.treeView = treeView;
    this.navigationService = navigationService;
    this.selectedKeysChange = new EventEmitter();
    this.subscriptions = new Subscription();
    this.selectActions = {
      "multiple": (e) => this.selectMultiple(e),
      "single": (e) => this.selectSingle(e)
    };
    this.state = /* @__PURE__ */ new Set();
    this.subscriptions.add(this.treeView.selectionChange.subscribe(this.select.bind(this)));
    this.treeView.isSelected = (dataItem, index) => this.state.has(this.itemKey({
      dataItem,
      index
    }));
    this.navigationService.deselectAllButCurrentItem.subscribe((node) => {
      this.selectSingle(node);
    });
  }
  /**
   * @hidden
   */
  set isSelected(value) {
    this.treeView.isSelected = value;
  }
  get getAriaMultiselectable() {
    return this.options.mode === "multiple";
  }
  get options() {
    const defaultOptions = {
      enabled: true,
      mode: "single"
    };
    if (!isPresent(this.selection) || typeof this.selection === "string") {
      return defaultOptions;
    }
    const selectionSettings = isBoolean(this.selection) ? {
      enabled: this.selection
    } : this.selection;
    return Object.assign(defaultOptions, selectionSettings);
  }
  ngOnChanges(changes) {
    if (isChanged("selectedKeys", changes, false) && changes["selectedKeys"].currentValue !== this.lastChange) {
      this.state = new Set(changes["selectedKeys"].currentValue);
    }
    const isSelectionBooleanTrue = typeof this.selection === "boolean" && this.selection;
    this.navigationService.selection = isSelectionBooleanTrue ? "single" : this.selection?.mode;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  itemKey(e) {
    if (!this.selectKey) {
      return e.index;
    }
    if (typeof this.selectKey === "string") {
      return e.dataItem[this.selectKey];
    }
    if (typeof this.selectKey === "function") {
      return this.selectKey(e);
    }
  }
  select(e) {
    const {
      enabled,
      mode
    } = this.options;
    const performSelection = this.selectActions[mode] || noop;
    if (!enabled) {
      return;
    }
    performSelection(e);
  }
  selectSingle(node) {
    const key = this.itemKey(node);
    if (!this.state.has(key)) {
      this.state.clear();
      this.state.add(key);
      this.notify();
    }
  }
  selectMultiple(node) {
    const key = this.itemKey(node);
    const isSelected2 = this.state.has(key);
    if (!isPresent(key)) {
      return;
    }
    if (isSelected2) {
      this.state.delete(key);
    } else {
      this.state.add(key);
    }
    this.notify();
  }
  notify() {
    this.lastChange = Array.from(this.state);
    this.selectedKeysChange.emit(this.lastChange);
  }
};
SelectDirective.ɵfac = function SelectDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectDirective)(ɵɵdirectiveInject(TreeViewComponent), ɵɵdirectiveInject(NavigationService));
};
SelectDirective.ɵdir = ɵɵdefineDirective({
  type: SelectDirective,
  selectors: [["", "kendoTreeViewSelectable", ""]],
  hostVars: 1,
  hostBindings: function SelectDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-multiselectable", ctx.getAriaMultiselectable);
    }
  },
  inputs: {
    isSelected: "isSelected",
    selectKey: [0, "selectBy", "selectKey"],
    selection: [0, "kendoTreeViewSelectable", "selection"],
    selectedKeys: "selectedKeys"
  },
  outputs: {
    selectedKeysChange: "selectedKeysChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTreeViewSelectable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TreeViewComponent
    }, {
      type: NavigationService
    }];
  }, {
    isSelected: [{
      type: Input
    }],
    selectKey: [{
      type: Input,
      args: ["selectBy"]
    }],
    selection: [{
      type: Input,
      args: ["kendoTreeViewSelectable"]
    }],
    selectedKeys: [{
      type: Input
    }],
    selectedKeysChange: [{
      type: Output
    }],
    getAriaMultiselectable: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }]
  });
})();
var KENDO_TREEVIEW = [TreeViewComponent, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective, DragAndDropDirective, DragClueTemplateDirective, DropHintTemplateDirective, DragAndDropEditingDirective, LoadMoreDirective, LoadMoreButtonTemplateDirective, CustomMessagesComponent];
var TreeViewModule = class {
};
TreeViewModule.ɵfac = function TreeViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeViewModule)();
};
TreeViewModule.ɵmod = ɵɵdefineNgModule({
  type: TreeViewModule,
  imports: [TreeViewComponent, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective, DragAndDropDirective, DragClueTemplateDirective, DropHintTemplateDirective, DragAndDropEditingDirective, LoadMoreDirective, LoadMoreButtonTemplateDirective, CustomMessagesComponent],
  exports: [TreeViewComponent, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective, DragAndDropDirective, DragClueTemplateDirective, DropHintTemplateDirective, DragAndDropEditingDirective, LoadMoreDirective, LoadMoreButtonTemplateDirective, CustomMessagesComponent]
});
TreeViewModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService],
  imports: [TreeViewComponent, CustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeViewModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_TREEVIEW],
      exports: [...KENDO_TREEVIEW],
      providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService]
    }]
  }], null, null);
})();

export {
  NodeTemplateDirective,
  LoadMoreButtonTemplateDirective,
  DataBoundComponent,
  ExpandableComponent,
  LocalizedMessagesDirective,
  TreeViewComponent,
  CheckDirective,
  DisableDirective,
  DragAndDropEditingDirective,
  DropAction,
  DropPosition,
  TreeItemDropEvent,
  TreeItemDragStartEvent,
  TreeItemDragEvent,
  DragClueService,
  DropHintService,
  DragClueTemplateDirective,
  DropHintTemplateDirective,
  DragAndDropDirective,
  ExpandDirective,
  FlatDataBindingDirective,
  HierarchyBindingDirective,
  LoadMoreDirective,
  CustomMessagesComponent,
  SelectDirective,
  KENDO_TREEVIEW,
  TreeViewModule
};
//# sourceMappingURL=chunk-MLTKKSEN.js.map
