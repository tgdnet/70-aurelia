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
    var Welcome = (function () {
        function Welcome(obs) {
            this.obs = obs;
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
            this.param = "";
            this.obs.getObserver(this, 'firstName')
                .subscribe(this.onChange);
        }
        Welcome.prototype.activate = function (route, routeConfig) {
            this.param = route.id || null;
            routeConfig.navModel.setTitle(this.param);
        };
        Welcome.prototype.onChange = function (nv, ov) {
            console.log(nv);
        };
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                console.log(new Date());
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            console.log(arguments);
            this.previousValue = this.fullName;
            var x = 1;
            alert("Welcome, " + this.fullName + " + " + (x + 1) + "!");
        };
        Welcome.prototype.canDeactivate = function () {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        };
        __decorate([
            aurelia_framework_1.computedFrom('firstName', 'lastName'), 
            __metadata('design:type', Object)
        ], Welcome.prototype, "fullName", null);
        Welcome = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_framework_1.ObserverLocator])
        ], Welcome);
        return Welcome;
    }());
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    }());
    exports.UpperValueConverter = UpperValueConverter;
});
//# sourceMappingURL=welcome.js.map