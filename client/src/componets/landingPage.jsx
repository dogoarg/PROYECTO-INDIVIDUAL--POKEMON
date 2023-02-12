import React from "react";
import {Link} from "react-router-dom"
import './landingPage.css'



export default function LandingPage(){
    return(
        <div className="LandingPage">
            <h1 className="bienvenido">Bienvenido a mi pagina</h1>
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>


        </div>
    )
}