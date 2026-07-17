import express from "express";
import path from "path";
import indexRouter from "./routes/index.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

const assetPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
