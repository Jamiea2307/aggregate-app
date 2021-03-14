import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.navBar.background};
`;

export const ListStyle = styled.li`
  list-style-type: none;
  display: flex;
  height: 100%;

  button {
    height: 80px;
    width: 80px;
    border: none;
    background: none;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.navBar.siteSelected};
      border-bottom: solid white;
    }
  }
  .selected {
    background: ${(props) => props.theme.navBar.siteSelected};
    border-bottom: solid white;
  }
`;
