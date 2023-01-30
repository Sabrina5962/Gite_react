import React from 'react'
import './produit1.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Produit1() {
  return (
    <> 
    <Header/>
       
            <h1>Produit 1</h1>  
            <img src={process.env.PUBLIC_URL + "Photo_hebergement1.png"} alt=""/>  
      
    <Footer/>      
    </>
   
  )
}

export default Produit1
