import { Router } from "express";
import {
  newMessage,
  getMessageList,
  openMessage,
} from "../controllers/newMessage.js";

const indexRouter = Router();

indexRouter.get("/", getMessageList);

indexRouter.get("/new", (req, res) => {
  res.render("new");
});

indexRouter.get("/message/:id", openMessage);

indexRouter.post("/new", newMessage);

export default indexRouter;
