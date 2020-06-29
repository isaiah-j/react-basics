import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/Card-List/Card-List-Component';

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

	componentDidMount() {
		fetch("https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=497").then(res => res.json()).then(data => this.setState({characters: data}))
			
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<CardList characters={this.state.characters}>
						
					</CardList>
				</header>
			</div>
		);
	}
}

export default App;
