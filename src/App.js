import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import MyProjectsPage from './Pages/MyProjectsPage'
import IntroPage from "./Pages/IntroPage";
import './css/App.css'

function App() {
  return (
    <HashRouter >
    <div className="app-container">
      <Routes>
        <Route path="/" element={<IntroPage/>}/>  
        <Route path="/MyProjectsPage" element={<MyProjectsPage/>}/>  
      </Routes>
    </div>
    </HashRouter >
  );
}

export default App;
