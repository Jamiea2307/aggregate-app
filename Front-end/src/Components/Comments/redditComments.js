import DOMPurify from "dompurify";
import PostedDate from "../Posts/postedDate";
import {
  CommentContainer,
  CommentText,
  Comments,
} from "../../Styles/commentStyles";

export const RedditComments = ({ comment }) => {
  return (
    <Comments>
      {comment
        ? comment.map((details) =>
            details.kind === "t1" ? (
              <CommentContainer key={details.data.id}>
                <div>
                  <span className="authorName">{details.data.author}</span>
                  <span className="postTime">
                    <PostedDate unixTime={details.data.created_utc} />
                  </span>
                </div>
                <CommentText
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(details.data.body),
                  }}
                ></CommentText>
                {details?.data?.replies?.data?.children && (
                  <RedditComments
                    comment={details.data.replies.data.children}
                  />
                )}
              </CommentContainer>
            ) : null
          )
        : null}
    </Comments>
  );
};
