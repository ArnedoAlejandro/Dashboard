
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"

const getPokemon = async (limit = 20 , offset = 0):Promise<SimplePokemon[]> =>{
  const results:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())
  
  const data = results.results.map((pokemon)=> ({
    id:pokemon.url.split('/').at(-2)!,
    name:pokemon.name
  }))

  return data

}

const PokemonApi = async () => {
  
  const  pokemons = await getPokemon(151)

  return (
    <>
      <span className="text-4xl p-2">Listado de pokemon estatico</span>
      
      <PokemonGrid pokemons={pokemons} />

    </>
  )
}

export default PokemonApi