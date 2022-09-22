import "./App.css";
import * as React from "react";
import Home from "./screens/home";
import { Routes, Route, useParams, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
