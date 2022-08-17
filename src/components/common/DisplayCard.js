import React, { useEffect, useState } from "react";

const DisplayCard = (props) => {
    console.log(props.word)
    return (
        <div className="card">
        <h2>PartOfSpeech:{props.word.meanings[0].partOfSpeech}</h2>
        <div className="line" ></div>
        <p>Meanings</p>
        <ol>
        {props.word.meanings[0].definitions.map((data,index)=>{
            if(index<9)
            return <li key={index}>{data.definition}</li>
            else
            return null;
        })}
        </ol>
    </div>

    );
}


export default DisplayCard;