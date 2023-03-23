import express from "express";
import {companyHandler} from "./handlers/company"
import {transactionsHandler} from "./handlers/transactions"
import {activateCardHandler} from "./handlers/activateCard";


export const app = express();

// In practice, the company id would be parsed from authentication context
const COMPANY_ID = 1


app.get("/api/company", (req, res) => companyHandler(req, res, COMPANY_ID));

app.get("/api/transactions", (req, res) => transactionsHandler(req, res, COMPANY_ID));

app.post("/api/activate-card", (req, res) => activateCardHandler(req, res, COMPANY_ID))