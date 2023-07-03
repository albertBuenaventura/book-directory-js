require('dotenv').config()

import dbConfig from "../config/db.config"
import * as mysql from 'mysql2/promise';
import { Dialect, Sequelize } from 'sequelize'

export const sqlConnection = new Sequelize(dbConfig.DB!, dbConfig.USER!, dbConfig.PASSWORD, {
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

export async function initDb() {
  const connection = await mysql.createConnection({ host: dbConfig.HOST, port: dbConfig.port, user: dbConfig.USER, password: dbConfig.PASSWORD });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);
}