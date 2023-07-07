import styles from "./PokemonList.module.css";
import React, { FC } from "react";
import Link from "next/link";

export const PokemonList: React.FC<{ pokemons: any[] }> = ({ pokemons }) => {
  return (
    <div>
      <h1>Lista de todos los pokemon</h1>
      <div className={styles.pokemonListContainer}>
        {pokemons.map((pokemon: any, i) => (
          <PokemonCard pokemon={pokemon} i={i} />
        ))}
      </div>
    </div>
  );
};

export const PokemonCard: FC<{
  pokemon: any;
  i?: number;
  isFullPokemon?: boolean;
}> = ({ pokemon, i, isFullPokemon = false }) => {
  if (!isFullPokemon)
    return (
      <Link href={`/pokemon/${i! + 1}`} passHref>
        <div className={styles.pokemonCard}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i! + 1
            }.png`}
            alt=""
          />
          <p>{pokemon.name}</p>
        </div>
      </Link>
    );

  return (
    <Link href={`/pokemon/${pokemon.id}`} passHref>
      <div className={styles.pokemonCard}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
        />
        <p>{pokemon.name}</p>
      </div>
    </Link>
  );
};