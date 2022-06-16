import express from "express";
import "dotenv/config";

// INITIALIZATIONS
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3005);

// START SERVER
app.listen(app.get("port"), () => {
  console.log(`Server online on port: ${app.get("port")}`);
});
