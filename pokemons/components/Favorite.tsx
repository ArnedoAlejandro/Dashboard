"use client"
import { useState } from 'react'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { IoHammerOutline } from 'react-icons/io5'

const Favorite = () => {

  const favoritePokemon = useAppSelector(state => Object.values(state.pokemons.favorites))
  const [ pokemons, setPokemons ]= useState(favoritePokemon)


  return (   
    <>
    {
      pokemons.length === 0 
      ? 
      
      <PokemonNotFound/>
      :
      <PokemonGrid pokemons= {pokemons}/>
    }
    </>
  )
}

export default Favorite

const PokemonNotFound = ()=>{


  return(
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <IoHammerOutline size={150}/>
        No se encontraron poquemons favoritos</div>
    </>
  )
}


