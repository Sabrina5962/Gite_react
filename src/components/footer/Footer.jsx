import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='Container_footer'>
     <div className="Adresse">
            <h3>Coordonnées</h3>
            <p>23 rue du moulin </p> 
            <p>62130 Pierremont</p>  
            <p>06 07 77 23 96 </p>
    </div>
    <div className="A_propos">
            <h3>A propos</h3>
            <Link to="#">Mentions légales</Link>
            <Link to="#">Conditions générales</Link>
            <Link to="#">Politiques de confidentialités</Link>
     </div>
     <div className="Suivez-nous">
            <h3>Suivez-nous</h3>
            <Link to="#"><img className="reseaux" src={process.env.PUBLIC_URL + "logo_facebook.png"} alt="Logo facebook"/></Link>
            
            <Link to="#"><img className="reseaux" src={process.env.PUBLIC_URL + "logo_instagram.png"} alt="Logo facebook"/></Link>
     </div>
     </div>
   </>
  )
  

}

export default Footer