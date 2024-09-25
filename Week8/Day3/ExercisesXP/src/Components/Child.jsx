import React, {Component} from "react";

class Child extends Component{

    constructor(){
        super();
    }



    deleteHeader = () => {
        this.setState({show: false});
    }

    render(){
        if (this.state.show){
        return(
            <>
            <h2>Hello World!</h2>
            <button onClick={this.deleteHeader}>Delete Header</button>
            </>
        )
    }}
}

export default Child;