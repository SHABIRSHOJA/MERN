import React, {Component} from "react";
import bellA from "./bellA.png";
import bellB from "./bellB.png";
export class NewCopm extends Component{
    constructor(props){
        super(props);

        this.state = {

            message: "Subscrip to Elite Barray",
            sub: "Subscribe",
            imageURL: bellB
        }

    }

    styles = {
        fontstyle: "italic",
        color: "purple"
    };

    ButtonChange=()=>{
        this.setState({
            message: "Hit the bill icon to never miss the update",
            sub: "Subscribe"
        })
    }
    
    render(){
        return(
                <div className="App">
                    <h3 style={this.styles}>{this.state.message}</h3>
                    <button onClick={this.ButtonChange}>{this.state.sub}</button>
                    <p></p>

                    <image src={this.state.imageURL} alt=""></image>

                </div>
        );
    }
}

export default NewCopm;