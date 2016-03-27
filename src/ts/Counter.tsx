/// <reference path="../../typings/browser.d.ts"/>

import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    incr: () => {
        dispatch({ type: "INCR", by: 1});
    },
    decr: () => {
        dispatch({ type: "INCR", by: -1});
    }
});

const mapStateToProps = (state) => state;

class Counter extends React.Component<any, any> {

    render() {
        return (
            <div>
                <div>
                    <p><label>Counter: </label> #{this.props.counter} </p>
                    <button onClick={e => this.props.incr() }>Increment</button>
                    <button onClick={e => this.props.decr() }>Decrement</button>
                </div>
            </div>
        );
    }
}


export default (connect(mapStateToProps, mapDispatchToProps)(Counter));
export let __hotReload = true;
