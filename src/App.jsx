import { useState } from 'react'
// import Navbar from "./Component/Navbar"
import Hero from "./Component/Home"
import BookDemoPage from "./Component/Bookdemo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JewelleryPage from "./Component/JewelllaryPage";
// import Seventh from "../src/Component/Seventh"
// import Footer from "../src/Component/Footer"
import './App.css'
import Navbar from './Component/Navbar';
import RealEstatePage from './Component/RealEstatePage';
import AutomobilePage from './Component/Automobiles';

function App() {
 

  return (
   
      <Router>
         <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Bookdemo" element={<BookDemoPage />} />
        {/* Add your other routes here */}
   <Route path="/jewellery" element={<JewelleryPage/>} />
   <Route path="/real-estate" element={<RealEstatePage/>} />
   <Route path="/automobile" element={<AutomobilePage/>} />
   
    
        </Routes>
    </Router>
  )
}

export default App
