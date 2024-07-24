import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
