webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n\n  <!-- 1 -->\n  <div class=\"top-container\">\n    <h1>About Us</h1>\n\n    <div id=\"group-photo\"></div>\n\n  </div>\n\n  <!-- 2 -->\n  <div class=\"mission-container\">\n    <h1>Our Mission</h1>\n\n    <div class=\"mission-statment\">\n\n      <p>\"Helping others to achieve their <br> healthy lifestyle because health is <br>not simply the absence of <br>sickness.\"</p>\n\n    </div>\n  </div>\n\n  <!-- 3 -->\n  <div class=\"team-container\">\n\n\n    <div class=\"single-member one\">\n      <div id=\"jin\"></div>\n      <div class=\"member-info\">\n        <ul>\n          <li class=\"names\">Jin Tak</li>\n          <li>Lead Front-End Developer</li>\n          <li><a href=\"https://github.com/JinTak\">Github</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"single-member two\">\n      <div id=\"milad\"></div>\n      <div class=\"member-info\">\n        <ul>\n          <li class=\"names\">Milad Abujarada</li>\n          <li>Lead Back-End Developer</li>\n          <li>Scrum Master</li>\n          <li><a href=\"https://github.com/milad-abujarada\">Github</a></li>\n        </ul>\n      </div>\n    </div>\n  \n\n    <div class=\"single-member three\">\n      <div id=\"remy\"></div>\n      <div class=\"member-info\">\n        <ul>\n          <li class=\"names\">Remy Pearlstone</li>\n          <li>Release Engineer</li>\n          <li>Front-End Developer</li>\n          <li><a href=\"https://github.com/rover33/\">Github</a></li>\n        </ul>\n      </div>\n    </div>\n\n\n    <div class=\"single-member four\">\n      <div id=\"stevano\"></div>\n      <div class=\"member-info\">\n        <ul>\n          <li class=\"names\">Stevano Lie</li>\n          <li>Lead User-Experience Developer</li>\n          <li>Project Manager</li>\n          <li><a href=\"https://github.com/slie07\">Github</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"single-member five\">\n      <div id=\"zeb\"></div>\n      <div class=\"member-info\">\n        <ul>\n          <li class=\"names\">Zeb Girourard</li>\n          <li>Javascript Guru/Yoda/Ninja/Cowboy</li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-container {\n  height: 2000px;\n  width: 100%; }\n  .about-container .top-container {\n    height: 27%;\n    width: 100vw;\n    position: relative; }\n  .about-container .top-container h1 {\n      width: 25%;\n      margin: 2rem auto;\n      text-align: center;\n      font-family: 'Dancing Script', sans-serif;\n      font-size: 3rem;\n      color: #417505; }\n  .about-container .top-container #group-photo {\n      height: 70%;\n      width: 100%;\n      background: url(\"/assets/images/group-photo.jpg\");\n      background-size: cover;\n      background-position-y: 25%;\n      background-repeat: no-repeat;\n      position: absolute;\n      bottom: 0; }\n  .about-container .mission-container {\n    height: 20%;\n    width: 100vw; }\n  .about-container .mission-container h1 {\n      width: 25%;\n      margin: 2rem auto;\n      text-align: center;\n      font-family: 'Dancing Script', sans-serif;\n      font-size: 3rem;\n      color: #417505; }\n  .about-container .mission-container .mission-statment {\n      height: 55%;\n      width: 60%;\n      border: 5px solid black;\n      border-radius: 5px;\n      font-size: 1.5rem;\n      line-height: 2.5rem;\n      padding: 1.5rem;\n      margin: 0 auto;\n      font-family: 'Roboto', sans-serif;\n      text-align: center; }\n  .about-container .team-container {\n    height: 50%;\n    width: 100vw;\n    position: relative; }\n  .about-container .team-container .single-member {\n      height: 250px;\n      width: 250px;\n      position: absolute; }\n  .about-container .team-container .single-member ul {\n        list-style: none;\n        font-family: 'Roboto', sans-serif;\n        font-size: 1rem;\n        display: block;\n        height: 7.5rem;\n        margin-top: 1rem;\n        color: #474747;\n        line-height: 1.8rem; }\n  .about-container .team-container .single-member ul .names {\n          font-size: 1.3rem; }\n  .about-container .team-container .single-member ul li {\n          text-align: center; }\n  .about-container .team-container .single-member ul li a {\n            text-decoration: none; }\n  .about-container .team-container .single-member ul li a:visited {\n              color: #474747; }\n  .about-container .team-container .single-member #jin {\n        height: 40%;\n        width: 40%;\n        border-radius: 50%;\n        background: url(\"/assets/images/jin.jpeg\");\n        background-size: cover;\n        margin: 0 auto; }\n  .about-container .team-container .single-member #milad {\n        height: 40%;\n        width: 40%;\n        border-radius: 50%;\n        background: url(\"/assets/images/milad.jpeg\");\n        background-size: cover;\n        margin: 0 auto; }\n  .about-container .team-container .single-member #remy {\n        height: 40%;\n        width: 40%;\n        border-radius: 50%;\n        background: url(\"/assets/images/remy.jpeg\");\n        background-size: cover;\n        margin: 0 auto; }\n  .about-container .team-container .single-member #stevano {\n        height: 40%;\n        width: 40%;\n        border-radius: 50%;\n        background: url(\"/assets/images/stevano.jpeg\");\n        background-size: cover;\n        margin: 0 auto; }\n  .about-container .team-container .single-member #zeb {\n        height: 40%;\n        width: 40%;\n        border-radius: 50%;\n        background: url(\"/assets/images/zeb.jpg\");\n        background-size: cover;\n        margin: 0 auto; }\n  .about-container .team-container .one {\n      top: 8%;\n      left: 20%; }\n  .about-container .team-container .two {\n      top: 8%;\n      right: 20%; }\n  .about-container .team-container .three {\n      top: 38%;\n      left: 20%; }\n  .about-container .team-container .four {\n      top: 38%;\n      right: 20%; }\n  .about-container .team-container .five {\n      top: 68%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentications_login_login_component__ = __webpack_require__("../../../../../src/app/authentications/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentications_register_register_component__ = __webpack_require__("../../../../../src/app/authentications/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_guard_service__ = __webpack_require__("../../../../../src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__authentications_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__authentications_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
    },
    {
        path: 'product/edit',
        component: __WEBPACK_IMPORTED_MODULE_8__products_product_edit_product_edit_component__["a" /* ProductEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_guard_service__["a" /* GuardService */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_guard_service__["a" /* GuardService */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"main-content-container fadeIn\">\r\n   \r\n    <!-- 1   -->\r\n    <h1 routerLink=\"/\">Holistic</h1>\r\n    \r\n    <!-- 2 -->\r\n    <div class=\"login-cart-container\">\r\n        <button mat-button *ngIf=\"!isLoggedIn\" routerLink=\"/register\">Register</button>\r\n                                        \r\n        <button mat-button *ngIf=\"!isLoggedIn\" routerLink=\"/login\">Login</button> \r\n\r\n        <button mat-button *ngIf=\"isLoggedIn\" routerLink=\"#\" >{{loggedInUser}}</button>\r\n\r\n        <button mat-button *ngIf=\"isLoggedIn\" (click)=\"onLogoutClick()\">Logout</button>\r\n\r\n        <a routerLink=\"/checkout\"><img src=\"assets/images/cart.svg\" alt=\"cart\"></a>\r\n    </div>\r\n    \r\n\r\n   \r\n    <flash-messages></flash-messages>\r\n    \r\n    \r\n    \r\n    <!-- 3 -->\r\n    <div *ngIf=\"showBanner()\" class=\"main-links-container\">\r\n        <button mat-button routerLink=\"/blogs\">Blog</button>\r\n        <button mat-button routerLink=\"/products\">Shop</button>\r\n        <button mat-button routerLink=\"/about\">About Us</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"showBanner()\" class=\"jumbotron fadeIn\">\r\n    <div class=\"jumbo-image\"></div>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n<div class=\"footer\">\r\n\r\n    <p>&copy; 2018 Holistic</p>\r\n     \r\n     <div class=\"admin-container\">\r\n        <button mat-button *ngIf=\"admin\" routerLink=\"/product/edit\">Admin Functions</button>\r\n    </div>\r\n        \r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content-container {\n  width: 100%;\n  height: 250px;\n  padding: 15px;\n  position: relative;\n  padding-bottom: 20px; }\n  .main-content-container h1 {\n    font-size: 60px;\n    font-family: 'Dancing Script';\n    width: 350px;\n    height: 100px;\n    color: #417505;\n    line-height: 100px;\n    margin: 0 auto;\n    text-align: center;\n    cursor: pointer;\n    -webkit-transition: .4s ease-in;\n    transition: .4s ease-in; }\n  .main-content-container h1:hover {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n  .main-content-container h1:focus {\n      outline: 0; }\n  .main-content-container .login-cart-container {\n    width: 30%;\n    font-size: 20px;\n    text-align: center;\n    position: absolute;\n    right: 0;\n    top: 25%; }\n  .main-content-container .login-cart-container button {\n      display: inline-block;\n      margin-right: 15px; }\n  .main-content-container .login-cart-container a {\n      font-family: 'Roboto';\n      text-decoration: none;\n      padding: 5px; }\n  .main-content-container .login-cart-container a:hover {\n        color: black; }\n  .main-content-container .login-cart-container a:visited {\n        color: black; }\n  .main-content-container .main-links-container {\n    width: 60%;\n    text-align: center;\n    position: absolute;\n    bottom: 10%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .main-content-container .main-links-container button {\n      text-decoration: none;\n      font-size: 30px;\n      color: #417505;\n      width: 150px;\n      padding: 10px;\n      font-family: 'Dancing Script'; }\n  .jumbotron {\n  height: 24em;\n  width: 100vw;\n  background: url(\"/assets/images/home-banner.png\");\n  background-size: cover;\n  background-position-y: 45%;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); }\n  .footer {\n  width: 100%;\n  height: 13%;\n  position: absolute;\n  background: lightgrey; }\n  .footer p {\n    width: 15%;\n    margin: 0 auto;\n    padding-top: 1rem;\n    font-family: 'Roboto';\n    font-size: 1.2rem;\n    text-align: center; }\n  .footer .admin-container {\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\n    margin: 0 auto; }\n  .fadeIn {\n  -webkit-animation: fadeIn 2.5s;\n          animation: fadeIn 2.5s; }\n  @-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  flash-messages {\n  font-size: 1.3rem;\n  color: green;\n  font-family: 'Roboto'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, userService, router, flashMessage) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'app';
        this.admin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
                /////////////////////////////////////////
                // CHECKING IF USER IS ADMIN 
                /////////////////////////////////////////
                var uid = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAAaja_uGzzXyrPGku3VBTLVGnNWbxlqbY:[DEFAULT]'));
                console.log(uid.uid);
                _this.userService.checkAdmin(uid.uid)
                    .subscribe(function (response) {
                    if (response.json().admin == true) {
                        _this.admin = true;
                    }
                });
                /////////////////////////////////////////
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are now logged out", {
            timeout: 4000
        });
        this.admin = false;
        this.router.navigate(['/']);
    };
    AppComponent.prototype.showBanner = function () {
        var showBanner = true;
        if (this.router.url == '/login') {
            showBanner = false;
        }
        if (this.router.url == '/register') {
            showBanner = false;
        }
        if (this.router.url == '/product/new') {
            showBanner = false;
        }
        if (this.router.url == '/product/delete') {
            showBanner = false;
        }
        if (this.router.url == '/product/edit') {
            showBanner = false;
        }
        return showBanner;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blogs_blogs_module__ = __webpack_require__("../../../../../src/app/blogs/blogs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_products_module__ = __webpack_require__("../../../../../src/app/products/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__authentications_login_login_component__ = __webpack_require__("../../../../../src/app/authentications/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__authentications_register_register_component__ = __webpack_require__("../../../../../src/app/authentications/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
// import { ProductAllComponent } from './products/product-all/product-all.component';
// import { ProductIndexComponent } from './products/product-index/product-index.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_22__authentications_login_login_component__["a" /* LoginComponent */],
                // ProductPreviewComponent,
                // ProductAllComponent,
                // ProductIndexComponent,
                __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__authentications_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_27__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_20__blogs_blogs_module__["a" /* BlogsModule */],
                __WEBPACK_IMPORTED_MODULE_21__products_products_module__["a" /* ProductsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular_async_local_storage__["a" /* AsyncLocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].production })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_16__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_18__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentications/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-container\">\n\n    <h1>Login</h1>\n    <form (submit)=\"onSubmit()\">\n        <div id=\"email\">\n            <label for =\"email\">Email</label>\n            <input  type=\"email\" name=\"email\" [(ngModel)]=\"email\" required>\n        </div>\n        <div id=\"password\">\n            <label for =\"password\">Password</label>\n            <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required>\n        </div>\n        <input type=\"submit\" value=\"Login\" id=\"submit-button\">\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentications/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  height: 60vh;\n  width: 30vw;\n  margin: 0 auto;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%);\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  padding: 2rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-family: 'Roboto'; }\n  .login-container h1 {\n    width: 40%;\n    margin: 0 auto;\n    font-size: 2.3rem;\n    font-family: 'Dancing Script';\n    color: #417505;\n    text-align: center; }\n  .login-container form {\n    height: 75%;\n    margin-top: 1rem;\n    position: relative; }\n  .login-container form label {\n      display: inline-block;\n      font-size: 1.2rem;\n      margin-right: 1rem;\n      margin-bottom: 1rem; }\n  .login-container form input {\n      display: block;\n      width: 100%;\n      height: 2rem;\n      border: 5px;\n      font-size: 1.2rem;\n      border-radius: 5px; }\n  .login-container form input::-webkit-input-placeholder {\n        padding-left: 1rem; }\n  .login-container form input:focus {\n        outline: 0; }\n  .login-container form #email {\n      margin-bottom: 2.2rem; }\n  .login-container form #submit-button {\n      width: 7rem;\n      height: 3rem;\n      padding: 10px;\n      font-family: 'Roboto';\n      font-size: 1.2rem;\n      border-radius: 3px;\n      border: 3px solid black;\n      cursor: pointer;\n      margin: 0 auto;\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  .login-container form #submit-button:hover {\n        border: 3px solid #417505; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentications/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, userService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                // console.log('auth')
                // console.log(auth)
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show('You are now logged in', {
                timeout: 4000
            });
            // /////////////////////////////////////////
            // // CHECKING IF USER IS ADMIN UPON LOGIN
            // /////////////////////////////////////////
            // let uid = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAAaja_uGzzXyrPGku3VBTLVGnNWbxlqbY:[DEFAULT]')) 
            // console.log(uid.uid)
            // this.userService.checkAdmin(uid.uid);
            // //    .subscribe(response => {
            // //   if (response.json().admin == true) {
            // //     this.admin = true
            // //   }
            // //   })
            // /////////////////////////////////////////
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                timeout: 4000
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/authentications/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentications/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentications/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n\n    <h1>Register</h1>\n    <form (submit)=\"onSubmit()\">\n        <div id=\"email\">\n            <label for =\"email\">Email</label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required>\n        </div>\n        <div id=\"password\">\n            <label for =\"password\">Password</label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required>\n        </div>\n        <input type=\"submit\" value=\"Register\" id=\"submit-button\">\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentications/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-container {\n  height: 60vh;\n  width: 30vw;\n  margin: 0 auto;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%);\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  padding: 2rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-family: 'Roboto'; }\n  .register-container h1 {\n    width: 40%;\n    margin: 0 auto;\n    font-size: 2.3rem;\n    font-family: 'Dancing Script';\n    color: #417505;\n    text-align: center; }\n  .register-container form {\n    height: 75%;\n    margin-top: 1rem;\n    position: relative; }\n  .register-container form label {\n      display: inline-block;\n      font-size: 1.2rem;\n      margin-right: 1rem;\n      margin-bottom: 1rem; }\n  .register-container form input {\n      display: block;\n      width: 100%;\n      height: 2rem;\n      border: 5px;\n      font-size: 1.2rem;\n      border-radius: 5px; }\n  .register-container form input::-webkit-input-placeholder {\n        padding-left: 1rem; }\n  .register-container form input:focus {\n        outline: 0; }\n  .register-container form #email {\n      margin-bottom: 2.2rem; }\n  .register-container form #submit-button {\n      width: 7rem;\n      height: 3rem;\n      padding: 10px;\n      font-family: 'Roboto';\n      font-size: 1.2rem;\n      border-radius: 3px;\n      border: 3px solid black;\n      cursor: pointer;\n      margin: 0 auto;\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  .register-container form #submit-button:hover {\n        border: 3px solid #417505; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentications/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            console.log(_this.flashMessage.show);
            _this.flashMessage.show("Hello, " + _this.email + ". You are now registered and logged in.", {
                timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            console.log(_this.flashMessage.show);
            _this.flashMessage.show(err.message, {
                timeout: 4000
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/authentications/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentications/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blogs/blog-all/blog-all.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-container\">\n  <hr>\n  <h1>Blogs</h1>\n  <hr>\n  <br>\n\n  \n    <div class=\"blog-card-container\">\n\n        <div class= \"blog-parent-container\">\n  \n            <mat-card id=\"custom-shadow\" class=\"blog-card\"  *ngFor=\"let blog of allBlogs\">\n              \n                <mat-card-title>{{blog.blogTitle}}</mat-card-title>\n                <!-- <img mat-card-lg-image src=\"{{blog.image}}\"> -->\n                <hr>\n                <mat-card-content>\n                    <p>\n                        {{blog.blogBody}}\n                    </p>\n                </mat-card-content>\n                <!-- <mat-card-content class=\"blog-author\">{{blog.author}}</mat-card-content> -->\n                <mat-card-content class=\"blog-author\">{{blog.date}}</mat-card-content>\n                <mat-card-actions>\n                    <button mat-button>LIKE <img src=\"../assets/images/heart-icon.png\" alt=\"like\" class=\"heart\"></button>\n                    <button mat-button [routerLink]=\"['/blog', blog._id]\">READ MORE</button>\n                    <!-- <a routerLink=\"/blog/{{blog._id}}\"></a> -->\n                </mat-card-actions>\n            </mat-card>\n        \n        </div>\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/blogs/blog-all/blog-all.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-parent-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-family: 'Roboto'; }\n  .blog-parent-container #custom-shadow {\n    -webkit-box-shadow: 0 5px 20px #417505;\n            box-shadow: 0 5px 20px #417505;\n    border-radius: 5px; }\n  .blog-parent-container .blog-card {\n    width: 28%;\n    height: 25em;\n    margin: 1em;\n    margin-bottom: 3rem; }\n  .blog-parent-container .blog-card mat-card-title {\n      font-family: 'Dancing Script'; }\n  .blog-parent-container .blog-card mat-card-actions {\n      position: absolute;\n      width: 80%;\n      left: 56%;\n      bottom: 10%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n  .blog-parent-container .blog-card mat-card-actions button {\n        border: 2px solid rgba(65, 117, 5, 0.5); }\n  .blog-parent-container .blog-card p {\n      margin: 15px 0;\n      text-indent: 2.5rem;\n      text-align: left; }\n  .blog-parent-container .blog-card .blog-author {\n      font-size: 20px;\n      font-family: 'Roboto'; }\n  .card-container {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  font-family: 'Dancing Script';\n  color: #417505;\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#e4e483), to(rgba(0, 255, 0, 0.1)));\n  background-image: linear-gradient(to top right, #e4e483, rgba(0, 255, 0, 0.1)); }\n  .card-container hr {\n    width: 20%;\n    margin: 0 20px;\n    display: inline-block; }\n  .card-container h1 {\n    padding-top: 50px;\n    margin: 0 auto;\n    display: inline-block;\n    font-size: 2.7em; }\n  .card-container .blog-card-container {\n    width: 85vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .card-container .product-card-container {\n    width: 95vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .heart {\n  height: 20px;\n  width: 20px;\n  margin-left: .5rem;\n  border-radius: 50%; }\n  @media only screen and (max-width: 700px) {\n  #custom-shadow {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogs/blog-all/blog-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogAllComponent = /** @class */ (function () {
    function BlogAllComponent(blogService) {
        this.blogService = blogService;
        this.allBlogs = [];
    }
    BlogAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('initiliazing blog component...');
        this.blogService.getAllBlogs()
            .subscribe(function (response) {
            // console.log(response);
            // console.log("Successfully retreived BLOGS : ", response.json());
            var blogs = response.json();
            for (var i = 0; i < blogs.length; i++) {
                // console.log(blogs[i].blogBody);
                blogs[i].blogBody = blogs[i].blogBody.slice(0, 20).concat('...');
            }
            _this.allBlogs = blogs;
            // console.log('ALL BLOGS:::', this.allBlogs);
        });
    };
    BlogAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-blog-all',
            template: __webpack_require__("../../../../../src/app/blogs/blog-all/blog-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogs/blog-all/blog-all.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_blog_service__["a" /* BlogService */]])
    ], BlogAllComponent);
    return BlogAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blogs/blog-index/blog-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\n\n\n<mat-card id=\"single-blog-container\">\n  <button id=\"back-btn\" mat-button (click)=\"backClicked()\">Back</button>\n  \n  <div class=\"blog-header\">\n    <h1 class=\"blog-title\">{{singleBlog.blogTitle}}</h1>\n    <div class=\"blog-user-info\">\n      <img src=\"../assets/images/user-profile.svg\" alt=\"user\">\n      <p class=\"blog-date\">{{singleBlog.date}} By Bobby Boucher</p>\n    </div>\n  </div>\n\n  <div class=\"blog-body\">\n    <p>\n      {{singleBlog.blogBody}}\n\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, deserunt. Nostrum at quia voluptates. Quasi saepe velit animi, sunt rerum laborum voluptatibus laudantium expedita blanditiis. Facilis magnam repellendus maiores quo.\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corrupti soluta architecto ipsam, excepturi libero a sapiente magni doloribus eius laborum? Officiis, sint deserunt minus omnis aliquid expedita delectus impedit?\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus provident placeat earum autem perferendis accusamus mollitia minus odio cupiditate commodi libero, hic, fugit molestias numquam delectus rem et dolorem ipsam.\n      <br>\n      <br>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illo vel minus sequi? Minus, dolorum quidem. Aspernatur esse debitis inventore ipsum voluptate illo ex et facilis sint minima. Eos, vero.\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur provident laudantium eveniet, fugit error architecto vero facilis! Ut, itaque laborum aut facere eveniet placeat libero minima labore fugit dignissimos. Commodi.\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam ex eos quas! Ducimus fugit autem libero facilis cupiditate ab maiores laborum incidunt aliquam deleniti, omnis architecto? Unde, perspiciatis dolor!\n    </p>\n  </div>\n\n  <div class=\"blog-comments\">\n    <h1>COMMENTS</h1>\n    <div class=\"enter-comment\">\n      <textarea name=\"user-comment\" id=\"user-comment\" cols=\"56\" rows=\"10\"></textarea>\n      <div id=\"submit-button\">Submit</div>\n    </div>\n    \n  </div>\n\n</mat-card>\n\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/blogs/blog-index/blog-index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parent-container {\n  width: 100%;\n  height: 100%;\n  padding-top: 2rem;\n  background-color: lightgrey; }\n\n#single-blog-container {\n  height: 100rem;\n  width: 55%;\n  margin: 0 auto;\n  padding: 2.5rem 5rem;\n  -webkit-box-shadow: 0 5px 20px #417505;\n          box-shadow: 0 5px 20px #417505;\n  border-radius: 5px;\n  position: relative;\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#eeee68), to(#94fa94));\n  background-image: linear-gradient(to top right, #eeee68, #94fa94); }\n\n#single-blog-container #back-btn {\n    margin-left: 95%;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    border: 2px solid rgba(65, 117, 5, 0.5);\n    border-radius: 4px; }\n\n#single-blog-container .blog-header {\n    height: 15%;\n    width: 100%;\n    margin-top: 1.2rem;\n    position: relative; }\n\n#single-blog-container .blog-header h1 {\n      font-size: 1.5rem; }\n\n#single-blog-container .blog-header .blog-title {\n      height: 25%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0; }\n\n#single-blog-container .blog-header .blog-user-info {\n      height: 60%;\n      width: 100%;\n      position: absolute;\n      bottom: 0;\n      left: 0; }\n\n#single-blog-container .blog-header .blog-user-info img {\n        position: absolute;\n        top: 50%;\n        left: 2%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        height: 100px;\n        width: 100px;\n        border-radius: 50%; }\n\n#single-blog-container .blog-header .blog-user-info p {\n        position: absolute;\n        top: 50%;\n        left: 23%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); }\n\n#single-blog-container .blog-body {\n    height: 50%;\n    width: 100%;\n    padding: 2rem 0; }\n\n#single-blog-container .blog-body p {\n      font-size: 1.1rem;\n      text-indent: 2rem;\n      line-height: 2.2rem; }\n\n#single-blog-container .blog-comments {\n    width: 100%;\n    padding: 2rem 0;\n    margin-top: 2rem; }\n\n#single-blog-container .blog-comments .enter-comment {\n      height: 10rem;\n      width: 90%;\n      padding: 20px;\n      position: relative; }\n\n#single-blog-container .blog-comments .enter-comment #user-comment {\n        font-size: 1.3rem; }\n\n#single-blog-container .blog-comments .enter-comment #submit-button {\n        position: absolute;\n        width: 100px;\n        padding: .7rem;\n        text-align: center;\n        right: 0;\n        border: 2px solid green;\n        border-radius: 5px;\n        -webkit-transition: .2s ease-in;\n        transition: .2s ease-in;\n        margin-top: 1rem;\n        cursor: pointer; }\n\n#single-blog-container .blog-comments .enter-comment #submit-button:hover {\n          background: green;\n          color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogs/blog-index/blog-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogIndexComponent = /** @class */ (function () {
    function BlogIndexComponent(blogService, route, _location) {
        this.blogService = blogService;
        this.route = route;
        this._location = _location;
        this.singleBlog = {};
    }
    BlogIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.blogService.getSingleBlog(params.get('id'))
                .subscribe(function (response) {
                console.log(response.json());
                _this.singleBlog = response.json();
            });
        });
    };
    BlogIndexComponent.prototype.backClicked = function () {
        this._location.back();
    };
    BlogIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-blog-index',
            template: __webpack_require__("../../../../../src/app/blogs/blog-index/blog-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogs/blog-index/blog-index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], BlogIndexComponent);
    return BlogIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blogs/blog-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_all_blog_all_component__ = __webpack_require__("../../../../../src/app/blogs/blog-all/blog-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_index_blog_index_component__ = __webpack_require__("../../../../../src/app/blogs/blog-index/blog-index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { BlogPreviewComponent } from './blog-preview/blog-preview.component';

var blogRoutes = [
    {
        path: 'blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__blog_index_blog_index_component__["a" /* BlogIndexComponent */]
    },
    {
        path: 'blogs',
        component: __WEBPACK_IMPORTED_MODULE_2__blog_all_blog_all_component__["a" /* BlogAllComponent */]
    }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(blogRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/blogs/blogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_all_blog_all_component__ = __webpack_require__("../../../../../src/app/blogs/blog-all/blog-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_index_blog_index_component__ = __webpack_require__("../../../../../src/app/blogs/blog-index/blog-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_routing_module__ = __webpack_require__("../../../../../src/app/blogs/blog-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { BlogPreviewComponent } from './blog-preview/blog-preview.component';




var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__blog_routing_module__["a" /* BlogRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_all_blog_all_component__["a" /* BlogAllComponent */],
                __WEBPACK_IMPORTED_MODULE_3__blog_index_blog_index_component__["a" /* BlogIndexComponent */]
                // BlogPreviewComponent
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__blog_all_blog_all_component__["a" /* BlogAllComponent */],
                __WEBPACK_IMPORTED_MODULE_3__blog_index_blog_index_component__["a" /* BlogIndexComponent */]
                // BlogPreviewComponent
            ]
        })
    ], BlogsModule);
    return BlogsModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-container\">\n    <hr>\n    <h1>The Latest Blogs</h1>\n    <hr>\n    <br>\n\n    \n    <div class=\"blog-card-container\">\n\n        <div class= \"blog-parent-container\">\n   \n            <mat-card id=\"custom-shadow\" class=\"blog-card\"  *ngFor=\"let blog of threeBlogs\">\n              \n                <mat-card-title>{{blog.blogTitle}}</mat-card-title>\n                <hr>\n                <mat-card-content>\n                    <p>\n                        {{blog.blogBody}}\n                    </p>\n                </mat-card-content>\n                <mat-card-content class=\"blog-author\">{{blog.date}}</mat-card-content>\n                <mat-card-actions>\n                    <button (click)=\"likeClick()\" mat-button>LIKE <img src=\"../assets/images/heart-icon.png\" alt=\"like\" class=\"heart\"></button>\n                    <button mat-button [routerLink]=\"['/blog', blog._id]\">Read More</button>\n                </mat-card-actions>\n            </mat-card>\n        \n        </div>\n\n    </div>\n\n    <hr>  \n    <h1>Popular Products</h1>\n    <hr>\n    <br>\n    <br>\n\n    <div class=\"product-card-container\">\n\n        <div class= \"product-parent-container\">\n   \n            <mat-card id=\"custom-shadow\" class=\"product-card\"  *ngFor=\"let product of threeProducts; let i = index;\">\n         \n                <mat-card-title>{{product.name}}</mat-card-title>\n               \n                <img mat-card-lg-image src ={{product.image_url}}>\n               \n                <mat-card-content>\n                    <p>\n                        {{product.description}}\n                    </p>\n                </mat-card-content>\n                <mat-card-content><h2>${{product.price}}</h2></mat-card-content>\n\n\n                <input type=\"number\" placeholder=\"1\" id=\"card-{{i}}\">\n                <label for=\"quantity\">Qty</label>\n\n                <!-- <div class=\"available-qty\">\n                    <h4>Available: {{product.quantity}}</h4>\n                </div> -->\n\n                <mat-card-actions>\n                    <button mat-button [routerLink]=\"['/product', product.product_id]\">More Info</button>\n                    <button (click)=\"addToCart(product.product_id, i, product.name, product.price, product.image_url)\" mat-button> Add To Cart <img src=\"../assets/images/cart.svg\" alt=\"like\" class=\"cart\"></button>\n                </mat-card-actions>\n            </mat-card>\n        \n        </div>\n    \n        \n    </div>\n    \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  font-family: 'Dancing Script';\n  color: #417505;\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#e4e483), to(rgba(0, 255, 0, 0.1)));\n  background-image: linear-gradient(to top right, #e4e483, rgba(0, 255, 0, 0.1)); }\n  .card-container hr {\n    width: 20%;\n    margin: 0 20px;\n    display: inline-block; }\n  .card-container h1 {\n    padding-top: 50px;\n    margin: 0 auto;\n    display: inline-block; }\n  .card-container .blog-card-container {\n    width: 95vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .card-container .blog-card-container .blog-parent-container {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-family: 'Roboto'; }\n  .card-container .blog-card-container .blog-parent-container #custom-shadow {\n        -webkit-box-shadow: 0 0 20px #417505;\n                box-shadow: 0 0 20px #417505;\n        border-radius: 5px; }\n  .card-container .blog-card-container .blog-parent-container .blog-card {\n        width: 25%;\n        height: 25em;\n        margin: 1em; }\n  .card-container .blog-card-container .blog-parent-container .blog-card mat-card-title {\n          font-family: 'Dancing Script'; }\n  .card-container .blog-card-container .blog-parent-container .blog-card mat-card-actions {\n          position: absolute;\n          width: 80%;\n          left: 56%;\n          bottom: 10%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%);\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: distribute;\n              justify-content: space-around; }\n  .card-container .blog-card-container .blog-parent-container .blog-card mat-card-actions button {\n            border: 2px solid rgba(65, 117, 5, 0.5); }\n  .card-container .blog-card-container .blog-parent-container .blog-card p {\n          margin: 15px 0;\n          text-indent: 2.5rem;\n          text-align: left; }\n  .card-container .blog-card-container .blog-parent-container .blog-card .blog-author {\n          font-size: 20px;\n          font-family: 'Roboto'; }\n  .card-container .product-card-container {\n    width: 95vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .card-container .product-card-container .product-parent-container {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-family: 'Roboto'; }\n  .card-container .product-card-container .product-parent-container #custom-shadow {\n        -webkit-box-shadow: 0 3px 10px #417505;\n                box-shadow: 0 3px 10px #417505;\n        border-radius: 5px; }\n  .card-container .product-card-container .product-parent-container .product-card {\n        width: 25%;\n        height: 30em;\n        margin: 1em; }\n  .card-container .product-card-container .product-parent-container .product-card mat-card-title {\n          font-family: 'Dancing Script'; }\n  .card-container .product-card-container .product-parent-container .product-card mat-card-actions {\n          position: absolute;\n          width: 80%;\n          left: 56%;\n          bottom: 10%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%);\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: distribute;\n              justify-content: space-around; }\n  .card-container .product-card-container .product-parent-container .product-card mat-card-actions button {\n            border: 2px solid rgba(65, 117, 5, 0.5); }\n  .card-container .product-card-container .product-parent-container .product-card .available-qty {\n          padding-top: 1rem; }\n  .card-container .product-card-container .product-parent-container .product-card p {\n          margin: 15px 0;\n          text-indent: 2.5rem;\n          text-align: left;\n          line-height: 20px;\n          font-family: 'Roboto', sans-serif; }\n  .card-container .product-card-container .product-parent-container .product-card .product-author {\n          font-size: 20px;\n          font-family: 'Roboto'; }\n  .heart {\n  height: 15px;\n  width: 15px;\n  margin-left: .5rem;\n  -webkit-transition: 3s;\n  transition: 3s; }\n  .cart {\n  height: 20px;\n  width: 20px;\n  margin-left: .5rem; }\n  .heartPulse {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n  @media only screen and (max-width: 700px) {\n  #custom-shadow {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogService, productService) {
        this.blogService = blogService;
        this.productService = productService;
        this.threeBlogs = [];
        this.threeProducts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('initiliazing blog/products ...');
        this.blogService.getAllBlogs()
            .subscribe(function (response) {
            // console.log(response);
            // console.log("Successfully retreived BLOGS : ", response.json());
            var blogs = response.json().splice(0, 3);
            for (var i = 0; i < blogs.length; i++) {
                // console.log(blogs[i].blogBody);
                blogs[i].blogBody = blogs[i].blogBody.slice(0, 100).concat('...');
            }
            _this.threeBlogs = blogs;
        });
        this.productService.getAllProducts()
            .subscribe(function (response) {
            // console.log("Successfully retreived Products : ", response.json());
            var products = response.json().splice(0, 3);
            for (var i = 0; i < products.length; i++) {
                // console.log(products[i].blogBody);
                products[i].description = products[i].description.slice(0, 100).concat('...');
            }
            _this.threeProducts = products;
        });
    };
    // This function will check availability of the Product before adding to the cart
    HomeComponent.prototype.addToCart = function (productID, i, productName, productPrice, productImage) {
        var qty = Number(document.getElementById("card-" + i).value);
        // console.log(`You are trying to buy ${qty} items`)
        // console.log('product ID: ', productID);
        if (!qty) {
            qty = 1;
        }
        this.productService.addToCart(productID, qty)
            .subscribe(function (response) {
            // console.log(response.json());
            var availableQty = response.json().quantity;
            // console.log(availableQty);
            if (qty > availableQty) {
                alert("Sorry, there are only " + availableQty + " items left in our inventory.");
            }
            else {
                var newCartItem = {
                    'productName': productName,
                    'productID': productID,
                    'quantity': qty,
                    'price': productPrice,
                    'image': productImage
                };
                var currentItems = JSON.parse(localStorage.getItem('shoppingCart'));
                // console.log(currentItems);
                if (currentItems == null) {
                    currentItems = [];
                }
                if (currentItems.length == 0) {
                    currentItems.push(newCartItem);
                }
                else {
                    console.log('CurrentITEMS LENGTH: ', currentItems.length);
                    console.log('NEW ITEM ID: ', newCartItem.productID);
                    var exists = false;
                    for (var i_1 = 0; i_1 < currentItems.length; i_1++) {
                        if (newCartItem.productID == currentItems[i_1].productID) {
                            currentItems[i_1].quantity += newCartItem.quantity;
                            exists = true;
                        }
                    }
                    if (!exists) {
                        currentItems.push(newCartItem);
                    }
                }
                localStorage.setItem('shoppingCart', JSON.stringify(currentItems));
                alert("Successfully added Product: " + newCartItem.productName + " Qty: " + newCartItem.quantity + " to cart");
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_0__services_product_service__["a" /* ProductService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-all/product-all.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-container\">\n    <hr>\n    <h1>Products</h1>\n    <hr>\n    <br>\n  \n    \n      <div class=\"product-card-container\">\n  \n          <div class= \"product-parent-container\">\n    \n              <mat-card id=\"custom-shadow\" class=\"product-card\"  *ngFor=\"let product of allProducts; let i = index;\">\n                \n                  <mat-card-title>{{product.name}}</mat-card-title>\n\n                  <img mat-card-lg-image src ={{product.image_url}}>\n\n                  <mat-card-content>\n                      <p>\n                          {{product.description}}\n                      </p>\n                  </mat-card-content>\n                  <mat-card-content><h2>${{product.price}}</h2></mat-card-content>\n\n                    <input type=\"number\" placeholder=\"1\" id=\"card-{{i}}\">\n                    <label for=\"quantity\">Qty</label>\n\n                    <!-- <div class=\"available-qty\">\n                        <h4>Available: {{product.quantity}}</h4>\n                    </div> -->\n\n                  <mat-card-actions>\n                      <button mat-button [routerLink]=\"['/product', product.product_id]\">More Info</button>\n                      <button (click)=\"addToCart(product.product_id, i, product.name, product.price, product.image_url)\" mat-button>Add To Cart <img src=\"../assets/images/cart.svg\" alt=\"like\" class=\"cart\"></button>\n                  </mat-card-actions>\n              </mat-card>\n          \n          </div>\n  \n      </div>\n  \n    </div>"

/***/ }),

/***/ "../../../../../src/app/products/product-all/product-all.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-parent-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-family: 'Roboto'; }\n  .product-parent-container #custom-shadow {\n    -webkit-box-shadow: 0 0 20px #417505;\n            box-shadow: 0 0 20px #417505;\n    border-radius: 10px; }\n  .product-parent-container .product-card {\n    width: 25%;\n    height: 30em;\n    margin: 1em; }\n  .product-parent-container .product-card mat-card-title {\n      font-family: 'Dancing Script'; }\n  .product-parent-container .product-card mat-card-actions {\n      position: absolute;\n      width: 80%;\n      left: 56%;\n      bottom: 10%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n  .product-parent-container .product-card mat-card-actions button {\n        border: 2px solid rgba(65, 117, 5, 0.5); }\n  .product-parent-container .product-card .available-qty {\n      padding-top: 1rem; }\n  .product-parent-container .product-card p {\n      margin: 15px 0;\n      text-indent: 2.5rem;\n      text-align: left;\n      overflow: hidden;\n      line-height: 20px; }\n  .product-parent-container .product-card .product-author {\n      font-size: 20px;\n      font-family: 'Roboto'; }\n  .card-container {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  font-family: 'Dancing Script';\n  color: #417505;\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#e4e483), to(rgba(0, 255, 0, 0.1)));\n  background-image: linear-gradient(to top right, #e4e483, rgba(0, 255, 0, 0.1)); }\n  .card-container hr {\n    width: 20%;\n    margin: 0 20px;\n    display: inline-block; }\n  .card-container h1 {\n    padding-top: 50px;\n    margin: 0 auto;\n    display: inline-block;\n    font-size: 2.7em; }\n  .card-container .product-card-container {\n    width: 95vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .card-container .product-card-container {\n    width: 95vw;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 15px; }\n  .cart {\n  height: 20px;\n  width: 20px;\n  margin-left: .5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-all/product-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductAllComponent = /** @class */ (function () {
    function ProductAllComponent(productService) {
        this.productService = productService;
        this.allProducts = [];
    }
    ProductAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts()
            .subscribe(function (response) {
            console.log("Successfully retreived Products WOO! : ", response.json());
            var products = response.json();
            for (var i = 0; i < products.length; i++) {
                // console.log(products[i].blogBody);
                products[i].description = products[i].description.slice(0, 100).concat('...');
            }
            _this.allProducts = products;
        });
    };
    // This function will check availability of the Product before adding to the cart
    ProductAllComponent.prototype.addToCart = function (productID, i, productName, productPrice, productImage) {
        var qty = Number(document.getElementById("card-" + i).value);
        // console.log(`You are trying to buy ${qty} items`)
        // console.log('product ID: ', productID);
        if (!qty) {
            qty = 1;
        }
        this.productService.addToCart(productID, qty)
            .subscribe(function (response) {
            // console.log(response.json());
            var availableQty = response.json().quantity;
            // console.log(availableQty);
            if (qty > availableQty) {
                alert("Sorry, there are only " + availableQty + " items left in our inventory.");
            }
            else {
                var newCartItem = {
                    'productName': productName,
                    'productID': productID,
                    'quantity': qty,
                    'price': productPrice,
                    'image': productImage
                };
                var currentItems = JSON.parse(localStorage.getItem('shoppingCart'));
                // console.log(currentItems);
                if (currentItems == null) {
                    currentItems = [];
                }
                if (currentItems.length == 0) {
                    currentItems.push(newCartItem);
                }
                else {
                    console.log('CurrentITEMS LENGTH: ', currentItems.length);
                    console.log('NEW ITEM ID: ', newCartItem.productID);
                    var exists = false;
                    for (var i_1 = 0; i_1 < currentItems.length; i_1++) {
                        if (newCartItem.productID == currentItems[i_1].productID) {
                            currentItems[i_1].quantity += newCartItem.quantity;
                            exists = true;
                        }
                    }
                    if (!exists) {
                        currentItems.push(newCartItem);
                    }
                }
                localStorage.setItem('shoppingCart', JSON.stringify(currentItems));
                alert("Successfully added Product: " + newCartItem.productName + " Qty: " + newCartItem.quantity + " to cart");
            }
        });
    };
    ProductAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-all',
            template: __webpack_require__("../../../../../src/app/products/product-all/product-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-all/product-all.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]])
    ], ProductAllComponent);
    return ProductAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-delete/product-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-delete works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-delete/product-delete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-delete/product-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDeleteComponent = /** @class */ (function () {
    function ProductDeleteComponent() {
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
    };
    ProductDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-delete',
            template: __webpack_require__("../../../../../src/app/products/product-delete/product-delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-delete/product-delete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDeleteComponent);
    return ProductDeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Inventory</h1>\n\n<button routerLink=\"/product/new\" class=\"addProd\">\n    Add New Product\n</button>\n\n<div class=\"all-products\">\n    <div class=\"product\" *ngFor=\"let product of products\">\n        <div *ngIf=\"productToEdit !== product\">\n            <h3>Product Name: </h3>\n            <li>\n              {{product.name}} \n            </li>\n            <h3>Product Description: </h3>\n            <li>\n              {{product.description}}\n            </li>\n            <h3>Product Price: </h3>\n            <li>\n              {{product.price}}\n            </li>\n            <h3>Product Image URL: </h3>\n            <li>\n              {{product.image_url}}\n            </li>\n            <h3>Product Quantity: </h3>\n            <li>\n              {{product.quantity}}\n            </li>\n        \n            <button (click)=\"deleteproduct(product.product_id)\" class=\"deleteBtn\">\n                Delete\n            </button>\n            <button (click)=\"makeProductEditable(product)\" class=\"editBtn\">\n                Edit\n            </button>\n           \n        </div>\n\n        <div *ngIf=\"productToEdit == product\" class=\"edit-prod-container\">\n      \n            <section>\n                <h3>Product Name: </h3>\n                <input [(ngModel)]=\"product.name\" type=\"text\" placeholder=\"Name\">\n                <h3>Product Description: </h3>\n                <input [(ngModel)]=\"product.description\" type=\"text\" placeholder=\"Description\" id=\"desc\">\n                <h3>Product Price: </h3>\n                <input [(ngModel)]=\"product.price\" type=\"text\" placeholder=\"Price\">\n                <h3>Product Image URL: </h3>\n                <input [(ngModel)]=\"product.image_url\" type=\"text\" placeholder=\"Image URL\">\n                <h3>Product Quantity: </h3>\n                <input [(ngModel)]=\"product.quantity\" type=\"text\" placeholder=\"Quantity\">\n\n                <button class='doneEditBtn' (click)=\"doneEditing(productToEdit)\">\n                Done Editing\n                </button>\n            </section>\n        </div>\n    </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Roboto', sans-serif; }\n\nh3 {\n  text-transform: uppercase; }\n\n.all-products {\n  height: 100%;\n  width: 175px;\n  padding-left: 1.5rem;\n  font-family: 'Roboto'; }\n\nli {\n  list-style: none;\n  display: block;\n  border-bottom: 2px solid #417505;\n  margin: 5px 5px 10px 5px;\n  padding: 10px; }\n\n.product {\n  width: 90vw;\n  margin-bottom: 2rem;\n  border: 3px solid green;\n  border-radius: 10px;\n  padding: 1rem; }\n\ninput {\n  display: block;\n  border: none;\n  border-bottom: 2px solid orangered;\n  margin: 0 5px;\n  padding: 10px;\n  width: 100%;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.1rem; }\n\n.addProd {\n  width: 180px;\n  height: 40px;\n  margin: 20px;\n  border-radius: 5px;\n  border: 2px solid #417505;\n  color: #417505;\n  cursor: pointer; }\n\n.addProd:hover {\n    color: white;\n    background: #417505; }\n\nbutton {\n  width: 100px;\n  font-size: 1rem;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid #417505;\n  color: #417505;\n  cursor: pointer; }\n\nbutton:hover {\n    color: white;\n    background: #417505; }\n\n.doneEditBtn {\n  width: 200px;\n  font-size: 1rem;\n  margin-top: 1rem;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid #417505;\n  color: #417505;\n  cursor: pointer; }\n\n.doneEditBtn:hover {\n    color: white;\n    background: #417505; }\n\n.edit-prod-container {\n  border: 3px solid red;\n  border-radius: 10px;\n  padding: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts()
            .subscribe(function (response) {
            _this.products = response.json();
            console.log("RETREIVED all products", _this.products);
        });
    };
    ////////////////////////////////////
    ProductEditComponent.prototype.makeProductEditable = function (product) {
        this.productToEdit = product;
    };
    ////////////////////////////////////
    ProductEditComponent.prototype.doneEditing = function (productToEdit) {
        this.productService.saveEditedProduct(productToEdit.product_id, productToEdit)
            .subscribe(function (response) {
            console.log('Successfully updated product: ', response);
        });
        this.productToEdit = {};
    };
    ////////////////////////////////////
    ProductEditComponent.prototype.deleteproduct = function (productId) {
        var _this = this;
        console.log(productId);
        this.productService.deleteProduct(productId)
            .subscribe(function (response) {
            console.log('Successfully deleted product', response.json());
            if (!response.json()) {
                alert('Oops! did not delete');
            }
            else if (response.json()) {
                console.log(response.json(), 'hit!');
                _this.productService.getAllProducts()
                    .subscribe(function (response) {
                    _this.products = response.json();
                    console.log("RETREIVED all products", _this.products);
                });
            }
        });
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-index/product-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"single-product-container\">\n    <hr>  \n        <h1 class=\"product-page-title\">Product</h1>\n    <hr>\n    <div id=\"flex-product\">\n        <div class= \"product-content\">\n            <h2 class=\"product-name\">{{product.name}}</h2>\n        <hr class=\"line-name\">\n            <p class=\"product-info\">{{product.description}}</p>\n        <hr>\n       \n            <h2 class=\"product-price\">$ {{product.price}}</h2>\n\n            <div class=\"qty\">\n                <input type=\"number\" placeholder=\"1\" id=\"productQty\">\n                <label for=\"quantity\">Qty</label>\n            </div>\n            <button id=\"add\" (click)=\"addToCart(product.product_id, product.name, product.price, product.image_url)\" mat-button>Add To Cart</button>\n        </div>\n        <div class=\"product-image\">\n            <img mat-card-md-image src ={{product.image_url}}>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/products/product-index/product-index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#single-product-container {\n  height: 50rem;\n  width: 100vw;\n  position: relative;\n  text-align: center;\n  background-image: white; }\n\n.product-page-title {\n  font-size: 2.7em;\n  padding-top: 50px;\n  display: inline-block;\n  font-family: 'Dancing Script';\n  color: #417505; }\n\nhr {\n  width: 20%;\n  margin: 0 20px;\n  display: inline-block; }\n\n.line-name {\n  width: 60%;\n  margin: 0;\n  display: inline-block; }\n\n#flex-product {\n  width: 100%;\n  height: 50vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  font-family: 'Roboto', sans-serif; }\n\n#flex-product .qty {\n    margin: 1rem;\n    font-size: 1.4rem; }\n\n#flex-product .qty input {\n      width: 4rem;\n      height: 2rem; }\n\n.product-content {\n  width: 50%;\n  margin-right: 10rem;\n  margin-top: 2rem; }\n\n.product-content .product-name {\n    font-size: 3rem;\n    padding: 15px; }\n\n.product-content .product-info {\n    padding: 15px; }\n\n.product-content .product-price {\n    margin-top: 2rem; }\n\n.product-content #add {\n    background-color: green;\n    border-radius: 1rem;\n    text-transform: uppercase;\n    width: 10rem;\n    margin: 5rem; }\n\nh2 {\n  font-weight: normal; }\n\n.product-image {\n  width: 50%;\n  padding-top: 6rem; }\n\nimg {\n  height: 20rem;\n  width: 20rem; }\n\n@media (max-width: 500px) {\n  #flex-product {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n  #add {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-index/product-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductIndexComponent = /** @class */ (function () {
    function ProductIndexComponent(productsService, route) {
        this.productsService = productsService;
        this.route = route;
    }
    ProductIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.productsService.getOneProduct(param.id)
                .subscribe(function (response) {
                // console.log(response.json());
                _this.product = response.json();
            });
        });
    };
    //This function will check availability of the Product before adding to the cart
    ProductIndexComponent.prototype.addToCart = function (productID, productName, productPrice, productImage) {
        var qty = Number(document.getElementById("productQty").value);
        // console.log(`You are trying to buy ${qty} items`)
        // console.log('product ID: ', productID);
        if (!qty) {
            qty = 1;
        }
        this.productsService.addToCart(productID, qty)
            .subscribe(function (response) {
            // console.log(response.json());
            var availableQty = response.json().quantity;
            // console.log(availableQty);
            if (qty > availableQty) {
                alert("Sorry, there are only " + availableQty + " items left in our inventory.");
            }
            else {
                var newCartItem = {
                    'productName': productName,
                    'productID': productID,
                    'quantity': qty,
                    'price': productPrice,
                    'image': productImage
                };
                var currentItems = JSON.parse(localStorage.getItem('shoppingCart'));
                // console.log(currentItems);
                if (currentItems == null) {
                    currentItems = [];
                }
                if (currentItems.length == 0) {
                    currentItems.push(newCartItem);
                }
                else {
                    console.log('CurrentITEMS LENGTH: ', currentItems.length);
                    console.log('NEW ITEM ID: ', newCartItem.productID);
                    var exists = false;
                    for (var i = 0; i < currentItems.length; i++) {
                        if (newCartItem.productID == currentItems[i].productID) {
                            currentItems[i].quantity += newCartItem.quantity;
                            exists = true;
                        }
                    }
                    if (!exists) {
                        currentItems.push(newCartItem);
                    }
                }
                localStorage.setItem('shoppingCart', JSON.stringify(currentItems));
                alert("Successfully added Product: " + newCartItem.productName + " Qty: " + newCartItem.quantity + " to cart");
            }
        });
    };
    ProductIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-index',
            template: __webpack_require__("../../../../../src/app/products/product-index/product-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-index/product-index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductIndexComponent);
    return ProductIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"success\" *ngIf=\"saveSuccess\">\n  YAY! PRODUCT SAVED!\n</div>\n\n<form class=\"new-product-form\">\n\n  <label for=\"Name\">Name</label>\n  <br>\n  <input [(ngModel)]=\"newProduct.name\" type=\"text\" placeholder=\"Name\" name=\"name\" required>\n  <br>\n  <br>\n\n  <label for=\"description\">Description</label>\n  <br>\n  <input [(ngModel)]=\"newProduct.description\" type=\"text\" placeholder=\"Description\" name=\"description\" required>\n  <br>\n  <br>\n\n  <label for=\"price\">Price</label>\n  <br>\n  <input [(ngModel)]=\"newProduct.price\" type=\"text\" placeholder=\"Price\" name=\"price\" required>\n  <br>\n  <br>\n\n  <label for=\"image\">Image Url</label>\n  <br>\n  <input [(ngModel)]=\"newProduct.image_url\" type=\"text\" placeholder=\"Image\" name=\"image\" required>\n  <br>\n  <br>\n\n  <label for=\"quantity\">Quantity</label>\n  <br>\n  <input [(ngModel)]=\"newProduct.quantity\" type=\"text\" placeholder=\"Quantity\" name=\"quantity\" required>\n  <br>\n  <br>\n\n  <div id=\"require-fields\" *ngIf=\"requireFields\">\n    Please fill all fields\n  </div>\n\n  <button mat-button (click)=\"saveNewProduct(newProduct)\">Submit</button>\n\n  <button mat-button routerLink=\"/product/edit\">Edit Products</button>\n\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-product-form {\n  width: 30vw;\n  height: 100%;\n  border: 3px solid lime;\n  text-align: center;\n  margin: 0 auto; }\n\n#require-fields {\n  color: red;\n  font-size: 1.3rem;\n  font-family: 'Roboto'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.newProduct = {};
        this.saveSuccess = false;
        this.requireFields = false;
    }
    ProductNewComponent.prototype.ngOnInit = function () {
    };
    ProductNewComponent.prototype.saveNewProduct = function (newProduct) {
        var _this = this;
        if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.quantity) {
            // alert('Please fill out form');
            this.requireFields = true;
        }
        else {
            this.requireFields = false;
            this.productService.saveNewProduct(newProduct)
                .subscribe(function (response) {
                console.log('Successfully saved new Product: ', response);
                _this.saveSuccess = true;
                _this.newProduct.name = "";
                _this.newProduct.description = "";
                _this.newProduct.price = "";
                _this.newProduct.image_url = "";
                _this.newProduct.quantity = "";
                alert('save Successssss');
                _this.router.navigateByUrl('/product/edit');
            });
        }
    };
    ProductNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-product-new',
            template: __webpack_require__("../../../../../src/app/products/product-new/product-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-new/product-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ProductNewComponent);
    return ProductNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_index_product_index_component__ = __webpack_require__("../../../../../src/app/products/product-index/product-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_new_product_new_component__ = __webpack_require__("../../../../../src/app/products/product-new/product-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_delete_product_delete_component__ = __webpack_require__("../../../../../src/app/products/product-delete/product-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_all_product_all_component__ = __webpack_require__("../../../../../src/app/products/product-all/product-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var productRoutes = [
    {
        path: 'product/new',
        component: __WEBPACK_IMPORTED_MODULE_3__product_new_product_new_component__["a" /* ProductNewComponent */]
    },
    {
        path: 'product/edit',
        component: __WEBPACK_IMPORTED_MODULE_6__product_edit_product_edit_component__["a" /* ProductEditComponent */]
    },
    {
        path: 'product/delete',
        component: __WEBPACK_IMPORTED_MODULE_4__product_delete_product_delete_component__["a" /* ProductDeleteComponent */]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__product_index_product_index_component__["a" /* ProductIndexComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_5__product_all_product_all_component__["a" /* ProductAllComponent */]
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(productRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_index_product_index_component__ = __webpack_require__("../../../../../src/app/products/product-index/product-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_all_product_all_component__ = __webpack_require__("../../../../../src/app/products/product-all/product-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_routing_module__ = __webpack_require__("../../../../../src/app/products/product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_new_product_new_component__ = __webpack_require__("../../../../../src/app/products/product-new/product-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_delete_product_delete_component__ = __webpack_require__("../../../../../src/app/products/product-delete/product-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__product_routing_module__["a" /* ProductRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_all_product_all_component__["a" /* ProductAllComponent */],
                __WEBPACK_IMPORTED_MODULE_3__product_index_product_index_component__["a" /* ProductIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_new_product_new_component__["a" /* ProductNewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_delete_product_delete_component__["a" /* ProductDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_edit_product_edit_component__["a" /* ProductEditComponent */]
                // ProductPreviewComponent
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__product_all_product_all_component__["a" /* ProductAllComponent */],
                __WEBPACK_IMPORTED_MODULE_3__product_index_product_index_component__["a" /* ProductIndexComponent */]
                // ProductPreviewComponent
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.userDetails = null;
        this.user = afAuth.authState;
        //checks to see see if there is user and their details.
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.baseUrl = 'http://localhost:3000';
        }
        else {
            this.baseUrl = '';
        }
    }
    BlogService.prototype.getAllBlogs = function () {
        // console.log('hit getallblog function');
        return this.http.get(this.baseUrl + "/api/blogs");
    };
    BlogService.prototype.getSingleBlog = function (blogId) {
        console.log('hit the getSingleBlog service route');
        return this.http.get(this.baseUrl + "/api/blog/" + blogId);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardService = /** @class */ (function () {
    function GuardService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    GuardService.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (admin) {
            if (!admin) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    GuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.baseUrl = 'http://localhost:3000';
        }
        else {
            this.baseUrl = '';
        }
    }
    // USER FUNCTIONS
    ProductService.prototype.getAllProducts = function () {
        console.log("getting all products");
        return this.http.get(this.baseUrl + "/api/products");
    };
    ProductService.prototype.getOneProduct = function (productId) {
        console.log(productId);
        return this.http.get(this.baseUrl + "/api/product/" + productId);
    };
    // ADMIN FUNCTIONS
    ProductService.prototype.saveNewProduct = function (newProduct) {
        console.log('Saving new product:', newProduct);
        return this.http.post(this.baseUrl + "/api/product/addNew", newProduct);
    };
    ProductService.prototype.deleteProduct = function (productId) {
        console.log("DELETING product...", productId);
        return this.http.delete(this.baseUrl + "/api/product/" + productId);
    };
    ProductService.prototype.saveEditedProduct = function (productId, editedProduct) {
        console.log('Saving newly edited product', editedProduct);
        return this.http.put(this.baseUrl + "/api/product/" + productId, editedProduct);
    };
    ProductService.prototype.addToCart = function (id, qty) {
        console.log('Hit the product addToCart Service...');
        return this.http.get(this.baseUrl + "/api/checkQty?id=" + id + "&qty=" + qty);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.baseUrl = 'http://localhost:3000';
        }
        else {
            this.baseUrl = '';
        }
    }
    ShoppingCartService.prototype.purchase = function () {
        console.log('hit purchase service');
        var shoppingList = [];
        var cart = JSON.parse(localStorage.getItem('shoppingCart'));
        var userID;
        var localStorageKeys = Object.keys(localStorage);
        for (var i = 0; i < localStorageKeys.length; i++) {
            if (localStorageKeys[i].includes('firebase')) {
                console.log('user is logged in!');
                var key = localStorageKeys[i];
                userID = JSON.parse(localStorage.getItem(key));
                console.log(userID.uid);
            }
        }
        // Adding total amount per item to cart
        if (cart) {
            for (var p = 0; p < cart.length; p++) {
                cart[p].total = (cart[p].quantity * cart[p].price).toFixed(2);
                delete cart[p].productName;
                delete cart[p].price;
                delete cart[p].image;
            }
        }
        // Formatting data to send to back end
        if (!cart) {
            alert('Cart is empty!');
        }
        else if (cart && userID) {
            console.log('sending both list and user ID!');
            shoppingList.push(cart);
            shoppingList.push([{ 'userID': userID.uid }]);
            // console.log(shoppingList);
        }
        else if (cart && !userID) {
            console.log('sending list, no user ID');
            shoppingList.push(cart);
            userID = [];
            shoppingList.push(userID);
            // console.log(shoppingList);
        }
        console.log('Final Shopping List data to send to Back End, ', shoppingList);
        return this.http.post(this.baseUrl + "/api/placeOrder", shoppingList);
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.baseUrl = 'http://localhost:3000';
        }
        else {
            this.baseUrl = '';
        }
    }
    //Check admin user.
    UserService.prototype.checkAdmin = function (uid) {
        // console.log('sup brah', uid);
        return this.http.get(this.baseUrl + "/api/checkAdmin/" + uid);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!currentCart\" id=\"empty\">\n  <h4>Empty Cart :(</h4>\n  <img src=\"../assets/images/empty-cart.png\" alt=\"empty cart\">\n</div>\n\n\n<div *ngIf=\"currentCart\" id=\"cart\">\n  <h1>Items in Your Cart</h1>\n\n  <div *ngFor=\"let item of currentCart\" class=\"item\">\n    \n    <li class=\"name\">{{item.productName}}</li>\n    <img class=\"image\" src=\"{{item.image}}\" alt=\"product image\">\n    <!-- <li class=\"id\">ID: {{item.productID}}</li> -->\n    <li class=\"price\">PRICE: ${{item.price}}</li>\n    <li class=\"quantity\">QTY: {{item.quantity}}</li>\n    <li class=\"total\">TOTAL: ${{item.total}}</li>\n\n    \n  </div>\n\n\n  <div class=\"total-container\">\n    <p>Total: ${{grandTotal}}</p>\n  </div>\n\n  <div class=\"checkout-buttons\">\n    <button (click)=\"emptyCart()\">Empty Cart</button>\n    <button (click)=\"purchase()\">Place Order</button>\n  </div>\n  \n</div>\n \n\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#empty {\n  width: 100%;\n  height: 35vh;\n  font-size: 2.5rem;\n  text-align: center;\n  font-family: 'Roboto', sans-serif; }\n  #empty h4 {\n    height: 15%;\n    width: 30rem;\n    margin: 3rem auto; }\n  #empty img {\n    height: 100px; }\n  #cart {\n  height: 100%;\n  width: 100%;\n  padding: 2rem;\n  font-family: 'Roboto', sans-serif; }\n  #cart h1 {\n    width: 20rem;\n    margin: 1rem auto;\n    text-align: center;\n    color: #417505; }\n  .item {\n  list-style: none;\n  width: 100%;\n  height: 15rem;\n  position: relative;\n  border-bottom: 2px solid grey; }\n  .item li {\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  .item .name {\n    position: absolute;\n    top: 50%;\n    left: 25%;\n    font-size: 1.5rem; }\n  .item .image {\n    position: absolute;\n    top: 50%;\n    left: 5%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  .item .price {\n    position: absolute;\n    top: 50%;\n    left: 50%; }\n  .item .quantity {\n    position: absolute;\n    top: 50%;\n    left: 70%; }\n  .item .total {\n    position: absolute;\n    top: 50%;\n    left: 90%; }\n  .item img {\n    height: 150px;\n    width: 150px;\n    display: inline-block; }\n  .total-container {\n  width: 95%;\n  text-align: right;\n  font-size: 2rem;\n  margin: 1rem;\n  font-family: 'Roboto', sans-serif; }\n  .checkout-buttons {\n  width: 95%;\n  height: 4rem;\n  text-align: right;\n  font-size: 2rem;\n  margin: 1rem;\n  font-family: 'Roboto', sans-serif; }\n  .checkout-buttons button {\n    outline: none;\n    height: 4rem;\n    width: 12rem;\n    border-radius: 30px;\n    background: lightgrey;\n    padding: 1rem;\n    font-size: 1.2rem;\n    cursor: pointer; }\n  .checkout-buttons button:hover {\n      border: 3px solid #417505;\n      -webkit-box-shadow: 0 0 15px #417505;\n              box-shadow: 0 0 15px #417505; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.grandTotal = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var cart = JSON.parse(localStorage.getItem('shoppingCart'));
        // Adding total amount per item to cart
        if (cart) {
            for (var p = 0; p < cart.length; p++) {
                cart[p].total = Number((cart[p].quantity * cart[p].price).toFixed(2));
                this.grandTotal += cart[p].total;
                this.grandTotal = Number(this.grandTotal.toFixed(2));
            }
        }
        this.currentCart = cart;
        console.log('Checkout Cart', this.currentCart);
    };
    ShoppingCartComponent.prototype.emptyCart = function () {
        localStorage.clear();
        this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
    };
    ShoppingCartComponent.prototype.purchase = function () {
        var _this = this;
        console.log('Purchasing...');
        this.shoppingCartService.purchase()
            .subscribe(function (response) {
            console.log('checkout response', response);
            alert('Order was placed!');
            localStorage.removeItem('shoppingCart');
            _this.currentCart = null;
        });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAAaja_uGzzXyrPGku3VBTLVGnNWbxlqbY",
        authDomain: "project3mjrs.firebaseapp.com",
        databaseURL: "https://project3mjrs.firebaseio.com",
        projectId: "project3mjrs",
        storageBucket: "project3mjrs.appspot.com",
        messagingSenderId: "1075574449104"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map