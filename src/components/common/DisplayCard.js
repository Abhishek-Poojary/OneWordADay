import React, { useEffect, useState } from "react";

const DisplayCard = (props) => {

    return (
        <div className="card">
            <h2><span>Word</span>: {props.word.word}</h2>
            <div className="line" ></div>
            <h2><span>Part Of Speech</span>: {props.word.meanings[0].partOfSpeech}</h2>
            <p>Meanings</p>
            <ol>
                {props.word.meanings[0].definitions.map((data, index) => {
                    return <li key={index}>{data.definition}</li>
                })}
            </ol>
        </div>

    );
}


export default DisplayCard;