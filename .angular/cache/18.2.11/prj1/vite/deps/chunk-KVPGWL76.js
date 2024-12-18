import {
  ResizeBatchService,
  ResizeSensorComponent,
  hasObservers,
  isDocumentAvailable
} from "./chunk-HRNBUZH3.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-LMGKJMTG.js";
import {
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-JQMZVAPB.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-FZN4S27D.js";
import {
  fromEvent,
  merge
} from "./chunk-PC7SNX6C.js";
import {
  auditTime,
  from
} from "./chunk-NXOOB3F7.js";

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : {
    x: 0,
    y: 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = {
    top: 0,
    left: 0
  };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0) scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-angular-popup/fesm2020/progress-kendo-angular-popup.mjs
var _c0 = ["container"];
var _c1 = ["*"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class {
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
};
DOMService.ɵfac = function DOMService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DOMService)();
};
DOMService.ɵprov = ɵɵdefineInjectable({
  token: DOMService,
  factory: DOMService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
};
AlignService.ɵfac = function AlignService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
AlignService.ɵprov = ɵɵdefineInjectable({
  token: AlignService,
  factory: AlignService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
};
PositionService.ɵfac = function PositionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
PositionService.ɵprov = ɵɵdefineInjectable({
  token: PositionService,
  factory: PositionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
};
ResizeService.ɵfac = function ResizeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ResizeService.ɵprov = ɵɵdefineInjectable({
  token: ResizeService,
  factory: ResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
};
ScrollableService.ɵfac = function ScrollableService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ScrollableService.ɵprov = ɵɵdefineInjectable({
  token: ScrollableService,
  factory: ScrollableService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class {
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
    this.start = new EventEmitter();
    this.end = new EventEmitter();
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
};
AnimationService.ɵfac = function AnimationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AnimationService)(ɵɵinject(AnimationBuilder));
};
AnimationService.ɵprov = ɵɵdefineInjectable({
  token: AnimationService,
  factory: AnimationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372144,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class {
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    this.animate = true;
    this.anchorAlign = {
      horizontal: "left",
      vertical: "bottom"
    };
    this.collision = {
      horizontal: "fit",
      vertical: "flip"
    };
    this.popupAlign = {
      horizontal: "left",
      vertical: "top"
    };
    this.copyAnchorStyles = false;
    this.positionMode = "fixed";
    this.offset = DEFAULT_OFFSET;
    this.anchorViewportLeave = new EventEmitter();
    this.close = new EventEmitter();
    this.open = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.resolvedPromise = Promise.resolve(null);
    this.initialCheck = true;
    validatePackage(packageMetadata);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
};
PopupComponent.ɵfac = function PopupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupComponent,
  selectors: [["kendo-popup"]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(ResizeSensorComponent, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
    }
  },
  inputs: {
    animate: "animate",
    anchor: "anchor",
    anchorAlign: "anchorAlign",
    collision: "collision",
    popupAlign: "popupAlign",
    copyAnchorStyles: "copyAnchorStyles",
    popupClass: "popupClass",
    positionMode: "positionMode",
    offset: "offset",
    margin: "margin"
  },
  outputs: {
    anchorViewportLeave: "anchorViewportLeave",
    close: "close",
    open: "open",
    positionChange: "positionChange"
  },
  exportAs: ["kendo-popup"],
  standalone: true,
  features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 4,
  consts: [["container", ""], [1, "k-child-animation-container"], [1, "k-popup", 3, "ngClass"], [3, "ngTemplateOutlet", "ngIf"], [3, "resize", "rateLimit"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
      ɵɵprojection(3);
      ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      ɵɵelementStart(5, "kendo-resize-sensor", 4);
      ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onResize());
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.popupClass);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
      ɵɵadvance();
      ɵɵproperty("rateLimit", 100);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div class="k-popup" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class {
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Gets the root view container into which the component will be injected.
   *
   * @returns {ComponentRef<any>}
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Sets or gets the HTML element of the root component container.
   *
   * @returns {HTMLElement}
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  /**
   * Opens a Popup component. Created Popups are mounted
   * in the DOM directly in the root application component.
   *
   * @param {PopupSettings} options - The options which define the Popup.
   * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <ng-template #template>
   *      Popup content
   *     </ng-template>
   *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
   *   `
   * })
   * export class AppComponent {
   *     public popupRef: PopupRef;
   *
   *     constructor( private popupService: PopupService ) {}
   *
   *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
   *         if (this.popupRef) {
   *              this.popupRef.close();
   *              this.popupRef = null;
   *              return;
   *         }
   *
   *         this.popupRef = this.popupService.open({
   *           anchor: anchor,
   *           content: template
   *         });
   *     }
   * }
   * ```
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        removeElement(popupElement);
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef
   * @returns {HTMLElement}
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by its type.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` type class.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the inputs on the component.
   *
   * @param {ComponentRef<any>} component
   * @param {*} options
   * @returns {ComponentRef<any>}
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and the nodes to append from the `content` option.
   *
   * @param {*} content
   * @returns {any}
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
};
PopupService.ɵfac = function PopupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
};
PopupService.ɵprov = ɵɵdefineInjectable({
  token: PopupService,
  factory: PopupService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class {
};
PopupModule.ɵfac = function PopupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupModule)();
};
PopupModule.ɵmod = ɵɵdefineNgModule({
  type: PopupModule,
  imports: [ResizeSensorComponent, PopupComponent],
  exports: [PopupComponent]
});
PopupModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService],
  imports: [ResizeSensorComponent, KENDO_POPUP]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [ResizeSensorComponent, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  document_default,
  windowViewport,
  offset_default,
  scrollPosition,
  position_with_scroll_default,
  PopupComponent,
  POPUP_CONTAINER,
  PopupService,
  KENDO_POPUP,
  PopupModule
};
//# sourceMappingURL=chunk-KVPGWL76.js.map
