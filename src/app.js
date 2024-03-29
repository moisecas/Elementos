import path from "path";
import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import morgan from "morgan";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;