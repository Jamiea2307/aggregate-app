import styled from "styled-components";

export const CheckboxInput = styled.button`
  border: none;
  right: 0;
  outline: none;
  position: absolute;
  background-color: ${(props) => props.theme.themeButton};
  color: ${(props) => props.theme.themeButtonFont};
`;

export default CheckboxInput;
