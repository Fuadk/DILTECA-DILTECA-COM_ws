import {
  ButtonComponent,
  ButtonGroupComponent,
  DropDownButtonComponent,
  SplitButtonComponent
} from "./chunk-EZZZ6A5H.js";
import {
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  caretAltDownIcon,
  moreVerticalIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  Keys,
  ResizeBatchService,
  ResizeSensorComponent,
  guid,
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
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  forwardRef,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  fromEvent,
  merge
} from "./chunk-PC7SNX6C.js";
import {
  Subject,
  Subscription,
  filter,
  take,
  takeUntil
} from "./chunk-NXOOB3F7.js";

// node_modules/@progress/kendo-angular-toolbar/fesm2020/progress-kendo-angular-toolbar.mjs
var _c0 = ["overflowButton"];
var _c1 = ["popupTemplate"];
var _c2 = ["resizeSensor"];
var _c3 = ["container"];
function ToolBarComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementContainer(1, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tool_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tool_r3.toolbarTemplate);
  }
}
function ToolBarComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 10);
    ɵɵlistener("rendererClick", function ToolBarComponent_ng_container_1_Template_ng_container_rendererClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRendererClick($event));
    });
    ɵɵtemplate(1, ToolBarComponent_ng_container_1_ng_template_1_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tool_r3 = ctx.$implicit;
    const wrapper_r4 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tool", tool_r3)("resizable", ctx_r1.overflow)("ngTemplateOutlet", tool_r3.isBuiltInTool ? tool_r3.toolbarTemplate : wrapper_r4);
  }
}
function ToolBarComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13, 3);
    ɵɵlistener("click", function ToolBarComponent_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.showPopup());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", "hidden")("position", "relative")("margin-inline-start", "auto");
    ɵɵproperty("svgIcon", ctx_r1.moreVerticalIcon)("title", ctx_r1.moreToolsTitle)("id", ctx_r1.overflowBtnId)("ngClass", ctx_r1.overflowClass);
    ɵɵattribute("aria-label", ctx_r1.moreToolsTitle)("aria-expanded", ctx_r1.popupOpen);
  }
}
function ToolBarComponent_ng_template_3_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function ToolBarComponent_ng_template_3_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ToolBarComponent_ng_template_3_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 16);
    ɵɵlistener("rendererClick", function ToolBarComponent_ng_template_3_ng_container_1_1_Template_ng_template_rendererClick_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onRendererClick($event));
    });
  }
  if (rf & 2) {
    const tool_r7 = ɵɵnextContext().$implicit;
    const popupWrapper_r8 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("tool", tool_r7)("resizable", ctx_r1.overflow)("ngTemplateOutlet", tool_r7.isBuiltInTool ? tool_r7.popupTemplate : popupWrapper_r8);
  }
}
function ToolBarComponent_ng_template_3_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelementContainer(1, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tool_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tool_r7.popupTemplate);
  }
}
function ToolBarComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ToolBarComponent_ng_template_3_ng_container_1_1_Template, 1, 3, null, 9)(2, ToolBarComponent_ng_template_3_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tool_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", tool_r7.popupTemplate);
  }
}
function ToolBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, ToolBarComponent_ng_template_3_ng_container_1_Template, 4, 1, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.popupId);
    ɵɵattribute("aria-labelledby", ctx_r1.overflowBtnId);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.overflowTools);
  }
}
function ToolBarComponent_kendo_resize_sensor_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-resize-sensor", null, 5);
  }
}
var _c4 = ["toolbarTemplate"];
var _c5 = ["toolbarButton"];
function ToolBarButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4, 2);
    ɵɵlistener("click", function ToolBarButtonComponent_ng_template_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.click.emit($event));
    })("pointerdown", function ToolBarButtonComponent_ng_template_0_Template_button_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pointerdown.emit($event));
    })("selectedChange", function ToolBarButtonComponent_ng_template_0_Template_button_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectedChangeHandler($event));
    })("blur", function ToolBarButtonComponent_ng_template_0_Template_button_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBlur());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.toolbarButtonClass);
    ɵɵproperty("tabindex", ctx_r1.tabIndex)("ngStyle", ctx_r1.style)("ngClass", ctx_r1.className)("disabled", ctx_r1.disabled)("toggleable", ctx_r1.toggleable)("fillMode", ctx_r1.fillMode)("themeColor", ctx_r1.fillMode ? ctx_r1.themeColor : null)("selected", ctx_r1.selected)("icon", ctx_r1.toolbarOptions.icon)("iconClass", ctx_r1.toolbarOptions.iconClass)("svgIcon", ctx_r1.toolbarOptions.svgIcon)("imageUrl", ctx_r1.toolbarOptions.imageUrl);
    ɵɵattribute("title", ctx_r1.title);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.toolbarOptions.text, " ");
  }
}
function ToolBarButtonComponent_ng_template_2_kendo_icon_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.overflowOptions.icon)("customFontClass", ctx_r1.overflowOptions.iconClass)("svgIcon", ctx_r1.overflowOptions.svgIcon);
  }
}
function ToolBarButtonComponent_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.overflowOptions.text);
  }
}
function ToolBarButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5, 3);
    ɵɵlistener("click", function ToolBarButtonComponent_ng_template_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClick($event));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtemplate(3, ToolBarButtonComponent_ng_template_2_kendo_icon_wrapper_3_Template, 1, 3, "kendo-icon-wrapper", 7)(4, ToolBarButtonComponent_ng_template_2_span_4_Template, 2, 1, "span", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", ctx_r1.disabled);
    ɵɵproperty("ngClass", ctx_r1.className)("ngStyle", ctx_r1.style);
    ɵɵadvance(2);
    ɵɵclassProp("k-selected", ctx_r1.selected);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.icon || ctx_r1.overflowOptions.iconClass || ctx_r1.overflowOptions.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.text);
  }
}
var _c6 = ["toolbarButtonGroup"];
var _c7 = ["listItem"];
function ToolBarButtonGroupComponent_ng_template_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function ToolBarButtonGroupComponent_ng_template_0_button_2_Template_button_click_0_listener($event) {
      const button_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      button_r4.click.emit($event);
      return ɵɵresetView(ctx_r1.onButtonClick($event));
    })("pointerdown", function ToolBarButtonGroupComponent_ng_template_0_button_2_Template_button_pointerdown_0_listener($event) {
      const button_r4 = ɵɵrestoreView(_r3).$implicit;
      return ɵɵresetView(button_r4.pointerdown.emit($event));
    })("selectedChange", function ToolBarButtonGroupComponent_ng_template_0_button_2_Template_button_selectedChange_0_listener($event) {
      const button_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectedChangeHandler($event, button_r4));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r4 = ctx.$implicit;
    ɵɵproperty("ngStyle", button_r4.style)("ngClass", button_r4.className)("disabled", button_r4.disabled)("togglable", button_r4.togglable)("selected", button_r4.selected)("fillMode", button_r4.fillMode)("themeColor", button_r4.fillMode ? button_r4.themeColor : null)("icon", button_r4.toolbarOptions.icon)("iconClass", button_r4.toolbarOptions.iconClass)("svgIcon", button_r4.toolbarOptions.svgIcon)("imageUrl", button_r4.toolbarOptions.imageUrl);
    ɵɵattribute("title", button_r4.title)("aria-pressed", button_r4.selected ? true : false);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", button_r4.toolbarOptions.text, " ");
  }
}
function ToolBarButtonGroupComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-buttongroup", 4, 2);
    ɵɵlistener("navigate", function ToolBarButtonGroupComponent_ng_template_0_Template_kendo_buttongroup_navigate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigate($event));
    })("focus", function ToolBarButtonGroupComponent_ng_template_0_Template_kendo_buttongroup_focus_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFocus());
    });
    ɵɵtemplate(2, ToolBarButtonGroupComponent_ng_template_0_button_2_Template, 2, 14, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabIndex", -1)("selection", ctx_r1.selection)("disabled", ctx_r1.disabled)("width", ctx_r1.width);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.buttonComponents);
  }
}
function ToolBarButtonGroupComponent_ng_template_2_div_0_kendo_icon_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 12);
  }
  if (rf & 2) {
    const button_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("name", button_r6.overflowOptions.icon)("customFontClass", button_r6.overflowOptions.iconClass)("svgIcon", button_r6.overflowOptions.svgIcon);
  }
}
function ToolBarButtonGroupComponent_ng_template_2_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(button_r6.overflowOptions.text);
  }
}
function ToolBarButtonGroupComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 3);
    ɵɵlistener("click", function ToolBarButtonGroupComponent_ng_template_2_div_0_Template_div_click_0_listener($event) {
      const button_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleClick($event, button_r6));
    });
    ɵɵelementStart(2, "span", 9);
    ɵɵtemplate(3, ToolBarButtonGroupComponent_ng_template_2_div_0_kendo_icon_wrapper_3_Template, 1, 3, "kendo-icon-wrapper", 10)(4, ToolBarButtonGroupComponent_ng_template_2_div_0_span_4_Template, 2, 1, "span", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("k-disabled", ctx_r1.disabled || button_r6.disabled);
    ɵɵproperty("ngStyle", button_r6.style)("ngClass", button_r6.className);
    ɵɵadvance(2);
    ɵɵclassProp("k-selected", button_r6.selected);
    ɵɵadvance();
    ɵɵproperty("ngIf", button_r6.overflowOptions.icon || button_r6.overflowOptions.iconClass || button_r6.overflowOptions.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", button_r6.overflowOptions.text);
  }
}
function ToolBarButtonGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToolBarButtonGroupComponent_ng_template_2_div_0_Template, 5, 8, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.buttonComponents);
  }
}
var _c8 = ["dropdownButton"];
var _c9 = ["toolbarDropDownButton"];
var _c10 = (a0) => ({
  "title": a0
});
var _c11 = () => ({
  "k-link": true,
  "k-menu-link": true
});
function ToolBarDropDownButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-dropdownbutton", 4, 2);
    ɵɵlistener("open", function ToolBarDropDownButtonComponent_ng_template_0_Template_kendo_dropdownbutton_open_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.open.emit($event));
    })("close", function ToolBarDropDownButtonComponent_ng_template_0_Template_kendo_dropdownbutton_close_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close.emit($event));
    })("itemClick", function ToolBarDropDownButtonComponent_ng_template_0_Template_kendo_dropdownbutton_itemClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.itemClick.emit($event));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.toolbarOptions.icon)("iconClass", ctx_r1.toolbarOptions.iconClass)("svgIcon", ctx_r1.toolbarOptions.svgIcon)("imageUrl", ctx_r1.toolbarOptions.imageUrl)("arrowIcon", ctx_r1.arrowIcon)("buttonClass", ctx_r1.buttonClass)("disabled", ctx_r1.disabled)("tabIndex", -1)("data", ctx_r1.data)("buttonAttributes", ɵɵpureFunction1(15, _c10, ctx_r1.title))("textField", ctx_r1.textField)("popupSettings", ctx_r1.popupSettings)("fillMode", ctx_r1.fillMode)("themeColor", ctx_r1.fillMode ? ctx_r1.themeColor : null);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.toolbarOptions.text, " ");
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.overflowOptions.icon)("customFontClass", ctx_r1.overflowOptions.iconClass)("svgIcon", ctx_r1.overflowOptions.svgIcon);
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.overflowOptions.text);
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_kendo_icon_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 10);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("name", item_r5.icon)("customFontClass", item_r5.iconClass)("svgIcon", item_r5.svgIcon);
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getText(item_r5));
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12, 3);
    ɵɵlistener("click", function ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_Template_div_click_1_listener($event) {
      const ctx_r3 = ɵɵrestoreView(_r3);
      const item_r5 = ctx_r3.$implicit;
      const i_r6 = ctx_r3.index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleClick($event, item_r5, i_r6));
    });
    ɵɵelementStart(3, "span", 13);
    ɵɵtemplate(4, ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_kendo_icon_wrapper_4_Template, 1, 3, "kendo-icon-wrapper", 7)(5, ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_span_5_Template, 2, 1, "span", 8);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassProp("k-disabled", ctx_r1.disabled || item_r5.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", item_r5.cssClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.icon || item_r5.iconClass || item_r5.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getText(item_r5));
  }
}
function ToolBarDropDownButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 6);
    ɵɵtemplate(2, ToolBarDropDownButtonComponent_ng_template_2_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 7)(3, ToolBarDropDownButtonComponent_ng_template_2_span_3_Template, 2, 1, "span", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(4, ToolBarDropDownButtonComponent_ng_template_2_ng_container_4_Template, 6, 5, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.buttonClass);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction0(5, _c11));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.icon || ctx_r1.overflowOptions.iconClass || ctx_r1.overflowOptions.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.text);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.data);
  }
}
var _c12 = ["toolbarSplitButton"];
var _c13 = ["overflowMainButton"];
function ToolBarSplitButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-splitbutton", 5, 2);
    ɵɵlistener("buttonClick", function ToolBarSplitButtonComponent_ng_template_0_Template_kendo_splitbutton_buttonClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.buttonClick.emit($event));
    })("open", function ToolBarSplitButtonComponent_ng_template_0_Template_kendo_splitbutton_open_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.open.emit($event));
    })("close", function ToolBarSplitButtonComponent_ng_template_0_Template_kendo_splitbutton_close_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close.emit($event));
    })("itemClick", function ToolBarSplitButtonComponent_ng_template_0_Template_kendo_splitbutton_itemClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.itemClick.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("data", ctx_r1.data)("text", ctx_r1.toolbarOptions.text)("icon", ctx_r1.toolbarOptions.icon)("iconClass", ctx_r1.toolbarOptions.iconClass)("svgIcon", ctx_r1.toolbarOptions.svgIcon)("imageUrl", ctx_r1.toolbarOptions.imageUrl)("buttonClass", ctx_r1.buttonClass)("arrowButtonClass", ctx_r1.arrowButtonClass)("arrowButtonIcon", ctx_r1.arrowButtonIcon)("arrowButtonSvgIcon", ctx_r1.arrowButtonSvgIcon)("disabled", ctx_r1.disabled)("tabIndex", -1)("textField", ctx_r1.textField)("popupSettings", ctx_r1.popupSettings)("fillMode", ctx_r1.fillMode)("themeColor", ctx_r1.fillMode ? ctx_r1.themeColor : null);
  }
}
function ToolBarSplitButtonComponent_ng_template_2_kendo_icon_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.overflowOptions.icon)("customFontClass", ctx_r1.overflowOptions.iconClass)("svgIcon", ctx_r1.overflowOptions.svgIcon);
  }
}
function ToolBarSplitButtonComponent_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.overflowOptions.text);
  }
}
function ToolBarSplitButtonComponent_ng_template_2_ng_container_5_kendo_icon_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 11);
  }
  if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("name", item_r6.icon)("customFontClass", item_r6.iconClass)("svgIcon", item_r6.svgIcon);
  }
}
function ToolBarSplitButtonComponent_ng_template_2_ng_container_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getText(item_r6));
  }
}
function ToolBarSplitButtonComponent_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13, 4);
    ɵɵlistener("click", function ToolBarSplitButtonComponent_ng_template_2_ng_container_5_Template_div_click_1_listener($event) {
      const ctx_r4 = ɵɵrestoreView(_r4);
      const item_r6 = ctx_r4.$implicit;
      const i_r7 = ctx_r4.index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleClick($event, item_r6, i_r7));
    });
    ɵɵelementStart(3, "span", 14);
    ɵɵtemplate(4, ToolBarSplitButtonComponent_ng_template_2_ng_container_5_kendo_icon_wrapper_4_Template, 1, 3, "kendo-icon-wrapper", 8)(5, ToolBarSplitButtonComponent_ng_template_2_ng_container_5_span_5_Template, 2, 1, "span", 9);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassProp("k-disabled", ctx_r1.disabled || item_r6.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r6.icon || item_r6.iconClass || item_r6.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getText(item_r6));
  }
}
function ToolBarSplitButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6, 3);
    ɵɵlistener("click", function ToolBarSplitButtonComponent_ng_template_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMainButtonClick($event));
    });
    ɵɵelementStart(2, "span", 7);
    ɵɵtemplate(3, ToolBarSplitButtonComponent_ng_template_2_kendo_icon_wrapper_3_Template, 1, 3, "kendo-icon-wrapper", 8)(4, ToolBarSplitButtonComponent_ng_template_2_span_4_Template, 2, 1, "span", 9);
    ɵɵelementEnd()();
    ɵɵtemplate(5, ToolBarSplitButtonComponent_ng_template_2_ng_container_5_Template, 6, 4, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", ctx_r1.disabled);
    ɵɵproperty("ngClass", ctx_r1.buttonClass);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction0(7, _c11));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.icon || ctx_r1.overflowOptions.iconClass || ctx_r1.overflowOptions.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.overflowOptions.text);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.data);
  }
}
var _c14 = ["separator"];
function ToolBarSeparatorComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
}
function ToolBarSeparatorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
}
function ToolBarSpacerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-toolbar",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372253,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var RefreshService = class {
  constructor() {
    this.onRefresh = new EventEmitter();
  }
  refresh(tool) {
    this.onRefresh.emit(tool);
  }
};
RefreshService.ɵfac = function RefreshService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RefreshService)();
};
RefreshService.ɵprov = ɵɵdefineInjectable({
  token: RefreshService,
  factory: RefreshService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshService, [{
    type: Injectable
  }], null, null);
})();
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
function outerWidth(element) {
  let width = element.offsetWidth;
  const style = getComputedStyle(element);
  width += parseFloat(style.marginLeft) || 0 + parseFloat(style.marginRight) || 0;
  return width;
}
function innerWidth(element) {
  let width = element.offsetWidth;
  const style = getComputedStyle(element);
  width -= parseFloat(style.paddingLeft) || 0 + parseFloat(style.borderLeftWidth) || 0;
  width -= parseFloat(style.paddingRight) || 0 + parseFloat(style.borderRightWidth) || 0;
  return width;
}
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const hasSize = rect.width > 0 && rect.height > 0;
  const hasPosition = rect.x !== 0 && rect.y !== 0;
  return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== "hidden";
};
var findElement = (node, predicate, matchSelf = true) => {
  if (!node) {
    return;
  }
  if (matchSelf && predicate(node)) {
    return node;
  }
  node = node.firstChild;
  while (node) {
    if (node.nodeType === 1) {
      const element = findElement(node, predicate);
      if (element) {
        return element;
      }
    }
    node = node.nextSibling;
  }
};
var isFocusable = (element, checkVisibility = true) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    let focusable = tabIndex !== null;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled;
    }
    return focusable && (!checkVisibility || isVisible(element));
  }
  return false;
};
var findFocusable = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusable(node, checkVisibility));
};
var findFocusableChild = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusable(node, checkVisibility), false);
};
var findFocusableSibling = (element, checkVisibility = true, reverse) => {
  let node = reverse ? element.prevSibling : element.nextSibling;
  while (node) {
    if (node.nodeType === 1) {
      const result = findElement(node, (el) => isFocusable(el, checkVisibility));
      if (result) {
        return result;
      }
    }
    node = reverse ? node.prevSibling : node.nextSibling;
  }
};
var isPresent = (value) => value !== null && value !== void 0;
var makePeeker = (collection) => (index) => isPresent(collection[index]);
var getIndexOfFocused = (prevKeyCode, nextKeyCode, collection) => (ev) => {
  switch (ev.type) {
    case "keydown":
      if (ev.keyCode === prevKeyCode) {
        return collection.length - 1;
      }
      if (ev.keyCode === nextKeyCode) {
        return 0;
      }
      break;
    case "click":
      return collection.findIndex((be) => be === ev.target || be.contains(ev.target));
    case "focus":
      return 0;
    default:
      return 0;
  }
};
var seekFocusedIndex = (prevKeyCode, nextKeyCode, seeker) => (startIndex, ev) => {
  switch (ev.keyCode) {
    case prevKeyCode:
      return seeker(startIndex - 1) ? startIndex - 1 : startIndex;
    case nextKeyCode:
      return seeker(startIndex + 1) ? startIndex + 1 : startIndex;
    default:
      return startIndex;
  }
};
var areEqual = (first) => (second) => first === second;
var getNextKey = (rtl = false) => (overflows = true) => overflows ? Keys.ArrowDown : rtl ? Keys.ArrowLeft : Keys.ArrowRight;
var getPrevKey = (rtl = false) => (overflows = true) => overflows ? Keys.ArrowUp : rtl ? Keys.ArrowRight : Keys.ArrowLeft;
var getValueForLocation = (property, displayMode, overflows) => {
  switch (displayMode) {
    case "toolbar":
      return overflows ? void 0 : property;
    case "overflow":
      return overflows ? property : void 0;
    default:
      return property;
  }
};
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
var isElementOrTextNode = (n) => n.nodeType === 1 || n.nodeType === 3;
var NavigationService = class {
  constructor(zone) {
    this.zone = zone;
    this.focused = {
      renderedTool: null,
      index: -1
    };
    this.renderedTools = [];
    this.isPopupFocused = false;
    this.isOverflowButtonFocused = false;
  }
  setRenderedTools(rts) {
    this.renderedTools = rts;
  }
  click({
    context,
    event: ev
  }) {
    if (this.focused.renderedTool !== context && ev) {
      this.focus(context, ev);
    }
  }
  moveFocusToToolBar() {
    this.isPopupFocused = false;
    this.focusOverflowButton();
  }
  moveFocusToPopup() {
    this.isPopupFocused = true;
    this.resetNavigation();
    this.focus();
  }
  focusNext(ev) {
    if (this.isOverflowButtonFocused) {
      const firstFocusableRT = this.getFocusableTools()[0];
      this.focus(firstFocusableRT, ev);
    } else if (!this.isOverflowButtonFocused && this.focused.renderedTool && !this.focused.renderedTool.tool.handleKey(ev)) {
      const nextRT = this.getFocusableTools().slice(this.focused.index + 1)[0];
      if (nextRT) {
        this.focus(nextRT, ev);
      } else {
        if (this.isOverflowButtonVisible() && !this.isPopupFocused) {
          this.focusOverflowButton();
        } else {
          const firstRT = this.getFocusableTools()[0];
          this.focus(firstRT, ev);
        }
      }
    }
  }
  focusPrev(ev) {
    if (this.isOverflowButtonFocused) {
      const lastFocusableRT = this.getFocusableTools().reverse()[0];
      this.focus(lastFocusableRT, ev);
    } else if (!this.isOverflowButtonFocused && this.focused.renderedTool && !this.focused.renderedTool.tool.handleKey(ev)) {
      const prevRT = this.getFocusableTools().slice(0, this.focused.index).reverse()[0];
      if (prevRT) {
        this.focus(prevRT, ev);
      } else {
        if (this.isOverflowButtonVisible() && !this.isPopupFocused) {
          this.focusOverflowButton();
        } else {
          const lastRT = this.getFocusableTools().reverse()[0];
          this.focus(lastRT, ev);
        }
      }
    }
  }
  resetNavigation() {
    this.blurOverflowButton();
    this.focused.renderedTool = null;
    this.focused.index = -1;
  }
  focusFirst(ev) {
    const firstTool = this.getFocusableTools()[0];
    const overFlowButton = this.overflowButton;
    if (firstTool) {
      this.focused.renderedTool = firstTool;
      this.focused.index = this.getFocusableTools().findIndex((rt) => rt === firstTool);
      this.focus(firstTool, ev);
    } else if (overFlowButton) {
      overFlowButton.nativeElement.focus();
    }
  }
  focusLast(ev) {
    const lastTool = this.getFocusableTools().reverse()[0];
    const overFlowButton = this.overflowButton;
    if (lastTool) {
      this.focused.renderedTool = lastTool;
      this.focused.index = this.getFocusableTools().findIndex((rt) => rt === lastTool);
      this.focus(lastTool, ev);
    } else if (overFlowButton) {
      overFlowButton.nativeElement.focus();
    }
  }
  getFocusableTools() {
    return this.renderedTools.filter((rt) => rt.tool.overflows === this.isPopupFocused && rt.tool.canFocus());
  }
  focus(renderedTool, ev) {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      if (!renderedTool) {
        const focusableRTs = this.getFocusableTools();
        const lastFocusedRT = focusableRTs.find((rt) => rt === this.focused.renderedTool) || focusableRTs[0];
        if (lastFocusedRT) {
          this.focused.renderedTool = lastFocusedRT;
          this.focused.index = this.getFocusableTools().findIndex((rt) => rt === lastFocusedRT);
          lastFocusedRT.tool.focus(ev);
        }
      } else if (renderedTool.tool.canFocus && renderedTool.tool.canFocus()) {
        this.focused.renderedTool = renderedTool;
        this.focused.index = this.getFocusableTools().findIndex((rt) => rt === renderedTool);
        renderedTool.tool.focus(ev);
        this.blurOverflowButton();
      }
    });
  }
  blurOverflowButton() {
    if (this.overflowButton) {
      this.isOverflowButtonFocused = false;
      this.overflowButton.nativeElement.tabIndex = -1;
    }
  }
  focusOverflowButton() {
    this.isOverflowButtonFocused = true;
    this.overflowButton.nativeElement.tabIndex = 0;
    this.overflowButton.nativeElement.focus();
  }
  isOverflowButtonVisible() {
    return isPresent(this.overflowButton) && window.getComputedStyle(this.overflowButton.nativeElement).getPropertyValue("visibility") === "visible";
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(NgZone));
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
      type: NgZone
    }];
  }, null);
})();
var ToolBarToolComponent = class {
  constructor() {
    this.tabIndex = -1;
    this.overflows = true;
    this.isBuiltInTool = false;
    this.responsive = true;
    this.element = inject(ElementRef);
  }
  get toolbarDisplay() {
    return this.overflows ? "none" : "inline-flex";
  }
  get overflowDisplay() {
    return this.overflows ? "block" : "none";
  }
  /**
   * Determines if the tool can be focused.
   * If the returned value is `false`, the tool will not be part of the keyboard navigation.
   * @returns `true` if the tool should take part in keyboard navigation.
   */
  canFocus() {
    return false;
  }
  /**
   * Called when the tool is focused.
   * The method accepts as argument the original browser event, which can be a `KeyboardEvent`, `MouseEvent` or `FocusEvent`.
   * @param {Event} ev - This is the event that caused the tool to be focused.
   */
  focus(ev) {
  }
  /**
   * Called when the tool is focused and one of the arrow keys is pressed.
   * The returned boolean value determines whether the `ToolBarComponent` will move the focus to the next/previous `ToolBarToolComponent`
   * ([see example]({% slug customcontroltypes_toolbar %}#toc-adding-keyboard-navigation)).
   * @param {KeyboardEvent} ev - The last pressed arrow key
   * @returns a boolean value determines whether the focus will move to the next/previous component.
   */
  handleKey(ev) {
    return false;
  }
};
ToolBarToolComponent.ɵfac = function ToolBarToolComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarToolComponent)();
};
ToolBarToolComponent.ɵdir = ɵɵdefineDirective({
  type: ToolBarToolComponent,
  inputs: {
    responsive: "responsive"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarToolComponent, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    responsive: [{
      type: Input
    }]
  });
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
var RendererService = class {
  getElement() {
    return this.element.nativeElement;
  }
  querySelector(selector) {
    return this.element.nativeElement.querySelector(selector);
  }
  querySelectorAll(selector) {
    return this.element.nativeElement.querySelectorAll(selector);
  }
  findFocusable() {
    return findFocusable(this.element.nativeElement, false);
  }
  findFocusableChild(element) {
    if (!element) {
      element = this.findFocusable();
    }
    return findFocusableChild(element, false);
  }
  findNextFocusableSibling(element) {
    if (!element) {
      element = this.findFocusable();
    }
    return findFocusableSibling(element, false);
  }
  findPrevFocusableSibling(element) {
    if (!element) {
      element = this.findFocusable();
    }
    return findFocusableSibling(element, false, true);
  }
  setAttribute(element, attr, value) {
    this.renderer.setAttribute(element, attr, value);
  }
};
RendererService.ɵfac = function RendererService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RendererService)();
};
RendererService.ɵprov = ɵɵdefineInjectable({
  token: RendererService,
  factory: RendererService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RendererService, [{
    type: Injectable
  }], null, null);
})();
var ToolbarToolsService = class {
  constructor() {
    this.renderedToolsChange = new Subject();
    this.overflowToolsChange = new Subject();
    this.renderedTools = [];
    this.overflowTools = [];
    this.allTools = [];
  }
};
ToolbarToolsService.ɵfac = function ToolbarToolsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolbarToolsService)();
};
ToolbarToolsService.ɵprov = ɵɵdefineInjectable({
  token: ToolbarToolsService,
  factory: ToolbarToolsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarToolsService, [{
    type: Injectable
  }], null, null);
})();
var MIN_SPACER_WIDTH = 18;
var ToolBarRendererComponent = class {
  constructor(renderer, rendererService, refreshService, toolsService, viewContainer) {
    this.renderer = renderer;
    this.rendererService = rendererService;
    this.refreshService = refreshService;
    this.toolsService = toolsService;
    this.viewContainer = viewContainer;
    this.rendererClick = new EventEmitter();
    this.onClick = (ev) => {
      this.rendererClick.emit({
        context: this,
        event: ev
      });
    };
  }
  get isSpacer() {
    return this.tool && this.tool.__isSpacer;
  }
  ngOnInit() {
    const viewContainerRootNodes = this.viewContainer.get(0)?.rootNodes?.filter(isElementOrTextNode);
    if (!viewContainerRootNodes || viewContainerRootNodes.length === 0) {
      return;
    }
    this.internalComponentRef = viewContainerRootNodes[0];
    this.element = this.tool.element;
    this.internalComponentRef.addEventListener("click", this.onClick);
    this.rendererService.element = this.element;
    this.rendererService.renderer = this;
    this.refreshSubscription = this.refreshService.onRefresh.subscribe((tool) => {
      if (this.tool === tool) {
        this.refresh();
      }
    });
    if (this.resizable) {
      if (this.location === "toolbar") {
        this.template = this.tool.toolbarTemplate;
        this.renderer.setStyle(this.internalComponentRef, "visibility", "hidden");
        this.renderer.setStyle(this.internalComponentRef, "display", "none");
      } else {
        this.template = this.tool.popupTemplate;
        this.renderer.setStyle(this.internalComponentRef, "display", "none");
      }
    } else {
      this.tool.overflows = false;
      this.template = this.tool.toolbarTemplate;
      this.renderer.setStyle(this.internalComponentRef, "visibility", "visible");
      this.renderer.setStyle(this.internalComponentRef, "display", "inline-flex");
    }
  }
  ngOnDestroy() {
    this.refreshSubscription && this.refreshSubscription.unsubscribe();
    this.internalComponentRef && this.internalComponentRef.removeEventListener("click", this.onClick);
  }
  ngAfterViewInit() {
    if (this.resizable) {
      this.refresh();
    }
    this.updateTools();
  }
  /**
   * @hidden
   */
  get width() {
    if (this.isSpacer) {
      return MIN_SPACER_WIDTH;
    }
    return this.tool.overflows ? 0 : outerWidth(this.internalComponentRef);
  }
  isDisplayed() {
    return this.internalComponentRef?.style?.display !== "none";
  }
  refresh() {
    if (this.resizable && this.internalComponentRef) {
      if (this.location === "toolbar") {
        this.renderer.setStyle(this.internalComponentRef, "visibility", this.tool.visibility);
        this.renderer.setStyle(this.internalComponentRef, "display", this.tool.toolbarDisplay);
      } else {
        this.renderer.setStyle(this.internalComponentRef, "display", this.tool.overflowDisplay);
      }
      this.updateTools();
    }
  }
  setAttribute(element, attr, value) {
    this.renderer.setAttribute(element, attr, value);
  }
  updateTools() {
    const isInToolbar = this.toolsService.renderedTools.some((t) => t.tool === this.tool);
    const isInPopup = this.toolsService.overflowTools.some((t) => t.tool === this.tool);
    if (this.location === "toolbar") {
      isInPopup && (this.toolsService.overflowTools = this.toolsService.overflowTools.filter((t) => t.tool !== this.tool));
      !isInToolbar && this.toolsService.renderedTools.push(this);
    } else {
      if (!isInPopup) {
        this.toolsService.overflowTools.push(this);
        this.toolsService.overflowTools.sort((t1, t2) => {
          return this.toolsService.allTools.indexOf(t1.tool) - this.toolsService.allTools.indexOf(t2.tool);
        });
      }
    }
  }
};
ToolBarRendererComponent.ɵfac = function ToolBarRendererComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarRendererComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(RendererService), ɵɵdirectiveInject(RefreshService), ɵɵdirectiveInject(ToolbarToolsService), ɵɵdirectiveInject(ViewContainerRef));
};
ToolBarRendererComponent.ɵdir = ɵɵdefineDirective({
  type: ToolBarRendererComponent,
  selectors: [["", "kendoToolbarRenderer", ""]],
  inputs: {
    tool: "tool",
    location: "location",
    resizable: "resizable"
  },
  outputs: {
    rendererClick: "rendererClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([RendererService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarRendererComponent, [{
    type: Directive,
    args: [{
      providers: [RendererService],
      standalone: true,
      selector: "[kendoToolbarRenderer]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: RendererService
    }, {
      type: RefreshService
    }, {
      type: ToolbarToolsService
    }, {
      type: ViewContainerRef
    }];
  }, {
    tool: [{
      type: Input
    }],
    location: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    rendererClick: [{
      type: Output
    }]
  });
})();
var ToolbarMessages = class extends ComponentMessages {
};
ToolbarMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵToolbarMessages_BaseFactory;
  return function ToolbarMessages_Factory(__ngFactoryType__) {
    return (ɵToolbarMessages_BaseFactory || (ɵToolbarMessages_BaseFactory = ɵɵgetInheritedFactory(ToolbarMessages)))(__ngFactoryType__ || ToolbarMessages);
  };
})();
ToolbarMessages.ɵdir = ɵɵdefineDirective({
  type: ToolbarMessages,
  selectors: [["kendo-toolbar-messages-base"]],
  inputs: {
    moreToolsTitle: "moreToolsTitle"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-toolbar-messages-base"
    }]
  }], null, {
    moreToolsTitle: [{
      type: Input
    }]
  });
})();
var LocalizedToolbarMessagesDirective = class extends ToolbarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedToolbarMessagesDirective.ɵfac = function LocalizedToolbarMessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizedToolbarMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedToolbarMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedToolbarMessagesDirective,
  selectors: [["", "kendoToolbarLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolbarMessages,
    useExisting: forwardRef(() => LocalizedToolbarMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedToolbarMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ToolbarMessages,
        useExisting: forwardRef(() => LocalizedToolbarMessagesDirective)
      }],
      selector: "[kendoToolbarLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DEFAULT_SIZE = "medium";
var immediateResizeThreshold = 300;
var getInitialPopupSettings = (isRtl) => ({
  animate: true,
  anchorAlign: {
    horizontal: isRtl ? "left" : "right",
    vertical: "bottom"
  },
  popupAlign: {
    horizontal: isRtl ? "left" : "right",
    vertical: "top"
  }
});
var ToolBarComponent = class {
  constructor(localization, popupService, refreshService, navigationService, element, zone, renderer, _cdr, toolsService) {
    this.localization = localization;
    this.popupService = popupService;
    this.refreshService = refreshService;
    this.navigationService = navigationService;
    this.element = element;
    this.zone = zone;
    this.renderer = renderer;
    this._cdr = _cdr;
    this.toolsService = toolsService;
    this.overflow = false;
    this.tabindex = 0;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.hostClass = true;
    this.cancelRenderedToolsSubscription$ = new Subject();
    this._size = DEFAULT_SIZE;
    this.overflowButtonClickedTime = null;
    this.subscriptions = new Subscription();
    this.popupSubs = new Subscription();
    this.role = "toolbar";
    this.moreVerticalIcon = moreVerticalIcon;
    this.overflowBtnId = guid();
    this.popupId = guid();
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
  }
  get overflowClass() {
    return `k-button-${SIZES[this.size]}`;
  }
  /**
   * @hidden
   */
  set resizable(value) {
    this.overflow = value;
  }
  get resizable() {
    return this.overflow;
  }
  /**
   * Configures the popup of the ToolBar overflow button ([see example]({% slug responsive_toolbar %}#toc-popup-customization)).
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({}, getInitialPopupSettings(this.localization.rtl), settings);
  }
  get popupSettings() {
    return this._popupSettings || getInitialPopupSettings(this.localization.rtl);
  }
  /**
   * Specifies the padding of all Toolbar elements.
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
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
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
  set popupOpen(open) {
    if (this.popupOpen === open) {
      return;
    }
    const eventArgs = new PreventableEvent();
    if (open) {
      this.open.emit(eventArgs);
    } else {
      this.close.emit(eventArgs);
    }
    if (eventArgs.isDefaultPrevented()) {
      return;
    }
    this.toggle(open);
  }
  get popupOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  onFocus(ev) {
    this.navigationService.resetNavigation();
    this.navigationService.focusFirst(ev);
    this.element.nativeElement.setAttribute("tabindex", "-1");
  }
  /**
   * @hidden
   */
  onFocusOut(event) {
    if (closest(event.relatedTarget, (el) => el === this.element.nativeElement)) {
      this.element.nativeElement.setAttribute("tabindex", "-1");
      return;
    }
    this.element.nativeElement.setAttribute("tabindex", this.tabindex.toString());
  }
  get getDir() {
    return this.direction;
  }
  get resizableClass() {
    return this.overflow;
  }
  ngAfterContentInit() {
    this.toolsService.allTools = this.allTools.toArray();
    this.subscriptions.add(this.allTools.changes.subscribe((changes) => {
      this.toolsService.allTools = this.allTools.toArray();
      this.zone.onStable.pipe(take(1)).subscribe(() => this.onResize());
    }));
  }
  ngAfterViewInit() {
    this.toolsService.renderedToolsChange.next(this.toolsService.renderedTools);
    this.toolsService.overflowToolsChange.next(this.toolsService.overflowTools);
    const element = this.element.nativeElement;
    if (!element.getAttribute("tabindex")) {
      this.element.nativeElement.setAttribute("tabindex", "0");
    }
    this.zone.runOutsideAngular(() => {
      this.toolbarKeydownListener = this.renderer.listen(this.element.nativeElement, "keydown", (ev) => {
        switch (ev.keyCode) {
          case Keys.ArrowLeft:
            this.zone.run(() => {
              ev.preventDefault();
              if (this.direction === "ltr") {
                this.navigationService.focusPrev(ev);
              } else {
                this.navigationService.focusNext(ev);
              }
              this.element.nativeElement.setAttribute("tabindex", "-1");
            });
            break;
          case Keys.ArrowRight:
            this.zone.run(() => {
              ev.preventDefault();
              if (this.direction === "ltr") {
                this.navigationService.focusNext(ev);
              } else {
                this.navigationService.focusPrev(ev);
              }
              this.element.nativeElement.setAttribute("tabindex", "-1");
            });
            break;
          case Keys.Tab:
            this.zone.run(() => this.navigationService.resetNavigation());
            break;
          case Keys.Escape:
            this.zone.run(() => this.toggle(false));
            break;
          case Keys.Home:
            this.zone.run(() => this.navigationService.focusFirst(ev));
            break;
          case Keys.End:
            this.zone.run(() => this.navigationService.focusLast(ev));
            break;
          default:
            break;
        }
      });
    });
    if (this.overflow) {
      this.subscriptions.add(merge(this.resizeSensor.resize, this.toolsService.renderedToolsChange).subscribe(() => this.onResize()));
      this.navigationService.overflowButton = this.overflowButton;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.zone.run(() => {
            this.onResize();
          });
        });
      });
    }
    this.navigationService.setRenderedTools(this.toolsService.renderedTools);
    this.handleClasses(this.size, "size");
  }
  ngOnInit() {
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.zone.onStable.pipe(take(1)).subscribe(() => this.onResize());
    if (isDocumentAvailable()) {
      this.zone.runOutsideAngular(() => this.subscriptions.add(fromEvent(document, "click").pipe(filter(() => !!this.popupRef), filter((ev) => !this.popupRef.popup.instance.container.nativeElement.contains(ev.target)), filter((ev) => !this.overflowButton.nativeElement.contains(ev.target))).subscribe(() => {
        this.zone.run(() => {
          this.popupOpen = false;
        });
      })));
    }
  }
  ngOnChanges(changes) {
    if (changes["tabindex"]) {
      this.element.nativeElement.setAttribute("tabindex", changes["tabindex"].currentValue.toString());
    }
  }
  ngOnDestroy() {
    this.destroyPopup();
    if (this.toolbarKeydownListener) {
      this.toolbarKeydownListener();
    }
    this.cancelRenderedToolsSubscription$.next();
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  get moreToolsTitle() {
    return this.localization.get("moreToolsTitle");
  }
  /**
   * @hidden
   */
  get cdr() {
    return this._cdr;
  }
  /**
   * @hidden
   */
  onRendererClick(data) {
    this.navigationService.click(data);
    this.element.nativeElement.setAttribute("tabindex", "-1");
  }
  /**
   * @hidden
   */
  showPopup() {
    this.popupOpen = !this.popupOpen;
    this.navigationService.click({
      context: void 0,
      event: void 0
    });
    this.overflowButtonClickedTime = Date.now();
  }
  /**
   * Toggles the visibility of the overflow popup.
   */
  toggle(popupOpen) {
    this._open = popupOpen !== void 0 ? popupOpen : !this.popupOpen;
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    }
    if (this.popupOpen) {
      this.popupRef = this.popupService.open({
        anchor: this.overflowButton,
        anchorAlign: this.popupSettings.anchorAlign,
        popupAlign: this.popupSettings.popupAlign,
        content: this.popupTemplate,
        appendTo: this.appendTo,
        animate: this.popupSettings.animate,
        popupClass: this.normalizePopupClasses(this.popupSettings.popupClass),
        positionMode: "absolute"
      });
      this.setPopupContentDimensions();
      this.popupSubs.add(this.popupRef.popupOpen.subscribe(this.onPopupOpen.bind(this)));
      this.popupSubs.add(this.popupRef.popupClose.subscribe(this.onPopupClose.bind(this)));
    }
  }
  /**
   * @hidden
   */
  onResize() {
    if (isDocumentAvailable()) {
      const containerWidth = innerWidth(this.element.nativeElement) - this.overflowAnchorWidth;
      this.shrink(containerWidth, this.childrenWidth);
      this.stretch(containerWidth, this.childrenWidth);
      this.displayAnchor();
      this.resizeSensor?.acceptSize();
      const isImmediateResize = Date.now() - this.overflowButtonClickedTime < immediateResizeThreshold;
      if (this.popupOpen && !isImmediateResize) {
        this.toggle();
      }
    }
  }
  /**
   * @hidden
   */
  onPopupOpen() {
    this.zone.runOutsideAngular(() => {
      this.overflowKeydownListener = this.renderer.listen(this.popupRef.popupElement, "keydown", (ev) => {
        switch (ev.keyCode) {
          case Keys.ArrowUp:
            this.zone.run(() => {
              ev.preventDefault();
              this.navigationService.focusPrev(ev);
            });
            break;
          case Keys.ArrowDown:
            this.zone.run(() => {
              ev.preventDefault();
              this.navigationService.focusNext(ev);
            });
            break;
          case Keys.Escape:
            this.zone.run(() => this.toggle(false));
            const eventArgs = new PreventableEvent();
            this.close.emit(eventArgs);
            break;
          case Keys.Tab:
            this.zone.run(() => {
              this.toggle(false);
              this.navigationService.resetNavigation();
            });
            break;
          case Keys.Enter:
          case Keys.Space:
            this.zone.run(() => {
              if (ev.target.closest(".k-menu-item")) {
                ev.preventDefault();
                ev.target.click();
                ev.target.focus();
              }
            });
            break;
          default:
            break;
        }
      });
    });
    this.cancelRenderedToolsSubscription$.next();
    this.navigationService.setRenderedTools(this.toolsService.overflowTools);
    this.navigationService.moveFocusToPopup();
    this.toolsService.overflowToolsChange.pipe(takeUntil(this.cancelRenderedToolsSubscription$)).subscribe((rts) => this.navigationService.setRenderedTools(rts));
    this.renderer.setAttribute(this.overflowButton.nativeElement, "aria-controls", this.popupId);
  }
  /**
   * @hidden
   */
  onPopupClose() {
    this.cancelRenderedToolsSubscription$.next();
    this.navigationService.setRenderedTools(this.toolsService.renderedTools);
    this.toolsService.renderedToolsChange.pipe(takeUntil(this.cancelRenderedToolsSubscription$)).subscribe((rts) => this.navigationService.setRenderedTools(rts));
    this.navigationService.moveFocusToToolBar();
    if (this.overflowKeydownListener) {
      this.overflowKeydownListener();
    }
    this.renderer.removeAttribute(this.overflowButton.nativeElement, "aria-controls");
  }
  displayAnchor() {
    const visibility = this.allTools.filter((t) => t.overflows && t.responsive).length > 0 ? "visible" : "hidden";
    this.overflowButton && this.renderer.setStyle(this.overflowButton.nativeElement, "visibility", visibility);
  }
  get popupWidth() {
    if (!this.popupSettings || !this.popupSettings.width) {
      return "auto";
    }
    return isNaN(this.popupSettings.width) ? this.popupSettings.width : `${this.popupSettings.width}px`;
  }
  get popupHeight() {
    if (!this.popupSettings || !this.popupSettings.height) {
      return;
    }
    return isNaN(this.popupSettings.height) ? this.popupSettings.height : `${this.popupSettings.height}px`;
  }
  get overflowAnchorWidth() {
    if (!this.overflow) {
      return 0;
    }
    if (!this.cachedOverflowAnchorWidth) {
      this.cachedOverflowAnchorWidth = this.overflowButton.nativeElement.offsetWidth;
    }
    return this.cachedOverflowAnchorWidth;
  }
  get gap() {
    if (isPresent(this.cachedGap)) {
      return this.cachedGap;
    }
    const computedGap = getComputedStyle(this.element.nativeElement).gap;
    this.cachedGap = isPresent(computedGap) ? parseInt(computedGap, 10) : 0;
    return this.cachedGap;
  }
  get childrenWidth() {
    const width = this.toolsService.renderedTools.reduce((totalWidth, tool) => tool.width + totalWidth + (tool.isDisplayed() ? this.gap : 0), 0);
    return Math.ceil(width);
  }
  get visibleTools() {
    return this.allTools.filter((tool) => {
      return tool.overflows === false;
    });
  }
  get overflowTools() {
    return this.allTools.filter((tool) => {
      return tool.overflows === true;
    });
  }
  shrink(containerWidth, childrenWidth) {
    let width;
    if (containerWidth < childrenWidth) {
      for (let i = this.visibleTools.length - 1; i >= 0; i--) {
        if (containerWidth > childrenWidth) {
          break;
        } else {
          width = this.hideLastVisibleTool();
          childrenWidth -= width;
        }
      }
    }
  }
  stretch(containerWidth, childrenWidth) {
    let width;
    if (containerWidth > childrenWidth) {
      for (let i = this.overflowTools.length - 1; i >= 0; i--) {
        width = this.showFirstHiddenTool(containerWidth, childrenWidth);
        if (width) {
          childrenWidth += width + this.gap;
        } else {
          break;
        }
      }
    }
  }
  hideLastVisibleTool() {
    const tool = this.visibleTools[this.visibleTools.length - 1];
    if (!tool) {
      return null;
    }
    const renderedElement = this.toolsService.renderedTools.find((r) => {
      return r.tool === tool;
    });
    const width = renderedElement.width;
    tool.overflows = this.overflow;
    this.refreshService.refresh(tool);
    return width;
  }
  showFirstHiddenTool(containerWidth, childrenWidth) {
    const tool = this.overflowTools[0];
    if (!tool) {
      return null;
    }
    const renderedElement = this.toolsService.renderedTools.find((r) => r.tool === tool);
    tool.overflows = false;
    tool.visibility = "hidden";
    this.refreshService.refresh(tool);
    if (containerWidth > childrenWidth + renderedElement.width) {
      tool.visibility = "visible";
    } else {
      tool.overflows = true;
    }
    this.refreshService.refresh(tool);
    return renderedElement.width;
  }
  setPopupContentDimensions() {
    const popupContentContainer = this.popupRef.popup.instance.contentContainer.nativeElement;
    popupContentContainer.style.width = this.popupWidth;
    popupContentContainer.style.height = this.popupHeight;
    popupContentContainer.style.overflow = "auto";
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupSubs.unsubscribe();
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("toolbar", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  normalizePopupClasses(classList) {
    let classes = ["k-menu-popup", "k-toolbar-popup"];
    if (!classList) {
      return classes;
    }
    if (typeof classList === "string") {
      classes.push(...classList.split(" "));
    } else if (Array.isArray(classList)) {
      classes = [...classes, ...classList];
    } else {
      for (const cl in classList) {
        classes.push(classList[cl]);
      }
    }
    return classes;
  }
};
ToolBarComponent.ɵfac = function ToolBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(RefreshService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ToolbarToolsService));
};
ToolBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarComponent,
  selectors: [["kendo-toolbar"]],
  contentQueries: function ToolBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ToolBarToolComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.allTools = _t);
    }
  },
  viewQuery: function ToolBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function ToolBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function ToolBarComponent_focus_HostBindingHandler($event) {
        return ctx.onFocus($event);
      })("focusout", function ToolBarComponent_focusout_HostBindingHandler($event) {
        return ctx.onFocusOut($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("dir", ctx.getDir);
      ɵɵclassProp("k-toolbar", ctx.hostClass)("k-toolbar-resizable", ctx.resizableClass);
    }
  },
  inputs: {
    overflow: "overflow",
    resizable: "resizable",
    popupSettings: "popupSettings",
    tabindex: "tabindex",
    size: "size",
    tabIndex: "tabIndex"
  },
  outputs: {
    open: "open",
    close: "close"
  },
  exportAs: ["kendoToolBar"],
  standalone: true,
  features: [ɵɵProvidersFeature([RefreshService, NavigationService, LocalizationService, ToolbarToolsService, {
    provide: L10N_PREFIX,
    useValue: "kendo.toolbar"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 3,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TOOLBAR_FESM2020_PROGRESS_KENDO_ANGULAR_TOOLBAR_MJS_0 = goog.getMsg("More tools");
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TOOLBAR_FESM2020_PROGRESS_KENDO_ANGULAR_TOOLBAR_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.toolbar.moreToolsTitle|The title of the **more tools** button in a responsive ToolBar:More tools`;
    }
    return [["popupTemplate", ""], ["container", ""], ["wrapper", ""], ["overflowButton", ""], ["popupWrapper", ""], ["resizeSensor", ""], ["kendoToolbarLocalizedMessages", "", "moreToolsTitle", i18n_0], ["kendoToolbarRenderer", "", "location", "toolbar", 3, "tool", "resizable", "ngTemplateOutlet", "rendererClick", 4, "ngFor", "ngForOf"], ["kendoButton", "", "fillMode", "flat", "type", "button", "icon", "more-vertical", "tabindex", "-1", "aria-haspopup", "menu", "class", "k-toolbar-overflow-button", 3, "svgIcon", "title", "id", "visibility", "position", "margin-inline-start", "ngClass", "click", 4, "ngIf"], [4, "ngIf"], ["kendoToolbarRenderer", "", "location", "toolbar", 3, "rendererClick", "tool", "resizable", "ngTemplateOutlet"], [1, "k-toolbar-item"], [3, "ngTemplateOutlet"], ["kendoButton", "", "fillMode", "flat", "type", "button", "icon", "more-vertical", "tabindex", "-1", "aria-haspopup", "menu", 1, "k-toolbar-overflow-button", 3, "click", "svgIcon", "title", "id", "ngClass"], ["role", "menu", 1, "k-menu-group", "k-menu-group-md", 3, "id"], [4, "ngFor", "ngForOf"], ["kendoToolbarRenderer", "", "location", "overflow", 3, "rendererClick", "tool", "resizable", "ngTemplateOutlet"], ["role", "menuitem", "tabindex", "-1", 1, "k-item", "k-menu-item"]];
  },
  template: function ToolBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 6);
      ɵɵtemplate(1, ToolBarComponent_ng_container_1_Template, 3, 3, "ng-container", 7)(2, ToolBarComponent_button_2_Template, 2, 12, "button", 8)(3, ToolBarComponent_ng_template_3_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(5, null, 1);
      ɵɵtemplate(7, ToolBarComponent_kendo_resize_sensor_7_Template, 2, 0, "kendo-resize-sensor", 9);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.allTools);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.overflow);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.overflow);
    }
  },
  dependencies: [NgTemplateOutlet, LocalizedToolbarMessagesDirective, NgForOf, ToolBarRendererComponent, NgIf, ButtonComponent, NgClass, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBar",
      providers: [RefreshService, NavigationService, LocalizationService, ToolbarToolsService, {
        provide: L10N_PREFIX,
        useValue: "kendo.toolbar"
      }],
      selector: "kendo-toolbar",
      template: `
        <ng-container kendoToolbarLocalizedMessages
        i18n-moreToolsTitle="kendo.toolbar.moreToolsTitle|The title of the **more tools** button in a responsive ToolBar"
        moreToolsTitle="More tools"
        >
        </ng-container>
        <ng-container *ngFor="let tool of allTools; let index = index"
            kendoToolbarRenderer
            [tool]="tool"
            location="toolbar"
            [resizable]="overflow"
            (rendererClick)="onRendererClick($event)"
            [ngTemplateOutlet]="tool.isBuiltInTool ? tool.toolbarTemplate : wrapper">
            <ng-template #wrapper>
                <div class="k-toolbar-item">
                    <ng-container [ngTemplateOutlet]="tool.toolbarTemplate"></ng-container>
                </div>
            </ng-template>
        </ng-container>
        <button
            kendoButton
            fillMode="flat"
            #overflowButton
            type="button"
            icon="more-vertical"
            [svgIcon]="moreVerticalIcon"
            tabindex="-1"
            [title]="moreToolsTitle"
            [attr.aria-label]="moreToolsTitle"
            [attr.aria-expanded]="popupOpen"
            [id]="overflowBtnId"
            aria-haspopup="menu"
            *ngIf="overflow"
            [style.visibility]="'hidden'"
            [style.position]="'relative'"
            [style.margin-inline-start]="'auto'"
            class="k-toolbar-overflow-button"
            [ngClass]="overflowClass"
            (click)="showPopup()"
        >
        </button>
        <ng-template #popupTemplate>
            <div
                class="k-menu-group k-menu-group-md"
                role="menu"
                [id]="popupId"
                [attr.aria-labelledby]="overflowBtnId">
                <ng-container *ngFor="let tool of overflowTools; let index = index">
                    <ng-template 
                        *ngIf="tool.popupTemplate"
                        kendoToolbarRenderer
                        [tool]="tool"
                        location="overflow"
                        [resizable]="overflow"
                        (rendererClick)="onRendererClick($event)"
                        [ngTemplateOutlet]="tool.isBuiltInTool ? tool.popupTemplate : popupWrapper"></ng-template>
                    <ng-template #popupWrapper>
                        <div role="menuitem" tabindex="-1" class="k-item k-menu-item">
                            <ng-container [ngTemplateOutlet]="tool.popupTemplate"></ng-container>
                        </div>
                    </ng-template>
                </ng-container>
            </div>
        </ng-template>
        <ng-container #container></ng-container>
        <kendo-resize-sensor *ngIf="overflow" #resizeSensor></kendo-resize-sensor>
    `,
      standalone: true,
      imports: [NgTemplateOutlet, LocalizedToolbarMessagesDirective, NgForOf, ToolBarRendererComponent, NgIf, ButtonComponent, NgClass, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: PopupService
    }, {
      type: RefreshService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: ToolbarToolsService
    }];
  }, {
    overflow: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    allTools: [{
      type: ContentChildren,
      args: [ToolBarToolComponent]
    }],
    overflowButton: [{
      type: ViewChild,
      args: ["overflowButton", {
        static: false,
        read: ElementRef
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: ["resizeSensor", {
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
    hostClass: [{
      type: HostBinding,
      args: ["class.k-toolbar"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onFocusOut: [{
      type: HostListener,
      args: ["focusout", ["$event"]]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    getDir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    resizableClass: [{
      type: HostBinding,
      args: ["class.k-toolbar-resizable"]
    }]
  });
})();
var ToolBarButtonComponent = class extends ToolBarToolComponent {
  constructor(element, zone) {
    super();
    this.element = element;
    this.zone = zone;
    this.showIcon = "both";
    this.toggleable = false;
    this.selected = false;
    this.fillMode = "solid";
    this.themeColor = "base";
    this.click = new EventEmitter();
    this.pointerdown = new EventEmitter();
    this.selectedChange = new EventEmitter();
    this.toolbarOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this.overflowOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this._showText = "both";
    this.isBuiltInTool = true;
  }
  // showText and showIcon showIcon should be declared first
  /**
   * Specifies where button text should be displayed
   */
  set showText(value) {
    this._showText = value;
    this.setTextDisplayMode();
  }
  get showText() {
    return this._showText;
  }
  /**
   * Specifies the text of the Button ([see example]({% slug controltypes_toolbar %}#toc-buttons)).
   */
  set text(text) {
    this._text = text;
    this.setTextDisplayMode();
  }
  get text() {
    return this._text;
  }
  /**
   * @hidden
   */
  set look(look) {
    if (look) {
      this.fillMode = look === "default" ? "solid" : look;
    }
  }
  /**
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Defines the name for an existing icon in a Kendo UI theme
   * ([see example]({% slug controltypes_toolbar %}#toc-buttons)).
   * The icon is rendered inside the Button by a `span.k-icon` element.
   */
  set icon(icon) {
    this.toolbarOptions.icon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.icon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
   * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
   */
  set iconClass(iconClass) {
    this.toolbarOptions.iconClass = getValueForLocation(iconClass, this.showIcon, false);
    this.overflowOptions.iconClass = getValueForLocation(iconClass, this.showIcon, true);
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    const isIconSet = this.toolbarOptions.icon || this.overflowOptions.icon;
    const isIconClassSet = this.toolbarOptions.iconClass || this.overflowOptions.iconClass;
    if (isDevMode() && icon && isIconSet && isIconClassSet) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this.toolbarOptions.svgIcon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.svgIcon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines a URL which is used for an `img` element inside the Button.
   * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
   */
  set imageUrl(imageUrl) {
    this.toolbarOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, false);
    this.overflowOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, true);
  }
  ngOnInit() {
    this.setTextDisplayMode();
  }
  /**
   * @hidden
   */
  onBlur() {
    this.getButton().tabIndex = -1;
  }
  /**
   * @hidden
   */
  canFocus() {
    return !this.disabled;
  }
  /**
   * @hidden
   */
  focus(ev) {
    if (!ev || ev.type === "focus" || ev.type === "keydown") {
      this.getButton().focus();
    }
    this.getButton().tabIndex = 0;
  }
  /**
   * @hidden
   */
  handleKey() {
    this.getButton().tabIndex = -1;
    return false;
  }
  /**
   * @hidden
   */
  get toolbarButtonClass() {
    return this.toggleable ? "k-toolbar-toggle-button" : "k-toolbar-button";
  }
  /**
   * @hidden
   */
  handleClick(ev) {
    this.click.emit(ev);
    if (this.toggleable) {
      this.selected = !this.selected;
      this.selectedChange.emit(this.selected);
    }
  }
  /**
   * @hidden
   */
  selectedChangeHandler(state) {
    this.selected = state;
    this.selectedChange.emit(state);
  }
  getButton() {
    return (this.overflowButtonElement || this.toolbarButtonElement).nativeElement;
  }
  setTextDisplayMode() {
    this.toolbarOptions.text = this.showText === "overflow" ? void 0 : this.text;
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.overflowOptions.text = this.showText === "toolbar" ? void 0 : this.text;
    });
  }
};
ToolBarButtonComponent.ɵfac = function ToolBarButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ToolBarButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarButtonComponent,
  selectors: [["kendo-toolbar-button"]],
  viewQuery: function ToolBarButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarButtonElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowButtonElement = _t.first);
    }
  },
  inputs: {
    showText: "showText",
    showIcon: "showIcon",
    text: "text",
    style: "style",
    className: "className",
    title: "title",
    disabled: "disabled",
    toggleable: "toggleable",
    look: "look",
    togglable: "togglable",
    selected: "selected",
    fillMode: "fillMode",
    themeColor: "themeColor",
    icon: "icon",
    iconClass: "iconClass",
    svgIcon: "svgIcon",
    imageUrl: "imageUrl"
  },
  outputs: {
    click: "click",
    pointerdown: "pointerdown",
    selectedChange: "selectedChange"
  },
  exportAs: ["kendoToolBarButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarButtonComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 0,
  consts: [["toolbarTemplate", ""], ["popupTemplate", ""], ["toolbarButton", ""], ["overflowButton", ""], ["type", "button", "kendoButton", "", 3, "click", "pointerdown", "selectedChange", "blur", "tabindex", "ngStyle", "ngClass", "disabled", "toggleable", "fillMode", "themeColor", "selected", "icon", "iconClass", "svgIcon", "imageUrl"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "click", "ngClass", "ngStyle"], [1, "k-link", "k-menu-link"], [3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "customFontClass", "svgIcon"], [1, "k-menu-link-text"]],
  template: function ToolBarButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarButtonComponent_ng_template_0_Template, 3, 16, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ToolBarButtonComponent_ng_template_2_Template, 5, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ButtonComponent, NgStyle, NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarButton",
      providers: [{
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarButtonComponent)
      }],
      selector: "kendo-toolbar-button",
      template: `
        <ng-template #toolbarTemplate>
            <button
                #toolbarButton
                [class]="toolbarButtonClass"
                [tabindex]="tabIndex"
                type="button"
                kendoButton
                [ngStyle]="style"
                [ngClass]="className"
                [attr.title]="title"
                [disabled]="disabled"
                [toggleable]="toggleable"
                [fillMode]="fillMode"
                [themeColor]="fillMode ? themeColor : null"
                [selected]="selected"
                [icon]="toolbarOptions.icon"
                [iconClass]="toolbarOptions.iconClass"
                [svgIcon]="toolbarOptions.svgIcon"
                [imageUrl]="toolbarOptions.imageUrl"
                (click)="click.emit($event)"
                (pointerdown)="pointerdown.emit($event)"
                (selectedChange)="selectedChangeHandler($event)"
                (blur)="onBlur()"
            >
                {{ toolbarOptions.text }}
            </button>
        </ng-template>
        <ng-template #popupTemplate>
            <div
                #overflowButton
                tabindex="-1"
                role="menuitem"
                class="k-item k-menu-item"
                [class.k-disabled]="disabled"
                [ngClass]="className"
                [ngStyle]="style"
                (click)="handleClick($event)">
                <span
                    class="k-link k-menu-link"
                    [class.k-selected]="selected"
                >
                    <kendo-icon-wrapper
                        *ngIf="overflowOptions.icon || overflowOptions.iconClass || overflowOptions.svgIcon"
                        [name]="overflowOptions.icon"
                        [customFontClass]="overflowOptions.iconClass"
                        [svgIcon]="overflowOptions.svgIcon"
                    ></kendo-icon-wrapper>
                    <span *ngIf="overflowOptions.text" class="k-menu-link-text">{{overflowOptions.text}}</span>
                </span>
            </div>
        </ng-template>
    `,
      standalone: true,
      imports: [ButtonComponent, NgStyle, NgClass, NgIf, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    showText: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    look: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    click: [{
      type: Output
    }],
    pointerdown: [{
      type: Output
    }],
    selectedChange: [{
      type: Output
    }],
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    toolbarButtonElement: [{
      type: ViewChild,
      args: ["toolbarButton", {
        read: ElementRef
      }]
    }],
    overflowButtonElement: [{
      type: ViewChild,
      args: ["overflowButton", {
        read: ElementRef
      }]
    }]
  });
})();
var ToolBarButtonGroupComponent = class extends ToolBarToolComponent {
  constructor(localization) {
    super();
    this.localization = localization;
    this.selection = "multiple";
    this.focusedIndex = -1;
    this.getNextKey = getNextKey(this.localization.rtl);
    this.getPrevKey = getPrevKey(this.localization.rtl);
    this.isBuiltInTool = true;
  }
  /**
   * @hidden
   */
  set look(look) {
    if (look) {
      this.buttonComponents.forEach((b) => b.fillMode = look === "default" ? "solid" : look);
    }
  }
  get buttonElements() {
    if (this.overflows) {
      return [...this.overflowListItems.toArray().filter((el) => !el.nativeElement.classList.contains("k-disabled"))].map((el) => el.nativeElement);
    } else {
      return this.toolbarButtonGroup.buttons.filter((b) => !b.isDisabled).map((b) => b.element);
    }
  }
  /**
   * @hidden
   */
  onFocus() {
    this.focusedIndex = 0;
  }
  /**
   * @hidden
   */
  onNavigate(ev) {
    ev.preventDefault();
  }
  /**
   * @hidden
   */
  selectedChangeHandler(state, button) {
    button.selected = state;
    button.selectedChange.emit(state);
  }
  /**
   * @hidden
   */
  overflowSelectedChangeHandler(button) {
    if (this.selection === "multiple") {
      button.selected = !button.selected;
    } else {
      const filteredButtons = this.buttonComponents.filter((b) => b !== button);
      filteredButtons.forEach((b) => b.selected = false);
      button.selected = !button.selected;
    }
    button.selectedChange.emit(button.selected);
  }
  /**
   * @hidden
   */
  onButtonClick(ev) {
    this.focusedIndex = this.buttonElements.findIndex((be) => be === ev.target || be.contains(ev.target));
    this.focusButton(this.focusedIndex, ev);
  }
  /**
   * @hidden
   */
  canFocus() {
    return !(this.disabled || this.buttonElements.length === 0);
  }
  /**
   * @hidden
   */
  focus(ev = {}) {
    const nextKey = this.getNextKey(this.overflows);
    const prevKey = this.getPrevKey(this.overflows);
    this.focusedIndex = getIndexOfFocused(prevKey, nextKey, this.buttonElements)(ev);
    this.focusButton(this.focusedIndex, ev);
  }
  /**
   * @hidden
   */
  handleKey(ev) {
    const nextKey = this.getNextKey(this.overflows);
    const prevKey = this.getPrevKey(this.overflows);
    const peekAtIndex = makePeeker(this.buttonElements);
    const isUnmodified = areEqual(this.focusedIndex);
    this.focusedIndex = seekFocusedIndex(prevKey, nextKey, peekAtIndex)(this.focusedIndex, ev);
    this.focusButton(this.focusedIndex, ev);
    return !isUnmodified(this.focusedIndex);
  }
  /**
   * @hidden
   */
  handleClick(ev, button) {
    button.click.emit(ev);
    this.onButtonClick(ev);
    this.overflowSelectedChangeHandler(button);
  }
  /**
   * @hidden
   */
  getIconClasses(button) {
    if (button.overflowOptions.icon) {
      return `${button.overflowOptions.icon}`;
    }
    if (button.overflowOptions.iconClass) {
      return button.overflowOptions.iconClass;
    }
    if (button.overflowOptions.svgIcon) {
      return button.overflowOptions.svgIcon;
    }
  }
  focusButton(index, ev) {
    if (!ev.type || ev.type === "focus" || ev.type === "keydown") {
      this.buttonElements[index]?.focus();
    }
  }
};
ToolBarButtonGroupComponent.ɵfac = function ToolBarButtonGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarButtonGroupComponent)(ɵɵdirectiveInject(LocalizationService));
};
ToolBarButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarButtonGroupComponent,
  selectors: [["kendo-toolbar-buttongroup"]],
  contentQueries: function ToolBarButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ToolBarButtonComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonComponents = _t);
    }
  },
  viewQuery: function ToolBarButtonGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarButtonGroup = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowListItems = _t);
    }
  },
  inputs: {
    disabled: "disabled",
    selection: "selection",
    width: "width",
    look: "look"
  },
  exportAs: ["kendoToolBarButtonGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarButtonGroupComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 0,
  consts: [["toolbarTemplate", ""], ["popupTemplate", ""], ["toolbarButtonGroup", ""], ["listItem", ""], [1, "k-toolbar-button-group", 3, "navigate", "focus", "tabIndex", "selection", "disabled", "width"], ["kendoButton", "", "type", "button", 3, "ngStyle", "ngClass", "disabled", "togglable", "selected", "fillMode", "themeColor", "icon", "iconClass", "svgIcon", "imageUrl", "click", "pointerdown", "selectedChange", 4, "ngFor", "ngForOf"], ["kendoButton", "", "type", "button", 3, "click", "pointerdown", "selectedChange", "ngStyle", "ngClass", "disabled", "togglable", "selected", "fillMode", "themeColor", "icon", "iconClass", "svgIcon", "imageUrl"], ["tabindex", "-1", "role", "menuitem", "class", "k-item k-menu-item", 3, "k-disabled", "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "click", "ngStyle", "ngClass"], [1, "k-link", "k-menu-link"], [3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "customFontClass", "svgIcon"], [1, "k-menu-link-text"]],
  template: function ToolBarButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarButtonGroupComponent_ng_template_0_Template, 3, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ToolBarButtonGroupComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ButtonGroupComponent, NgForOf, ButtonComponent, NgStyle, NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarButtonGroup",
      providers: [LocalizationService, {
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarButtonGroupComponent)
      }],
      selector: "kendo-toolbar-buttongroup",
      template: `
        <ng-template #toolbarTemplate>
            <kendo-buttongroup
                class="k-toolbar-button-group"
                #toolbarButtonGroup
                [tabIndex]="-1"
                [selection]="selection"
                [disabled]="disabled"
                [width]="width"
                (navigate)="onNavigate($event)"
                (focus)="onFocus()"
            >
                <button
                    kendoButton
                    type="button"
                    *ngFor="let button of buttonComponents"
                    [ngStyle]="button.style"
                    [ngClass]="button.className"
                    [attr.title]="button.title"
                    [disabled]="button.disabled"
                    [togglable]="button.togglable"
                    [selected]="button.selected"
                    [attr.aria-pressed]="button.selected ? true : false"
                    [fillMode]="button.fillMode"
                    [themeColor]="button.fillMode ? button.themeColor : null"
                    [icon]="button.toolbarOptions.icon"
                    [iconClass]="button.toolbarOptions.iconClass"
                    [svgIcon]="button.toolbarOptions.svgIcon"
                    [imageUrl]="button.toolbarOptions.imageUrl"
                    (click)="button.click.emit($event); onButtonClick($event)"
                    (pointerdown)="button.pointerdown.emit($event)"
                    (selectedChange)="selectedChangeHandler($event, button)"
                >
                    {{ button.toolbarOptions.text }}
                </button>
            </kendo-buttongroup>
        </ng-template>
        <ng-template #popupTemplate>
                <div
                    *ngFor="let button of buttonComponents" 
                    #listItem
                    tabindex="-1"
                    role="menuitem"
                    class="k-item k-menu-item"
                    [class.k-disabled]="disabled || button.disabled"
                    [ngStyle]="button.style"
                    [ngClass]="button.className"
                    (click)="handleClick($event, button)">
                    <span
                        class="k-link k-menu-link"
                        [class.k-selected]="button.selected"
                    >
                        <kendo-icon-wrapper
                            *ngIf="button.overflowOptions.icon || button.overflowOptions.iconClass || button.overflowOptions.svgIcon"
                            [name]="button.overflowOptions.icon"
                            [customFontClass]="button.overflowOptions.iconClass"
                            [svgIcon]="button.overflowOptions.svgIcon"
                        ></kendo-icon-wrapper>
                        <span *ngIf="button.overflowOptions.text" class="k-menu-link-text">{{button.overflowOptions.text}}</span>
                    </span>
                </div>
        </ng-template>
    `,
      standalone: true,
      imports: [ButtonGroupComponent, NgForOf, ButtonComponent, NgStyle, NgClass, NgIf, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    disabled: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    look: [{
      type: Input
    }],
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    toolbarButtonGroup: [{
      type: ViewChild,
      args: ["toolbarButtonGroup", {
        static: false
      }]
    }],
    overflowListItems: [{
      type: ViewChildren,
      args: ["listItem"]
    }],
    buttonComponents: [{
      type: ContentChildren,
      args: [forwardRef(() => ToolBarButtonComponent)]
    }]
  });
})();
var ToolBarDropDownButtonComponent = class extends ToolBarToolComponent {
  constructor() {
    super();
    this.arrowIcon = false;
    this.title = "";
    this.showIcon = "both";
    this.fillMode = "solid";
    this.themeColor = "base";
    this.itemClick = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.toolbarOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this.overflowOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this._popupSettings = {
      animate: true,
      popupClass: ""
    };
    this.focusedIndex = -1;
    this._showText = "both";
    this.getNextKey = getNextKey();
    this.getPrevKey = getPrevKey();
    this.isBuiltInTool = true;
  }
  // showText and showIcon showIcon should be declared first
  /**
   * Defines the location of the button text that will be displayed.
   */
  set showText(value) {
    this._showText = value;
    this.setTextDisplayMode();
  }
  get showText() {
    return this._showText;
  }
  /**
   * Sets the text of the DropDownButton
   * ([see example](slug:controltypes_toolbar#toc-drop-down-buttons).
   */
  set text(text) {
    this._text = text;
    this.setTextDisplayMode();
  }
  get text() {
    return this._text;
  }
  /**
   * Defines an icon that will be rendered next to the button text.
   */
  set icon(icon) {
    this.toolbarOptions.icon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.icon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    const isIconSet = this.toolbarOptions.icon || this.overflowOptions.icon;
    const isIconClassSet = this.toolbarOptions.iconClass || this.overflowOptions.iconClass;
    if (isDevMode() && icon && isIconSet && isIconClassSet) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this.toolbarOptions.svgIcon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.svgIcon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines an icon with a custom CSS class that will be rendered next to the button text.
   */
  set iconClass(iconClass) {
    this.toolbarOptions.iconClass = getValueForLocation(iconClass, this.showIcon, false);
    this.overflowOptions.iconClass = getValueForLocation(iconClass, this.showIcon, true);
  }
  /**
   * Defines the location of an image that will be displayed next to the button text.
   */
  set imageUrl(imageUrl) {
    this.toolbarOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, false);
    this.overflowOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, true);
  }
  /**
   * Configures the popup of the DropDownButton.
   *
   * The available options are:
   * - `animate:Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass:String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  set look(look) {
    if (look) {
      this.fillMode = look === "default" ? "solid" : look;
    }
  }
  /**
   * @hidden
   */
  set primary(primary) {
    this.themeColor = primary ? "primary" : "base";
  }
  /**
   * Sets the data of the DropDownButton
   * ([see example]({% slug controltypes_toolbar %}#toc-dropdownbuttons)).
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  ngOnInit() {
    this.setTextDisplayMode();
  }
  get overflowButtons() {
    return [...this.overflowListItems.toArray().filter((el) => !el.nativeElement.classList.contains("k-disabled"))];
  }
  /**
   * @hidden
   */
  onButtonListClick(ev) {
    this.focusedIndex = this.overflowListItems.toArray().findIndex((b) => b.nativeElement.contains(ev.target));
  }
  /**
   * @hidden
   */
  canFocus() {
    return !this.disabled;
  }
  /**
   * @hidden
   */
  focus(ev = {}) {
    if (!this.overflows) {
      if (ev.type === "focus" || ev.type === "keydown") {
        this.toolbarDropDownButton.focus();
      }
    } else if (this.overflowButtons.length > 0) {
      this.focusedIndex = getIndexOfFocused(this.getPrevKey(), this.getNextKey(), this.overflowButtons.map((ob) => ob.nativeElement))(ev);
      this.focusButton(this.focusedIndex, ev);
    }
  }
  /**
   * @hidden
   */
  handleKey(ev) {
    if (!this.overflows && (ev.keyCode === this.getPrevKey(this.overflows) || ev.keyCode === this.getNextKey(this.overflows))) {
      return false;
    }
    if (this.overflows) {
      const peekAtIndex = makePeeker(this.overflowButtons);
      const isUnmodified = areEqual(this.focusedIndex);
      this.focusedIndex = seekFocusedIndex(this.getPrevKey(), this.getNextKey(), peekAtIndex)(this.focusedIndex, ev);
      this.focusButton(this.focusedIndex, ev);
      return !isUnmodified(this.focusedIndex);
    }
  }
  /**
   * @hidden
   */
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  /**
   * @hidden
   */
  handleClick(ev, item, index) {
    this.onButtonListClick(ev);
    const dataItem = this.data[index];
    if (item.click) {
      item.click(dataItem);
    }
    this.itemClick.emit(dataItem);
  }
  focusButton(index, ev) {
    if (!ev.type || ev.type === "focus" || ev.type === "keydown") {
      this.overflowButtons[index].nativeElement.focus();
    }
  }
  setTextDisplayMode() {
    this.toolbarOptions.text = this.showText === "overflow" ? void 0 : this.text;
    this.overflowOptions.text = this.showText === "toolbar" ? void 0 : this.text;
  }
};
ToolBarDropDownButtonComponent.ɵfac = function ToolBarDropDownButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarDropDownButtonComponent)();
};
ToolBarDropDownButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarDropDownButtonComponent,
  selectors: [["kendo-toolbar-dropdownbutton"]],
  viewQuery: function ToolBarDropDownButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c8, 7, ElementRef);
      ɵɵviewQuery(DropDownButtonComponent, 5);
      ɵɵviewQuery(_c9, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropDownButtonComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarDropDownButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowListItems = _t);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    title: "title",
    showText: "showText",
    showIcon: "showIcon",
    text: "text",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    imageUrl: "imageUrl",
    popupSettings: "popupSettings",
    look: "look",
    primary: "primary",
    fillMode: "fillMode",
    themeColor: "themeColor",
    buttonClass: "buttonClass",
    textField: "textField",
    disabled: "disabled",
    data: "data"
  },
  outputs: {
    itemClick: "itemClick",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoToolBarDropDownButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarDropDownButtonComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 0,
  consts: [["toolbarTemplate", ""], ["popupTemplate", ""], ["toolbarDropDownButton", ""], ["listItem", ""], [1, "k-toolbar-menu-button", 3, "open", "close", "itemClick", "icon", "iconClass", "svgIcon", "imageUrl", "arrowIcon", "buttonClass", "disabled", "tabIndex", "data", "buttonAttributes", "textField", "popupSettings", "fillMode", "themeColor"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", "k-disabled", 3, "ngClass"], [3, "ngClass"], [3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "name", "customFontClass", "svgIcon"], [1, "k-menu-link-text"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "click"], [1, "k-link", "k-menu-link", 3, "ngClass"]],
  template: function ToolBarDropDownButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarDropDownButtonComponent_ng_template_0_Template, 3, 17, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ToolBarDropDownButtonComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [DropDownButtonComponent, NgClass, NgIf, IconWrapperComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarDropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarDropDownButton",
      providers: [{
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarDropDownButtonComponent)
      }],
      selector: "kendo-toolbar-dropdownbutton",
      template: `
        <ng-template #toolbarTemplate>
            <kendo-dropdownbutton
                #toolbarDropDownButton
                class="k-toolbar-menu-button"
                [icon]="toolbarOptions.icon"
                [iconClass]="toolbarOptions.iconClass"
                [svgIcon]="toolbarOptions.svgIcon"
                [imageUrl]="toolbarOptions.imageUrl"
                [arrowIcon]="arrowIcon"
                [buttonClass]="buttonClass"
                [disabled]="disabled"
                [tabIndex]="-1"
                [data]="data"
                [buttonAttributes]="{'title': title}"
                [textField]="textField"
                [popupSettings]="popupSettings"
                [fillMode]="fillMode"
                [themeColor]="fillMode ? themeColor : null"
                (open)="open.emit($event)"
                (close)="close.emit($event)"
                (itemClick)="itemClick.emit($event)"
            >
                {{ toolbarOptions.text }}
            </kendo-dropdownbutton>
        </ng-template>
        <ng-template #popupTemplate>
            <div
                tabindex="-1"
                role="menuitem"
                class="k-item k-menu-item k-disabled"
                [ngClass]="buttonClass">
                <span
                    [ngClass]="{'k-link': true, 'k-menu-link': true}"
                >
                    <kendo-icon-wrapper
                        *ngIf="overflowOptions.icon || overflowOptions.iconClass || overflowOptions.svgIcon"
                        [name]="overflowOptions.icon"
                        [customFontClass]="overflowOptions.iconClass"
                        [svgIcon]="overflowOptions.svgIcon"
                    ></kendo-icon-wrapper>
                    <span *ngIf="overflowOptions.text" class="k-menu-link-text">{{overflowOptions.text}}</span>
                </span>
            </div>
            <ng-container *ngFor="let item of data; let i = index">
                <div #listItem
                    tabindex="-1"
                    role="menuitem"
                    class="k-item k-menu-item"
                    [class.k-disabled]="disabled || item.disabled"
                    (click)="handleClick($event, item, i)">
                    <span
                        class="k-link k-menu-link"
                        [ngClass]="item.cssClass"
                    >
                        <kendo-icon-wrapper
                            *ngIf="item.icon || item.iconClass || item.svgIcon"
                            [name]="item.icon"
                            [customFontClass]="item.iconClass"
                            [svgIcon]="item.svgIcon"
                        ></kendo-icon-wrapper>
                        <span *ngIf="getText(item)" class="k-menu-link-text">{{ getText(item) }}</span>
                    </span>
                </div>
            </ng-container>
        </ng-template>
    `,
      standalone: true,
      imports: [DropDownButtonComponent, NgClass, NgIf, IconWrapperComponent, NgForOf]
    }]
  }], function() {
    return [];
  }, {
    arrowIcon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    showText: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    look: [{
      type: Input
    }],
    primary: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dropdownButton: [{
      type: ViewChild,
      args: ["dropdownButton", {
        read: ElementRef,
        static: true
      }]
    }],
    dropDownButtonComponent: [{
      type: ViewChild,
      args: [DropDownButtonComponent, {
        static: false
      }]
    }],
    overflowListItems: [{
      type: ViewChildren,
      args: ["listItem"]
    }],
    toolbarDropDownButton: [{
      type: ViewChild,
      args: ["toolbarDropDownButton", {
        static: false
      }]
    }]
  });
})();
var ToolBarSplitButtonComponent = class extends ToolBarToolComponent {
  constructor() {
    super();
    this.showIcon = "both";
    this.fillMode = "solid";
    this.themeColor = "base";
    this.arrowButtonIcon = "caret-alt-down";
    this.arrowButtonSvgIcon = caretAltDownIcon;
    this.textField = "text";
    this.buttonClick = new EventEmitter();
    this.itemClick = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.toolbarOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this.overflowOptions = {
      text: "",
      icon: "",
      iconClass: "",
      svgIcon: null,
      imageUrl: ""
    };
    this._popupSettings = {
      animate: true,
      popupClass: ""
    };
    this.focusedIndex = -1;
    this._showText = "both";
    this.getNextKey = getNextKey();
    this.getPrevKey = getPrevKey();
    this.isBuiltInTool = true;
  }
  // showText and showIcon showIcon should be declared first
  /**
   * Specifies where button text should be displayed
   */
  set showText(value) {
    this._showText = value;
    this.setTextDisplayMode();
  }
  get showText() {
    return this._showText;
  }
  /**
   * Sets the text of the SplitButton ([see example](slug:controltypes_toolbar#toc-split-buttons).
   */
  set text(text) {
    this._text = text;
    this.setTextDisplayMode();
  }
  get text() {
    return this._text;
  }
  /**
   * Defines the icon that will be rendered next to the button text
   * ([see example](slug:controltypes_toolbar#toc-split-buttons)).
   */
  set icon(icon) {
    this.toolbarOptions.icon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.icon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines an SVGIcon to be rendered within the main button.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    const isIconSet = this.toolbarOptions.icon || this.overflowOptions.icon;
    const isIconClassSet = this.toolbarOptions.iconClass || this.overflowOptions.iconClass;
    if (isDevMode() && icon && isIconSet && isIconClassSet) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this.toolbarOptions.svgIcon = getValueForLocation(icon, this.showIcon, false);
    this.overflowOptions.svgIcon = getValueForLocation(icon, this.showIcon, true);
  }
  /**
   * Defines an icon with a custom CSS class that will be rendered next to the button text.
   */
  set iconClass(iconClass) {
    this.toolbarOptions.iconClass = getValueForLocation(iconClass, this.showIcon, false);
    this.overflowOptions.iconClass = getValueForLocation(iconClass, this.showIcon, true);
  }
  /**
   * Defines the location of an image that will be displayed next to the button text.
   */
  set imageUrl(imageUrl) {
    this.toolbarOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, false);
    this.overflowOptions.imageUrl = getValueForLocation(imageUrl, this.showIcon, true);
  }
  /**
   * Configures the popup of the SplitButton.
   *
   * The available options are:
   * - `animate:Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass:String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(value) {
    this._popupSettings = value;
  }
  get popupSettings() {
    if (!this._popupSettings) {
      this._popupSettings = {
        animate: true,
        popupClass: ""
      };
    }
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  set look(look) {
    if (look) {
      this.fillMode = look === "default" ? "solid" : look;
    }
  }
  /**
   * Sets the data of the SplitButton ([see example]({% slug controltypes_toolbar %}#toc-splitbuttons)).
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  ngOnInit() {
    this.setTextDisplayMode();
  }
  get overflowButtons() {
    return [this.overflowMainButton, ...this.overflowListItems.toArray().filter((el) => !el.nativeElement.classList.contains("k-disabled"))];
  }
  /**
   * @hidden
   */
  onButtonListClick(ev) {
    this.focusedIndex = this.overflowButtons.findIndex((b) => b.nativeElement.contains(ev.target));
  }
  /**
   * @hidden
   */
  onMainButtonClick(ev) {
    this.buttonClick.emit(ev);
    this.focusedIndex = 0;
  }
  /**
   * @hidden
   */
  canFocus() {
    return !this.disabled;
  }
  /**
   * @hidden
   */
  focus(ev = {}) {
    if (!this.overflows) {
      if (ev.type === "focus" || ev.type === "keydown") {
        this.toolbarSplitButton.focus();
      }
    } else if (this.overflowButtons.length > 0) {
      this.focusedIndex = getIndexOfFocused(this.getPrevKey(), this.getNextKey(), this.overflowButtons.map((ob) => ob.nativeElement))(ev);
      this.focusButton(this.focusedIndex, ev);
    }
  }
  /**
   * @hidden
   */
  handleKey(ev) {
    if (!this.overflows && (ev.keyCode === this.getPrevKey(this.overflows) || ev.keyCode === this.getNextKey(this.overflows))) {
      return false;
    }
    if (this.overflows) {
      const peekAtIndex = makePeeker(this.overflowButtons);
      const isUnmodified = areEqual(this.focusedIndex);
      this.focusedIndex = seekFocusedIndex(this.getPrevKey(), this.getNextKey(), peekAtIndex)(this.focusedIndex, ev);
      this.focusButton(this.focusedIndex, ev);
      return !isUnmodified(this.focusedIndex);
    }
  }
  /**
   * @hidden
   */
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  /**
   * @hidden
   */
  handleClick(ev, item, index) {
    this.onButtonListClick(ev);
    const dataItem = this.data[index];
    if (item.click) {
      item.click(dataItem);
    }
    this.itemClick.emit(dataItem);
  }
  focusButton(index, ev) {
    if (!ev.type || ev.type === "focus" || ev.type === "keydown" || ev.type === "click") {
      this.overflowButtons[index].nativeElement.focus();
    }
  }
  setTextDisplayMode() {
    this.toolbarOptions.text = this.showText === "overflow" ? void 0 : this.text;
    this.overflowOptions.text = this.showText === "toolbar" ? void 0 : this.text;
  }
};
ToolBarSplitButtonComponent.ɵfac = function ToolBarSplitButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarSplitButtonComponent)();
};
ToolBarSplitButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarSplitButtonComponent,
  selectors: [["kendo-toolbar-splitbutton"]],
  viewQuery: function ToolBarSplitButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c12, 5);
      ɵɵviewQuery(_c13, 5, ElementRef);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarSplitButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowMainButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overflowListItems = _t);
    }
  },
  inputs: {
    showText: "showText",
    showIcon: "showIcon",
    text: "text",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    imageUrl: "imageUrl",
    disabled: "disabled",
    popupSettings: "popupSettings",
    fillMode: "fillMode",
    themeColor: "themeColor",
    look: "look",
    buttonClass: "buttonClass",
    arrowButtonClass: "arrowButtonClass",
    arrowButtonIcon: "arrowButtonIcon",
    arrowButtonSvgIcon: "arrowButtonSvgIcon",
    textField: "textField",
    data: "data"
  },
  outputs: {
    buttonClick: "buttonClick",
    itemClick: "itemClick",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoToolBarSplitButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarSplitButtonComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 0,
  consts: [["toolbarTemplate", ""], ["popupTemplate", ""], ["toolbarSplitButton", ""], ["overflowMainButton", ""], ["listItem", ""], [1, "k-toolbar-split-button", 3, "buttonClick", "open", "close", "itemClick", "data", "text", "icon", "iconClass", "svgIcon", "imageUrl", "buttonClass", "arrowButtonClass", "arrowButtonIcon", "arrowButtonSvgIcon", "disabled", "tabIndex", "textField", "popupSettings", "fillMode", "themeColor"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "click", "ngClass"], [3, "ngClass"], [3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "name", "customFontClass", "svgIcon"], [1, "k-menu-link-text"], ["tabindex", "-1", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "click"], [1, "k-link", "k-menu-link"]],
  template: function ToolBarSplitButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarSplitButtonComponent_ng_template_0_Template, 2, 16, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ToolBarSplitButtonComponent_ng_template_2_Template, 6, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SplitButtonComponent, NgClass, NgIf, IconWrapperComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarSplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarSplitButton",
      providers: [{
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarSplitButtonComponent)
      }],
      selector: "kendo-toolbar-splitbutton",
      template: `
        <ng-template #toolbarTemplate>
            <kendo-splitbutton
                #toolbarSplitButton
                class="k-toolbar-split-button"
                [data]="data"
                [text]="toolbarOptions.text"
                [icon]="toolbarOptions.icon"
                [iconClass]="toolbarOptions.iconClass"
                [svgIcon]="toolbarOptions.svgIcon"
                [imageUrl]="toolbarOptions.imageUrl"
                [buttonClass]="buttonClass"
                [arrowButtonClass]="arrowButtonClass"
                [arrowButtonIcon]="arrowButtonIcon"
                [arrowButtonSvgIcon]="arrowButtonSvgIcon"
                [disabled]="disabled"
                [tabIndex]="-1"
                [textField]="textField"
                [popupSettings]="popupSettings"
                [fillMode]="fillMode"
                [themeColor]="fillMode ? themeColor : null"
                (buttonClick)="buttonClick.emit($event)"
                (open)="open.emit($event)"
                (close)="close.emit($event)"
                (itemClick)="itemClick.emit($event)"
            ></kendo-splitbutton>
        </ng-template>
        <ng-template #popupTemplate>
            <div #overflowMainButton
                tabindex="-1"
                role="menuitem"
                class="k-item k-menu-item"
                [class.k-disabled]="disabled"
                [ngClass]="buttonClass"
                (click)="onMainButtonClick($event)">
                <span
                    [ngClass]="{'k-link': true, 'k-menu-link': true}"
                >
                    <kendo-icon-wrapper
                        *ngIf="overflowOptions.icon || overflowOptions.iconClass || overflowOptions.svgIcon"
                        [name]="overflowOptions.icon"
                        [customFontClass]="overflowOptions.iconClass"
                        [svgIcon]="overflowOptions.svgIcon"
                    >
                    </kendo-icon-wrapper>
                    <span *ngIf="overflowOptions.text" class="k-menu-link-text">{{overflowOptions.text}}</span>
                </span>
            </div>
            <ng-container *ngFor="let item of data; let i = index">
            <div #listItem
                tabindex="-1"
                role="menuitem"
                class="k-item k-menu-item"
                [class.k-disabled]="disabled || item.disabled"
                (click)="handleClick($event, item, i)">
                <span
                    class="k-link k-menu-link"
                >
                    <kendo-icon-wrapper
                        *ngIf="item.icon || item.iconClass || item.svgIcon"
                        [name]="item.icon"
                        [customFontClass]="item.iconClass"
                        [svgIcon]="item.svgIcon"
                    >
                    </kendo-icon-wrapper>
                    <span *ngIf="getText(item)" class="k-menu-link-text">{{ getText(item) }}</span>
                </span>
            </div>
            </ng-container>
        </ng-template>
    `,
      standalone: true,
      imports: [SplitButtonComponent, NgClass, NgIf, IconWrapperComponent, NgForOf]
    }]
  }], function() {
    return [];
  }, {
    showText: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    look: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    arrowButtonClass: [{
      type: Input
    }],
    arrowButtonIcon: [{
      type: Input
    }],
    arrowButtonSvgIcon: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    toolbarSplitButton: [{
      type: ViewChild,
      args: ["toolbarSplitButton", {
        static: false
      }]
    }],
    overflowMainButton: [{
      type: ViewChild,
      args: ["overflowMainButton", {
        read: ElementRef
      }]
    }],
    overflowListItems: [{
      type: ViewChildren,
      args: ["listItem"]
    }]
  });
})();
var ToolBarSeparatorComponent = class extends ToolBarToolComponent {
  constructor() {
    super();
    this.isBuiltInTool = true;
  }
  /**
   * @hidden
   */
  canFocus() {
    return false;
  }
  // If this is not here, the docs display info from its parent(ToolBarToolComponent).
  /**
   * @hidden
   */
  focus() {
  }
  // If this is not here, the docs display info from its parent(ToolBarToolComponent).
  /**
   * @hidden
   */
  handleKey() {
    return false;
  }
  ngAfterViewInit() {
    if (!this.popupTemplate) {
      this.popupTemplate = this.toolbarTemplate;
    }
  }
};
ToolBarSeparatorComponent.ɵfac = function ToolBarSeparatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarSeparatorComponent)();
};
ToolBarSeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarSeparatorComponent,
  selectors: [["kendo-toolbar-separator"]],
  viewQuery: function ToolBarSeparatorComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.separator = _t.first);
    }
  },
  exportAs: ["kendoToolBarSeparator"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarSeparatorComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 0,
  consts: [["toolbarTemplate", ""], ["popupTemplate", ""], [1, "k-separator"], [1, "k-item", "k-menu-item"], [1, "k-separator", "k-separator-horizontal"]],
  template: function ToolBarSeparatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarSeparatorComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ToolBarSeparatorComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarSeparatorComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarSeparator",
      providers: [{
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarSeparatorComponent)
      }],
      selector: "kendo-toolbar-separator",
      template: `
        <ng-template #toolbarTemplate>
            <div class="k-separator"></div>
        </ng-template>

        <ng-template #popupTemplate>
            <div class="k-item k-menu-item">
                <div class="k-separator k-separator-horizontal"></div>
            </div>
        </ng-template>
    `,
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    separator: [{
      type: ViewChild,
      args: ["separator", {
        static: false
      }]
    }]
  });
})();
var ToolBarSpacerComponent = class extends ToolBarToolComponent {
  constructor() {
    super();
    this.__isSpacer = true;
    this.isBuiltInTool = true;
  }
  /**
   * @hidden
   */
  canFocus() {
    return false;
  }
  // If this is not here, the docs display info from its parent(ToolBarToolComponent).
  /**
   * @hidden
   */
  focus() {
  }
  // If this is not here, the docs display info from its parent(ToolBarToolComponent).
  /**
   * @hidden
   */
  handleKey() {
    return false;
  }
  ngAfterViewInit() {
    if (!this.popupTemplate) {
      this.popupTemplate = this.toolbarTemplate;
    }
  }
};
ToolBarSpacerComponent.ɵfac = function ToolBarSpacerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarSpacerComponent)();
};
ToolBarSpacerComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolBarSpacerComponent,
  selectors: [["kendo-toolbar-spacer"]],
  viewQuery: function ToolBarSpacerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
    }
  },
  exportAs: ["kendoToolBarSpacer"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolBarToolComponent,
    useExisting: forwardRef(() => ToolBarSpacerComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["toolbarTemplate", ""], [1, "k-spacer"]],
  template: function ToolBarSpacerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ToolBarSpacerComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarSpacerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoToolBarSpacer",
      providers: [{
        provide: ToolBarToolComponent,
        useExisting: forwardRef(() => ToolBarSpacerComponent)
      }],
      selector: "kendo-toolbar-spacer",
      template: `
        <ng-template #toolbarTemplate>
            <div class="k-spacer"></div>
        </ng-template>
    `,
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    toolbarTemplate: [{
      type: ViewChild,
      args: ["toolbarTemplate", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }]
  });
})();
var ToolbarCustomMessagesComponent = class extends ToolbarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
ToolbarCustomMessagesComponent.ɵfac = function ToolbarCustomMessagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolbarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
ToolbarCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: ToolbarCustomMessagesComponent,
  selectors: [["kendo-toolbar-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ToolbarMessages,
    useExisting: forwardRef(() => ToolbarCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ToolbarCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ToolbarMessages,
        useExisting: forwardRef(() => ToolbarCustomMessagesComponent)
      }],
      selector: "kendo-toolbar-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var KENDO_TOOLBAR = [ToolBarComponent, ToolbarCustomMessagesComponent, ToolBarButtonComponent, ToolBarButtonGroupComponent, ToolBarDropDownButtonComponent, ToolBarSeparatorComponent, ToolBarSpacerComponent, ToolBarSplitButtonComponent, ToolBarToolComponent];
var ToolBarModule = class {
};
ToolBarModule.ɵfac = function ToolBarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToolBarModule)();
};
ToolBarModule.ɵmod = ɵɵdefineNgModule({
  type: ToolBarModule,
  imports: [ToolBarComponent, ToolbarCustomMessagesComponent, ToolBarButtonComponent, ToolBarButtonGroupComponent, ToolBarDropDownButtonComponent, ToolBarSeparatorComponent, ToolBarSpacerComponent, ToolBarSplitButtonComponent, ToolBarToolComponent],
  exports: [ToolBarComponent, ToolbarCustomMessagesComponent, ToolBarButtonComponent, ToolBarButtonGroupComponent, ToolBarDropDownButtonComponent, ToolBarSeparatorComponent, ToolBarSpacerComponent, ToolBarSplitButtonComponent, ToolBarToolComponent]
});
ToolBarModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [ToolBarComponent, ToolbarCustomMessagesComponent, ToolBarButtonComponent, ToolBarButtonGroupComponent, ToolBarDropDownButtonComponent, ToolBarSeparatorComponent, ToolBarSpacerComponent, ToolBarSplitButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_TOOLBAR],
      imports: [...KENDO_TOOLBAR],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  RefreshService,
  ToolBarToolComponent,
  LocalizedToolbarMessagesDirective,
  ToolBarComponent,
  ToolBarButtonComponent,
  ToolBarButtonGroupComponent,
  ToolBarDropDownButtonComponent,
  ToolBarSplitButtonComponent,
  ToolBarSeparatorComponent,
  ToolBarSpacerComponent,
  ToolbarCustomMessagesComponent,
  KENDO_TOOLBAR,
  ToolBarModule
};
//# sourceMappingURL=chunk-JRT563BU.js.map
