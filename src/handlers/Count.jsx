
import React, { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state =
     {
       count : 9
    }
    // this.handleInc =  this.handleInc.bind(this)
  }
  // do not mutate state directly
  handleInc = () => { 
    this.setState(
      { 
      count : this.state.count + 1
    }
    )
   
  }
  handleRes(){ 
    console.log(this.state.count)
    this.setState({count:9})
  }
  render() {
    return (
      <div>
        <h3 className="text-center">
            count -- 
            <span style = {{color: 'red',fontSize:'340px',marginLeft:'20px'}}>
                 { this.state.count}
            </span>
        </h3>
        <div className='space-x-4 text-center'>
          <button 
          onClick = {this.handleInc}
          className='border border-red-500 px-4 py-2 '>+</button>
          <button 
          onClick = { () => this.setState({count:this.state.count -1})}
          className='bg-indigo-700 text-gray-200 text-base px-4 py-2 '>-</button>
          <button 
          onClick ={this.handleRes.bind(this) }
          className='bg-pink-900 text-gray-200 text-base px-4 py-2 '>res</button>
          
          
        </div>
       
      </div>
    );
  }
}

