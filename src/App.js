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
      characters: [
        {name: "Aang", id: 1},
        {name: "Katara", id: 2},
        {name: "Sokka" ,id: 3},
        {name: "Zuko", id: 4},

      ]
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.characters.map(el => {
            return <h1 key={el.id}>{el.name}</h1>
          })}

     
        </header>
      </div>
    );
  }
}


export default App;
