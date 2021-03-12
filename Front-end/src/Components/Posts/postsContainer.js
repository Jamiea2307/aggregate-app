import { useState, useEffect } from "react";
import { PostDetails } from "./postDetails";
import { Spinner } from "../Widgets/loadingSpinner";
import { useContext } from "react";
import { AppContext } from "../../App";
import { getSiteData } from "../../Utils/siteSelector";
import { ButtonContainer } from "../../Styles/storyStyles";
import { ButtonLoadingSpinner } from "../Widgets/buttonLoadingSpinner";

const PostsContainer = () => {
  const [loadedStoryIds, setLoadedStoryIds] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [moreResultsButton, setMoreResultsButton] = useState(true);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setLoadingSpinner(true);
    setMoreResultsButton(false);
    getSiteData(state.siteSelected)
      .then((data) => setLoadedStoryIds(data))
      .finally(() => {
        setLoadingSpinner(false);
        setMoreResultsButton(true);
      });
  }, [state.siteSelected]);

  const getMoreResults = () => {
    setMoreResultsButton(false);

    getSiteData(state.siteSelected, loadedStoryIds.after)
      .then((data) => {
        setLoadedStoryIds({
          after:
            typeof data.after === "string"
              ? data.after
              : loadedStoryIds.processedStories.length +
                data.processedStories.length,
          processedStories: [
            ...loadedStoryIds.processedStories,
            ...data.processedStories,
          ],
        });
      })
      .finally(() => {
        setMoreResultsButton(true);
      });
  };

  return (
    <div>
      {loadedStoryIds?.processedStories?.map((story) => {
        return !loadingSpinner && story !== null ? (
          <PostDetails key={story.id} storyDetails={story} />
        ) : null;
      })}
      {loadingSpinner ? <Spinner /> : null}
      {!loadingSpinner ? (
        <ButtonContainer>
          <button
            disabled={!moreResultsButton}
            onClick={() => getMoreResults()}
          >
            {moreResultsButton ? (
              <div className="resultsText">More Results</div>
            ) : (
              <ButtonLoadingSpinner />
            )}
          </button>
        </ButtonContainer>
      ) : null}
    </div>
  );
};

export default PostsContainer;
