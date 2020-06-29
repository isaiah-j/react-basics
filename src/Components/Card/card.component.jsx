import React from "react"

import "./card-styles.css"

export const Card = props => {
    return (
        <div className="card-container">
            <img alt="avatar character" src={props.character.photoUrl}></img>
            <div className="card-content">
                <h1>{props.character.name}</h1>
                <h3>Allies</h3>
                <p>{props.character.allies}</p>
            </div>
        </div>
    )
}

