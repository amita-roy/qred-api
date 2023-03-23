import request from "supertest";
import { app } from "../app";

describe("Transactions", function () {
  it("should return transactionsa", async function () {
    const response = await request(app)
      .get("/api/transactions")
      .query({ offset: 0, limit: 3 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchInlineSnapshot(`
      {
        "count": 4,
        "data": [
          {
            "amount": 400.99,
            "cardId": 1,
            "description": "Purchase on h&m",
            "id": 2,
            "transactionDate": "2023-03-18T09:12:28.000Z",
          },
          {
            "amount": 35.8,
            "cardId": 1,
            "description": "Purchase on amazon",
            "id": 1,
            "transactionDate": "2023-02-20T09:12:28.000Z",
          },
          {
            "amount": 535,
            "cardId": 1,
            "description": "Purchase on amazon",
            "id": 3,
            "transactionDate": "2023-02-18T09:12:28.000Z",
          },
        ],
      }
    `);
  });
});
