import { Router } from "express";
import messages from "../messageArray.js";
import newMessage from "../controllers/newMessage.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("new");
});

indexRouter.get("/message/:id", (req, res) => {
  const index = req.params.id;
  res.render("messageOpen", { currMessage: messages[index] });
});

indexRouter.post("/new", newMessage);

export default indexRouter;
