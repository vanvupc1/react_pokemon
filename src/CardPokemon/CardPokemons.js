import React, { Component } from 'react'
import pokemondata from '../data/pokedex.json'
import ModalPokemon from './ModalPokemon'
import PokemonList from './PokemonList'

export default class CardPokemons extends Component {
    constructor(props){
        super(props)
        this.state={
            pokemon:pokemondata[0]
        }
    }
    pokemonDetail = (pokemon) =>{
        this.setState({
            pokemon:pokemon
        })
    }
    render() {
        return (
            <div className='container'>
                <PokemonList pokemondata = {pokemondata} pokemonDetail = {this.pokemonDetail}/>
                <ModalPokemon pokemon = {this.state.pokemon}/>
            </div>
        )
    }
}
