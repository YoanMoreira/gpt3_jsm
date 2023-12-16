// Importation de la bibliothèque React et du fichier de style associé
import React from 'react';
import './cta.css';

// Définition du composant Cta en tant que composant fonctionnel
const Cta = () => {
  return (
    // Conteneur principal du composant, appliquant une classe de style
    <div className='gpt3__cta'>
      {/* Section pour le contenu du Cta */}
      <div className='gpt3__cta-content'>
        {/* Paragraphe indiquant l'action à effectuer */}
        <p>Request Early Access to Get Started</p>
        {/* Titre du Cta */}
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      
      {/* Section pour le bouton d'action du Cta */}
      <div className='gpt3__cta-button'>
        {/* Bouton avec le texte "Get Started" */}
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
}

// Exportation du composant Cta pour pouvoir l'utiliser ailleurs dans l'application
export default Cta;
