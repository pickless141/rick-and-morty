const app = require('../App');
const session = require('supertest');
const agent = session(app);

describe('test de rutas', () => {
    describe('GET /rickandmorty/character/:id', () => {
    })
    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde con las propiedades: "id", "name", "species", "gender", "status", "origin" e "imagen"', async () => {
        const response = (await agent.get("/rickandmorty/character/1")).body;
        expect(response).toHaveProperty("id");
        expect(response).toHaveProperty("name");
        expect(response).toHaveProperty("species");
        expect(response).toHaveProperty("gender");
        expect(response).toHaveProperty("status");
        expect(response).toHaveProperty("origin");
        expect(response).toHaveProperty("image");     
    });
    it('Si hay un error responde con status 500', async () => {
        await agent.get('/rickandmorty/character/65471').expect(500);
    });


    describe("GET/rickandmorty/login", () => {
        it("Retorna un objeto con la propiedad acces en true si recibe las credenciales correctas", async() => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=123456");
            expect(response.body.access).toBe(true);

        });
        it("Retorna un objeto con la propiedad acces en false si recibe las credenciales incorrectas", async() => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=123456");
            expect(response.body.access).toBe(false);

        });
    });

    describe("POST /rickandmorty/fav", () => {
        const character1 = {id: "1", name: "Rick"};
        const character2 = {id: "2", name: "Morty"};

        it("lo que envies por body debe ser devuelto en un arreglo", async () => {
            const response = await agent.post('/rickandmorty/fav')
                .send(character1);
            expect(response.body).toEqual([character1]);
        });
        it("lo que envies por body debe ser devuelto en un arreglo", async () => {
            const response = await agent.post('/rickandmorty/fav')
                .send(character2);
            expect(response.body).toEqual([character1, character2]);
            //expect(response.body).toContainEqual(character1);
            //expect(response.body).toContainEqual(character2);
        });
    });
    
    describe("DELETE /rickandmorty/fav/:id", () => {
        it('En l caso de que no haya ningun personaje con el id que envias, sea un arreglo con los elementos previos sin modificar', async () => {
            const response = await agent.delete('/rickandmorty/fav/55');
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);     
        });
        it('Luego debes testear que cuando envias un ID valido se elimine correctamente al personaje', async () => {
            const response = await agent.delete('/rickandmorty/fav/1');
            expect(response.body).not.toContainEqual(character1);
        })
    });
    
});