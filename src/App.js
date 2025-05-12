import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import MyProjectsPage from './Pages/MyProjectsPage'
import IntroPage from "./Pages/IntroPage";
import './css/App.css';
import ContactNavBar from "./Pages/Contact";
function App() {
  return (
    <HashRouter >
    <div className="app-container">
      <Routes>
        <Route path="/" element={<IntroPage/>}/>  
        <Route path="/MyProjectsPage" element={<MyProjectsPage/>}/>  
        <Route path="/Contact" element={<ContactNavBar/>}/>
      </Routes>
    </div>
    </HashRouter >
  );
}

export default App;
