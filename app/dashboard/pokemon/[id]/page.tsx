import { Pokemon } from "@/pokemons"


interface Props  {
  params  : {id : string}
}

const getPokemon = async (id : string) : Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())

  console.log(pokemon)
  return pokemon
  }


const PokemonPage = async ({params}: Props) => {

  const pokemon  = await getPokemon(params.id)


  return (
    <div>Pagina de pokemon pageeee {params.id}
      <p>{JSON.stringify(pokemon)}</p>
    </div>
  )
}

export default PokemonPage