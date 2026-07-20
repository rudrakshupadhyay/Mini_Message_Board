import { Pool } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DB_PORT,
});

export default pool;
