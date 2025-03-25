import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurvedNavbar from "./components/Navbar/CurvedNavbar";
import Home from "./pages/home";
import ChatBot from "../src/components/Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <CurvedNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;
