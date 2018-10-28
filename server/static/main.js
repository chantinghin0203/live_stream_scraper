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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nba_nba_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nba/nba.component */ "./src/app/nba/nba.component.ts");
/* harmony import */ var _football_football_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./football/football.component */ "./src/app/football/football.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "nba", component: _nba_nba_component__WEBPACK_IMPORTED_MODULE_2__["NbaComponent"] },
    { path: "football", component: _football_football_component__WEBPACK_IMPORTED_MODULE_3__["FootballComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav mat-tab-nav-bar>\n    <a mat-tab-link [routerLink]=\"['nba']\" routerLinkActive #nba=\"routerLinkActive\" [active]=\"nba.isActive\">NBA</a>\n    <a mat-tab-link [routerLink]=\"['football']\" routerLinkActive #football=\"routerLinkActive\" [active]=\"football.isActive\">Football</a>\n</nav>\n\n\n<router-outlet>\n</router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _football_football_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./football/football.component */ "./src/app/football/football.component.ts");
/* harmony import */ var _nba_nba_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nba/nba.component */ "./src/app/nba/nba.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _football_service_football_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./football/service/football.service */ "./src/app/football/service/football.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nba_service_nba_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nba/service/nba.service */ "./src/app/nba/service/nba.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _football_football_component__WEBPACK_IMPORTED_MODULE_4__["FootballComponent"],
                _nba_nba_component__WEBPACK_IMPORTED_MODULE_5__["NbaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_football_service_football_service__WEBPACK_IMPORTED_MODULE_8__["FootballService"], _nba_service_nba_service__WEBPACK_IMPORTED_MODULE_10__["NbaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/football/football.component.css":
/*!*************************************************!*\
  !*** ./src/app/football/football.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, td {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\ntable tr:nth-child(odd) {\r\n  background-color: #d6f1f8;\r\n}\r\n\r\ntable tr:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\r\n\r\n#loading-bar-spinner.spinner {\r\n    left: 50%;\r\n    margin-left: -20px;\r\n    top: 50%;\r\n    margin-top: -20px;\r\n    position: absolute;\r\n    z-index: 19 !important;\r\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\r\n            animation: loading-bar-spinner 400ms linear infinite;\r\n}\r\n\r\n#loading-bar-spinner.spinner .spinner-icon {\r\n    width: 40px;\r\n    height: 40px;\r\n    border:  solid 4px transparent;\r\n    border-top-color:  #00C8B1 !important;\r\n    border-left-color: #00C8B1 !important;\r\n    border-radius: 50%;\r\n}\r\n\r\n@-webkit-keyframes loading-bar-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg);   transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes loading-bar-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg);   transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n"

/***/ }),

/***/ "./src/app/football/football.component.html":
/*!**************************************************!*\
  !*** ./src/app/football/football.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveData  == null;then loadingTemplate else haveDataTemplate\"></div>\n\n<ng-template #haveDataTemplate>\n    <div *ngFor=\"let streanLink of  streamLinks\">\n        <h4>{{ streanLink.title }}</h4>\n        <hr>\n        <table>\n            <thead>\n            <th>Link</th>\n            <th>Description</th>\n            </thead>\n            <tr *ngFor=\"let link of  streanLink.links\">\n                <td><a href=\"{{ link.link }}\" target=\"_blank\">{{ link.link }}</a></td>\n                <td>{{ link.description }}</td>\n            </tr>\n        </table>\n    </div>\n</ng-template>\n\n<ng-template #loadingTemplate>\n    <!--<img *ngIf=\"haveData == null\" src=\"sample.svg\" class=\"ld ld-surprise\"/>!-->\n    <br>\n    <br>\n    <br>\n    <div id=\"loading-bar-spinner\" class=\"spinner\">\n        <div class=\"spinner-icon\"></div>\n    </div>\n</ng-template>\n<h4 *ngIf=\"haveData == false\">No available live now</h4>\n\n"

/***/ }),

/***/ "./src/app/football/football.component.ts":
/*!************************************************!*\
  !*** ./src/app/football/football.component.ts ***!
  \************************************************/
/*! exports provided: FootballComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballComponent", function() { return FootballComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_football_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/football.service */ "./src/app/football/service/football.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FootballComponent = /** @class */ (function () {
    function FootballComponent(footballService) {
        this.footballService = footballService;
        this.haveData = null;
    }
    FootballComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.streamLinksObs = this.footballService.getStreamLinksFromAPI();
        console.log(this.streamLinks);
        this.streamLinksObs.subscribe(function (data) {
            console.log(data.length);
            if (data.length != null) {
                _this.streamLinks = data;
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            console.log(_this.streamLinks);
        }, function (err) {
            console.error(err);
        }, function () {
        });
    };
    FootballComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-football',
            template: __webpack_require__(/*! ./football.component.html */ "./src/app/football/football.component.html"),
            styles: [__webpack_require__(/*! ./football.component.css */ "./src/app/football/football.component.css")]
        }),
        __metadata("design:paramtypes", [_service_football_service__WEBPACK_IMPORTED_MODULE_1__["FootballService"]])
    ], FootballComponent);
    return FootballComponent;
}());



/***/ }),

/***/ "./src/app/football/service/football.service.ts":
/*!******************************************************!*\
  !*** ./src/app/football/service/football.service.ts ***!
  \******************************************************/
/*! exports provided: FootballService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballService", function() { return FootballService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FootballService = /** @class */ (function () {
    function FootballService(httpClient) {
        this.httpClient = httpClient;
    }
    FootballService.prototype.getStreamLinksFromAPI = function () {
        return this.httpClient.get("/football/get-stream-list-praw");
    };
    FootballService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FootballService);
    return FootballService;
}());



/***/ }),

/***/ "./src/app/nba/nba.component.css":
/*!***************************************!*\
  !*** ./src/app/nba/nba.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, td {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\ntable tr:nth-child(odd) {\r\n  background-color: #d6f1f8;\r\n}\r\n\r\ntable tr:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\r\n\r\n#loading-bar-spinner.spinner {\r\n    left: 50%;\r\n    margin-left: -20px;\r\n    top: 50%;\r\n    margin-top: -20px;\r\n    position: absolute;\r\n    z-index: 19 !important;\r\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\r\n            animation: loading-bar-spinner 400ms linear infinite;\r\n}\r\n\r\n#loading-bar-spinner.spinner .spinner-icon {\r\n    width: 40px;\r\n    height: 40px;\r\n    border:  solid 4px transparent;\r\n    border-top-color:  #00C8B1 !important;\r\n    border-left-color: #00C8B1 !important;\r\n    border-radius: 50%;\r\n}\r\n\r\n@-webkit-keyframes loading-bar-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg);   transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes loading-bar-spinner {\r\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg);   transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n"

/***/ }),

/***/ "./src/app/nba/nba.component.html":
/*!****************************************!*\
  !*** ./src/app/nba/nba.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveData  == null;then loadingTemplate else haveDataTemplate\"></div>\n\n<ng-template #haveDataTemplate>\n    <div *ngFor=\"let streanLink of  streamLinks\">\n        <h4>{{ streanLink.title }}</h4>\n        <hr>\n        <table>\n            <thead>\n            <th>Link</th>\n            <th>Description</th>\n            </thead>\n            <tr *ngFor=\"let link of  streanLink.links\">\n                <td><a href=\"{{ link.link }}\" target=\"_blank\">{{ link.link }}</a></td>\n                <td>{{ link.description }}</td>\n            </tr>\n        </table>\n    </div>\n</ng-template>\n\n\n<ng-template #loadingTemplate>\n    <!--<img *ngIf=\"haveData == null\" src=\"sample.svg\" class=\"ld ld-surprise\"/>!-->\n    <br>\n    <br>\n    <br>\n    <div id=\"loading-bar-spinner\" class=\"spinner\">\n        <div class=\"spinner-icon\"></div>\n    </div>\n</ng-template>\n<h4 *ngIf=\"haveData == false\">No available live now</h4>\n"

/***/ }),

/***/ "./src/app/nba/nba.component.ts":
/*!**************************************!*\
  !*** ./src/app/nba/nba.component.ts ***!
  \**************************************/
/*! exports provided: NbaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbaComponent", function() { return NbaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_nba_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/nba.service */ "./src/app/nba/service/nba.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NbaComponent = /** @class */ (function () {
    function NbaComponent(nbaService) {
        this.nbaService = nbaService;
        this.streamLinks = null;
        this.haveData = null;
    }
    NbaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.streamLinksObs = this.nbaService.getStreamLinksFromAPI();
        console.log(this.streamLinks);
        this.streamLinksObs.subscribe(function (data) {
            if (data.length != null) {
                _this.streamLinks = data;
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
        }, function (err) {
            console.error(err);
        }, function () {
            console.log(_this.haveData);
        });
    };
    NbaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nba',
            template: __webpack_require__(/*! ./nba.component.html */ "./src/app/nba/nba.component.html"),
            styles: [__webpack_require__(/*! ./nba.component.css */ "./src/app/nba/nba.component.css")]
        }),
        __metadata("design:paramtypes", [_service_nba_service__WEBPACK_IMPORTED_MODULE_1__["NbaService"]])
    ], NbaComponent);
    return NbaComponent;
}());



/***/ }),

/***/ "./src/app/nba/service/nba.service.ts":
/*!********************************************!*\
  !*** ./src/app/nba/service/nba.service.ts ***!
  \********************************************/
/*! exports provided: NbaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbaService", function() { return NbaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NbaService = /** @class */ (function () {
    function NbaService(httpClient) {
        this.httpClient = httpClient;
    }
    NbaService.prototype.getStreamLinksFromAPI = function () {
        return this.httpClient.get("/nba/get-stream-list-praw");
    };
    NbaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NbaService);
    return NbaService;
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
    production: false,
    apiUrl: '127.0.0.1:5000'
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

module.exports = __webpack_require__(/*! C:\Users\Marco\Workspaces\live_stream_scraper\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map