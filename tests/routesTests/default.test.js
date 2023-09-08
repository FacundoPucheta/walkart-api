// REALIZAR TESTING DE LAS RUTAS => ELIMINAR LA DE EJEMPLO

const app = require("../../src/server");
const request = require("supertest");

describe("Esta es una simulación de testeo", () => {
  it("Debería responder un string", async () => {
    const res = await request(app).get("/");
    expect(typeof res.body).toBe("string");
  });
  
  it("Debería tener un status 200 la respuesta", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
