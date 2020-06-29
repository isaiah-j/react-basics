import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/Card-List/Card-List-Component';

function add() {
	return 2 + 2;
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }


class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=400')
			.then((res) => res.json())
			.then((data) => this.setState({ characters: data }));
	}
	

	render() {
		let {characters, searchField} = this.state;
		shuffle(characters)

		const filteredCharacters = characters.filter((el) => {
			let name = el.name.toLowerCase()
			return name.includes(searchField.toLowerCase())

		})

		return (
			<div className="App">
				<header className="App-header">
					<input
						type="search"
						placeholder="Search characters"
						onChange={(e) => this.setState({ searchField: e.target.value },)}
					/>
					<CardList characters={filteredCharacters} />
				</header>
			</div>
		);
	}
}

export default App;
