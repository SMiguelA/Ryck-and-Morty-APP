const app = require("../src/server");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET rickandmorty/{id}", () => {
        it("Responde con status: 200", () => {
            agent.get('/rickandmorty/onsearch/1').expect(200);
        })
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender' e 'image'", () => {
            
        })
    })
})