import styled from "styled-components";

export const StoryWrapper = styled.div`
  padding: 1.5rem 0.5rem;
  border-top: 1px solid #2e3234;
  border-bottom: 1px solid #2e3234;
`;

export const StoryLinks = styled.a`
  color: ${(props) => props.theme.links.color};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.links.visited};
  }
`;

export const StoryDetailsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: unset;
`;

export const PostDetailsWrapper = styled.div`
  display: flex;
  font-size: 12px;
  margin: unset;
`;

export const DomainName = styled.a`
  color: #888;
  overflow: hidden;
  white-space: nowrap;
  max-width: 20em;
  font-size: x-small;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostedDateContainer = styled.a`
  margin-right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  button {
    height: 3rem;
    background: none;
    width: 100%;
    color: ${(props) => props.theme.fontColor};
    display: flex;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    .resultsText {
      padding-top: 0.7rem;
    }
  }
`;
