import axios from "axios";
import styles from "./PokemonList.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";


export const PokemonList: React.FC<{pokemons: any[] }> = ({pokemons}) => {
   
    return (
        <div>
            <h1>Lista de todos los pokemon</h1>
            <div className={styles.pokemonListContainer}>
                {pokemons.map((pokemon: any, i) => (
                    <Link href={`/pokemon/${i + 1}`} passHref>
                        <div className={styles.pokemonCard}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1
                                    }.png`}
                                alt=""
                            />
                            <p>{pokemon.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}; 

// 1. obtener los 151 pokemon
    // 2. guardar esos pokemon e un useState
    // 3. renderizar eoso pokemon de forma dinamica en nuestro html
    // 4. cuando hagamos click a un pokemon ir a la pagin de pokemon
