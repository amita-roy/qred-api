import express from "express";
import { company } from "./handlers/company";
import { transactions } from "./handlers/transactions";
import { prisma } from "./prisma";
import {activateCard} from "./handlers/activateCard";

export const app = express();

// In practice, the company id would be parsed from authentication context
const COMPANY_ID = 1;

app.get("/api/company", company(prisma, COMPANY_ID));

app.get("/api/transactions", transactions(prisma, COMPANY_ID));

app.post("/api/activate-card", activateCard(prisma, COMPANY_ID));
