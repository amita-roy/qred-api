import { app } from "./app";
import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import YAML from "yaml";

const port = 3010;

const file = fs.readFileSync("./openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server has started on http://localhost:${port}`);
});