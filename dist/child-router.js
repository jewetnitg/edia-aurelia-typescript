define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
            this.heading = 'Child Router';
        }
        ChildRouter.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return ChildRouter;
    }());
    exports.ChildRouter = ChildRouter;
});
//# sourceMappingURL=child-router.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7WUFDUyxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBWWxDLENBQUM7UUFUUSxxQ0FBZSxHQUF0QixVQUF1QixNQUEyQixFQUFFLE1BQWM7WUFDaEUsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFRLFFBQVEsRUFBRSxTQUFTLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUN6RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBVSxRQUFRLEVBQUUsT0FBTyxFQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtnQkFDOUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLElBQUksRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7YUFDL0csQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSxtQkFBVyxjQWF2QixDQUFBIn0=
