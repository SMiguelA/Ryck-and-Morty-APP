import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
     // * Me guarda un objeto con el valor que le mandamos, en este caso {id:x}
    const {detailId} = useParams();

    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        const URL = 'http://localhost:3001/detail/';
        fetch(`${URL}${detailId}`)
        .then((response) => response.json())
        .then((infoCharacter) => {
            setCharacter(infoCharacter);
        })
        .catch((error) => {
            window.alert("No existe personaje con ese ID"+error)
        });
    }, [detailId]);

    return(
        <div>
            {character.name ? (
                <>
                    <h1>{character.name}</h1>
                    <h1>{character.status}</h1>
                    <h1>{character.specie}</h1>
                    <h1>{character.gender}</h1>
                    <h1>{character.origin.name}</h1>
                    <img src={character.image} alt=""/>
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default Detail;