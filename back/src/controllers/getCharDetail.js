// const axios = require("axios")

// const getCharDetail = (res, ID) => {
//     axios(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then((char) => {
//         let characters = {
//             id: char.data.id,
//             image: char.data.image,
//             name: char.data.name,
//             gender: char.data.gender,
//             species: char.data.species,
//             status: char.data.status,
//             origin: char.data.origin,
//         }

//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify(characters));
//     })
//     .catch((error) => {
//         res.writeHead(500, {"Content-Type": "text/plain"})
//         res.end("El personaje no existe")
//     })
// };

// module.exports = getCharDetail;

//*******************************************************************/

const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios");

const getCharDetail = async (req, res) => {
    const params = req.params;
    const {id} = params;

    try{
        let characters =  await axios(`${URL}${id}`)
        characters = {
            id: characters.data.id,
            image: characters.data.image,
            name: characters.data.name,
            gender: characters.data.gender,
            species: characters.data.species,
            status: characters.data.status,
            origin: characters.data.origin,
        }
        res.status(200).json(characters);
    }catch(error){
        res.status(500).send(`Error: ${error}`);
    }
};

module.exports = getCharDetail;