const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const baseURLNoR = "https://www.reddit.com/";
const baseURL = "https://www.reddit.com/r/";
const subreddit = `${baseURL}all.json`;
const nextPage = `${subreddit}?after=`;

// process.env.REDDIT_SECRET;

router.get("/getStories", async (req, res) => {
  const pageValue = req.query.ID;
  const {
    data: { data },
  } = pageValue
    ? await axios.get(`${nextPage + pageValue}`)
    : await axios.get(subreddit);

  res.send(data);
});

router.get("/getComment", async (req, res) => {
  const extension = req.query.extension;
  const { data } = await axios.get(`${baseURLNoR + extension}.json`);

  res.send(data);
});

module.exports = router;
