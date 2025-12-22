import { useState } from 'react'
// import Navbar from "./Component/Navbar"
import Hero from "./Component/Home"
import BookDemoPage from "./Component/Bookdemo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JewelleryPage from "./Component/JewelllaryPage";
// import Seventh from "../src/Component/Seventh"
import Footer from "../src/Component/Footer"
import './App.css'
import Navbar from './Component/Navbar';
import RealEstatePage from './Component/RealEstatePage';
import AutomobilePage from './Component/Automobiles';
import NexaCRMPage from './assets/Module/Nexacrm';
import NexaHRcrm from './assets/Module/Nexahr';
import NexaOps from './assets/Module//Nexaops';
import Nexapulse from "./assets/Module/Nexapulse"
import CRM from "./assets/Features/Crm"
import Schedule from "./assets/Features/Scheduling"
import Nexareach from "./assets/Module/Nexareach"
import NexaCare from './assets/Module/Nexacare';
import NexaBill from './assets/Module/NexaBill';
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
    <Route path="/nexacrm" element={<NexaCRMPage/>} />
     <Route path="/nexahr" element={<NexaHRcrm/>} />
          <Route path="/nexareach" element={<Nexareach/>} />
         <Route path="/nexaops" element={<NexaOps/>} />
               <Route path="/nexapulse" element={<Nexapulse/>} />
                              <Route path="/nexacare" element={<NexaCare/>} />
                              <Route path="/nexabill" element={<NexaBill/>} />

                              <Route path="/features/crm" element={<CRM/>} />
                                                            <Route path="/features/scheduling" element={<Schedule/>} />


        </Routes>
           <Footer />
    </Router>
  )
}

export default App
