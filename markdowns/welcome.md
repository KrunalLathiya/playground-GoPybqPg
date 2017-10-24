# ReactJS Constructor Tutorial!

One of the best use of constructor is to define the initial state of the component, which is very useful for any react.js application. We can also bind any event that occurs in our component in the constructor like the following.

```javascript
constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
```
In above’s example, the event will fire after the user has clicked the button or keyup, blur or any other event and then we need to set up the context to its parent and not the child context, so we are binding this to parent. Let me take one example to simplify this explanation.

## Example: 1

```javascript
// App.js

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
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

export default App;
```

@[Sample React App Boilerplate]({"stubs": ["src/app/app.jsx", "src/main.js"], "command": "./run.sh"})