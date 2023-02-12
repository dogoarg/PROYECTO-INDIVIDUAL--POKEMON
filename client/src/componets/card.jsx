import React from "react";

export default function Card({name, image, tipos}){
    console.log(tipos)
    return (
        <div className="cardPokemon">
            <h3>{name}</h3>
            <div>
                <h3>Tipos: {tipos.map(tipo => <span className="tipos">{tipo}</span>)}</h3>
            </div>
            <img src={image} alt="img not found" width="200px" height="250px"/>
        </div>
    );
}