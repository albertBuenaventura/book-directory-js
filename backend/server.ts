import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = 8083
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
