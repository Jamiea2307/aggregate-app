import { SpinnerContainer } from "../../Styles/Widgets/buttonSpinner";

export const ButtonLoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
};
