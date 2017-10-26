"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.wolves = 0;
        this.gender = 'f';
        this.fly = true;
        this.logo = 'https://angular.io/assets/images/logos/angular/angular.png';
        this.count = 3;
        this.heroes = ['Magneta', 'Celeritas', 'Dynama'];
    }
    AppComponent.prototype.inc = function (i) {
        this.wolves = Math.min(5, Math.max(0, this.wolves + i));
    };
    AppComponent.prototype.male = function () { this.gender = 'm'; };
    AppComponent.prototype.female = function () { this.gender = 'f'; };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map