import {
  getAllMessage,
  insertMessagedb,
  getMessageById,
} from "../models/queries.js";

import { body, validationResult, matchedData } from "express-validator";

const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 50 })
    .withMessage("Name should be at most 50 characters long")
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
    .withMessage("Name should contain only letters and spaces"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 200 })
    .withMessage("Message should be at most 200 characters long"),
];

const newMessage = [
  ...validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("new", {
        errors: errors.array(),
      });
    }
    const { name, message } = matchedData(req);
    await insertMessagedb(name, message);
    res.redirect("/");
  },
];

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
