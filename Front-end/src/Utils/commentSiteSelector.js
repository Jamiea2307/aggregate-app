import { sites } from "../Data/sites";
import { getAllCommentDetails } from "../Routes/hackerNewsAPI";
import { getComments } from "../Routes/redditApi";

export const commentSiteSelector = (id, siteSelected, setDetails) => {
  switch (siteSelected) {
    case sites.HackerNews:
      getAllCommentDetails(id).then((data) => setDetails(data));
      break;
    case sites.Reddit:
      getComments(id).then((data) => setDetails(data));
      break;
    default:
      console.log("no site selected");
  }
};
