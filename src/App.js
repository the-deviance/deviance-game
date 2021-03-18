import React, { useState } from "react";
import MainScreen from "./screens/MainScreen";
import SplashScreen from "./screens/SplashScreen";
import PlayerDataContext from "./utils/PlayerDataContext";
import PropertyDataContext from "./utils/PropertyDataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const gameDataHook = useState({ players: [] });
  const propertyDataHook = useState();

  return (
    <PlayerDataContext.Provider value={gameDataHook}>
      <PropertyDataContext.Provider value={propertyDataHook}>
        <Router>
          <Switch>
            <Route path="/game">
              <ToastContainer />
              <MainScreen />
            </Route>
            <Route path="/">
              <SplashScreen />
            </Route>
          </Switch>
        </Router>
      </PropertyDataContext.Provider>
    </PlayerDataContext.Provider>
  );
}

export default App;
