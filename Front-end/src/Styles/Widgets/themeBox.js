import styled from "styled-components";

export const CheckboxInput = styled.button`
  border: none;
  right: 0;
  outline: none;
  position: absolute;
  background-color: unset;
  border: none;
  color: ${(props) => props.theme.siteSelected};
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export default CheckboxInput;
