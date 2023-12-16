// Importation de la bibliothèque React et du fichier de style associé
import React from 'react';
import './feature.css';

// Définition du composant Feature, prenant deux propriétés (title et text)
const Feature = ({ title, text }) => (
  // Conteneur principal du composant, appliquant une classe de style
  <div className="gpt3__features-container__feature">
    {/* Section du titre de la feature */}
    <div className="gpt3__features-container__feature-title">
      {/* Barre décorative sous le titre */}
      <div />
      {/* Titre de la feature */}
      <h1>{title}</h1>
    </div>

    {/* Section du texte de la feature */}
    <div className="gpt3__features-container_feature-text">
      {/* Paragraphe affichant le texte de la feature */}
      <p>{text}</p>
    </div>
  </div>
);

// Exportation du composant Feature pour pouvoir l'utiliser ailleurs dans l'application
export default Feature;
