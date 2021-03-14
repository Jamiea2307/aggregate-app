const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const baseURL = "https://hacker-news.firebaseio.com/v0/";
// const newStories = `${baseURL}newstories.json`;
const topStories = `${baseURL}topstories.json`;
// const bestStories = `${baseURL}beststories.json`;
const storyURL = `${baseURL}item/`;
const params = `?print=pretty&orderBy="$key"&startAt=`;

const limit = `&limitToFirst=25`;

router.get("/getStory", async (req, res) => {
  const storyId = req.query.storyId;
  const { data } = await axios.get(`${storyURL + storyId}.json`);
  res.send(data);
});

router.get("/getStoryIds", async (req, res) => {
  const pageValue = req.query.pageValue;

  const { data: storyIds } = await axios.get(
    `${topStories + params + '"' + pageValue + '"' + limit}`
  );

  res.send(storyIds);
});

router.get("/getComment", async (req, res) => {
  const commentId = req.query.commentId;

  const { data } = await axios.get(`${storyURL + commentId}.json`);

  res.send(data);
});

router.get("/getAllCommentDetails", async (req, res) => {
  const id = req.query.id;
  const { data } = await axios.get(`${storyURL + id}.json`);

  res.send(data);
});

module.exports = router;
