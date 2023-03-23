import request from "supertest";
import { app } from "../app";

describe("Transactions", function () {
  it("should return transactionsa", async function () {
    const limit = 3;
    const response = await request(app)
      .get("/api/transactions")
      .query({ offset: 0, limit });
    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(4);
    expect(response.body.data.length).toBe(limit);
  });
});
