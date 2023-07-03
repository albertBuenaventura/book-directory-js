import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import db from "./app/models";

dotenv.config();

const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sync();

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = 8083
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
