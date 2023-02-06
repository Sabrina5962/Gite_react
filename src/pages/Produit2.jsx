import React from 'react'
import './produit2.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Produit2() {
  return (
    <> 
    <Header/>
       
                 
                  <div class="container">
        <div class="carousel">
      <h2>Test page produit 2</h2>
        
    <div class="slide slide1"><img src={process.env.PUBLIC_URL + "insolite2.png"} alt="hébergements insolites" /></div>
    <div class="slide slide2"><img src={process.env.PUBLIC_URL + "Photo_hebergement1.png"} alt="hébergements insolites" /></div>
    <div class="slide slide3"><img src={process.env.PUBLIC_URL + "Photo_hebergement2.png"} alt="hébergements insolites" /></div>
    <div class="slide slide4"><img src={process.env.PUBLIC_URL + "Photo_hebergement1.png"} alt="hébergements insolites" /></div>
    <div class="slide slide5"><img src={process.env.PUBLIC_URL + "Photo_hebergement1.png"} alt="hébergements insolites" /></div>
    <div class="slide slide6"><img src={process.env.PUBLIC_URL + "Photo_hebergement1.png"} alt="hébergements insolites" /></div>
        </div>
                  </div>
                 
                  <Footer/>  
    </>
   
  )
}

export default Produit2
