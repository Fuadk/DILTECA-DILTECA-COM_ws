import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-GRNNJSKN.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  NgForOf
} from "./chunk-JQMZVAPB.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  Renderer2,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-FZN4S27D.js";
import "./chunk-PC7SNX6C.js";
import "./chunk-XIIBOQQH.js";
import "./chunk-NXOOB3F7.js";
import "./chunk-4MWRP73S.js";

// node_modules/@progress/kendo-angular-indicators/fesm2020/progress-kendo-angular-indicators.mjs
var _c0 = ["*"];
function LoaderComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
}
var BadgeContainerComponent = class {
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.hostClass = true;
    this.rtl = false;
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
};
BadgeContainerComponent.ɵfac = function BadgeContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BadgeContainerComponent)(ɵɵdirectiveInject(LocalizationService));
};
BadgeContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: BadgeContainerComponent,
  selectors: [["kendo-badge-container"]],
  hostVars: 3,
  hostBindings: function BadgeContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-badge-container", ctx.hostClass);
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.badge.component"
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BadgeContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge-container",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-badge-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-indicators",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372353,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var SIZE_CLASSES$1 = {
  "small": "k-badge-sm",
  "medium": "k-badge-md",
  "large": "k-badge-lg"
};
var ROUNDED_CLASSES = {
  "small": "k-rounded-sm",
  "medium": "k-rounded-md",
  "large": "k-rounded-lg",
  "full": "k-rounded-full"
};
var BadgeComponent = class {
  constructor(element, renderer, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.hostClass = true;
    this.size = "medium";
    this.fill = "solid";
    this.themeColor = "primary";
    this.rounded = "medium";
    this.position = "edge";
    this.cutoutBorder = false;
    this.badgeClasses = [];
    this.badgeAlign = {
      vertical: "top",
      horizontal: "end"
    };
    this.rtl = false;
    validatePackage(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  get cutoutBorderClass() {
    return this.cutoutBorder;
  }
  /**
   * Specifies the alignment of the Badge ([see example]({% slug alignandposition_badge %}#toc-alignment)).
   *
   * The possible values are:
   * * `{ vertical: 'top', horizontal: 'end' }`
   * * `{ vertical: 'top', horizontal: 'start' }`
   * * `{ vertical: 'bottom', horizontal: 'start' }`
   * * `{ vertical: 'bottom', horizontal: 'end' }`
   *
   * @default "{ vertical: 'top', horizontal: 'end' }"
   */
  get align() {
    return this.badgeAlign;
  }
  set align(align) {
    this.badgeAlign = Object.assign(this.badgeAlign, align);
  }
  ngAfterViewInit() {
    if (!this.badgeClasses.length) {
      this.setBadgeClasses();
    }
  }
  ngOnChanges() {
    this.setBadgeClasses();
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  alignClass() {
    return `k-${this.badgeAlign.vertical}-${this.badgeAlign.horizontal}`;
  }
  positionClass() {
    return `k-badge-${this.position}`;
  }
  sizeClass() {
    if (this.size !== "none") {
      return SIZE_CLASSES$1[this.size];
    }
    return "";
  }
  roundedClass() {
    if (this.rounded !== "none") {
      return ROUNDED_CLASSES[this.rounded];
    }
    return "";
  }
  themeColorClass() {
    if (this.themeColor !== "none" && this.fill !== "none") {
      return `k-badge-${this.fill}-${this.themeColor}`;
    }
    return "";
  }
  fillClass() {
    if (this.fill !== "none") {
      return `k-badge-${this.fill}`;
    }
    return "";
  }
  setBadgeClasses() {
    const element = this.element.nativeElement;
    this.badgeClasses.forEach((className) => {
      this.renderer.removeClass(element, className);
    });
    this.badgeClasses = [this.themeColorClass(), this.fillClass(), this.sizeClass(), this.roundedClass(), this.alignClass(), this.positionClass()];
    this.badgeClasses.forEach((className) => {
      if (className) {
        this.renderer.addClass(element, className);
      }
    });
  }
};
BadgeComponent.ɵfac = function BadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BadgeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
BadgeComponent.ɵcmp = ɵɵdefineComponent({
  type: BadgeComponent,
  selectors: [["kendo-badge"]],
  hostVars: 5,
  hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-badge", ctx.hostClass)("k-badge-border-cutout", ctx.cutoutBorderClass);
    }
  },
  inputs: {
    align: "align",
    size: "size",
    fill: "fill",
    themeColor: "themeColor",
    rounded: "rounded",
    position: "position",
    cutoutBorder: "cutoutBorder"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.badge.component"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
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
    hostClass: [{
      type: HostBinding,
      args: ["class.k-badge"]
    }],
    cutoutBorderClass: [{
      type: HostBinding,
      args: ["class.k-badge-border-cutout"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    align: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    cutoutBorder: [{
      type: Input
    }]
  });
})();
var SIZE_CLASSES = {
  "small": "k-loader-sm",
  "medium": "k-loader-md",
  "large": "k-loader-lg"
};
var SEGMENT_COUNT = {
  "pulsing": 2,
  "infinite-spinner": 3,
  "converging-spinner": 4
};
var TYPE_CLASSES = {
  "pulsing": "k-loader-pulsing-2",
  "infinite-spinner": "k-loader-spinner-3",
  "converging-spinner": "k-loader-spinner-4"
};
var LoaderComponent = class {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this._type = "pulsing";
    this._themeColor = "primary";
    this._size = "medium";
    this.loader = this.element.nativeElement;
    validatePackage(packageMetadata);
  }
  /**
   * Specifies the Loader animation type.
   *
   * The possible values are:
   * - `pulsing` (default)
   * - `infinite-spinner`
   * - `converging-spinner`
   */
  set type(type) {
    this.renderer.removeClass(this.loader, TYPE_CLASSES[this.type]);
    this.renderer.addClass(this.loader, TYPE_CLASSES[type]);
    this._type = type;
  }
  get type() {
    return this._type;
  }
  /**
   * Specifies the theme color of the Loader.
   *
   * The possible values are:
   * * `primary` (Default)&mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverted theme color.
   *
   */
  set themeColor(themeColor) {
    this.renderer.removeClass(this.loader, `k-loader-${this.themeColor}`);
    this.renderer.addClass(this.loader, `k-loader-${themeColor}`);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Loader.
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   *
   */
  set size(size) {
    this.renderer.removeClass(this.loader, SIZE_CLASSES[this.size]);
    this.renderer.addClass(this.loader, SIZE_CLASSES[size]);
    this._size = size;
  }
  get size() {
    return this._size;
  }
  ngAfterViewInit() {
    this.setLoaderClasses();
  }
  /**
   * @hidden
   */
  get segmentCount() {
    return new Array(SEGMENT_COUNT[this.type]);
  }
  setLoaderClasses() {
    this.renderer.addClass(this.loader, TYPE_CLASSES[this.type]);
    this.renderer.addClass(this.loader, `k-loader-${this.themeColor}`);
    this.renderer.addClass(this.loader, SIZE_CLASSES[this.size]);
  }
};
LoaderComponent.ɵfac = function LoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoaderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
LoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: LoaderComponent,
  selectors: [["kendo-loader"]],
  hostVars: 2,
  hostBindings: function LoaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-loader", ctx.hostClass);
    }
  },
  inputs: {
    type: "type",
    themeColor: "themeColor",
    size: "size"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "k-loader-canvas"], ["class", "k-loader-segment", 4, "ngFor", "ngForOf"], [1, "k-loader-segment"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, LoaderComponent_span_1_Template, 1, 0, "span", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.segmentCount);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-loader",
      template: `
        <div class="k-loader-canvas">
            <span *ngFor="let segment of segmentCount" class="k-loader-segment"></span>
        </div>
    `,
      standalone: true,
      imports: [NgForOf]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-loader"]
    }],
    type: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var validAnimations = [false, "pulse", "wave"];
var validShapes = ["circle", "rectangle", "text"];
var ANIMATION_CLASSES = {
  pulse: "k-skeleton-pulse",
  wave: "k-skeleton-wave"
};
var SHAPE_CLASSES = {
  rectangle: "k-skeleton-rect",
  circle: "k-skeleton-circle",
  text: "k-skeleton-text"
};
var skeletonShapeError = (input) => `"${input}" is not a valid kendo-skeleton shape. Valid shapes are: ${validShapes.map((s) => `"${s}"`).join(" | ")}.`;
var skeletonAnimationError = (input) => `"${input}" is not a valid kendo-skeleton animation. Valid values are: 'pulse' | 'wave' | false.`;
var SkeletonComponent = class {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this._animation = "pulse";
    this._shape = "text";
  }
  /**
   * Specifies the animation settings of the Skeleton.
   *
   * The possible values are:
   * * `pulse` &mdash; (Default) Shows a pulse animation effect.
   * * `wave` &mdash; Shows a wave animation effect.
   * * `false` &mdash; Disables the animation. Note that it's a boolean, not a string.
   */
  set animation(animation) {
    if (isDevMode() && validAnimations.indexOf(animation) === -1) {
      throw new Error(skeletonAnimationError(animation));
    }
    if (this.animation) {
      this.renderer.removeClass(this.hostElement.nativeElement, ANIMATION_CLASSES[this.animation]);
    }
    if (animation) {
      this.renderer.addClass(this.hostElement.nativeElement, ANIMATION_CLASSES[animation]);
    }
    this._animation = animation;
  }
  get animation() {
    return this._animation;
  }
  /**
   * Specifies the shape of the Skeleton.
   *
   * The possible values are:
   * * `text` &mdash; (Default) Renders a line Skeleton.
   * * `circle` &mdash; Renders a circular Skeleton.
   * * `rectangle` &mdash; Renders a rectangular Skeleton.
   */
  set shape(shape) {
    if (isDevMode() && validShapes.indexOf(shape) === -1) {
      throw new Error(skeletonShapeError(shape));
    }
    this.renderer.removeClass(this.hostElement.nativeElement, SHAPE_CLASSES[this.shape]);
    this.renderer.addClass(this.hostElement.nativeElement, SHAPE_CLASSES[shape]);
    this._shape = shape;
  }
  get shape() {
    return this._shape;
  }
  /**
   * Specifies the width of the Skeleton component.
   * * Required for all Skeleton shapes.
   * * Can be set to a string, e.g. '100px', '3em', '50%'.
   * * Can be set to an integer number (will be read as width in pixels).
   */
  set width(width) {
    this.renderer.setStyle(this.hostElement.nativeElement, "width", typeof width === "string" ? width : width + "px");
  }
  /**
   * Specifies the height of the Skeleton component.
   * * Required for 'circle' and 'rectangle' shapes.
   * * Not required for 'text', as it is derived from the current CSS font-size.
   * * Can be set to a string, e.g. '100px', '3em', '50%'.
   * * Can be set to an integer number (will be read as height in pixels).
   */
  set height(height) {
    this.renderer.setStyle(this.hostElement.nativeElement, "height", typeof height === "string" ? height : height + "px");
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    hostElement.classList.add("k-skeleton", SHAPE_CLASSES[this.shape]);
    if (this.animation) {
      hostElement.classList.add(ANIMATION_CLASSES[this.animation]);
    }
  }
};
SkeletonComponent.ɵfac = function SkeletonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SkeletonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
SkeletonComponent.ɵcmp = ɵɵdefineComponent({
  type: SkeletonComponent,
  selectors: [["kendo-skeleton"]],
  inputs: {
    animation: "animation",
    shape: "shape",
    width: "width",
    height: "height"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SkeletonComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-skeleton",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    animation: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var KENDO_BADGE = [BadgeComponent];
var KENDO_BADGECONTAINER = [BadgeComponent, BadgeContainerComponent];
var KENDO_LOADER = [LoaderComponent];
var KENDO_SKELETON = [SkeletonComponent];
var KENDO_INDICATORS = [...KENDO_BADGECONTAINER, ...KENDO_LOADER, ...KENDO_SKELETON];
var BadgeModule = class {
};
BadgeModule.ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BadgeModule)();
};
BadgeModule.ɵmod = ɵɵdefineNgModule({
  type: BadgeModule,
  imports: [BadgeComponent, BadgeContainerComponent],
  exports: [BadgeComponent, BadgeContainerComponent]
});
BadgeModule.ɵinj = ɵɵdefineInjector({
  imports: [KENDO_BADGECONTAINER]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BADGECONTAINER],
      imports: [...KENDO_BADGECONTAINER]
    }]
  }], null, null);
})();
var LoaderModule = class {
};
LoaderModule.ɵfac = function LoaderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoaderModule)();
};
LoaderModule.ɵmod = ɵɵdefineNgModule({
  type: LoaderModule,
  imports: [LoaderComponent],
  exports: [LoaderComponent]
});
LoaderModule.ɵinj = ɵɵdefineInjector({
  imports: [KENDO_LOADER]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_LOADER],
      imports: [...KENDO_LOADER]
    }]
  }], null, null);
})();
var SkeletonModule = class {
};
SkeletonModule.ɵfac = function SkeletonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SkeletonModule)();
};
SkeletonModule.ɵmod = ɵɵdefineNgModule({
  type: SkeletonModule,
  imports: [SkeletonComponent],
  exports: [SkeletonComponent]
});
SkeletonModule.ɵinj = ɵɵdefineInjector({
  imports: [KENDO_SKELETON]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SKELETON],
      imports: [...KENDO_SKELETON]
    }]
  }], null, null);
})();
var IndicatorsModule = class {
};
IndicatorsModule.ɵfac = function IndicatorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IndicatorsModule)();
};
IndicatorsModule.ɵmod = ɵɵdefineNgModule({
  type: IndicatorsModule,
  imports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent],
  exports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent]
});
IndicatorsModule.ɵinj = ɵɵdefineInjector({
  imports: [KENDO_INDICATORS]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndicatorsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_INDICATORS],
      exports: [...KENDO_INDICATORS]
    }]
  }], null, null);
})();
export {
  BadgeComponent,
  BadgeContainerComponent,
  BadgeModule,
  IndicatorsModule,
  KENDO_BADGE,
  KENDO_BADGECONTAINER,
  KENDO_INDICATORS,
  KENDO_LOADER,
  KENDO_SKELETON,
  LoaderComponent,
  LoaderModule,
  SkeletonComponent,
  SkeletonModule
};
//# sourceMappingURL=@progress_kendo-angular-indicators.js.map
