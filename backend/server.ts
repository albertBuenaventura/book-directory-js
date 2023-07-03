import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { initDb } from './app/infra/setup-database';

dotenv.config();

const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

const PORT = 8083
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
