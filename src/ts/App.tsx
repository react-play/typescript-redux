

import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import  { Provider, connect } from "react-redux";

class State {
    counter: number;
}

let store = createStore((state: State, action) => {
    switch (action.type) {
        case "INCR" :
            return { counter: state.counter + action.by };
        default: {
            return state;
        }
    }
}, { counter: 0 });

let provider =
    (
        <Provider store={store}>
            <Counter />
        </Provider>
    );

ReactDOM.render(provider, document.getElementById("react"));