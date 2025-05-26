import { useEffect, useState } from "react";
import Card from "../components/Card";
import Overlay from "../components/Overlay";
import Detalhes from "../components/Detalhes";

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [overlay, setOverlay] = useState(false)
    const [id, setId] = useState(1)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results);
                
            });
    }, []);

    function mostrarDetalhes(index) {
        setOverlay(true)
        setId(index+1)        
    }
    function fecharOverlay() {
        setOverlay(false)
    }

    useEffect(() => {
        if (overlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [overlay]);

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
                            prop={() => mostrarDetalhes(index)}
                        />
                    ))
                }
            </ul>
            <Overlay
                className={`${overlay ? "" : "hidden"}`}
                prop={() => fecharOverlay()}
            />
            <Detalhes
                className={`${overlay ? "" : "hidden"}`}
                id={id}
            />
        </main>
    );
}

export default Home;