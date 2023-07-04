export default {
  HOST: process.env.DB_HOST ?? 'localhost',
  USER: process.env.DB_USER ?? 'user',
  PASSWORD: process.env.DB_PASSWORD ?? '123456',
  DB: process.env.DB_NAME ?? 'books_js_db',
  port: process.env.DB_PORT as unknown as number ?? 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
