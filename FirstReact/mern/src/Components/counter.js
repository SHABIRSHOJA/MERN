import React, { Component } from "react";

export class counter extends Component{

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
                <button onMouseEnter={this.InrementCount}>increment to {count}</button>
            </div>
        );
    }
}

export default counter