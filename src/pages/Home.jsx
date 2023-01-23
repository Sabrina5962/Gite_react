import React from 'react'
import './home.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Home() {
  return (

    <>
     <Header/>
     <div classNameName="logo"><img src={process.env.PUBLIC_URL + "photo_homepage.png"} alt=""/></div>
     <div id="photo">
        <h1>Gîte du Moulin</h1>
    </div>:            
    <p className="propos">
        Émilie et Jérôme vous accueillent dans leur corps de ferme, situé à Pierremont dans les Hauts de France : « Gîte
        du Moulin ». La dépendance a été entièrement rénovée pour accueillir leurs hébergements :
        un gîte pour 1 à 6 personnes de 100m² (2 chambres à l’étage), d’un studio de 40m², d’un studio " Suite Privatif
        " de 40m² avec son spa privatif. Dans leur terrain, plusieurs hébergements insolites : Une Roulotte, un Kota
        Scandinave simple, un Kota Scandinave avec son bain nordique privatif.
        Les gîtes sont confortables et fonctionnels. Tout est à votre disposition pour passer un agréable séjour en
        couple, en famille ou entre amis. Venez les découvrir...
        Nous sommes situés dans un petit village du Ternois, à 5 minutes du Circuit de Croix en Ternois, 10 minutes de
        Saint Pol Sur Ternoise, 30 minutes d'Arras, 45 minutes de la Côte d'Opale, Saint Omer... Nous avons encore de
        belles idées à mettre en place au cours de mois à venir.
        A très bientôt
        Émilie et Jérôme
    </p>
    <section>
        <div id="container">
                    <div className="Hébergements classiques">
            <a href="Page_produit1">
                <h4>Hébergements classiques</h4>
            </a>
            <img src={process.env.PUBLIC_URL + "chambre_classique2.png"} alt="chambre classique" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="container_bouton">
                    <button type="button" className="button">
                        <span>Réservation</span>
                    </button>
            </div>
                    </div>
        
                    <div className="Hébergements insolites">
                <a href="Page_produit2">
                    <a href="Page_produits2">#</a>
                    <h4>Hébergements insolites</h4>
                </a>
            <img src={process.env.PUBLIC_URL + "insolite2.png"} alt="hébergements insolites"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.fdshj </p>
                    <div className="container_bouton">
                    <button type="button" className="button">
                        <span>Réservation</span>
                    </button>
            </div> 
            </div>
            <div className="service">
                <a href="Page_services.html">
                    <h4>Services</h4>
                </a>
                <img src={process.env.PUBLIC_URL + "servicesold2.png"} alt="hébergements insolites"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className="container_bouton">
                    <button type="button" className="button">
                        <span>Réservation</span>
                    </button>
                </div>   



            </div>
        
    </section>
    <Footer />
    {/* <section>
                Hébergement classNameiques
                <img src={process.env.PUBLIC_URL + } alt="" />
                <img src="./image/classNameique.png" alt="Page_produit1.hmtl">
             
                
            </div>
            <div className="insolite">
                <a href="Page_produit2.html">
                    <h4>Hébergements insolites</h4>
                </a>
                <img src="./image/insolite2.png" alt="">
               
            </div>
            <div className="service">
                <a href="Page_services.html">
                    <h4>Services</h4>
                </a>
                <img src="./image/services.png" alt="">
                
            </div>
        </div>
    </section> */}
        
    </>
  )
}

export default Home