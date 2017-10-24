# ReactJS Constructor Tutorial!

One of the best use of constructor is to define the initial state of the component, which is very useful for any react.js application. We can also bind any event that occurs in our component in the constructor like the following.

```javascript
constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
```
In above’s example, the event will fire after the user has clicked the button or keyup, blur or any other event and then we need to set up the context to its parent and not the child context, so we are binding this to parent. Let me take one example to simplify this explanation.

## Example

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

Now, if you run this and see in the console, then it says like this.
<b>Uncaught TypeError: Cannot read property 'props' of undefined</b>

That means it can not find this as a global pointer or keyword or object to the component, it finds as that function property this, not a component property.


So, we need a solution to that.
Make one new file, called <b>app1.jsx</b> in the <b>src</b> folder and put the code like this.

```javascript
// app1.jsx
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
```
Now, include this file in the <b>main.js</b>.

```javascript
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import App1 from './app/app1.jsx';

ReactDOM.render(<App />, document.getElementById('App'));

```
And in above code, just replace the following line.
```javascript
ReactDOM.render(<App />, document.getElementById('App'));
```
with this line
```javascript
ReactDOM.render(<App1 />, document.getElementById('App1'));
```
Now, again run, you can see an empty object in the console. So now, this is pointing to the global context of the React component.

Following example will not working because, I have not use <b>app1.jsx</b>. You can use <b>app1.jsx<b/> and modify the <b>main.js</b> as I have mentioned earlier.

Then see in the console, you can find empty object, if you got any error, then please check again the code, you might not have imported <b>app1.jsx</b> in the <b>main.js</b>.

So, we can achieve two purposes with the constructor function.

1. Set the initial state of the component
2. Point the global context of this keyword.

@[Sample React App Boilerplate]({"stubs": ["src/app/app.jsx", "src/app/app1.jsx", "src/main.js", "src/index.tpl.html"], "command": "./run.sh"})