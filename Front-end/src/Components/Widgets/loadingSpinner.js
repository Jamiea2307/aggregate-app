import { SpinnerContainer } from "../../Styles/Widgets/storiesSpinner";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
};
