
import {  PokemonsResponse, SimplePokemon } from "@/pokemons"
import { PokemonGrid2 } from '../../../pokemons/components/PokemonGrid2';


export const metadata = {
 title: 'Pokemon Name',
 description: 'Pokemon Name',
};

const getPokemon2 = async (limit = 20 , offset = 0):Promise<SimplePokemon[]> =>{
  const results:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())
  
  const data = results.results.map((pokemon)=> ({
    id:pokemon.url.split('/').at(-2)!,
    name:pokemon.name
  }))

  return data

}
const PokemonPage2 = async() => {

  const pokemons = await getPokemon2(151)

  return (
    <div>
      <p>PokemonPage2</p>
      <PokemonGrid2 pokemons={pokemons} />

    </div>
    
  )
}

export default PokemonPage2