import React, { Component } from 'react';

class App2 extends Component {
  constructor(props){
    super(props);
  }
  handleEvent = () => {
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

export default App2;