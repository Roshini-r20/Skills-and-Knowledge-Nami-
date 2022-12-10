// The state is an initial value set for a component, which is used for interactivity.
// Syntax:

//  constructor() {
//      super();
// 	 this.state = { counter: 1 };
// }

import './App.css';
import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state= {
//       quantity:0,
//       price:0
//     }
//   }
//   update=()=> {
//     this.setState({quantity:5})
//     if(this.state.quantity==5)
//     this.setState({price:2000-233})
  
// }
// render() {
//   return( <>
//   <h1>{this.state.quantity}</h1>
//   <h1>{this.state.price}</h1>
//     <button onClick={this.update}>Update</button>
//   </> )}


//useState()

function App()
{
  const [name,  setName]=useState("Jill")
  const handlechange =()=>{
    setName("JAck")
  }
  return ( <div>
    Your Name is: {name}<br/> 
    <button onClick={handlechange}>Change</button>
    </div>
  )
}

export default App;
