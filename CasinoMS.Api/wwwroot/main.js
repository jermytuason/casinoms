(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _auth_auth_loader_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-loader-guard */ "./src/app/auth/auth-loader-guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _record_cash_in_cash_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record/cash-in/cash-in.component */ "./src/app/record/cash-in/cash-in.component.ts");
/* harmony import */ var _record_cash_out_cash_out_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record/cash-out/cash-out.component */ "./src/app/record/cash-out/cash-out.component.ts");
/* harmony import */ var _reports_loaders_transactions_loaders_transactions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/loaders-transactions/loaders-transactions.component */ "./src/app/reports/loaders-transactions/loaders-transactions.component.ts");
/* harmony import */ var _reports_my_transactions_my_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports/my-transactions/my-transactions.component */ "./src/app/reports/my-transactions/my-transactions.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");














const routes = [
    {
        path: 'home',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
        children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
        ]
    },
    {
        path: 'record/cashin',
        canActivate: [_auth_auth_loader_guard__WEBPACK_IMPORTED_MODULE_3__["AuthLoaderGuard"]],
        component: _record_cash_in_cash_in_component__WEBPACK_IMPORTED_MODULE_5__["CashInComponent"]
    },
    {
        path: 'record/cashout',
        canActivate: [_auth_auth_loader_guard__WEBPACK_IMPORTED_MODULE_3__["AuthLoaderGuard"]],
        component: _record_cash_out_cash_out_component__WEBPACK_IMPORTED_MODULE_6__["CashOutComponent"]
    },
    {
        path: 'reports/loaders-transactions',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _reports_loaders_transactions_loaders_transactions_component__WEBPACK_IMPORTED_MODULE_7__["LoadersTransactionsComponent"]
    },
    {
        path: 'reports/my-transactions',
        canActivate: [_auth_auth_loader_guard__WEBPACK_IMPORTED_MODULE_3__["AuthLoaderGuard"]],
        component: _reports_my_transactions_my_transactions_component__WEBPACK_IMPORTED_MODULE_8__["MyTransactionsComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/global.service */ "./src/app/shared/global.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function () { return ["/record/cashin"]; };
const _c1 = function () { return ["/record/cashout"]; };
function AppComponent_nav_1_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cash - In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cash - Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return ["/reports/my-transactions"]; };
function AppComponent_nav_1_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/profile"]; };
function AppComponent_nav_1_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_1_div_23_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.globalService.GetUserFullName(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
const _c4 = function () { return ["/home"]; };
const _c5 = function () { return ["/reports/loaders-transactions"]; };
function AppComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CASINO MS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_nav_1_li_13_Template, 12, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Loaders Transactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_nav_1_a_22_Template, 4, 2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_nav_1_div_23_Template, 21, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.globalService.isAuthenticated() && ctx_r0.globalService.isLoaderAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.globalService.isAuthenticated() && ctx_r0.globalService.isLoaderAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.globalService.isAuthenticated());
} }
class AppComponent {
    constructor(globalService, userService, router, ngxService) {
        this.globalService = globalService;
        this.userService = userService;
        this.router = router;
        this.ngxService = ngxService;
        this.title = 'CasinoMS-App';
    }
    onLogout() {
        this.ngxService.start();
        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
        this.router.navigateByUrl('/user/login');
        this.ngxService.stop();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["class", "navbar navbar-expand-lg navbar-light bg-light", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", "text-uppercase", "font-weight-light", "d-flex", "align-items-center", "header-font", "margin-left-sm", 3, "routerLink"], ["src", "\\assets\\images\\iconfinder_Gambler_3525383.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", "nav-image"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "margin-left-sm"], [1, "navbar-nav"], [1, "nav-item"], ["data-toggle", "tab", 1, "nav-link", "text-uppercase", 3, "routerLink"], [1, "sr-only"], ["class", "nav-item dropdown text-uppercase", 4, "ngIf"], [1, "nav-item", "dropdown", "text-uppercase"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["data-toggle", "tab", 1, "dropdown-item", "d-flex", "align-content-center", 3, "routerLink"], ["src", "\\assets\\images\\loaders-transactions-icon.png", "alt", "Generic placeholder image", 2, "width", "25px", "height", "25px"], [1, "margin-left-sm"], ["class", "dropdown-item", "data-toggle", "tab", 3, "routerLink", 4, "ngIf"], ["class", "margin-right-md dropleft", 4, "ngIf"], ["src", "\\assets\\images\\cash-in-icon.png", "alt", "Generic placeholder image", 1, "reverse-margin-left-xsm", 2, "width", "25px", "height", "25px"], ["data-toggle", "tab", 1, "dropdown-item", 3, "routerLink"], ["src", "\\assets\\images\\cash-out-icon.png", "alt", "Generic placeholder image", 2, "width", "20px", "height", "20px"], [1, "margin-left-xsm"], ["src", "\\assets\\images\\my-transactions-icon.png", "alt", "Generic placeholder image", 2, "width", "25px", "height", "25px"], [1, "margin-right-md", "dropleft"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], ["src", "./assets/images/user-icon.png", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "far", "fa-user"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink"], [1, "far", "fa-id-card"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 24, 9, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-ui-loader");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globalService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _record_cash_in_cash_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./record/cash-in/cash-in.component */ "./src/app/record/cash-in/cash-in.component.ts");
/* harmony import */ var _record_cash_out_cash_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./record/cash-out/cash-out.component */ "./src/app/record/cash-out/cash-out.component.ts");
/* harmony import */ var _record_record_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./record/record.component */ "./src/app/record/record.component.ts");
/* harmony import */ var _reports_loaders_transactions_loaders_transactions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/loaders-transactions/loaders-transactions.component */ "./src/app/reports/loaders-transactions/loaders-transactions.component.ts");
/* harmony import */ var _reports_my_transactions_my_transactions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports/my-transactions/my-transactions.component */ "./src/app/reports/my-transactions/my-transactions.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pipes/search-filter.pipe */ "./src/app/shared/pipes/search-filter.pipe.ts");
/* harmony import */ var _shared_excel_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/excel.service */ "./src/app/shared/excel.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");

























const customUiLoader = {
    "bgsColor": "white",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "white",
    "fgsPosition": "center-center",
    "fgsSize": 80,
    "fgsType": "folding-cube",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "white",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_excel_service__WEBPACK_IMPORTED_MODULE_20__["ExcelService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__["NgxUiLoaderModule"].forRoot(customUiLoader),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _record_record_component__WEBPACK_IMPORTED_MODULE_15__["RecordComponent"],
        _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
        _record_cash_in_cash_in_component__WEBPACK_IMPORTED_MODULE_13__["CashInComponent"],
        _record_cash_out_cash_out_component__WEBPACK_IMPORTED_MODULE_14__["CashOutComponent"],
        _reports_loaders_transactions_loaders_transactions_component__WEBPACK_IMPORTED_MODULE_16__["LoadersTransactionsComponent"],
        _reports_my_transactions_my_transactions_component__WEBPACK_IMPORTED_MODULE_17__["MyTransactionsComponent"],
        _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["SearchFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__["NgxUiLoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                    _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                    _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _record_record_component__WEBPACK_IMPORTED_MODULE_15__["RecordComponent"],
                    _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
                    _record_cash_in_cash_in_component__WEBPACK_IMPORTED_MODULE_13__["CashInComponent"],
                    _record_cash_out_cash_out_component__WEBPACK_IMPORTED_MODULE_14__["CashOutComponent"],
                    _reports_loaders_transactions_loaders_transactions_component__WEBPACK_IMPORTED_MODULE_16__["LoadersTransactionsComponent"],
                    _reports_my_transactions_my_transactions_component__WEBPACK_IMPORTED_MODULE_17__["MyTransactionsComponent"],
                    _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["SearchFilterPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__["NgxUiLoaderModule"].forRoot(customUiLoader),
                ],
                providers: [_shared_excel_service__WEBPACK_IMPORTED_MODULE_20__["ExcelService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global.service */ "./src/app/shared/global.service.ts");




class AuthGuard {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    canActivate(next, state) {
        if (this.globalService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    }
    ;
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth-loader-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/auth-loader-guard.ts ***!
  \*******************************************/
/*! exports provided: AuthLoaderGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoaderGuard", function() { return AuthLoaderGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global.service */ "./src/app/shared/global.service.ts");




class AuthLoaderGuard {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    canActivate(next, state) {
        if (this.globalService.isLoaderAuthenticated()) {
            return true;
        }
        else {
            if (this.globalService.isFinancerAuthenticated()) {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/user/login']);
            }
            return false;
        }
    }
    ;
}
AuthLoaderGuard.ɵfac = function AuthLoaderGuard_Factory(t) { return new (t || AuthLoaderGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
AuthLoaderGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthLoaderGuard, factory: AuthLoaderGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLoaderGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "home-section"], [1, "container-fluid"], [1, "jumbotron", "jumbotron-container"], [1, "display-4"], [1, "lead"], ["href", "mailto:jjttechnologies@gmail.com"], [1, "my-4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to Casino Management System!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This system helps users mainly loaders and financers track their transactions to prevent discrepancy. This includes input of cash-in/cash-out transactions and report generation. For suggestions or functionality request please send an e-mail to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "jjttechnologies@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard contents will be available on the next version release.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/record/cash-in/cash-in.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/record/cash-in/cash-in.component.ts ***!
  \*****************************************************/
/*! exports provided: CashInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInComponent", function() { return CashInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/transaction.service */ "./src/app/shared/transaction.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function CashInComponent_div_17_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loader_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loader_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loader_r2, " ");
} }
function CashInComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please choose another loader *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CashInComponent_div_17_option_9_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loaderList);
} }
const _c0 = function (a0, a1) { return { "col-md-12 margin-bottom-sm": a0, "col-md-6 margin-bottom-md": a1 }; };
const _c1 = function (a0, a1) { return { "fa fa-people-arrows": a0, "fas fa-arrow-circle-left": a1 }; };
const _c2 = function (a0, a1, a2) { return { "is-invalid": a0, "is-valid": a1, "": a2 }; };
class CashInComponent {
    constructor(fb, toastr, transactionService, ngxService, userService) {
        this.fb = fb;
        this.toastr = toastr;
        this.transactionService = transactionService;
        this.ngxService = ngxService;
        this.userService = userService;
        this.loaderList = [];
        this.isCashInForOtherLoader = false;
        this.cashInButtonText = "Cash-In for other Loader";
        //#endregion
        this.isFormDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playerUserNameValMessages = {
            maxlength: "Player username can't exceed 20 characters."
        };
        this.referenceNoValMessages = {
            required: "Please enter transaction's reference number.",
            maxlength: "Reference number can't exceed 30 digits."
        };
        this.amountValMessages = {
            required: "Please enter transaction's amount.",
            maxlength: "Amount can't exceed 20 digits.",
            pattern: "Amount is invalid."
        };
        this.constants = new src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]();
    }
    ngOnInit() {
        this.transactionDetailsForm = this.fb.group({
            transactionType: ['Cash-In'],
            loaderList: [''],
            playerUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            referenceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\-?\d*\.?\d{1,2}/)]]
        });
        const playerUserNameControl = this.transactionDetailsForm.get(this.constants.playerUserName);
        playerUserNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage(playerUserNameControl, this.constants.playerUserName));
        const referenceNoControl = this.transactionDetailsForm.get(this.constants.referenceNo);
        referenceNoControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => {
            this.setMessage(referenceNoControl, this.constants.referenceNo);
            this.verifyReferenceNumber(value);
        });
        const amountControl = this.transactionDetailsForm.get(this.constants.amount);
        amountControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage(amountControl, this.constants.amount));
        this.transactionDetailsForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.userService.getAllLoaderUsersByTeam().subscribe((data) => {
            data.forEach(user => {
                this.loaderList.push(user.alias);
            });
        });
    }
    verifyReferenceNumber(value) {
        this.transactionService.getTransactionDetailsByReferenceNo(value).subscribe({
            next: transactionDetail => this.referenceNumberChecker(transactionDetail),
            error: err => this.errorMessage = err
        });
    }
    referenceNumberChecker(transactionDetail) {
        this.referenceNoVerificationMessage = null;
        if (transactionDetail != null && transactionDetail.referenceNo != null) {
            this.referenceNoVerificationMessage = "This reference number is already recorded. Please verify with the player.";
        }
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.playerUserName) {
            this.playerUserNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.playerUserNameMessage = Object.keys(c.errors).map(key => this.playerUserNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.referenceNo) {
            this.referenceNoMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.referenceNoMessage = Object.keys(c.errors).map(key => this.referenceNoValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.amount) {
            this.amountMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.amountMessage = Object.keys(c.errors).map(key => this.amountValMessages[key]).join(' ');
            }
        }
    }
    setTransactionDetailsValue(transactionDetailsForm) {
        return {
            id: "",
            transactionId: "",
            transactionType: transactionDetailsForm.get("transactionType").value,
            playerUserName: transactionDetailsForm.get("playerUserName").value,
            referenceNo: transactionDetailsForm.get("referenceNo").value,
            amount: transactionDetailsForm.get("amount").value,
            submittedBy: transactionDetailsForm.get("loaderList").value,
            submittedDate: "",
            fullName: "",
            userName: "",
            userId: ""
        };
    }
    setCashInForOtherLoader() {
        if (!this.isCashInForOtherLoader) {
            this.isCashInForOtherLoader = true;
            this.cashInButtonText = "Cash-In using my Account";
        }
        else {
            this.isCashInForOtherLoader = false;
            this.cashInButtonText = "Cash-In for other Loader";
        }
    }
    submitTransactionDetailsForm() {
        if (this.isCashInForOtherLoader &&
            (this.transactionDetailsForm.get("loaderList").value == null || this.transactionDetailsForm.get("loaderList").value == "")) {
            this.toastr.error("Please choose another loader.", "CASH-IN TRANSACTION");
        }
        else {
            this.ngxService.start();
            if (this.transactionDetailsForm.valid) {
                if (this.transactionDetailsForm.dirty) {
                    this.transactionService.submitTransactionDetails(this.setTransactionDetailsValue(this.transactionDetailsForm)).subscribe({
                        next: () => this.onSaveComplete(),
                        error: err => this.errorMessage = err
                    });
                }
            }
        }
    }
    onSaveComplete() {
        this.isCashInForOtherLoader = false;
        this.transactionDetailsForm.reset();
        this.transactionDetailsForm.get("transactionType").setValue("Cash-In");
        this.isFormDirty.emit(false);
        this.toastr.success("Transaction submitted successfully.", "CASH-IN TRANSACTION");
        this.ngxService.stop();
    }
    resetForm(form) {
        this.isCashInForOtherLoader = false;
        form.reset();
        form.get("transactionType").setValue("Cash-In");
    }
}
CashInComponent.ɵfac = function CashInComponent_Factory(t) { return new (t || CashInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CashInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashInComponent, selectors: [["app-cash-in"]], outputs: { isFormDirty: "isFormDirty" }, decls: 64, vars: 31, consts: [[1, "cash-in-section"], [1, "container", "margin-top-lg", "cash-inout-container"], [1, "card"], [1, "card-body"], [1, "card-title", "text-uppercase", "d-flex", "align-items-center"], ["src", "\\assets\\images\\cash-in-icon.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", 2, "width", "70px", "height", "70px"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "row", "margin-top-md"], [1, "col"], [3, "formGroup", "ngSubmit"], [1, "row", "margin-top-sm"], [3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-dark", "full-width", 3, "click"], ["class", "col-md-6", 4, "ngIf"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-cash-register"], ["id", "TransactionTypeId", "placeholder", "Transaction Type *", "formControlName", "transactionType", "type", "text", "disabled", "", 1, "form-control"], [1, "col-md-6"], [1, "fa", "fa-user", "margin-right-xsm"], ["id", "PlayerUserNameId", "placeholder", "Player Username (optional)", "formControlName", "playerUserName", "type", "text", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-barcode"], ["id", "ReferenceNoId", "placeholder", "Reference No. *", "formControlName", "referenceNo", "type", "text", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-money-bill"], ["id", "AmountId", "placeholder", "Amount *", "formControlName", "amount", "type", "number", 1, "form-control", 3, "ngClass"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-4", "margin-top-md"], ["type", "submit", 1, "btn", "btn-outline-success", "full-width", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-danger", "full-width", 3, "click"], [1, "fa", "fa-id-badge", "margin-right-xsm"], ["formControlName", "loaderList", "id", "LoaderList", 1, "custom-select"], ["value", "", "defaultValue", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CashInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cash - In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please fill-up all the necessary details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CashInComponent_Template_form_ngSubmit_11_listener() { return ctx.submitTransactionDetailsForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashInComponent_Template_button_click_14_listener() { return ctx.setCashInForOtherLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CashInComponent_div_17_Template, 10, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashInComponent_Template_button_click_62_listener() { return ctx.resetForm(ctx.transactionDetailsForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transactionDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, !ctx.isCashInForOtherLoader, ctx.isCashInForOtherLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c1, !ctx.isCashInForOtherLoader, ctx.isCashInForOtherLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cashInButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCashInForOtherLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](19, _c2, ctx.playerUserNameMessage, !ctx.playerUserNameMessage && ctx.transactionDetailsForm.get("playerUserName").touched && ctx.transactionDetailsForm.get("playerUserName").valid, ctx.transactionDetailsForm.get("playerUserName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.playerUserNameMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c2, ctx.referenceNoMessage || ctx.referenceNoVerificationMessage, (!ctx.referenceNoMessage || !ctx.referenceNoVerificationMessage) && ctx.transactionDetailsForm.get("referenceNo").touched && ctx.transactionDetailsForm.get("referenceNo").valid, ctx.transactionDetailsForm.get("referenceNo").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.referenceNoMessage, " ", ctx.referenceNoVerificationMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](27, _c2, ctx.amountMessage, !ctx.amountMessage && ctx.transactionDetailsForm.get("amount").touched && ctx.transactionDetailsForm.get("amount").valid, ctx.transactionDetailsForm.get("amount").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.amountMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.transactionDetailsForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZC9jYXNoLWluL2Nhc2gtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cash-in',
                templateUrl: './cash-in.component.html',
                styleUrls: ['./cash-in.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] }, { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { isFormDirty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/record/cash-out/cash-out.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/record/cash-out/cash-out.component.ts ***!
  \*******************************************************/
/*! exports provided: CashOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashOutComponent", function() { return CashOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/transaction.service */ "./src/app/shared/transaction.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function CashOutComponent_div_17_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loader_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loader_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loader_r2, " ");
} }
function CashOutComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please choose another loader *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CashOutComponent_div_17_option_9_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loaderList);
} }
const _c0 = function (a0, a1) { return { "col-md-12 margin-bottom-sm": a0, "col-md-6 margin-bottom-md": a1 }; };
const _c1 = function (a0, a1) { return { "fa fa-people-arrows": a0, "fas fa-arrow-circle-left": a1 }; };
const _c2 = function (a0, a1, a2) { return { "is-invalid": a0, "is-valid": a1, "": a2 }; };
class CashOutComponent {
    constructor(fb, toastr, transactionService, ngxService, userService) {
        this.fb = fb;
        this.toastr = toastr;
        this.transactionService = transactionService;
        this.ngxService = ngxService;
        this.userService = userService;
        this.loaderList = [];
        this.isCashOutForOtherLoader = false;
        this.cashOutButtonText = "Cash-Out for other Loader";
        //#endregion
        this.isFormDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playerUserNameValMessages = {
            required: "Please enter your player username.",
            maxlength: "Player username can't exceed 20 characters."
        };
        this.referenceNoValMessages = {
            required: "Please enter transaction's reference number.",
            maxlength: "Reference number can't exceed 30 digits."
        };
        this.amountValMessages = {
            required: "Please enter transaction's amount.",
            maxlength: "Amount can't exceed 20 digits.",
            pattern: "Amount is invalid."
        };
        this.constants = new src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]();
    }
    ngOnInit() {
        this.transactionDetailsForm = this.fb.group({
            transactionType: ['Cash-Out'],
            loaderList: [''],
            playerUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            referenceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\-?\d*\.?\d{1,2}/)]]
        });
        const playerUserNameControl = this.transactionDetailsForm.get(this.constants.playerUserName);
        playerUserNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage(playerUserNameControl, this.constants.playerUserName));
        const referenceNoControl = this.transactionDetailsForm.get(this.constants.referenceNo);
        referenceNoControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => {
            this.setMessage(referenceNoControl, this.constants.referenceNo);
            this.verifyReferenceNumber(value);
        });
        const amountControl = this.transactionDetailsForm.get(this.constants.amount);
        amountControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage(amountControl, this.constants.amount));
        this.transactionDetailsForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.userService.getAllLoaderUsersByTeam().subscribe((data) => {
            data.forEach(user => {
                this.loaderList.push(user.alias);
            });
        });
    }
    verifyReferenceNumber(value) {
        this.transactionService.getTransactionDetailsByReferenceNo(value).subscribe({
            next: transactionDetail => this.referenceNumberChecker(transactionDetail),
            error: err => this.errorMessage = err
        });
    }
    referenceNumberChecker(transactionDetail) {
        this.referenceNoVerificationMessage = null;
        if (transactionDetail != null && transactionDetail.referenceNo != null) {
            this.referenceNoVerificationMessage = "This reference number is already recorded. Please double check.";
        }
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.playerUserName) {
            this.playerUserNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.playerUserNameMessage = Object.keys(c.errors).map(key => this.playerUserNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.referenceNo) {
            this.referenceNoMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.referenceNoMessage = Object.keys(c.errors).map(key => this.referenceNoValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.amount) {
            this.amountMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.amountMessage = Object.keys(c.errors).map(key => this.amountValMessages[key]).join(' ');
            }
        }
    }
    setTransactionDetailsValue(transactionDetailsForm) {
        return {
            id: "",
            transactionId: "",
            transactionType: transactionDetailsForm.get("transactionType").value,
            playerUserName: transactionDetailsForm.get("playerUserName").value,
            referenceNo: transactionDetailsForm.get("referenceNo").value,
            amount: transactionDetailsForm.get("amount").value,
            submittedBy: transactionDetailsForm.get("loaderList").value,
            submittedDate: "",
            fullName: "",
            userName: "",
            userId: ""
        };
    }
    setCashOutForOtherLoader() {
        if (!this.isCashOutForOtherLoader) {
            this.isCashOutForOtherLoader = true;
            this.cashOutButtonText = "Cash-Out using my Account";
        }
        else {
            this.isCashOutForOtherLoader = false;
            this.cashOutButtonText = "Cash-Out for other Loader";
        }
    }
    submitTransactionDetailsForm() {
        if (this.isCashOutForOtherLoader &&
            (this.transactionDetailsForm.get("loaderList").value == null || this.transactionDetailsForm.get("loaderList").value == "")) {
            this.toastr.error("Please choose another loader.", "CASH-OUT TRANSACTION");
        }
        else {
            this.ngxService.start();
            if (this.transactionDetailsForm.valid) {
                if (this.transactionDetailsForm.dirty) {
                    this.transactionService.submitTransactionDetails(this.setTransactionDetailsValue(this.transactionDetailsForm)).subscribe({
                        next: () => this.onSaveComplete(),
                        error: err => this.errorMessage = err
                    });
                }
            }
        }
    }
    onSaveComplete() {
        this.transactionDetailsForm.reset();
        this.transactionDetailsForm.get("transactionType").setValue("Cash-Out");
        this.isFormDirty.emit(false);
        this.toastr.success("Transaction submitted successfully.", "CASH-OUT TRANSACTION");
        this.ngxService.stop();
    }
    resetForm(form) {
        form.reset();
        form.get("transactionType").setValue("Cash-Out");
    }
}
CashOutComponent.ɵfac = function CashOutComponent_Factory(t) { return new (t || CashOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CashOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashOutComponent, selectors: [["app-cash-out"]], outputs: { isFormDirty: "isFormDirty" }, decls: 64, vars: 31, consts: [[1, "cash-out-section"], [1, "container", "margin-top-lg", "cash-inout-container"], [1, "card"], [1, "card-body"], [1, "card-title", "text-uppercase", "d-flex", "align-items-center"], ["src", "\\assets\\images\\cash-out-icon.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", 2, "width", "70px", "height", "70px"], [1, "card-subtitle", "mb-2", "text-muted", "margin-top-md"], [1, "row", "margin-top-md"], [1, "col"], [3, "formGroup", "ngSubmit"], [1, "row", "margin-top-sm"], [3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-dark", "full-width", 3, "click"], ["class", "col-md-6", 4, "ngIf"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-cash-register"], ["id", "TransactionTypeId", "placeholder", "Transaction Type *", "formControlName", "transactionType", "type", "text", "disabled", "", 1, "form-control"], [1, "col-md-6"], [1, "fa", "fa-user", "margin-right-xsm"], ["id", "PlayerUserNameId", "placeholder", "Player Username *", "formControlName", "playerUserName", "type", "text", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-barcode"], ["id", "ReferenceNoId", "placeholder", "Reference No. *", "formControlName", "referenceNo", "type", "text", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-money-bill"], ["id", "AmountId", "placeholder", "Amount *", "formControlName", "amount", "type", "number", 1, "form-control", 3, "ngClass"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-4", "margin-top-md"], ["type", "submit", 1, "btn", "btn-outline-success", "full-width", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-danger", "full-width", 3, "click"], [1, "fa", "fa-id-badge", "margin-right-xsm"], ["formControlName", "loaderList", "id", "LoaderList", 1, "custom-select"], ["value", "", "defaultValue", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CashOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cash - Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please fill-up all the necessary details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CashOutComponent_Template_form_ngSubmit_11_listener() { return ctx.submitTransactionDetailsForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashOutComponent_Template_button_click_14_listener() { return ctx.setCashOutForOtherLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CashOutComponent_div_17_Template, 10, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashOutComponent_Template_button_click_62_listener() { return ctx.resetForm(ctx.transactionDetailsForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transactionDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, !ctx.isCashOutForOtherLoader, ctx.isCashOutForOtherLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c1, !ctx.isCashOutForOtherLoader, ctx.isCashOutForOtherLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cashOutButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCashOutForOtherLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](19, _c2, ctx.playerUserNameMessage, !ctx.playerUserNameMessage && ctx.transactionDetailsForm.get("playerUserName").touched && ctx.transactionDetailsForm.get("playerUserName").valid, ctx.transactionDetailsForm.get("playerUserName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.playerUserNameMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c2, ctx.referenceNoMessage || ctx.referenceNoVerificationMessage, (!ctx.referenceNoMessage || !ctx.referenceNoVerificationMessage) && ctx.transactionDetailsForm.get("referenceNo").touched && ctx.transactionDetailsForm.get("referenceNo").valid, ctx.transactionDetailsForm.get("referenceNo").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.referenceNoMessage, " ", ctx.referenceNoVerificationMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](27, _c2, ctx.amountMessage, !ctx.amountMessage && ctx.transactionDetailsForm.get("amount").touched && ctx.transactionDetailsForm.get("amount").valid, ctx.transactionDetailsForm.get("amount").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.amountMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.transactionDetailsForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZC9jYXNoLW91dC9jYXNoLW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cash-out',
                templateUrl: './cash-out.component.html',
                styleUrls: ['./cash-out.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] }, { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { isFormDirty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/record/record.component.ts":
/*!********************************************!*\
  !*** ./src/app/record/record.component.ts ***!
  \********************************************/
/*! exports provided: RecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordComponent", function() { return RecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RecordComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecordComponent.ɵfac = function RecordComponent_Factory(t) { return new (t || RecordComponent)(); };
RecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordComponent, selectors: [["app-record"]], decls: 2, vars: 0, template: function RecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-record',
                templateUrl: './record.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/reports/loaders-transactions/loaders-transactions.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/reports/loaders-transactions/loaders-transactions.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadersTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersTransactionsComponent", function() { return LoadersTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/transaction.service */ "./src/app/shared/transaction.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/excel.service */ "./src/app/shared/excel.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/global.service */ "./src/app/shared/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/search-filter.pipe */ "./src/app/shared/pipes/search-filter.pipe.ts");











const _c0 = ["DataTable"];
function LoadersTransactionsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoadersTransactionsComponent_div_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.startDate);
} }
function LoadersTransactionsComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadersTransactionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoadersTransactionsComponent_div_18_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.endDate);
} }
function LoadersTransactionsComponent_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadersTransactionsComponent_div_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.filterByDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.startDate == null || ctx_r12.endDate == null);
} }
function LoadersTransactionsComponent_div_19_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadersTransactionsComponent_div_19_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.resetTransactionDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadersTransactionsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadersTransactionsComponent_div_19_button_1_Template, 3, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadersTransactionsComponent_div_19_button_2_Template, 3, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showDateInput && !ctx_r3.isFilterSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showDateInput && ctx_r3.isFilterSuccess);
} }
function LoadersTransactionsComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.submittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.transactionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.referenceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.playerUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r18.submittedDate);
} }
function LoadersTransactionsComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadersTransactionsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadersTransactionsComponent_div_60_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.exportAsXLSX(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class LoadersTransactionsComponent {
    constructor(transactionService, toastr, excelService, ngxService, globalService) {
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.excelService = excelService;
        this.ngxService = ngxService;
        this.globalService = globalService;
        this.p = 1;
        this.transactionDetails = [];
        this.errorMessage = '';
        this.showDateInput = false;
        this.isFilterSuccess = false;
        this.filterAmount = { count: 0 };
    }
    ngOnInit() {
        this.transactionService.getTransactionDetails().subscribe({
            next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
            error: err => this.errorMessage = err
        });
    }
    toggleDateInput() {
        this.showDateInput = !this.showDateInput;
    }
    filterByDate() {
        if (!this.startDate || !this.endDate) {
            this.toastr.error("Please fill out the dates to be filtered.", "Date Input Error");
        }
        else if (this.startDate > this.endDate) {
            this.toastr.error("End Date can't be greater then Start Date", "Date Input Error");
            this.startDate = null;
            this.endDate = null;
        }
        else {
            this.ngxService.start();
            this.transactionService.getTransactionDetailsByDates(this.startDate, this.endDate).subscribe({
                next: transactionDetails => this.transactionDetails = this.onFilterComplete(transactionDetails),
                error: err => this.errorMessage = err
            });
        }
    }
    onComplete(transactionDetails) {
        this.filterAmount.count = transactionDetails.reduce((sum, current) => sum + current.amount, 0);
        return transactionDetails;
    }
    onFilterComplete(transactionDetails) {
        this.filterAmount.count = transactionDetails.reduce((sum, current) => sum + current.amount, 0);
        this.isFilterSuccess = true;
        this.ngxService.stop();
        return transactionDetails;
    }
    resetTransactionDetails() {
        this.startDate = null;
        this.endDate = null;
        this.isFilterSuccess = false;
        this.transactionService.getTransactionDetails().subscribe({
            next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
            error: err => this.errorMessage = err
        });
    }
    exportAsXLSX() {
        // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.dataTable.nativeElement);
        // const wb: XLSX.WorkBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // /* save to file */
        // XLSX.writeFile(wb, 'Loaders_Transaction.xlsx')
        this.excelService.exportAsExcelFile(this.transactionDetails, 'Loaders_Transaction');
    }
}
LoadersTransactionsComponent.ɵfac = function LoadersTransactionsComponent_Factory(t) { return new (t || LoadersTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
LoadersTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadersTransactionsComponent, selectors: [["app-loaders-transactions"]], viewQuery: function LoadersTransactionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataTable = _t.first);
    } }, decls: 64, vars: 18, consts: [[1, "loaders-transaction-section"], [1, "container-fluid", "margin-top-lg", "loader-transaction-container"], [1, "card"], [1, "card-body"], [1, "card-title", "text-uppercase", "d-flex", "align-items-center"], ["src", "\\assets\\images\\loaders-transactions-icon.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", 2, "width", "70px", "height", "70px"], [1, "card-subtitle", "mb-2", "text-muted", "margin-top-md"], [1, "row", "margin-top-md"], [1, "col-lg-9"], [1, "row", "d-flex", "justify-content-start"], [1, "col-lg-2", "margin-top-md"], ["type", "button", 1, "btn", "btn-info", "text-uppercase", "full-width", 3, "click"], [1, "fa", "fa-search"], ["class", "col-lg-3 margin-top-md", 4, "ngIf"], ["class", "margin-top-md divider-padding", 4, "ngIf"], [1, "col-lg-3", "margin-top-md"], [1, "input-group"], ["id", "SearchId", "placeholder", "SEARCH", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "col", "table-responsive"], ["DataTable", ""], [1, "table", "table-hover"], [1, "text-uppercase"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "margin-top-sm"], [1, "col", "offset-lg-9", "margin-top-md"], [1, "input-group-prepend"], [1, "fas", "fa-money-bill-wave"], ["id", "AmountId", "type", "text", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-lg-1 margin-top-md", 4, "ngIf"], [1, "col", "d-flex", "justify-content-center"], [3, "pageChange"], ["type", "datetime-local", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "margin-top-md", "divider-padding"], ["type", "button", "class", "btn btn-info text-uppercase full-width", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger text-uppercase full-width", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "text-uppercase", "full-width", 3, "disabled", "click"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-danger", "text-uppercase", "full-width", 3, "click"], [1, "fas", "fa-sync-alt"], ["myVar", ""], ["colspan", "7"], [1, "col-lg-1", "margin-top-md"], [1, "fas", "fa-file-excel"]], template: function LoadersTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Loaders Transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All transactions by loaders can be seen here. Search for reference number, player name, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadersTransactionsComponent_Template_button_click_13_listener() { return ctx.toggleDateInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Date Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoadersTransactionsComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoadersTransactionsComponent_span_17_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoadersTransactionsComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoadersTransactionsComponent_div_19_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoadersTransactionsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submitted By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Transaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reference No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, LoadersTransactionsComponent_tr_49_Template, 18, 8, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoadersTransactionsComponent_tr_52_Template, 3, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoadersTransactionsComponent_Template_input_ngModelChange_59_listener($event) { return ctx.filterAmount.count = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, LoadersTransactionsComponent_div_60_Template, 3, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function LoadersTransactionsComponent_Template_pagination_controls_pageChange_63_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](50, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](51, 12, ctx.transactionDetails, ctx.searchValue, ctx.filterAmount), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactionDetails.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterAmount.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globalService.isFinancerAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"]], styles: [".loader-transaction-container[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n\n\n@media all and (max-width: 320px) {\n  .loader-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 120px;\n  }\n}\n\n@media all and (max-width: 400px) and (min-width: 321px) {\n  .loader-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 120px;\n  }\n}\n\n@media all and (max-width: 700px) and (min-width: 401px) {\n  .loader-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n\n@media all and (max-width: 768px) and (min-width: 701px) {\n  .loader-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n\n@media all and (max-width: 1024px) and (min-width: 769px) {\n  .loader-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9sb2FkZXJzLXRyYW5zYWN0aW9ucy9sb2FkZXJzLXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBLHNCQUFBOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBSE47QUFDRjs7QUFNQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUpOO0FBQ0Y7O0FBT0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9sb2FkZXJzLXRyYW5zYWN0aW9ucy9sb2FkZXJzLXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItdHJhbnNhY3Rpb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAubG9hZGVyLXRyYW5zYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSBhbmQgKG1pbi13aWR0aDogMzIxcHgpIHtcclxuICAgIC5sb2FkZXItdHJhbnNhY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzAwcHgpIGFuZCAobWluLXdpZHRoOiA0MDFweCkge1xyXG4gICAgLmxvYWRlci10cmFuc2FjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XHJcbiAgICAubG9hZGVyLXRyYW5zYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAubG9hZGVyLXRyYW5zYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadersTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loaders-transactions',
                templateUrl: './loaders-transactions.component.html',
                styleUrls: ['./loaders-transactions.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: src_app_shared_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }, { type: src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, { dataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DataTable']
        }] }); })();


/***/ }),

/***/ "./src/app/reports/my-transactions/my-transactions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reports/my-transactions/my-transactions.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTransactionsComponent", function() { return MyTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/transaction.service */ "./src/app/shared/transaction.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/search-filter.pipe */ "./src/app/shared/pipes/search-filter.pipe.ts");









function MyTransactionsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyTransactionsComponent_div_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.startDate);
} }
function MyTransactionsComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyTransactionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyTransactionsComponent_div_18_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.endDate);
} }
function MyTransactionsComponent_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTransactionsComponent_div_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.filterByDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.startDate == null || ctx_r10.endDate == null);
} }
function MyTransactionsComponent_div_19_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTransactionsComponent_div_19_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.resetTransactionDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyTransactionsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyTransactionsComponent_div_19_button_1_Template, 3, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyTransactionsComponent_div_19_button_2_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showDateInput && !ctx_r3.isFilterSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showDateInput && ctx_r3.isFilterSuccess);
} }
function MyTransactionsComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.submittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.transactionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.referenceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.playerUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r16.submittedDate);
} }
function MyTransactionsComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class MyTransactionsComponent {
    constructor(transactionService, toastr, ngxService) {
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.p = 1;
        this.transactionDetails = [];
        this.errorMessage = '';
        this.showDateInput = false;
        this.isFilterSuccess = false;
        this.filterMetadata = { count: 0 };
    }
    ngOnInit() {
        this.transactionService.getTransactionDetailsByUserId().subscribe({
            next: transactionDetails => this.transactionDetails = transactionDetails,
            error: err => this.errorMessage = err
        });
    }
    toggleDateInput() {
        this.showDateInput = !this.showDateInput;
    }
    filterByDate() {
        if (!this.startDate || !this.endDate) {
            this.toastr.error("Please fill out the dates to be filtered.", "Date Input Error");
        }
        else if (this.startDate > this.endDate) {
            this.toastr.error("End Date can't be greater then Start Date", "Date Input Error");
            this.startDate = null;
            this.endDate = null;
        }
        else {
            this.ngxService.start();
            this.transactionService.getTransactionDetailsByDates(this.startDate, this.endDate).subscribe({
                next: transactionDetails => this.transactionDetails = this.onFilterComplete(transactionDetails),
                error: err => this.errorMessage = err
            });
        }
    }
    onFilterComplete(transactionDetails) {
        this.isFilterSuccess = true;
        this.ngxService.stop();
        return transactionDetails;
    }
    resetTransactionDetails() {
        this.startDate = null;
        this.endDate = null;
        this.isFilterSuccess = false;
        this.transactionService.getTransactionDetailsByUserId().subscribe({
            next: transactionDetails => this.transactionDetails = transactionDetails,
            error: err => this.errorMessage = err
        });
    }
}
MyTransactionsComponent.ɵfac = function MyTransactionsComponent_Factory(t) { return new (t || MyTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"])); };
MyTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyTransactionsComponent, selectors: [["app-my-transactions"]], decls: 55, vars: 16, consts: [[1, "my-transaction-section"], [1, "container-fluid", "margin-top-lg", "padding-left-xlg", "padding-right-xlg", "my-transaction-container"], [1, "card"], [1, "card-body"], [1, "card-title", "text-uppercase", "d-flex", "align-items-center"], ["src", "\\assets\\images\\my-transactions-icon.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", 2, "width", "70px", "height", "70px"], [1, "card-subtitle", "mb-2", "text-muted", "margin-top-md"], [1, "row", "margin-top-md"], [1, "col-lg-9"], [1, "row", "d-flex", "justify-content-start"], [1, "col-lg-2", "margin-top-md"], ["type", "button", 1, "btn", "btn-info", "text-uppercase", "full-width", 3, "click"], [1, "fa", "fa-search"], ["class", "col-lg-3 margin-top-md", 4, "ngIf"], ["class", "margin-top-md divider-padding", 4, "ngIf"], [1, "col-lg-3", "margin-top-md"], [1, "input-group"], ["id", "SearchId", "placeholder", "Search", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "col", "table-responsive"], [1, "table", "table-hover"], [1, "text-uppercase"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "margin-top-sm"], [1, "col", "d-flex", "justify-content-center"], [3, "pageChange"], ["type", "datetime-local", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "margin-top-md", "divider-padding"], ["type", "button", "class", "btn btn-info text-uppercase full-width", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger text-uppercase full-width", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "text-uppercase", "full-width", 3, "disabled", "click"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-danger", "text-uppercase", "full-width", 3, "click"], [1, "fas", "fa-sync-alt"], ["colspan", "7"]], template: function MyTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My Transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All of your transactions can be seen here. Search for reference number, player name, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTransactionsComponent_Template_button_click_13_listener() { return ctx.toggleDateInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Date Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyTransactionsComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyTransactionsComponent_span_17_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyTransactionsComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MyTransactionsComponent_div_19_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyTransactionsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submitted By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Transaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reference No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MyTransactionsComponent_tr_48_Template, 17, 8, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MyTransactionsComponent_tr_51_Template, 3, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pagination-controls", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MyTransactionsComponent_Template_pagination_controls_pageChange_54_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](50, 10, ctx.transactionDetails, ctx.searchValue, ctx.filterMetadata), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactionDetails.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPipe"]], styles: [".my-transaction-container[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n\n\n@media all and (max-width: 320px) {\n  .my-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 120px;\n  }\n}\n\n@media all and (max-width: 400px) and (min-width: 321px) {\n  .my-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 120px;\n  }\n}\n\n@media all and (max-width: 700px) and (min-width: 401px) {\n  .my-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n\n@media all and (max-width: 768px) and (min-width: 701px) {\n  .my-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n\n@media all and (max-width: 1024px) and (min-width: 769px) {\n  .my-transaction-container[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9teS10cmFuc2FjdGlvbnMvbXktdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0Esc0JBQUE7O0FBRUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFITjtBQUNGOztBQU1BO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBSk47QUFDRjs7QUFPQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL215LXRyYW5zYWN0aW9ucy9teS10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktdHJhbnNhY3Rpb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAubXktdHJhbnNhY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIGFuZCAobWluLXdpZHRoOiAzMjFweCkge1xyXG4gICAgLm15LXRyYW5zYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSBhbmQgKG1pbi13aWR0aDogNDAxcHgpIHtcclxuICAgIC5teS10cmFuc2FjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XHJcbiAgICAubXktdHJhbnNhY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIC5teS10cmFuc2FjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-transactions',
                templateUrl: './my-transactions.component.html',
                styleUrls: ['./my-transactions.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 2, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
    constructor() {
        this.firstName = 'firstName';
        this.lastName = 'lastName';
        this.alias = 'alias';
        this.teams = 'teams';
        this.userTypes = 'userTypes';
        this.emailAddress = 'emailAddress';
        this.userName = 'userName';
        this.password = 'password';
        this.confirmPassword = 'confirmPassword';
        this.playerUserName = 'playerUserName';
        this.referenceNo = 'referenceNo';
        this.amount = 'amount';
    }
}


/***/ }),

/***/ "./src/app/shared/definition.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/definition.service.ts ***!
  \**********************************************/
/*! exports provided: DefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionService", function() { return DefinitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/shared/global.service.ts");






class DefinitionService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.getUserTypesUrl = 'api/Definition/GetUserTypes';
        this.getTeamsUrl = 'api/Definition/GetTeams';
        this.getUserTypesUrl = globalService.baseUrl() + this.getUserTypesUrl;
        this.getTeamsUrl = globalService.baseUrl() + this.getTeamsUrl;
    }
    getUserTypes() {
        return this.http.get(this.getUserTypesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTeams() {
        return this.http.get(this.getTeamsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
DefinitionService.ɵfac = function DefinitionService_Factory(t) { return new (t || DefinitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
DefinitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefinitionService, factory: DefinitionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefinitionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/excel.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/excel.service.ts ***!
  \*****************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const myworksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        const myworkbook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](myworkbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_exported' + EXCEL_EXTENSION);
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/global.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/global.service.ts ***!
  \******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GlobalService {
    constructor() {
        this.userFullName = "";
        this.currentPage = "";
    }
    //Authentication Checker
    isAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null) {
            result = true;
        }
        return result;
    }
    isFinancerAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null && localStorage.getItem("UserType") == "Financer") {
            result = true;
        }
        return result;
    }
    isLoaderAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null && localStorage.getItem("UserType") == "Loader") {
            result = true;
        }
        return result;
    }
    setCurrentPage(page) {
        this.currentPage = page;
    }
    GetUserFullName() {
        return localStorage.getItem("fullName");
    }
    baseUrl() {
        return '';
        // return 'https://localhost:44393/'
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/shared/global.service.ts");







class LoginService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.loginUrl = 'api/Login';
        this.loginUrl = globalService.baseUrl() + this.loginUrl;
    }
    loginUser(login) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" });
        return this.http.post(this.loginUrl, login, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/search-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/search-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchFilterPipe {
    transform(transactionDetails, searchValue, filterMetadata) {
        if (!transactionDetails || !searchValue) {
            return transactionDetails;
        }
        this.filteredTransactionDetails = transactionDetails.filter(transactionDetails => {
            var _a, _b, _c, _d, _e;
            return ((_a = transactionDetails.submittedBy) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_b = transactionDetails.playerUserName) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_c = transactionDetails.transactionType) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_d = transactionDetails.referenceNo) === null || _d === void 0 ? void 0 : _d.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_e = transactionDetails.amount) === null || _e === void 0 ? void 0 : _e.toString().includes(searchValue));
        });
        this.cashIn = this.filteredTransactionDetails.filter(x => x.transactionType == "Cash-In").reduce((sum, current) => sum + current.amount, 0);
        this.cashOut = this.filteredTransactionDetails.filter(x => x.transactionType == "Cash-Out").reduce((sum, current) => sum + current.amount, 0);
        filterMetadata.count = this.cashIn - this.cashOut;
        return this.filteredTransactionDetails;
    }
}
SearchFilterPipe.ɵfac = function SearchFilterPipe_Factory(t) { return new (t || SearchFilterPipe)(); };
SearchFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchFilter", type: SearchFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/transaction.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/transaction.service.ts ***!
  \***********************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/shared/global.service.ts");







class TransactionService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.transactionDetailsUrl = 'api/TransactionDetails';
        this.getTransactionDetailsUrl = 'api/TransactionDetails';
        this.getTransactionDetailsByUserIdUrl = 'api/TransactionDetails/GetTransactionDetailsByUserId';
        this.getTransactionDetailsByDatesUrl = 'api/TransactionDetails/GetTransactionDetailsByDates/';
        this.getTransactionDetailsByReferenceNoUrl = 'api/TransactionDetails/GetTransactionDetailsByReferenceNo/';
        this.transactionDetailsUrl = globalService.baseUrl() + this.transactionDetailsUrl;
        this.getTransactionDetailsUrl = globalService.baseUrl() + this.getTransactionDetailsUrl;
        this.getTransactionDetailsByUserIdUrl = globalService.baseUrl() + this.getTransactionDetailsByUserIdUrl;
        this.getTransactionDetailsByDatesUrl = globalService.baseUrl() + this.getTransactionDetailsByDatesUrl;
        this.getTransactionDetailsByReferenceNoUrl = globalService.baseUrl() + this.getTransactionDetailsByReferenceNoUrl;
    }
    submitTransactionDetails(transactionDetails) {
        const tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.post(this.transactionDetailsUrl, transactionDetails, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTransactionDetails() {
        const tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsUrl, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTransactionDetailsByUserId() {
        const tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByUserIdUrl, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTransactionDetailsByDates(startDate, endDate) {
        const tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByDatesUrl + startDate + "/" + endDate, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTransactionDetailsByReferenceNo(referenceNo) {
        const tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByReferenceNoUrl + referenceNo, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/shared/global.service.ts");







class UserService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.usersUrl = 'api/User';
        this.userByUserNameUrl = 'api/User/GetUserByUserName/';
        this.loaderUsersByTeamUrl = 'api/User/GetAllLoaderUsersByTeam';
        this.userProfileUrl = 'api/UserProfile';
        this.usersUrl = globalService.baseUrl() + this.usersUrl;
        this.userByUserNameUrl = globalService.baseUrl() + this.userByUserNameUrl;
        this.loaderUsersByTeamUrl = globalService.baseUrl() + this.loaderUsersByTeamUrl;
        this.userProfileUrl = globalService.baseUrl() + this.userProfileUrl;
    }
    createUser(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" });
        return this.http.post(this.usersUrl, user, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUserProfile() {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.userProfileUrl, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUserByUserName(userName) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" });
        return this.http.get(this.userByUserNameUrl + userName, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getAllLoaderUsersByTeam() {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.loaderUsersByTeamUrl, { headers: tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global.service */ "./src/app/shared/global.service.ts");
/* harmony import */ var src_app_shared_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/login.service */ "./src/app/shared/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = function (a0, a1, a2) { return { "is-invalid": a0, "is-valid": a1, "": a2 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(fb, globalService, loginService, router, toastr, userService, ngxService) {
        this.fb = fb;
        this.globalService = globalService;
        this.loginService = loginService;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.ngxService = ngxService;
        this.headerText = 'Find new local restaurants and independent home cooks';
        this.subHeaderText = 'Tired of the common restaurants you see? Try new local foods, homemade foods and more';
        this.userNameValMessages = {
            required: "Please enter your username.",
        };
        this.passwordValMessages = {
            required: "Please enter your password.",
        };
        this.constants = new src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]();
        this.globalService.setCurrentPage("login");
    }
    ngOnInit() {
        if (this.globalService.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        const userNameControl = this.loginForm.get(this.constants.userName);
        userNameControl.valueChanges.subscribe(value => this.setMessage(userNameControl, this.constants.userName));
        const passwordControl = this.loginForm.get(this.constants.password);
        passwordControl.valueChanges.subscribe(value => this.setMessage(passwordControl, this.constants.password));
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.emailAddress) {
            this.userNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userNameMessage = Object.keys(c.errors).map(key => this.userNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.password) {
            this.passwordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.passwordMessage = Object.keys(c.errors).map(key => this.passwordValMessages[key]).join(' ');
            }
        }
    }
    setLoginValue(loginCustomerForm) {
        return {
            userName: loginCustomerForm.get("userName").value,
            password: loginCustomerForm.get("password").value,
        };
    }
    loginUser() {
        this.ngxService.start();
        if (this.loginForm.valid) {
            if (this.loginForm.dirty) {
                this.loginService.loginUser(this.setLoginValue(this.loginForm)).subscribe({
                    next: (res) => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('isAuthenticated', "true");
                        this.userService.getUserProfile().subscribe({
                            next: user => this.setUserDetails(user),
                            error: err => console.log(err)
                        });
                        this.router.navigate(['/home']);
                        this.toastr.success("Welcome to Casino MS", "Login Successfully");
                    },
                    error: err => this.errorHandler(err)
                });
            }
        }
    }
    setUserDetails(user) {
        localStorage.setItem('fullName', user.firstName + ' ' + user.lastName);
        localStorage.setItem('UserType', user.userType);
        this.ngxService.stop();
    }
    errorHandler(message) {
        if (message.includes("400")) {
            this.toastr.error("Incorrect Username or Password", "Authentication Failed");
        }
        else {
            console.log(message);
        }
        this.ngxService.stop();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 12, consts: [[1, "login-section"], [1, "row"], [1, "col", "margin-top-sm"], [3, "formGroup", "ngSubmit"], [1, "row", "margin-top-sm", "d-flex", "justify-content-center"], [1, "col-lg-8"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-pencil"], ["id", "UserNameId", "placeholder", "Username *", "formControlName", "userName", "type", "text", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-unlock-alt", "margin-right-xsm"], ["id", "PasswordId", "placeholder", "Password *", "formControlName", "password", "type", "password", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-center", "margin-top-sm"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.userNameMessage, !ctx.userNameMessage && ctx.loginForm.get("userName").touched && ctx.loginForm.get("userName").valid, ctx.loginForm.get("userName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userNameMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.passwordMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passwordMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: src_app_shared_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var src_app_shared_definition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/definition.service */ "./src/app/shared/definition.service.ts");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/global.service */ "./src/app/shared/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function RegistrationComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", team_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r4, " ");
} }
function RegistrationComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", userType_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userType_r6, " ");
} }
function RegistrationComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmation does not match the password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "is-invalid": a0, "is-valid": a1, "": a2 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class RegistrationComponent {
    constructor(fb, userService, definitionService, globalService, router, ngxService) {
        this.fb = fb;
        this.userService = userService;
        this.definitionService = definitionService;
        this.globalService = globalService;
        this.router = router;
        this.ngxService = ngxService;
        this.teamList = [];
        this.userTypeList = [];
        //#endregion
        this.isFormDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstNameValMessages = {
            required: "Please enter your first name.",
            maxlength: "First name can't exceed 20 characters."
        };
        this.lastNameValMessages = {
            required: "Please enter your last name.",
            maxlength: "Last name can't exceed 20 characters."
        };
        this.aliasValMessages = {
            required: "Please enter your Alias.",
            maxlength: "Alias can't exceed 20 characters."
        };
        this.teamsValMessages = {
            required: "Please choose your team.",
        };
        this.userTypesValMessages = {
            required: "Please choose your user type.",
        };
        this.emailAddressValMessages = {
            required: "Please enter your e-mail address.",
            email: "Please enter a valid e-mail address.",
            maxlength: "E-mail address can't exceed 30 characters."
        };
        this.userNameValMessages = {
            required: "Please enter your username.",
            maxlength: "Username can't exceed 20 characters."
        };
        this.passwordValMessages = {
            required: "Please enter your password.",
            maxlength: "Password can't exceed 20 characters.",
            minlength: "Password should have a minimum of 5 characters."
        };
        this.confirmPasswordValMessages = {
            required: "Please confirm your password."
        };
        this.constants = new src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"]();
    }
    ngOnInit() {
        if (this.globalService.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.registrationForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            alias: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            teams: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userTypes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwordGroup: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }, { validator: this.passwordMatcher })
        });
        const firstNameControl = this.registrationForm.get(this.constants.firstName);
        firstNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(firstNameControl, this.constants.firstName));
        const lastNameControl = this.registrationForm.get(this.constants.lastName);
        lastNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(lastNameControl, this.constants.lastName));
        const aliasControl = this.registrationForm.get(this.constants.alias);
        aliasControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(aliasControl, this.constants.alias));
        const teamsControl = this.registrationForm.get(this.constants.teams);
        teamsControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(teamsControl, this.constants.teams));
        const userTypesControl = this.registrationForm.get(this.constants.userTypes);
        userTypesControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(userTypesControl, this.constants.userTypes));
        const emailAddressControl = this.registrationForm.get(this.constants.emailAddress);
        emailAddressControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(emailAddressControl, this.constants.emailAddress));
        const userNameControl = this.registrationForm.get(this.constants.userName);
        userNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => {
            this.setMessage(userNameControl, this.constants.userName);
            this.verifyUserName(value);
        });
        const passwordControl = this.registrationForm.get("passwordGroup.password");
        passwordControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(passwordControl, this.constants.password));
        const confirmPasswordControl = this.registrationForm.get("passwordGroup.confirmPassword");
        confirmPasswordControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(confirmPasswordControl, this.constants.confirmPassword));
        this.registrationForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.definitionService.getTeams().subscribe((data) => {
            data.forEach(types => {
                this.teamList.push(types.description);
            });
        });
        this.definitionService.getUserTypes().subscribe((data) => {
            data.forEach(types => {
                this.userTypeList.push(types.description);
            });
        });
    }
    verifyUserName(value) {
        this.userService.getUserByUserName(value).subscribe({
            next: userDetail => this.userNameChecker(userDetail),
            error: err => this.errorMessage = err
        });
    }
    userNameChecker(userNameDetail) {
        this.userNameVerificationMessage = null;
        if (userNameDetail != null && userNameDetail.userId != null) {
            this.userNameVerificationMessage = "This username is already taken. Please choose another username.";
        }
    }
    passwordMatcher(c) {
        const passwordControl = c.get("password");
        const confirmPasswordControl = c.get("confirmPassword");
        if (passwordControl.pristine || confirmPasswordControl.pristine) {
            return null;
        }
        if (passwordControl.value == confirmPasswordControl.value) {
            return null;
        }
        return { 'match': true };
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.firstName) {
            this.firstNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.firstNameMessage = Object.keys(c.errors).map(key => this.firstNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.lastName) {
            this.lastNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.lastNameMessage = Object.keys(c.errors).map(key => this.lastNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.alias) {
            this.aliasMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.aliasMessage = Object.keys(c.errors).map(key => this.aliasValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.teams) {
            this.teamsMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.teamsMessage = Object.keys(c.errors).map(key => this.teamsValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.userTypes) {
            this.userTypesMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userTypesMessage = Object.keys(c.errors).map(key => this.userTypesValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.emailAddress) {
            this.emailAddressMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.emailAddressMessage = Object.keys(c.errors).map(key => this.emailAddressValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.userName) {
            this.userNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userNameMessage = Object.keys(c.errors).map(key => this.userNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.password) {
            this.passwordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.passwordMessage = Object.keys(c.errors).map(key => this.passwordValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.confirmPassword) {
            this.confirmPasswordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.confirmPasswordMessage = Object.keys(c.errors).map(key => this.confirmPasswordValMessages[key]).join(' ');
            }
        }
    }
    setUserValue(userForm) {
        return {
            firstName: userForm.get("firstName").value,
            lastName: userForm.get("lastName").value,
            alias: userForm.get("alias").value,
            teamName: userForm.get("teams").value,
            emailAddress: userForm.get("emailAddress").value,
            userName: userForm.get("userName").value,
            password: userForm.get("passwordGroup.confirmPassword").value,
            userType: userForm.get("userTypes").value,
            userId: ""
        };
    }
    registerForm() {
        if (this.registrationForm.valid) {
            if (this.registrationForm.dirty) {
                this.ngxService.start();
                this.userService.createUser(this.setUserValue(this.registrationForm)).subscribe({
                    next: () => this.onSaveComplete(),
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.registrationForm.reset();
        this.isFormDirty.emit(false);
        alert("Thank you for your registration at Casino MS! We have sent a confirmation on your e-mail.");
        this.ngxService.stop();
        this.router.navigate(['/user/login']);
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_definition_service__WEBPACK_IMPORTED_MODULE_5__["DefinitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], outputs: { isFormDirty: "isFormDirty" }, decls: 102, vars: 46, consts: [[1, "registration-section"], [1, "row"], [1, "col", "margin-top-sm"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-group", "form"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user", "margin-right-xsm"], ["id", "FirstNameId", "placeholder", "First Name *", "formControlName", "firstName", "type", "text", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "form-group"], ["id", "LastNameId", "placeholder", "Last Name *", "formControlName", "lastName", "type", "text", 1, "form-control", 3, "ngClass"], [1, "row", "margin-top-sm"], [1, "col"], [1, "fa", "fa-envelope"], ["id", "EmailAddressId", "placeholder", "E-mail Address *", "formControlName", "emailAddress", "type", "email", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-id-card"], ["id", "AliasId", "placeholder", "Alias (Ie. Loader/Financer Name) *", "formControlName", "alias", "type", "text", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-users"], ["formControlName", "teams", "id", "teams", 1, "custom-select"], ["value", "", "defaultValue", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "fa", "fa-id-badge", "margin-right-xsm"], ["formControlName", "userTypes", "id", "userTypes", 1, "custom-select"], [1, "fa", "fa-pencil"], ["id", "UserNameId", "placeholder", "Username *", "formControlName", "userName", "type", "text", 1, "form-control", 3, "ngClass"], ["formGroupName", "passwordGroup"], [1, "fa", "fa-unlock-alt", "margin-right-xsm"], ["id", "PasswordId", "placeholder", "Password *", "formControlName", "password", "type", "password", 1, "form-control", 3, "ngClass"], ["id", "ConfirmPasswordId", "placeholder", "Confirm Password *", "formControlName", "confirmPassword", "type", "password", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "row", "justify-content-center", "margin-top-sm"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "value"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_3_listener() { return ctx.registerForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Please choose your team *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RegistrationComponent_option_52_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Please choose your user type *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RegistrationComponent_option_65_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, RegistrationComponent_span_97_Template, 2, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, RegistrationComponent_span_98_Template, 2, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c0, ctx.firstNameMessage, !ctx.firstNameMessage && ctx.registrationForm.get("firstName").touched && ctx.registrationForm.get("firstName").valid, ctx.registrationForm.get("firstName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.firstNameMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](26, _c0, ctx.lastNameMessage, !ctx.lastNameMessage && ctx.registrationForm.get("lastName").touched && ctx.registrationForm.get("lastName").valid, ctx.registrationForm.get("lastName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lastNameMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](30, _c0, ctx.emailAddressMessage, !ctx.emailAddressMessage && ctx.registrationForm.get("emailAddress").touched && ctx.registrationForm.get("emailAddress").valid, ctx.registrationForm.get("emailAddress").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.emailAddressMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](34, _c0, ctx.aliasMessage, !ctx.aliasMessage && ctx.registrationForm.get("alias").touched && ctx.registrationForm.get("alias").valid, ctx.registrationForm.get("alias").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aliasMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.teamsMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userTypesMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](38, _c0, ctx.userNameMessage || ctx.userNameVerificationMessage, (!ctx.userNameMessage || !ctx.userNameVerificationMessage) && ctx.registrationForm.get("userName").touched && ctx.registrationForm.get("userName").valid, ctx.registrationForm.get("userName").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.userNameMessage, " ", ctx.userNameVerificationMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c1, ctx.passwordMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passwordMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c1, ctx.confirmPasswordMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("passwordGroup.confirmPassword").errors == null ? null : ctx.registrationForm.get("passwordGroup.confirmPassword").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("passwordGroup").errors == null ? null : ctx.registrationForm.get("passwordGroup").errors.match);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registrationForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_shared_definition_service__WEBPACK_IMPORTED_MODULE_5__["DefinitionService"] }, { type: src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"] }]; }, { isFormDirty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/user/login"]; };
const _c1 = function () { return ["/user/registration"]; };
class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 18, vars: 4, consts: [[1, "container", "margin-top-lg", "user-container"], [1, "card"], [1, "card-header", "d-flex", "justify-content-center"], [1, "media", "d-flex", "align-items-center"], ["src", "\\assets\\images\\iconfinder_Gambler_3525383.png", "alt", "Generic placeholder image", 1, "align-self-center", "mr-3", 2, "width", "45px", "height", "45px"], [1, "media-body"], [1, "mt-0", "text-uppercase", "font-weight-light"], [1, "card-body"], [1, "nav", "nav-tabs", "d-flex", "justify-content-center"], [1, "nav-item"], ["data-toggle", "tab ", 1, "nav-link", 3, "routerLink"], [1, "margin-top-md"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Casino Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".user-container[_ngcontent-%COMP%] {\n  width: 50%;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  margin-bottom: 60px;\n}\n\n\n\n@media all and (max-width: 320px) {\n  .user-container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-bottom: 120px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 13.5px;\n  }\n}\n\n@media all and (max-width: 400px) and (min-width: 321px) {\n  .user-container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-bottom: 120px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n@media all and (max-width: 700px) and (min-width: 401px) {\n  .user-container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: auto;\n    top: auto;\n    left: auto;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media all and (max-width: 768px) and (min-width: 701px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media all and (max-width: 1024px) and (min-width: 769px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBLHNCQUFBOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0VBRE47O0VBR0U7SUFDSSxpQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0Esb0JBQUE7RUFETjs7RUFHRTtJQUNJLGVBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBRE47O0VBR0U7SUFDSSxlQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJO0lBQ0ksZUFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGVBQUE7RUFGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAudXNlci1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIGFuZCAobWluLXdpZHRoOiAzMjFweCkge1xyXG4gICAgLnVzZXItY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgYW5kIChtaW4td2lkdGg6IDQwMXB4KSB7XHJcbiAgICAudXNlci1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhdXRvO1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JERMY469\source\repos\CasinoMS\CasinoMS.Angular\CasinoMS-App\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map