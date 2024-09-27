import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super();
        this.state = {
            data: '',
        }
    }

    async fetchData(e) {
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({  
                "message": e.target.message.value})
        }
        try {
        const response = await fetch('http://localhost:3001/api/world', options);
        const d = await response.json();
        this.setState({data:d });
        console.log(d);
        
        } catch (error)   
    {
        console.error('Error fetching data:', error);
        }
    }



  render() {
    return (
      <>
        <h2>Post to Server:</h2>
        <form onSubmit={()=>{this.fetchData(event)}}>
            <input placeholder='type here' name='message'/>
            <input type='submit' value='submit'/>
        </form>
        <p>{this.state.data.message}</p>
      </>
    );
  }
}

export default Post