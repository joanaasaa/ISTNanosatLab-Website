import React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
