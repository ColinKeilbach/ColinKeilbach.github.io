import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/home";
import Timeline from "./pages/timeline";

//Components
import Navigation from "./components/navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="Site-header">
            <img className="Site-logo" alt="Logo" src="logo192.png" />
            <Navigation className="Site-nav" />
          </div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/all-projects" element={<Timeline />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
