import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
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
   </>
  )
  

}

export default Footer