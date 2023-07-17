import { config } from "dotenv";
import Express from "express";
import bodyParser from "body-parser";

config({
  path: "./db/.env",
});

// import "./db/conn.js";
const app = Express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("WORKING");
});

//IMPORTING ROUTERS
import movie from "./routes/movie.js";
app.use("/api", movie);

//Listening

app.listen(port, (req, res) => {
  console.log(`Server is working at port : ${port}`);
});
