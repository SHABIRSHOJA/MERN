import React, { Component } from "react";

import UpdatedComp from "./HigherOrder";
export class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }

    InrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        const { count } = this.state;
        return(
            <div>
                <button onMouseEnter={this.InrementCount}>{this.props.name} increment to {count}</button>
            </div>
        );
    }
}

export default UpdatedComp(Counter);