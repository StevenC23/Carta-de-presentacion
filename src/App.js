import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/index";
import { ROUTS } from "./utils/enum/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              {ROUTS.map((route) => (
                <Route
                  exact
                  key={route.id}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
