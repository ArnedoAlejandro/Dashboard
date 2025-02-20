// import Image from 'next/image'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import PokemonCard from './PokemonCard';


interface Props {
  pokemons: SimplePokemon[]
}



export const PokemonGrid = ({pokemons}:Props) => {

  return (
    <div className="w-full p-4 grid grid-cols-4 gap-5">
    
 
    {pokemons.map((pokemon) => (
        <PokemonCard  key={pokemon.id}  pokemon={pokemon}/>
      ))}
     </div>

  )
}
