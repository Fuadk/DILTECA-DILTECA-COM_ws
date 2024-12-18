import {
  ButtonComponent
} from "./chunk-EZZZ6A5H.js";
import {
  document_default,
  offset_default,
  position_with_scroll_default,
  scrollPosition,
  windowViewport
} from "./chunk-KVPGWL76.js";
import {
  windowIcon,
  windowMinimizeIcon,
  windowRestoreIcon,
  xIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  DraggableDirective,
  WatermarkOverlayComponent,
  focusableSelector,
  isChanged,
  isDocumentAvailable,
  setHTMLAttributes,
  shouldShowValidationUI
} from "./chunk-HRNBUZH3.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService,
  MessageService,
  RTL
} from "./chunk-GRNNJSKN.js";
import {
  AnimationBuilder,
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-LMGKJMTG.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-JQMZVAPB.js";
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
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
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  merge
} from "./chunk-PC7SNX6C.js";
import {
  Subject,
  Subscription,
  filter,
  map,
  of,
  share,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-NXOOB3F7.js";

// node_modules/@progress/kendo-angular-dialog/fesm2020/progress-kendo-angular-dialog.mjs
var _c0 = ["*"];
function DialogActionsComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!actions"]);
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 6);
    ɵɵelementContainerEnd();
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const action_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onButtonClick(action_r2, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.buttonClass(action_r2));
    ɵɵattribute("aria-label", action_r2.text);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", action_r2.text, " ");
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialogActionsComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 3)(2, DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const defaultAction_r4 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isDivider(action_r2))("ngIfElse", defaultAction_r4);
  }
}
function DialogActionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialogActionsComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.actionsArray);
  }
}
function DialogActionsComponent_ng_template_2_Template(rf, ctx) {
}
var _c1 = ["dialog"];
var _c2 = [[["kendo-dialog-titlebar"]], "*", [["kendo-dialog-actions"]]];
var _c3 = ["kendo-dialog-titlebar", "*", "kendo-dialog-actions"];
function DialogComponent_kendo_dialog_titlebar_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-dialog-titlebar", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("closeTitle", ctx_r0.closeTitle)("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function DialogComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!title"]);
  }
}
function DialogComponent_ng_content_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!contentTemplate"]);
  }
}
function DialogComponent_8_ng_template_0_Template(rf, ctx) {
}
function DialogComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialogComponent_8_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function DialogComponent_ng_content_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "!actions"]);
  }
}
function DialogComponent_kendo_dialog_actions_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-dialog-actions", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("actions", ctx_r0.actions)("layout", ctx_r0.actionsLayout);
  }
}
function DialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
var _c4 = (a0) => ({
  "$implicit": a0
});
function WindowTitleBarComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!template"]);
  }
}
function WindowTitleBarComponent_1_ng_template_0_Template(rf, ctx) {
}
function WindowTitleBarComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowTitleBarComponent_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r0.service));
  }
}
var _c5 = ["kendoWindowCloseAction", ""];
function WindowCloseActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.xIcon);
  }
}
function WindowCloseActionDirective_span_1_Template(rf, ctx) {
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
function WindowCloseActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c6 = ["kendoWindowRestoreAction", ""];
function WindowRestoreActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowRestoreIcon);
  }
}
function WindowRestoreActionDirective_span_1_Template(rf, ctx) {
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
function WindowRestoreActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c7 = ["kendoWindowMaximizeAction", ""];
function WindowMaximizeActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowIcon);
  }
}
function WindowMaximizeActionDirective_span_1_Template(rf, ctx) {
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
function WindowMaximizeActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c8 = ["kendoWindowMinimizeAction", ""];
function WindowMinimizeActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowMinimizeIcon);
  }
}
function WindowMinimizeActionDirective_span_1_Template(rf, ctx) {
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
function WindowMinimizeActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c9 = [[["kendo-window-titlebar"]], "*"];
var _c10 = ["kendo-window-titlebar", "*"];
function WindowComponent_kendo_window_titlebar_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-window-titlebar", 6)(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵelement(4, "button", 9)(5, "button", 10)(6, "button", 11)(7, "button", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("template", ctx_r0.titleBarTemplate)("id", ctx_r0.titleId);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.title);
    ɵɵadvance(2);
    ɵɵattribute("title", ctx_r0.minimizeButtonTitle)("aria-label", ctx_r0.minimizeButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.maximizeButtonTitle)("aria-label", ctx_r0.maximizeButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.restoreButtonTitle)("aria-label", ctx_r0.restoreButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.closeButtonTitle)("aria-label", ctx_r0.closeButtonTitle);
  }
}
function WindowComponent_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!showDefaultTitleBar"]);
  }
}
function WindowComponent_div_4_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!contentTemplate"]);
  }
}
function WindowComponent_div_4_2_ng_template_0_Template(rf, ctx) {
}
function WindowComponent_div_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowComponent_div_4_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function WindowComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, WindowComponent_div_4_ng_content_1_Template, 1, 0, "ng-content", 2)(2, WindowComponent_div_4_2_Template, 1, 1, null, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hidden", ctx_r0.state === "minimized" && ctx_r0.keepContent);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.contentTemplate);
  }
}
function WindowComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 16);
  }
  if (rf & 2) {
    const dir_r2 = ctx.$implicit;
    ɵɵproperty("direction", dir_r2);
  }
}
function WindowComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowComponent_ng_template_5_div_0_Template, 1, 1, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r0.resizeDirections);
  }
}
function WindowComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 17);
  }
}
var isPresent = (value) => value !== null && value !== void 0;
var isTruthy = (value) => !!value;
var toClassList = (classNames) => String(classNames).trim().split(" ");
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
var Keys;
(function(Keys2) {
  Keys2[Keys2["esc"] = 27] = "esc";
  Keys2[Keys2["tab"] = 9] = "tab";
  Keys2[Keys2["enter"] = 13] = "enter";
  Keys2[Keys2["space"] = 32] = "space";
  Keys2[Keys2["ctrl"] = 17] = "ctrl";
  Keys2[Keys2["shift"] = 16] = "shift";
  Keys2[Keys2["left"] = 37] = "left";
  Keys2[Keys2["up"] = 38] = "up";
  Keys2[Keys2["right"] = 39] = "right";
  Keys2[Keys2["down"] = 40] = "down";
})(Keys || (Keys = {}));
var DIALOG_ELEMENTS_HANDLING_ESC_KEY = "k-dialog-wrapper k-actions k-dialog-titlebar-action";
var DIALOG_ELEMENTS_HANDLING_ARROWS = "k-actions";
var WINDOW_CLASSES = "k-window";
var hasClasses = (element, classNames) => {
  const namesList = toClassList(classNames);
  return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  return !!(rect.width && rect.height) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusable = (element, checkVisibility = true) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const validTabIndex = tabIndex !== null && !isNaN(tabIndex) && tabIndex > -1;
    let focusable = false;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled;
    } else {
      focusable = validTabIndex;
    }
    return focusable && (!checkVisibility || isVisible(element));
  }
  return false;
};
var parseCSSClassNames = (value) => {
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName[0]) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var preventDefault = ({
  originalEvent: event
}) => {
  event.stopPropagation();
  event.preventDefault();
};
var RESIZE_DIRECTIONS = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
var OFFSET_STYLES = ["top", "left", "width", "height"];
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent(value) && !Array.isArray(value) && typeof value === "object";
var isNumber = (value) => typeof value === "number" && isFinite(value);
var createValueWithUnit = (value) => value + (isNumber(value) ? "px" : "");
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var findPrimaryButton = (buttons) => {
  for (let i = buttons.length - 1; i >= 0; i--) {
    const classList = buttons[i].classList;
    for (let j = 0; j < classList.length; j++) {
      if (classList[j].endsWith("-primary")) {
        return buttons[i];
      }
    }
  }
};
var DialogActionsComponent = class {
  constructor(el) {
    this.el = el;
    this.layout = "stretched";
    this.action = new EventEmitter();
    this.hostClasses = true;
  }
  /**
   * Allows the declarative specification of the actions.
   */
  set actions(value) {
    if (value instanceof TemplateRef) {
      this.actionsTemplate = value;
    } else if (Array.isArray(value)) {
      this.actionsArray = value;
    } else {
      throw new Error('"actions" must be either TemplateRef or DialogAction[] instance.');
    }
  }
  get startClassName() {
    return this.layout === "start";
  }
  get centerClassName() {
    return this.layout === "center";
  }
  get endClassName() {
    return this.layout === "end";
  }
  get stretchedClassName() {
    return this.layout === "stretched";
  }
  /**
   * @hidden
   */
  onButtonClick(action, _e) {
    this.action.emit(action);
  }
  /**
   * @hidden
   */
  buttonClass(action) {
    let classes = ["k-button k-button-md k-rounded-md"];
    const fillMode = action.fillMode ? action.fillMode : "solid";
    const themeColor = action.themeColor ? action.themeColor : "base";
    const cssClasses = action.cssClass ? parseCSSClassNames(action.cssClass) : [];
    classes.push(`k-button-${fillMode} k-button-${fillMode}-${themeColor}`);
    if (cssClasses.length > 0) {
      classes = classes.concat(cssClasses);
    }
    return classes.join(" ");
  }
  /**
   * @hidden
   */
  isDivider(action) {
    return action === "spacer";
  }
};
DialogActionsComponent.ɵfac = function DialogActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogActionsComponent)(ɵɵdirectiveInject(ElementRef));
};
DialogActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogActionsComponent,
  selectors: [["kendo-dialog-actions"]],
  hostVars: 16,
  hostBindings: function DialogActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-actions", ctx.hostClasses)("k-actions-horizontal", ctx.hostClasses)("k-window-actions", ctx.hostClasses)("k-dialog-actions", ctx.hostClasses)("k-actions-start", ctx.startClassName)("k-actions-center", ctx.centerClassName)("k-actions-end", ctx.endClassName)("k-actions-stretched", ctx.stretchedClassName);
    }
  },
  inputs: {
    actions: "actions",
    layout: "layout"
  },
  outputs: {
    action: "action"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 4,
  consts: [["actionTemplate", ""], ["defaultAction", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf"], [1, "k-spacer"], ["type", "button", 3, "click", "ngClass"]],
  template: function DialogActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, DialogActionsComponent_ng_content_0_Template, 1, 0, "ng-content", 2)(1, DialogActionsComponent_ng_container_1_Template, 2, 1, "ng-container", 3)(2, DialogActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 4, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const actionTemplate_r5 = ɵɵreference(3);
      ɵɵproperty("ngIf", !ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actionsArray)("ngIfElse", actionTemplate_r5);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.actionsTemplate);
    }
  },
  dependencies: [NgIf, NgForOf, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogActionsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-dialog-actions",
      template: `
        <ng-content *ngIf="!actions"></ng-content>
        <ng-container *ngIf="actionsArray; else actionTemplate">
            <ng-container *ngFor="let action of actionsArray">
                <ng-container *ngIf="isDivider(action); else defaultAction">
                    <span class="k-spacer"></span>
                </ng-container>
                <ng-template #defaultAction>
                    <button
                        type="button"
                        [ngClass]="buttonClass(action)"
                        (click)="onButtonClick(action, $event)"
                        [attr.aria-label]="action.text"
                    >
                        {{ action.text }}
                    </button>
                </ng-template>
            </ng-container>
        </ng-container>
        <ng-template #actionTemplate [ngTemplateOutlet]="actionsTemplate"></ng-template>
    `,
      standalone: true,
      imports: [NgIf, NgForOf, NgClass, NgTemplateOutlet]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    actions: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    action: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }, {
      type: HostBinding,
      args: ["class.k-window-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-dialog-actions"]
    }],
    startClassName: [{
      type: HostBinding,
      args: ["class.k-actions-start"]
    }],
    centerClassName: [{
      type: HostBinding,
      args: ["class.k-actions-center"]
    }],
    endClassName: [{
      type: HostBinding,
      args: ["class.k-actions-end"]
    }],
    stretchedClassName: [{
      type: HostBinding,
      args: ["class.k-actions-stretched"]
    }]
  });
})();
var PreventableEvent = class {
  /**
   * @hidden
   */
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
var DIALOG_LOCALIZATION_SERVICE = new InjectionToken("Dialog LocalizationService");
var TitleBarLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, rtl, dialogLocalization) {
    super(prefix, messageService, rtl);
    this.dialogLocalization = dialogLocalization;
  }
  get(shortKey) {
    if (this.dialogLocalization) {
      return this.dialogLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
};
TitleBarLocalizationService.ɵfac = function TitleBarLocalizationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TitleBarLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(DIALOG_LOCALIZATION_SERVICE, 8));
};
TitleBarLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: TitleBarLocalizationService,
  factory: TitleBarLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleBarLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }, {
      type: LocalizationService,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [DIALOG_LOCALIZATION_SERVICE]
      }]
    }];
  }, null);
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
  selectors: [["kendo-dialog-messages-base"]],
  inputs: {
    closeTitle: "closeTitle",
    restoreTitle: "restoreTitle",
    maximizeTitle: "maximizeTitle",
    minimizeTitle: "minimizeTitle"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-dialog-messages-base"
    }]
  }], null, {
    closeTitle: [{
      type: Input
    }],
    restoreTitle: [{
      type: Input
    }],
    maximizeTitle: [{
      type: Input
    }],
    minimizeTitle: [{
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
  selectors: [["", "kendoDialogLocalizedMessages", ""], ["", "kendoWindowLocalizedMessages", ""], ["", "kendoDialogTitleBarLocalizedMessages", ""]],
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
    [kendoDialogLocalizedMessages],
    [kendoWindowLocalizedMessages],
    [kendoDialogTitleBarLocalizedMessages]
  `,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DialogTitleBarComponent = class {
  constructor(zone, hostElement, localizationService) {
    this.zone = zone;
    this.hostElement = hostElement;
    this.localizationService = localizationService;
    this.close = new EventEmitter();
    this.xIcon = xIcon;
  }
  get className() {
    return true;
  }
  get closeButtonTitle() {
    return this.closeTitle || this.localizationService.get("closeTitle");
  }
  ngAfterViewInit() {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      const element = this.hostElement.nativeElement.querySelector(".k-dialog-title");
      element.setAttribute("id", this.id);
    });
  }
  /**
   * @hidden
   */
  onCloseClick(e) {
    e.preventDefault();
    const eventArgs = new PreventableEvent();
    this.close.emit(eventArgs);
  }
};
DialogTitleBarComponent.ɵfac = function DialogTitleBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogTitleBarComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService, 8));
};
DialogTitleBarComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogTitleBarComponent,
  selectors: [["kendo-dialog-titlebar"]],
  hostVars: 4,
  hostBindings: function DialogTitleBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-window-titlebar", ctx.className)("k-dialog-titlebar", ctx.className);
    }
  },
  inputs: {
    id: "id",
    closeTitle: "closeTitle"
  },
  outputs: {
    close: "close"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TitleBarLocalizationService, {
    provide: LocalizationService,
    useExisting: TitleBarLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.dialog"
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_0 = goog.getMsg("Close");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.dialog.closeTitle|The title of the close button:Close`;
    }
    return [["kendoDialogTitleBarLocalizedMessages", "", "closeTitle", i18n_0], [1, "k-window-title", "k-dialog-title"], [1, "k-window-titlebar-actions", "k-dialog-titlebar-actions"], ["kendoButton", "", "fillMode", "flat", "type", "button", "icon", "close", 1, "k-window-titlebar-action", "k-dialog-titlebar-action", 3, "click", "svgIcon"]];
  },
  template: function DialogTitleBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0, 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "button", 3);
      ɵɵlistener("click", function DialogTitleBarComponent_Template_button_click_4_listener($event) {
        return ctx.onCloseClick($event);
      });
      ɵɵelementEnd()();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("svgIcon", ctx.xIcon);
      ɵɵattribute("title", ctx.closeButtonTitle)("aria-label", ctx.closeButtonTitle);
    }
  },
  dependencies: [LocalizedMessagesDirective, ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogTitleBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-dialog-titlebar",
      providers: [TitleBarLocalizationService, {
        provide: LocalizationService,
        useExisting: TitleBarLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.dialog"
      }],
      template: `
         <ng-container
            kendoDialogTitleBarLocalizedMessages
            i18n-closeTitle="kendo.dialog.closeTitle|The title of the close button"
            closeTitle="Close"
        >
            <span class="k-window-title k-dialog-title">
                <ng-content></ng-content>
            </span>

            <div class="k-window-titlebar-actions k-dialog-titlebar-actions">
                <button
                    kendoButton
                    fillMode="flat"
                    type="button"
                    [attr.title]="closeButtonTitle"
                    [attr.aria-label]="closeButtonTitle"
                    icon="close"
                    [svgIcon]="xIcon"
                    class="k-window-titlebar-action k-dialog-titlebar-action"
                    (click)="onCloseClick($event)"
                >
                </button>
            </div>
        </ng-container>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, ButtonComponent]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: LocalizationService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    close: [{
      type: Output
    }],
    id: [{
      type: Input
    }],
    closeTitle: [{
      type: Input
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-window-titlebar"]
    }, {
      type: HostBinding,
      args: ["class.k-dialog-titlebar"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-dialog",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372216,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DialogCloseResult = class {
};
function animations(duration, direction, animationType) {
  switch (animationType) {
    case "slide": {
      const translate = direction === "left" || direction === "right" ? "translateX" : "translateY";
      const start = direction === "right" || direction === "down" ? -100 : 100;
      const end = 0;
      return [style({
        transform: `${translate}(${start}%)`
      }), animate(`${duration}ms ease-in`, style({
        transform: `${translate}(${end}%)`
      }))];
    }
    case "expand": {
      const scale = direction === "up" || direction === "down" ? "scaleY" : "scaleX";
      const startScale = 0;
      const endScale = 1;
      let origin;
      if (direction === "down") {
        origin = "top";
      } else if (direction === "left") {
        origin = "right";
      } else if (direction === "right") {
        origin = "left";
      } else {
        origin = "bottom";
      }
      return [style({
        transform: `${scale}(${startScale})`,
        transformOrigin: origin
      }), animate(`${duration}ms ease-in`, style({
        transform: `${scale}(${endScale})`
      }))];
    }
    case "zoom": {
      const startZoom = 0;
      const endZoom = 1;
      return [animate(duration, keyframes([style({
        transform: `scale(${startZoom})`
      }), style({
        transform: `scale(${endZoom})`
      })]))];
    }
    case "fade": {
      const startFade = 0;
      const endFade = 1;
      return [animate(duration, keyframes([style({
        opacity: `${startFade}`
      }), style({
        opacity: `${endFade}`
      })]))];
    }
    case "translate":
      return [style({
        transform: "translate(0, -10%)"
      }), animate(`${duration}ms cubic-bezier(.2, 1, .2, 1)`)];
    default:
      return [style({
        transform: "translate(0, -10%)"
      }), animate(`${duration}ms cubic-bezier(.2, 1, .2, 1)`)];
  }
}
var createPlayer = (builder, animation, animatedElement) => {
  const factory = builder.build(animation);
  let player = factory.create(animatedElement);
  player.onDone(() => {
    if (player) {
      player.destroy();
      player = null;
    }
  });
  return player;
};
var animateContent = (animation, defAnimationConfig, animatedElement, builder) => {
  let animationConfig = defAnimationConfig;
  if (typeof animation !== "boolean") {
    animationConfig = animation;
    animationConfig.duration = animationConfig.duration ? animationConfig.duration : defAnimationConfig.duration;
  }
  const animationSpecs = animations(animationConfig.duration, animationConfig.direction, animationConfig.type);
  const player = createPlayer(builder, animationSpecs, animatedElement);
  player.play();
};
var DEFAULT_ANIMATION_CONFIG = {
  duration: 300,
  type: "translate"
};
var DialogComponent = class {
  constructor(wrapper, renderer, localization, cdr, ngZone, builder) {
    this.wrapper = wrapper;
    this.renderer = renderer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.builder = builder;
    this.actionsLayout = "stretched";
    this.animation = true;
    this.titleId = null;
    this.contentId = null;
    this.showLicenseWatermark = false;
    this.action = new EventEmitter();
    this.close = new EventEmitter();
    this.tabIndex = 0;
    this._themeColor = null;
    this.subscriptions = [];
    this.domSubs = new Subscription();
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subscriptions.push(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.titleId = this.generateTitleId();
    this.contentId = this.generateContentId();
  }
  /**
   * The Dialog allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color to the titlebar while also amending the text color accordingly.
   *
   * The possible values are:
   * * `primary`
   * * `dark`
   * * `light`
   */
  set themeColor(themeColor) {
    this.handleThemeColorClass(this.themeColor, themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * @hidden
   */
  set htmlAttributes(attributes) {
    setHTMLAttributes(attributes, this.renderer, this.wrapper.nativeElement);
    const el = this.wrapper.nativeElement;
    const dir = el.getAttribute("dir");
    const tIndex = el.getAttribute("tabindex");
    if (this.direction !== dir && dir) {
      this.direction = dir;
    }
    if (this.tabIndex !== tIndex && tIndex) {
      this.tabIndex = tIndex;
    }
    this._htmlAttributes = attributes;
  }
  get htmlAttributes() {
    return this._htmlAttributes;
  }
  /**
   * @hidden
   */
  set cssClass(classes) {
    this.setServiceClasses(this._cssClass, classes);
    this._cssClass = classes;
  }
  get cssClass() {
    return this._cssClass;
  }
  get dir() {
    return this.direction;
  }
  ngAfterContentInit() {
    this.bubble("close", this.titlebarContent.first);
    this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-describedby", this.contentId);
    if (this.titlebarContent.first) {
      this.titlebarContent.first.id = this.titleId;
    } else {
      this.subscriptions.push(this.titlebarContent.changes.subscribe(() => {
        if (isPresent(this.titlebarContent.first)) {
          this.titlebarContent.first.id = this.titleId;
          this.ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.bubble("close", this.titlebarContent.first);
            this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
          });
        }
      }));
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.handleInitialFocus();
    });
    this.bubble("close", this.titlebarView.first);
    this.bubble("action", this.actionsView);
    if (this.titlebarView.first || this.titlebarContent.first) {
      this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
    } else {
      this.subscriptions.push(this.titlebarView.changes.subscribe(() => {
        if (isPresent(this.titlebarView.first)) {
          this.titlebarView.first.id = this.titleId;
          this.ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.bubble("close", this.titlebarView.first);
            this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
          });
        }
      }));
    }
    this.initDomEvents();
    this.handleThemeColorClass(null, this.themeColor);
  }
  ngOnInit() {
    if (this.animation) {
      animateContent(this.animation, DEFAULT_ANIMATION_CONFIG, this.dialog.nativeElement, this.builder);
    }
    this.renderer.removeAttribute(this.wrapper.nativeElement, "title");
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = [];
    if (this.domSubs) {
      this.domSubs.unsubscribe();
    }
  }
  /**
   * Focuses the wrapper of the Dialog component.
   */
  focus() {
    const wrapper = this.wrapper.nativeElement;
    if (isPresent(wrapper)) {
      wrapper.focus();
    }
  }
  initDomEvents() {
    if (!this.wrapper) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.wrapper.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  onKeyDown(event) {
    const target = event.target;
    const parent = target.parentElement;
    if (hasClasses(target, DIALOG_ELEMENTS_HANDLING_ESC_KEY) || hasClasses(parent, DIALOG_ELEMENTS_HANDLING_ESC_KEY)) {
      if (event.keyCode === Keys.esc) {
        this.ngZone.run(() => {
          this.close.emit(new DialogCloseResult());
        });
      }
    }
    if (hasClasses(target, "k-button") && hasClasses(parent, DIALOG_ELEMENTS_HANDLING_ARROWS) && (event.keyCode === Keys.left || event.keyCode === Keys.right)) {
      this.ngZone.run(() => {
        this.handleActionButtonFocus(parent, event.keyCode);
      });
    }
    if (event.keyCode === Keys.tab) {
      this.ngZone.run(() => {
        this.keepFocusWithinComponent(target, event);
      });
    }
  }
  setServiceClasses(prevValue, value) {
    const el = this.wrapper.nativeElement;
    if (prevValue) {
      parseCSSClassNames(prevValue).forEach((className) => {
        this.renderer.removeClass(el, className);
      });
    }
    if (value) {
      parseCSSClassNames(value).forEach((className) => {
        this.renderer.addClass(el, className);
      });
    }
  }
  /**
   * @hidden
   */
  handleInitialFocus() {
    const wrapper = this.wrapper.nativeElement;
    const primaryButton = this.findPrimary(wrapper);
    if (this.autoFocusedElement) {
      const initiallyFocusedElement = wrapper.querySelector(this.autoFocusedElement);
      if (initiallyFocusedElement) {
        initiallyFocusedElement.focus();
      }
    } else if (this.shouldFocusPrimary(primaryButton)) {
      primaryButton.focus();
    } else {
      wrapper.focus();
    }
  }
  /**
   * @hidden
   */
  findPrimary(wrapper) {
    const actionBtns = wrapper.querySelectorAll(".k-actions .k-button");
    return findPrimaryButton(actionBtns);
  }
  /**
   * @hidden
   */
  handleActionButtonFocus(parent, key) {
    const focusableActionButtons = this.getAllFocusableChildren(parent);
    for (let i = 0; i < focusableActionButtons.length; i++) {
      const current = focusableActionButtons[i];
      if (current === document.activeElement) {
        if (key === Keys.left && i > 0) {
          focusableActionButtons[i - 1].focus();
          break;
        }
        if (key === Keys.right && i < focusableActionButtons.length - 1) {
          focusableActionButtons[i + 1].focus();
          break;
        }
      }
    }
  }
  /**
   * @hidden
   */
  keepFocusWithinComponent(target, event) {
    const wrapper = this.wrapper.nativeElement;
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
  /**
   * @hidden
   */
  shouldFocusPrimary(el) {
    return isPresent(el) && isFocusable(el);
  }
  /**
   * @hidden
   */
  getAllFocusableChildren(parent) {
    return parent.querySelectorAll(focusableSelector);
  }
  /**
   * @hidden
   */
  getFirstAndLastFocusable(parent) {
    const all = this.getAllFocusableChildren(parent);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
  /**
   * @hidden
   */
  generateTitleId() {
    return "kendo-dialog-title-" + Math.ceil(Math.random() * 1e6).toString();
  }
  /**
   * @hidden
   */
  generateContentId() {
    return "kendo-dialog-content-" + Math.ceil(Math.random() * 1e6).toString();
  }
  get wrapperClass() {
    return true;
  }
  get styles() {
    const styles = {};
    if (this.width) {
      styles.width = createValueWithUnit(this.width);
    }
    if (this.height) {
      styles.height = createValueWithUnit(this.height);
    }
    if (this.minWidth) {
      styles.minWidth = createValueWithUnit(this.minWidth);
    }
    if (this.maxWidth) {
      styles.maxWidth = createValueWithUnit(this.maxWidth);
    }
    if (this.minHeight) {
      styles.minHeight = createValueWithUnit(this.minHeight);
    }
    if (this.maxHeight) {
      styles.maxHeight = createValueWithUnit(this.maxHeight);
    }
    return styles;
  }
  bubble(eventName, component) {
    if (component) {
      const emit = (e) => this[eventName].emit(e);
      const s = component[eventName].subscribe(emit);
      this.subscriptions.push(s);
    }
  }
  handleThemeColorClass(previousValue, currentValue) {
    const dialog = this.dialog.nativeElement;
    if (previousValue) {
      const classToRemove = `k-dialog-${previousValue}`;
      this.renderer.removeClass(dialog, classToRemove);
    }
    if (currentValue) {
      const classToAdd = `k-dialog-${currentValue}`;
      this.renderer.addClass(dialog, classToAdd);
    }
  }
};
DialogComponent.ɵfac = function DialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(AnimationBuilder));
};
DialogComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogComponent,
  selectors: [["kendo-dialog"]],
  contentQueries: function DialogComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DialogTitleBarComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titlebarContent = _t);
    }
  },
  viewQuery: function DialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DialogActionsComponent, 5);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(DialogTitleBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialog = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titlebarView = _t);
    }
  },
  hostVars: 4,
  hostBindings: function DialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir)("tabIndex", ctx.tabIndex);
      ɵɵclassProp("k-dialog-wrapper", ctx.wrapperClass);
    }
  },
  inputs: {
    actions: "actions",
    actionsLayout: "actionsLayout",
    autoFocusedElement: "autoFocusedElement",
    title: "title",
    width: "width",
    minWidth: "minWidth",
    maxWidth: "maxWidth",
    height: "height",
    minHeight: "minHeight",
    maxHeight: "maxHeight",
    animation: "animation",
    themeColor: "themeColor"
  },
  outputs: {
    action: "action",
    close: "close"
  },
  exportAs: ["kendoDialog"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: DIALOG_LOCALIZATION_SERVICE,
    useExisting: LocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.dialog"
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 12,
  vars: 10,
  consts: () => {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_1 = goog.getMsg("Close");
      i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.dialog.closeTitle|The title of the close button:Close`;
    }
    return [["dialog", ""], ["kendoDialogLocalizedMessages", "", "closeTitle", i18n_1], [1, "k-overlay"], ["role", "dialog", "aria-modal", "true", 1, "k-window", "k-dialog", 3, "ngStyle"], [3, "closeTitle", "id", 4, "ngIf"], [4, "ngIf"], [1, "k-window-content", "k-dialog-content", 3, "id"], [3, "actions", "layout", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [3, "closeTitle", "id"], [3, "ngTemplateOutlet"], [3, "actions", "layout"], ["kendoWatermarkOverlay", ""]];
  },
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵelementContainerStart(0, 1);
      ɵɵelement(1, "div", 2);
      ɵɵelementStart(2, "div", 3, 0);
      ɵɵtemplate(4, DialogComponent_kendo_dialog_titlebar_4_Template, 2, 3, "kendo-dialog-titlebar", 4)(5, DialogComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
      ɵɵelementStart(6, "div", 6);
      ɵɵtemplate(7, DialogComponent_ng_content_7_Template, 1, 0, "ng-content", 5)(8, DialogComponent_8_Template, 1, 1, null, 5);
      ɵɵelementEnd();
      ɵɵtemplate(9, DialogComponent_ng_content_9_Template, 1, 0, "ng-content", 5)(10, DialogComponent_kendo_dialog_actions_10_Template, 1, 2, "kendo-dialog-actions", 7)(11, DialogComponent_div_11_Template, 1, 0, "div", 8);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("@overlayAppear", void 0);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.styles);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.title);
      ɵɵadvance();
      ɵɵproperty("id", ctx.contentId);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgStyle, NgIf, DialogTitleBarComponent, NgTemplateOutlet, DialogActionsComponent, WatermarkOverlayComponent],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAppear", [state("in", style({
      opacity: 1
    })), transition("void => *", [style({
      opacity: 0.1
    }), animate(".3s cubic-bezier(.2, .6, .4, 1)")])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{
      animations: [trigger("overlayAppear", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0.1
      }), animate(".3s cubic-bezier(.2, .6, .4, 1)")])])],
      exportAs: "kendoDialog",
      providers: [LocalizationService, {
        provide: DIALOG_LOCALIZATION_SERVICE,
        useExisting: LocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.dialog"
      }],
      selector: "kendo-dialog",
      template: `
        <ng-container
            kendoDialogLocalizedMessages
            i18n-closeTitle="kendo.dialog.closeTitle|The title of the close button"
            closeTitle="Close"
        >
            <div class="k-overlay" @overlayAppear></div>

            <div #dialog class="k-window k-dialog" role="dialog" aria-modal="true" [ngStyle]="styles">
                <kendo-dialog-titlebar *ngIf="title" [closeTitle]="closeTitle" [id]="titleId">{{ title }}</kendo-dialog-titlebar>
                <ng-content select="kendo-dialog-titlebar" *ngIf="!title"></ng-content>

                <div [id]="contentId" class="k-window-content k-dialog-content">
                    <ng-content *ngIf="!contentTemplate"></ng-content>
                    <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
                </div>

                <ng-content select="kendo-dialog-actions" *ngIf="!actions"></ng-content>
                <kendo-dialog-actions *ngIf="actions" [actions]="actions" [layout]="actionsLayout"> </kendo-dialog-actions>

                <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
            </div>
        </ng-container>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgStyle, NgIf, DialogTitleBarComponent, NgTemplateOutlet, DialogActionsComponent, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: AnimationBuilder
    }];
  }, {
    actions: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    autoFocusedElement: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    minHeight: [{
      type: Input
    }],
    maxHeight: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    action: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    titlebarContent: [{
      type: ContentChildren,
      args: [DialogTitleBarComponent, {
        descendants: false
      }]
    }],
    titlebarView: [{
      type: ViewChildren,
      args: [DialogTitleBarComponent]
    }],
    actionsView: [{
      type: ViewChild,
      args: [DialogActionsComponent, {
        static: false
      }]
    }],
    dialog: [{
      type: ViewChild,
      args: ["dialog", {
        static: true
      }]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-dialog-wrapper"]
    }]
  });
})();
var DialogRef = class {
};
var DialogContentBase = class {
  constructor(dialog) {
    this.dialog = dialog;
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    if (this.dialogTitleBar) {
      this.dialogTitleBar.close.pipe(filter((e) => !e.isDefaultPrevented())).subscribe(() => {
        this.dialog.close();
      });
    }
    if (this.dialogActions) {
      if (this.dialogActions.actions) {
        this.dialogActions.action.subscribe((action) => this.dialog.dialog.instance.action.emit(action));
      }
    }
  }
};
DialogContentBase.ɵfac = function DialogContentBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogContentBase)(ɵɵdirectiveInject(DialogRef));
};
DialogContentBase.ɵdir = ɵɵdefineDirective({
  type: DialogContentBase,
  viewQuery: function DialogContentBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DialogTitleBarComponent, 5);
      ɵɵviewQuery(DialogActionsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialogTitleBar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialogActions = _t.first);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContentBase, [{
    type: Directive
  }], function() {
    return [{
      type: DialogRef
    }];
  }, {
    dialogTitleBar: [{
      type: ViewChild,
      args: [DialogTitleBarComponent, {
        static: false
      }]
    }],
    dialogActions: [{
      type: ViewChild,
      args: [DialogActionsComponent, {
        static: false
      }]
    }]
  });
})();
var DialogContainerService = class _DialogContainerService {
  set container(container) {
    _DialogContainerService.container = container;
  }
  get container() {
    return _DialogContainerService.container;
  }
};
DialogContainerService.container = null;
DialogContainerService.ɵfac = function DialogContainerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogContainerService)();
};
DialogContainerService.ɵprov = ɵɵdefineInjectable({
  token: DialogContainerService,
  factory: DialogContainerService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContainerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DialogAction = class {
};
var DialogSettings = class {
};
var isNotComponent$1 = (component) => isString(component) || component instanceof TemplateRef;
var DialogInjector = class {
  constructor(getDialogRef, parentInjector) {
    this.getDialogRef = getDialogRef;
    this.parentInjector = parentInjector;
  }
  get(token, notFoundValue) {
    if (token === DialogRef) {
      return this.getDialogRef();
    }
    return this.parentInjector.get(token, notFoundValue);
  }
};
var DialogService = class {
  constructor(resolver, containerService) {
    this.resolver = resolver;
    this.containerService = containerService;
  }
  /**
   * Opens a Dialog window. Requires an element in the application that uses the
   * [`kendoDialogContainer`]({% slug api_dialog_dialogcontainerdirective %}) directive.
   * Created Dialogs will be mounted in the DOM directly after that element.
   *
   * @param {DialogAction} options - The options that define the Dialog.
   * @returns {DialogRef} - A reference to the Dialog object and the convenience properties.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <button kendoButton (click)="open()">Harmless button</button>
   *     <div kendoDialogContainer></div>
   *   `
   * })
   * export class AppComponent {
   *     constructor( private dialogService: DialogService ) {}
   *
   *     public open() {
   *         var dialog = this.dialogService.open({
   *           title: "Please confirm",
   *           content: "Are you sure?",
   *           actions: [
   *             { text: "No" },
   *             { text: "Yes", themeColor: 'primary' }
   *           ]
   *         });
   *
   *         dialog.result.subscribe((result) => {
   *           if (result instanceof DialogCloseResult) {
   *             console.log("close");
   *           } else {
   *             console.log("action", result);
   *           }
   *         });
   *     }
   * }
   * ```
   *
   */
  open(options) {
    const factory = this.resolver.resolveComponentFactory(DialogComponent);
    const container = options.appendTo || this.containerService.container;
    if (!container) {
      throw new Error(`
Cannot attach dialog to the page.
Add an element that uses the kendoDialogContainer directive, or set the 'appendTo' property.
See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/.
          `);
    }
    const dialogRef = {
      close: () => {
      },
      content: null,
      dialog: null,
      result: null
    };
    return this.initializeDialog(options.content, factory, container, dialogRef, options);
  }
  initializeDialog(component, factory, container, dialogRef, options) {
    const content = this.contentFrom(component, container, dialogRef);
    const dialog = container.createComponent(factory, void 0, void 0, content.nodes);
    dialogRef.dialog = dialog;
    dialog.changeDetectorRef.markForCheck();
    this.applyOptions(dialog.instance, options);
    const apiClose = new Subject();
    const close = (e) => {
      if (e instanceof PreventableEvent) {
        e = new DialogCloseResult();
      }
      apiClose.next(e || new DialogCloseResult());
      if (content.componentRef) {
        content.componentRef.destroy();
      }
      dialog.destroy();
    };
    const result = merge(
      apiClose,
      // triggered when the titlebar or actions are defined in DialogSettings
      merge(dialog.instance.close, dialog.instance.action).pipe(map((e) => e instanceof PreventableEvent ? new DialogCloseResult() : e), filter((e) => {
        if (options.preventAction) {
          const dialogRefParameter = isNotComponent$1(component) ? void 0 : dialogRef;
          return !options.preventAction(e, dialogRefParameter);
        }
        return true;
      }))
    ).pipe(
      take(1),
      // Takes care for multiple subscriptions:
      // We subscribe internaly and the user may subscribe to get a close result - dialog.result.subscribe().
      // This causes multiple subscriptions to the same source and thus multiple emissions. share() solves that.
      share()
    );
    result.subscribe(close);
    dialogRef.close = close;
    dialogRef.result = result;
    if (component && isDevMode()) {
      const hasContentTitle = content.nodes[0] && content.nodes[0].length > 0;
      const hasContentActions = content.nodes[2] && content.nodes[2].length > 0;
      const multipleTitles = options.title && hasContentTitle;
      const multipleActions = options.actions && hasContentActions;
      if (component.prototype instanceof DialogContentBase) {
        if (multipleTitles || multipleActions) {
          console.warn(`
                    Multiple Title and/or Actions configurations detected.
                    When using a component as content, provide the title and actions either in the component's markup
                    or via the title and actions properties of the DialogSettings object, but not both.
                    See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/#toc-passing-title-content-and-actions-as-a-single-component'`);
        }
      } else {
        if (hasContentTitle || hasContentActions) {
          console.warn(`
                    When Title and/or Actions markup is provided in content component's template,
                    the component needs to inherit the DialogContentBase class to ensure that close and result events are properly hooked.
                    See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/#toc-passing-title-content-and-actions-as-a-single-component'`);
        }
      }
    }
    return dialogRef;
  }
  applyOptions(instance, options) {
    instance.title = options.title;
    instance.actions = options.actions;
    instance.actionsLayout = options.actionsLayout || "stretched";
    instance.width = options.width;
    instance.minWidth = options.minWidth;
    instance.maxWidth = options.maxWidth;
    instance.height = options.height;
    instance.minHeight = options.minHeight;
    instance.maxHeight = options.maxHeight;
    instance.autoFocusedElement = options.autoFocusedElement;
    instance.themeColor = options.themeColor != void 0 ? options.themeColor : null;
    instance.closeTitle = options.closeTitle;
    instance.cssClass = options.cssClass;
    instance.htmlAttributes = options.htmlAttributes;
    instance.animation = options.animation !== void 0 ? options.animation : true;
    if (options.content instanceof TemplateRef) {
      instance.contentTemplate = options.content;
    }
  }
  contentFrom(content, container, dialogRef) {
    const renderer = container.injector.get(Renderer2);
    let nodes = [];
    let titleNodes = [];
    let actionNodes = [];
    let componentRef = null;
    if (typeof content === "string") {
      nodes = [renderer.createText(content)];
    } else if (content && !(content instanceof TemplateRef)) {
      const injector = new DialogInjector(() => dialogRef, container.injector);
      const factory = this.resolver.resolveComponentFactory(content);
      componentRef = container.createComponent(factory, void 0, injector);
      titleNodes = Array.from(componentRef.location.nativeElement.querySelectorAll("kendo-dialog-titlebar"));
      nodes = [componentRef.location.nativeElement];
      actionNodes = Array.from(componentRef.location.nativeElement.querySelectorAll("kendo-dialog-actions"));
      dialogRef.content = componentRef;
    }
    return {
      componentRef,
      nodes: [
        titleNodes,
        nodes,
        actionNodes
        // <ng-content select="kendo-dialog-actions">
      ]
    };
  }
};
DialogService.ɵfac = function DialogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(DialogContainerService));
};
DialogService.ɵprov = ɵɵdefineInjectable({
  token: DialogService,
  factory: DialogService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: DialogContainerService,
      decorators: [{
        type: Inject,
        args: [DialogContainerService]
      }]
    }];
  }, null);
})();
var newZIndex = 10002;
var DEFAULT_OPTIONS = {
  draggable: true,
  height: null,
  left: null,
  minHeight: 100,
  minWidth: 120,
  position: "absolute",
  resizable: true,
  state: "default",
  top: null,
  width: null
};
var createMoveStream = (el, ev) => (mouseDown) => {
  return el.kendoDrag.pipe(takeUntil(el.kendoRelease.pipe(tap(() => {
    ev.emit();
  }))), map(({
    pageX,
    pageY
  }) => ({
    originalX: mouseDown.pageX,
    originalY: mouseDown.pageY,
    pageX,
    pageY
  })));
};
var DragResizeService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.close = new EventEmitter();
    this.focus = new EventEmitter();
    this.change = new EventEmitter();
    this.stateChange = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.resizeStart = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.options = Object.assign({}, DEFAULT_OPTIONS);
    this.lastAction = null;
    this.subscriptions = new Subscription();
    this.dragSubscription = new Subscription();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    if (this.dragSubscription) {
      this.dragSubscription.unsubscribe();
    }
  }
  init(el) {
    const state2 = this.options.state;
    const options = this.options;
    this.window = el;
    if (state2 !== "default") {
      this.restoreOptions = Object.assign({}, options);
    }
    if (state2 === "minimized") {
      options.height = 0;
      options.minHeight = 0;
    }
    if (state2 === "maximized") {
      options.position = "fixed";
    }
  }
  onDrag(el) {
    this.subscriptions.add(this.ngZone.runOutsideAngular(() => {
      let startPosition;
      let dragStarted;
      this.dragSubscription = el.kendoPress.pipe(tap((ev) => {
        if (!ev.isTouch) {
          preventDefault(ev);
        }
        this.focus.emit();
        startPosition = this.currentPosition();
        dragStarted = false;
      }), switchMap(createMoveStream(el, this.dragEnd))).subscribe(({
        pageX,
        pageY,
        originalX,
        originalY
      }) => {
        if (!dragStarted) {
          this.ensureWidth();
          this.dragStart.emit();
          dragStarted = true;
        }
        this.handleDrag({
          originalX,
          originalY,
          pageX,
          pageY,
          startPosition
        });
      });
    }));
  }
  handleDrag({
    originalX,
    originalY,
    pageX,
    pageY,
    startPosition
  }) {
    this.options.left = startPosition.x + pageX - originalX;
    this.options.top = startPosition.y + pageY - originalY;
    if (this.options.state === "minimized" && isPresent(this.restoreOptions)) {
      this.restoreOptions.left = this.options.left;
      this.restoreOptions.top = this.options.top;
    }
    this.change.emit({
      left: startPosition.x + pageX - originalX,
      top: startPosition.y + pageY - originalY
    });
  }
  onResize(handle, direction) {
    this.subscriptions.add(this.ngZone.runOutsideAngular(() => {
      let startOffsetAndPosition;
      let resizeStarted = false;
      handle.kendoPress.pipe(tap((ev) => {
        preventDefault(ev);
        this.focus.emit();
        startOffsetAndPosition = this.currentOffsetAndPosition();
        resizeStarted = false;
      }), switchMap(createMoveStream(handle, this.resizeEnd))).subscribe(({
        pageX,
        pageY,
        originalX,
        originalY
      }) => {
        if (!resizeStarted) {
          this.resizeStart.emit(direction);
          resizeStarted = true;
        }
        const deltaX = pageX - originalX;
        const deltaY = pageY - originalY;
        this.handleResize(startOffsetAndPosition, direction, deltaX, deltaY);
      });
    }));
  }
  handleResize(initial, dir, deltaX, deltaY) {
    const old = this.options;
    const ev = {};
    if (dir.indexOf("e") >= 0) {
      const newWidth = initial.width + deltaX;
      if (newWidth !== old.width && newWidth >= old.minWidth) {
        ev.width = newWidth;
      }
    }
    if (dir.indexOf("n") >= 0) {
      const newHeight = initial.height - deltaY;
      const newTop = initial.y + deltaY;
      if (newHeight !== old.height && newHeight >= old.minHeight && newTop !== old.top) {
        ev.height = newHeight;
        ev.top = newTop;
      }
    }
    if (dir.indexOf("s") >= 0) {
      const newHeight = initial.height + deltaY;
      if (newHeight !== old.height && newHeight >= old.minHeight) {
        ev.height = newHeight;
      }
    }
    if (dir.indexOf("w") >= 0) {
      const newLeft = initial.x + deltaX;
      const newWidth = initial.width - deltaX;
      if (newWidth !== old.width && newWidth >= old.minWidth && newLeft !== old.left) {
        ev.width = newWidth;
        ev.left = newLeft;
      }
    }
    if (isPresent(ev.width) || isPresent(ev.height)) {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent(ev[style2])) {
          this.options[style2] = ev[style2];
        }
      });
      this.change.emit(ev);
    }
  }
  restoreAction() {
    this.lastAction = "restore";
    this.defaultState();
  }
  defaultState() {
    if (isPresent(this.restoreOptions)) {
      this.options = Object.assign({}, this.restoreOptions);
    }
    this.options.state = "default";
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (!isPresent(this.options.left) || !isPresent(this.options.top)) {
        this.center();
      }
    });
    this.stateChange.emit("default");
  }
  storeOptions() {
    this.restoreOptions = Object.assign({}, this.options);
  }
  maximizeAction() {
    this.lastAction = "maximize";
    this.maximizeState();
  }
  maximizeState() {
    this.storeOptions();
    const wnd = this.windowViewPort;
    this.options = Object.assign({}, this.options, {
      height: wnd.height,
      left: 0,
      position: "fixed",
      state: "maximized",
      top: 0,
      width: wnd.width
    });
    this.stateChange.emit("maximized");
  }
  minimizeAction() {
    this.lastAction = "minimize";
    this.minimizeState();
  }
  minimizeState() {
    this.storeOptions();
    this.options = Object.assign({}, this.options, {
      height: null,
      minHeight: 0,
      state: "minimized"
    });
    this.stateChange.emit("minimized");
  }
  /**
   * Handles manual changes of the 'state' property.
   * Required to distinguish them from action clicks.
   */
  applyManualState() {
    const state2 = this.options.state;
    switch (state2) {
      case "default":
        this.clearHeight();
        this.defaultState();
        break;
      case "maximized":
        this.clearHeight();
        this.maximizeState();
        break;
      case "minimized":
        this.minimizeState();
        break;
      default:
        break;
    }
  }
  closeAction() {
    this.close.emit();
  }
  ensureWidth() {
    const windowOffset = offset_default(this.window.nativeElement);
    if (!isPresent(this.options.width)) {
      this.options.width = windowOffset.width;
      this.change.emit({
        width: windowOffset.width
      });
    }
  }
  clearHeight() {
    if (this.options.height === 0) {
      delete this.options.height;
    }
    if (this.options.minHeight === 0) {
      delete this.options.minHeight;
    }
  }
  center() {
    if (this.options.state === "maximized") {
      return;
    }
    const scroll = scrollPosition(this.window.nativeElement);
    const wnd = this.windowViewPort;
    const wrapper = offset_default(this.window.nativeElement);
    const ev = {};
    if (!isPresent(this.options.left)) {
      this.options.left = scroll.x + Math.max(0, (wnd.width - wrapper.width) / 2);
      ev.left = this.options.left;
    }
    if (!isPresent(this.options.top)) {
      this.options.top = scroll.y + Math.max(0, (wnd.height - wrapper.height) / 2);
      ev.top = this.options.top;
    }
    this.change.emit(ev);
  }
  currentOffsetAndPosition() {
    const o = this.options;
    const off = offset_default(this.window.nativeElement);
    return Object.assign({}, this.currentPosition(), {
      height: o.height ? o.height : off.height,
      width: o.width ? o.width : off.width
    });
  }
  currentPosition() {
    const o = this.options;
    if (!o.top || !o.left) {
      this.setPosition();
    }
    return {
      x: this.options.left,
      y: this.options.top
    };
  }
  setPosition() {
    const wrapper = position_with_scroll_default(this.window.nativeElement, document_default(this.window.nativeElement));
    this.options.left = wrapper.left;
    this.options.top = wrapper.top;
  }
  setRestoreOption(style2, value) {
    if (isPresent(this.restoreOptions)) {
      this.restoreOptions[style2] = value;
    }
  }
  get nextPossibleZIndex() {
    return newZIndex;
  }
  get nextZIndex() {
    return newZIndex++;
  }
  get windowViewPort() {
    return windowViewport(this.window.nativeElement);
  }
};
DragResizeService.ɵfac = function DragResizeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragResizeService)(ɵɵinject(NgZone));
};
DragResizeService.ɵprov = ɵɵdefineInjectable({
  token: DragResizeService,
  factory: DragResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var ResizeHandleDirective = class {
  constructor(draggable, el, renderer, service) {
    this.draggable = draggable;
    this.el = el;
    this.renderer = renderer;
    this.service = service;
    this.subscriptions = new Subscription();
  }
  get hostClass() {
    return true;
  }
  ngOnInit() {
    this.setDisplay();
    this.renderer.addClass(this.el.nativeElement, "k-resize-" + this.direction);
    this.subscriptions.add(of(this.draggable).subscribe((handle) => {
      this.service.onResize(handle, this.direction);
    }));
    this.subscriptions.add(this.service.resizeStart.subscribe((dir) => {
      if (dir !== this.direction) {
        this.setDisplay("none");
      }
    }));
    this.subscriptions.add(this.service.dragStart.subscribe(() => {
      this.setDisplay("none");
    }));
    this.subscriptions.add(merge(this.service.resizeEnd, this.service.dragEnd).subscribe(() => {
      this.setDisplay("block");
    }));
    this.subscriptions.add(this.service.stateChange.subscribe((state2) => {
      this.setDisplay(state2 === "default" ? "block" : "none");
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  setDisplay(value = "block") {
    this.renderer.setStyle(this.el.nativeElement, "display", this.service.options.state === "default" ? value : "none");
  }
};
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeHandleDirective)(ɵɵdirectiveInject(DraggableDirective, 1), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService));
};
ResizeHandleDirective.ɵdir = ɵɵdefineDirective({
  type: ResizeHandleDirective,
  selectors: [["", "kendoWindowResizeHandle", ""]],
  hostVars: 2,
  hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-resize-handle", ctx.hostClass);
    }
  },
  inputs: {
    direction: "direction"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoWindowResizeHandle]",
      standalone: true
    }]
  }], function() {
    return [{
      type: DraggableDirective,
      decorators: [{
        type: Host
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService
    }];
  }, {
    direction: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-resize-handle"]
    }]
  });
})();
var WindowTitleBarComponent = class {
  constructor(el, service, ngZone) {
    this.el = el;
    this.ngZone = ngZone;
    this.service = service;
  }
  ngOnInit() {
    this.dragDirective = new DraggableDirective(this.el, this.ngZone);
    this.dragDirective.ngOnInit();
    if (this.isDraggable) {
      this.subscribeDrag();
    }
    this.subscribeStateChange();
  }
  ngAfterViewInit() {
    const element = this.el.nativeElement.querySelector(".k-window-title");
    if (isPresent(element)) {
      element.setAttribute("id", this.id);
    }
  }
  ngOnDestroy() {
    this.dragDirective.ngOnDestroy();
    this.unsubscribeDrag();
    this.unsubscribeState();
  }
  /**
   * @hidden
   */
  subscribeDrag() {
    this.unsubscribeDrag();
    this.dragSubscription = of(this.dragDirective).subscribe((titleBar) => {
      this.service.onDrag(titleBar);
    });
  }
  /**
   * @hidden
   */
  subscribeStateChange() {
    this.stateSubscription = this.service.stateChange.subscribe((state2) => {
      if (this.service.options.draggable) {
        if (state2 === "maximized") {
          this.unsubscribeDrag();
        } else {
          this.subscribeDrag();
        }
      }
    });
  }
  /**
   * @hidden
   */
  unsubscribeDrag() {
    if (this.dragSubscription) {
      this.service.dragSubscription.unsubscribe();
      this.dragSubscription.unsubscribe();
      this.dragSubscription = null;
    }
  }
  /**
   * @hidden
   */
  unsubscribeState() {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
      this.stateSubscription = null;
    }
  }
  get className() {
    return true;
  }
  get touchAction() {
    if (this.isDraggable) {
      return "none";
    }
  }
  /**
   * @hidden
   */
  handle(ev) {
    const target = ev.target;
    const state2 = this.service.options.state;
    if (!hasClasses(target, "k-icon") && !isFocusable(target, false) && this.service.options.resizable) {
      if (state2 === "default") {
        this.service.maximizeAction();
      } else if (state2 === "maximized") {
        this.service.restoreAction();
      }
    }
  }
  get isDraggable() {
    const options = this.service.options;
    return options.draggable && options.state !== "maximized";
  }
};
WindowTitleBarComponent.ɵfac = function WindowTitleBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowTitleBarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DragResizeService), ɵɵdirectiveInject(NgZone));
};
WindowTitleBarComponent.ɵcmp = ɵɵdefineComponent({
  type: WindowTitleBarComponent,
  selectors: [["kendo-window-titlebar"]],
  hostVars: 4,
  hostBindings: function WindowTitleBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("dblclick", function WindowTitleBarComponent_dblclick_HostBindingHandler($event) {
        return ctx.handle($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("touch-action", ctx.touchAction);
      ɵɵclassProp("k-window-titlebar", ctx.className);
    }
  },
  inputs: {
    template: "template",
    id: "id"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function WindowTitleBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowTitleBarComponent_ng_content_0_Template, 1, 0, "ng-content", 0)(1, WindowTitleBarComponent_1_Template, 1, 4, null, 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.template);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowTitleBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-window-titlebar",
      template: `
	<ng-content *ngIf="!template"></ng-content>
	<ng-template
		[ngTemplateOutlet]="template"
		[ngTemplateOutletContext]="{'$implicit': service}" *ngIf="template">
	</ng-template>
	`,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: DragResizeService
    }, {
      type: NgZone
    }];
  }, {
    template: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-window-titlebar"]
    }],
    touchAction: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }],
    handle: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var NavigationService = class {
  constructor(window2, ngZone) {
    this.window = window2;
    this.ngZone = ngZone;
  }
  process(ev) {
    const key = ev.keyCode;
    switch (key) {
      case Keys.up:
      case Keys.down:
      case Keys.left:
      case Keys.right: {
        ev.preventDefault();
        this.ngZone.run(() => {
          this.handleArrow(key, ev);
        });
        break;
      }
      case Keys.esc:
        this.ngZone.run(() => {
          this.handleEscape();
        });
        break;
      default:
        break;
    }
  }
  handleArrow(key, ev) {
    const options = this.window.options;
    if (ev.altKey) {
      this.handleStateChange(key, options.state);
      return;
    }
    if ((ev.ctrlKey || ev.metaKey) && options.state === "default") {
      this.handleResize(key);
    } else {
      this.handleDrag(key);
    }
  }
  handleEscape() {
    this.window.closeAction();
  }
  handleDrag(key) {
    const options = this.window.options;
    if (!options.draggable) {
      return;
    }
    const offset = this.window.currentOffsetAndPosition();
    const restoreOptions = this.window.restoreOptions;
    const ev = {};
    let delta = 10;
    if (key === Keys.left || key === Keys.up) {
      delta *= -1;
    }
    switch (key) {
      case Keys.left:
      case Keys.right: {
        ev.left = offset.x + delta;
        options.left = ev.left;
        break;
      }
      case Keys.up:
      case Keys.down: {
        ev.top = offset.y + delta;
        options.top = ev.top;
        break;
      }
      default:
        break;
    }
    if (options.state === "minimized" && isPresent(restoreOptions)) {
      restoreOptions.left = options.left;
      restoreOptions.top = options.top;
    }
    this.window.change.emit(ev);
  }
  handleResize(key) {
    const options = this.window.options;
    if (!options.resizable) {
      return;
    }
    const offset = this.window.currentOffsetAndPosition();
    let newWidth;
    let newHeight;
    const ev = {};
    let delta = 10;
    if (key === Keys.left || key === Keys.up) {
      delta *= -1;
    }
    switch (key) {
      case Keys.left:
      case Keys.right: {
        newWidth = offset.width + delta;
        if (newWidth !== options.width && newWidth >= options.minWidth) {
          ev.width = newWidth;
        }
        break;
      }
      case Keys.up:
      case Keys.down: {
        newHeight = offset.height + delta;
        if (newHeight !== options.height && newHeight >= options.minHeight) {
          ev.height = newHeight;
        }
        break;
      }
      default:
        break;
    }
    if (isPresent(ev.width) || isPresent(ev.height)) {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent(ev[style2])) {
          this.window.options[style2] = ev[style2];
        }
      });
      this.window.change.emit(ev);
    }
  }
  handleStateChange(key, state2) {
    if (state2 === "minimized" && key === Keys.up || state2 === "maximized" && key === Keys.down) {
      this.window.restoreAction();
      return;
    }
    if (state2 === "default") {
      if (key === Keys.up) {
        this.window.maximizeAction();
      } else if (key === Keys.down) {
        this.window.minimizeAction();
      }
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(DragResizeService), ɵɵinject(NgZone));
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
      type: DragResizeService
    }, {
      type: NgZone
    }];
  }, null);
})();
var WindowCloseActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.xIcon = xIcon;
    this.buttonType = "button";
    this.buttonClass = true;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "x";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.closeAction();
    }
  }
};
WindowCloseActionDirective.ɵfac = function WindowCloseActionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowCloseActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowCloseActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowCloseActionDirective,
  selectors: [["button", "kendoWindowCloseAction", ""]],
  hostVars: 3,
  hostBindings: function WindowCloseActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowCloseActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowCloseAction"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "close", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "close", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowCloseActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowCloseActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowCloseActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowCloseActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowCloseActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowCloseAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowCloseAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="close"
            [svgIcon]="xIcon">
        </kendo-icon-wrapper>
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
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var WindowRestoreActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.windowRestoreIcon = windowRestoreIcon;
    this.buttonType = "button";
    this.buttonClass = true;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window-restore";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.restoreAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "none" : "inline-flex";
  }
};
WindowRestoreActionDirective.ɵfac = function WindowRestoreActionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowRestoreActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowRestoreActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowRestoreActionDirective,
  selectors: [["button", "kendoWindowRestoreAction", ""]],
  hostVars: 5,
  hostBindings: function WindowRestoreActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowRestoreActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowRestoreAction"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c6,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window-restore", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window-restore", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowRestoreActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowRestoreActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowRestoreActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowRestoreActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowRestoreActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowRestoreAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowRestoreAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window-restore"
            [svgIcon]="windowRestoreIcon">
        </kendo-icon-wrapper>
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
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowMaximizeActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.buttonType = "button";
    this.buttonClass = true;
    this.windowIcon = windowIcon;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.maximizeAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "inline-flex" : "none";
  }
};
WindowMaximizeActionDirective.ɵfac = function WindowMaximizeActionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowMaximizeActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowMaximizeActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowMaximizeActionDirective,
  selectors: [["button", "kendoWindowMaximizeAction", ""]],
  hostVars: 5,
  hostBindings: function WindowMaximizeActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowMaximizeActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowMaximizeAction"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c7,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowMaximizeActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowMaximizeActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowMaximizeActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowMaximizeActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowMaximizeAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowMaximizeAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window"
            [svgIcon]="windowIcon">
        </kendo-icon-wrapper>
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
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowMinimizeActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.buttonType = "button";
    this.buttonClass = true;
    this.windowMinimizeIcon = windowMinimizeIcon;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window-minimize";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.minimizeAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "inline-flex" : "none";
  }
};
WindowMinimizeActionDirective.ɵfac = function WindowMinimizeActionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowMinimizeActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowMinimizeActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowMinimizeActionDirective,
  selectors: [["button", "kendoWindowMinimizeAction", ""]],
  hostVars: 5,
  hostBindings: function WindowMinimizeActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowMinimizeActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowMinimizeAction"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c8,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window-minimize", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window-minimize", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowMinimizeActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowMinimizeActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowMinimizeActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowMinimizeActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowMinimizeAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowMinimizeAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window-minimize"
            [svgIcon]="windowMinimizeIcon">
        </kendo-icon-wrapper>
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
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowComponent = class {
  constructor(el, renderer, service, navigation, ngZone, localization) {
    this.el = el;
    this.renderer = renderer;
    this.service = service;
    this.navigation = navigation;
    this.ngZone = ngZone;
    this.localization = localization;
    this.keepContent = false;
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.resizeStart = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.close = new EventEmitter();
    this.widthChange = new EventEmitter();
    this.heightChange = new EventEmitter();
    this.topChange = new EventEmitter();
    this.leftChange = new EventEmitter();
    this.stateChange = new EventEmitter();
    this.messages = {};
    this.showLicenseWatermark = false;
    this.tabIndex = 0;
    this.role = "dialog";
    this.hostClass = true;
    this.titleId = null;
    this._themeColor = null;
    this.draged = false;
    this.resized = false;
    this.windowSubscription = new Subscription();
    this.domSubs = new Subscription();
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.direction = this.localization.rtl ? "rtl" : "ltr";
    this.localizationChangeSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
    this.resizeDirections = RESIZE_DIRECTIONS;
    this.subscribeEvents();
    this.titleId = this.generateTitleId();
  }
  /**
   * Specifies whether the user will be able to drag the component.
   * @default true
   */
  set draggable(value) {
    this.options.draggable = value;
  }
  get draggable() {
    return this.options.draggable;
  }
  /**
   * Specifies whether the user will be able to resize the component.
   * @default true
   */
  set resizable(value) {
    this.options.resizable = value;
  }
  get resizable() {
    return this.options.resizable;
  }
  /**
   * The Window allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color to the titlebar while also amending the text color accordingly.
   *
   * The possible values are:
   * * `primary`
   * * `dark`
   * * `light`
   */
  set themeColor(themeColor) {
    this.handleThemeColorClass(this.themeColor, themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * @hidden
   */
  set cssClass(classes) {
    this.setServiceClasses(this._cssClass, classes);
    this._cssClass = classes;
  }
  get cssClass() {
    return this._cssClass;
  }
  /**
   * @hidden
   */
  set htmlAttributes(attributes) {
    setHTMLAttributes(attributes, this.renderer, this.el.nativeElement);
    const el = this.el.nativeElement;
    const dir = el.getAttribute("dir");
    const tIndex = el.getAttribute("tabindex");
    if (this.direction !== dir) {
      this.direction = dir;
    }
    if (this.tabIndex !== tIndex) {
      this.tabIndex = tIndex;
    }
    this._htmlAttributes = attributes;
  }
  get htmlAttributes() {
    return this._htmlAttributes;
  }
  /**
   * Specifies the initial state of the component.
   * If not specified, the value is set to `default`.
   *
   * The possible values are:
   * * `minimized`
   * * `maximized`
   * * `default`
   */
  set state(value) {
    this.options.state = value;
  }
  get state() {
    return this.options.state;
  }
  /**
   * Specifies the minimum width of the component.
   * The `minWidth` property has to be set in pixels.
   * @default 120
   */
  set minWidth(value) {
    this.setOption("minWidth", value);
  }
  get minWidth() {
    return this.options.minWidth;
  }
  /**
   * Specifies the minimum height of the Window.
   * The `minHeight` property has to be set in pixels.
   * @default 100
   */
  set minHeight(value) {
    this.setOption("minHeight", value);
  }
  get minHeight() {
    return this.options.minHeight;
  }
  /**
   * Specifies the width of the Window.
   * The `width` property has to be set in pixels.
   */
  set width(value) {
    this.setOption("width", value);
  }
  get width() {
    return this.options.width;
  }
  /**
   * Specifies the height of the Window.
   * The `height` property has to be set in pixels.
   */
  set height(value) {
    this.setOption("height", value);
  }
  get height() {
    return this.options.height;
  }
  /**
   * Specifies the initial top offset of the Window.
   * The `top` property has to be set in pixels.
   */
  set top(value) {
    this.setOption("top", value);
  }
  get top() {
    return this.options.top;
  }
  /**
   * Specifies the initial left offset of the Window.
   * Numeric values are treated as pixels.
   */
  set left(value) {
    this.setOption("left", value);
  }
  get left() {
    return this.options.left;
  }
  get closeButtonTitle() {
    if (this.messages && this.messages.closeTitle) {
      return this.messages.closeTitle;
    }
    return this.localization.get("closeTitle");
  }
  get restoreButtonTitle() {
    if (this.messages && this.messages.restoreTitle) {
      return this.messages.restoreTitle;
    }
    return this.localization.get("restoreTitle");
  }
  get maximizeButtonTitle() {
    if (this.messages && this.messages.maximizeTitle) {
      return this.messages.maximizeTitle;
    }
    return this.localization.get("maximizeTitle");
  }
  get minimizeButtonTitle() {
    if (this.messages && this.messages.minimizeTitle) {
      return this.messages.minimizeTitle;
    }
    return this.localization.get("minimizeTitle");
  }
  get dir() {
    return this.direction;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.setNextZIndex();
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.handleInitialFocus();
    });
    this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setInitialOffset()));
    this.initDomEvents();
    if (this.titleBarView || this.titleBarContent) {
      this.renderer.setAttribute(this.el.nativeElement, "aria-labelledby", this.titleId);
    }
    this.handleThemeColorClass(null, this.themeColor);
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.el.nativeElement, "title");
    this.service.init(this.el);
  }
  ngOnChanges(changes) {
    OFFSET_STYLES.forEach((style2) => {
      if (isChanged(style2, changes)) {
        this.setStyle(style2, this.options[style2]);
      }
    });
    if (isChanged("draggable", changes)) {
      const titleBar = isPresent(this.titleBarContent) ? this.titleBarContent : this.titleBarView;
      if (isTruthy(changes["draggable"].currentValue)) {
        titleBar.subscribeDrag();
      } else {
        titleBar.unsubscribeDrag();
      }
    }
    if (isChanged("state", changes)) {
      if (isPresent(this.service.lastAction)) {
        this.service.lastAction = null;
      } else {
        this.service.applyManualState();
        this.updateAllOffset();
      }
    }
  }
  ngOnDestroy() {
    if (this.windowSubscription) {
      this.windowSubscription.unsubscribe();
    }
    if (this.domSubs) {
      this.domSubs.unsubscribe();
    }
    this.localizationChangeSubscription.unsubscribe();
  }
  /**
   * Focuses the wrapper of the Window component.
   */
  focus() {
    const wrapper = this.el.nativeElement;
    if (isPresent(wrapper)) {
      wrapper.focus();
    }
  }
  /**
   * Brings the current Window component on top of other Window components on the page.
   */
  bringToFront() {
    this.setNextZIndex();
  }
  /**
   * Manually updates the `width` or `height` option of the Window.
   * The required style will be applied to the Window wrapper element and the
   * corresponding property of the component instance will be updated.
   * This method is intended to be used for sizing dynamically created components using the
   * [`WindowService`]({% slug api_dialog_windowservice %})
   * @param {WindowDimensionSetting} dimension - The option that will be updated
   * @param {number} value - The value set in pixels
   */
  setDimension(dimension, value) {
    this.setOption(dimension, value);
    this.setStyle(dimension, value);
  }
  /**
   * Manually updates the `top` or `left` offset of the Window.
   * The required style will be applied to the Window wrapper element and the
   * corresponding property of the component instance will be updated.
   * This method is intended to be used for positioning dynamically created components using the
   * [`WindowService`]({% slug api_dialog_windowservice %})
   * @param {WindowOffsetSetting} offset - The option that will be updated
   * @param {number} value - The value set in pixels
   */
  setOffset(offset, value) {
    this.setOption(offset, value);
    this.setStyle(offset, value);
  }
  get showDefaultTitleBar() {
    return !isPresent(this.titleBarContent);
  }
  get styleMinWidth() {
    return this.minWidth + "px";
  }
  get styleMinHeight() {
    return this.minHeight + "px";
  }
  get stylePosition() {
    return this.options.position;
  }
  get wrapperMaximizedClass() {
    return this.state === "maximized";
  }
  get wrapperMinimizedClass() {
    return this.state === "minimized";
  }
  /**
   * @hidden
   */
  onComponentFocus() {
    this.renderer.addClass(this.el.nativeElement, "k-focus");
    this.setNextZIndex();
  }
  /**
   * @hidden
   */
  onComponentBlur() {
    this.renderer.removeClass(this.el.nativeElement, "k-focus");
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.windowSubscription.add(this.service.focus.subscribe(() => {
      this.el.nativeElement.focus();
    }));
    this.windowSubscription.add(this.service.dragStart.subscribe(() => {
      this.draged = true;
      this.ngZone.run(() => {
        this.dragStart.emit();
      });
    }));
    this.windowSubscription.add(this.service.dragEnd.subscribe(() => {
      if (this.draged) {
        this.draged = false;
        this.ngZone.run(() => {
          this.dragEnd.emit();
        });
      }
    }));
    this.windowSubscription.add(this.service.close.subscribe(() => {
      this.close.emit();
    }));
    this.windowSubscription.add(this.service.resizeStart.subscribe(() => {
      this.resized = true;
      this.ngZone.run(() => {
        this.resizeStart.emit();
      });
    }));
    this.windowSubscription.add(this.service.resizeEnd.subscribe(() => {
      if (this.resized) {
        this.resized = false;
        this.ngZone.run(() => {
          this.resizeEnd.emit();
        });
      }
    }));
    this.windowSubscription.add(this.service.change.subscribe((ev) => {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent(ev[style2])) {
          this.setStyle(style2, ev[style2]);
          if (this.state !== "maximized") {
            const emitter = this[style2 + "Change"];
            if (emitter.observers.length) {
              this.ngZone.run(() => {
                emitter.emit(ev[style2]);
              });
            }
          }
        }
      });
    }));
    this.windowSubscription.add(this.service.stateChange.subscribe((state2) => {
      if (isPresent(this.service.lastAction)) {
        this.updateAllOffset();
        this.stateChange.emit(state2);
      }
    }));
  }
  initDomEvents() {
    if (!this.el) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.el.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  onKeyDown(event) {
    if (hasClasses(event.target, WINDOW_CLASSES)) {
      this.navigation.process(event);
    }
  }
  setServiceClasses(prevValue, value) {
    const el = this.el.nativeElement;
    if (prevValue) {
      parseCSSClassNames(prevValue).forEach((className) => {
        this.renderer.removeClass(el, className);
      });
    }
    if (value) {
      parseCSSClassNames(value).forEach((className) => {
        this.renderer.addClass(el, className);
      });
    }
  }
  setNextZIndex() {
    const currentZIndex = this.el.nativeElement.style["z-index"];
    const nextPossibleZIndex = this.service.nextPossibleZIndex;
    if (!currentZIndex || nextPossibleZIndex - currentZIndex > 1) {
      this.renderer.setStyle(this.el.nativeElement, "z-index", this.service.nextZIndex);
    }
  }
  setInitialOffset() {
    if (this.state !== "maximized") {
      this.updateAllOffset();
      if (!isPresent(this.left) || !isPresent(this.top)) {
        this.service.center();
      }
    } else {
      const viewPort = this.service.windowViewPort;
      this.setStyle("width", viewPort.width);
      this.setStyle("height", viewPort.height);
      this.setStyle("top", 0);
      this.setStyle("left", 0);
    }
  }
  updateAllOffset() {
    OFFSET_STYLES.forEach((style2) => {
      if (isPresent(this[style2])) {
        this.setStyle(style2, this[style2]);
      } else {
        this.removeStyle(style2);
      }
    });
  }
  setStyle(style2, value) {
    this.renderer.setStyle(this.el.nativeElement, style2, value + "px");
  }
  removeStyle(style2) {
    this.renderer.removeStyle(this.el.nativeElement, style2);
  }
  get options() {
    return this.service.options;
  }
  setOption(style2, value) {
    if (typeof value !== "number" && typeof value !== "string") {
      return;
    }
    const parsedValue = typeof value === "number" ? value : parseInt(value, 10);
    this.options[style2] = parsedValue;
    this.service.setRestoreOption(style2, parsedValue);
  }
  handleInitialFocus() {
    const wrapper = this.el.nativeElement;
    if (this.autoFocusedElement) {
      const initiallyFocusedElement = wrapper.querySelector(this.autoFocusedElement);
      if (initiallyFocusedElement) {
        initiallyFocusedElement.focus();
      }
    } else {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  generateTitleId() {
    return "kendo-window-title-" + Math.ceil(Math.random() * 1e6).toString();
  }
  handleThemeColorClass(previousValue, currentValue) {
    const wrapper = this.el.nativeElement;
    if (previousValue) {
      const classToRemove = `k-window-${previousValue}`;
      this.renderer.removeClass(wrapper, classToRemove);
    }
    if (currentValue) {
      const classToAdd = `k-window-${currentValue}`;
      this.renderer.addClass(wrapper, classToAdd);
    }
  }
};
WindowComponent.ɵfac = function WindowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
WindowComponent.ɵcmp = ɵɵdefineComponent({
  type: WindowComponent,
  selectors: [["kendo-window"]],
  contentQueries: function WindowComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, WindowTitleBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleBarContent = _t.first);
    }
  },
  viewQuery: function WindowComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(WindowTitleBarComponent, 5);
      ɵɵviewQuery(ResizeHandleDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleBarView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeHandles = _t);
    }
  },
  hostVars: 15,
  hostBindings: function WindowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function WindowComponent_focus_HostBindingHandler() {
        return ctx.onComponentFocus();
      })("blur", function WindowComponent_blur_HostBindingHandler() {
        return ctx.onComponentBlur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabIndex", ctx.tabIndex)("role", ctx.role)("dir", ctx.dir);
      ɵɵstyleProp("min-width", ctx.styleMinWidth)("min-height", ctx.styleMinHeight)("position", ctx.stylePosition);
      ɵɵclassProp("k-window", ctx.hostClass)("k-window-maximized", ctx.wrapperMaximizedClass)("k-window-minimized", ctx.wrapperMinimizedClass);
    }
  },
  inputs: {
    autoFocusedElement: "autoFocusedElement",
    title: "title",
    draggable: "draggable",
    resizable: "resizable",
    themeColor: "themeColor",
    keepContent: "keepContent",
    state: "state",
    minWidth: "minWidth",
    minHeight: "minHeight",
    width: "width",
    height: "height",
    top: "top",
    left: "left"
  },
  outputs: {
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    resizeStart: "resizeStart",
    resizeEnd: "resizeEnd",
    close: "close",
    widthChange: "widthChange",
    heightChange: "heightChange",
    topChange: "topChange",
    leftChange: "leftChange",
    stateChange: "stateChange"
  },
  exportAs: ["kendoWindow"],
  standalone: true,
  features: [ɵɵProvidersFeature([DragResizeService, NavigationService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.window"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c10,
  decls: 7,
  vars: 5,
  consts: () => {
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_2 = goog.getMsg("Close");
      i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.window.closeTitle|The title of the close button:Close`;
    }
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_3 = goog.getMsg("Restore");
      i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.window.restoreTitle|The title of the restore button:Restore`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_4 = goog.getMsg("Maximize");
      i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.window.maximizeTitle|The title of the maximize button:Maximize`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_5 = goog.getMsg("Minimize");
      i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2020_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_5;
    } else {
      i18n_5 = $localize`:kendo.window.minimizeTitle|The title of the minimize button:Minimize`;
    }
    return [["kendoWindowLocalizedMessages", "", "closeTitle", i18n_2, "restoreTitle", i18n_3, "maximizeTitle", i18n_4, "minimizeTitle", i18n_5], [3, "template", "id", 4, "ngIf"], [4, "ngIf"], ["class", "k-window-content", 3, "hidden", 4, "ngIf"], [3, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [3, "template", "id"], [1, "k-window-title"], [1, "k-window-titlebar-actions"], ["kendoWindowMinimizeAction", ""], ["kendoWindowMaximizeAction", ""], ["kendoWindowRestoreAction", ""], ["kendoWindowCloseAction", ""], [1, "k-window-content", 3, "hidden"], [3, "ngTemplateOutlet"], ["kendoWindowResizeHandle", "", "kendoDraggable", "", 3, "direction", 4, "ngFor", "ngForOf"], ["kendoWindowResizeHandle", "", "kendoDraggable", "", 3, "direction"], ["kendoWatermarkOverlay", ""]];
  },
  template: function WindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c9);
      ɵɵelementContainerStart(0, 0)(1);
      ɵɵtemplate(2, WindowComponent_kendo_window_titlebar_2_Template, 8, 11, "kendo-window-titlebar", 1)(3, WindowComponent_ng_content_3_Template, 1, 0, "ng-content", 2)(4, WindowComponent_div_4_Template, 3, 3, "div", 3)(5, WindowComponent_ng_template_5_Template, 1, 1, "ng-template", 4)(6, WindowComponent_div_6_Template, 1, 0, "div", 5);
      ɵɵelementContainerEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showDefaultTitleBar);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.showDefaultTitleBar);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.state !== "minimized" || ctx.keepContent);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.resizable);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgIf, WindowTitleBarComponent, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowCloseActionDirective, NgTemplateOutlet, NgForOf, ResizeHandleDirective, DraggableDirective, WatermarkOverlayComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoWindow",
      providers: [DragResizeService, NavigationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.window"
      }],
      selector: "kendo-window",
      template: `
        <ng-container kendoWindowLocalizedMessages
            i18n-closeTitle="kendo.window.closeTitle|The title of the close button"
            closeTitle="Close"

            i18n-restoreTitle="kendo.window.restoreTitle|The title of the restore button"
            restoreTitle="Restore"

            i18n-maximizeTitle="kendo.window.maximizeTitle|The title of the maximize button"
            maximizeTitle="Maximize"

            i18n-minimizeTitle="kendo.window.minimizeTitle|The title of the minimize button"
            minimizeTitle="Minimize"
        >
        <ng-container>

        <kendo-window-titlebar *ngIf="showDefaultTitleBar" [template]="titleBarTemplate" [id]="titleId">
            <span class="k-window-title">{{ title }}</span>
            <div class="k-window-titlebar-actions">
                <button kendoWindowMinimizeAction  [attr.title]="minimizeButtonTitle" [attr.aria-label]="minimizeButtonTitle"></button>
                <button kendoWindowMaximizeAction [attr.title]="maximizeButtonTitle" [attr.aria-label]="maximizeButtonTitle"></button>
                <button kendoWindowRestoreAction [attr.title]="restoreButtonTitle" [attr.aria-label]="restoreButtonTitle"></button>
                <button kendoWindowCloseAction [attr.title]="closeButtonTitle" [attr.aria-label]="closeButtonTitle"></button>
            </div>
        </kendo-window-titlebar>
        <ng-content select="kendo-window-titlebar" *ngIf="!showDefaultTitleBar"></ng-content>

        <div *ngIf="state !== 'minimized' || keepContent"
            [hidden]="state === 'minimized' && keepContent"
            class="k-window-content"
        >
            <ng-content *ngIf="!contentTemplate"></ng-content>
            <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
        </div>

        <ng-template [ngIf]='resizable'>
            <div *ngFor='let dir of resizeDirections'
                [direction]="dir"
                kendoWindowResizeHandle
                kendoDraggable>
            </div>
        </ng-template>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgIf, WindowTitleBarComponent, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowCloseActionDirective, NgTemplateOutlet, NgForOf, ResizeHandleDirective, DraggableDirective, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    autoFocusedElement: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    draggable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    keepContent: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    minHeight: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    top: [{
      type: Input
    }],
    left: [{
      type: Input
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    resizeStart: [{
      type: Output
    }],
    resizeEnd: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    widthChange: [{
      type: Output
    }],
    heightChange: [{
      type: Output
    }],
    topChange: [{
      type: Output
    }],
    leftChange: [{
      type: Output
    }],
    stateChange: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-window"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    titleBarView: [{
      type: ViewChild,
      args: [WindowTitleBarComponent, {
        static: false
      }]
    }],
    titleBarContent: [{
      type: ContentChild,
      args: [WindowTitleBarComponent, {
        static: false
      }]
    }],
    resizeHandles: [{
      type: ViewChildren,
      args: [ResizeHandleDirective]
    }],
    styleMinWidth: [{
      type: HostBinding,
      args: ["style.minWidth"]
    }],
    styleMinHeight: [{
      type: HostBinding,
      args: ["style.minHeight"]
    }],
    stylePosition: [{
      type: HostBinding,
      args: ["style.position"]
    }],
    wrapperMaximizedClass: [{
      type: HostBinding,
      args: ["class.k-window-maximized"]
    }],
    wrapperMinimizedClass: [{
      type: HostBinding,
      args: ["class.k-window-minimized"]
    }],
    onComponentFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onComponentBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var WindowCloseResult = class {
};
var WindowRef = class {
};
var WindowSettings = class {
};
var WindowContainerService = class _WindowContainerService {
  set container(container) {
    _WindowContainerService.container = container;
  }
  get container() {
    return _WindowContainerService.container;
  }
};
WindowContainerService.container = null;
WindowContainerService.ɵfac = function WindowContainerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowContainerService)();
};
WindowContainerService.ɵprov = ɵɵdefineInjectable({
  token: WindowContainerService,
  factory: WindowContainerService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowContainerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var isNotComponent = (component) => isString(component) || component instanceof TemplateRef;
var WindowInjector = class {
  constructor(getWindowRef, parentInjector) {
    this.getWindowRef = getWindowRef;
    this.parentInjector = parentInjector;
  }
  get(token, notFoundValue) {
    if (token === WindowRef) {
      return this.getWindowRef();
    }
    return this.parentInjector.get(token, notFoundValue);
  }
};
var WindowService = class {
  constructor(resolver, containerService) {
    this.resolver = resolver;
    this.containerService = containerService;
  }
  /**
   * Opens a Window component.
   *
   * @param {WindowSettings} settings - The settings that define the Window.
   * @returns {WindowRef} - A reference to the Window object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <button kendoButton (click)="open()">Open window</button>
   *     <div kendoWindowContainer></div>
   *   `
   * })
   * export class AppComponent {
   *     constructor( private windowService: WindowService ) {}
   *
   *     public open() {
   *         var window = this.windowService.open({
   *           title: "My window",
   *           content: "My content!"
   *         });
   *
   *         window.result.subscribe((result) => {
   *           if (result instanceof WindowCloseResult) {
   *             console.log("Window was closed");
   *           }
   *         });
   *     }
   * }
   * ```
   *
   */
  open(settings) {
    const factory = this.resolver.resolveComponentFactory(WindowComponent);
    const container = settings.appendTo || this.containerService.container;
    if (!container) {
      throw new Error(`Cannot attach window to the page.
                Add an element that uses the kendoWindowContainer directive, or set the 'appendTo' property.
                See https://www.telerik.com/kendo-angular-ui/components/dialogs/window/service/
            `);
    }
    const windowRef = {
      close: () => {
      },
      content: null,
      result: null,
      window: null
    };
    const content = this.contentFrom(settings.content, container, windowRef);
    const window2 = container.createComponent(factory, void 0, void 0, content.nodes);
    windowRef.window = window2;
    this.applyOptions(window2.instance, settings);
    const apiClose = new Subject();
    const close = (e) => {
      apiClose.next(e || new WindowCloseResult());
      if (content.componentRef) {
        content.componentRef.destroy();
      }
      window2.destroy();
    };
    const result = merge(apiClose, window2.instance.close.pipe(map((e) => e ? e : new WindowCloseResult()), filter((e) => {
      if (settings.preventClose) {
        const windowRefParameter = isNotComponent(settings.content) ? void 0 : windowRef;
        return !settings.preventClose(e, windowRefParameter);
      }
      return true;
    }))).pipe(
      take(1),
      // Takes care for multiple subscriptions:
      // We subscribe internally and the user may subscribe to get a close result - window.result.subscribe().
      // This causes multiple subscriptions to the same source and thus multiple emissions. share() solves that.
      share()
    );
    result.subscribe(close);
    windowRef.close = close;
    windowRef.result = result;
    window2.changeDetectorRef.markForCheck();
    return windowRef;
  }
  applyOptions(instance, options) {
    if (isPresent(options.htmlAttributes)) {
      instance.htmlAttributes = options.htmlAttributes;
    }
    if (isPresent(options.cssClass)) {
      instance.cssClass = options.cssClass;
    }
    if (isPresent(options.title)) {
      instance.title = options.title;
    }
    if (isPresent(options.keepContent)) {
      instance.keepContent = options.keepContent;
    }
    if (isPresent(options.width)) {
      instance.width = options.width;
    }
    if (isPresent(options.minWidth)) {
      instance.minWidth = options.minWidth;
    }
    if (isPresent(options.height)) {
      instance.height = options.height;
    }
    if (isPresent(options.minHeight)) {
      instance.minHeight = options.minHeight;
    }
    if (isPresent(options.left)) {
      instance.left = options.left;
    }
    if (isPresent(options.top)) {
      instance.top = options.top;
    }
    if (isPresent(options.draggable)) {
      instance.draggable = options.draggable;
    }
    if (isPresent(options.resizable)) {
      instance.resizable = options.resizable;
    }
    if (isPresent(options.messages && options.messages.closeTitle)) {
      instance.messages.closeTitle = options.messages.closeTitle;
    }
    if (isPresent(options.messages && options.messages.restoreTitle)) {
      instance.messages.restoreTitle = options.messages.restoreTitle;
    }
    if (isPresent(options.messages && options.messages.maximizeTitle)) {
      instance.messages.maximizeTitle = options.messages.maximizeTitle;
    }
    if (isPresent(options.messages && options.messages.minimizeTitle)) {
      instance.messages.minimizeTitle = options.messages.minimizeTitle;
    }
    if (isPresent(options.autoFocusedElement)) {
      instance.autoFocusedElement = options.autoFocusedElement;
    }
    if (isPresent(options.state)) {
      instance.state = options.state;
      if (options.state === "minimized") {
        instance.keepContent = true;
      }
    }
    if (isPresent(options.themeColor)) {
      instance.themeColor = options.themeColor;
    }
    if (options.content instanceof TemplateRef) {
      instance.contentTemplate = options.content;
    }
    if (options.titleBarContent instanceof TemplateRef) {
      instance.titleBarTemplate = options.titleBarContent;
    }
  }
  contentFrom(content, container, windowRef) {
    const renderer = container.injector.get(Renderer2);
    let nodes = [];
    let componentRef = null;
    if (typeof content === "string") {
      nodes = [renderer.createText(content)];
    } else if (content && !(content instanceof TemplateRef)) {
      const injector = new WindowInjector(() => windowRef, container.injector);
      const factory = this.resolver.resolveComponentFactory(content);
      componentRef = container.createComponent(factory, void 0, injector);
      nodes = [componentRef.location.nativeElement];
      windowRef.content = componentRef;
    }
    return {
      componentRef,
      nodes: [
        [],
        nodes
        // Content
      ]
    };
  }
};
WindowService.ɵfac = function WindowService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(WindowContainerService));
};
WindowService.ɵprov = ɵɵdefineInjectable({
  token: WindowService,
  factory: WindowService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: WindowContainerService,
      decorators: [{
        type: Inject,
        args: [WindowContainerService]
      }]
    }];
  }, null);
})();
var DialogContainerDirective = class {
  constructor(container, service) {
    service.container = container;
  }
};
DialogContainerDirective.ɵfac = function DialogContainerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogContainerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DialogContainerService));
};
DialogContainerDirective.ɵdir = ɵɵdefineDirective({
  type: DialogContainerDirective,
  selectors: [["", "kendoDialogContainer", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialogContainer]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: DialogContainerService
    }];
  }, null);
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
CustomMessagesComponent.ɵdir = ɵɵdefineDirective({
  type: CustomMessagesComponent,
  selectors: [["kendo-dialog-messages"], ["kendo-window-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => CustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-dialog-messages, kendo-window-messages",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var WindowContainerDirective = class {
  constructor(container, service) {
    service.container = container;
  }
};
WindowContainerDirective.ɵfac = function WindowContainerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowContainerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(WindowContainerService));
};
WindowContainerDirective.ɵdir = ɵɵdefineDirective({
  type: WindowContainerDirective,
  selectors: [["", "kendoWindowContainer", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoWindowContainer]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: WindowContainerService
    }];
  }, null);
})();
var KENDO_DIALOG = [DialogComponent, DialogTitleBarComponent, DialogContainerDirective, DialogActionsComponent, CustomMessagesComponent];
var KENDO_WINDOW = [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, WindowContainerDirective, DialogActionsComponent, CustomMessagesComponent];
var KENDO_DIALOGS = [...KENDO_DIALOG, ...KENDO_WINDOW];
var DialogModule = class {
};
DialogModule.ɵfac = function DialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogModule)();
};
DialogModule.ɵmod = ɵɵdefineNgModule({
  type: DialogModule,
  imports: [DialogComponent, DialogTitleBarComponent, DialogContainerDirective, DialogActionsComponent, CustomMessagesComponent],
  exports: [DialogComponent, DialogTitleBarComponent, DialogContainerDirective, DialogActionsComponent, CustomMessagesComponent]
});
DialogModule.ɵinj = ɵɵdefineInjector({
  providers: [DialogContainerService, DialogService, IconsService],
  imports: [DialogComponent, DialogTitleBarComponent, DialogActionsComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DIALOG],
      imports: [...KENDO_DIALOG],
      providers: [DialogContainerService, DialogService, IconsService]
    }]
  }], null, null);
})();
var WindowModule = class {
};
WindowModule.ɵfac = function WindowModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WindowModule)();
};
WindowModule.ɵmod = ɵɵdefineNgModule({
  type: WindowModule,
  imports: [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, WindowContainerDirective, DialogActionsComponent, CustomMessagesComponent],
  exports: [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, WindowContainerDirective, DialogActionsComponent, CustomMessagesComponent]
});
WindowModule.ɵinj = ɵɵdefineInjector({
  providers: [WindowContainerService, WindowService, IconsService],
  imports: [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, DialogActionsComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_WINDOW],
      exports: [...KENDO_WINDOW],
      providers: [WindowContainerService, WindowService, IconsService]
    }]
  }], null, null);
})();
var DialogsModule = class {
};
DialogsModule.ɵfac = function DialogsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogsModule)();
};
DialogsModule.ɵmod = ɵɵdefineNgModule({
  type: DialogsModule,
  imports: [DialogComponent, DialogTitleBarComponent, DialogContainerDirective, DialogActionsComponent, CustomMessagesComponent, WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, WindowContainerDirective, DialogActionsComponent, CustomMessagesComponent],
  exports: [DialogComponent, DialogTitleBarComponent, DialogContainerDirective, DialogActionsComponent, CustomMessagesComponent, WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, WindowContainerDirective, DialogActionsComponent, CustomMessagesComponent]
});
DialogsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, DialogService, DialogContainerService, WindowService, WindowContainerService],
  imports: [DialogComponent, DialogTitleBarComponent, DialogActionsComponent, WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, DialogActionsComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_DIALOGS],
      exports: [...KENDO_DIALOGS],
      providers: [IconsService, DialogService, DialogContainerService, WindowService, WindowContainerService]
    }]
  }], null, null);
})();

export {
  DialogActionsComponent,
  PreventableEvent,
  Messages,
  LocalizedMessagesDirective,
  DialogTitleBarComponent,
  DialogCloseResult,
  DialogComponent,
  DialogRef,
  DialogContentBase,
  DialogContainerService,
  DialogAction,
  DialogSettings,
  DialogService,
  DragResizeService,
  WindowTitleBarComponent,
  NavigationService,
  WindowCloseActionDirective,
  WindowRestoreActionDirective,
  WindowMaximizeActionDirective,
  WindowMinimizeActionDirective,
  WindowComponent,
  WindowCloseResult,
  WindowRef,
  WindowSettings,
  WindowContainerService,
  WindowService,
  DialogContainerDirective,
  CustomMessagesComponent,
  WindowContainerDirective,
  KENDO_DIALOG,
  KENDO_WINDOW,
  KENDO_DIALOGS,
  DialogModule,
  WindowModule,
  DialogsModule
};
//# sourceMappingURL=chunk-PVTJ4MB3.js.map
