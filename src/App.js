import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import "./utils/interceptor";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
