import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function add() {
	return 2 + 2;
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: []
		};
  }
  

  componentDidMount(){
    fetch("https://swapi.dev/api/people/").then(res => res.json()).then(data => this.setState({characters: data.results}))

  }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					{this.state.characters.map((el) => {
						return <h1 key={el.id}>{el.name}</h1>;
					})}
				</header>
			</div>
		);
	}
}

export default App;
