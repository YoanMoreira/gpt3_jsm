// Importation de la bibliothèque React, du composant Feature et du fichier de style associé
import React from 'react';
import Feature from '../../components/feature/Feature'; // Assurez-vous que le chemin d'importation est correct
import './whatGPT3.css';

// Définition du composant WhatGPT3 en tant que composant fonctionnel
const WhatGPT3 = () => (
  // Conteneur principal du composant, appliquant une classe de style et un identifiant
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    {/* Section pour la première feature en utilisant le composant Feature */}
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>

    {/* Section pour le titre principal et le sous-titre */}
    <div className="gpt3__whatgpt3-heading">
      {/* Titre principal avec un effet de dégradé de couleur */}
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* Sous-titre */}
      <p>Explore the Library</p>
    </div>

    {/* Section pour les features suivantes, utilisant à nouveau le composant Feature */}
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

// Exportation du composant WhatGPT3 pour pouvoir l'utiliser ailleurs dans l'application
export default WhatGPT3;
