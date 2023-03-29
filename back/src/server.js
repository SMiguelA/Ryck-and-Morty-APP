// const http = require("http");
// const newcharacters = require("./controllers/getCharById")

// const characters = require("./utils/data");

// http.createServer((req, res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const {url} = req;

//     if(url.includes("/rickandmorty/character")){
//         const id = url.split('/').pop();

//         const character = characters.find(char => char.id == id);
//         if(character){
//             res.writeHead(200, {"Content-Type":"application/json"});
//             res.end(JSON.stringify(character))
//         }else{
//             res.writeHead(404, {"Content-Type":"application/json"});
//             res.end(JSON.stringify({error:"Personaje no existe"}))
//         }
//     } 
// })
// .listen(3001, "localhost");

// newcharacters(2, 5)

//**************************************************************** */


// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail")

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     if(url.includes('rickandmorty/onsearch')){
//         const id = url.split('/').pop();
//         getCharById(res, id)
//     }
//     if(url.includes('rickandmorty/detail')){
//         const id = url.split('/').pop();
//         getCharDetail(res, id)
//     }
// })
// .listen(3001, "localhost");

//**************************************************************** */

const express = require("express");
const app = express();
const router = require("./routes/index");
let characters = require("./utils/favs");
const cors = require("cors")
const morgan = require("morgan");

// console.log(app);
// TRANSFORMAMOS EL JSON QUE NOS LLEGA EN UN OBJETO
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// console.log(router);
// DEFINIMOS QUE EN LA RUTA "/" NOS EJECUTE LO QUE TENEMOS EN EL ARCHIVO ROUTER
app.use("/", router);

app.post("/rickandmorty/fav", (req, res) => {
    const {body} = req;
    console.log(body);
    characters.push(body);
    res.status(201).json({status: "OK"});
})

app.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(characters);
})

app.delete("/rickandmorty/fav/:id", (req, res) => {
    const {id} = req.params;
    characters = characters.filter((char) => char.id != id);
    res.status(201).json({status: "OK"});
})


app.listen(3001, () => {
    console.log("Servidor en el puerto 3001");
})

