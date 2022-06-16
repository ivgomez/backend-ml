import express from "express";
import SearchRouter from "./routes/SearchRouter";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../app/swagger.json";

// INITIALIZATIONS
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3005);

//ROUTES
app.use("/api", SearchRouter);

// SWAGGER
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

// START SERVER
app.listen(app.get("port"), () => {
  console.log(`Server online on port: ${app.get("port")}`);
});
