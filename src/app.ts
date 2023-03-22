import express from "express";
import { prisma } from "./prismaClient";

export const app = express();

app.use("/company", async (req, res) => {
  const companyId = parseInt(req.headers.authorization);
  try {
    const result = await prisma.company.findUnique({
      where: {
        id: companyId,
      },
    });

    res.status(200).send({ data: result });
  } catch (e) {
    res.status(500).end();
  }
});