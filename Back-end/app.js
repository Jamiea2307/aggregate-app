const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

//Route imports
const redditRouter = require("./routes/redditStories");
const hackerNewsRouter = require("./routes/hnStories");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Route Middleware
app.use("/api/redditStories", redditRouter);
app.use("/api/hnStories", hackerNewsRouter);

module.exports = app;
