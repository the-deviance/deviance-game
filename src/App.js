import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";
import { GameProvider } from "./contexts/GameContext";
import PlayerDataContext from "./utils/PlayerDataContext";
import PropertyDataContext from "./utils/PropertyDataContext";
import MainScreen from "./screens/MainScreen";
import SplashScreen from "./screens/SplashScreen";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const gameDataHook = useState({ players: [] });
  const propertyDataHook = useState();

  return (
    <ErrorBoundary>
      <GameProvider>
        <PlayerDataContext.Provider value={gameDataHook}>
          <PropertyDataContext.Provider value={propertyDataHook}>
            <Router>
            <Routes>
              <Route path="/game" element={
                <>
                  <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                  <MainScreen />
                </>
              } />
              <Route path="/" element={<SplashScreen />} />
            </Routes>
            </Router>
          </PropertyDataContext.Provider>
        </PlayerDataContext.Provider>
      </GameProvider>
    </ErrorBoundary>
  );
}

export default App;
