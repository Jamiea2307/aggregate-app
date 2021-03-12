import axios from "axios";
import { selectFields } from "../Data/selectFieldsReddit";

//https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1
//use after value to get next page of results

const baseURLNoR = "https://www.reddit.com/";
const baseURL = "https://www.reddit.com/r/";
const subreddit = `${baseURL}all.json`;
const nextPage = `${subreddit}?after=`;

export const getStories = async (pageValue) => {
  const {
    data: { data },
  } = pageValue
    ? await axios.get(`${nextPage + pageValue}`)
    : await axios.get(subreddit);

  const processedStories = data.children.map((post) => selectFields(post.data));

  const storyData = {
    after: data.after,
    processedStories: processedStories,
  };

  return storyData;
};

export const getComments = async (extention) => {
  const { data } = await axios.get(`${baseURLNoR + extention}.json`);

  return data[1].data.children;
};

//e.g https://old.reddit.com/r/all.json?after=t3_m1o0fj

//video fromat taken from media reddit_video fallback
//"https://v.redd.it/cer7jxne75k61/DASH_1080.mp4"
