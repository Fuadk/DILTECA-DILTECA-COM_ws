import {
  drawDOM,
  exportPDF
} from "./chunk-LFIDXDLB.js";
import {
  validatePackage
} from "./chunk-LSR7DL6R.js";
import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  NgModule,
  Optional,
  TemplateRef,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-FZN4S27D.js";

// node_modules/@progress/kendo-file-saver/dist/es/save-as.js
function saveAs(data, fileName, options) {
  if (options === void 0) options = {};
  var save = postToProxy;
  if (options.forceProxy && !options.proxyURL) {
    throw new Error("No proxyURL is set, but forceProxy is true");
  }
  if (!options.forceProxy) {
    if (canDownload()) {
      save = saveAsDataURI;
    }
    if (navigator.msSaveBlob) {
      save = saveAsBlob;
    }
  }
  save(data, fileName, options);
}
var anchor = function() {
  return document.createElement("a");
};
var canDownload = function() {
  return "download" in anchor();
};
function saveAsBlob(data, fileName) {
  var blob = data;
  if (typeof data === "string") {
    var parts = data.split(";base64,");
    var contentType = parts[0];
    var base64 = atob(parts[1]);
    var array = new Uint8Array(base64.length);
    for (var idx = 0; idx < base64.length; idx++) {
      array[idx] = base64.charCodeAt(idx);
    }
    blob = new Blob([array.buffer], {
      type: contentType
    });
  }
  navigator.msSaveBlob(blob, fileName);
}
function saveAsDataURI(data, fileName) {
  var dataURI = data;
  if (window.Blob && data instanceof Blob) {
    dataURI = URL.createObjectURL(data);
  }
  var fileSaver = anchor();
  fileSaver.download = fileName;
  fileSaver.href = dataURI;
  var e = document.createEvent("MouseEvents");
  e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  fileSaver.dispatchEvent(e);
  setTimeout(function() {
    return URL.revokeObjectURL(dataURI);
  });
}
function postToProxy(dataURI, fileName, options) {
  if (!options.proxyURL) {
    return;
  }
  var form = document.createElement("form");
  form.setAttribute("action", options.proxyURL);
  form.setAttribute("method", "POST");
  form.setAttribute("target", options.proxyTarget || "_self");
  var formData = options.proxyData || {};
  formData.fileName = fileName;
  var parts = dataURI.split(";base64,");
  formData.contentType = parts[0].replace("data:", "");
  formData.base64 = parts[1];
  for (var name in formData) {
    if (formData.hasOwnProperty(name)) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", name);
      input.setAttribute("value", formData[name]);
      form.appendChild(input);
    }
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

// node_modules/@progress/kendo-file-saver/dist/es/base64.js
var fromCharCode = String.fromCharCode;

// node_modules/@progress/kendo-angular-pdf-export/fesm2020/progress-kendo-angular-pdf-export.mjs
var _c0 = ["*"];
var packageMetadata = {
  name: "@progress/kendo-angular-pdf-export",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372277,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var PDFExportTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PDFExportTemplateDirective.ɵfac = function PDFExportTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PDFExportTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PDFExportTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PDFExportTemplateDirective,
  selectors: [["", "kendoPDFTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPDFTemplate]",
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
var FIELDS = ["bottom", "left", "right", "top"];
var PDFExportMarginComponent = class {
  /**
   * @hidden
   */
  get options() {
    const options = {};
    for (let idx = 0; idx < FIELDS.length; idx++) {
      const field = FIELDS[idx];
      const value = this[field];
      if (typeof value !== "undefined") {
        options[field] = value;
      }
    }
    return options;
  }
};
PDFExportMarginComponent.ɵfac = function PDFExportMarginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PDFExportMarginComponent)();
};
PDFExportMarginComponent.ɵcmp = ɵɵdefineComponent({
  type: PDFExportMarginComponent,
  selectors: [["kendo-pdf-export-margin"]],
  inputs: {
    left: "left",
    top: "top",
    right: "right",
    bottom: "bottom"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function PDFExportMarginComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportMarginComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pdf-export-margin",
      template: ``,
      standalone: true
    }]
  }], null, {
    left: [{
      type: Input
    }],
    top: [{
      type: Input
    }],
    right: [{
      type: Input
    }],
    bottom: [{
      type: Input
    }]
  });
})();
var compileTemplate = (templateRef) => {
  const context = {};
  let embeddedView = templateRef.createEmbeddedView(context);
  const result = (data) => {
    Object.assign(context, data);
    embeddedView.detectChanges();
    const templateWrap = document.createElement("span");
    embeddedView.rootNodes.forEach((rootNode) => {
      templateWrap.appendChild(rootNode.cloneNode(true));
    });
    return templateWrap;
  };
  result.destroy = () => {
    embeddedView.destroy();
    embeddedView = null;
  };
  return result;
};
var PDFExportComponent = class {
  constructor(element) {
    this.element = element;
    this.creator = "Kendo UI PDF Generator";
    this.fileName = "export.pdf";
    validatePackage(packageMetadata);
  }
  get drawMargin() {
    const marginComponent = this.marginComponent;
    let margin = this.margin;
    if (marginComponent) {
      margin = Object.assign(margin || {}, marginComponent.options);
    }
    return margin;
  }
  /**
   * Saves the content as a PDF file with the specified name.
   * @param fileName - The name of the exported file.
   */
  saveAs(fileName = this.fileName) {
    this.save(this.element.nativeElement, fileName);
  }
  /**
   * Exports the content as a `Group` for further processing.
   *
   * @return The root group of the exported scene.
   */
  export() {
    return this.exportElement(this.element.nativeElement);
  }
  save(element, fileName) {
    this.exportElement(element).then((group) => this.exportGroup(group, this.pdfOptions())).then((dataUri) => this.saveDataUri(dataUri, fileName, this.saveOptions()));
  }
  exportElement(element) {
    const promise = this.drawElement(element, this.drawOptions());
    const cleanup = this.cleanup.bind(this);
    promise.then(cleanup, cleanup);
    return promise;
  }
  cleanup() {
    if (this.pageTemplate) {
      this.pageTemplate.destroy();
      delete this.pageTemplate;
    }
  }
  drawOptions() {
    if (this.pageTemplateDirective) {
      this.pageTemplate = compileTemplate(this.pageTemplateDirective.templateRef);
    }
    return {
      avoidLinks: this.avoidLinks,
      forcePageBreak: this.forcePageBreak,
      keepTogether: this.keepTogether,
      margin: this.drawMargin,
      paperSize: this.paperSize,
      landscape: this.landscape,
      repeatHeaders: this.repeatHeaders,
      scale: this.scale,
      template: this.pageTemplate
    };
  }
  pdfOptions() {
    return {
      autoPrint: this.autoPrint,
      author: this.author,
      creator: this.creator,
      date: this.date,
      imgDPI: this.imageResolution,
      keywords: this.keywords,
      landscape: this.landscape,
      margin: this.drawMargin,
      multiPage: true,
      paperSize: this.paperSize,
      producer: this.producer,
      subject: this.subject,
      title: this.title
    };
  }
  saveOptions() {
    return {
      forceProxy: this.forceProxy,
      proxyData: this.proxyData,
      proxyTarget: this.proxyTarget,
      proxyURL: this.proxyURL
    };
  }
  drawElement(element, options) {
    return drawDOM(element, options);
  }
  exportGroup(group, options) {
    return exportPDF(group, options);
  }
  saveDataUri(dataUri, fileName, options) {
    saveAs(dataUri, fileName, options);
  }
};
PDFExportComponent.ɵfac = function PDFExportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PDFExportComponent)(ɵɵdirectiveInject(ElementRef));
};
PDFExportComponent.ɵcmp = ɵɵdefineComponent({
  type: PDFExportComponent,
  selectors: [["kendo-pdf-export"]],
  contentQueries: function PDFExportComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PDFExportTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PDFExportMarginComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageTemplateDirective = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.marginComponent = _t.first);
    }
  },
  inputs: {
    autoPrint: "autoPrint",
    author: "author",
    avoidLinks: "avoidLinks",
    forcePageBreak: "forcePageBreak",
    keepTogether: "keepTogether",
    creator: "creator",
    date: "date",
    imageResolution: "imageResolution",
    fileName: "fileName",
    forceProxy: "forceProxy",
    keywords: "keywords",
    landscape: "landscape",
    margin: "margin",
    paperSize: "paperSize",
    repeatHeaders: "repeatHeaders",
    scale: "scale",
    proxyData: "proxyData",
    proxyURL: "proxyURL",
    proxyTarget: "proxyTarget",
    producer: "producer",
    subject: "subject",
    title: "title"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  template: function PDFExportComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pdf-export",
      template: `<div><ng-content></ng-content></div>`,
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    autoPrint: [{
      type: Input
    }],
    author: [{
      type: Input
    }],
    avoidLinks: [{
      type: Input
    }],
    forcePageBreak: [{
      type: Input
    }],
    keepTogether: [{
      type: Input
    }],
    creator: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    imageResolution: [{
      type: Input
    }],
    fileName: [{
      type: Input
    }],
    forceProxy: [{
      type: Input
    }],
    keywords: [{
      type: Input
    }],
    landscape: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    paperSize: [{
      type: Input
    }],
    repeatHeaders: [{
      type: Input
    }],
    scale: [{
      type: Input
    }],
    proxyData: [{
      type: Input
    }],
    proxyURL: [{
      type: Input
    }],
    proxyTarget: [{
      type: Input
    }],
    producer: [{
      type: Input
    }],
    subject: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    pageTemplateDirective: [{
      type: ContentChild,
      args: [PDFExportTemplateDirective, {
        static: false
      }]
    }],
    marginComponent: [{
      type: ContentChild,
      args: [PDFExportMarginComponent, {
        static: false
      }]
    }]
  });
})();
var KENDO_PDFEXPORT = [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective];
var PDFExportModule = class {
};
PDFExportModule.ɵfac = function PDFExportModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PDFExportModule)();
};
PDFExportModule.ɵmod = ɵɵdefineNgModule({
  type: PDFExportModule,
  imports: [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective],
  exports: [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective]
});
PDFExportModule.ɵinj = ɵɵdefineInjector({
  imports: [PDFExportComponent, PDFExportMarginComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_PDFEXPORT],
      exports: [...KENDO_PDFEXPORT]
    }]
  }], null, null);
})();

export {
  saveAs,
  PDFExportTemplateDirective,
  PDFExportMarginComponent,
  compileTemplate,
  PDFExportComponent,
  KENDO_PDFEXPORT,
  PDFExportModule
};
//# sourceMappingURL=chunk-6Y4HUOOA.js.map
