import axios from "axios";
import {
  selectFields,
  selectCommentFields,
} from "../Data/selectFieldsHackerNews";

// `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
// const getOrderedStoryids = async () => {
//   const { data: storyIds } = await axios.get(
//     `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
//   );
//   // console.log(storyIds);
// };

const getStory = async (storyId) => {
  const { data } = await axios.get(`/api/hnStories/getStory`, {
    params: { storyId: storyId },
  });

  const story = data && selectFields(data);
  return story;
};

const getStoryIds = async (pageValue) => {
  if (!pageValue) pageValue = 0;

  const data = await axios.get(`/api/hnStories/getStoryIds`, {
    params: { pageValue: pageValue },
  });
  const { data: storyIds } = data;

  return processStoryIds(storyIds);
};

const processStoryIds = (storyIds) => {
  if (!Array.isArray(storyIds)) {
    const stories = [];
    for (const story in storyIds) {
      stories.push(storyIds[story]);
    }
    return stories;
  }

  return storyIds.filter((story) => story !== null);
};

export const getAllStoryDetails = async (pageValue) => {
  const storyIds = await getStoryIds(pageValue);
  return Promise.all(storyIds.map(getStory));
};

const mapChildComments = (commentId) => {
  if (commentId && commentId.kids && commentId.kids.length > 0) {
    mapChildComments(commentId.kids).then((data) => (commentId.kids = data));
  }

  return Promise.all(commentId.map(getComment));
};

const getComment = async (commentId) => {
  const { data } = await axios.get(`/api/hnStories/getComment`, {
    params: { commentId: commentId },
  });
  const comment = data && selectCommentFields(data);

  if (comment && comment.kids) {
    await mapChildComments(comment.kids).then((data) => (comment.kids = data));
  }

  return comment;
};

export const getAllCommentDetails = async (id) => {
  const { data } = await axios.get(`/api/hnStories/getAllCommentDetails`, {
    params: { id: id },
  });
  return Promise.all(data.kids.map(getComment));
};
