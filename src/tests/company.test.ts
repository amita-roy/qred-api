import request from "supertest";
import { app } from "../app";

describe("Company", function () {
  it("should return company data", async function () {
    const response = await request(app).get("/api/company");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchInlineSnapshot(`
      {
        "card": {
          "balance": 5500,
          "cardUrl": "http://exampleurl.com",
          "creditLimit": 10000,
          "id": 1,
          "status": "ACTIVE",
        },
        "id": 1,
        "name": "Company AB",
      }
    `);
  });
});
