import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class pokemonlist extends Component {
    render() {
        const { pokemondata, pokemonDetail } = this.props
        return (
            <div style={{ width: 1200 }}>
                <Pokemon pokemondata={pokemondata} pokemonDetail={pokemonDetail} />
            </div>
        )
    }
}
