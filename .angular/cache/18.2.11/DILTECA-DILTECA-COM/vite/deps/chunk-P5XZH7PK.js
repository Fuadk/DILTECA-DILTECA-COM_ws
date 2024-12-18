import {
  ResizeBatchService,
  ResizeSensorComponent,
  hasObservers,
  isChanged,
  isDocumentAvailable
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
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  Subscription,
  take
} from "./chunk-NXOOB3F7.js";

// node_modules/@progress/kendo-angular-progressbar/fesm2020/progress-kendo-angular-progressbar.mjs
var _c0 = ["progressStatus"];
var _c1 = ["progressStatusWrap"];
function ProgressBarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.formattedLabelValue);
  }
}
function ProgressBarComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.formattedLabelValue);
  }
}
function ChunkProgressBarComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 3);
  }
  if (rf & 2) {
    const chunk_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r2.orientationStyles.width)("height", ctx_r2.orientationStyles.height);
    ɵɵclassProp("k-first", i_r2 === 0)("k-last", i_r2 === ctx_r2.chunkCount - 1)("k-selected", chunk_r1);
    ɵɵproperty("ngClass", chunk_r1 ? ctx_r2.progressCssClass : ctx_r2.emptyCssClass)("ngStyle", chunk_r1 ? ctx_r2.progressCssStyle : ctx_r2.emptyCssStyle);
  }
}
var _c2 = ["progress"];
var _c3 = ["scale"];
var _c4 = ["label"];
var _c5 = ["surface"];
function CircularProgressBarComponent_div_11_ng_template_2_Template(rf, ctx) {
}
function CircularProgressBarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 4);
    ɵɵtemplate(2, CircularProgressBarComponent_div_11_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.centerTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.centerTemplateContext);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-progressbar",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372203,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var MIN_MAX_ERROR_MESSAGE = `The max value should be greater than the min.`;
var LABEL_DECIMALS = 3;
var MIN_RATIO = 1e-4;
var formatValue = (value, min, max, label) => {
  const defaultFormattedValue = truncateNumber(value);
  if (typeof label !== "boolean") {
    if (typeof label.format === "string") {
      switch (label.format) {
        case "value":
          return defaultFormattedValue;
        case "percent":
          return `${Math.floor(calculatePercentage(value, min, max))}%`;
        default:
          return defaultFormattedValue;
      }
    } else if (typeof label.format === "function") {
      return label.format(value);
    } else {
      return defaultFormattedValue;
    }
  }
  return defaultFormattedValue;
};
var validateRange = (min, max) => {
  if (isDevMode && min > max) {
    throw new Error(MIN_MAX_ERROR_MESSAGE);
  }
};
var adjustValueToRange = (min, max, value) => Math.max(Math.min(value, max), min);
var calculatePercentage = (value, min, max) => {
  const decimalValue = Math.abs((value - min) / (max - min));
  return decimalValue * 100;
};
var truncateNumber = (value) => {
  const numberParts = value.toString().split(".");
  return numberParts.length === 1 ? `${numberParts[0]}` : `${numberParts[0]}.${numberParts[1].substr(0, LABEL_DECIMALS)}`;
};
var calculateRatio = (min, max, value) => Math.max((value - min) / (max - min), MIN_RATIO);
var extractValueFromChanges = (changes, type, value) => changes[type] && changes[type].currentValue !== void 0 ? changes[type].currentValue : value;
var runAnimation = (changes, animation, previousValue, displayValue) => animation && typeof requestAnimationFrame !== "undefined" && changes["value"] && previousValue !== displayValue;
var stopCurrentAnimation = (changes) => {
  const isAnimationChanged = Boolean(changes["animation"]);
  const hasAnimation = isAnimationChanged && changes["animation"].currentValue;
  return isAnimationChanged && !hasAnimation;
};
var setProgressBarStyles = (props, renderer) => {
  props.forEach((prop) => {
    renderer[prop.method](prop.el, prop.attr, `${prop.attrValue}`);
  });
};
var removeProgressBarStyles = (props, renderer) => {
  props.forEach((prop) => {
    renderer[prop.method](prop.el, prop.attr);
  });
};
var hasElementSize = (element) => {
  return !!(element.style.width && element.style.height);
};
var ProgressBarBase = class {
  /**
   * @hidden
   */
  constructor(elem, renderer, localization) {
    this.elem = elem;
    this.renderer = renderer;
    this.localization = localization;
    this.hostClasses = true;
    this.roleAttribute = "progressbar";
    this.max = 100;
    this.min = 0;
    this.value = 0;
    this.orientation = "horizontal";
    this.disabled = false;
    this.reverse = false;
    this.indeterminate = false;
    this.displayValue = 0;
    this.previousValue = 0;
    validatePackage(packageMetadata);
    this.localizationChangeSubscription = localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  get isHorizontal() {
    return this.orientation === "horizontal";
  }
  get isVertical() {
    return this.orientation === "vertical";
  }
  get disabledClass() {
    return this.disabled;
  }
  get reverseClass() {
    return this.reverse;
  }
  get indeterminateClass() {
    return this.indeterminate;
  }
  get dirAttribute() {
    return this.direction;
  }
  get ariaMinAttribute() {
    return String(this.min);
  }
  get ariaMaxAttribute() {
    return String(this.max);
  }
  get ariaValueAttribute() {
    return this.indeterminate ? void 0 : String(this.displayValue);
  }
  /**
   * @hidden
   */
  get isCompleted() {
    return this.value === this.max;
  }
  /**
   * @hidden
   */
  get statusWidth() {
    return this.orientation === "horizontal" ? this._progressRatio * 100 : 100;
  }
  /**
   * @hidden
   */
  get statusHeight() {
    return this.orientation === "vertical" ? this._progressRatio * 100 : 100;
  }
  /**
   * @hidden
   */
  get statusWrapperWidth() {
    return this.orientation === "horizontal" ? 100 / this._progressRatio : 100;
  }
  /**
   * @hidden
   */
  get statusWrapperHeight() {
    return this.orientation === "vertical" ? 100 / this._progressRatio : 100;
  }
  get _progressRatio() {
    return calculateRatio(this.min, this.max, this.displayValue);
  }
  ngAfterViewInit() {
    const elem = this.elem.nativeElement;
    const label = this.localization.get("progressBarLabel");
    this.renderer.setAttribute(elem, "aria-label", label);
  }
  ngOnChanges(changes) {
    const min = extractValueFromChanges(changes, "min", this.min);
    const max = extractValueFromChanges(changes, "max", this.max);
    const value = extractValueFromChanges(changes, "value", this.value);
    if (changes["min"] || changes["max"] || changes["value"]) {
      if (changes["min"] || changes["max"]) {
        validateRange(min, max);
      }
      if (changes["value"]) {
        if (value == null || Number.isNaN(value)) {
          this.value = min;
        }
        const previousValue = this.displayValue;
        this.displayValue = adjustValueToRange(this.min, this.max, value);
        this.previousValue = previousValue;
      }
      this.min = min;
      this.max = max;
      this.displayValue = adjustValueToRange(this.min, this.max, value);
    }
  }
  ngOnDestroy() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
  }
};
ProgressBarBase.ɵfac = function ProgressBarBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ProgressBarBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
ProgressBarBase.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarBase,
  selectors: [["ng-component"]],
  hostVars: 17,
  hostBindings: function ProgressBarBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dirAttribute)("role", ctx.roleAttribute)("aria-valuemin", ctx.ariaMinAttribute)("aria-valuemax", ctx.ariaMaxAttribute)("aria-valuenow", ctx.ariaValueAttribute);
      ɵɵclassProp("k-progressbar", ctx.hostClasses)("k-progressbar-horizontal", ctx.isHorizontal)("k-progressbar-vertical", ctx.isVertical)("k-disabled", ctx.disabledClass)("k-progressbar-reverse", ctx.reverseClass)("k-progressbar-indeterminate", ctx.indeterminateClass);
    }
  },
  inputs: {
    max: "max",
    min: "min",
    value: "value",
    orientation: "orientation",
    disabled: "disabled",
    reverse: "reverse",
    indeterminate: "indeterminate"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function ProgressBarBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarBase, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-progressbar"]
    }],
    isHorizontal: [{
      type: HostBinding,
      args: ["class.k-progressbar-horizontal"]
    }],
    isVertical: [{
      type: HostBinding,
      args: ["class.k-progressbar-vertical"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    reverseClass: [{
      type: HostBinding,
      args: ["class.k-progressbar-reverse"]
    }],
    indeterminateClass: [{
      type: HostBinding,
      args: ["class.k-progressbar-indeterminate"]
    }],
    dirAttribute: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaMinAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaMaxAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    ariaValueAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }]
  });
})();
var ProgressBarMessages = class extends ComponentMessages {
};
ProgressBarMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵProgressBarMessages_BaseFactory;
  return function ProgressBarMessages_Factory(__ngFactoryType__) {
    return (ɵProgressBarMessages_BaseFactory || (ɵProgressBarMessages_BaseFactory = ɵɵgetInheritedFactory(ProgressBarMessages)))(__ngFactoryType__ || ProgressBarMessages);
  };
})();
ProgressBarMessages.ɵdir = ɵɵdefineDirective({
  type: ProgressBarMessages,
  inputs: {
    progressBarLabel: "progressBarLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarMessages, [{
    type: Directive,
    args: [{}]
  }], null, {
    progressBarLabel: [{
      type: Input
    }]
  });
})();
var LocalizedProgressBarMessagesDirective = class extends ProgressBarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedProgressBarMessagesDirective.ɵfac = function LocalizedProgressBarMessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizedProgressBarMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedProgressBarMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedProgressBarMessagesDirective,
  selectors: [["", "kendoProgressBarLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ProgressBarMessages,
    useExisting: forwardRef(() => LocalizedProgressBarMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedProgressBarMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ProgressBarMessages,
        useExisting: forwardRef(() => LocalizedProgressBarMessagesDirective)
      }],
      selector: `[kendoProgressBarLocalizedMessages]`,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var ProgressBarComponent = class extends ProgressBarBase {
  /**
   * @hidden
   */
  constructor(localization, elem, renderer, zone) {
    super(elem, renderer, localization);
    this.localization = localization;
    this.elem = elem;
    this.renderer = renderer;
    this.zone = zone;
    this.label = true;
    this.animation = false;
    this.animationEnd = new EventEmitter();
  }
  /**
   * @hidden
   */
  get showLabel() {
    if (typeof this.label === "boolean") {
      return this.label;
    } else {
      if (this.label && !this.label.hasOwnProperty("visible")) {
        this.label.visible = true;
      }
      return this.label.visible;
    }
  }
  /**
   * @hidden
   */
  get labelPosition() {
    if (typeof this.label === "boolean") {
      return "end";
    } else {
      if (this.label && !this.label.hasOwnProperty("position")) {
        this.label.position = "end";
      }
      return this.label.position;
    }
  }
  /**
   * @hidden
   */
  get isPositionStart() {
    return this.labelPosition === "start";
  }
  /**
   * @hidden
   */
  get isPositionCenter() {
    return this.labelPosition === "center";
  }
  /**
   * @hidden
   */
  get isPositionEnd() {
    return this.labelPosition === "end";
  }
  /**
   * @hidden
   */
  get formattedLabelValue() {
    return formatValue(this.displayValue, this.min, this.max, this.label);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (this.isAnimationInProgress && stopCurrentAnimation(changes)) {
      this.cancelCurrentAnimation = true;
    }
    if (runAnimation(changes, this.animation, this.previousValue, this.displayValue) && !changes["value"].firstChange) {
      this.startAnimation(this.previousValue);
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
  /**
   * @hidden
   */
  startAnimation(previousValue) {
    this.isAnimationInProgress = true;
    const element = this.progressStatusElement.nativeElement;
    const wrapperElement = this.progressStatusWrapperElement.nativeElement;
    const animationOptions = this.getAnimationOptions(previousValue);
    this.zone.runOutsideAngular(() => {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
      const animate = () => {
        const elapsed = (/* @__PURE__ */ new Date()).getTime() - animationOptions.startTime;
        const position = Math.min(elapsed / animationOptions.duration, 1);
        const size = animationOptions.startSize + animationOptions.deltaSize * position;
        const wrapperSize = 100 / size * 100;
        this.renderValueChange(element, wrapperElement, animationOptions.property, size, wrapperSize);
        if (position < 1) {
          if (this.cancelCurrentAnimation) {
            this.resetProgress(element, wrapperElement, animationOptions.property);
            return;
          }
          this.animationFrame = requestAnimationFrame(animate);
        } else {
          this.stopAnimation(previousValue);
        }
      };
      animate();
    });
  }
  /**
   * @hidden
   */
  get animationDuration() {
    if (typeof this.animation === "boolean") {
      return 400;
    } else {
      if (this.animation && !this.animation.hasOwnProperty("duration")) {
        this.animation.duration = 400;
      }
      return this.animation.duration;
    }
  }
  stopAnimation(value) {
    if (hasObservers(this.animationEnd)) {
      this.zone.run(() => {
        this.animationEnd.emit({
          from: value,
          to: this.displayValue
        });
      });
    }
    this.zone.run(() => {
      this.isAnimationInProgress = false;
    });
  }
  getAnimationOptions(value) {
    const isHorizontal = this.orientation === "horizontal";
    const previousRatio = calculateRatio(this.min, this.max, value);
    const previousStatusWidth = isHorizontal ? previousRatio * 100 : 100;
    const previousStatusHeight = !isHorizontal ? previousRatio * 100 : 100;
    const property = isHorizontal ? "width" : "height";
    const startTime = (/* @__PURE__ */ new Date()).getTime();
    const startSize = isHorizontal ? previousStatusWidth : previousStatusHeight;
    const deltaSize = isHorizontal ? this.statusWidth - previousStatusWidth : this.statusHeight - previousStatusHeight;
    const duration = this.animationDuration * Math.abs(deltaSize / 100);
    return {
      property,
      startTime,
      startSize,
      deltaSize,
      duration
    };
  }
  renderValueChange(element, wrapperElement, property, size, wrapperSize) {
    this.renderer.setStyle(element, property, size + "%");
    this.renderer.setStyle(wrapperElement, property, wrapperSize + "%");
  }
  resetProgress(element, wrapperElement, property) {
    const size = calculateRatio(this.min, this.max, this.value);
    const newSize = size * 100;
    const newWrapperSize = 100 / size;
    this.renderValueChange(element, wrapperElement, property, newSize, newWrapperSize);
    this.zone.run(() => {
      this.cancelCurrentAnimation = false;
      this.isAnimationInProgress = false;
    });
  }
};
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ProgressBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
ProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarComponent,
  selectors: [["kendo-progressbar"]],
  viewQuery: function ProgressBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressStatusElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressStatusWrapperElement = _t.first);
    }
  },
  inputs: {
    label: "label",
    progressCssStyle: "progressCssStyle",
    progressCssClass: "progressCssClass",
    emptyCssStyle: "emptyCssStyle",
    emptyCssClass: "emptyCssClass",
    animation: "animation"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["kendoProgressBar"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.progressbar"
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 28,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_0 = goog.getMsg("Progressbar");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.progressbar.progressBarLabel|The aria-label attribute for the ProgressBar component.:Progressbar`;
    }
    return [["progressStatus", ""], ["progressStatusWrap", ""], ["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_0], [1, "k-progress-status-wrap", 3, "ngStyle", "ngClass"], ["class", "k-progress-status", 4, "ngIf"], [1, "k-selected", "k-progressbar-value", 3, "ngStyle", "ngClass"], [1, "k-progress-status-wrap"], [1, "k-progress-status"]];
  },
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 2);
      ɵɵelementStart(1, "span", 3);
      ɵɵtemplate(2, ProgressBarComponent_span_2_Template, 2, 1, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 5, 0)(5, "span", 6, 1);
      ɵɵtemplate(7, ProgressBarComponent_span_7_Template, 2, 1, "span", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("k-progress-start", ctx.isPositionStart)("k-progress-center", ctx.isPositionCenter)("k-progress-end", ctx.isPositionEnd);
      ɵɵproperty("ngStyle", ctx.emptyCssStyle)("ngClass", ctx.emptyCssClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLabel);
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.statusWidth, "%")("height", ctx.statusHeight, "%");
      ɵɵclassProp("k-complete", ctx.isCompleted);
      ɵɵproperty("ngStyle", ctx.progressCssStyle)("ngClass", ctx.progressCssClass);
      ɵɵadvance(2);
      ɵɵstyleProp("width", ctx.statusWrapperWidth, "%")("height", ctx.statusWrapperHeight, "%");
      ɵɵclassProp("k-progress-start", ctx.isPositionStart)("k-progress-center", ctx.isPositionCenter)("k-progress-end", ctx.isPositionEnd);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLabel);
    }
  },
  dependencies: [LocalizedProgressBarMessagesDirective, NgStyle, NgClass, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoProgressBar",
      selector: "kendo-progressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.progressbar.progressBarLabel|The aria-label attribute for the ProgressBar component."
            progressBarLabel="Progressbar"
        >
        </ng-container>
        <span class="k-progress-status-wrap"
            [class.k-progress-start]="isPositionStart"
            [class.k-progress-center]="isPositionCenter"
            [class.k-progress-end]="isPositionEnd"
            [ngStyle]="emptyCssStyle"
            [ngClass]="emptyCssClass">
            <span *ngIf="showLabel" class="k-progress-status">{{formattedLabelValue}}</span>
        </span>
        <div
            #progressStatus
            class="k-selected k-progressbar-value"
            [class.k-complete]="isCompleted"
            [ngStyle]="progressCssStyle"
            [ngClass]="progressCssClass"
            [style.width.%]="statusWidth"
            [style.height.%]="statusHeight"
            >
            <span
                #progressStatusWrap
                class="k-progress-status-wrap"
                [style.width.%]="statusWrapperWidth"
                [style.height.%]="statusWrapperHeight"
                [class.k-progress-start]="isPositionStart"
                [class.k-progress-center]="isPositionCenter"
                [class.k-progress-end]="isPositionEnd"
                >
                <span *ngIf="showLabel" class="k-progress-status">{{formattedLabelValue}}</span>
            </span>
        </div>
       `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.progressbar"
      }],
      standalone: true,
      imports: [LocalizedProgressBarMessagesDirective, NgStyle, NgClass, NgIf]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    label: [{
      type: Input
    }],
    progressCssStyle: [{
      type: Input
    }],
    progressCssClass: [{
      type: Input
    }],
    emptyCssStyle: [{
      type: Input
    }],
    emptyCssClass: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    animationEnd: [{
      type: Output
    }],
    progressStatusElement: [{
      type: ViewChild,
      args: ["progressStatus", {
        static: false
      }]
    }],
    progressStatusWrapperElement: [{
      type: ViewChild,
      args: ["progressStatusWrap", {
        static: false
      }]
    }]
  });
})();
var ChunkProgressBarComponent = class extends ProgressBarBase {
  /**
   * @hidden
   */
  constructor(localization, elem, renderer) {
    super(elem, renderer, localization);
    this.localization = localization;
    this.elem = elem;
    this.renderer = renderer;
    this.chunkClass = true;
    this.chunkCount = 5;
    this._orientationStyles = {
      width: `${this.chunkSizePercentage}%`,
      height: null
    };
  }
  /**
   * @hidden
   */
  get chunks() {
    const count = this.chunkCount;
    const chunks = Array(count).fill(false);
    const completedChunks = Math.floor(this._progressRatio * count);
    for (let i = 0; i < completedChunks; i++) {
      chunks[i] = true;
    }
    return chunks;
  }
  /**
   * @hidden
   */
  get chunkSizePercentage() {
    return 100 / this.chunkCount;
  }
  /**
   * @hidden
   */
  get orientationStyles() {
    if (this.orientation === "horizontal") {
      this._orientationStyles.width = `${this.chunkSizePercentage}%`;
      this._orientationStyles.height = null;
    } else {
      this._orientationStyles.height = `${this.chunkSizePercentage}%`;
      this._orientationStyles.width = null;
    }
    return this._orientationStyles;
  }
};
ChunkProgressBarComponent.ɵfac = function ChunkProgressBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChunkProgressBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
ChunkProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ChunkProgressBarComponent,
  selectors: [["kendo-chunkprogressbar"]],
  hostVars: 2,
  hostBindings: function ChunkProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-chunk-progressbar", ctx.chunkClass);
    }
  },
  inputs: {
    chunkCount: "chunkCount",
    progressCssStyle: "progressCssStyle",
    progressCssClass: "progressCssClass",
    emptyCssStyle: "emptyCssStyle",
    emptyCssClass: "emptyCssClass"
  },
  exportAs: ["kendoChunkProgressBar"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chunkprogressbar"
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 1,
  consts: () => {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_1 = goog.getMsg("Chunk progressbar");
      i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.chunkprogressbar.progressBarLabel|The aria-label attribute for the ChunkProgressBar component.:Chunk progressbar`;
    }
    return [["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_1], [1, "k-reset", "k-progressbar-chunks"], ["class", "k-progressbar-chunk", 3, "k-first", "k-last", "k-selected", "ngClass", "ngStyle", "width", "height", 4, "ngFor", "ngForOf"], [1, "k-progressbar-chunk", 3, "ngClass", "ngStyle"]];
  },
  template: function ChunkProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "ul", 1);
      ɵɵtemplate(2, ChunkProgressBarComponent_li_2_Template, 1, 12, "li", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.chunks);
    }
  },
  dependencies: [LocalizedProgressBarMessagesDirective, NgForOf, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChunkProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoChunkProgressBar",
      selector: "kendo-chunkprogressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.chunkprogressbar.progressBarLabel|The aria-label attribute for the ChunkProgressBar component."
            progressBarLabel="Chunk progressbar"
        >
        </ng-container>
        <ul class="k-reset k-progressbar-chunks">
            <li class="k-progressbar-chunk" *ngFor="let chunk of chunks; let i = index;"
                [class.k-first]="i === 0"
                [class.k-last]="i === chunkCount - 1"
                [class.k-selected]="chunk"
                [ngClass]="chunk ? progressCssClass : emptyCssClass"
                [ngStyle]="chunk ? progressCssStyle : emptyCssStyle"
                [style.width]="orientationStyles.width"
                [style.height]="orientationStyles.height"
                >
            </li>
        </ul>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chunkprogressbar"
      }],
      standalone: true,
      imports: [LocalizedProgressBarMessagesDirective, NgForOf, NgClass, NgStyle]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    chunkClass: [{
      type: HostBinding,
      args: ["class.k-chunk-progressbar"]
    }],
    chunkCount: [{
      type: Input
    }],
    progressCssStyle: [{
      type: Input
    }],
    progressCssClass: [{
      type: Input
    }],
    emptyCssStyle: [{
      type: Input
    }],
    emptyCssClass: [{
      type: Input
    }]
  });
})();
var CircularProgressbarCenterTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
CircularProgressbarCenterTemplateDirective.ɵfac = function CircularProgressbarCenterTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CircularProgressbarCenterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
CircularProgressbarCenterTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: CircularProgressbarCenterTemplateDirective,
  selectors: [["", "kendoCircularProgressbarCenterTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularProgressbarCenterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCircularProgressbarCenterTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var DEFAULT_SURFACE_SIZE = 200;
var CircularProgressBarComponent = class {
  constructor(renderer, cdr, localization, element, zone) {
    this.renderer = renderer;
    this.cdr = cdr;
    this.localization = localization;
    this.element = element;
    this.zone = zone;
    this.hostClasses = true;
    this.roleAttribute = "progressbar";
    this.animation = false;
    this.opacity = 1;
    this.animationEnd = new EventEmitter();
    this.centerTemplateContext = {};
    this._indeterminate = false;
    this._max = 100;
    this._min = 0;
    this._value = 0;
    this.previousValue = 0;
    this.internalValue = 0;
    this.subscriptions = new Subscription();
    validatePackage(packageMetadata);
    this.subscriptions.add(this.localization.changes.subscribe(this.rtlChange.bind(this)));
  }
  get ariaMinAttribute() {
    return String(this.min);
  }
  get ariaMaxAttribute() {
    return String(this.max);
  }
  get ariaValueAttribute() {
    return this.indeterminate ? void 0 : String(this.value);
  }
  /**
   * Sets the default value of the Circular Progressbar between `min` and `max`.
   *
   * @default 0
   */
  set value(value) {
    if (value > this.max) {
      this.handleErrors("value > max");
    }
    if (value < this.min) {
      this.handleErrors("value < min");
    }
    this.previousValue = this.value;
    this._value = value;
  }
  get value() {
    return this._value;
  }
  /**
   * The maximum value which the Circular Progressbar can accept.
   *
   * @default 100
   */
  set max(max) {
    if (max < this.min) {
      this.handleErrors("max < min");
    }
    this._max = max;
  }
  get max() {
    return this._max;
  }
  /**
   * The minimum value which the Circular Progressbar can accept.
   *
   * @default 0
   */
  set min(min) {
    if (min > this.max) {
      this.handleErrors("max < min");
    }
    this._min = min;
  }
  get min() {
    return this._min;
  }
  /**
   * Puts the Circular ProgressBar in indeterminate state.
   * @default false
   */
  set indeterminate(indeterminate) {
    this._indeterminate = indeterminate;
  }
  get indeterminate() {
    return this._indeterminate;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    const elem = this.element.nativeElement;
    const ariaLabel = this.localization.get("progressBarLabel");
    this.renderer.setAttribute(elem, "aria-label", ariaLabel);
    this.initProgressArc();
  }
  ngOnChanges(changes) {
    const skipFirstChange = true;
    if (isChanged("value", changes, skipFirstChange) && this.progress) {
      if (this.animation) {
        this.progressbarAnimation();
      } else {
        const value = this.value - this.min;
        this.internalValue = changes["value"].currentValue;
        this.calculateProgress(value);
      }
    }
    if (changes["opacity"] && this.progress) {
      setProgressBarStyles([{
        method: "setAttribute",
        el: this.progress.nativeElement,
        attr: "opacity",
        attrValue: this.opacity.toString()
      }], this.renderer);
    }
    if (changes["indeterminate"] && !changes["indeterminate"].firstChange) {
      this.indeterminateState();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  onResize() {
    this.setStyles();
    const value = this.animation ? this.internalValue : this.value;
    this.calculateProgress(value);
    this.updateCenterTemplate(value);
  }
  initProgressArc() {
    this.setStyles();
    if (this.indeterminate) {
      this.indeterminateState();
    } else {
      if (!this.animation) {
        const value = this.value - this.min;
        this.calculateProgress(value);
      } else {
        this.progressbarAnimation();
      }
    }
  }
  calculateProgress(value) {
    if (this.progressColor) {
      this.updateProgressColor(value);
    }
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.updateCenterTemplate(value + this.min);
    });
    const progressArc = this.progress.nativeElement;
    const radius = this.progress.nativeElement.r.baseVal.value;
    const circumference = Math.PI * (radius * 2);
    const dir = this.rtl ? circumference * -1 : circumference;
    const strokeDashOffest = circumference - dir * (value / (this.max - this.min));
    const progressCalculations = [{
      method: "setStyle",
      el: progressArc,
      attr: "strokeDasharray",
      attrValue: circumference.toString()
    }, {
      method: "setStyle",
      el: progressArc,
      attr: "strokeDashoffset",
      attrValue: strokeDashOffest.toString()
    }];
    setProgressBarStyles(progressCalculations, this.renderer);
  }
  progressbarAnimation() {
    const forwardProgress = {
      isOngoing: this.internalValue > this.value - this.min,
      isPositive: this.value >= this.previousValue
    };
    const backwardProgress = {
      isOngoing: this.internalValue < this.value - this.min,
      isNegative: this.value <= this.previousValue
    };
    if (forwardProgress.isOngoing && forwardProgress.isPositive || backwardProgress.isOngoing && backwardProgress.isNegative) {
      return;
    }
    this.calculateProgress(this.internalValue);
    const from = this.internalValue;
    if (hasObservers(this.animationEnd)) {
      this.animationEnd.emit({
        from,
        to: this.internalValue
      });
    }
    forwardProgress.isPositive ? this.internalValue += 1 : this.internalValue -= 1;
    requestAnimationFrame(this.progressbarAnimation.bind(this));
  }
  setStyles() {
    const progressArc = this.progress.nativeElement;
    const scale = this.scale.nativeElement;
    const surface = this.surface.nativeElement;
    const element = this.element.nativeElement;
    let elWidth = element.getBoundingClientRect().width;
    if (!hasElementSize(element)) {
      const surfaceSize = [{
        method: "setStyle",
        el: surface,
        attr: "width",
        attrValue: `${DEFAULT_SURFACE_SIZE}px`
      }, {
        method: "setStyle",
        el: surface,
        attr: "height",
        attrValue: `${DEFAULT_SURFACE_SIZE}px`
      }];
      elWidth = DEFAULT_SURFACE_SIZE;
      setProgressBarStyles(surfaceSize, this.renderer);
    }
    const attributesArray = [{
      method: "setAttribute",
      el: progressArc,
      attr: "r",
      attrValue: String(elWidth / 2 - 10)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "cx",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "cy",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "opacity",
      attrValue: String(this.opacity)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "r",
      attrValue: String(elWidth / 2 - 10)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "cx",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "cy",
      attrValue: String(elWidth / 2)
    }];
    setProgressBarStyles(attributesArray, this.renderer);
  }
  indeterminateState() {
    const progressArc = this.progress.nativeElement;
    if (this.indeterminate) {
      this.calculateProgress(this.value - this.min);
      const rotate = this.rtl ? {
        from: 360,
        to: 0
      } : {
        from: 0,
        to: 360
      };
      let color;
      if (!this.progressColor) {
        color = getComputedStyle(progressArc).stroke;
      }
      const indeterminateStyles = [{
        method: "setStyle",
        el: progressArc,
        attr: "transform-origin",
        attrValue: "center"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "fill",
        attrValue: "none"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "stroke-linecap",
        attrValue: "round"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "stroke",
        attrValue: color ? color : this.currentColor
      }];
      setProgressBarStyles(indeterminateStyles, this.renderer);
      this.renderer.removeClass(progressArc, "k-circular-progressbar-arc");
      progressArc.innerHTML = `<animateTransform attributeName="transform" type="rotate" from="${rotate.from} 0 0" to="${rotate.to} 0 0" dur="1s" repeatCount="indefinite" />`;
    } else {
      this.renderer.addClass(progressArc, "k-circular-progressbar-arc");
      const removeIndeterminateStyles = [{
        method: "removeStyle",
        el: progressArc,
        attr: "transform-origin"
      }, {
        method: "removeStyle",
        el: progressArc,
        attr: "fill"
      }, {
        method: "removeStyle",
        el: progressArc,
        attr: "stroke-linecap"
      }];
      removeProgressBarStyles(removeIndeterminateStyles, this.renderer);
      progressArc.innerHTML = "";
      if (this.animation) {
        this.progressbarAnimation();
      }
    }
  }
  updateCenterTemplate(value) {
    if (!this.centerTemplate) {
      return;
    }
    this.centerTemplateContext.value = value;
    this.centerTemplateContext.color = this.currentColor;
    this.cdr.detectChanges();
    this.positionLabel();
  }
  positionLabel() {
    const labelEl = this.labelElement.nativeElement;
    const element = this.element.nativeElement;
    const surface = this.surface.nativeElement;
    let elWidth;
    let elHeight;
    if (!hasElementSize(element)) {
      const surfaceSize = surface.getBoundingClientRect();
      elWidth = surfaceSize.width;
      elHeight = surfaceSize.height;
    } else {
      const elementSize = element.getBoundingClientRect();
      elWidth = elementSize.width;
      elHeight = elementSize.height;
    }
    const left = elWidth / 2 - labelEl.offsetWidth / 2;
    const top = elHeight / 2 - labelEl.offsetHeight / 2;
    const labelCalculations = [{
      method: "setStyle",
      el: labelEl,
      attr: "left",
      attrValue: `${left}px`
    }, {
      method: "setStyle",
      el: labelEl,
      attr: "top",
      attrValue: `${top}px`
    }];
    setProgressBarStyles(labelCalculations, this.renderer);
  }
  get currentColor() {
    const currentColor = this.progress.nativeElement.style.stroke;
    return currentColor;
  }
  updateProgressColor(value) {
    const progressArc = this.progress.nativeElement;
    if (typeof this.progressColor === "string") {
      this.renderer.setStyle(progressArc, "stroke", this.progressColor);
    } else {
      for (let i = 0; i < this.progressColor.length; i++) {
        const from = this.progressColor[i].from;
        const to = this.progressColor[i].to;
        if (value >= from && value <= to || !from && value <= to) {
          this.renderer.setStyle(progressArc, "stroke", this.progressColor[i].color);
          break;
        }
        if (!to && value >= from) {
          this.renderer.setStyle(progressArc, "stroke", this.progressColor[i].color);
        }
      }
    }
  }
  handleErrors(type) {
    if (isDevMode()) {
      switch (type) {
        case "value > max":
          throw new Error("The value of the CircularProgressbar cannot exceed the max value");
        case "value < min":
          throw new Error("The value of the CircularProgressbar cannot be lower than the min value");
        case "max < min":
          throw new Error("The min value cannot be higher than the max value");
        default:
      }
    }
  }
  setDirection() {
    this.rtl = this.localization.rtl;
    if (this.element) {
      this.renderer.setAttribute(this.element.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
    if (this.labelElement) {
      this.renderer.setAttribute(this.labelElement.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
  }
  rtlChange() {
    if (this.element && this.rtl !== this.localization.rtl) {
      this.setDirection();
    }
  }
};
CircularProgressBarComponent.ɵfac = function CircularProgressBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CircularProgressBarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
CircularProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: CircularProgressBarComponent,
  selectors: [["kendo-circularprogressbar"]],
  contentQueries: function CircularProgressBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CircularProgressbarCenterTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerTemplate = _t.first);
    }
  },
  viewQuery: function CircularProgressBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progress = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scale = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.surface = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function CircularProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-valuemin", ctx.ariaMinAttribute)("aria-valuemax", ctx.ariaMaxAttribute)("aria-valuenow", ctx.ariaValueAttribute)("role", ctx.roleAttribute);
      ɵɵclassProp("k-circular-progressbar", ctx.hostClasses);
    }
  },
  inputs: {
    value: "value",
    max: "max",
    min: "min",
    animation: "animation",
    opacity: "opacity",
    indeterminate: "indeterminate",
    progressColor: "progressColor"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["kendoCircularProgressBar"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.circularprogressbar"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 13,
  vars: 1,
  consts: () => {
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_2 = goog.getMsg("Circular progressbar");
      i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.circularprogressbar.progressBarLabel|The aria-label attribute for the Circular ProgressBar component.:Circular progressbar`;
    }
    return [["surface", ""], ["svg", ""], ["scale", ""], ["progress", ""], ["label", ""], ["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_2], [1, "k-circular-progressbar-surface"], ["stroke-width", "9.5", 1, "k-circular-progressbar-scale"], ["stroke-width", "9.5", 1, "k-circular-progressbar-arc"], ["class", "k-circular-progressbar-label", 4, "ngIf"], [3, "resize"], [1, "k-circular-progressbar-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]];
  },
  template: function CircularProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementStart(1, "div", 6, 0)(3, "div");
      ɵɵnamespaceSVG();
      ɵɵelementStart(4, "svg", null, 1)(6, "g");
      ɵɵelement(7, "circle", 7, 2)(9, "circle", 8, 3);
      ɵɵelementEnd()();
      ɵɵtemplate(11, CircularProgressBarComponent_div_11_Template, 3, 2, "div", 9);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(12, "kendo-resize-sensor", 10);
      ɵɵlistener("resize", function CircularProgressBarComponent_Template_kendo_resize_sensor_resize_12_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onResize());
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(11);
      ɵɵproperty("ngIf", ctx.centerTemplate);
    }
  },
  dependencies: [LocalizedProgressBarMessagesDirective, NgIf, NgTemplateOutlet, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoCircularProgressBar",
      selector: "kendo-circularprogressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.circularprogressbar.progressBarLabel|The aria-label attribute for the Circular ProgressBar component."
            progressBarLabel="Circular progressbar"
        >
        </ng-container>
        <div #surface class="k-circular-progressbar-surface">
            <div>
                <svg #svg>
                    <g>
                        <circle class="k-circular-progressbar-scale" #scale stroke-width="9.5"></circle>
                        <circle class="k-circular-progressbar-arc" #progress stroke-width="9.5"></circle>
                    </g>
                </svg>
                <div class="k-circular-progressbar-label" *ngIf="centerTemplate" #label>
                    <ng-template [ngTemplateOutlet]="centerTemplate.templateRef" [ngTemplateOutletContext]="centerTemplateContext"></ng-template>
                </div>
            </div>
        </div>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.circularprogressbar"
      }],
      standalone: true,
      imports: [LocalizedProgressBarMessagesDirective, NgIf, NgTemplateOutlet, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-circular-progressbar"]
    }],
    ariaMinAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaMaxAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    ariaValueAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    progressColor: [{
      type: Input
    }],
    animationEnd: [{
      type: Output
    }],
    progress: [{
      type: ViewChild,
      args: ["progress"]
    }],
    scale: [{
      type: ViewChild,
      args: ["scale"]
    }],
    labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    surface: [{
      type: ViewChild,
      args: ["surface"]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: [CircularProgressbarCenterTemplateDirective]
    }]
  });
})();
var ProgressBarCustomMessagesComponent = class extends ProgressBarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
ProgressBarCustomMessagesComponent.ɵfac = function ProgressBarCustomMessagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ProgressBarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
ProgressBarCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarCustomMessagesComponent,
  selectors: [["kendo-progressbar-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ProgressBarMessages,
    useExisting: forwardRef(() => ProgressBarCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ProgressBarCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ProgressBarMessages,
        useExisting: forwardRef(() => ProgressBarCustomMessagesComponent)
      }],
      selector: "kendo-progressbar-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var KENDO_CHUNKPROGRESSBAR = [ChunkProgressBarComponent, ProgressBarCustomMessagesComponent];
var KENDO_CIRCULARPROGRESSBAR = [CircularProgressbarCenterTemplateDirective, CircularProgressBarComponent, ProgressBarCustomMessagesComponent];
var KENDO_PROGRESSBAR = [ProgressBarComponent, ProgressBarCustomMessagesComponent];
var KENDO_PROGRESSBARS = [...KENDO_CHUNKPROGRESSBAR, ...KENDO_CIRCULARPROGRESSBAR, ...KENDO_PROGRESSBAR];
var ProgressBarModule = class {
};
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ProgressBarModule)();
};
ProgressBarModule.ɵmod = ɵɵdefineNgModule({
  type: ProgressBarModule,
  imports: [ChunkProgressBarComponent, ProgressBarCustomMessagesComponent, CircularProgressbarCenterTemplateDirective, CircularProgressBarComponent, ProgressBarCustomMessagesComponent, ProgressBarComponent, ProgressBarCustomMessagesComponent],
  exports: [ChunkProgressBarComponent, ProgressBarCustomMessagesComponent, CircularProgressbarCenterTemplateDirective, CircularProgressBarComponent, ProgressBarCustomMessagesComponent, ProgressBarComponent, ProgressBarCustomMessagesComponent]
});
ProgressBarModule.ɵinj = ɵɵdefineInjector({
  providers: [ResizeBatchService],
  imports: [ChunkProgressBarComponent, ProgressBarCustomMessagesComponent, CircularProgressBarComponent, ProgressBarCustomMessagesComponent, ProgressBarComponent, ProgressBarCustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_PROGRESSBARS],
      imports: [...KENDO_PROGRESSBARS],
      providers: [ResizeBatchService]
    }]
  }], null, null);
})();

export {
  ProgressBarComponent
};
//# sourceMappingURL=chunk-P5XZH7PK.js.map
