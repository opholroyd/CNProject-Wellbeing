import React, { Component } from 'react';
import Time from './components/time';
import './App.css';

class App extends Component {
  state = {
    onDuty: false,
    timeIn: "",
    timeOut: ""
  }

   clockingHandler = async(time, onDuty) => {
    console.log(`the time is ${time}`)
    this.setState({onDuty: onDuty})
    console.log(`the onDuty is ${onDuty}`)
    if (onDuty === true) {
      await this.setState({timeIn: time})
      
    }
    else {
      await this.setState({timeOut: time})
    }
    console.log(this.state)
  };
  
  

  render() {
    return (
      <div className="App">
          <Time onDuty={this.state.onDuty} clockFunc={this.clockingHandler}/>
      </div>
    );
  }
}

export default App;
