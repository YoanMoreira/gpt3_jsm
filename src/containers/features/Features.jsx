// Importation de la bibliothèque React, du composant Feature et du fichier de style associé
import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

// Données des fonctionnalités, chaque objet représente une fonctionnalité avec un titre et un texte
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  },
];

// Définition du composant Features en tant que composant fonctionnel
const Features = () => (
  // Conteneur principal du composant, appliquant une classe de style et un identifiant
  <div className="gpt3__features section__padding" id="features">
    {/* Section pour le titre principal et le sous-titre */}
    <div className="gpt3__features-heading">
      {/* Titre principal avec un effet de dégradé de couleur */}
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* Sous-titre */}
      <p>Request Early Access to Get Started</p>
    </div>

    {/* Section pour afficher les fonctionnalités à partir des données définies ci-dessus */}
    <div className="gpt3__features-container">
      {/* Utilisation de la méthode map pour parcourir les données des fonctionnalités et créer un composant Feature pour chaque entrée */}
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

// Exportation du composant Features pour pouvoir l'utiliser ailleurs dans l'application
export default Features;
