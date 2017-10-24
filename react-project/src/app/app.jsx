import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  }
  handleEvent(){
    alert(this.props);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}

export default App;