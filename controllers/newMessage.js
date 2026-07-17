import messages from "../messageArray.js";

function newMessage(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
}

export default newMessage;
