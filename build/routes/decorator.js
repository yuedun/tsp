"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let Route = class Route {
    constructor(greet) {
        this.greeting = greet;
    }
    default() {
        console.log("default:", this.greeting);
    }
};
__decorate([
    route("hello"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Route.prototype, "default", null);
Route = __decorate([
    controller(""),
    __metadata("design:paramtypes", [String])
], Route);
function route(name) {
    return function (target, key, desc) {
        var method = desc.value;
        console.log('>>>>method:', method);
        desc.value = function () {
            console.log("这才是函数执行时输出");
            method.apply(this);
        };
    };
}
function controller(name) {
    return (target) => {
    };
}
new Route("开始执行").default();
