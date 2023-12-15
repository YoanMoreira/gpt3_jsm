import React from 'react';
import './brand.css';  // Importe la feuille de style pour ce composant
import { google, slack, atlassian, dropbox, shopify } from './import';  // Importe les logos des entreprises depuis le fichier d'import

// Définit le composant Brand comme une fonction React
const Brand = () => {
  return (
    // Div principale du composant avec une classe CSS spécifique et un espace de rembourrage
    <div className='gpt3__brand section__padding'>
      {/* Div pour afficher le logo de Google */}
      <div>
        <img src={google} alt="google" />
      </div>
      {/* Div pour afficher le logo de Slack */}
      <div>
        <img src={slack} alt="slack" />
      </div>
      {/* Div pour afficher le logo de Atlassian */}
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      {/* Div pour afficher le logo de Dropbox */}
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      {/* Div pour afficher le logo de Shopify */}
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

// Exporte le composant Brand pour qu'il puisse être utilisé ailleurs dans l'application
export default Brand;
