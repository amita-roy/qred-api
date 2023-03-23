import request from "supertest";
import { app } from "../app";

describe("Activate Card", function () {
  it("should return card with activated status", async function () {
    const response = await request(app).post("/api/activate-card");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchInlineSnapshot(`
      {
        "balance": 5500,
        "cardUrl": "http://exampleurl.com",
        "creditLimit": 10000,
        "id": 1,
        "status": "ACTIVE",
      }
    `);
  });
});
