import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
    
    
    return (
        <div style={{backgroundColor: "lightgray"}}>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Origin | {character.origin?.name}</h3>
            <h3>Specie | {character.species}</h3>
            <h3>Gender | {character.gender}</h3>
        </div>
    )
}