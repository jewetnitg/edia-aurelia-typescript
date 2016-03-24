define(["require", "exports", 'es6-promise', 'src/users'], function (require, exports, es6_promise_1, users_1) {
    "use strict";
    var HttpStub = (function () {
        function HttpStub() {
        }
        HttpStub.prototype.fetch = function (url) {
            var _this = this;
            return new es6_promise_1.Promise(function (resolve) {
                resolve({ json: function () { return _this.items; } });
            });
        };
        HttpStub.prototype.configure = function (func) { };
        return HttpStub;
    }());
    function createHttpStub() {
        return new HttpStub();
    }
    describe('the Users module', function () {
        it('sets fetch response to users', function (done) {
            var http = createHttpStub(), sut = new users_1.Users(http), itemStubs = [1], itemFake = [2];
            http.items = itemStubs;
            sut.activate().then(function () {
                expect(sut.users).toBe(itemStubs);
                expect(sut.users).not.toBe(itemFake);
                done();
            });
        });
    });
});
//# sourceMappingURL=users.spec.js.map