var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var WidthCustomAttribute = (function () {
        function WidthCustomAttribute(element) {
            this.element = element;
            this.width = 50;
            this.height = 50;
            this.element.style.width = this.width + "px";
            this.element.style.height = this.height + "px";
        }
        WidthCustomAttribute.prototype.bind = function () {
        };
        WidthCustomAttribute.prototype.heightChanged = function (newValue, oldValue) {
            console.log('height');
            this.element.style.height = newValue + "px";
        };
        WidthCustomAttribute.prototype.widthChanged = function (newValue, oldValue) {
            this.element.style.width = newValue + "px";
        };
        WidthCustomAttribute.prototype.propertyChanged = function (name, newValue, oldValue) {
            switch (name) {
                case 'height':
                    console.log('height2');
                    this.element.style.height = newValue + "px";
                    break;
                case 'width':
                    this.element.style.width = newValue + "px";
                    break;
                default:
                    this.element.style[name] = value;
                    break;
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], WidthCustomAttribute.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], WidthCustomAttribute.prototype, "height", void 0);
        WidthCustomAttribute = __decorate([
            aurelia_framework_1.customAttribute('sizeelement'),
            aurelia_framework_1.autoinject,
            aurelia_framework_1.dynamicOptions, 
            __metadata('design:paramtypes', [Element])
        ], WidthCustomAttribute);
        return WidthCustomAttribute;
    }());
    exports.WidthCustomAttribute = WidthCustomAttribute;
});
//# sourceMappingURL=size.js.map