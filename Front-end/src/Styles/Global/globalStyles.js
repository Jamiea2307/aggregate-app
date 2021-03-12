import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.global.body};
        color: ${(props) => props.theme.fontColor};
	}
`;

export default GlobalStyles;
