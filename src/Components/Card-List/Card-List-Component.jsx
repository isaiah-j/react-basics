import React, { Component } from 'react';
import './Card-List-Styles.css';

import {Card} from "../Card/card.component"

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.characters.map((el) => {
				return <Card character={el} key={el._id}></Card>;
			})}
		</div>
	);
};
