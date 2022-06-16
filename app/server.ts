import express from "express";
import SearchRouter from "./routes/SearchRouter";
import "dotenv/config";
import { searchController } from "./controllers";

// INITIALIZATIONS
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3005);

//ROUTES
app.use("/api", SearchRouter);

// START SERVER
app.listen(app.get("port"), () => {
  console.log(`Server online on port: ${app.get("port")}`);
});
