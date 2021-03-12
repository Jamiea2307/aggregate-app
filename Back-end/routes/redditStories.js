const express = require("express");
const router = express.Router();

router.get("/getStories", (req, res, next) => {
  res.send("redditStories");
});

module.exports = router;
