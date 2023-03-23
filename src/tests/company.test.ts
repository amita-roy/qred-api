import request from "supertest";
import {app} from "../app";

describe("Company", function () {
    it("should return company data", async function () {
        const response = await request(app).get("/api/company");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
            card: {
                balance: 5500,
                cardUrl: "http://exampleurl.com",
                creditLimit: 10000,
                status: "ACTIVE",
            },
            name: "Company AB",
        });
    });
});
