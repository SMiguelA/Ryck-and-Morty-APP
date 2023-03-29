// const axios = require("axios")

// const getCharById = (res, ID) => {
//     axios(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then((char) => {
//         let characters = {
//             id: char.data.id,
//             image: char.data.image,
//             name: char.data.name,
//             gender: char.data.gender,
//             species: char.data.species
//         }

//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify(characters));
//     })
//     .catch((error) => {
//         res.writeHead(500, {"Content-Type": "text/plain"})
//         res.end("El personaje no existe")
//     })
// };

// module.exports = getCharById

//*******************************************************************/

const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios");

const getCharById = async (req, res) => {
    const params = req.params;
    const {id} = params;
    console.log(params);

    try{
        let character = await axios(`${URL}${id}`)
        character = {
            id: character.data.id,
            name: character.data.name,
            species: character.data.species,
            image: character.data.image,
            gender: character.data.gender
        }
        res.status(200).json(character)
    }catch(error){
        res.status(500).send(`Error: ${error}`);
    }
};

module.exports = getCharById;