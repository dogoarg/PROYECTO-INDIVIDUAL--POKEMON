//importo los hooks q voy a usar de react
import React, { useState, useEffect } from "react";
//importo lasa action q voy a usar en este componente
import { getPokemons, filterPokemonsByTypes, getPokemontypes, filterCreated, orderByname } from "../actions";
import {Link} from 'react-router-dom'
//importo los hooks de react-redux 
import {useDispatch, useSelector} from "react-redux"
//importo los componentes q voy a usar
import Card from "./card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css'





export default function Home (){

    const dispatch = useDispatch()
    const allPokemons = useSelector ((state) => state.pokemons)     //useSELECTOR es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, 
    const [orden, setOrden]= useState('')
    const [ currentPage,setCurrentPage] = useState(1)
    const [pokemonsPerPage,setPokemonsPerPage] = useState(12)
    const indexOfLastPokemons = currentPage * pokemonsPerPage 
    const indexOfFirsttPokemons = indexOfLastPokemons - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirsttPokemons,indexOfLastPokemons)
    const allTypes = useSelector ((state) => state.pokemonstypes)

    const settingCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    

    useEffect (()=> {                               //useEffect(hook)permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.
        dispatch(getPokemons());
        dispatch(getPokemontypes());
        setCurrentPage(1)
    },[])

   

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    };

    function handleSort (e){                        // sirve para ordenar o redondear
        e.preventDefault();                        //preventdefault cualquier accion por defecto no ocurrira
        dispatch(orderByname(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleFilterTypes(e){      
        dispatch(filterPokemonsByTypes(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterCreated (e){
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }



    return (
       
        
        <div className="home-container">
         
            <Link to= '/create'className="crear-pokemon">crear pokemon</Link>
            <h1 className="pi-pokemon">PI POKEMON</h1>
            <div>
            <button onClick={e=> {handleClick(e)}}> 
                volver a cargar todos los pokemons
            </button>
            </div>
            <div>


                

            <select onChange={e => handleSort(e)}>    
                    
                    <option value= 'asc'>Ascendete</option>
                     <option value= 'dsc'>Descendente</option>
                     <option value='az'>A - Z</option>
                     <option value='za'>Z - A</option>
                  </select>
                  <select onChange={e => handleFilterTypes(e)}>
                  <option value= 'ALL'>todos</option>
                  {allTypes?.map((c)=> {
                     return (
                        <option value= {c.name}>{c.name}</option>
                     );
                 })}                  
                  </select>
                  
                  <select onChange={e => handleFilterCreated(e)}>
                      <option value= 'All'>todos</option>
                      <option value= 'created'>Creados</option>
                      <option value= 'api'>Existentes</option>                   
                 </select>
                 <SearchBar/>
                 <Paginado 
                 pokemosPerPage= {pokemonsPerPage}
                 allPokemons={allPokemons.length}
                 settingCurrentPage = {settingCurrentPage}
                 currentPage={currentPage}
                 />
                 <div className="containerCards">{ currentPokemons.length>0?
                 currentPokemons?.map((p)=> {
                     return (
                             <Link key={p.id} to={"/detail/" + p.id}>
                                 <Card name={p.name} image={p.img} tipos={p.tipos || p.types}  />
                             </Link>
                     );
                 })
                :
                <h5>No se encontraron pokemons con esas caracteristicas</h5>}
                </div>
            </div>
            
        </div>
    )
}
     


