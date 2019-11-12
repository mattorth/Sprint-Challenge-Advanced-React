import React from "react";

export default function PlayerCard(props) {
    return (
        <div>
            <h1>{props.info.name}</h1>
            <p>Searches: {props.info.searches}</p>
        </div>
    )
}