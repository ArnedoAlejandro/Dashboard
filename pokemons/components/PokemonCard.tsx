"use client";
import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toogleFavorites } from "@/store/pokemon/favoritePokemon";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const favorito = useAppSelector((state) => state.pokemons.favorites[id] !== undefined);
  const dispach = useAppDispatch()

  const onToggle = () => {
    dispach(toogleFavorites(pokemon))
  }

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col items-center justify-centertext-center p-6 bg-gray-800 border-b">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt="Vercel Logo"
              width={100}
              height={24}
              priority={false}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemon/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Mas informacion
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div  
              onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
              <div className="text-red-600 flex  items-center">
                {favorito ? <IoHeart /> : <IoHeartOutline />}

                <div className="pl-3">
                  {favorito ? (
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      Favorito
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      No es favorito
                    </p>
                  )}

                  <p className="text-xs text-gray-500">View your campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
