import { useEffect, useState } from "react";

const Detalhes = ({ className = "", id }) => {

    const [pokemon, setPokemon] = useState()

    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);
            });
    }, [url]);

    console.log(pokemon ? pokemon : "carregando...");

    return (
        <div className={`fixed top-[50vh] w-[700px] h-[800px] translate-y-[-50%] z-20 ${className} bg-red-700 flex items-center p-[20px] pt-[50px] rounded-2xl flex-col gap-[10px] shadow-[5px_5px_15px] shadow-[#00000030] border-2 border-[#111]`}>
            <div className="w-[80%] h-[50%] bg-[#aaa] flex justify-center items-center rounded-2xl border-2 border-[#111]">
                <img className={`w-full h-full object-contain `} src={`https://img.pokemondb.net/sprites/home/normal/${pokemon ? pokemon.name : ""}.png`} alt={`${pokemon ? pokemon.name : "carregando..."}`}></img>
            </div>
            <h1 className="text-5xl bg-[#333] p-[10px] rounded-2xl border-1 border-[#111] shadow-[5px_5px_15px] shadow-[#00000030] text-white font-bold">{pokemon ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase() : "Carregando..."}</h1>
            <h2 className="text-2xl font-bold ">Número: #{id}</h2>
            <h2 className="text-2xl font-bold ">Tipo:</h2>
            <div className="flex gap-[10px]">
                {pokemon?.types?.map((tipo, index) => (
                    <p className={`p-[8px] rounded-[10px] text-[20px] font-semibold
                        ${
                            tipo.type.name == "grass" ? "bg-[#78c850]" : "" ||
                            tipo.type.name == "fire" ? "bg-[#f05030]" : "" ||
                            tipo.type.name == "water" ? "bg-[#6890f0]" : "" ||
                            tipo.type.name == "eletric" ? "bg-[#f8d030]" : "" ||
                            tipo.type.name == "psychic" ? "bg-[#f85888]" : "" ||
                            tipo.type.name == "ice" ? "bg-[#98d8d8]" : "" ||
                            tipo.type.name == "dragon" ? "bg-[#7038f8]" : "" ||
                            tipo.type.name == "dark" ? "bg-[#705848]" : "" ||
                            tipo.type.name == "normal" ? "bg-[#a8a878]" : "" ||
                            tipo.type.name == "fight" ? "bg-[#903028]" : "" ||
                            tipo.type.name == "flying" ? "bg-[#a890f0]" : "" ||
                            tipo.type.name == "poison" ? "bg-[#a040a0]" : "" ||
                            tipo.type.name == "ground" ? "bg-[#e0c068]" : "" ||
                            tipo.type.name == "rock" ? "bg-[#b8a038]" : "" ||
                            tipo.type.name == "ghost" ? "bg-[#705898]" : "" ||
                            tipo.type.name == "steel" ? "bg-[#b8b8d0]" : "" ||
                            tipo.type.name == "bug" ? "bg-[#68a090]" : "" ||
                            tipo.type.name == "fairy" ? "bg-[#f090b0]" : "" 
                        }
                    `} key={index}>
                        {tipo.type.name}
                    </p>
                ))}
            </div>
            <div>
                <div className="flex items-center justify-center flex-col">
                    <h2 className="text-2xl font-bold ">Altura:</h2>
                    <p className="text-[20px] font-semibold">{pokemon?.height * 10} cm</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <h2 className="text-2xl font-bold ">Peso:</h2>
                    <p className="text-[20px] font-semibold">{(pokemon?.weight / 10).toFixed(1)} Kg</p>
                </div>
            </div>
        </div>
    );
}

export default Detalhes;