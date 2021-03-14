import { NavbarContainer, ListStyle } from "../../Styles/navStyles";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { sites } from "../../Data/sites";
import Themechanger from "../../Components/Widgets/themeChanger";
import { siteLogos } from "../../Utils/siteLogos";

const NavBar = (theme) => {
  const { dispatch } = useContext(AppContext);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    window.localStorage.selectedsite
      ? setActiveButton(window.localStorage.selectedsite)
      : setActiveButton(sites.HackerNews);
  }, []);

  const changeSiteValue = (currentSite) => {
    setActiveButton(currentSite);
    window.localStorage.setItem("selectedsite", currentSite);
    dispatch({ type: "UPDATE_SITE", data: currentSite });
  };

  return (
    <NavbarContainer>
      <ListStyle>
        {Object.values(sites).map((site) => {
          return (
            <button
              className={activeButton === site ? "selected" : null}
              onClick={() => changeSiteValue(site)}
            >
              {siteLogos[site]}
            </button>
          );
        })}
      </ListStyle>
      <Themechanger themes={theme.theme} />
    </NavbarContainer>
  );
};

export default NavBar;
