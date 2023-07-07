import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import { PokemonCard, PokemonList } from "./components/PokemonList";
import axios from "axios";

export default function Home(ctx: any) {
  const [input, setInput] = useState("");
  const [searchPokemonInfo, setSearchPokemonInfo] = useState<any>(null);
  const [error, setError] = useState(false);

  const getPokemonByName = async (name: string) => {
    if (name.length <= 2) {
      setSearchPokemonInfo(null);
      setError(false);
    }
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setSearchPokemonInfo(data);
      setError(false);
    } catch (error) {
      console.log(error);
      setSearchPokemonInfo(null);
      setError(true);
    }
  };

  useEffect(() => {
    // llamar a la api de pokemon por el nombre del input
    // si existe un pokemon con ese nombre renderizarlo
    // si no, mostrar un error de que no existe o algo ha salido mal
    getPokemonByName(input);
  }, [input]);

  return (
    <>
      <Navbar numeros={ctx.randomNumbers} />
      <div>
        <h3>Encuentra a tu pokemon favorito:</h3>
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {error && <p className={styles.errorText}>Ese pokemon no existe</p>}
        {searchPokemonInfo && input.length > 2 && (
          <PokemonCard pokemon={searchPokemonInfo} isFullPokemon />
        )}
      </div>
      <PokemonList pokemons={ctx.pokemonList} />
      <h1 className={styles.title}>Pagina principal</h1>
    </>
  );
}

// lista de pokemon
// pokemon aleatorios del navbar
// nextssr
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  );

  const randomNumber1 = (Math.random() * 151).toFixed(0);
  const randomNumber2 = (Math.random() * 151).toFixed(0);

  return {
    props: {
      pokemonList: data.results,
      randomNumbers: [randomNumber1, randomNumber2],
    },
  };
};