import "./App.css";
import * as React from "react";
import Home from "./screens/movies";
import { Routes, Route, useParams, Link } from "react-router-dom";
import AuthenticatedApp from "./authenticated-app";

function App() {
  return (
    <AuthenticatedApp />
  );
}
export default App;
