webpackJsonp([0],{

/***/ 105:
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
webpackEmptyAsyncContext.id = 105;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        Reveal.initialize({
            // Display presentation control arrows
            controls: true,
            // Help the user learn the controls by providing hints, for example by
            // bouncing the down arrow when they first encounter a vertical slide
            controlsTutorial: true,
            // Determines where controls appear, "edges" or "bottom-right"
            controlsLayout: 'bottom-right',
            // Visibility rule for backwards navigation arrows; "faded", "hidden"
            // or "visible"
            controlsBackArrows: 'faded',
            // Display a presentation progress bar
            progress: false,
            // Set default timing of 2 minutes per slide
            defaultTiming: 120,
            // Display the page number of the current slide
            slideNumber: false,
            // Push each slide change to the browser history
            history: false,
            // Enable keyboard shortcuts for navigation
            keyboard: true,
            // Enable the slide overview mode
            overview: true,
            // Vertical centering of slides
            center: true,
            // Enables touch navigation on devices with touch input
            touch: true,
            // Loop the presentation
            loop: false,
            // Change the presentation direction to be RTL
            rtl: false,
            // Randomizes the order of slides each time the presentation loads
            shuffle: false,
            // Turns fragments on and off globally
            fragments: true,
            // Flags if the presentation is running in an embedded mode,
            // i.e. contained within a limited portion of the screen
            embedded: false,
            // Flags if we should show a help overlay when the questionmark
            // key is pressed
            help: true,
            // Flags if speaker notes should be visible to all viewers
            showNotes: false,
            // Global override for autoplaying embedded media (video/audio/iframe)
            // - null: Media will only autoplay if data-autoplay is present
            // - true: All media will autoplay, regardless of individual setting
            // - false: No media will autoplay, regardless of individual setting
            autoPlayMedia: null,
            // Number of milliseconds between automatically proceeding to the
            // next slide, disabled when set to 0, this value can be overwritten
            // by using a data-autoslide attribute on your slides
            autoSlide: 0,
            // Stop auto-sliding after user input
            autoSlideStoppable: true,
            // Use this method for navigation when auto-sliding
            autoSlideMethod: Reveal.navigateNext,
            // Enable slide navigation via mouse wheel
            mouseWheel: false,
            // Hides the address bar on mobile devices
            hideAddressBar: true,
            // Opens links in an iframe preview overlay
            // Add `data-preview-link` and `data-preview-link="false"` to customise each link
            // individually
            previewLinks: false,
            // Transition style
            transition: 'slide',
            // Transition speed
            transitionSpeed: 'default',
            // Transition style for full page slide backgrounds
            backgroundTransition: 'fade',
            // Number of slides away from the current that are visible
            viewDistance: 3,
            // Parallax background image
            parallaxBackgroundImage: '',
            // Parallax background size
            parallaxBackgroundSize: '',
            // Number of pixels to move the parallax background per slide
            // - Calculated automatically unless specified
            // - Set to 0 to disable movement along an axis
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            // The display mode that will be used to show slides
            display: 'block'
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/pages/home/home.html"*/'<ion-content padding>\n    <div class="reveal">\n\n        <div class="slides">\n\n            <section data-transition="slide">\n                <section>\n                    <about></about>\n                </section>\n            </section>\n            <section data-transition="fade-in slide-out">\n                <competences></competences>\n            </section>\n            <section data-transition="zoom">\n                <hobbies></hobbies>\n            </section>\n            <section data-transition="slide-in fade-out">\n                <links></links>\n            </section>\n            <section>\n                <projects></projects>\n            </section>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_projects_projects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_links_links__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hobbies_hobbies__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_competences_competences__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__components_projects_projects__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_links_links__["a" /* LinksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_hobbies_hobbies__["a" /* HobbiesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_competences_competences__["a" /* CompetencesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__components_projects_projects__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_links_links__["a" /* LinksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_hobbies_hobbies__["a" /* HobbiesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_competences_competences__["a" /* CompetencesComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'projects',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/components/projects/projects.html"*/'<!-- Generated template for the ProjectsComponent component -->\n<div>\n    <h1>Mes projects</h1>\n    <ul>\n        <li>Restaurant App</li>\n        <li>School.io</li>\n        <li>LocalSocial Network</li>\n        <li>Assiganme Project</li>\n        <li>...</li>\n    </ul>\n</div>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/components/projects/projects.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the LinksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'links',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/components/links/links.html"*/'<!-- Generated template for the ProjectsComponent component -->\n<div>\n    Mes contacts <br> <br> <br> Lomé: <a href="tel:+22899101225">+228 99 10 12 25</a> <br> Cotonou: <a href="tel:+22995982263">+229 95 98 22 63</a> <br> Email: <a href="mailto:andredegbe@gmail.com">andredegbe@gmail.com</a> <br> LinkedIn: <a href="https://www.linkedin.com/in/andre-degbe-33b569144/"\n        target="_blank">https://www.linkedin.com/in/andre-degbe-33b569144/</a> <br> Github: <a href="https://github.com/developerandre" target="_blank">https://github.com/developerandre</a>\n</div>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/components/links/links.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());

//# sourceMappingURL=links.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HobbiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HobbiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hobbies',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/components/hobbies/hobbies.html"*/'<!-- Generated template for the ProjectsComponent component -->\n<div>\n    <h6>Mes loisirs</h6>\n    <div class="notes">\n        <ul>\n            <li>Voyages</li>\n            <li>Sports</li>\n            <li>Bricolages</li>\n        </ul>\n    </div>\n</div>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/components/hobbies/hobbies.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());

//# sourceMappingURL=hobbies.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.year = new Date().getFullYear() - 2014;
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/components/about/about.html"*/'<!-- Generated template for the ProjectsComponent component -->\n<div>\n    <h2>A propos</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n                <div class="avatar">\n                    <img src="assets/imgs/pp.jpg" alt="">\n                </div>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n                <section>\n                    <p>Andre DEGBE</p>\n                    <p class="fragment" data-fragment-index="1">\n                        Développeur web et mobile\n                    </p>\n                    <p class="fragment" data-fragment-index="2">{{year}} ans d\'expérience</p>\n                    <p class="fragment" data-fragment-index="3">andredeveloper, my dev code</p>\n                </section>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</div>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/components/about/about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CompetencesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CompetencesComponent = /** @class */ (function () {
    function CompetencesComponent() {
    }
    CompetencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'competences',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/mySite/src/components/competences/competences.html"*/'<!-- Generated template for the ProjectsComponent component -->\n<div>\n    <h6>Mes compétences</h6>\n    <aside>\n        Mes services de freelance fiables et de qualité (Développement\n        <u>full-stack</u>,\n        <u>développement mobile</u> et\n        <u>bureau</u> ). Mes compétences techniques en un mot:\n        <a>#JavaScript</a>,\n        <a>#Angular</a>,\n        <a>#Electron</a>,\n        <a>#NodeJS</a>,\n        <a>#MongoDB</a>,\n        <a>#Neo4J</a>,\n        <a>#Redis</a>,\n        <a>#Flutter</a>,\n        <a>#Ionic</a>\n        <span class="fragment">\n            et pas seulement. À propos de moi: J\'adore tout simplement le freelance à laquelle je dédie une période importante de ma vie. Mes principaux domaines de travail sont le développement web et mobile, mais je peux aussi travailler avec les bases de données\n            principalement NoSQL. Autre expérience: Plus de 2 ans en tant que développeur front-end.\n        </span>\n    </aside>\n</div>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/mySite/src/components/competences/competences.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CompetencesComponent);
    return CompetencesComponent;
}());

//# sourceMappingURL=competences.js.map

/***/ })

},[188]);
//# sourceMappingURL=main.js.map