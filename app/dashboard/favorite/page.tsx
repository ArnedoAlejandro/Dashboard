import Favorite from '@/pokemons/components/Favorite';


export const metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
};
const FavoritePokemon = async() => {


  return (
    <div>
      <p className="text-4xl text- emerald-600 ">Pokemones favoritos</p>
      <Favorite/>
    </div>
    
  )
}

export default FavoritePokemon