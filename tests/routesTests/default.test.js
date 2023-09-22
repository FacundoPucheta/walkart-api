// REALIZAR TESTING DE LAS RUTAS => ELIMINAR LA DE EJEMPLO

const app = require("../../src/server");
const request = require("supertest");

describe("Esta es una simulación de testeo", () => {
  it("Debería responder un array, que contenga objetos", async () => {
    const res = await request(app).get("/creations");
    const info = res.body.data;
    expect(typeof info).toBe("object");
    info.forEach((object) => {
      expect(typeof object).toBe("object");
    });
  });

  it("Cada objeto devuelto en el array contenido en data, debe tener las siguientes propiedades: name, image, description y category", async () => {
    const res = await request(app).get("/creations");
    const info = res.body.data;
    for (const prop of info) {
      expect(prop).toHaveProperty("name");
      expect(prop).toHaveProperty("image");
      expect(prop).toHaveProperty("description");
      expect(prop).toHaveProperty("category");
    }
  });

  it("Debería tener un status 200 la respuesta, y el error esría FALSE", async () => {
    const res = await request(app).get("/creations");
    const err = res.body.error;
    expect(res.status).toBe(200);
    expect(err).toBeFalsy();
  });

  it("Debería tener un status 404 la respuesta", async () => {
    const res = await request(app).get("/creationss");
    expect(res.status).toBe(404);
  });
});
