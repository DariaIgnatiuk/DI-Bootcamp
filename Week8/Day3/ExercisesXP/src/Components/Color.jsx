import React, {Component} from "react";

class Color extends Component{
    
    constructor(){
        super();
        this.state = {
            color: 'red',
            show: true,
        }
        
    }

    shouldComponentUpdate = () => {return true}

    componentDidUpdate = () => {
        // this.setState({color: 'yellow'});
        console.log('after update');
        
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate")
    }

    changeColor = () =>{
        this.setState({color: 'blue'});
    }

    componentWillUnmount = () => {
        console.log('unmount');
        console.log(this.state.show);
        
        
        alert("The component named Header is about to be unmounted.");
    }

    deleteHeader = () => {
        this.setState({show: false});
    }

    render() {
        return (
          <>
            {this.state.show && (
              <>
                <h2>My Favorite Color is <i>{this.state.color}</i></h2>
                <button onClick={this.changeColor}>Change Color</button>
                <br />
                <div>
                  <Child />
                </div>
                <button onClick={this.deleteHeader}>Delete Header</button>
              </>
            )}
          </>
        );
      }

}


class Child extends Component{

    constructor(){
        super();
    }

    componentWillUnmount = () => {
        alert("The component named Header is about to be unmounted.");
    }
    render(){
        return(
            <>
            <h2>Hello World!</h2>
            </>
        )
    }
}


export default Color;