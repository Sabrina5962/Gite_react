import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (

    <>

        <nav>
          <div className="logoH">
        <Link to="/">
         <img className="logo" src={process.env.PUBLIC_URL + "logo_gite_moulin.PNG"} alt="Logo"/>
         </Link>
         </div>
            <div><a href="produit1">Hébergements classiques</a></div>
            <div><a href="produit2">Hébergements insolites</a></div>
            <div><a href="services">Services</a></div>
            <div><a href="Contact">Contact</a></div>
        </nav>
        
    </>
    
  )
}

export default Header