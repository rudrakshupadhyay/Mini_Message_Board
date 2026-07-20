import {
  getAllMessage,
  insertMessagedb,
  getMessageById,
} from "../models/queries.js";

async function newMessage(req, res) {
  const username = req.body.name;
  const text = req.body.message;
  await insertMessagedb(username, text);
  res.redirect("/");
}

async function getMessageList(req, res) {
  const messageList = await getAllMessage();
  res.render("index", { messages: messageList });
}

async function openMessage(req, res) {
  const index = req.params.id;
  const currMessage = await getMessageById(index);
  res.render("messageOpen", { currMessage: currMessage });
}

export { newMessage, getMessageList, openMessage };
