import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   })
   .catch(error => {
    console.error(error);
    window.alert('Hubo un error al cargar el personaje');
});
}, [id]);

    return (
    <div>
        <h2>name: {character.name}</h2>
        <h2>status: {character.status}</h2>
        <h2>species: {character.species}</h2>
        <h2>gender: {character.gender}</h2>
        <h2>origin: {character.origin && character.origin.name}</h2>
        <img src={character.image} alt='' />
    </div>
    )
}