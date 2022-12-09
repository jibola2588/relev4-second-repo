import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: ''
      }
    }
    handleForm = (e) => { 
        e.preventDefault();
       console.log(this.state)
       this.setState({ 
        username: '',
        password: ''
       })

    }
    
  render() {
    return (
      <div className="mx-w-xl mx-auto shadow mx-4 p-4">
        <h3 className="text-gray-700 text-lg text-center">Controlled form</h3>
        <form 
        onSubmit = {this.handleForm}
        className='space-y-3' >
           <div>
           <label>Username : </label>
            <input 
            value= {this.state.username}
            onChange = {(e) => this.setState({username:e.target.value})}
            type="text" className=" border border-indigo-500 py-2 px-4 rounded-md w-full" />
           </div>
           <div>
           <label>Password: </label>
            <input 
            value= {this.state.password}
            onChange = {(e) => this.setState({...this.state,password:e.target.value})}
            type="password" className=" border border-indigo-500 py-2 px-4 rounded-md w-full" />
           </div>
           <div>
             <button
             type='submit'
             className="bg-indigo-700 font-bold text-white py-2 px-3 text-sm w-full text-center rounded-md cursor-pointer hover:bg-indigo-900"
             >submit</button> 
             
           </div>
        </form>
      </div>
    );
  }
}

