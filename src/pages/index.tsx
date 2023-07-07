import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import { PokemonList } from "./components/PokemonList";
import axios from "axios";

export default function Home(ctx: any) {
  return (
    <>
    <Navbar numeros={ctx.randomNumbers}/>
    <PokemonList pokemons={ctx.pokemonList}/>
      <h1 className={styles.title}>Pagina principal</h1>
    </>
  )
}

//lista de pokemon
//pokemon aleatorios del navbar
//nextssr
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
);

const randomNumber1 = (Math.random() * 151).toFixed(0)
const randomNumber2 = (Math.random() * 151).toFixed(0)

  return {
    props: {
      pokemonList: data.results,
      randomNumbers: [randomNumber1, randomNumber2],
    }
  }
}