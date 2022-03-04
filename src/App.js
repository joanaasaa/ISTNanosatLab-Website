import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";
import Home from "./pages/Home/Home";
import Post1 from "./posts/Post1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post1 />} />
      </Routes>
    </Router>
  );
}

export default App;
