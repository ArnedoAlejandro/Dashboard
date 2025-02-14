import Image from "next/image"
import { PokemonsResponse, SimplePokemon } from "@/pokemons"

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
    <div className="w-full p-4 grid grid-cols-3 gap-5">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="flex flex-col gap-2 h-56 w-full items-center justify-center p-2 border-2 rounded-md shadow-md">

          <span>{pokemon.name}</span>
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="Vercel Logo" width={100} height={24}  />
        
        </div>
        
      ))}
      
    </div>
  )
}

export default PokemonApi