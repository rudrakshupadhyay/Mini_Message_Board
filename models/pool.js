import { Pool } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", async (client) => {
  await client.query("SET TIME ZONE 'Asia/Kolkata'");
});

export default pool;
