import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state =
       {
         count : 9
      }
    }
    // do not mutate state directly
    componentDidMount(){  
        console.log('component has mounted')
    
      this.timer  = setInterval(() => { 
            this.updatedTime()
        },100)
       
        setTimeout(() => { 
            clearInterval(this.timer)
        },10000)
        
     }
    componentWillUpdate(){
        console.log('component has updated')
     }
    componentWillUnmount(){
        console.log('component has unmounted')
         clearInterval(this.timer)    }
    updatedTime() { 
      this.setState(
        { 
        count: this.state.count +1
      })
    }
    
  render() {
    return (
      <div>
        <h3 className="text-center">
            count -- 
            <span className="text-danger">
                 { this.state.count}
            </span>
        </h3>
       
      </div>
    );
  }
}
