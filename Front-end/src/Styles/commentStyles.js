import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 1.5rem 0.5rem;
  border-left: 1px solid #bbb3;
  color: ${(props) => props.theme.fontColor};

  .authorName {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .postTime {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding-left: 4px;
  }
`;

export const Comments = styled.div`
  padding: 1rem;
`;

export const CommentText = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  word-break: break-word;
  overflow: auto;
  padding-bottom: 1px;
  margin-bottom: -1px;
`;

export const LinkContainer = styled.div`
  a {
    text-decoration: none;
    font-size: small;
    color: ${(props) => props.theme.links.color};
  }

  a:hover {
    text-decoration: underline;
  }
`;
