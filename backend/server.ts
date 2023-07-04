import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import initTables from './app/infra/setup-tables';
import { initDb } from './app/infra/setup-database';
import routes from './app/routes/api-v1';

dotenv.config();

initDb().then(() => initTables());

const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

const PORT = 8081
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
