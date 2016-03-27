System.register(["react", "react-dom", "./Counter", "redux", "react-redux"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_1, react_dom_1, Counter_1, redux_1, react_redux_1;
    var State, store, provider, __hotReload;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
            class State {
            }
            store = redux_1.createStore((state, action) => {
                switch (action.type) {
                    case "INCR":
                        return { counter: state.counter + action.by };
                    default: {
                        return state;
                    }
                }
            }, { counter: 0 });
            provider = (react_1.default.createElement(react_redux_1.Provider, {store: store}, 
                react_1.default.createElement(Counter_1.default, null)
            ));
            react_dom_1.default.render(provider, document.getElementById("react"));
            exports_1("__hotReload", __hotReload = true);
        }
    }
});
