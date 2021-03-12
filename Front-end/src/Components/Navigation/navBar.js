import { NavbarContainer, ListStyle } from "../../Styles/navStyles";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { ReactComponent as Hackernews } from "../../Styles/Images/Y_Combinator_logo.svg";
import { ReactComponent as Reddit } from "../../Styles/Images/Reddit_Mark_OnWhite.svg";
import { sites } from "../../Data/sites";

const NavBar = () => {
  const { dispatch } = useContext(AppContext);
  const [activeButton, setactiveButton] = useState("");

  useEffect(() => {
    window.localStorage.selectedsite
      ? setactiveButton(window.localStorage.selectedsite)
      : setactiveButton(sites.HackerNews);
  }, []);

  const changeSiteValue = (currentSite) => {
    setactiveButton(currentSite);
    window.localStorage.setItem("selectedsite", currentSite);
    dispatch({ type: "UPDATE_SITE", data: currentSite });
  };

  return (
    <NavbarContainer>
      <ListStyle>
        <button
          className={activeButton === sites.HackerNews ? "selected" : null}
          onClick={() => changeSiteValue(sites.HackerNews)}
        >
          <Hackernews />
        </button>
        <button
          className={activeButton === sites.Reddit ? "selected" : null}
          onClick={() => changeSiteValue(sites.Reddit)}
        >
          <Reddit />
        </button>
      </ListStyle>
    </NavbarContainer>
  );
};

export default NavBar;
