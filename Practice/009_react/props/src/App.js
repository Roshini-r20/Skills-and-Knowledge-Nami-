import React from 'react';
import Child from'./Child'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      name: 'Roshini'
    }
  }
  update=(value)=> {
    let newValue = value;
    this.setState({name:newValue})
  }
  render(){
    return ( <React.Fragment>
      <h1>{this.state.name}</h1><br/><br/>
      <Child nameValue={this.state.name} update={this.update}/>
    </React.Fragment>)
  }
}

export default App;
