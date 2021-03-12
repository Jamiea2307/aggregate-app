import { PostedDateContainer } from "../../Styles/storyStyles";
import { DateTime } from "luxon";
//TODO move styles to be set in parent

const PostedDate = ({ unixTime }) => {
  return (
    <PostedDateContainer>
      <span>
        Posted:
        {DateTime.fromSeconds(unixTime).toFormat("HH:mm yyyy/MM/dd")}
      </span>
    </PostedDateContainer>
  );
};

export default PostedDate;
