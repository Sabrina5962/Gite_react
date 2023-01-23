import React from "react";
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Insolites from "./pages/Insolites";
import Produit1 from "./pages/Produit1";
import Produit2 from "./pages/Insolites";
import Services from "./pages/Services";

function App() {
    return (
       <>
            <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/produit1" exact element={<Produit1 />} />
                <Route path="/produit2" exact element={<Produit2 />} />
                <Route path="/services" exact element={<Services />} />
                <Route path="/insolites" exact element={<Insolites />} />
            </Routes>
            </BrowserRouter>
      </>
    )
}

export default App;
