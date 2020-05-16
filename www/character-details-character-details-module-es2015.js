(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ character?.name }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t\t<ion-button (click)=\"noStatusCharacter()\" *ngIf=\"isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-sharp\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"likeCharacter()\" *ngIf=\"!isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n            <ion-button (click)=\"noStatusCharacter()\" *ngIf=\"isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-sharp\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"dislikeCharacter()\" *ngIf=\"!isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-card *ngIf=\"character\" class=\"movie-card\">\n\t<ion-img style=\"align-items: center width: 250px; height: 250px;\"src=\"{{character.img}}\"></ion-img>\n    </ion-card>\n\n    <ion-card *ngIf=\"character\" class=\"movie-card\">\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n\t\t\tName: {{ character.name }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\n\t\t\tBirthday: {{ character.birthday }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n\t\t\tOccupation: {{ character.occupation }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"pulse-outline\" slot=\"start\"></ion-icon>\n\t\t\tStatus: {{ character.status }}\n\t\t</ion-item>\n\n        \t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\tAppearances in Season: {{ character.appearance }}\n\t\t</ion-item>\n\n        \t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"body-outline\" slot=\"start\"></ion-icon>\n\t\t\tPortrayed by: {{ character.portrayed }}\n\t\t</ion-item>\n\n        \t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"videocam-outline\" slot=\"start\"></ion-icon>\n\t\t\tSeries: {{ character.category }}\n\t\t</ion-item>\n        \n\t</ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n}\n\nion-card {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n  -webkit-text-fill-color: white;\n}\n\nion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTsgIFxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5pb24taWNvbntcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dis_like_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/(dis)like.service */ "./src/app/services/(dis)like.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, likeService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.likeService = likeService;
        this.isLiked = false;
        this.isDisliked = false;
        this.characterId = null;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
        this.likeService.isLikedCharacter(this.characterId).then(liked => {
            this.isLiked = liked;
        });
        this.likeService.isDislikedCharacter(this.characterId).then(disliked => {
            this.isDisliked = disliked;
        });
    }
    likeCharacter() {
        this.likeService.likeCharacter(this.characterId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }
    dislikeCharacter() {
        this.likeService.dislikeCharacter(this.characterId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }
    noStatusCharacter() {
        this.likeService.noStatusCharacter(this.characterId);
        this.isLiked = false;
        this.isDisliked = false;
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_dis_like_service__WEBPACK_IMPORTED_MODULE_1__["LikeService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_dis_like_service__WEBPACK_IMPORTED_MODULE_1__["LikeService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map