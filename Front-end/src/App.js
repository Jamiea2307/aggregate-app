import { createContext, useReducer, useState } from "react";
import PostsContainer from "./Components/Posts/postsContainer";
import GlobalStyles from "./Styles/Global/globalStyles";
import NavBar from "./Components/Navigation/navBar";
import siteNameReducer from "./Reducers/siteNameReducer";
import { sites } from "./Data/sites";
import { CommentsContainer } from "./Components/Comments/commentsContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/Global/themes";

export const AppContext = createContext();

const currentSite = window.localStorage.selectedsite;

const initialState = {
  siteSelected: currentSite ? currentSite : sites.HackerNews,
};

const App = () => {
  const [site, dispatch] = useReducer(siteNameReducer(), initialState);
  const [themeType, setTheme] = useState();
  const themeMode = themeType === "Light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContext.Provider value={{ state: site, dispatch }}>
        <Router>
          <Switch>
            <Route path={["/", "/news-app"]} exact>
              <NavBar theme={{ theme: [setTheme] }} />
              <PostsContainer selectedSite={{ state: site }} />
            </Route>
            <Route path="/comments/:id" component={CommentsContainer} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
