import React, { Component } from 'react';

class HelloMessage extends Component {
    constructor(){
        super();
        this.state = {
            data: '',
        }
    }


    componentDidMount(){
        this.fetchData();
    }

    async fetchData() {
      
        try {
        const response = await fetch('http://localhost:3001/api/hello');
        const d = await response.json();
           this.setState({data:d });
        } catch (error)   
    {
        console.error('Error fetching data:', error);
        }
    }

  render() {
    return (
      <>
        <h4>{this.state.data.message}</h4>
      </>
    );
  }
}

export default HelloMessage