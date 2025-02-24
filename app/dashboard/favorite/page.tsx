import { PokemonGrid2 } from '../../../pokemons/components/PokemonGrid2';


export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};
const FavoritePokemon = async() => {

  return (
    <div>
      <p className="text-4xl text- emerald-600 ">Pokemones favoritos</p>
      <PokemonGrid2 pokemons={[]} />

    </div>
    
  )
}

export default FavoritePokemon