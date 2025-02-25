import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonState {
  favorites:{[key:string]: SimplePokemon}
}


// const getInitialState = ( ) =>{
//   const favorites = localStorage.getItem('favorite-pokemons') ?? {}
//   return favorites
// }

const initialState: PokemonState = { 
  favorites:{}
}

const favoritePokemon = createSlice({
  name: "pokemons",
  initialState ,
  reducers: {
    toogleFavorites: (state, action: PayloadAction<SimplePokemon>) => {

      const pokemon = action.payload
      const { id } = pokemon

      if(!!state.favorites[id]) {
        delete state.favorites[id]
      }else{
        state.favorites[id] = pokemon 
      }
      // TODO: No se debe hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))
    
    }
  }
});

export const { toogleFavorites } = favoritePokemon.actions

export default favoritePokemon.reducer