import {
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  caretAltDownIcon,
  moreVerticalIcon,
  xCircleIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  EventsOutsideAngularDirective,
  Keys,
  MultiTabStop,
  ResizeBatchService,
  TemplateContextDirective,
  anyChanged,
  guid,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  isFirefox,
  isPresent,
  isSafari
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
  AnimationBuilder,
  animate,
  query,
  sequence,
  stagger,
  style
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
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
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
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
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
  fromEvent,
  merge
} from "./chunk-PC7SNX6C.js";
import {
  Subject,
  Subscription,
  filter,
  take,
  tap
} from "./chunk-NXOOB3F7.js";

// node_modules/@progress/kendo-angular-buttons/fesm2020/progress-kendo-angular-buttons.mjs
var _c0 = ["kendoButton", ""];
var _c1 = ["*"];
function ButtonComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ButtonComponent_span_1_Template(rf, ctx) {
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
function ButtonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
function ButtonComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.arrowIcon.iconClass);
  }
}
function ButtonComponent_kendo_icon_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.arrowIcon.icon || "caret-alt-down")("svgIcon", ctx_r0.arrowIcon.svgIcon || ctx_r0.caretAltDownIcon);
  }
}
var _c2 = [[["", "kendoButton", ""], ["kendo-button"]]];
var _c3 = ["[kendoButton], kendo-button"];
function ChipComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ChipComponent_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("customFontClass", ctx_r0.customIconClass);
  }
}
function ChipComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelement(1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.chipAvatarClass);
  }
}
function ChipComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
  }
}
function ChipComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!label"]);
  }
}
function ChipComponent_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function ChipComponent_span_6_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMenuClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.defaultMenuIcon || ctx_r0.menuSvgIcon)("customFontClass", ctx_r0.menuIcon);
  }
}
function ChipComponent_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17);
    ɵɵlistener("click", function ChipComponent_span_6_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRemoveClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.removeSvgIcon || ctx_r0.defaultRemoveIcon)("customFontClass", ctx_r0.removeIcon);
  }
}
function ChipComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, ChipComponent_span_6_span_1_Template, 2, 2, "span", 13)(2, ChipComponent_span_6_span_2_Template, 2, 2, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.hasMenu);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.removable);
  }
}
var _c4 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
function ListComponent_li_1_ng_template_1_ng_template_1_Template(rf, ctx) {
}
function ListComponent_li_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("templateContext", ɵɵpureFunction2(4, _c4, ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef, dataItem_r4));
  }
}
function ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("name", dataItem_r4.icon)("svgIcon", dataItem_r4.svgIcon)("customFontClass", dataItem_r4.iconClass);
  }
}
function ListComponent_li_1_ng_template_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("src", dataItem_r4.imageUrl, ɵɵsanitizeUrl)("alt", dataItem_r4.imageAlt);
  }
}
function ListComponent_li_1_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getText(dataItem_r4), " ");
  }
}
function ListComponent_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 6)(2, ListComponent_li_1_ng_template_2_img_2_Template, 1, 2, "img", 7)(3, ListComponent_li_1_ng_template_2_span_3_Template, 2, 1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.icon || dataItem_r4.iconClass || dataItem_r4.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.imageUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getText(dataItem_r4));
  }
}
function ListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("click", function ListComponent_li_1_Template_li_click_0_listener($event) {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      $event.stopImmediatePropagation();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    })("blur", function ListComponent_li_1_Template_li_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onBlur());
    });
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_Template, 2, 7, "ng-template", 3)(2, ListComponent_li_1_ng_template_2_Template, 4, 6, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("index", index_r2);
    ɵɵattribute("aria-disabled", dataItem_r4.disabled ? true : false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef));
  }
}
var _c5 = ["button"];
var _c6 = ["buttonList"];
var _c7 = ["popupTemplate"];
var _c8 = ["container"];
function DropDownButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 5, 3);
    ɵɵlistener("onItemClick", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event));
    })("keydown", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyDownHandler($event));
    })("keyup", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.listId)("data", ctx_r2.data)("textField", ctx_r2.textField)("itemTemplate", ctx_r2.itemTemplate)("size", ctx_r2.size);
    ɵɵattribute("dir", ctx_r2.dir)("aria-labelledby", ctx_r2.buttonId);
  }
}
var _c9 = ["kendoDialItem", ""];
var _c10 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  isFocused: a2
});
function DialItemComponent_0_ng_template_0_Template(rf, ctx) {
}
function DialItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dialItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c10, ctx_r0.item, ctx_r0.index, ctx_r0.isFocused));
  }
}
function DialItemComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.label);
  }
}
function DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function DialItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialItemComponent_ng_container_1_span_1_Template, 2, 1, "span", 2)(2, DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.label);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon);
  }
}
var _c11 = ["kendoDialList", ""];
function DialListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", ctx_r2.dialItems[idx_r2])("index", idx_r2)("dialItemTemplate", ctx_r2.dialItemTemplate)("isFocused", ctx_r2.isFocused(idx_r2))("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("align", ctx_r2.align);
  }
}
var _c12 = (a0, a1, a2) => ({
  keydown: a0,
  click: a1,
  pointerdown: a2
});
var _c13 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function FloatingActionButtonComponent_2_ng_template_0_Template(rf, ctx) {
}
function FloatingActionButtonComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FloatingActionButtonComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fabTemplate == null ? null : ctx_r1.fabTemplate.templateRef);
  }
}
function FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.icon)("customFontClass", ctx_r1.iconClass)("svgIcon", ctx_r1.svgIcon);
  }
}
function FloatingActionButtonComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 5)(2, FloatingActionButtonComponent_ng_container_3_span_2_Template, 2, 1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon || ctx_r1.iconClass || ctx_r1.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 9);
    ɵɵlistener("click", function FloatingActionButtonComponent_ng_template_4_Template_ul_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.dialListId)("ngClass", ctx_r1.dialClass)("dialItems", ctx_r1.dialItems)("dialItemTemplate", ctx_r1.dialItemTemplate == null ? null : ctx_r1.dialItemTemplate.templateRef)("align", ctx_r1.align)("kendoEventsOutsideAngular", ɵɵpureFunction2(7, _c13, ctx_r1.keyDownHandler.bind(ctx_r1), ctx_r1.focusOutHandler.bind(ctx_r1)));
    ɵɵattribute("aria-labelledby", ctx_r1.id);
  }
}
var _c14 = ["arrowButton"];
function SplitButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
  }
}
function SplitButtonComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 10);
    ɵɵlistener("onItemClick", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("keydown", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyDownHandler($event));
    })("keyup", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate)("size", ctx_r1.size);
    ɵɵattribute("dir", ctx_r1.dir);
  }
}
var KendoButtonService = class {
  constructor() {
    this.buttonClicked = new Subject();
    this.buttonClicked$ = this.buttonClicked.asObservable();
  }
  click(button) {
    this.buttonClicked.next(button);
  }
};
KendoButtonService.ɵfac = function KendoButtonService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || KendoButtonService)();
};
KendoButtonService.ɵprov = ɵɵdefineInjectable({
  token: KendoButtonService,
  factory: KendoButtonService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KendoButtonService, [{
    type: Injectable
  }], null, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-buttons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372178,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var resolvedPromise = Promise.resolve(null);
var isPresent2 = (value) => value !== null && value !== void 0;
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
  return {
    toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
    toAdd: newValue !== "none" ? `k-${componentType}-${fillMode}-${newValue}` : ""
  };
};
var SPAN_TAG_NAME = "SPAN";
var BUTTON_TAG_NAME = "BUTTON";
var KENDO_BUTTON_TAG_NAME = "KENDO-BUTTON";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_THEME_COLOR$2 = "base";
var DEFAULT_FILL_MODE$3 = "solid";
var ButtonComponent = class {
  constructor(element, renderer, service, localization, ngZone) {
    this.renderer = renderer;
    this.service = service;
    this.ngZone = ngZone;
    this.arrowIcon = false;
    this.toggleable = false;
    this.role = "button";
    this.selectedChange = new EventEmitter();
    this.click = new EventEmitter();
    this.isDisabled = false;
    this.caretAltDownIcon = caretAltDownIcon;
    this._size = DEFAULT_SIZE$2;
    this._rounded = DEFAULT_ROUNDED$3;
    this._fillMode = DEFAULT_FILL_MODE$3;
    this._themeColor = DEFAULT_THEME_COLOR$2;
    this._focused = false;
    this.subs = new Subscription();
    validatePackage(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  /**
   * Backwards-compatible alias
   *
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  /**
   * @hidden
   */
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Sets the selected state of the Button.
   *
   * @default false
   */
  get selected() {
    return this._selected || false;
  }
  set selected(value) {
    this._selected = value;
  }
  /**
   * @hidden
   */
  set tabIndex(index) {
    this.element.tabIndex = index;
  }
  get tabIndex() {
    return this.element.tabIndex;
  }
  /**
   * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
   * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
   */
  set iconClass(value) {
    if (isDevMode() && value && (this.icon || this.svgIcon)) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Defines the name for an existing font icon in the Kendo UI theme.
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * If set to `true`, it disables the Button.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * The size property specifies the padding of the Button
   * ([see example]({% slug appearance_button %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Button
   * ([see example](slug:appearance_button#toc-roundness)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Button
   * ([see example](slug:appearance_button#toc-fill-mode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Button allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example](slug:appearance_button#toc-theme-colors)).
   *
   * @default 'base'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$2;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  set isFocused(isFocused) {
    this.toggleClass("k-focus", isFocused);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  get classButton() {
    return true;
  }
  get isToggleable() {
    return this.toggleable;
  }
  get iconButtonClass() {
    const hasIcon = this.icon || this.iconClass || this.imageUrl || this.svgIcon;
    return hasIcon && !this.hasText;
  }
  get roleSetter() {
    const isButtonElementAndRole = this.element.tagName === BUTTON_TAG_NAME && this.role === "button";
    return isButtonElementAndRole ? void 0 : this.role;
  }
  get classDisabled() {
    return this.isDisabled;
  }
  get classActive() {
    return this.selected;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * @hidden
   */
  set primary(value) {
    this.themeColor = value ? "primary" : "base";
  }
  /**
   * @hidden
   */
  set look(value) {
    switch (value) {
      case "default":
        this.fillMode = "solid";
        break;
      default:
        this.fillMode = value;
        break;
    }
  }
  /**
   * Alias for ElementRef.nativeElement to workaround
   * ViewChild() selectors that used to return the host element before v11.
   *
   * @hidden
   */
  get nativeElement() {
    return this.element;
  }
  ngOnInit() {
    const elementTagName = this.element.tagName;
    const isSpanOrKendoButton = elementTagName === SPAN_TAG_NAME || elementTagName === KENDO_BUTTON_TAG_NAME;
    if (!this.element.hasAttribute("role") && this.togglable) {
      this.toggleAriaPressed(this.toggleable);
    }
    if (this.role) {
      const isButtonElementAndRole = elementTagName === BUTTON_TAG_NAME && this.role === "button";
      if (!isButtonElementAndRole) {
        this.setAttribute("role", this.role);
      }
    }
    if (isSpanOrKendoButton && !this.isDisabled) {
      this.tabIndex = 0;
    }
    if (isDevMode() && isSpanOrKendoButton) {
      console.warn(`As of package v16, the "span[kendoButton]" and "kendo-button" selectors are deprecated and can
            be removed in a future major version. We recommend using the "button[kendoButton]" selector
            to avoid discrepancies between the behavior of the "ButtonComponent" and the native HTML Button element.`);
    }
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this._onButtonClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "keydown", (event) => {
        const isSpaceOrEnter = event.keyCode === Keys.Space || event.keyCode === Keys.Enter;
        if (isSpanOrKendoButton && isSpaceOrEnter) {
          this.ngZone.run(() => {
            this.click.emit(event);
          });
          this._onButtonClick();
        }
      }));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const elementTagName2 = this.element.tagName;
        const isButton = elementTagName2 === BUTTON_TAG_NAME;
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isButton && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnChanges(change) {
    if (isChanged("togglable", change) || isChanged("toggleable", change)) {
      this.toggleAriaPressed(this.toggleable);
    }
  }
  ngAfterViewInit() {
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * Focuses the Button component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Blurs the Button component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  /**
   * @hidden
   */
  setAttribute(attribute, value) {
    this.renderer.setAttribute(this.element, attribute, value);
  }
  /**
   * @hidden
   */
  removeAttribute(attribute) {
    this.renderer.removeAttribute(this.element, attribute);
  }
  /**
   * @hidden
   *
   * Internal setter that triggers selectedChange
   */
  setSelected(value) {
    const changed = this.selected !== value;
    this.selected = value;
    this.setAttribute("aria-pressed", this.selected.toString());
    this.toggleClass("k-selected", this.selected);
    if (changed && hasObservers(this.selectedChange)) {
      this.ngZone.run(() => {
        this.selectedChange.emit(value);
      });
    }
  }
  toggleAriaPressed(shouldSet) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (shouldSet) {
      this.setAttribute("aria-pressed", this.selected.toString());
    } else {
      this.removeAttribute("aria-pressed");
    }
  }
  toggleClass(className, add) {
    if (add) {
      this.renderer.addClass(this.element, className);
    } else {
      this.renderer.removeClass(this.element, className);
    }
  }
  _onButtonClick() {
    if (!this.disabled && this.service) {
      this.ngZone.run(() => {
        this.service.click(this);
      });
    }
    if (this.togglable && !this.service) {
      this.setSelected(!this.selected);
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("button", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
};
ButtonComponent.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(KendoButtonService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonComponent,
  selectors: [["button", "kendoButton", ""], ["span", "kendoButton", ""], ["kendo-button"]],
  hostVars: 13,
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function ButtonComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function ButtonComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.roleSetter)("aria-disabled", ctx.classDisabled)("dir", ctx.getDirection);
      ɵɵclassProp("k-button", ctx.classButton)("k-toggle-button", ctx.isToggleable)("k-icon-button", ctx.iconButtonClass)("k-disabled", ctx.classDisabled)("k-selected", ctx.classActive);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    toggleable: "toggleable",
    togglable: "togglable",
    selected: "selected",
    tabIndex: "tabIndex",
    imageUrl: "imageUrl",
    iconClass: "iconClass",
    icon: "icon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    svgIcon: "svgIcon",
    role: "role",
    primary: "primary",
    look: "look"
  },
  outputs: {
    selectedChange: "selectedChange",
    click: "click"
  },
  exportAs: ["kendoButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 7,
  vars: 5,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ButtonComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ButtonComponent_span_1_Template, 2, 1, "span", 1)(2, ButtonComponent_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, ButtonComponent_span_5_Template, 1, 1, "span", 2)(6, ButtonComponent_kendo_icon_wrapper_6_Template, 1, 2, "kendo-icon-wrapper", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.arrowIcon.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.arrowIcon && !ctx.arrowIcon.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoButton], span[kendoButton], kendo-button",
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
        <span *ngIf="$any(arrowIcon).iconClass" class="k-button-icon" [ngClass]="$any(arrowIcon).iconClass"></span>
        <kendo-icon-wrapper
            *ngIf="arrowIcon && !$any(arrowIcon).iconClass"
            innerCssClass="k-button-icon"
            [name]="$any(arrowIcon).icon || 'caret-alt-down'"
            [svgIcon]="$any(arrowIcon).svgIcon || caretAltDownIcon"></kendo-icon-wrapper>
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
      type: KendoButtonService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    disabled: [{
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
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    isToggleable: [{
      type: HostBinding,
      args: ["class.k-toggle-button"]
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    roleSetter: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    classActive: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    primary: [{
      type: Input
    }],
    look: [{
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
var tabindex = "tabindex";
var ButtonGroupComponent = class {
  constructor(service, localization, renderer, element) {
    this.service = service;
    this.renderer = renderer;
    this.element = element;
    this.selection = "multiple";
    this.navigable = true;
    this.navigate = new EventEmitter();
    this._tabIndex = 0;
    this.currentTabIndex = 0;
    this.lastFocusedIndex = -1;
    this.subs = new Subscription();
    this.role = "group";
    this.focusHandler = () => {
      this.currentTabIndex = -1;
      this.defocus(this.buttons.toArray());
      const firstFocusableIndex = this.buttons.toArray().findIndex((current) => !current.disabled);
      const index = this.lastFocusedIndex === -1 ? firstFocusableIndex : this.lastFocusedIndex;
      this.focus(this.buttons.filter((_current, i) => {
        return i === index;
      }));
    };
    validatePackage(packageMetadata);
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabIndex(value) {
    this._tabIndex = value;
    this.currentTabIndex = value;
  }
  get tabIndex() {
    return this._tabIndex;
  }
  get wrapperClass() {
    return true;
  }
  get disabledClass() {
    return this.disabled;
  }
  get stretchedClass() {
    return !!this.width;
  }
  get dir() {
    return this.direction;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  get wrapperWidth() {
    return this.width;
  }
  get wrapperTabIndex() {
    return this.disabled ? void 0 : this.navigable ? this.currentTabIndex : void 0;
  }
  ngOnInit() {
    this.subs.add(this.service.buttonClicked$.subscribe((button) => {
      let newSelectionValue;
      if (this.isSelectionSingle()) {
        newSelectionValue = true;
        this.deactivate(this.buttons.filter((current) => current !== button));
      } else {
        if (this.navigable) {
          this.defocus(this.buttons.toArray());
        }
        newSelectionValue = !button.selected;
      }
      if (button.togglable) {
        button.setSelected(newSelectionValue);
      }
      if (this.navigable) {
        this.currentTabIndex = -1;
        this.renderer.setAttribute(button, tabindex, "0");
      }
    }));
    this.handleSubs("focus", () => this.navigable, this.focusHandler);
    this.handleSubs("keydown", () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
    this.handleSubs("focusout", (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
      this.lastFocusedIndex = this.buttons.toArray().findIndex((button) => button.tabIndex !== -1);
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    });
    this.subs.add(fromEvent(this.element.nativeElement, "focusout").pipe(filter((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement)).subscribe(() => {
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    }));
  }
  ngOnChanges(changes) {
    if (isChanged("disabled", changes)) {
      this.buttons.forEach((button) => {
        if (isPresent2(this.disabled)) {
          button.disabled = this.disabled;
        }
      });
    }
    if (isChanged("navigable", changes)) {
      if (changes["navigable"].currentValue) {
        this.defocus(this.buttons.toArray());
        this.currentTabIndex = 0;
      } else {
        this.currentTabIndex = -1;
        this.buttons.forEach((button) => this.renderer.setAttribute(button, tabindex, "0"));
      }
    }
  }
  ngAfterContentInit() {
    if (!this.navigable) {
      return;
    }
    this.defocus(this.buttons.toArray());
  }
  ngAfterViewChecked() {
    if (this.buttons.length) {
      this.renderer.addClass(this.buttons.first.element, "k-group-start");
      this.renderer.addClass(this.buttons.last.element, "k-group-end");
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  navigateFocus(event) {
    const navigationButtons = this.buttons.toArray().filter((button) => !button.disabled);
    const focusedIndex = navigationButtons.findIndex((current) => current.element.tabIndex !== -1);
    const firstIndex = 0;
    const lastIndex = navigationButtons.length - 1;
    const eventArgs = new PreventableEvent();
    if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex + 1;
        }));
      }
    }
    if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex - 1;
        }));
      }
    }
  }
  deactivate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(false);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "-1");
      }
    });
  }
  activate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(true);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "0");
      }
      button.focus();
    });
  }
  defocus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "-1");
    });
  }
  focus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "0");
      button.focus();
    });
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.isSelectionSingle() && this.buttons.filter((button) => button.selected).length > 1) {
        throw new Error("Having multiple selected buttons with single selection mode is not supported");
      }
    }
  }
  isSelectionSingle() {
    return this.selection === "single";
  }
  handleSubs(eventName, predicate, handler) {
    this.subs.add(fromEvent(this.element.nativeElement, eventName).pipe(filter(predicate)).subscribe(handler));
  }
};
ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonGroupComponent)(ɵɵdirectiveInject(KendoButtonService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
ButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonGroupComponent,
  selectors: [["kendo-buttongroup"]],
  contentQueries: function ButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t);
    }
  },
  hostVars: 12,
  hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("dir", ctx.dir)("aria-disabled", ctx.ariaDisabled)("tabindex", ctx.wrapperTabIndex);
      ɵɵstyleProp("width", ctx.wrapperWidth);
      ɵɵclassProp("k-button-group", ctx.wrapperClass)("k-disabled", ctx.disabledClass)("k-button-group-stretched", ctx.stretchedClass);
    }
  },
  inputs: {
    disabled: "disabled",
    selection: "selection",
    width: "width",
    tabIndex: "tabIndex",
    navigable: "navigable"
  },
  outputs: {
    navigate: "navigate"
  },
  exportAs: ["kendoButtonGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([KendoButtonService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.buttongroup"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButtonGroup",
      providers: [KendoButtonService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.buttongroup"
      }],
      selector: "kendo-buttongroup",
      template: `
        <ng-content select="[kendoButton], kendo-button"></ng-content>
    `,
      standalone: true
    }]
  }], function() {
    return [{
      type: KendoButtonService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    disabled: [{
      type: Input,
      args: ["disabled"]
    }],
    selection: [{
      type: Input,
      args: ["selection"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    tabIndex: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    buttons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-button-group-stretched"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    wrapperWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    wrapperTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_THEME_COLOR$1 = "base";
var DEFAULT_FILL_MODE$2 = "solid";
var ChipComponent = class {
  constructor(element, renderer, ngZone, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    this.selected = false;
    this.removable = false;
    this.hasMenu = false;
    this.disabled = false;
    this.remove = new EventEmitter();
    this.menuToggle = new EventEmitter();
    this.contentClick = new EventEmitter();
    this.tabIndex = 0;
    this.hostClass = true;
    this.defaultRemoveIcon = xCircleIcon;
    this.defaultMenuIcon = moreVerticalIcon;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._themeColor = "base";
    this.focused = false;
    this.subs = new Subscription();
    validatePackage(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the padding of the Chip
   * ([see example]({% slug appearance_chip %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Chip
   * ([see example](slug:appearance_chip#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Chip
   * ([see example](slug:appearance_chip#toc-fill-mode)).
   *
   * The possible values are:
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Chip allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example](slug:appearance_chip#toc-theme-colors)).
   *
   * The possible values are:
   * * `base` (default)
   * * `info`
   * * `success`
   * * `warning`
   * * `error`
   * * `none`
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$1;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  get hasIconClass() {
    return Boolean(this.icon || this.iconClass || this.avatarClass);
  }
  get disabledClass() {
    return this.disabled;
  }
  get selectedClass() {
    return this.selected;
  }
  get focusedClass() {
    return this.focused;
  }
  ngOnInit() {
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.renderer.setAttribute(this.element.nativeElement, "role", "button");
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(changes) {
    if (changes && changes["selected"]) {
      const hasAriaSelected = this.element.nativeElement.hasAttribute("aria-selected");
      if (!hasAriaSelected) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
      }
    }
  }
  ngAfterViewInit() {
    const chip = this.element.nativeElement;
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers(chip);
  }
  /**
   * @hidden
   */
  get kendoIconClass() {
    this.verifyIconSettings([this.iconClass, this.avatarClass]);
    return `k-i-${this.icon}`;
  }
  /**
   * @hidden
   */
  get customIconClass() {
    this.verifyIconSettings([this.icon, this.avatarClass]);
    return this.iconClass;
  }
  /**
   * @hidden
   */
  get chipAvatarClass() {
    this.verifyIconSettings([this.icon, this.iconClass]);
    return this.avatarClass;
  }
  /**
   * @hidden
   */
  get removeIconClass() {
    return this.removeIcon ? this.removeIcon : "k-i-x-circle";
  }
  /**
   * Focuses the Chip component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Chip component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  onRemoveClick(e) {
    if (this.removable) {
      this.remove.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  /**
   * @hidden
   */
  onMenuClick(e) {
    if (this.hasMenu) {
      this.menuToggle.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  attachElementEventHandlers(chip) {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chip, "focus", () => {
        this.renderer.addClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "blur", () => {
        this.renderer.removeClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "click", (e) => {
        const isActionClicked = closest(e.target, ".k-chip-action");
        if (!isActionClicked) {
          this.ngZone.run(() => {
            this.contentClick.emit({
              sender: this,
              originalEvent: e
            });
          });
        }
      }));
      this.subs.add(this.renderer.listen(chip, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  verifyIconSettings(iconsToCheck) {
    if (isDevMode()) {
      if (iconsToCheck.filter((icon) => icon !== null && icon !== void 0).length > 0) {
        this.renderer.removeClass(this.element.nativeElement, "k-chip-has-icon");
        throw new Error("Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.");
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element.nativeElement;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("chip", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    if (this.disabled) {
      return;
    }
    if (isEnterOrSpace) {
      this.ngZone.run(() => {
        this.contentClick.emit({
          sender: this,
          originalEvent: e
        });
      });
    } else if (isDeleteOrBackspace && this.removable) {
      this.ngZone.run(() => {
        this.remove.emit({
          sender: this,
          originalEvent: e
        });
      });
    }
  }
};
ChipComponent.ɵfac = function ChipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
ChipComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipComponent,
  selectors: [["kendo-chip"]],
  hostVars: 13,
  hostBindings: function ChipComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.disabledClass)("dir", ctx.direction);
      ɵɵclassProp("k-chip", ctx.hostClass)("k-chip-has-icon", ctx.hasIconClass)("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass)("k-focus", ctx.focusedClass);
    }
  },
  inputs: {
    label: "label",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    avatarClass: "avatarClass",
    selected: "selected",
    removable: "removable",
    removeIcon: "removeIcon",
    removeSvgIcon: "removeSvgIcon",
    hasMenu: "hasMenu",
    menuIcon: "menuIcon",
    menuSvgIcon: "menuSvgIcon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor"
  },
  outputs: {
    remove: "remove",
    menuToggle: "menuToggle",
    contentClick: "contentClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chip"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 6,
  consts: [["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass", 4, "ngIf"], ["class", "k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full", 4, "ngIf"], [1, "k-chip-content"], ["class", "k-chip-label", 4, "ngIf"], [4, "ngIf"], ["class", "k-chip-actions", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass"], [1, "k-chip-avatar", "k-avatar", "k-avatar-md", "k-avatar-solid", "k-avatar-solid-primary", "k-rounded-full"], [1, "k-avatar-image", 3, "ngClass"], [1, "k-chip-label"], [1, "k-chip-actions"], ["class", "k-chip-action k-chip-more-action", 3, "click", 4, "ngIf"], ["class", "k-chip-action k-chip-remove-action", 3, "click", 4, "ngIf"], [1, "k-chip-action", "k-chip-more-action", 3, "click"], ["name", "more-vertical", "size", "small", 3, "svgIcon", "customFontClass"], [1, "k-chip-action", "k-chip-remove-action", 3, "click"], ["name", "x-circle", "size", "small", 3, "svgIcon", "customFontClass"]],
  template: function ChipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ChipComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ChipComponent_kendo_icon_wrapper_1_Template, 1, 1, "kendo-icon-wrapper", 1)(2, ChipComponent_span_2_Template, 2, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵtemplate(4, ChipComponent_span_4_Template, 2, 1, "span", 4)(5, ChipComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
      ɵɵelementEnd();
      ɵɵtemplate(6, ChipComponent_span_6_Template, 3, 2, "span", 6);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.avatarClass);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.label);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.label);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasMenu || ctx.removable);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chip",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            size="small"
            innerCssClass="k-chip-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>

        <kendo-icon-wrapper
            *ngIf="iconClass"
            size="small"
            innerCssClass="k-chip-icon"
            [customFontClass]="customIconClass"></kendo-icon-wrapper>

        <span
            *ngIf="avatarClass"
            class="k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full">
            <span class="k-avatar-image" [ngClass]="chipAvatarClass"></span>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions" *ngIf="hasMenu || removable">
            <span class="k-chip-action k-chip-more-action"
                *ngIf="hasMenu"
                (click)="onMenuClick($event)">
                <kendo-icon-wrapper
                    name="more-vertical"
                    size="small"
                    [svgIcon]="defaultMenuIcon || menuSvgIcon"
                    [customFontClass]="menuIcon"></kendo-icon-wrapper>
            </span>
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)">
                <kendo-icon-wrapper
                    name="x-circle"
                    size="small"
                    [svgIcon]="removeSvgIcon || defaultRemoveIcon"
                    [customFontClass]="removeIcon"></kendo-icon-wrapper>
            </span>
        </span>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chip"
      }],
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    label: [{
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
    avatarClass: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    removeSvgIcon: [{
      type: Input
    }],
    hasMenu: [{
      type: Input
    }],
    menuIcon: [{
      type: Input
    }],
    menuSvgIcon: [{
      type: Input
    }],
    disabled: [{
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
    themeColor: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    menuToggle: [{
      type: Output
    }],
    contentClick: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip"]
    }],
    hasIconClass: [{
      type: HostBinding,
      args: ["class.k-chip-has-icon"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ChipListComponent = class {
  constructor(localizationService, renderer, element, ngZone) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.element = element;
    this.ngZone = ngZone;
    this.hostClass = true;
    this.orientation = "horizontal";
    this.selection = "none";
    this.selectedChange = new EventEmitter();
    this.remove = new EventEmitter();
    this.role = "listbox";
    this._size = "medium";
    this.subs = new Subscription();
    this._navigable = false;
    this.currentActiveIndex = 0;
    validatePackage(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the gap between the Chips in the ChipList
   * ([see example]({% slug appearance_chiplist %}#toc-size)).
   *
   * The possible values are:
   * * `'small'`
   * * `'medium'` (default)
   * * `'large'`
   * * `none`
   */
  set size(size) {
    const sizeValue = size ? size : "medium";
    this.handleClasses(sizeValue, "size");
    this._size = sizeValue;
  }
  get size() {
    return this._size;
  }
  get single() {
    return this.selection === "single";
  }
  get multiple() {
    return this.selection === "multiple";
  }
  /**
   * @hidden
   */
  onClick($event) {
    const target = $event.target;
    const isRemoveClicked = closest(target, ".k-chip-remove-action");
    const clickedChip = closest(target, ".k-chip");
    const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
    this.currentActiveIndex = this.chips.toArray().indexOf(chip);
    chip && chip.focus();
    if (chip && this.navigable) {
      this.chips.forEach((c) => {
        this.renderer.setAttribute(c.element.nativeElement, "tabindex", "-1");
      });
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
    }
    if (isRemoveClicked && clickedChip) {
      const removeEventArgs = {
        sender: this,
        originalEvent: $event,
        removedChip: chip
      };
      this.remove.emit(removeEventArgs);
    }
    if (this.selection !== "none" && clickedChip && !isRemoveClicked) {
      this.setSelection(chip);
    }
  }
  /**
   * When set to `true`, keyboard navigation is available through arrow keys and roving tabindex. Otherwise, all chips
   * are part of the default tabbing sequence of the page.
   *
   * @default false
   */
  set navigable(value) {
    this._navigable = value;
    this.chips?.forEach((c) => this.renderer.setAttribute(c.element.nativeElement, "tabindex", value ? "-1" : "0"));
    this.chips?.first && this.renderer.setAttribute(this.chips.first.element.nativeElement, "tabindex", "0");
  }
  get navigable() {
    return this._navigable;
  }
  ngOnInit() {
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers();
    this.updateChips();
  }
  ngAfterContentInit() {
    this.subs.add(this.chips?.changes.subscribe(() => this.updateChips()));
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subs.unsubscribe();
  }
  selectedChips() {
    return this.chips.reduce((acc, cur, idx) => {
      return cur.selected ? acc.concat(idx) : acc;
    }, []);
  }
  /**
   * Updates the selection on click of a Chip. Emits events.
   */
  setSelection(chip) {
    if (this.selection === "single") {
      this.clearSelection(chip);
    }
    chip.selected = !chip.selected;
    const chipEl = chip.element.nativeElement;
    this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
    this.selectedChange.emit(this.selectedChips());
  }
  clearSelection(chip) {
    this.chips.forEach((c) => {
      if (chip !== c) {
        c.selected = false;
        this.renderer.setAttribute(c.element.nativeElement, "aria-selected", "false");
      }
    });
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip-list", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  attachElementEventHandlers() {
    const chiplist = this.element.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chiplist, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    const isLeftArrow = e.keyCode === Keys.ArrowLeft;
    const isRightArrow = e.keyCode === Keys.ArrowRight;
    if (isEnterOrSpace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      this.currentActiveIndex = this.chips.toArray().findIndex((chip2) => clickedChip === chip2.element.nativeElement);
      if (this.selection !== "none" && clickedChip) {
        this.ngZone.run(() => {
          this.setSelection(chip);
        });
      }
    } else if (isDeleteOrBackspace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      if (clickedChip) {
        const removeEventArgs = {
          sender: this,
          originalEvent: e,
          removedChip: chip
        };
        this.ngZone.run(() => {
          this.remove.emit(removeEventArgs);
        });
      }
    } else if (isLeftArrow) {
      this.handleArrowKeys("left");
    } else if (isRightArrow) {
      this.handleArrowKeys("right");
    }
  }
  handleArrowKeys(direction) {
    if (!this.navigable) {
      return;
    }
    const directionDelta = direction === "left" ? -1 : 1;
    this.currentActiveIndex = this.currentActiveIndex + directionDelta;
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = 0;
    } else if (this.currentActiveIndex < 0) {
      this.currentActiveIndex = this.chips.length - 1;
    }
    this.chips.forEach((chip, idx) => {
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
        chip.focus();
      }
    });
  }
  updateChips() {
    this.normalizeActiveIndex();
    this.chips.forEach((chip, idx) => {
      const chipEl = chip.element.nativeElement;
      this.renderer.removeAttribute(chipEl, "aria-pressed");
      this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
      this.role === "listbox" && this.renderer.setAttribute(chipEl, "role", "option");
      if (!this.navigable) {
        return;
      }
      this.renderer.setAttribute(chipEl, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chipEl, "tabindex", "0");
        if (isDocumentAvailable() && document.activeElement.closest(".k-chip-list")) {
          chip.focus();
        }
      }
      if (chip.removable) {
        this.renderer.setAttribute(chipEl, "aria-keyshortcuts", "Enter Delete");
      }
    });
  }
  normalizeActiveIndex() {
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = Math.max(this.chips.length - 1, 0);
    }
  }
};
ChipListComponent.ɵfac = function ChipListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipListComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ChipListComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipListComponent,
  selectors: [["kendo-chiplist"], ["kendo-chip-list"]],
  contentQueries: function ChipListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ChipComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chips = _t);
    }
  },
  hostVars: 10,
  hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ChipListComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-orientation", ctx.orientation)("dir", ctx.direction)("aria-multiselectable", ctx.multiple)("role", ctx.role);
      ɵɵclassProp("k-chip-list", ctx.hostClass)("k-selection-single", ctx.single)("k-selection-multiple", ctx.multiple);
    }
  },
  inputs: {
    selection: "selection",
    size: "size",
    role: "role",
    navigable: "navigable"
  },
  outputs: {
    selectedChange: "selectedChange",
    remove: "remove"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chiplist"
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function ChipListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chiplist, kendo-chip-list",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chiplist"
      }],
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [ChipComponent]
    }],
    single: [{
      type: HostBinding,
      args: ["class.k-selection-single"]
    }],
    multiple: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }, {
      type: HostBinding,
      args: ["class.k-selection-multiple"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    navigable: [{
      type: Input
    }]
  });
})();
var ButtonItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ButtonItemTemplateDirective.ɵfac = function ButtonItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ButtonItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ButtonItemTemplateDirective,
  selectors: [["", "kendoDropDownButtonItemTemplate", ""], ["", "kendoSplitButtonItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FocusService = class {
  constructor() {
    this.onFocus = new EventEmitter();
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
  resetFocus() {
    this.focused = -1;
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    this.focusedIndex = index;
    this.onFocus.emit(index);
  }
};
FocusService.ɵfac = function FocusService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FocusService)();
};
FocusService.ɵprov = ɵɵdefineInjectable({
  token: FocusService,
  factory: FocusService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusService, [{
    type: Injectable
  }], null, null);
})();
var KeyEvents;
(function(KeyEvents2) {
  KeyEvents2[KeyEvents2["keydown"] = 0] = "keydown";
  KeyEvents2[KeyEvents2["keypress"] = 1] = "keypress";
  KeyEvents2[KeyEvents2["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["EnterPress"] = 4] = "EnterPress";
  NavigationAction2[NavigationAction2["EnterUp"] = 5] = "EnterUp";
  NavigationAction2[NavigationAction2["Tab"] = 6] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 7] = "Esc";
  NavigationAction2[NavigationAction2["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));
var NAVIGATION_CONFIG = new InjectionToken("navigation.config");
var NavigationService = class {
  constructor(config) {
    this.navigate = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.enter = new EventEmitter();
    this.enterpress = new EventEmitter();
    this.enterup = new EventEmitter();
    this.tab = new EventEmitter();
    this.esc = new EventEmitter();
    this.useLeftRightArrows = config.useLeftRightArrows;
  }
  process(args) {
    const keyCode = args.keyCode;
    const keyEvent = args.keyEvent;
    let index;
    let action = NavigationAction.Undefined;
    if (keyEvent === KeyEvents.keyup) {
      if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.EnterUp;
      }
    } else {
      if (args.altKey && keyCode === Keys.ArrowDown) {
        action = NavigationAction.Open;
      } else if (args.altKey && keyCode === Keys.ArrowUp) {
        action = NavigationAction.Close;
      } else if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.Enter;
      } else if (keyCode === Keys.Escape) {
        action = NavigationAction.Esc;
      } else if (keyCode === Keys.Tab) {
        action = NavigationAction.Tab;
      } else if (keyCode === Keys.ArrowUp || this.useLeftRightArrows && keyCode === Keys.ArrowLeft) {
        const step = args.flipNavigation ? 1 : -1;
        const start = args.flipNavigation ? args.min : args.max;
        const end = args.flipNavigation ? args.max : args.min;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.ArrowDown || this.useLeftRightArrows && keyCode === Keys.ArrowRight) {
        const step = args.flipNavigation ? -1 : 1;
        const start = args.flipNavigation ? args.max : args.min;
        const end = args.flipNavigation ? args.min : args.max;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.Home) {
        index = args.min;
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.End) {
        index = args.max;
        action = NavigationAction.Navigate;
      }
    }
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit({
        index,
        target: args.target,
        esc: action === NavigationAction.Esc
      });
    }
    return action;
  }
  isEnterOrSpace(keyCode) {
    return keyCode === Keys.Enter || keyCode === Keys.Space;
  }
  next(args) {
    if (!isPresent2(args.current)) {
      return args.start;
    } else {
      return args.current !== args.end ? args.current + args.step : args.end;
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(NAVIGATION_CONFIG));
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
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NAVIGATION_CONFIG]
      }]
    }];
  }, null);
})();
var PopupContainerService = class {
};
PopupContainerService.ɵfac = function PopupContainerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupContainerService)();
};
PopupContainerService.ɵprov = ɵɵdefineInjectable({
  token: PopupContainerService,
  factory: PopupContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupContainerService, [{
    type: Injectable
  }], null, null);
})();
var ListButton = class extends MultiTabStop {
  constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
    super();
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapperRef = wrapperRef;
    this._zone = _zone;
    this.popupService = popupService;
    this.elRef = elRef;
    this.cdr = cdr;
    this.containerService = containerService;
    this._open = false;
    this._disabled = false;
    this._active = false;
    this._popupSettings = {
      animate: true,
      popupClass: ""
    };
    this.listId = guid();
    this._isFocused = false;
    this.subs = new Subscription();
    this.popupSubs = new Subscription();
    this.tabIndex = 0;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.escape = new EventEmitter();
    this.isClosePrevented = false;
    validatePackage(packageMetadata);
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapper = wrapperRef.nativeElement;
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.subscribeEvents();
  }
  /**
   * Sets the disabled state of the DropDownButton.
   */
  set disabled(value) {
    if (value && this.openState) {
      this.openState = false;
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.containerService.container : appendTo;
  }
  /**
   * Configures the popup of the DropDownButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
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
  get anchorAlign() {
    const align = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align.horizontal = "right";
    }
    return align;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align.horizontal = "right";
    }
    return align;
  }
  ngOnChanges(changes) {
    if (isChanged("popupSettings", changes) && isPresent2(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  get popupClasses() {
    const popupClasses = ["k-menu-popup"];
    if (this._popupSettings.popupClass) {
      popupClasses.push(this._popupSettings.popupClass);
    }
    return popupClasses.join(" ");
  }
  get openState() {
    return this._open;
  }
  /**
   * @hidden
   */
  set openState(open) {
    if (this.disabled) {
      return;
    }
    this._open = open;
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (this._disabled) {
      return;
    }
    this._toggle(!this.openState, true);
    if (!this.isClosePrevented) {
      this.focusService.focus(this.openState ? 0 : -1);
    }
  }
  /**
   * @hidden
   */
  onItemClick(index) {
    this.emitItemClickHandler(index);
    this.togglePopupVisibility();
    if (isDocumentAvailable() && !this.isClosePrevented) {
      this.focusButton();
    }
  }
  ngOnDestroy() {
    this.openState = false;
    this.subs.unsubscribe();
    this.destroyPopup();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscribeListItemFocusEvent();
    this.subscribeComponentBlurredEvent();
    this.subscribeNavigationEvents();
  }
  subscribeListItemFocusEvent() {
    this.subs.add(this.focusService.onFocus.subscribe(() => {
      this._isFocused = true;
    }));
  }
  subscribeComponentBlurredEvent() {
    this._zone.runOutsideAngular(() => {
      this.subs.add(this.navigationService.tab.pipe(filter(() => this._isFocused), tap(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
      this.subs.add(fromEvent(document, "click").pipe(filter((event) => !this.wrapperContains(event.target)), filter(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper())));
    });
  }
  subscribeNavigationEvents() {
    this.subs.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
    this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
    this.subs.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  /**
   * Toggles the visibility of the popup.
   * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    if (this.disabled) {
      return;
    }
    const value = open === void 0 ? !this.openState : open;
    this._toggle(value, false);
  }
  /**
   * @hidden
   */
  keyDownHandler(event, isHost) {
    this.keyHandler(event, null, isHost);
  }
  /**
   * @hidden
   */
  keyUpHandler(event) {
    this.keyHandler(event, KeyEvents.keyup);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent, isHost) {
    if (this._disabled) {
      return;
    }
    const eventData = event;
    if (!isHost) {
      eventData.stopImmediatePropagation();
    }
    const focused = this.focusService.focused || 0;
    const action = this.navigationService.process({
      altKey: eventData.altKey,
      current: focused,
      keyCode: eventData.keyCode,
      keyEvent,
      max: this._data ? this._data.length - 1 : 0,
      min: 0,
      target: event.target
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && (action !== NavigationAction.Enter || action === NavigationAction.Enter && this.openState)) {
      if (!(event.keyCode === Keys.Space && action === NavigationAction.EnterUp)) {
        eventData.preventDefault();
      }
    }
  }
  emitItemClickHandler(index) {
    const dataItem = this._data[index];
    if (this._itemClick && !dataItem.disabled) {
      this._itemClick.emit(dataItem);
    }
    if (dataItem && dataItem.click && !dataItem.disabled) {
      dataItem.click(dataItem);
    }
    this.focusService.focus(index);
  }
  focusWrapper() {
    if (this.openState) {
      this.togglePopupVisibility();
      this.focusButton();
    }
  }
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  blurWrapper(emit = true) {
    if (!this._isFocused) {
      return;
    }
    if (this.openState) {
      this.togglePopupVisibility();
    }
    this._isFocused = false;
    if (emit) {
      this._blur.emit();
      this.cdr.markForCheck();
    }
  }
  focusButton() {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }
  handleTab() {
    this.blurWrapper();
  }
  onNavigationEnterUp(e) {
    if (!this._disabled && !this.openState) {
      this._active = false;
    }
    if (this.openState) {
      const focused = this.focusService.focused;
      if (isPresent2(focused) && focused !== -1) {
        this.emitItemClickHandler(focused);
      }
    }
    this.togglePopupVisibility();
    if (!this.openState && isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  onNavigationOpen() {
    if (!this._disabled && !this.openState) {
      this.togglePopupVisibility();
    }
  }
  onNavigationClose(e) {
    if (this.openState && !this.isClosePrevented) {
      this.togglePopupVisibility();
      if (isDocumentAvailable()) {
        e?.esc && hasObservers(this.escape) && this.escape.emit();
        this.button.nativeElement.focus();
      }
    }
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  _toggle(open, emitEvent) {
    if (this.openState === open) {
      return;
    }
    const eventArgs = new PreventableEvent();
    if (emitEvent) {
      if (open && !this.openState) {
        this.open.emit(eventArgs);
      } else if (!open && this.openState) {
        this.close.emit(eventArgs);
      }
      if (eventArgs.isDefaultPrevented()) {
        this.isClosePrevented = true;
        return;
      }
    }
    this.openState = open;
    this.destroyPopup();
    if (this.openState) {
      this.createPopup();
    }
  }
  createPopup() {
    this.popupRef = this.popupService.open({
      anchor: this.elRef,
      anchorAlign: this.anchorAlign,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.containerService.template,
      popupAlign: this.popupAlign,
      popupClass: this.popupClasses
    });
    this.popupSubs = this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopupVisibility();
    });
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.popupSubs.unsubscribe();
      this.isClosePrevented = false;
    }
  }
};
ListButton.ɵfac = function ListButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListButton)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService));
};
ListButton.ɵcmp = ɵɵdefineComponent({
  type: ListButton,
  selectors: [["ng-component"]],
  inputs: {
    disabled: "disabled",
    tabIndex: "tabIndex",
    buttonClass: "buttonClass",
    popupSettings: "popupSettings"
  },
  outputs: {
    open: "open",
    close: "close",
    escape: "escape"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function ListButton_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }];
  }, {
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var FocusableDirective = class {
  constructor(focusService, elementRef, renderer) {
    this.focusService = focusService;
    this.renderer = renderer;
    this.subs = new Subscription();
    this.element = elementRef.nativeElement;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (this.index === this.focusService.focused) {
      this.renderer.addClass(this.element, "k-focus");
    } else {
      this.renderer.removeClass(this.element, "k-focus");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.focusService.onFocus.subscribe((index) => {
      if (this.index === index) {
        this.renderer.addClass(this.element, "k-focus");
        this.renderer.setAttribute(this.element, "tabindex", "0");
        this.element.focus();
      } else {
        this.renderer.setAttribute(this.element, "tabindex", "-1");
        this.renderer.removeClass(this.element, "k-focus");
      }
    }));
  }
};
FocusableDirective.ɵfac = function FocusableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FocusableDirective)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
FocusableDirective.ɵdir = ɵɵdefineDirective({
  type: FocusableDirective,
  selectors: [["", "kendoButtonFocusable", ""]],
  inputs: {
    index: "index"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoButtonFocusable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    index: [{
      type: Input
    }]
  });
})();
var ListComponent = class {
  constructor() {
    this.onItemClick = new EventEmitter();
    this.onItemBlur = new EventEmitter();
    this.sizeClass = "";
    validatePackage(packageMetadata);
  }
  set size(size) {
    if (size) {
      this.sizeClass = `k-menu-group-${SIZES[size]}`;
    } else {
      this.sizeClass = "";
    }
  }
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  getIconClasses(dataItem) {
    const icon = dataItem.icon ? "k-icon k-i-" + dataItem.icon : void 0;
    const classes = {};
    classes[icon || dataItem.iconClass] = true;
    return classes;
  }
  onClick(index) {
    this.onItemClick.emit(index);
  }
  onBlur() {
    this.onItemBlur.emit();
  }
};
ListComponent.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListComponent)();
};
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["kendo-button-list"]],
  inputs: {
    data: "data",
    textField: "textField",
    itemTemplate: "itemTemplate",
    size: "size"
  },
  outputs: {
    onItemClick: "onItemClick",
    onItemBlur: "onItemBlur"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["role", "list", 1, "k-group", "k-menu-group", "k-reset", 3, "ngClass"], ["kendoButtonFocusable", "", "tabindex", "-1", "class", "k-item k-menu-item", "role", "listitem", 3, "index", "click", "blur", 4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "tabindex", "-1", "role", "listitem", 1, "k-item", "k-menu-item", 3, "click", "blur", "index"], [3, "ngIf"], [1, "k-link", "k-menu-link", 3, "ngClass"], [3, "templateContext"], [3, "name", "svgIcon", "customFontClass", 4, "ngIf"], ["class", "k-image", 3, "src", "alt", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "svgIcon", "customFontClass"], [1, "k-image", 3, "src", "alt"], [1, "k-menu-link-text"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0);
      ɵɵtemplate(1, ListComponent_li_1_Template, 3, 4, "li", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.sizeClass);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.data);
    }
  },
  dependencies: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-button-list",
      template: `
        <ul class="k-group k-menu-group k-reset" role="list" [ngClass]="sizeClass">
            <li kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                role="listitem"
                [attr.aria-disabled]="dataItem.disabled ? true : false"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <ng-template
                            [templateContext]="{ templateRef: itemTemplate?.templateRef, $implicit: dataItem }"
                        ></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <kendo-icon-wrapper
                            *ngIf="dataItem.icon || dataItem.iconClass || dataItem.svgIcon"
                            [name]="dataItem.icon"
                            [svgIcon]="dataItem.svgIcon"
                            [customFontClass]="dataItem.iconClass"
                        ></kendo-icon-wrapper>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            [alt]="dataItem.imageAlt"
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                            {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
    `,
      standalone: true,
      imports: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent]
    }]
  }], function() {
    return [];
  }, {
    data: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    onItemBlur: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$2 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$2 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$2
};
var DEFAULT_FILL_MODE$1 = "solid";
var DropDownButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService, renderer) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.containerService = containerService;
    this.renderer = renderer;
    this.arrowIcon = false;
    this.icon = "";
    this.iconClass = "";
    this.imageUrl = "";
    this.size = "medium";
    this.rounded = "medium";
    this.themeColor = "base";
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.listId = guid();
    this.buttonId = guid();
    this._fillMode = DEFAULT_FILL_MODE$1;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * Sets or gets the data of the DropDownButton.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  /**
   * The fillMode property specifies the background and border styles of the DropDownButton
   * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   * * `none`
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  get focused() {
    return this._isFocused && !this._disabled;
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space || event.keyCode === Keys.Enter) {
      this._active = true;
    }
    if (event.keyCode === Keys.Enter) {
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this.keyUpHandler(event);
    this._active = false;
  }
  /**
   * @hidden
   */
  mousedown(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = true;
  }
  /**
   * @hidden
   */
  mouseup(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = false;
  }
  /**
   * @hidden
   */
  openPopup() {
    this._isFocused = true;
    this.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.openState) {
      this.blurWrapper();
    }
  }
  /**
   * Focuses the DropDownButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element) || this.popupRef && this.popupRef.popupElement.contains(element);
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button?.nativeElement;
    if (isPresent(this.buttonAttributes) && isPresent(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent(newButtonAttributes) && isPresent(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
DropDownButtonComponent.ɵfac = function DropDownButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService), ɵɵdirectiveInject(Renderer2));
};
DropDownButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: DropDownButtonComponent,
  selectors: [["kendo-dropdownbutton"]],
  contentQueries: function DropDownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function DropDownButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function DropDownButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DropDownButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function DropDownButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      })("mousedown", function DropDownButtonComponent_mousedown_HostBindingHandler($event) {
        return ctx.mousedown($event);
      })("mouseup", function DropDownButtonComponent_mouseup_HostBindingHandler($event) {
        return ctx.mouseup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.focused)("k-dropdown-button", ctx.widgetClasses);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    imageUrl: "imageUrl",
    textField: "textField",
    data: "data",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur"
  },
  exportAs: ["kendoDropDownButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.dropdownbutton"
  }, PopupContainerService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 18,
  consts: [["button", ""], ["popupTemplate", ""], ["container", ""], ["buttonList", ""], ["kendoButton", "", "type", "button", 3, "click", "focus", "blur", "id", "tabindex", "disabled", "icon", "svgIcon", "arrowIcon", "iconClass", "imageUrl", "ngClass", "size", "rounded", "fillMode", "themeColor"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]],
  template: function DropDownButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 4, 0);
      ɵɵlistener("click", function DropDownButtonComponent_Template_button_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.openPopup());
      })("focus", function DropDownButtonComponent_Template_button_focus_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus($event));
      })("blur", function DropDownButtonComponent_Template_button_blur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonBlur());
      });
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, DropDownButtonComponent_ng_template_3_Template, 2, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(5, null, 2);
    }
    if (rf & 2) {
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("id", ctx.buttonId)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("arrowIcon", ctx.arrowIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.fillMode ? ctx.themeColor : null);
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.openState)("aria-controls", ctx.listId);
    }
  },
  dependencies: [ButtonComponent, NgClass, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownbutton"
      }, PopupContainerService],
      selector: "kendo-dropdownbutton",
      template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [arrowIcon]="arrowIcon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [ButtonComponent, NgClass, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }, {
      type: Renderer2
    }];
  }, {
    arrowIcon: [{
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
    textField: [{
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
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    itemClick: [{
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
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-dropdown-button"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    buttonList: [{
      type: ViewChild,
      args: ["buttonList"]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    mouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }]
  });
})();
function getAnchorAlign(fabAlign, rtl) {
  const align = {
    horizontal: rtl ? "right" : "left",
    vertical: "bottom"
  };
  if (fabAlign.horizontal === "end") {
    align.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align.vertical = "top";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align.horizontal = rtl ? "left" : "right";
    align.vertical = "top";
  }
  return align;
}
function getPopupAlign(fabAlign, rtl) {
  const align = {
    horizontal: rtl ? "right" : "left",
    vertical: "top"
  };
  if (fabAlign.horizontal === "end") {
    align.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align.vertical = "bottom";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align.horizontal = rtl ? "left" : "right";
    align.vertical = "bottom";
  }
  return align;
}
function openAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }), stagger(gap, [animate(`${duration}ms ease-in`, style({
    opacity: "*",
    transform: "translateY(0)"
  }))])], {
    optional: true
  })]);
}
function closeAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: "*",
    transform: "translateY(0)"
  }), stagger(-gap, [animate(`${duration}ms ease-in`, style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }))])], {
    optional: true
  })]);
}
var DialItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DialItemTemplateDirective.ɵfac = function DialItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DialItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DialItemTemplateDirective,
  selectors: [["", "kendoDialItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialItemTemplate]",
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
var FloatingActionButtonTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
FloatingActionButtonTemplateDirective.ɵfac = function FloatingActionButtonTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
FloatingActionButtonTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: FloatingActionButtonTemplateDirective,
  selectors: [["", "kendoFloatingActionButtonTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFloatingActionButtonTemplate]",
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
var DialItemComponent = class {
  constructor(element, renderer, localisationService) {
    this.element = element;
    this.renderer = renderer;
    this.localisationService = localisationService;
    this.hostClass = true;
    this.role = "menuitem";
  }
  get disabledClass() {
    return this.item.disabled;
  }
  get title() {
    const label = this.item.label;
    return label || this.itemTitle;
  }
  get indexAttr() {
    return this.index;
  }
  get iconClasses() {
    const classes = [];
    if (this.item.iconClass) {
      classes.push(`${this.item.iconClass}`);
    }
    if (this.item.icon) {
      classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
    }
    return classes;
  }
  get itemTitle() {
    const icon = this.item.icon;
    const itemTitle = this.item.itemTitle;
    return icon && itemTitle ? itemTitle : icon;
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const rtl = this.localisationService.rtl;
    const hAlign = this.align.horizontal;
    this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
  }
  getTextDirectionClass(rtl, hAlign) {
    const dir = rtl ? "rtl" : "ltr";
    const align = hAlign === "end" ? "end" : "start";
    const directions = {
      rtl: {
        end: "k-text-left",
        start: "k-text-right"
      },
      ltr: {
        start: "k-text-left",
        end: "k-text-right"
      }
    };
    return directions[dir][align];
  }
};
DialItemComponent.ɵfac = function DialItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
DialItemComponent.ɵcmp = ɵɵdefineComponent({
  type: DialItemComponent,
  selectors: [["", "kendoDialItem", ""]],
  hostVars: 9,
  hostBindings: function DialItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("aria-disabled", ctx.disabledClass)("title", ctx.title)("aria-label", ctx.title)("data-fab-item-index", ctx.indexAttr);
      ɵɵclassProp("k-fab-item", ctx.hostClass)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    cssClass: "cssClass",
    cssStyle: "cssStyle",
    isFocused: "isFocused",
    index: "index",
    item: "item",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c9,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "k-fab-item-text", 4, "ngIf"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-fab-item-text"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon"]],
  template: function DialItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialItemComponent_0_Template, 1, 6, null, 0)(1, DialItemComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.dialItemTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.dialItemTemplate);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialItem]",
      template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <kendo-icon-wrapper
                *ngIf="item.icon || item.iconClass || item.svgIcon"
                [name]="item.icon"
                innerCssClass="k-fab-item-icon"
                [customFontClass]="item.iconClass"
                [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
        </ng-container>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, IconWrapperComponent]
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
      args: ["class.k-fab-item"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    title: [{
      type: HostBinding,
      args: ["attr.title"]
    }, {
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    indexAttr: [{
      type: HostBinding,
      args: ["attr.data-fab-item-index"]
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DialListComponent = class {
  constructor(focusService, cdr) {
    this.focusService = focusService;
    this.cdr = cdr;
    this.hostClass = true;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
  }
  get bottomClass() {
    return this.align.vertical === "top" || this.align.vertical === "middle";
  }
  get topClass() {
    return this.align.vertical === "bottom";
  }
  isFocused(index) {
    return this.focusService.isFocused(index);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
DialListComponent.ɵfac = function DialListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialListComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ChangeDetectorRef));
};
DialListComponent.ɵcmp = ɵɵdefineComponent({
  type: DialListComponent,
  selectors: [["", "kendoDialList", ""]],
  hostVars: 6,
  hostBindings: function DialListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-fab-items", ctx.hostClass)("k-fab-items-bottom", ctx.bottomClass)("k-fab-items-top", ctx.topClass);
    }
  },
  inputs: {
    dialItems: "dialItems",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c11,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "kendoDialItem", "", 3, "item", "index", "dialItemTemplate", "isFocused", "ngClass", "ngStyle", "align"]],
  template: function DialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialListComponent_ng_container_0_Template, 2, 7, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dialItems);
    }
  },
  dependencies: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialList]",
      template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `,
      standalone: true,
      imports: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-items"]
    }],
    bottomClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-bottom"]
    }],
    topClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-top"]
    }],
    dialItems: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$1 = {
  useLeftRightArrows: false
};
var NAVIGATION_SETTINGS_PROVIDER$1 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$1
};
var SIZE_CLASSES = {
  small: "k-fab-sm",
  medium: "k-fab-md",
  large: "k-fab-lg"
};
var ROUNDED_CLASSES = {
  small: "k-rounded-sm",
  medium: "k-rounded-md",
  large: "k-rounded-lg",
  full: "k-rounded-full"
};
var FILLMODE_CLASS = "k-fab-solid";
var DEFAULT_DURATION = 180;
var DEFAULT_ITEM_GAP = 90;
var DEFAULT_OFFSET = "16px";
var DEFAULT_ROUNDED$1 = "full";
var DEFAULT_SIZE = "medium";
var DEFAULT_THEME_COLOR = "primary";
var FloatingActionButtonComponent = class {
  constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
    this.renderer = renderer;
    this.element = element;
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.builder = builder;
    this.localizationService = localizationService;
    this.positionMode = "fixed";
    this.dialItemAnimation = true;
    this.tabIndex = 0;
    this.dialItems = [];
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.dialItemClick = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.id = `k-${guid()}`;
    this.dialListId = `k-dial-list-${guid()}`;
    this._themeColor = DEFAULT_THEME_COLOR;
    this._size = DEFAULT_SIZE;
    this._rounded = DEFAULT_ROUNDED$1;
    this._disabled = false;
    this._align = {
      horizontal: "end",
      vertical: "bottom"
    };
    this._offset = {
      x: DEFAULT_OFFSET,
      y: DEFAULT_OFFSET
    };
    this.subscriptions = new Subscription();
    this.rtl = false;
    this.animationEnd = new EventEmitter();
    this.initialSetup = true;
    this.focusChangedProgrammatically = false;
    validatePackage(packageMetadata);
    this.subscribeNavigationEvents();
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  get fixedClass() {
    return this.positionMode === "fixed";
  }
  get absoluteClass() {
    return this.positionMode === "absolute";
  }
  /**
   * Specifies the theme color of the FloatingActionButton
   * ([see example](slug:appearance_floatingactionbutton#toc-theme-colors)).
   * The theme color will be applied as background color of the component.
   *
   * The possible values are:
   * * `primary` (Default)&mdash;Applies coloring based on the `primary` theme color.
   * * `secondary`&mdash;Applies coloring based on the `secondary` theme color.
   * * `tertiary`&mdash; Applies coloring based on the `tertiary` theme color.
   * * `info`&mdash;Applies coloring based on the `info` theme color.
   * * `success`&mdash; Applies coloring based on the `success` theme color.
   * * `warning`&mdash; Applies coloring based on the `warning` theme color.
   * * `error`&mdash; Applies coloring based on the `error` theme color.
   * * `dark`&mdash; Applies coloring based on the `dark` theme color.
   * * `light`&mdash; Applies coloring based on the `light` theme color.
   * * `inverse`&mdash; Applies coloring based on the `inverse` theme color.
   * * `none`&mdash; Removes the built in theme color.
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleClasses(newThemeColor, "themeColor");
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the FloatingActionButton
   * ([see example]({% slug appearance_floatingactionbutton %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
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
   * The rounded property specifies the border radius of the FloatingActionButton.
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `full` (default)
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies whether the FloatingActionButton is disabled.
   */
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the horizontal and vertical alignment of the FloatingActionButton
   * ([see example](slug:positioning_floatingactionbutton#toc-alignment)).
   *
   * The possible values are:
   * * `{ horizontal: 'start'|'center'|'end', vertical: 'top'|'middle'|'bottom' }`
   *
   * The default value is:
   * * `{ horizontal: 'end', vertical: 'bottom' }`
   *
   */
  set align(align) {
    this._align = Object.assign(this._align, align);
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the horizontal and vertical offset position of the FloatingActionButton
   * ([see example]({% slug positioning_floatingactionbutton %}#toc-offset)).
   *
   * * The default value is:
   * * `{ x: '16px', y: '16px' }`
   */
  set offset(offset) {
    this._offset = Object.assign(this._offset, offset);
    this.offsetStyles();
  }
  get offset() {
    return this._offset;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  ngAfterViewInit() {
    ["size", "rounded", "themeColor"].forEach((option) => this.handleClasses(this[option], option));
    this.renderer.addClass(this.element.nativeElement, this.alignClass());
    this.offsetStyles();
    this.initialSetup = false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.isOpen && this.toggleDial(false);
  }
  /**
   * Indicates whether the FloatingActionButton is currently open.
   */
  get isOpen() {
    return isPresent2(this.popupRef);
  }
  /**
   * Focuses the FloatingActionButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.focus();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the FloatingActionButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.blur();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Toggles the visibility of the FloatingActionButton dial items popup.
   *
   * If you use the `toggleDial` method to open or close the dial items,
   * the `open` and `close` events do not fire ([more information and examples](slug:openstate_floatingactionbutton)).
   *
   * @param open - The state of dial items popup.
   */
  toggleDial(open) {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    const shouldOpen = isPresent2(open) ? open : !this.isOpen;
    if (this.disabled || shouldOpen === this.isOpen) {
      return;
    }
    if (shouldOpen) {
      setTimeout(() => this.openDial());
    } else {
      this.closeDial();
    }
  }
  /**
   * @hidden
   */
  get ariaExpanded() {
    return this.hasDialItems ? this.isOpen : void 0;
  }
  /**
   * @hidden
   */
  get ariaHasPopup() {
    return this.hasDialItems ? "menu" : void 0;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    return this.hasDialItems ? this.isOpen ? this.dialListId : void 0 : void 0;
  }
  /**
   * @hidden
   */
  get iconClasses() {
    const classes = [];
    if (this.iconClass) {
      classes.push(`${this.iconClass}`);
    }
    if (this.icon) {
      classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
    }
    return classes;
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    this.ngZone.run(() => {
      const shouldOpen = !this.isOpen;
      this.toggleDialWithEvents(shouldOpen);
    });
  }
  /**
   * @hidden
   */
  pointerdownHandler(e) {
    if (this.isOpen) {
      e.preventDefault();
      this.focus();
    }
  }
  /**
   * @hidden
   */
  keyDownHandler(event) {
    if (this.disabled) {
      return;
    }
    const focused = this.focusService.focused || 0;
    const keyCode = event.keyCode;
    const action = this.navigationService.process({
      altKey: event.altKey,
      current: focused,
      keyCode,
      max: this.dialItems ? this.dialItems.length - 1 : 0,
      min: 0,
      flipNavigation: this.align.vertical === "bottom"
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && event.target.closest(`#${this.dialListId}`)) {
      this.focus();
    }
    if (action === NavigationAction.EnterUp && !this.hasDialItems) {
      this.button.nativeElement.click();
    } else if (action === NavigationAction.Open || action === NavigationAction.Close) {
      const toggleDial = action === NavigationAction.Open;
      this.ngZone.run(() => {
        this.toggleDialWithEvents(toggleDial);
      });
    }
  }
  /**
   * @hidden
   */
  onItemClick(event) {
    const item = closest(event.target, ".k-fab-item");
    if (!item) {
      return;
    }
    const index = parseInt(item.getAttribute("data-fab-item-index"));
    this.emitItemClick(index);
  }
  /**
   * @hidden
   */
  focusHandler() {
    if (!this.disabled && !this.focusChangedProgrammatically) {
      this.onFocus.emit();
    }
  }
  /**
   * @hidden
   */
  blurHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    if (focusInList) {
      return;
    }
    !this.focusChangedProgrammatically && this.onBlur.emit();
    this.toggleDialWithEvents(false);
  }
  /**
   * @hidden
   */
  focusOutHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    const focusOnButton = e.relatedTarget === this.button.nativeElement;
    const shouldClose = !focusInList && !focusOnButton;
    if (shouldClose) {
      this.toggleDialWithEvents(false);
      !this.focusChangedProgrammatically && this.onBlur.emit();
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterPress() {
    this.ngZone.run(() => {
      if (this.isOpen) {
        const focusedIndex = this.focusService.focused;
        const focusedItem = this.dialItems[focusedIndex];
        if (focusedItem && focusedItem.disabled) {
          return;
        }
        if (isPresent2(focusedIndex) && focusedIndex !== -1) {
          this.onEnterPressed();
          return;
        }
      }
      if (!this.isOpen && isDocumentAvailable()) {
        this.toggleDialWithEvents(true);
        this.focus();
      }
    });
  }
  /**
   * @hidden
   */
  onNavigationClose() {
    if (this.isOpen) {
      this.ngZone.run(() => {
        this.toggleDialWithEvents(false);
        this.focus();
      });
    }
  }
  handleClasses(inputValue, input) {
    if (isPresent2(this.button) && (this[input] !== inputValue || this.initialSetup)) {
      const button = this.button.nativeElement;
      const classesToRemove = {
        themeColor: `${FILLMODE_CLASS}-${this.themeColor}`,
        size: SIZE_CLASSES[this.size],
        rounded: ROUNDED_CLASSES[this.rounded]
      };
      const classesToAdd = {
        themeColor: inputValue !== "none" ? `${FILLMODE_CLASS}-${inputValue}` : "",
        size: SIZE_CLASSES[inputValue],
        rounded: ROUNDED_CLASSES[inputValue]
      };
      this.renderer.removeClass(button, classesToRemove[input]);
      if (classesToAdd[input]) {
        this.renderer.addClass(button, classesToAdd[input]);
      }
    }
  }
  onEnterPressed() {
    const index = this.focusService.focused;
    this.emitItemClick(index);
  }
  emitItemClick(index) {
    const item = this.dialItems[index];
    if (item && !item.disabled) {
      const clickEventArgs = {
        item,
        index
      };
      this.dialItemClick.emit(clickEventArgs);
      this.toggleDialWithEvents(false);
      this.focusService.focused = index;
    }
    this.focus();
  }
  subscribeNavigationEvents() {
    this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
    this.subscriptions.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  alignClass() {
    return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
  }
  toggleDialWithEvents(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    if (open) {
      this.openDial();
    } else {
      this.closeDial();
    }
  }
  openPopup() {
    if (this.isOpen) {
      return;
    }
    const isIconFab = this.icon && !this.text;
    const rtl = this.rtl;
    const align = this.align;
    this.popupRef = this.popupService.open({
      anchor: this.element.nativeElement,
      animate: false,
      content: this.popupTemplate,
      anchorAlign: getAnchorAlign(align, rtl),
      popupAlign: getPopupAlign(align, rtl),
      popupClass: "k-fab-popup k-popup-transparent"
    });
    const popupElement = this.popupRef.popupElement;
    this.renderer.setStyle(popupElement, "box-shadow", "none");
    if (isIconFab) {
      this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
    }
    this.ngZone.runOutsideAngular(() => {
      this.popupMouseDownListener = this.renderer.listen(popupElement, "mousedown", (event) => {
        event.preventDefault();
      });
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false));
  }
  closePopup() {
    if (this.isOpen) {
      if (this.popupMouseDownListener) {
        this.popupMouseDownListener();
      }
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  openDial() {
    this.openPopup();
    this.focusService.focus(0);
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(true);
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "true");
  }
  closeDial() {
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(false);
      this.animationEnd.pipe(take(1)).subscribe(() => this.closePopup());
    } else {
      this.closePopup();
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "false");
    this.focusService.resetFocus();
  }
  isValidAnimation() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean") {
      return animation.duration !== 0;
    }
    return true;
  }
  positionPopup() {
    if (this.dialItemTemplate) {
      return;
    }
    if (!this.popupRef) {
      return;
    }
    const fab = this.element.nativeElement;
    const fabWidth = fab.getBoundingClientRect().width;
    const popupEl = this.popupRef.popupElement;
    const icon = popupEl.querySelector(".k-fab-item-icon");
    if (!icon) {
      return;
    }
    const iconWidth = icon.getBoundingClientRect().width;
    const left = fabWidth / 2 - iconWidth / 2;
    const popupLeft = popupEl.getBoundingClientRect().left;
    const isEndAlign = this.align.horizontal === "end";
    const leftValue = isEndAlign ? popupLeft - left : left + popupLeft;
    const rtlLeftValue = isEndAlign ? left + popupLeft : popupLeft - left;
    popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
  }
  offsetStyles() {
    const hostElement = this.element.nativeElement;
    this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
    this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
  }
  get hasDialItems() {
    return isPresent2(this.dialItems) && this.dialItems.length !== 0;
  }
  /**
   * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
   */
  get verticalPosition() {
    return {
      top: "top",
      middle: "top",
      bottom: "bottom"
    }[this.align.vertical];
  }
  /**
   * Gets the offset according to the selected vertical position.
   */
  get verticalOffset() {
    if (this.align.vertical === "middle") {
      return this.offset.y === DEFAULT_OFFSET ? "50%" : `calc(50% + ${this.offset.y})`;
    }
    return this.offset.y;
  }
  /**
   * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
   */
  get horizontalPosition() {
    const {
      horizontal
    } = this.align;
    return {
      end: this.rtl ? "left" : "right",
      center: "left",
      start: this.rtl ? "right" : "left"
    }[horizontal];
  }
  /**
   * Gets the offset according to the selected horizontal position.
   */
  get horizontalOffset() {
    if (this.align.horizontal === "center") {
      return this.offset.x === DEFAULT_OFFSET ? "50%" : `calc(50% + ${this.offset.x})`;
    }
    return this.offset.x;
  }
  playerFor(element, animation) {
    const factory = this.builder.build(animation);
    return factory.create(element);
  }
  playAnimation(open) {
    const durationSettings = this.durationSettings();
    const animationSettings = {
      duration: durationSettings.duration,
      gap: durationSettings.gap,
      align: this.align
    };
    const animation = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
    let player = this.playerFor(this.popupRef.popupElement, animation);
    player.play();
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
  }
  durationSettings() {
    return {
      duration: this.animationDuration(),
      gap: this.animationGap()
    };
  }
  animationGap() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent2(animation.gap)) {
      return animation.gap;
    }
    return DEFAULT_ITEM_GAP;
  }
  animationDuration() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent2(animation.duration)) {
      return animation.duration;
    }
    return DEFAULT_DURATION;
  }
};
FloatingActionButtonComponent.ɵfac = function FloatingActionButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService));
};
FloatingActionButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: FloatingActionButtonComponent,
  selectors: [["kendo-floatingactionbutton"]],
  contentQueries: function FloatingActionButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DialItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FloatingActionButtonTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fabTemplate = _t.first);
    }
  },
  viewQuery: function FloatingActionButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 7);
      ɵɵviewQuery(_c7, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function FloatingActionButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-pos-fixed", ctx.fixedClass)("k-pos-absolute", ctx.absoluteClass);
    }
  },
  inputs: {
    themeColor: "themeColor",
    size: "size",
    rounded: "rounded",
    disabled: "disabled",
    align: "align",
    offset: "offset",
    positionMode: "positionMode",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    buttonClass: "buttonClass",
    dialClass: "dialClass",
    text: "text",
    dialItemAnimation: "dialItemAnimation",
    tabIndex: "tabIndex",
    dialItems: "dialItems"
  },
  outputs: {
    onBlur: "blur",
    onFocus: "focus",
    dialItemClick: "dialItemClick",
    open: "open",
    close: "close"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.floatingactionbutton"
  }]), ɵɵStandaloneFeature],
  decls: 6,
  vars: 18,
  consts: [["button", ""], ["popupTemplate", ""], ["type", "button", 1, "k-fab", "k-fab-solid", 3, "focus", "blur", "tabIndex", "ngClass", "disabled", "kendoEventsOutsideAngular", "scope"], [4, "ngIf"], [3, "ngTemplateOutlet"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-fab-text", 4, "ngIf"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-fab-text"], ["kendoDialList", "", "role", "menu", 3, "click", "id", "ngClass", "dialItems", "dialItemTemplate", "align", "kendoEventsOutsideAngular"]],
  template: function FloatingActionButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "button", 2, 0);
      ɵɵlistener("focus", function FloatingActionButtonComponent_Template_button_focus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.focusHandler());
      })("blur", function FloatingActionButtonComponent_Template_button_blur_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.blurHandler($event));
      });
      ɵɵtemplate(2, FloatingActionButtonComponent_2_Template, 1, 1, null, 3)(3, FloatingActionButtonComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, FloatingActionButtonComponent_ng_template_4_Template, 1, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassProp("k-disabled", ctx.disabled);
      ɵɵproperty("tabIndex", ctx.componentTabIndex)("ngClass", ctx.buttonClass)("disabled", ctx.disabled)("kendoEventsOutsideAngular", ɵɵpureFunction3(14, _c12, ctx.keyDownHandler, ctx.clickHandler, ctx.pointerdownHandler))("scope", ctx);
      ɵɵattribute("id", ctx.id)("aria-disabled", ctx.disabled)("aria-expanded", ctx.ariaExpanded)("aria-haspopup", ctx.ariaHasPopup)("aria-controls", ctx.ariaControls);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.fabTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.fabTemplate);
    }
  },
  dependencies: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatingactionbutton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatingactionbutton"
      }],
      template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler($event)"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler,
                pointerdown: pointerdownHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <kendo-icon-wrapper
                    *ngIf="icon || iconClass || svgIcon"
                    [name]="icon"
                    innerCssClass="k-fab-icon"
                    [customFontClass]="iconClass"
                    [svgIcon]="svgIcon"></kendo-icon-wrapper>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
                [kendoEventsOutsideAngular]="{
                    keydown: keyDownHandler.bind(this),
                    focusout: focusOutHandler.bind(this)
                }"
            >
            </ul>
        </ng-template>
    `,
      standalone: true,
      imports: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: AnimationBuilder
    }, {
      type: LocalizationService
    }];
  }, {
    fixedClass: [{
      type: HostBinding,
      args: ["class.k-pos-fixed"]
    }],
    absoluteClass: [{
      type: HostBinding,
      args: ["class.k-pos-absolute"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dialItemTemplate: [{
      type: ContentChild,
      args: [DialItemTemplateDirective, {
        static: false
      }]
    }],
    fabTemplate: [{
      type: ContentChild,
      args: [FloatingActionButtonTemplateDirective, {
        static: false
      }]
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    positionMode: [{
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
    buttonClass: [{
      type: Input
    }],
    dialClass: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    dialItemAnimation: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    dialItems: [{
      type: Input
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    dialItemClick: [{
      type: Output,
      args: ["dialItemClick"]
    }],
    open: [{
      type: Output
    }],
    close: [{
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
  selectors: [["kendo-splitbutton-messages-base"]],
  inputs: {
    splitButtonLabel: "splitButtonLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-splitbutton-messages-base"
    }]
  }], null, {
    splitButtonLabel: [{
      type: Input
    }]
  });
})();
var SplitButtonCustomMessagesComponent = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SplitButtonCustomMessagesComponent.ɵfac = function SplitButtonCustomMessagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SplitButtonCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonCustomMessagesComponent,
  selectors: [["kendo-splitbutton-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SplitButtonCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
      }],
      selector: "kendo-splitbutton-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var LocalizedSplitButtonMessagesDirective = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSplitButtonMessagesDirective.ɵfac = function LocalizedSplitButtonMessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizedSplitButtonMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSplitButtonMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSplitButtonMessagesDirective,
  selectors: [["", "kendoSplitButtonLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSplitButtonMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
      }],
      selector: "[kendoSplitButtonLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var NAVIGATION_SETTINGS = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS
};
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var SplitButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.localization = localization;
    this.renderer = renderer;
    this.text = "";
    this.icon = "";
    this.type = "button";
    this.imageUrl = "";
    this.size = "medium";
    this.themeColor = "base";
    this.tabIndex = 0;
    this.arrowButtonIcon = "caret-alt-down";
    this.arrowButtonSvgIcon = caretAltDownIcon;
    this.buttonClick = new EventEmitter();
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.activeArrow = false;
    this.listId = guid();
    this.buttonText = "";
    this.arrowButtonClicked = false;
    this._rounded = DEFAULT_ROUNDED;
    this._fillMode = DEFAULT_FILL_MODE;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * The rounded property specifies the border radius of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-rounded)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    this._fillMode = fillMode === "clear" ? "flat" : newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * When set to `true`, disables a SplitButton item
   * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
   */
  set disabled(value) {
    if (this.isOpen) {
      this.toggle(false);
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Configures the popup of the SplitButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
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
   * Sets the data of the SplitButton.
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
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * @hidden
   */
  get hasContent() {
    return this.button?.nativeElement.childElementCount > 0;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  set isFocused(value) {
    this._isFocused = value;
  }
  get isFocused() {
    return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get ariaLabel() {
    const localizationMsg = this.localization.get("splitButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "buttonText", this.buttonText);
  }
  /**
   * @hidden
   */
  onButtonFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  onArrowButtonClick() {
    this.togglePopupVisibility();
    this.arrowButtonClicked = false;
    if (!this.isOpen) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  toggleButtonActiveState(enable) {
    this._active = enable;
  }
  /**
   * @hidden
   */
  toggleArrowButtonActiveState(enable) {
    this.arrowButtonClicked = true;
    this.activeArrow = enable;
  }
  /**
   * @hidden
   */
  onButtonClick() {
    this.buttonClick.emit();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.isOpen && !this.arrowButtonClicked) {
      this.blurWrapper();
    }
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space) {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this._active = false;
    if (event.keyCode !== Keys.Space) {
      this.keyUpHandler(event);
    }
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.containerService.container = this.containerRef;
    this.containerService.template = this.popupTemplate;
    this.updateButtonText();
    this.handleClasses(this.rounded, "rounded");
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("text")) {
      this.updateButtonText();
    }
    if (anyChanged(["text", "icon", "svgIcon", "iconClass", "imageUrl"], changes)) {
      this.toggleButtonIconClass();
    }
    if (isChanged("popupSettings", changes) && isPresent2(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterUp(args) {
    if (args.target !== this.button.nativeElement) {
      super.onNavigationEnterUp(args);
    }
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
      this.button.nativeElement.focus();
    }
    super.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align.horizontal = "right";
    }
    return align;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align.horizontal = "right";
    }
    return align;
  }
  /**
   * @hidden
   */
  get isIconButton() {
    const hasIcon = this.icon || this.svgIcon || this.iconClass || this.imageUrl;
    const hasTextContent = isDocumentAvailable() && this.button?.nativeElement.textContent.trim().length > 0;
    return hasIcon && !hasTextContent;
  }
  /**
   * Focuses the SplitButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the SplitButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this.openState;
  }
  updateButtonText() {
    if (isDocumentAvailable()) {
      const innerText = this.wrapper.innerText.split("\n").join("").trim();
      setTimeout(() => this.buttonText = innerText, 0);
    }
  }
  handleClasses(value, input) {
    const elem = this.wrapperRef.nativeElement;
    const classes = getStylingClasses("button", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  toggleButtonIconClass() {
    this.button.nativeElement.classList[this.isIconButton ? "add" : "remove"]("k-button-icon");
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button.nativeElement;
    if (isPresent2(this.buttonAttributes) && isPresent2(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent2(newButtonAttributes) && isPresent2(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
SplitButtonComponent.ɵfac = function SplitButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupContainerService));
};
SplitButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonComponent,
  selectors: [["kendo-splitbutton"]],
  contentQueries: function SplitButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function SplitButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c14, 5, ElementRef);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function SplitButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function SplitButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.isFocused)("k-split-button", ctx.widgetClasses)("k-button-group", ctx.widgetClasses);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    type: "type",
    imageUrl: "imageUrl",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    disabled: "disabled",
    popupSettings: "popupSettings",
    tabIndex: "tabIndex",
    textField: "textField",
    data: "data",
    buttonClass: "buttonClass",
    arrowButtonClass: "arrowButtonClass",
    arrowButtonIcon: "arrowButtonIcon",
    arrowButtonSvgIcon: "arrowButtonSvgIcon",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    buttonClick: "buttonClick",
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoSplitButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.splitbutton"
  }, PopupContainerService, {
    provide: MultiTabStop,
    useExisting: forwardRef(() => SplitButtonComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 12,
  vars: 30,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2020_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0 = goog.getMsg("{$interpolation}", {
        "interpolation": "�0�"
      }, {
        original_code: {
          "interpolation": "{{ '{buttonText} splitbutton' }}"
        }
      });
      i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_DILTECA_DILTECA_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2020_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label:${"�0�"}:INTERPOLATION:`;
    }
    return [["button", ""], ["arrowButton", ""], ["popupTemplate", ""], ["container", ""], ["splitButtonLabel", i18n_0], ["kendoSplitButtonLocalizedMessages", "", 6, "splitButtonLabel"], ["kendoButton", "", 3, "focus", "click", "blur", "mousedown", "mouseup", "type", "tabindex", "disabled", "size", "rounded", "fillMode", "themeColor", "icon", "svgIcon", "iconClass", "imageUrl", "ngClass"], ["class", "k-button-text", 4, "ngIf"], ["kendoButton", "", "type", "button", "aria-hidden", "true", 1, "k-split-button-arrow", 3, "click", "mousedown", "mouseup", "keydown.enter", "ngClass", "disabled", "icon", "svgIcon", "size", "rounded", "fillMode", "themeColor", "tabindex"], [1, "k-button-text"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]];
  },
  template: function SplitButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0, 5);
      ɵɵi18nAttributes(1, 4);
      ɵɵelementContainerEnd();
      ɵɵelementStart(2, "button", 6, 0);
      ɵɵlistener("focus", function SplitButtonComponent_Template_button_focus_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonFocus($event));
      })("click", function SplitButtonComponent_Template_button_click_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonClick());
      })("blur", function SplitButtonComponent_Template_button_blur_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonBlur());
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleButtonActiveState(true));
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleButtonActiveState(false));
      });
      ɵɵtemplate(4, SplitButtonComponent_span_4_Template, 2, 1, "span", 7);
      ɵɵprojection(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "button", 8, 1);
      ɵɵlistener("click", function SplitButtonComponent_Template_button_click_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onArrowButtonClick());
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleArrowButtonActiveState(true));
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleArrowButtonActiveState(false));
      })("keydown.enter", function SplitButtonComponent_Template_button_keydown_enter_6_listener($event) {
        ɵɵrestoreView(_r1);
        $event.stopImmediatePropagation();
        return ɵɵresetView($event.preventDefault());
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, SplitButtonComponent_ng_template_8_Template, 1, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(10, null, 3);
    }
    if (rf & 2) {
      ɵɵi18nExp("{buttonText} splitbutton");
      ɵɵi18nApply(1);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("type", ctx.type)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass);
      ɵɵattribute("aria-expanded", ctx.openState)("aria-controls", ctx.listId)("aria-label", ctx.ariaLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.text);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.activeArrow);
      ɵɵproperty("ngClass", ctx.arrowButtonClass)("disabled", ctx.disabled)("icon", ctx.arrowButtonIcon)("svgIcon", ctx.arrowButtonSvgIcon)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("tabindex", -1);
    }
  },
  dependencies: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.splitbutton"
      }, PopupContainerService, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => SplitButtonComponent)
      }],
      selector: "kendo-splitbutton",
      template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}">
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [class.k-active]="active"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }}
            </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [svgIcon]="arrowButtonSvgIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            aria-hidden="true"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
            (keydown.enter)="$event.stopImmediatePropagation(); $event.preventDefault();"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: PopupContainerService
    }];
  }, {
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
    type: [{
      type: Input
    }],
    imageUrl: [{
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
    themeColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
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
    buttonAttributes: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
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
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    arrowButton: [{
      type: ViewChild,
      args: ["arrowButton", {
        read: ElementRef
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    containerRef: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    isFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-split-button"]
    }, {
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var KENDO_BUTTON = [ButtonComponent];
var KENDO_BUTTONGROUP = [ButtonComponent, ButtonGroupComponent];
var KENDO_DROPDOWNBUTTON = [DropDownButtonComponent, ButtonItemTemplateDirective];
var KENDO_CHIP = [ChipComponent];
var KENDO_CHIPLIST = [ChipComponent, ChipListComponent];
var KENDO_FLOATINGACTIONBUTTON = [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective];
var KENDO_SPLITBUTTON = [SplitButtonComponent, SplitButtonCustomMessagesComponent];
var KENDO_BUTTONS = [...KENDO_BUTTON, ...KENDO_BUTTONGROUP, ...KENDO_DROPDOWNBUTTON, ...KENDO_CHIP, ...KENDO_CHIPLIST, ...KENDO_FLOATINGACTIONBUTTON, ...KENDO_SPLITBUTTON];
var ButtonGroupModule = class {
};
ButtonGroupModule.ɵfac = function ButtonGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonGroupModule)();
};
ButtonGroupModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonGroupModule,
  imports: [ButtonComponent, ButtonGroupComponent],
  exports: [ButtonComponent, ButtonGroupComponent]
});
ButtonGroupModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_BUTTONGROUP]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BUTTONGROUP],
      imports: [...KENDO_BUTTONGROUP],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonModule = class {
};
ButtonModule.ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonModule)();
};
ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonModule,
  imports: [ButtonComponent],
  exports: [ButtonComponent]
});
ButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [ButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonComponent],
      exports: [ButtonComponent],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonsModule = class {
};
ButtonsModule.ɵfac = function ButtonsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonsModule)();
};
ButtonsModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonsModule,
  imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent],
  exports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
ButtonsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_BUTTONS],
      exports: [...KENDO_BUTTONS],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SplitButtonModule = class {
};
SplitButtonModule.ɵfac = function SplitButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonModule)();
};
SplitButtonModule.ɵmod = ɵɵdefineNgModule({
  type: SplitButtonModule,
  imports: [SplitButtonComponent, SplitButtonCustomMessagesComponent],
  exports: [SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
SplitButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [KENDO_SPLITBUTTON]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPLITBUTTON],
      imports: [...KENDO_SPLITBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var DropDownButtonModule = class {
};
DropDownButtonModule.ɵfac = function DropDownButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownButtonModule)();
};
DropDownButtonModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownButtonModule,
  imports: [DropDownButtonComponent, ButtonItemTemplateDirective],
  exports: [DropDownButtonComponent, ButtonItemTemplateDirective]
});
DropDownButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [DropDownButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DROPDOWNBUTTON],
      imports: [...KENDO_DROPDOWNBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var EXPORTED_DIRECTIVES = [ListComponent, FocusableDirective, ButtonItemTemplateDirective];
var ListModule = class {
};
ListModule.ɵfac = function ListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListModule)();
};
ListModule.ɵmod = ɵɵdefineNgModule({
  type: ListModule,
  imports: [ListComponent, FocusableDirective, ButtonItemTemplateDirective],
  exports: [ListComponent, FocusableDirective, ButtonItemTemplateDirective]
});
ListModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [ListComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModule, [{
    type: NgModule,
    args: [{
      imports: [...EXPORTED_DIRECTIVES],
      exports: [...EXPORTED_DIRECTIVES],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ChipModule = class {
};
ChipModule.ɵfac = function ChipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipModule)();
};
ChipModule.ɵmod = ɵɵdefineNgModule({
  type: ChipModule,
  imports: [ChipComponent, ChipListComponent],
  exports: [ChipComponent, ChipListComponent]
});
ChipModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_CHIPLIST]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CHIPLIST],
      imports: [...KENDO_CHIPLIST],
      providers: [IconsService]
    }]
  }], null, null);
})();
var FloatingActionButtonModule = class {
};
FloatingActionButtonModule.ɵfac = function FloatingActionButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonModule)();
};
FloatingActionButtonModule.ɵmod = ɵɵdefineNgModule({
  type: FloatingActionButtonModule,
  imports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective],
  exports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective]
});
FloatingActionButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [FloatingActionButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FLOATINGACTIONBUTTON],
      imports: [...KENDO_FLOATINGACTIONBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  ButtonComponent,
  PreventableEvent,
  ButtonGroupComponent,
  ChipComponent,
  ChipListComponent,
  ButtonItemTemplateDirective,
  FocusableDirective,
  ListComponent,
  DropDownButtonComponent,
  DialItemTemplateDirective,
  FloatingActionButtonTemplateDirective,
  FloatingActionButtonComponent,
  SplitButtonCustomMessagesComponent,
  LocalizedSplitButtonMessagesDirective,
  SplitButtonComponent,
  KENDO_BUTTON,
  KENDO_BUTTONGROUP,
  KENDO_DROPDOWNBUTTON,
  KENDO_CHIP,
  KENDO_CHIPLIST,
  KENDO_FLOATINGACTIONBUTTON,
  KENDO_SPLITBUTTON,
  KENDO_BUTTONS,
  ButtonGroupModule,
  ButtonModule,
  ButtonsModule,
  SplitButtonModule,
  DropDownButtonModule,
  ListModule,
  ChipModule,
  FloatingActionButtonModule
};
//# sourceMappingURL=chunk-EZZZ6A5H.js.map
