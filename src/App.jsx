import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Profile from "./pages/Profile";
import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Home />
        <Container>
          <Profile />
          <About />
          <Service />
          <Contact />
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
