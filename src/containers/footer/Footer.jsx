// Import de React depuis la bibliothèque React
import React from 'react';

// Import de l'image du logo depuis le dossier d'assets
import gpt3Logo from '../../assets/logo.svg';

// Import du fichier de style CSS pour ce composant
import './footer.css';

// Définition du composant Footer en tant que composant fonctionnel
const Footer = () => (
  // Conteneur principal avec une classe CSS
  <div className="gpt3__footer section__padding">
    {/* En-tête du pied de page avec un titre stylisé */}
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others</h1>
    </div>

    {/* Bouton de demande d'accès anticipé */}
    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    {/* Section des liens du pied de page */}
    <div className="gpt3__footer-links">
      {/* Logo et adresse de l'entreprise */}
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>

      {/* Liens vers différentes sections du site */}
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      {/* Liens vers les pages relatives à l'entreprise */}
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      {/* Coordonnées de l'entreprise */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    {/* Mention de droits d'auteur */}
    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

// Export du composant Footer pour pouvoir l'utiliser ailleurs
export default Footer;
