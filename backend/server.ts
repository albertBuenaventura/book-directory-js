import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import initTables from './app/infra/setup-tables';
import { initDb } from './app/infra/setup-database';

dotenv.config();

initDb().then(() => initTables());

const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8083
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
