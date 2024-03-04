import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "style.scss";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Home from "pages/Home/Home";

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
