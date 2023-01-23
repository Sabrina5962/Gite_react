import React from 'react'
import './contact.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Contact() {
  return (
    <> 
    <Header/>
       <form action="#" method="post" id="contact_form">
                  <div class="name">
                    <label for="name"></label>
                    <input type="text" placeholder="Mon nom" name="name" id="name_input" required />
                    </div>
                  <div class="email">
                    <label for="email"></label>
                    <input type="email" placeholder="Mon email" name="email" id="email_input" required />
                  </div>
                  <div class="telephone">
                    <label for="name"></label>
                    <input type="text" placeholder="Mon numéro de téléphone" name="telephone" id="telephone_input" required />
                  </div>
                  <div class="subject">
                    <label for="subject"></label>
                    <select placeholder="Subject line" name="subject" id="subject_input" required>
                      <option disabled hidden selected>Objet</option>
                      <option>Je souhaite réserver</option>
                      <option>J'ai une ou plusieurs questions</option>
                      <option>Je tiens à vous remercier</option>
                    </select>
                  </div>
                  <div class="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="Commentaire" id="message_input" cols="30" rows="5" required></textarea>
                  </div>
                  <div class="submit">
                    <input type="submit" value="Envoyer " id="form_button" />
                  </div>
        </form>
        <Footer/>      
    </>
   
  )
}

export default Contact