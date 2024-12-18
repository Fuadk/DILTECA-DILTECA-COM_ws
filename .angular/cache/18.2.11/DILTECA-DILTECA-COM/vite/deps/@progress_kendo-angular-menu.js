import {
  POPUP_CONTAINER,
  PopupService
} from "./chunk-KVPGWL76.js";
import {
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon
} from "./chunk-FNDNMMRM.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FHJCQ5YG.js";
import {
  Keys,
  PreventableEvent,
  ResizeBatchService,
  hasObservers,
  isDocumentAvailable
} from "./chunk-HRNBUZH3.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-GRNNJSKN.js";
import "./chunk-LMGKJMTG.js";
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
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
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
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import "./chunk-PC7SNX6C.js";
import "./chunk-XIIBOQQH.js";
import "./chunk-NXOOB3F7.js";
import "./chunk-4MWRP73S.js";

// node_modules/@progress/kendo-angular-menu/fesm2020/progress-kendo-angular-menu.mjs
var _c0 = ["kendoMenuList", ""];
function ListComponent_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const item_r2 = ctx_r0.$implicit;
    const idx_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("k-first", idx_r3 === 0)("k-last", idx_r3 === ctx_r3.items.length - 1)("k-disabled", item_r2.disabled);
    ɵɵproperty("appendTo", ctx_r3.appendTo)("item", item_r2)("level", ctx_r3.level)("size", ctx_r3.size)("vertical", ctx_r3.vertical)("animate", ctx_r3.animate)("rtl", ctx_r3.rtl)("itemTemplate", ctx_r3.itemTemplate)("itemLinkTemplate", ctx_r3.itemLinkTemplate)("openOnClick", ctx_r3.openOnClick)("index", ctx_r3.hierarchyIndex(idx_r3))("siblingIndex", idx_r3)("ngClass", item_r2.cssClass)("ngStyle", item_r2.cssStyle);
    ɵɵattribute("data-kendo-menu-index", ctx_r3.hierarchyIndex(idx_r3));
  }
}
function ListComponent_ng_container_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", item_r2.cssClass)("ngStyle", item_r2.cssStyle);
  }
}
function ListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListComponent_ng_container_0_li_1_Template, 1, 21, "li", 1)(2, ListComponent_ng_container_0_li_2_Template, 2, 2, "li", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r2.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.separator);
  }
}
var _c1 = ["link"];
var _c2 = ["popupTemplate"];
var _c3 = ["kendoMenuItem", ""];
var _c4 = (a0, a1) => ({
  item: a0,
  index: a1
});
function ItemComponent_span_0_ng_template_2_Template(rf, ctx) {
}
function ItemComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7, 2);
    ɵɵtemplate(2, ItemComponent_span_0_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const itemcontent_r2 = ɵɵreference(7);
    ɵɵclassProp("k-active", ctx_r0.opened);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", itemcontent_r2);
  }
}
function ItemComponent_a_1_ng_template_2_Template(rf, ctx) {
}
function ItemComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9, 2);
    ɵɵtemplate(2, ItemComponent_a_1_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const itemcontent_r2 = ɵɵreference(7);
    ɵɵclassProp("k-active", ctx_r0.opened);
    ɵɵattribute("href", ctx_r0.item.url, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", itemcontent_r2);
  }
}
function ItemComponent_2_ng_template_0_Template(rf, ctx) {
}
function ItemComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ItemComponent_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.linkTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.item, ctx_r0.index));
  }
}
function ItemComponent_div_3_ng_template_1_Template(rf, ctx) {
}
function ItemComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ItemComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.item.content)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.item.owner, ctx_r0.item.ownerIndex));
  }
}
function ItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 12);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("appendTo", ctx_r0.appendTo)("animate", ctx_r0.animate)("rtl", ctx_r0.rtl)("vertical", ctx_r0.vertical)("size", ctx_r0.size)("openOnClick", ctx_r0.openOnClick)("items", ctx_r0.children)("level", ctx_r0.level + 1)("index", ctx_r0.index)("itemTemplate", ctx_r0.itemTemplate)("itemLinkTemplate", ctx_r0.itemLinkTemplate)("ngClass", ctx_r0.menuListClasses);
    ɵɵattribute("id", ctx_r0.childId);
  }
}
function ItemComponent_ng_template_6_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function ItemComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 16);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.text);
  }
}
function ItemComponent_ng_template_6_2_ng_template_0_Template(rf, ctx) {
}
function ItemComponent_ng_template_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ItemComponent_ng_template_6_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.item, ctx_r0.index));
  }
}
function ItemComponent_ng_template_6_kendo_icon_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 17);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.fontIcon(ctx_r0.horizontal, ctx_r0.rtl))("svgIcon", ctx_r0.SVGIcon(ctx_r0.horizontal, ctx_r0.rtl));
  }
}
function ItemComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ItemComponent_ng_template_6_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 13)(1, ItemComponent_ng_template_6_ng_container_1_Template, 3, 1, "ng-container", 5)(2, ItemComponent_ng_template_6_2_Template, 1, 5, null, 5)(3, ItemComponent_ng_template_6_kendo_icon_wrapper_3_Template, 1, 2, "kendo-icon-wrapper", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.item.icon || ctx_r0.item.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.hasContent);
  }
}
var _c5 = ["kendoMenuExpandArrow", ""];
var _c6 = ["default"];
function ContextMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-menu", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("items", ctx_r0.rootItems)("appendTo", ctx_r0.appendTo)("size", ctx_r0.size)("vertical", ctx_r0.vertical)("openOnClick", ctx_r0.openOnClick)("hoverDelay", ctx_r0.hoverDelay)("animate", ctx_r0.animate)("menuItemTemplate", ctx_r0.itemTemplate.first == null ? null : ctx_r0.itemTemplate.first.templateRef)("menuItemLinkTemplate", ctx_r0.itemLinkTemplate.first == null ? null : ctx_r0.itemLinkTemplate.first.templateRef);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-menu",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372325,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var PARENT_REGEX = /_?\d+$/;
var SEPARATOR = "_";
var id = 0;
var itemIndexComparer = (a, b) => a.siblingIndex - b.siblingIndex;
var next = (idx, items, dir) => {
  let current = items[idx + dir];
  while (!current) {
    if (idx < 0) {
      idx = items.length - 1;
    } else if (idx >= items.length) {
      idx = 0;
    } else {
      idx += dir;
    }
    current = items[idx];
  }
  return current;
};
var ItemsService = class {
  constructor() {
    this.items = {};
    this.lists = [];
    this.idPrefix = `k-menu${id++}`;
  }
  get hasItems() {
    return Object.keys(this.items).length > 0;
  }
  childId(index) {
    return `${this.idPrefix}-child${index}`;
  }
  itemIndex(parentIndex, index) {
    return (parentIndex ? parentIndex + SEPARATOR : "") + index;
  }
  get(index) {
    return this.items[index];
  }
  add(item) {
    this.items[item.index] = item;
  }
  remove(item) {
    if (this.items[item.index] === item) {
      delete this.items[item.index];
    }
  }
  addList(list) {
    this.lists.push(list);
  }
  removeList(list) {
    const index = this.lists.indexOf(list);
    if (index >= 0) {
      this.lists.splice(index, 1);
    }
  }
  containsList(element) {
    return Boolean(this.lists.find((list) => list.element.nativeElement === element));
  }
  siblings(item) {
    const parentIndex = this.parentIndex(item.index);
    return this.filter((index) => this.parentIndex(index) === parentIndex);
  }
  otherSiblings(item) {
    const parentIndex = this.parentIndex(item.index);
    return this.filter((index) => this.parentIndex(index) === parentIndex && index !== item.index);
  }
  children(item) {
    return this.filter((index) => this.parentIndex(index) === item.index);
  }
  parent(item) {
    return this.items[this.parentIndex(item.index)];
  }
  root(item) {
    return this.items[this.indices(item.index)[0]];
  }
  indices(index) {
    return index.split(SEPARATOR);
  }
  filter(predicate) {
    const result = [];
    const items = this.items;
    for (const index in items) {
      if (predicate(index, items[index])) {
        result.push(items[index]);
      }
    }
    return result.sort(itemIndexComparer);
  }
  previous(item) {
    const siblings = this.siblings(item);
    const itemIndex = siblings.indexOf(item);
    return next(itemIndex, siblings, -1);
  }
  next(item) {
    const siblings = this.siblings(item);
    const itemIndex = siblings.indexOf(item);
    return next(itemIndex, siblings, 1);
  }
  hasParent(item, parent) {
    return item.index.startsWith(parent.index);
  }
  areSiblings(item1, item2) {
    return item1 !== item2 && this.parent(item1) === this.parent(item2);
  }
  forEach(callback) {
    const items = this.items;
    for (const index in items) {
      if (items.hasOwnProperty(index)) {
        callback(items[index]);
      }
    }
  }
  parentIndex(index) {
    return index.replace(PARENT_REGEX, "");
  }
};
ItemsService.ɵfac = function ItemsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemsService)();
};
ItemsService.ɵprov = ɵɵdefineInjectable({
  token: ItemsService,
  factory: ItemsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemsService, [{
    type: Injectable
  }], null, null);
})();
var canPerformAction = (item, action) => !(action === "open" && item.opened || action === "close" && !item.opened);
var MenuStateEvent = class extends PreventableEvent {
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var ActionsService = class {
  constructor(ngZone, items) {
    this.ngZone = ngZone;
    this.items = items;
    this.actions = [];
  }
  open(item, finished) {
    if (item.disabled) {
      return;
    }
    if (item.hasContent && !item.opened) {
      this.actions.push({
        name: "open",
        requiresZone: item.hasContentTemplates(),
        item,
        finished
      });
    } else if (finished) {
      finished();
    }
  }
  close(item) {
    this.closeChildren(item);
    this.closeItem(item);
  }
  closeItem(item) {
    if (item.opened) {
      this.actions.push({
        name: "close",
        item
      });
    }
  }
  closeToRoot(item) {
    this.closeChildren(item);
    let current = item;
    do {
      this.closeItem(current);
      current = this.items.parent(current);
    } while (current);
  }
  closeOthers(item) {
    this.closeChildren(item);
    let current = item;
    while (current) {
      const siblings = this.items.otherSiblings(current);
      this.closeItems(siblings);
      current = this.items.parent(current);
    }
  }
  closeAll() {
    this.items.forEach((item) => {
      if (item.opened && item.level === 0) {
        this.close(item);
      }
    });
  }
  select(item, domEvent, prevented, finished) {
    this.actions.push({
      name: "select",
      item,
      prevented,
      finished,
      domEvent
    });
  }
  emit(name, item, domEvent) {
    const owner = this.owner;
    const eventArgs = new MenuStateEvent({
      sender: owner,
      item: item.item,
      index: item.index,
      originalEvent: domEvent,
      hasContent: item.hasContent
    });
    owner[name].emit(eventArgs);
    if (owner.contextService) {
      owner.contextService.emit(name, eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  get hasPending() {
    return this.actions.length > 0;
  }
  execute(toExecute) {
    if (!this.hasPending && !toExecute) {
      return;
    }
    const actions = toExecute || this.clear();
    if (!NgZone.isInAngularZone() && this.requiresZone(actions)) {
      this.ngZone.run(() => {
        this.executeActions(actions);
      });
    } else {
      this.executeActions(actions);
    }
  }
  clear() {
    const actions = this.actions;
    this.actions = [];
    return actions;
  }
  executeActions(actions) {
    for (let idx = 0; idx < actions.length; idx++) {
      const {
        item,
        name,
        prevented,
        finished,
        domEvent
      } = actions[idx];
      if (!canPerformAction(item, name)) {
        continue;
      }
      if (!this.emit(name, item, domEvent)) {
        if (item[name]) {
          item[name]();
        }
        if (finished) {
          finished();
        }
      } else if (prevented) {
        prevented();
      }
    }
  }
  requiresZone(toExecute) {
    const actions = toExecute || this.actions;
    const owner = this.owner;
    const contextService = owner.contextService;
    for (let idx = 0; idx < actions.length; idx++) {
      const action = actions[idx];
      const name = action.name;
      if (action.requiresZone || name && (hasObservers(owner[name]) || contextService && contextService.hasObservers(name))) {
        return true;
      }
    }
    return false;
  }
  closeChildren(item) {
    if (!item.opened) {
      return;
    }
    const children = this.items.children(item);
    this.closeItems(children);
  }
  closeItems(items) {
    for (let idx = 0; idx < items.length; idx++) {
      this.close(items[idx]);
    }
  }
};
ActionsService.ɵfac = function ActionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ActionsService)(ɵɵinject(NgZone), ɵɵinject(ItemsService));
};
ActionsService.ɵprov = ɵɵdefineInjectable({
  token: ActionsService,
  factory: ActionsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ItemsService
    }];
  }, null);
})();
var DEFAULT_ACTIVE = "0";
var NO_SPACE_REGEX = /\S/;
var handlers = {};
handlers["37"] = "left";
handlers["39"] = "right";
handlers["38"] = "up";
handlers["40"] = "down";
handlers["36"] = "home";
handlers["35"] = "end";
handlers["32"] = "enter";
handlers["13"] = "enter";
handlers["27"] = "esc";
handlers["9"] = "tab";
var handlersRTL = Object.assign({}, handlers, {
  "37": "right",
  "39": "left"
});
function isPrintableCharacter(key) {
  return key.length === 1 && NO_SPACE_REGEX.test(key);
}
var resolvedPromise = Promise.resolve(null);
var NavigationService = class {
  constructor(items, actions, localization, ngZone) {
    this.items = items;
    this.actions = actions;
    this.localization = localization;
    this.ngZone = ngZone;
    this.vertical = false;
    this.activeIndex = DEFAULT_ACTIVE;
  }
  get focusedItem() {
    return this.items.get(this.focusedIdx);
  }
  get activeItem() {
    return this.items.get(this.activeIndex);
  }
  get handlers() {
    return this.localization.rtl ? handlersRTL : handlers;
  }
  focus(item) {
    if (item.index === this.focusedIdx) {
      return;
    }
    if (!this.activeItem || !this.items.hasParent(item, this.activeItem)) {
      this.setActive(item);
    }
    this.setFocus(item);
  }
  setFocus(item) {
    this.focusedIdx = item.index;
    item.focus();
  }
  focusLeave() {
    const focused = this.focusedItem;
    if (focused) {
      this.actions.closeToRoot(focused);
      this.actions.execute();
    }
    this.focusedIdx = null;
  }
  updateActive() {
    if (!this.activeItem && this.items.hasItems) {
      const firstItem = this.items.get(DEFAULT_ACTIVE);
      firstItem.toggleActive(true);
      this.ngZone.runOutsideAngular(() => {
        resolvedPromise.then(() => {
          this.activeIndex = DEFAULT_ACTIVE;
        });
      });
    }
  }
  keydown(e) {
    const current = this.focusedItem || this.activeItem;
    const handler = this.handlers[e.keyCode];
    if (!current) {
      return;
    }
    if (handler) {
      if (handler !== "tab") {
        e.preventDefault();
      }
      this[handler](current, e);
    } else if (isPrintableCharacter(e.key)) {
      this.search(current, e.key);
    }
    this.actions.execute();
  }
  focusIndex(index) {
    if (!index && this.activeItem) {
      this.setFocus(this.activeItem);
    } else if (index === "first") {
      this.focusFirst();
    } else if (index === "last") {
      this.focusLast();
    } else {
      const item = this.items.get(index);
      if (item) {
        this.focus(item);
      }
    }
  }
  focusFirst() {
    const items = this.items.siblings(this.items.get("0"));
    this.focus(items[0]);
  }
  focusLast() {
    const items = this.items.siblings(this.items.get("0"));
    this.focus(items[items.length - 1]);
  }
  search(current, key) {
    const siblings = this.items.siblings(current);
    const startIndex = siblings.indexOf(current);
    const items = siblings.slice(startIndex + 1).concat(siblings.slice(0, startIndex));
    for (let idx = 0; idx < items.length; idx++) {
      const sibling = items[idx];
      const text = sibling.item.text || "";
      if (text.toLowerCase().startsWith(key.toLowerCase())) {
        this.focus(sibling);
        break;
      }
    }
  }
  down(current) {
    if (current.level === 0 && !this.vertical) {
      if (current.hasContent) {
        this.actions.open(current, this.focusChild(current, 0));
      }
    } else {
      this.focus(this.items.next(current));
    }
  }
  up(current) {
    if (current.level === 0 && !this.vertical) {
      if (current.hasContent) {
        this.actions.open(current, this.focusChild(current, current.children.length - 1));
      }
    } else {
      this.focus(this.items.previous(current));
    }
  }
  left(current) {
    if (this.vertical && current.level === 0 && current.disabled) {
      return;
    }
    if (current.level > 1 || this.vertical && current.level > 0) {
      const parent = this.items.parent(current);
      this.focus(parent);
      this.actions.close(parent);
    } else if (this.vertical && current.level === 0 && !current.disabled) {
      if (current.hasContent) {
        this.actions.open(current, this.focusChild(current, current.children.length - 1));
      }
    } else {
      this.focus(this.items.previous(this.activeItem));
    }
  }
  right(current) {
    if (this.vertical && current.level === 0 && current.disabled) {
      return;
    }
    if (current.horizontal && !current.disabled) {
      if (current.hasContent) {
        this.actions.open(current, this.focusChild(current, 0));
      } else if (!this.vertical || current.level > 0) {
        this.focus(this.items.next(this.activeItem));
      }
    } else {
      this.focus(this.items.next(this.activeItem));
    }
  }
  home(current) {
    const siblings = this.items.siblings(current);
    this.focus(siblings[0]);
  }
  end(current) {
    const siblings = this.items.siblings(current);
    this.focus(siblings[siblings.length - 1]);
  }
  enter(current, domEvent) {
    const actions = this.actions;
    if (current.disabled) {
      return;
    }
    if (current.hasContent) {
      actions.select(current, domEvent);
      actions.open(current, this.focusChild(current, 0));
    } else {
      actions.select(current, domEvent, null, () => {
        current.navigate();
      });
      this.focus(this.items.root(current));
      actions.closeToRoot(current);
    }
  }
  esc(current) {
    if (current.level > 0) {
      const parent = this.items.parent(current);
      this.actions.close(parent);
      this.focus(parent);
    }
  }
  tab(current) {
    if (current.level > 0) {
      this.activeItem.focus();
    }
  }
  focusChild(item, index) {
    return () => {
      const child = this.items.children(item)[index];
      this.setFocus(child);
    };
  }
  setActive(item) {
    const focused = this.focusedItem;
    const active = this.items.root(item);
    if (this.activeItem) {
      this.activeItem.toggleActive(false);
    }
    this.activeIndex = active.index;
    active.toggleActive(true);
    if (focused) {
      this.actions.closeToRoot(focused);
      if (focused.level > 0) {
        this.actions.open(active);
      }
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(ItemsService), ɵɵinject(ActionsService), ɵɵinject(LocalizationService), ɵɵinject(NgZone));
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
      type: ItemsService
    }, {
      type: ActionsService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, null);
})();
var DISABLE_OPEN_ON_OVER_DELAY = 500;
var HoverService = class {
  constructor(actions, items) {
    this.actions = actions;
    this.items = items;
    this.delay = 100;
    this._openOnOver = true;
    this.scheduled = [];
  }
  get openOnOver() {
    return this._openOnOver;
  }
  set openOnOver(value) {
    this.cancelActions();
    this._openOnOver = value;
  }
  get hovered() {
    return this.items.get(this.hoveredIdx);
  }
  set hovered(item) {
    this.hoveredIdx = item ? item.index : null;
  }
  ngOnDestroy() {
    this.cancelActions();
  }
  over(item) {
    this.cancelActions((action) => action.name === "openOnOver");
    if (!this.hovered || this.hovered !== item) {
      this.actions.closeOthers(item);
      this.hovered = item;
      if ((item.level > 0 || this.openOnOver) && !item.disabled) {
        this.actions.open(item);
        this.cancelActions((action) => action.name === "close" && (item === action.item || this.items.hasParent(item, action.item)) || action.name === "open" && !this.items.hasParent(item, action.item));
      }
      this.scheduleActions();
    }
  }
  leave(disableOpenOnOver) {
    const hovered = this.hovered;
    if (hovered) {
      this.actions.closeToRoot(hovered);
      this.cancelActions((action) => action.name === "open");
      this.scheduleActions();
    }
    if (disableOpenOnOver && this._openOnOver) {
      this.scheduleDisableOpenOnOver();
    }
    this.hovered = null;
  }
  closeCurrent() {
    const hovered = this.hovered;
    if (hovered) {
      this.actions.closeToRoot(hovered);
      this.hovered = null;
    }
  }
  scheduleActions() {
    if (this.actions.hasPending) {
      const item = {};
      item.actions = this.actions.clear();
      item.id = setTimeout(() => {
        this.actions.execute(item.actions);
        this.removeScheduled(item);
      }, this.delay);
      this.scheduled.push(item);
    }
  }
  scheduleDisableOpenOnOver() {
    const item = {
      actions: [{
        name: "openOnOver"
      }]
    };
    item.id = setTimeout(() => {
      this._openOnOver = false;
      this.removeScheduled(item);
    }, Math.max(this.delay, DISABLE_OPEN_ON_OVER_DELAY));
    this.scheduled.push(item);
  }
  removeScheduled(item) {
    const scheduled = this.scheduled;
    for (let idx = 0; idx < scheduled.length; idx++) {
      if (scheduled[idx] === item) {
        scheduled.splice(idx, 1);
        return;
      }
    }
  }
  cancelActions(predicate) {
    const scheduled = this.scheduled;
    for (let idx = scheduled.length - 1; idx >= 0; idx--) {
      const item = scheduled[idx];
      const actions = item.actions;
      if (predicate) {
        for (let actionIdx = actions.length - 1; actionIdx >= 0; actionIdx--) {
          if (predicate(actions[actionIdx])) {
            actions.splice(actionIdx, 1);
          }
        }
      }
      if (!predicate || actions.length === 0) {
        clearTimeout(item.id);
        scheduled.splice(idx, 1);
      }
    }
  }
};
HoverService.ɵfac = function HoverService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HoverService)(ɵɵinject(ActionsService), ɵɵinject(ItemsService));
};
HoverService.ɵprov = ɵɵdefineInjectable({
  token: HoverService,
  factory: HoverService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: ActionsService
    }, {
      type: ItemsService
    }];
  }, null);
})();
var normalize = (settings) => settings && Object.assign({
  toggle: "select"
}, settings);
var NODE_INDEX = "data-kendo-menu-index";
var DEFAULT_ID = "kendo-matches-container";
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var matches = (element, selector) => (element.matches || element.msMatchesSelector).call(element, selector);
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
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
var toClassList = (classNames) => String(classNames).trim().split(" ");
var hasClass = (element, name) => {
  return toClassList(element.className).indexOf(name) >= 0;
};
var matchesClasses = (classes) => {
  const list = toClassList(classes);
  return (element) => {
    const classList = toClassList(element.className);
    return Boolean(list.find((name) => classList.indexOf(name) >= 0));
  };
};
var nodeIndex = (node) => node.getAttribute(NODE_INDEX);
var closestItem = (node, scope) => closestInScope(node, nodeIndex, scope);
var closestList = (node) => {
  let list = closest(node, matchesClasses("k-menu-popup k-menu k-menu-group"));
  if (list && hasClass(list, "k-menu-popup")) {
    list = list.querySelector(".k-menu-group");
  }
  return list;
};
var inMenu = (node, itemsService) => {
  if (node === itemsService.lists[0].element.nativeElement) {
    return false;
  }
  const list = closestList(node);
  return list && itemsService.containsList(list);
};
var findInContainer = (element, selector, container) => {
  const id2 = container.getAttribute("id");
  if (!id2) {
    container.setAttribute("id", DEFAULT_ID);
  }
  const contextSelector = `#${id2 || DEFAULT_ID} ${selector}`;
  const match = closestInScope(element, (node) => matches(node, contextSelector), container);
  if (!id2) {
    container.removeAttribute("id");
  }
  return match;
};
var ContextMenuService = class {
  constructor() {
    this.keydown = new EventEmitter();
  }
  emit(name, args) {
    this.owner.emitMenuEvent(name, args);
  }
  hasObservers(name) {
    return this.owner && hasObservers(this.owner[name]);
  }
  leaveMenu(e) {
    return this.items ? !inMenu(e.target, this.items) : true;
  }
};
ContextMenuService.ɵfac = function ContextMenuService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuService)();
};
ContextMenuService.ɵprov = ɵɵdefineInjectable({
  token: ContextMenuService,
  factory: ContextMenuService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var ItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ItemTemplateDirective.ɵfac = function ItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
ItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ItemTemplateDirective,
  selectors: [["", "kendoMenuItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMenuItemTemplate]",
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
var ItemLinkTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ItemLinkTemplateDirective.ɵfac = function ItemLinkTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemLinkTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
ItemLinkTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ItemLinkTemplateDirective,
  selectors: [["", "kendoMenuItemLinkTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemLinkTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMenuItemLinkTemplate]",
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
var ItemContentTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ItemContentTemplateDirective.ɵfac = function ItemContentTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemContentTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
ItemContentTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ItemContentTemplateDirective,
  selectors: [["", "kendoMenuItemContentTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemContentTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMenuItemContentTemplate]",
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
var MenuItemComponent = class {
  /**
   * @hidden
   */
  get template() {
    if (this.itemTemplate && this.itemTemplate.length) {
      return this.itemTemplate.first.templateRef;
    }
  }
  /**
   * @hidden
   */
  get linkTemplate() {
    if (this.itemLinkTemplate && this.itemLinkTemplate.length) {
      return this.itemLinkTemplate.first.templateRef;
    }
  }
  /**
   * @hidden
   */
  get contentTemplate() {
    if (this.itemContentTemplate && this.itemContentTemplate.length) {
      return this.itemContentTemplate.first.templateRef;
    }
  }
  /**
   * @hidden
   */
  get items() {
    if (this.children.length) {
      return this.children.toArray().filter((c) => c !== this);
    }
  }
};
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MenuItemComponent)();
};
MenuItemComponent.ɵcmp = ɵɵdefineComponent({
  type: MenuItemComponent,
  selectors: [["kendo-menu-item"]],
  contentQueries: function MenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, ItemLinkTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, ItemContentTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, MenuItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemLinkTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemContentTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  inputs: {
    text: "text",
    url: "url",
    disabled: "disabled",
    cssClass: "cssClass",
    cssStyle: "cssStyle",
    icon: "icon",
    svgIcon: "svgIcon",
    data: "data",
    separator: "separator"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MenuItemComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemComponent, [{
    type: Component,
    args: [{
      selector: "kendo-menu-item",
      template: ``,
      standalone: true
    }]
  }], null, {
    text: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    separator: [{
      type: Input
    }],
    itemTemplate: [{
      type: ContentChildren,
      args: [ItemTemplateDirective]
    }],
    itemLinkTemplate: [{
      type: ContentChildren,
      args: [ItemLinkTemplateDirective]
    }],
    itemContentTemplate: [{
      type: ContentChildren,
      args: [ItemContentTemplateDirective]
    }],
    children: [{
      type: ContentChildren,
      args: [MenuItemComponent]
    }]
  });
})();
var MenuBase = class {
  constructor() {
    this.vertical = false;
    this.openOnClick = false;
    this.hoverDelay = 100;
    this.animate = true;
    this.size = "medium";
  }
  /**
   * @hidden
   */
  get rootItems() {
    return this.items || (this.children ? this.children.toArray() : []);
  }
};
MenuBase.ɵfac = function MenuBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MenuBase)();
};
MenuBase.ɵcmp = ɵɵdefineComponent({
  type: MenuBase,
  selectors: [["kendo-menu-base"]],
  contentQueries: function MenuBase_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, ItemLinkTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, MenuItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemLinkTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  inputs: {
    items: "items",
    vertical: "vertical",
    openOnClick: "openOnClick",
    hoverDelay: "hoverDelay",
    animate: "animate",
    size: "size"
  },
  decls: 0,
  vars: 0,
  template: function MenuBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuBase, [{
    type: Component,
    args: [{
      selector: "kendo-menu-base",
      template: ``
    }]
  }], null, {
    items: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    openOnClick: [{
      type: Input
    }],
    hoverDelay: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemTemplate: [{
      type: ContentChildren,
      args: [ItemTemplateDirective]
    }],
    itemLinkTemplate: [{
      type: ContentChildren,
      args: [ItemLinkTemplateDirective]
    }],
    children: [{
      type: ContentChildren,
      args: [MenuItemComponent]
    }]
  });
})();
var defined = (value) => typeof value !== "undefined";
var bodyFactory = () => {
  if (isDocumentAvailable()) {
    return new ElementRef(document.body);
  }
};
var getSizeClass = (size) => {
  const SIZE_CLASSES = {
    "small": "k-menu-group-sm",
    "medium": "k-menu-group-md",
    "large": "k-menu-group-lg"
  };
  return SIZE_CLASSES[size];
};
var getFontIcon = (horizontal, rtl) => {
  const icon = horizontal ? rtl ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down";
  return icon;
};
var getSVGIcon = (horizontal, rtl) => {
  const icon = horizontal ? rtl ? caretAltLeftIcon : caretAltRightIcon : caretAltDownIcon;
  return icon;
};
var POPUP_ALIGN = {
  vertical: "top",
  horizontal: "left"
};
var POPUP_ALIGN_RTL = {
  vertical: "top",
  horizontal: "right"
};
var VERTICAL_COLLISION = {
  vertical: "flip",
  horizontal: "fit"
};
var HORIZONTAL_COLLISION = {
  vertical: "fit",
  horizontal: "flip"
};
var POPUP_SETTINGS_RTL = {
  vertical: {
    anchor: {
      vertical: "bottom",
      horizontal: "right"
    },
    popup: POPUP_ALIGN_RTL,
    collision: VERTICAL_COLLISION,
    animate: "down"
  },
  horizontal: {
    anchor: {
      vertical: "top",
      horizontal: "left"
    },
    popup: POPUP_ALIGN_RTL,
    collision: HORIZONTAL_COLLISION,
    animate: "left"
  }
};
var POPUP_SETTINGS = {
  vertical: {
    anchor: {
      vertical: "bottom",
      horizontal: "left"
    },
    popup: POPUP_ALIGN,
    collision: VERTICAL_COLLISION,
    animate: "down"
  },
  horizontal: {
    anchor: {
      vertical: "top",
      horizontal: "right"
    },
    popup: POPUP_ALIGN,
    collision: HORIZONTAL_COLLISION,
    animate: "right"
  }
};
var ListComponent = class {
  constructor(itemsService, hover, actions, navigation, renderer, ngZone, element) {
    this.itemsService = itemsService;
    this.hover = hover;
    this.actions = actions;
    this.navigation = navigation;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
    this.animate = true;
    this.size = "medium";
  }
  hierarchyIndex(index) {
    return this.itemsService.itemIndex(this.index, index);
  }
  ngOnInit() {
    this.itemsService.addList(this);
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.itemsService.removeList(this);
    if (this.domSubscriptions) {
      this.domSubscriptions();
    }
  }
  initDomEvents() {
    if (!isDocumentAvailable() || !this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const element = this.element.nativeElement;
      const container = this.level > 0 ? closest(element, (node) => hasClass(node, "k-popup")) : element;
      const overSubscription = this.renderer.listen(element, "mouseover", (e) => {
        if (e.target === element && this.level === 0) {
          this.onLeave();
        } else {
          const item = this.nodeItem(e.target) || this.itemsService.get(this.index);
          if (item && !(this.openOnClick && this.openOnClick.toggle === "click" && item.level === 0 && !item.hasContent)) {
            this.hover.over(item);
          }
        }
      });
      const leaveSubscription = this.renderer.listen(container, "mouseleave", (e) => {
        if (this.leavesMenu(e)) {
          this.onLeave();
        }
      });
      const keydownSubscription = this.renderer.listen(element, "keydown", (e) => {
        if (hasClass(e.target, "k-menu-item")) {
          this.navigation.keydown(e);
        }
      });
      const blurSubscription = this.renderer.listen(element, "focusout", (e) => {
        if (this.leavesMenu(e)) {
          this.navigation.focusLeave();
        }
      });
      const touchSubscription = this.renderer.listen(document, "touchstart", (e) => {
        if (inMenu(e.target, this.itemsService)) {
          const item = this.nodeItem(e.target);
          this.navigation.focus(item);
          if (!item.opened) {
            this.hover.over(item);
          }
        } else if (this.navigation.focusedIdx) {
          const activeItem = this.itemsService.get(this.navigation.activeIndex);
          this.onLeave();
          activeItem.blur();
        }
      });
      const clickSubscription = this.renderer.listen(element, "click", this.clickHandler.bind(this));
      this.domSubscriptions = () => {
        overSubscription();
        leaveSubscription();
        keydownSubscription();
        blurSubscription();
        clickSubscription();
        touchSubscription();
      };
    });
  }
  leavesMenu(e) {
    if (!e.relatedTarget) {
      return true;
    }
    return !inMenu(e.relatedTarget, this.itemsService);
  }
  onLeave() {
    const openOnClick = this.openOnClick;
    if (!openOnClick || openOnClick.toggle !== "click") {
      this.hover.leave(openOnClick && openOnClick.toggle === "leave");
    }
  }
  nodeItem(target) {
    const node = closestItem(target, this.element.nativeElement);
    if (node) {
      const index = nodeIndex(node);
      return this.itemsService.get(index);
    }
  }
  clickHandler(e) {
    if (isFocusable(e.target) && !hasClass(e.target, "k-menu-item")) {
      return;
    }
    const item = this.nodeItem(e.target);
    if (!item || item.isContent || item.navigating) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    this.actions.select(item, e, () => {
      e.preventDefault();
    });
    this.navigation.focus(item);
    if (item.level > 0 && !item.hasContent) {
      this.actions.closeToRoot(item);
    }
    if (this.openOnClick) {
      const hover = this.hover;
      if (item.opened) {
        if (item.level === 0) {
          hover.openOnOver = false;
          this.actions.close(item);
        }
      } else if (item.hasContent) {
        hover.openOnOver = true;
        this.actions.closeOthers(item);
        this.actions.open(item);
      } else {
        hover.openOnOver = false;
        if (item.level === 0 && this.openOnClick.toggle === "click") {
          this.hover.closeCurrent();
        }
      }
    }
    this.actions.execute();
  }
};
ListComponent.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListComponent)(ɵɵdirectiveInject(ItemsService), ɵɵdirectiveInject(HoverService), ɵɵdirectiveInject(ActionsService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["", "kendoMenuList", ""]],
  inputs: {
    appendTo: "appendTo",
    items: "items",
    level: "level",
    index: "index",
    animate: "animate",
    size: "size",
    vertical: "vertical",
    rtl: "rtl",
    openOnClick: "openOnClick",
    itemTemplate: "itemTemplate",
    itemLinkTemplate: "itemLinkTemplate"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoMenuItem", "", "role", "menuitem", "class", "k-item k-menu-item", 3, "appendTo", "item", "level", "size", "vertical", "animate", "rtl", "itemTemplate", "itemLinkTemplate", "openOnClick", "index", "siblingIndex", "ngClass", "ngStyle", "k-first", "k-last", "k-disabled", 4, "ngIf"], ["class", "k-separator k-item", "aria-hidden", "true", 3, "ngClass", "ngStyle", 4, "ngIf"], ["kendoMenuItem", "", "role", "menuitem", 1, "k-item", "k-menu-item", 3, "appendTo", "item", "level", "size", "vertical", "animate", "rtl", "itemTemplate", "itemLinkTemplate", "openOnClick", "index", "siblingIndex", "ngClass", "ngStyle"], ["aria-hidden", "true", 1, "k-separator", "k-item", 3, "ngClass", "ngStyle"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ListComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: () => [NgForOf, NgIf, ItemComponent, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "[kendoMenuList]",
      template: `
        <ng-container *ngFor="let item of items; let idx = index">
            <li *ngIf="!item.separator" 
                kendoMenuItem
                [appendTo]="appendTo"
                [item]="item"
                [level]="level"
                [size]="size"
                [vertical]="vertical"
                [animate]="animate"
                [rtl]="rtl"
                [itemTemplate]="itemTemplate"
                [itemLinkTemplate]="itemLinkTemplate"
                [openOnClick]="openOnClick"
                [index]="hierarchyIndex(idx)"
                [siblingIndex]="idx"
                [attr.${NODE_INDEX}]="hierarchyIndex(idx)"
                [ngClass]="item.cssClass"
                [ngStyle]="item.cssStyle"
                role="menuitem"
                class="k-item k-menu-item"
                [class.k-first]="idx === 0"
                [class.k-last]="idx === items.length - 1"
                [class.k-disabled]="item.disabled"></li>
            <li 
                *ngIf="item.separator"
                class="k-separator k-item"
                [ngClass]="item.cssClass"
                aria-hidden="true"
                [ngStyle]="item.cssStyle">
                &nbsp;
            </li>
        </ng-container>
    `,
      standalone: true,
      imports: [NgForOf, NgIf, forwardRef(() => ItemComponent), NgClass, NgStyle]
    }]
  }], function() {
    return [{
      type: ItemsService
    }, {
      type: HoverService
    }, {
      type: ActionsService
    }, {
      type: NavigationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    appendTo: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    rtl: [{
      type: Input
    }],
    openOnClick: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemLinkTemplate: [{
      type: Input
    }]
  });
})();
var ItemComponent = class {
  constructor(itemsService, navigation, changeDetector, renderer, popupService, element, contextService) {
    this.itemsService = itemsService;
    this.navigation = navigation;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.popupService = popupService;
    this.element = element;
    this.contextService = contextService;
    this.animate = true;
    this.size = "medium";
    this.openOnClick = false;
    this.fontIcon = getFontIcon;
    this.SVGIcon = getSVGIcon;
    this.opened = false;
    this.navigating = false;
    this.destroyed = false;
  }
  set index(index) {
    if (this._index && this._index !== index) {
      this.itemsService.remove(this);
      this._index = index;
      this.itemsService.add(this);
    } else {
      this._index = index;
    }
    this.childId = this.itemsService.childId(index);
  }
  get index() {
    return this._index;
  }
  get disabled() {
    return this.item.disabled;
  }
  get hasPopup() {
    return this.hasContent ? true : null;
  }
  get label() {
    return this.item.text ? this.item.text : null;
  }
  get popupSettings() {
    const settings = this.rtl ? POPUP_SETTINGS_RTL : POPUP_SETTINGS;
    return this.horizontal ? settings.horizontal : settings.vertical;
  }
  get horizontal() {
    return this.vertical || this.level > 0;
  }
  get hasLink() {
    return Boolean(this.item.url);
  }
  get linkTemplate() {
    return this.item.linkTemplate || this.itemLinkTemplate;
  }
  get hasContent() {
    const items = this.item.items;
    return items && items.length || this.item.contentTemplate;
  }
  get isContent() {
    return Boolean(this.item.content);
  }
  get iconClass() {
    return `k-i-${this.item.icon}`;
  }
  get isContextMenu() {
    return Boolean(this.contextService);
  }
  get menuListClasses() {
    const sizeClass = getSizeClass(this.size);
    return this.isContextMenu ? `k-context-menu k-menu-group ${sizeClass}` : `k-menu-group ${sizeClass}`;
  }
  get children() {
    const item = this.item;
    if (item.contentTemplate) {
      if (!this.contentItems) {
        this.contentItems = [{
          content: item.contentTemplate,
          owner: item,
          ownerIndex: this.index
        }];
      }
      return this.contentItems;
    }
    return item.items;
  }
  get template() {
    return this.item.template || this.itemTemplate;
  }
  hasContentTemplates() {
    const item = this.item;
    return this.itemTemplate || item.contentTemplate || this.itemLinkTemplate || item.items && item.items.find((current) => current.template || current.linkTemplate);
  }
  ngOnInit() {
    this.itemsService.add(this);
  }
  ngAfterViewInit() {
    if (this.hasContent) {
      this.setAttribute("aria-expanded", this.opened.toString());
    }
    this.index === this.navigation.activeIndex ? this.setAttribute("tabindex", "0") : this.setAttribute("tabindex", "-1");
  }
  ngOnDestroy() {
    this.itemsService.remove(this);
    this.destroyed = true;
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  focus() {
    this.element.nativeElement.focus();
  }
  blur() {
    this.element.nativeElement.blur();
  }
  toggleActive(isActive) {
    if (isActive) {
      this.setAttribute("tabindex", "0");
    } else {
      this.setAttribute("tabindex", "-1");
    }
  }
  open() {
    if (!this.destroyed && this.hasContent && !this.opened) {
      const popupSettings = this.popupSettings;
      const animate = this.animate ? Object.assign({}, this.animate, {
        direction: popupSettings.animate
      }) : false;
      this.opened = true;
      this.popupRef = this.popupService.open({
        appendTo: this.appendTo,
        popupAlign: popupSettings.popup,
        anchorAlign: popupSettings.anchor,
        collision: popupSettings.collision,
        anchor: this.element,
        positionMode: "absolute",
        content: this.popupTemplate,
        popupClass: {
          "k-rtl": this.rtl,
          "k-menu-popup": true
        },
        animate
      });
      this.setAttribute("aria-expanded", "true");
      this.setAttribute("aria-controls", this.childId);
      this.changeDetector.detectChanges();
    }
  }
  close() {
    if (!this.destroyed && this.opened) {
      this.opened = false;
      if (this.popupRef) {
        this.popupRef.close();
        this.popupRef = null;
      }
      this.changeDetector.detectChanges();
      this.setAttribute("aria-expanded", "false");
      this.renderer.removeAttribute(this.element.nativeElement, "aria-controls");
    }
  }
  navigate() {
    let link;
    if (this.linkTemplate) {
      link = this.element.nativeElement.querySelector("a.k-menu-link");
    } else if (this.hasLink) {
      link = this.link.nativeElement;
    }
    if (link) {
      this.navigating = true;
      link.click();
      this.navigating = false;
    }
  }
  setAttribute(name, value) {
    this.renderer.setAttribute(this.element.nativeElement, name, value);
  }
};
ItemComponent.ɵfac = function ItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemComponent)(ɵɵdirectiveInject(ItemsService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ContextMenuService, 8));
};
ItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ItemComponent,
  selectors: [["", "kendoMenuItem", ""]],
  viewQuery: function ItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.link = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function ItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-haspopup", ctx.hasPopup)("aria-label", ctx.label);
    }
  },
  inputs: {
    appendTo: "appendTo",
    item: "item",
    level: "level",
    index: "index",
    siblingIndex: "siblingIndex",
    animate: "animate",
    size: "size",
    vertical: "vertical",
    rtl: "rtl",
    openOnClick: "openOnClick",
    itemTemplate: "itemTemplate",
    itemLinkTemplate: "itemLinkTemplate"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([PopupService, {
    provide: POPUP_CONTAINER,
    useFactory: bodyFactory
  }]), ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 8,
  vars: 4,
  consts: [["popupTemplate", ""], ["itemcontent", ""], ["link", ""], ["class", "k-link k-menu-link", "role", "presentation", 3, "k-active", 4, "ngIf"], ["class", "k-link k-menu-link", "tabindex", "-1", "role", "presentation", 3, "k-active", 4, "ngIf"], [4, "ngIf"], ["class", "k-content", "role", "presentation", 4, "ngIf"], ["role", "presentation", 1, "k-link", "k-menu-link"], [3, "ngTemplateOutlet"], ["tabindex", "-1", "role", "presentation", 1, "k-link", "k-menu-link"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "k-content"], ["kendoMenuList", "", "role", "menu", 3, "appendTo", "animate", "rtl", "vertical", "size", "openOnClick", "items", "level", "index", "itemTemplate", "itemLinkTemplate", "ngClass"], ["role", "presentation", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-menu-expand-arrow", "aria-hidden", "true", 3, "name", "svgIcon", 4, "ngIf"], ["role", "presentation", 3, "name", "svgIcon"], [1, "k-menu-link-text"], ["aria-hidden", "true", 1, "k-menu-expand-arrow", 3, "name", "svgIcon"]],
  template: function ItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ItemComponent_span_0_Template, 3, 3, "span", 3)(1, ItemComponent_a_1_Template, 3, 4, "a", 4)(2, ItemComponent_2_Template, 1, 5, null, 5)(3, ItemComponent_div_3_Template, 2, 5, "div", 6)(4, ItemComponent_ng_template_4_Template, 1, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, ItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.hasLink && !ctx.item.content && !ctx.linkTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.item.url && !ctx.linkTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.linkTemplate && !ctx.item.content);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.item.content);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, ListComponent, NgClass, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemComponent, [{
    type: Component,
    args: [{
      providers: [PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "[kendoMenuItem]",
      template: `
    <span *ngIf="!hasLink && !item.content && !linkTemplate" class="k-link k-menu-link" #link
        [class.k-active]="opened" role="presentation">
        <ng-template [ngTemplateOutlet]="itemcontent">
        </ng-template>
    </span>
    <a *ngIf="item.url && !linkTemplate" class="k-link k-menu-link" #link [attr.href]="item.url"
        [class.k-active]="opened" tabindex="-1" role="presentation">
        <ng-template [ngTemplateOutlet]="itemcontent">
        </ng-template>
    </a>
    <ng-template *ngIf="linkTemplate && !item.content" [ngTemplateOutlet]="linkTemplate"
        [ngTemplateOutletContext]="{ item: item, index: index }">
    </ng-template>

    <div class="k-content" *ngIf="item.content" role="presentation">
        <ng-template [ngTemplateOutlet]="item.content" [ngTemplateOutletContext]="{ item: item.owner, index: item.ownerIndex }">
        </ng-template>
    </div>

    <ng-template #popupTemplate>
        <ul kendoMenuList
            [appendTo]="appendTo"
            [attr.id]="childId"
            [animate]="animate"
            [rtl]="rtl"
            [vertical]="vertical"
            [size]="size"
            [openOnClick]="openOnClick"
            [items]="children"
            [level]="level + 1"
            [index]="index"
            [itemTemplate]="itemTemplate"
            [itemLinkTemplate]="itemLinkTemplate"
            [ngClass]="menuListClasses"
            role="menu">
        </ul>
    </ng-template>

    <ng-template #itemcontent>
        <kendo-icon-wrapper *ngIf="item.icon || item.svgIcon" [name]="item.icon" [svgIcon]="item.svgIcon" role="presentation"></kendo-icon-wrapper>
        <ng-container *ngIf="!template">
            <span class="k-menu-link-text">{{ item.text }}</span>
        </ng-container>
        <ng-template *ngIf="template" [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ item: item, index: index }">
        </ng-template>
        <kendo-icon-wrapper *ngIf="hasContent" [name]="fontIcon(horizontal, rtl)" [svgIcon]="SVGIcon(horizontal, rtl)" class="k-menu-expand-arrow" aria-hidden="true"></kendo-icon-wrapper>
    </ng-template>
  `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, ListComponent, NgClass, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ItemsService
    }, {
      type: NavigationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: ContextMenuService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    appendTo: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    siblingIndex: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    rtl: [{
      type: Input
    }],
    openOnClick: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemLinkTemplate: [{
      type: Input
    }],
    link: [{
      type: ViewChild,
      args: ["link", {
        static: false
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    disabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    hasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }]
  });
})();
var MenuComponent = class extends MenuBase {
  constructor(itemsService, hover, actions, navigation, localization, ngZone, renderer, contextService) {
    super();
    this.itemsService = itemsService;
    this.hover = hover;
    this.actions = actions;
    this.navigation = navigation;
    this.localization = localization;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.contextService = contextService;
    this.ariaRole = "menubar";
    this.select = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    validatePackage(packageMetadata);
    this.actions.owner = this;
    if (contextService) {
      contextService.items = this.itemsService;
      this.contextKeyDownSubscription = contextService.keydown.subscribe(this.contextKeyDown.bind(this));
    }
  }
  /**
   * @hidden
   */
  get ariaOrientation() {
    if (this.vertical) {
      return "vertical";
    }
  }
  /**
   * @hidden
   */
  get isContextMenu() {
    return Boolean(this.contextService);
  }
  get direction() {
    return this.rtl;
  }
  get rtl() {
    return this.localization.rtl;
  }
  /**
   * @hidden
   */
  get menuClasses() {
    const sizeClass = getSizeClass(this.size);
    const staticClasses = "k-reset k-header k-menu";
    if (this.isContextMenu) {
      return `k-context-menu k-menu-group ${sizeClass}`;
    }
    return `${staticClasses} k-menu-${this.vertical ? "vertical" : "horizontal"}`;
  }
  /**
   * Opens or closes the specified Menu items.
   *
   * @param open - A Boolean value which indicates if the items will be opened or closed.
   * @param indices - One or more values which represent the hierarchical indices of the items that will be opened or closed.
   */
  toggle(open, ...indices) {
    for (let idx = 0; idx < indices.length; idx++) {
      const item = this.itemsService.get(indices[idx]);
      if (item && !item.disabled) {
        if (open) {
          item.open();
        } else {
          item.close();
        }
      }
    }
  }
  /**
   * @hidden
   */
  focus(index) {
    this.navigation.focusIndex(index);
  }
  ngOnChanges(changes) {
    this.navigation.vertical = this.vertical;
    this.hover.delay = this.hoverDelay;
    if (changes.openOnClick) {
      const openOnClick = this.openOnClick = normalize(this.openOnClick);
      this.hover.openOnOver = !openOnClick;
      if (openOnClick && openOnClick.toggle === "click") {
        this.attachCloseClick();
      } else {
        this.unsubscribeClick();
      }
    }
  }
  ngAfterViewChecked() {
    this.navigation.updateActive();
  }
  ngOnDestroy() {
    this.unsubscribeClick();
    if (this.contextService) {
      this.contextService.items = null;
      this.contextKeyDownSubscription.unsubscribe();
    }
  }
  attachCloseClick() {
    if (!this.closeClickSubscription && isDocumentAvailable()) {
      this.ngZone.runOutsideAngular(() => {
        this.closeClickSubscription = this.renderer.listen("document", "click", (e) => {
          if (!inMenu(e.target, this.itemsService)) {
            this.hover.openOnOver = false;
            this.actions.closeAll();
            this.actions.execute();
          }
        });
      });
    }
  }
  unsubscribeClick() {
    if (this.closeClickSubscription) {
      this.closeClickSubscription();
    }
  }
  contextKeyDown(e) {
    if (!this.itemsService.hasItems) {
      return;
    }
    const keyCode = e.keyCode;
    const rtl = this.localization.rtl;
    const first = keyCode === Keys.ArrowDown || keyCode === Keys.ArrowRight;
    const last2 = keyCode === Keys.ArrowUp || keyCode === Keys.ArrowLeft;
    let index;
    if (first && !rtl || last2 && rtl) {
      index = "first";
    } else if (first && rtl || last2 && !rtl) {
      index = "last";
    }
    if (index) {
      e.preventDefault();
      this.focus(index);
    }
  }
};
MenuComponent.ɵfac = function MenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MenuComponent)(ɵɵdirectiveInject(ItemsService), ɵɵdirectiveInject(HoverService), ɵɵdirectiveInject(ActionsService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ContextMenuService, 8));
};
MenuComponent.ɵcmp = ɵɵdefineComponent({
  type: MenuComponent,
  selectors: [["kendo-menu"]],
  hostVars: 2,
  hostBindings: function MenuComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-rtl", ctx.direction);
    }
  },
  inputs: {
    appendTo: "appendTo",
    menuItemTemplate: "menuItemTemplate",
    ariaRole: "ariaRole",
    menuItemLinkTemplate: "menuItemLinkTemplate"
  },
  outputs: {
    select: "select",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([ItemsService, ActionsService, NavigationService, HoverService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.menu"
  }, {
    provide: MenuBase,
    useExisting: forwardRef(() => MenuComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 13,
  consts: [["kendoMenuList", "", 3, "items", "level", "appendTo", "size", "vertical", "rtl", "animate", "openOnClick", "itemTemplate", "itemLinkTemplate", "ngClass"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "ul", 0);
    }
    if (rf & 2) {
      ɵɵproperty("items", ctx.rootItems)("level", 0)("appendTo", ctx.appendTo)("size", ctx.size)("vertical", ctx.vertical)("rtl", ctx.rtl)("animate", ctx.animate)("openOnClick", ctx.openOnClick)("itemTemplate", (ctx.itemTemplate.first == null ? null : ctx.itemTemplate.first.templateRef) || ctx.menuItemTemplate)("itemLinkTemplate", (ctx.itemLinkTemplate.first == null ? null : ctx.itemLinkTemplate.first.templateRef) || ctx.menuItemLinkTemplate)("ngClass", ctx.menuClasses);
      ɵɵattribute("role", ctx.ariaRole)("aria-orientation", ctx.ariaOrientation);
    }
  },
  dependencies: [ListComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoMenu",
      providers: [ItemsService, ActionsService, NavigationService, HoverService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.menu"
      }, {
        provide: MenuBase,
        useExisting: forwardRef(() => MenuComponent)
      }],
      selector: "kendo-menu",
      template: `
        <ul
            [attr.role]="ariaRole"
            [attr.aria-orientation]="ariaOrientation"
            kendoMenuList [items]="rootItems" [level]="0" [appendTo]="appendTo"
            [size]="size" [vertical]="vertical" [rtl]="rtl" [animate]="animate" [openOnClick]="openOnClick"
            [itemTemplate]="itemTemplate.first?.templateRef || menuItemTemplate"
            [itemLinkTemplate]="itemLinkTemplate.first?.templateRef || menuItemLinkTemplate"
            [ngClass]="menuClasses">
        </ul>
    `,
      standalone: true,
      imports: [ListComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ItemsService
    }, {
      type: HoverService
    }, {
      type: ActionsService
    }, {
      type: NavigationService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ContextMenuService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    appendTo: [{
      type: Input
    }],
    menuItemTemplate: [{
      type: Input
    }],
    ariaRole: [{
      type: Input
    }],
    menuItemLinkTemplate: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["class.k-rtl"]
    }]
  });
})();
var LinkDirective = class {
  constructor(itemsService) {
    this.itemsService = itemsService;
    this.hostClasses = true;
    this.role = "presentation";
    this.tabindex = "-1";
  }
  get activeClass() {
    return this.item.opened;
  }
  ngOnInit() {
    if (isDevMode() && !this.index) {
      throw new Error("The kendoMenuItemLink directive requires the item index to be set.");
    }
    this.item = this.itemsService.get(this.index) || {};
  }
};
LinkDirective.ɵfac = function LinkDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LinkDirective)(ɵɵdirectiveInject(ItemsService));
};
LinkDirective.ɵdir = ɵɵdefineDirective({
  type: LinkDirective,
  selectors: [["", "kendoMenuItemLink", ""]],
  hostVars: 8,
  hostBindings: function LinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex);
      ɵɵclassProp("k-link", ctx.hostClasses)("k-menu-link", ctx.hostClasses)("k-active", ctx.activeClass);
    }
  },
  inputs: {
    index: [0, "kendoMenuItemLink", "index"]
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMenuItemLink]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ItemsService
    }];
  }, {
    index: [{
      type: Input,
      args: ["kendoMenuItemLink"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-link"]
    }, {
      type: HostBinding,
      args: ["class.k-menu-link"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    activeClass: [{
      type: HostBinding,
      args: ["class.k-active"]
    }]
  });
})();
var ExpandArrowComponent = class {
  constructor(itemsService) {
    this.itemsService = itemsService;
    this.hostClasses = true;
    this.ariaHidden = "true";
  }
  ngOnInit() {
    if (isDevMode() && !this.index) {
      throw new Error("The kendoMenuExpandArrow component requires the item index to be set.");
    }
    this.item = this.itemsService.get(this.index) || {};
    this.fontIcon = getFontIcon(this.item.horizontal, this.item.rtl);
    this.SVGIcon = getSVGIcon(this.item.horizontal, this.item.rtl);
  }
};
ExpandArrowComponent.ɵfac = function ExpandArrowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExpandArrowComponent)(ɵɵdirectiveInject(ItemsService));
};
ExpandArrowComponent.ɵcmp = ɵɵdefineComponent({
  type: ExpandArrowComponent,
  selectors: [["", "kendoMenuExpandArrow", ""]],
  hostVars: 3,
  hostBindings: function ExpandArrowComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.ariaHidden);
      ɵɵclassProp("k-menu-expand-arrow", ctx.hostClasses);
    }
  },
  inputs: {
    index: [0, "kendoMenuExpandArrow", "index"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c5,
  decls: 1,
  vars: 2,
  consts: [[3, "name", "svgIcon"]],
  template: function ExpandArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "kendo-icon-wrapper", 0);
    }
    if (rf & 2) {
      ɵɵproperty("name", ctx.fontIcon)("svgIcon", ctx.SVGIcon);
    }
  },
  dependencies: [IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpandArrowComponent, [{
    type: Component,
    args: [{
      selector: "[kendoMenuExpandArrow]",
      template: `<kendo-icon-wrapper [name]="fontIcon" [svgIcon]="SVGIcon"></kendo-icon-wrapper>`,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ItemsService
    }];
  }, {
    index: [{
      type: Input,
      args: ["kendoMenuExpandArrow"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-menu-expand-arrow"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }]
  });
})();
var PreventableEvent2 = class {
  /**
   * @hidden
   */
  constructor(args) {
    this.prevented = false;
    Object.assign(this, args);
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var MenuEvent = class extends PreventableEvent2 {
};
var MenuSelectEvent = class extends MenuEvent {
};
var ITEM_FIELDS = ["textField", "urlField", "iconField", "svgIconField", "disabledField", "cssClassField", "cssStyleField", "separatorField"];
var BindingDirectiveBase = class {
  constructor(menu) {
    this.menu = menu;
  }
  ngOnChanges() {
    this.rebind();
  }
  /**
   *  Rebinds the Menu items.
   */
  rebind() {
    const fields = this.fields = [];
    for (let idx = 0; idx < ITEM_FIELDS.length; idx++) {
      const inputName = ITEM_FIELDS[idx];
      const inputValue = this[inputName];
      if (inputValue) {
        fields.push({
          target: inputName.replace("Field", ""),
          source: inputValue
        });
      }
    }
    this.menu.items = this.data ? this.mapItems(this.data) : [];
  }
};
BindingDirectiveBase.ɵfac = function BindingDirectiveBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BindingDirectiveBase)(ɵɵdirectiveInject(MenuBase));
};
BindingDirectiveBase.ɵdir = ɵɵdefineDirective({
  type: BindingDirectiveBase,
  selectors: [["kendoBindingBase"]],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirectiveBase, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendoBindingBase"
    }]
  }], function() {
    return [{
      type: MenuBase
    }];
  }, null);
})();
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
var getterCache = {};
getterCache["undefined"] = (obj) => obj;
var getter = (field) => {
  if (getterCache[field]) {
    return getterCache[field];
  }
  const fields = [];
  field.replace(FIELD_REGEX, (_match, index, indexAccessor, name) => {
    fields.push(index !== void 0 ? index : indexAccessor || name);
  });
  getterCache[field] = (obj) => {
    let result = obj;
    for (let idx = 0; idx < fields.length && result; idx++) {
      result = result[fields[idx]];
    }
    return result;
  };
  return getterCache[field];
};
var last = (arr) => arr[arr.length - 1];
var getField = (field, level) => Array.isArray(field) ? field[level] || last(field) : field;
var HierarchyBindingDirective = class extends BindingDirectiveBase {
  constructor(menu) {
    super(menu);
  }
  mapItems(items, level = 0) {
    return items.map((item) => {
      const menuItem = this.createItem(item, level);
      const children = this.getChildren(item, level);
      if (children) {
        menuItem.items = this.mapItems(children, level + 1);
      }
      return menuItem;
    });
  }
  createItem(item, level) {
    const result = {
      data: item
    };
    const fields = this.fields;
    for (let idx = 0; idx < fields.length; idx++) {
      const {
        target,
        source
      } = fields[idx];
      result[target] = getter(getField(source, level))(item);
    }
    return result;
  }
  getChildren(item, level) {
    if (this.childrenField) {
      const field = getField(this.childrenField, level);
      return item[field];
    }
  }
};
HierarchyBindingDirective.ɵfac = function HierarchyBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HierarchyBindingDirective)(ɵɵdirectiveInject(MenuBase));
};
HierarchyBindingDirective.ɵdir = ɵɵdefineDirective({
  type: HierarchyBindingDirective,
  selectors: [["", "kendoMenuHierarchyBinding", ""]],
  inputs: {
    data: [0, "kendoMenuHierarchyBinding", "data"],
    textField: "textField",
    urlField: "urlField",
    iconField: "iconField",
    svgIconField: "svgIconField",
    disabledField: "disabledField",
    cssClassField: "cssClassField",
    cssStyleField: "cssStyleField",
    separatorField: "separatorField",
    childrenField: "childrenField"
  },
  exportAs: ["kendoMenuHierarchyBinding"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HierarchyBindingDirective, [{
    type: Directive,
    args: [{
      exportAs: "kendoMenuHierarchyBinding",
      selector: "[kendoMenuHierarchyBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: MenuBase
    }];
  }, {
    data: [{
      type: Input,
      args: ["kendoMenuHierarchyBinding"]
    }],
    textField: [{
      type: Input
    }],
    urlField: [{
      type: Input
    }],
    iconField: [{
      type: Input
    }],
    svgIconField: [{
      type: Input
    }],
    disabledField: [{
      type: Input
    }],
    cssClassField: [{
      type: Input
    }],
    cssStyleField: [{
      type: Input
    }],
    separatorField: [{
      type: Input
    }],
    childrenField: [{
      type: Input
    }]
  });
})();
var FlatBindingDirective = class extends BindingDirectiveBase {
  constructor(menu) {
    super(menu);
  }
  mapItems(items) {
    if (!this.idField || !this.parentIdField) {
      return items.map((item) => this.createItem(item));
    }
    const result = [];
    const map = {};
    for (let idx = 0; idx < items.length; idx++) {
      const item = items[idx];
      const menuItem = this.createItem(item);
      const id2 = getter(this.idField)(item);
      const parentId = getter(this.parentIdField)(item);
      if (parentId === null || parentId === void 0) {
        result.push(menuItem);
      } else {
        const parent = map[parentId] = map[parentId] || {};
        parent.items = parent.items || [];
        parent.items.push(menuItem);
      }
      if (map[id2]) {
        menuItem.items = map[id2].items;
      }
      map[id2] = menuItem;
    }
    return result;
  }
  createItem(dataItem) {
    const result = {
      data: dataItem
    };
    const fields = this.fields;
    for (let idx = 0; idx < fields.length; idx++) {
      const {
        source,
        target
      } = fields[idx];
      result[target] = getter(source)(dataItem);
    }
    return result;
  }
};
FlatBindingDirective.ɵfac = function FlatBindingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlatBindingDirective)(ɵɵdirectiveInject(MenuBase));
};
FlatBindingDirective.ɵdir = ɵɵdefineDirective({
  type: FlatBindingDirective,
  selectors: [["", "kendoMenuFlatBinding", ""]],
  inputs: {
    data: [0, "kendoMenuFlatBinding", "data"],
    textField: "textField",
    urlField: "urlField",
    iconField: "iconField",
    svgIconField: "svgIconField",
    disabledField: "disabledField",
    cssClassField: "cssClassField",
    cssStyleField: "cssStyleField",
    separatorField: "separatorField",
    idField: "idField",
    parentIdField: "parentIdField"
  },
  exportAs: ["kendoMenuFlatBinding"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatBindingDirective, [{
    type: Directive,
    args: [{
      exportAs: "kendoMenuFlatBinding",
      selector: "[kendoMenuFlatBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: MenuBase
    }];
  }, {
    data: [{
      type: Input,
      args: ["kendoMenuFlatBinding"]
    }],
    textField: [{
      type: Input
    }],
    urlField: [{
      type: Input
    }],
    iconField: [{
      type: Input
    }],
    svgIconField: [{
      type: Input
    }],
    disabledField: [{
      type: Input
    }],
    cssClassField: [{
      type: Input
    }],
    cssStyleField: [{
      type: Input
    }],
    separatorField: [{
      type: Input
    }],
    idField: [{
      type: Input
    }],
    parentIdField: [{
      type: Input
    }]
  });
})();
var ContextMenuPopupEvent = class extends PreventableEvent2 {
};
var ContextMenuItemsService = class {
  constructor(contextService) {
    this.contextService = contextService;
  }
  get(index) {
    if (this.contextService.items) {
      return this.contextService.items.get(index);
    }
  }
};
ContextMenuItemsService.ɵfac = function ContextMenuItemsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuItemsService)(ɵɵinject(ContextMenuService));
};
ContextMenuItemsService.ɵprov = ɵɵdefineInjectable({
  token: ContextMenuItemsService,
  factory: ContextMenuItemsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuItemsService, [{
    type: Injectable
  }], function() {
    return [{
      type: ContextMenuService
    }];
  }, null);
})();
var ContextMenuTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ContextMenuTemplateDirective.ɵfac = function ContextMenuTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
ContextMenuTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ContextMenuTemplateDirective,
  selectors: [["", "kendoContextMenuTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoContextMenuTemplate]",
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
var ContextMenuTargetService = class {
  constructor() {
    this.targets = [];
  }
  add(target) {
    this.targets.push(target);
  }
  remove(target) {
    const index = this.targets.indexOf(target);
    this.targets.splice(index, 1);
  }
  find(targetElement) {
    return this.targets.find((target) => target.element === targetElement);
  }
};
ContextMenuTargetService.ɵfac = function ContextMenuTargetService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuTargetService)();
};
ContextMenuTargetService.ɵprov = ɵɵdefineInjectable({
  token: ContextMenuTargetService,
  factory: ContextMenuTargetService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuTargetService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuTargetContainerDirective = class {
  /**
   * @hidden
   */
  constructor(elementRef, targetService) {
    this.targetService = targetService;
    if (elementRef) {
      this.element = elementRef.nativeElement;
    }
  }
};
ContextMenuTargetContainerDirective.ɵfac = function ContextMenuTargetContainerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuTargetContainerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ContextMenuTargetService));
};
ContextMenuTargetContainerDirective.ɵdir = ɵɵdefineDirective({
  type: ContextMenuTargetContainerDirective,
  selectors: [["", "kendoContextMenuTargetContainer", ""]],
  exportAs: ["kendoContextMenuTargetContainer"],
  standalone: true,
  features: [ɵɵProvidersFeature([ContextMenuTargetService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuTargetContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoContextMenuTargetContainer]",
      exportAs: "kendoContextMenuTargetContainer",
      providers: [ContextMenuTargetService],
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ContextMenuTargetService
    }];
  }, null);
})();
var TARGET_CLASS = "k-contextmenu-target";
var ContextMenuTargetDirective = class {
  constructor(elementRef, targetService) {
    this.targetService = targetService;
    this.hostClass = true;
    if (elementRef) {
      this.element = elementRef.nativeElement;
    }
    targetService.add(this);
  }
  ngOnDestroy() {
    this.targetService.remove(this);
  }
};
ContextMenuTargetDirective.ɵfac = function ContextMenuTargetDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuTargetDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ContextMenuTargetService));
};
ContextMenuTargetDirective.ɵdir = ɵɵdefineDirective({
  type: ContextMenuTargetDirective,
  selectors: [["", "kendoContextMenuTarget", ""]],
  hostVars: 2,
  hostBindings: function ContextMenuTargetDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-contextmenu-target", ctx.hostClass);
    }
  },
  inputs: {
    data: [0, "kendoContextMenuTarget", "data"]
  },
  exportAs: ["kendoContextMenuTarget"],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoContextMenuTarget]",
      exportAs: "kendoContextMenuTarget",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ContextMenuTargetService
    }];
  }, {
    data: [{
      type: Input,
      args: ["kendoContextMenuTarget"]
    }],
    hostClass: [{
      type: HostBinding,
      args: [`class.${TARGET_CLASS}`]
    }]
  });
})();
var CONTEXT_MENU = "contextmenu";
var DEFAULT_ANCHOR_ALIGN = {
  horizontal: "left",
  vertical: "bottom"
};
var DEFAULT_POPUP_ALIGN = {
  horizontal: "left",
  vertical: "top"
};
var DEFAULT_COLLISION = {
  horizontal: "fit",
  vertical: "flip"
};
var preventDefault = (e) => e.preventDefault();
var ContextMenuComponent = class extends MenuBase {
  constructor(popupService, service, ngZone, renderer) {
    super();
    this.popupService = popupService;
    this.service = service;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.showOn = CONTEXT_MENU;
    this.alignToAnchor = false;
    this.vertical = true;
    this.popupOpen = new EventEmitter();
    this.popupClose = new EventEmitter();
    this.select = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.service.owner = this;
    this.popupKeyDownHandler = this.popupKeyDownHandler.bind(this);
  }
  /**
   * Hides the ContextMenu.
   */
  hide() {
    this.removePopup();
  }
  /**
   * Shows the ContextMenu for the specified target.
   * @param target - The offset or the target element for which the ContextMenu will open.
   */
  show(target) {
    if (!target) {
      return;
    }
    const showTarget = target;
    this.removePopup();
    if (defined(showTarget.left) && defined(showTarget.top)) {
      this.createPopup({
        offset: showTarget
      });
    } else {
      this.currentTarget = showTarget.nativeElement || showTarget;
      this.createPopup({
        anchor: this.currentTarget
      });
    }
  }
  ngOnChanges(changes) {
    if (changes.target || changes.showOn) {
      this.bindShowHandler();
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const closeClickSubscription = this.renderer.listen("document", "mousedown", (e) => {
        if (this.popupRef && !closest(e.target, (node) => node === this.popupRef.popupElement) && this.service.leaveMenu(e)) {
          this.closePopup(e);
        }
      });
      const closeBlurSubscription = this.renderer.listen("window", "blur", (e) => {
        if (this.popupRef) {
          this.closePopup(e);
        }
      });
      this.closeSubscription = () => {
        closeClickSubscription();
        closeBlurSubscription();
      };
    });
  }
  ngOnDestroy() {
    if (this.closeSubscription) {
      this.closeSubscription();
      this.closeSubscription = null;
    }
    this.unbindShowHandler();
    this.removePopup();
  }
  /**
   * @hidden
   */
  emitMenuEvent(name, args) {
    args.target = this.currentTarget;
    args.sender = this;
    this[name].emit(args);
    if (name === "select" && !args.hasContent) {
      this.closeAndFocus(args.originalEvent);
    }
  }
  bindShowHandler() {
    this.unbindShowHandler();
    this.ngZone.runOutsideAngular(() => {
      const element = this.targetElement();
      if (!element) {
        return;
      }
      const eventName = this.showOn || CONTEXT_MENU;
      this.showSubscription = this.renderer.listen(element, this.showOn || CONTEXT_MENU, (e) => {
        this.showContextMenu(e, element);
      });
      if (eventName === CONTEXT_MENU) {
        this.keydownSubscription = this.renderer.listen(element, "keydown", (e) => {
          if (e.shiftKey && e.keyCode === Keys.F10) {
            this.showContextMenu(e, element);
          }
        });
      }
    });
  }
  showContextMenu(e, element) {
    const filter = this.targetFilter();
    let currentTarget = element;
    if (filter) {
      currentTarget = findInContainer(e.target, filter, element);
      if (currentTarget && currentTarget !== e.target && isFocusable(e.target)) {
        return;
      }
      if (currentTarget && this.directiveTarget) {
        currentTarget = this.target.targetService.find(currentTarget);
      }
    }
    if (!currentTarget) {
      this.closePopup(e);
      return;
    }
    this.ngZone.run(() => {
      if (!this.closePopup(e)) {
        this.currentTarget = currentTarget;
        this.openPopup(e);
      }
    });
  }
  unbindShowHandler() {
    if (this.showSubscription) {
      this.showSubscription();
      this.showSubscription = null;
    }
    if (this.keydownSubscription) {
      this.keydownSubscription();
      this.keydownSubscription = null;
    }
  }
  targetElement() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.directiveTarget = false;
    let target = this.target;
    if (typeof target === "string") {
      target = document.querySelector(target);
    } else if (target && target.nativeElement) {
      target = target.nativeElement;
    } else if (target instanceof ContextMenuTargetContainerDirective) {
      target = target.element;
      this.directiveTarget = true;
    }
    return target;
  }
  targetFilter() {
    if (this.directiveTarget) {
      return `.${TARGET_CLASS}`;
    }
    return this.filter;
  }
  closePopup(e) {
    if (!this.popupRef) {
      return;
    }
    return this.popupAction("popupClose", e, () => {
      this.removePopup();
    });
  }
  removePopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.currentTarget = null;
    }
    if (this.popupSubscriptions) {
      this.popupSubscriptions();
      this.popupSubscriptions = null;
    }
  }
  openPopup(e) {
    this.popupAction("popupOpen", e, () => {
      e.preventDefault();
      let anchor, offset;
      if (this.alignToAnchor || e.type === "keydown") {
        anchor = this.currentTargetElement;
      } else {
        offset = {
          left: e.pageX,
          top: e.pageY
        };
      }
      this.createPopup({
        anchor,
        offset
      });
    });
  }
  createPopup(options) {
    this.popupRef = this.popupService.open(Object.assign({
      animate: defined(this.popupAnimate) ? this.popupAnimate : true,
      appendTo: this.appendTo,
      collision: this.collision || DEFAULT_COLLISION,
      popupAlign: this.popupAlign || DEFAULT_POPUP_ALIGN,
      anchorAlign: this.anchorAlign || DEFAULT_ANCHOR_ALIGN,
      content: this.contentTemplate ? this.contentTemplate.templateRef : this.defaultContentTemplate,
      popupClass: "k-menu-popup",
      positionMode: "absolute"
    }, options));
    const element = this.popupRef.popupElement;
    this.renderer.addClass(element, "k-context-menu-popup");
    this.renderer.setAttribute(element, "tabindex", "-1");
    this.renderer.setStyle(element, "outline", "0");
    if (this.ariaLabel) {
      this.renderer.setAttribute(element, "aria-label", this.ariaLabel);
    }
    this.activeTarget = this.currentTargetElement === document.activeElement;
    this.ngZone.runOutsideAngular(() => {
      const unbindKeyDown = this.renderer.listen(element, "keydown", this.popupKeyDownHandler);
      const unbindContextmenu = this.renderer.listen(element, "contextmenu", preventDefault);
      this.popupSubscriptions = () => {
        unbindKeyDown();
        unbindContextmenu();
      };
    });
    element.focus();
  }
  closeAndFocus(e) {
    const currentTarget = this.currentTargetElement;
    if (!this.closePopup(e) && this.activeTarget) {
      currentTarget.focus();
    }
  }
  popupKeyDownHandler(e) {
    const element = this.popupRef.popupElement;
    if (e.keyCode === Keys.Escape && (hasClass(e.target, "k-menu-item") || e.target === element)) {
      this.closeAndFocus(e);
    } else if (e.target === element) {
      this.service.keydown.emit(e);
    }
  }
  popupAction(name, originalEvent, callback) {
    const emitter = this[name];
    let prevented = false;
    if (hasObservers(emitter)) {
      this.ngZone.run(() => {
        const args = new ContextMenuPopupEvent({
          originalEvent,
          sender: this,
          target: this.currentTarget
        });
        emitter.emit(args);
        if (!args.isDefaultPrevented()) {
          callback();
        }
        prevented = args.isDefaultPrevented();
      });
    } else {
      callback();
    }
    return prevented;
  }
  get currentTargetElement() {
    return this.directiveTarget && this.currentTarget ? this.currentTarget.element : this.currentTarget;
  }
};
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ContextMenuService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
ContextMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: ContextMenuComponent,
  selectors: [["kendo-contextmenu"]],
  contentQueries: function ContextMenuComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ContextMenuTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    }
  },
  viewQuery: function ContextMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultContentTemplate = _t.first);
    }
  },
  inputs: {
    showOn: "showOn",
    target: "target",
    filter: "filter",
    alignToAnchor: "alignToAnchor",
    vertical: "vertical",
    popupAnimate: "popupAnimate",
    popupAlign: "popupAlign",
    anchorAlign: "anchorAlign",
    collision: "collision",
    appendTo: "appendTo",
    ariaLabel: "ariaLabel"
  },
  outputs: {
    popupOpen: "popupOpen",
    popupClose: "popupClose",
    select: "select",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoContextMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([ContextMenuService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.contextmenu"
  }, {
    provide: ItemsService,
    useClass: ContextMenuItemsService
  }, {
    provide: MenuBase,
    useExisting: forwardRef(() => ContextMenuComponent)
  }, PopupService, {
    provide: POPUP_CONTAINER,
    useFactory: bodyFactory
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["default", ""], ["ariaRole", "menu", 3, "items", "appendTo", "size", "vertical", "openOnClick", "hoverDelay", "animate", "menuItemTemplate", "menuItemLinkTemplate"]],
  template: function ContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ContextMenuComponent_ng_template_0_Template, 1, 9, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MenuComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoContextMenu",
      providers: [ContextMenuService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.contextmenu"
      }, {
        provide: ItemsService,
        useClass: ContextMenuItemsService
      }, {
        provide: MenuBase,
        useExisting: forwardRef(() => ContextMenuComponent)
      }, PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "kendo-contextmenu",
      template: `
        <ng-template #default>
            <kendo-menu [items]="rootItems"
                [appendTo]="appendTo"
                [size]="size"
                ariaRole="menu"
                [vertical]="vertical"
                [openOnClick]="openOnClick"
                [hoverDelay]="hoverDelay"
                [animate]="animate"
                [menuItemTemplate]="itemTemplate.first?.templateRef"
                [menuItemLinkTemplate]="itemLinkTemplate.first?.templateRef"
            ></kendo-menu>
        </ng-template>
    `,
      standalone: true,
      imports: [MenuComponent]
    }]
  }], function() {
    return [{
      type: PopupService
    }, {
      type: ContextMenuService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    showOn: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    alignToAnchor: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    popupAnimate: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    popupOpen: [{
      type: Output
    }],
    popupClose: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ContextMenuTemplateDirective, {
        static: false
      }]
    }],
    defaultContentTemplate: [{
      type: ViewChild,
      args: ["default", {
        static: false
      }]
    }]
  });
})();
var KENDO_MENU = [MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent];
var KENDO_CONTEXTMENU = [ContextMenuComponent, ContextMenuTemplateDirective, ContextMenuTargetDirective, ContextMenuTargetContainerDirective, ...KENDO_MENU];
var KENDO_MENUS = [...KENDO_MENU, ...KENDO_CONTEXTMENU];
var MenuModule = class {
};
MenuModule.ɵfac = function MenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MenuModule)();
};
MenuModule.ɵmod = ɵɵdefineNgModule({
  type: MenuModule,
  imports: [MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent],
  exports: [MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent]
});
MenuModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, IconsService, ResizeBatchService],
  imports: [MenuComponent, MenuItemComponent, ExpandArrowComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_MENU],
      imports: [...KENDO_MENU],
      providers: [PopupService, IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var ContextMenuEvent = class {
};
var ContextMenuSelectEvent = class extends ContextMenuEvent {
};
var ContextMenuModule = class {
};
ContextMenuModule.ɵfac = function ContextMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ContextMenuModule)();
};
ContextMenuModule.ɵmod = ɵɵdefineNgModule({
  type: ContextMenuModule,
  imports: [ContextMenuComponent, ContextMenuTemplateDirective, ContextMenuTargetDirective, ContextMenuTargetContainerDirective, MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent],
  exports: [ContextMenuComponent, ContextMenuTemplateDirective, ContextMenuTargetDirective, ContextMenuTargetContainerDirective, MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent]
});
ContextMenuModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, IconsService, ResizeBatchService],
  imports: [ContextMenuComponent, MenuComponent, MenuItemComponent, ExpandArrowComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CONTEXTMENU],
      imports: [...KENDO_CONTEXTMENU],
      providers: [PopupService, IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var MenusModule = class {
};
MenusModule.ɵfac = function MenusModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MenusModule)();
};
MenusModule.ɵmod = ɵɵdefineNgModule({
  type: MenusModule,
  imports: [MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent, ContextMenuComponent, ContextMenuTemplateDirective, ContextMenuTargetDirective, ContextMenuTargetContainerDirective, MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent],
  exports: [MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent, ContextMenuComponent, ContextMenuTemplateDirective, ContextMenuTargetDirective, ContextMenuTargetContainerDirective, MenuComponent, MenuItemComponent, ItemTemplateDirective, ItemLinkTemplateDirective, ItemContentTemplateDirective, HierarchyBindingDirective, FlatBindingDirective, LinkDirective, ExpandArrowComponent]
});
MenusModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, IconsService, ResizeBatchService],
  imports: [MenuComponent, MenuItemComponent, ExpandArrowComponent, ContextMenuComponent, MenuComponent, MenuItemComponent, ExpandArrowComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenusModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_MENUS],
      imports: [...KENDO_MENUS],
      providers: [PopupService, IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
export {
  ContextMenuComponent,
  ContextMenuEvent,
  ContextMenuModule,
  ContextMenuPopupEvent,
  ContextMenuSelectEvent,
  ContextMenuService,
  ContextMenuTargetContainerDirective,
  ContextMenuTargetDirective,
  ContextMenuTemplateDirective,
  ExpandArrowComponent,
  FlatBindingDirective,
  HierarchyBindingDirective,
  ItemComponent,
  ItemContentTemplateDirective,
  ItemLinkTemplateDirective,
  ItemTemplateDirective,
  ItemsService,
  KENDO_CONTEXTMENU,
  KENDO_MENU,
  KENDO_MENUS,
  LinkDirective,
  ListComponent,
  MenuComponent,
  MenuEvent,
  MenuItemComponent,
  MenuModule,
  MenuSelectEvent,
  MenusModule
};
//# sourceMappingURL=@progress_kendo-angular-menu.js.map
