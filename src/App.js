import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import IntroPage from "./Pages/IntroPage";
import './css/App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<IntroPage/>}/>  
        <Route path="/Home" element={<Home/>}/>  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
