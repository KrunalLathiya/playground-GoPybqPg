import React, { Component } from 'react';

class App1 extends Component {
  constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}

export default App1;