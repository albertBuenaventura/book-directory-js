// import dbConfig from "../config/db.config"
import * as mysql from 'mysql2/promise';
import db from "../models";

const dbConfig = {
  DB: 'book_js_db',
  USER: 'root',
  PASSWORD: '123456',
  HOST: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
}


export async function initDb() {
  const connection = await mysql.createConnection({ host: dbConfig.HOST, port: dbConfig.port, user: dbConfig.USER, password: dbConfig.PASSWORD });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);

  await db.sync();
}
