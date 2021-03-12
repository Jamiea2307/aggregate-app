import PostedDate from "./postedDate";
import {
  StoryLinks,
  PostDetailsWrapper,
  StoryDetailsWrapper,
  DomainName,
  StoryWrapper,
} from "../../Styles/storyStyles";
import { urlCheck } from "../../Utils/domainExtractor";
import { Comments } from "../Comments/commentsLink";
import DOMPurify from "dompurify";

export const PostDetails = ({ storyDetails }) => {
  return storyDetails?.url ? (
    <StoryWrapper>
      <StoryDetailsWrapper>
        <StoryLinks href={storyDetails.url}>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(storyDetails.title),
            }}
          />
        </StoryLinks>
        <DomainName href={storyDetails.url}>
          {urlCheck(storyDetails)}
        </DomainName>
      </StoryDetailsWrapper>
      <PostDetailsWrapper>
        <PostedDate unixTime={storyDetails.time} />
        By: {storyDetails.by}
      </PostDetailsWrapper>
      <Comments
        id={storyDetails.id}
        commentNumber={storyDetails.descendants}
      ></Comments>
    </StoryWrapper>
  ) : null;
};
