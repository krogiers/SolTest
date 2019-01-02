(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<articlelist></articlelist>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Colruyt Product Registration System';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlelist/articlelist.component */ "./src/app/articlelist/articlelist.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _articleinput_articleinput_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articleinput/articleinput.component */ "./src/app/articleinput/articleinput.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_7__["ArticlelistComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
                _articleinput_articleinput_component__WEBPACK_IMPORTED_MODULE_9__["ArticleinputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article.service.ts":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Accept': 'application/json'
    })
};
var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.articleUrl = 'http://localhost:9080/SolTest/api/article';
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.articleUrl);
        //return ARTICLES;
    };
    ArticleService.prototype.saveArticles = function (article) {
        return this.http.post(this.articleUrl, article, httpOptions);
    };
    ArticleService.prototype.deleteArticle = function (id) {
        var url = this.articleUrl + "/" + id;
        return this.http.delete(url, httpOptions);
        // return this.http.delete<Article> (this.articleUrl, article, httpOptions);
    };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Product: {{editArticle.product}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form name=\"editArticleForm\" #myForm=\"ngForm\">\n          <div class='row'>\n              <div class='col-sm-3'>\n                      <label for=\"inputAmount\">Amount</label>\n              </div>\n              <div class='col-sm-9'>\n                      <input class=\"form-control\" id=\"inputAmount\" name=\"inputAmount\" required=\"true\" type=\"number\" [(ngModel)]=\"editArticle.amount\" placeholder=\"Amount\" ng-required=\"true\"/>\n              </div>\n          </div>\n          <div class='row'>\n              <div class='col-sm-3'>\n                  <label for=\"inputUnitPrice\">Unit Price</label>\n              </div>\n              <div class='col-sm-9'>\n                    <input class=\"form-control\" id=\"inputUnitPrice\" name=\"inputUnitPrice\" required=\"true\" type=\"number\" [(ngModel)]=\"editArticle.unitPrice\" placeholder=\"Unit Price\" ng-required=\"true\"/>\n              </div>\n          </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save')\">Save</button>\n    </div>\n  </ng-template>\n\n<td class=\"product align-middle col-md-3\">{{article.product}}</td>\n  <td class=\"number align-middle text-right col-md-2\" >{{article.amount | number : \"1.1-1\"}}</td>\n  <td class=\"number align-middle text-right col-md-2\">{{article.unitPrice | number : \"1.1-1\"}}</td>\n  <td class=\"number align-middle text-right col-md-3\">{{article.total | number : \"1.1-1\"}}</td>\n  <td class=\"button align-middle col-md-1\">\n      <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"onEdit(content)\">\n          <span class=\"far fa-edit\"></span>\n      </button>\n  </td>\n  <td class=\"align-middle col-md-1\">\n     <button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" (click)=\"onDelete()\">\n        <span class=\"fas fa-trash\"></span>\n      </button>\n  </td>\n  {{closeResult}}"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(modalService) {
        this.modalService = modalService;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.onDelete = function () {
        this.deleted.emit(this.article);
        console.log(this.article.product);
    };
    ArticleComponent.prototype.onEdit = function (content) {
        this.editArticle = Object.assign({}, this.article);
        this.openDialog(content);
    };
    ArticleComponent.prototype.openDialog = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            if (result == "Save") {
                _this.edited.emit(_this.editArticle);
                console.log(_this.article.product + ' was edited');
            }
        }, function (reason) { });
    };
    ArticleComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "deleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "edited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[article]',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/articleinput/articleinput.component.css":
/*!*********************************************************!*\
  !*** ./src/app/articleinput/articleinput.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVpbnB1dC9hcnRpY2xlaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/articleinput/articleinput.component.html":
/*!**********************************************************!*\
  !*** ./src/app/articleinput/articleinput.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      \n      <div class=\"col-md-12\">\n        <h4>Register Product</h4>\n        <div class=\"container\">\n            <form name=\"newArticleForm\" #myForm=\"ngForm\">\n                    <div class='row'>\n                        <div class='col-sm-4'>    \n                            <div class='form-group'>\n                                <label for=\"inputName\">Product</label>\n                                <input class=\"form-control\" id=\"inputName\" name=\"inputName\" [(ngModel)]=\"inputArticle.product\" size=\"30\" type=\"text\" placeholder=\"Productname\" ng-required=\"true\"/>\n                            </div>\n                        </div>\n                        <div class='col-sm-3'>\n                            <div class='form-group'>\n                                <label for=\"inputAmount\">Amount</label>\n                                <input class=\"form-control\" id=\"inputAmount\" name=\"inputAmount\" required=\"true\" type=\"number\" [(ngModel)]=\"inputArticle.amount\" placeholder=\"Amount\" ng-required=\"true\"/>\n                            </div>\n                        </div>\n                        <div class='col-sm-3'>\n                            <div class='form-group'>\n                                <label for=\"inputUnitPrice\">Unit Price</label>\n                                <input class=\"form-control\" id=\"inputUnitPrice\" name=\"inputUnitPrice\" required=\"true\" type=\"number\" [(ngModel)]=\"inputArticle.unitPrice\" placeholder=\"Unit Price\" ng-required=\"true\"/>\n                            </div>\n                        </div>\n                        <div class='col-sm-2 align-text-bottom'>\n                                  <button id=\"inputButton\" class=\"btn btn-primary\" (click)=\"registerProduct()\" [disabled]=\"!myForm.form.valid\">Register</button>\n                        </div>\n                    </div>\n            </form>\n          </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/articleinput/articleinput.component.ts":
/*!********************************************************!*\
  !*** ./src/app/articleinput/articleinput.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleinputComponent", function() { return ArticleinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleinputComponent = /** @class */ (function () {
    function ArticleinputComponent() {
        this.inserted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ArticleinputComponent.prototype.ngOnInit = function () {
        this.initArticle();
    };
    ArticleinputComponent.prototype.initArticle = function () {
        this.inputArticle = {};
    };
    ArticleinputComponent.prototype.registerProduct = function () {
        console.log(this.inputArticle);
        this.inserted.emit(this.inputArticle);
        this.initArticle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleinputComponent.prototype, "inserted", void 0);
    ArticleinputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'articleinput',
            template: __webpack_require__(/*! ./articleinput.component.html */ "./src/app/articleinput/articleinput.component.html"),
            styles: [__webpack_require__(/*! ./articleinput.component.css */ "./src/app/articleinput/articleinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleinputComponent);
    return ArticleinputComponent;
}());



/***/ }),

/***/ "./src/app/articlelist/articlelist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articlelist/articlelist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tfoot {\n    background-color: #666666;\n    color: #dddddd;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZWxpc3QvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZWxpc3QvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRmb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/articlelist/articlelist.component.html":
/*!********************************************************!*\
  !*** ./src/app/articlelist/articlelist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row h-50\">\n    <articleinput (inserted)=\"onInserted($event)\"></articleinput>\n  </div>\n\n    <div class=\"row h-50\">\n        <div class=\"col-md-12\">\n      <h4>Registered Products</h4>\n      <div class=\"table-responsive\">\n\n      <table id=\"articleTable\" class=\"table table-bordred table-hover table-sm\">\n                   \n        <thead class=\"thead-light\">\n          <th class=\"product\">Product</th>\n          <th class=\"number\">Amount</th>\n          <th class=\"number\">Unit Price</th>\n          <th class=\"number\">Total</th>\n\n          <th class=\"button\">Edit</th>                      \n          <th class=\"button\">Delete</th>\n        </thead>\n        \n        <tbody>\n          <tr *ngFor=\"let article of articles\" article [article]=\"article\" (deleted)=\"onDeleted($event)\" (edited)=\"onEdit($event)\">\n        </tbody>\n\n        <tfoot class=\"tfoot-light\">\n            <th>Total</th>\n            <th></th>\n            <th></th>\n            <th>{{totalAmount | number : \"1.1-1\"}}</th>\n            <th></th>                      \n            <th></th>\n          </tfoot>\n        </table>               \n    </div>            \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/articlelist/articlelist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articlelist/articlelist.component.ts ***!
  \******************************************************/
/*! exports provided: ArticlelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlelistComponent", function() { return ArticlelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");



var ArticlelistComponent = /** @class */ (function () {
    function ArticlelistComponent(articleService) {
        this.articleService = articleService;
    }
    Object.defineProperty(ArticlelistComponent.prototype, "totalAmount", {
        get: function () {
            var total = 0;
            if (this.articles != null) {
                for (var _i = 0, _a = this.articles; _i < _a.length; _i++) {
                    var art = _a[_i];
                    total = total + art.total.valueOf();
                }
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    ArticlelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles().subscribe(function (data) { return _this.articles = data; });
    };
    ArticlelistComponent.prototype.onInserted = function (article) {
        var _this = this;
        this.articleService.saveArticles(article).subscribe(function (data) { return _this.articles = data; });
    };
    ArticlelistComponent.prototype.onDeleted = function (article) {
        var _this = this;
        this.articleService.deleteArticle(article.articleId).subscribe(function (data) { return _this.articles = data; });
    };
    ArticlelistComponent.prototype.onEdit = function (article) {
        var _this = this;
        this.articleService.saveArticles(article).subscribe(function (data) { return _this.articles = data; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ArticlelistComponent.prototype, "articles", void 0);
    ArticlelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'articlelist',
            template: __webpack_require__(/*! ./articlelist.component.html */ "./src/app/articlelist/articlelist.component.html"),
            styles: [__webpack_require__(/*! ./articlelist.component.css */ "./src/app/articlelist/articlelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], ArticlelistComponent);
    return ArticlelistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kurtrogiers/Angular/register/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map