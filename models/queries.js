import pool from "./pool.js";

async function getAllMessage() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessagedb(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1,$2)", [
    username,
    text,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);

  return rows[0];
}

export { getAllMessage, insertMessagedb, getMessageById };
