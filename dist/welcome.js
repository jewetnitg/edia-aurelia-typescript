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
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            this.previousValue = this.fullName;
            alert("Welcome, " + this.fullName + "!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJ3ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRUE7UUFBQTtZQUNFLFlBQU8sR0FBRyx3Q0FBd0MsQ0FBQztZQUNuRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBc0JoQyxDQUFDO1FBZkMsc0JBQUksNkJBQVE7aUJBQVo7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVELHdCQUFNLEdBQU47WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFbkMsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELCtCQUFhLEdBQWI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7UUFmRDtZQUFDLGdDQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7K0NBQUE7UUFnQnhDLGNBQUM7SUFBRCxDQUFDLEFBMUJELElBMEJDO0lBMUJZLGVBQU8sVUEwQm5CLENBQUE7SUFFRDtRQUFBO1FBSUEsQ0FBQztRQUhDLG9DQUFNLEdBQU4sVUFBTyxLQUFLO1lBQ1YsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBbUIsc0JBSS9CLENBQUEifQ==
