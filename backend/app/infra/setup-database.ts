// import dbConfig from "../config/db.config"
import * as mysql from 'mysql2/promise';
import { Dialect, Sequelize } from 'sequelize'

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

  const db = new Sequelize(dbConfig.DB!, dbConfig.USER!, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect as Dialect,
    port: dbConfig.port,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  await db.sync();
}
