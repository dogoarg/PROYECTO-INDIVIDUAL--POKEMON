import React, {useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {postPokemon,getPokemontypes } from "../actions/index"
import { useDispatch, useSelector } from 'react-redux';