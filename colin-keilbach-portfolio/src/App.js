import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/home";
import Timeline from "./pages/timeline";
import PongInAssembly from "./pages/progects/pong-in-assembly";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/projects" element={<Timeline />}>
              <Route path=":pong-in-assembly" element={<PongInAssembly />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
