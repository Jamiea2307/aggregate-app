import axios from "axios";
import { selectFields } from "../Data/selectFieldsReddit";

//https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1
//use after value to get next page of results

export const getStories = async (pageValue) => {
  const { data } = await axios.get(`/api/redditStories/getStories`, {
    params: {
      ID: pageValue,
    },
  });

  const storyData = {
    after: data.after,
    processedStories: data.children.map((post) => selectFields(post.data)),
  };

  return storyData;
};

export const getComments = async (extension) => {
  const { data } = await axios.get(`/api/redditStories/getComment`, {
    params: {
      extension: extension,
    },
  });

  return data[1].data.children;
};

//e.g https://old.reddit.com/r/all.json?after=t3_m1o0fj

//video fromat taken from media reddit_video fallback
//"https://v.redd.it/cer7jxne75k61/DASH_1080.mp4"
