import { createContext, useReducer } from "react";
import useTheme from "./Hooks/useTheme";
import PostsContainer from "./Components/Posts/postsContainer";
import { lightTheme, darkTheme } from "./Styles/Global/themes";
import GlobalStyles from "./Styles/Global/globalStyles";
import NavBar from "./Components/Navigation/navBar";
import CheckboxInput from "./Styles/Widgets/themeBox";
import siteNameReducer from "./Reducers/siteNameReducer";
import { sites } from "./Data/sites";
import { CommentsContainer } from "./Components/Comments/commentsContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ReactComponent as Moon } from "./Styles/Images/Moon.svg";
import { ReactComponent as Sun } from "./Styles/Images/Sun.svg";

export const AppContext = createContext();

const currentSite = window.localStorage.selectedsite;

const initialState = {
  siteSelected: currentSite ? currentSite : sites.HackerNews,
};

const App = () => {
  const [state, dispatch] = useReducer(siteNameReducer(), initialState);
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "Light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContext.Provider value={{ state, dispatch }}>
        <Router>
          <Switch>
            <Route path={["/", "/news-app"]} exact>
              <NavBar />
              <CheckboxInput onClick={toggleTheme}>
                {theme === "Dark" ? <Sun /> : <Moon />}
              </CheckboxInput>
              <PostsContainer selectedSite={{ state }} />
            </Route>
            <Route path="/comments/:id" component={CommentsContainer} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
