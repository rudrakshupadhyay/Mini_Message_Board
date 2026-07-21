import { Client } from "pg";
import { loadEnvFile } from "node:process";

if (!process.env.RENDER) {
  loadEnvFile();
}

const SQL = `
SET TIME ZONE 'Asia/Kolkata';
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username,text) 
VALUES
  ('Amando','Hi there!'),
  ('Charles','Hello World!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
