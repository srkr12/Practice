import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./Components/EntryPage/EntryPage";
import GamePage from "./Components/GamePage/GamePage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/game-page" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
