import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function add(){
  return 2+2
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      string: "Isaiah"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is my sexy h1</h1>
          <p onClick={() => this.setState({string: "Daniel"})}>
            Hello, my name is {add()}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
