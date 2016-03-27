System.register(["react", "react-redux"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_1, react_redux_1;
    var mapDispatchToProps, mapStateToProps, Counter, __hotReload;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
            mapDispatchToProps = (dispatch) => ({
                incr: () => {
                    dispatch({ type: "INCR", by: 1 });
                },
                decr: () => {
                    dispatch({ type: "INCR", by: -1 });
                }
            });
            mapStateToProps = (state) => state;
            class Counter extends react_1.default.Component {
                render() {
                    return (react_1.default.createElement("div", null, 
                        react_1.default.createElement("div", null, 
                            react_1.default.createElement("p", null, 
                                react_1.default.createElement("label", null, "Counter: "), 
                                " #", 
                                this.props.counter, 
                                " "), 
                            react_1.default.createElement("button", {onClick: e => this.props.incr()}, "Increment"), 
                            react_1.default.createElement("button", {onClick: e => this.props.decr()}, "Decrement"))
                    ));
                }
            }
            exports_1("default",(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter)));
            exports_1("__hotReload", __hotReload = true);
        }
    }
});
