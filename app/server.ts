import express from "express";
import cors from "cors";
import "dotenv/config";
import SearchRouter from "./routes/SearchRouter";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

// INITIALIZATIONS
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3005);

//CORS
app.use(cors());
//app.use(express.json());

//ROUTES
app.use("/api", SearchRouter);

// SWAGGER
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

// START SERVER
app.listen(app.get("port"), () => {
  console.log(`Server online on port: ${app.get("port")}`);
});
