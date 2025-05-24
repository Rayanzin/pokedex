import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results);
            });
    }, []);

    return (
        <main className="w-full bg-white flex justify-center py-[50px] overflow-hidden">
            <ul className="grid grid-cols-4 gap-[30px]">
                {
                    pokemons.map((pokemon, index) => (
                        <Card
                            key={index}
                            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            num={index + 1}
                            name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
                        />
                    ))
                }
            </ul>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#11111190] " ></div>
            <div className="absolute w-[700px] h-[800px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white hidden">

            </div>
        </main>
    );
}

export default Home;