import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { commentSiteSelector } from "../../Utils/commentSiteSelector";
import { Comment } from "./hnComment";
import { RedditComments } from "./redditComments";

export const CommentsContainer = (postId) => {
  const [details, setDetails] = useState([]);
  const { id } = postId.match.params;

  const { state } = useContext(AppContext);

  useEffect(() => {
    commentSiteSelector(id, state.siteSelected, setDetails);
  }, [id, state.siteSelected]);

  return (
    <div>
      {state.siteSelected === "reddit" ? (
        <RedditComments comment={details} />
      ) : null}
      {state.siteSelected === "hackernews" ? (
        <Comment comment={details} />
      ) : null}
    </div>
  );
};
