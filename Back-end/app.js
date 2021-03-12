const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

//Route imports
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const redditRouter = require("./routes/redditStories");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Route Middleware
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/api/redditStories", redditRouter);

module.exports = app;
