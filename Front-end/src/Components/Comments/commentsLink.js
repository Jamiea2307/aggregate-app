import { Link } from "react-router-dom";
import { LinkContainer } from "../../Styles/commentStyles";

export const Comments = ({ id, commentNumber }) => {
  return (
    <LinkContainer>
      <Link
        to={{
          pathname: `/comments/${id}`,
        }}
      >
        {commentNumber} comments
      </Link>
    </LinkContainer>
  );
};
