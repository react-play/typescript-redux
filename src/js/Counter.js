System.register(["react", "react-redux"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, react_redux_1;
    var mapDispatchToProps, mapStateToProps, Counter;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
            mapDispatchToProps = function (dispatch) { return ({
                incr: function () {
                    dispatch({ type: "INCR", by: 1 });
                },
                decr: function () {
                    dispatch({ type: "INCR", by: -1 });
                }
            }); };
            mapStateToProps = function (state) { return state; };
            Counter = (function (_super) {
                __extends(Counter, _super);
                function Counter() {
                    _super.apply(this, arguments);
                }
                Counter.prototype.render = function () {
                    var _this = this;
                    return (react_1.default.createElement("div", null, 
                        react_1.default.createElement("div", null, 
                            react_1.default.createElement("p", null, 
                                react_1.default.createElement("label", null, "Counter: "), 
                                " #", 
                                this.props.counter, 
                                " "), 
                            react_1.default.createElement("button", {onClick: function (e) { return _this.props.incr(); }}, "Increment"), 
                            react_1.default.createElement("button", {onClick: function (e) { return _this.props.decr(); }}, "Decrement"))
                    ));
                };
                return Counter;
            }(react_1.default.Component));
            exports_1("default",(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter)));
        }
    }
});
