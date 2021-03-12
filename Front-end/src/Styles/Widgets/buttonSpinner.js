import styled from "styled-components";

export const SpinnerContainer = styled.div`
  .lds-ring {
    display: inline-block;
    position: relative;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    border: 8px solid ${(props) => props.theme.fontColor};
    border-radius: 50%;
    animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.fontColor} transparent transparent
      transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
