import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState([]);
    console.log("WHAT IS THE STATE:", pokemon);

    useEffect(() => {
        console.log("ON MOUNT:");
        async function fetchPokemon() {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/12/"
        );
            console.log("DATA:",response.data.object);
            setPokemon("SET STATE:",response.data.object);
        }

        fetchPokemon();
    }, []);




return (
    <div>
        <header>
            POKEMON:
            <div>
                {}
                <div>
                    <h1>pokemon</h1>
                    <p className="pokemon-name" id="name">jigglypuff</p>
                    <Link to="/icon">icon</Link>
                    <p className="pokemon-moves" id="moves">moves: 4</p>
                    <p className="pokemon-weight" id="weight">weight: 333</p>
                    <p className="pokemon-abilities" id="abilities">abilities: </p>
                    <ul className="list-abilities">
                        <li id="first-ability">first ability</li>
                        <li id="second-ability">second ability</li>
                        <li id="third-ability">third ability</li>
                    </ul>
                </div>

        </div>
        </header>
    </div>
  );
}

export default App;
