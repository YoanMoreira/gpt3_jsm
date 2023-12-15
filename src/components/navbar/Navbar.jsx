import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';  // Importe les icônes du menu et de fermeture de react-icons
import logo from '../../assets/logo.svg';  // Importe le logo depuis le dossier des actifs
import './navbar.css';  // Importe la feuille de style pour ce composant

// Définit le composant Navbar comme une fonction React
const Navbar = () => {
  // Utilise le hook d'état (useState) pour gérer l'état du menu déroulant
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Div principale du composant avec une classe CSS spécifique
    <div className="gpt3__navbar">
      {/* Section des liens de la barre de navigation */}
      <div className="gpt3__navbar-links">
        {/* Logo de l'application */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        {/* Conteneur des liens de navigation */}
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      {/* Section de connexion/inscription */}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {/* Section du menu déroulant pour les petits écrans */}
      <div className="gpt3__navbar-menu">
        {/* Condition ternaire pour afficher l'icône du menu ou de fermeture en fonction de l'état du menu déroulant */}
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {/* Condition pour afficher le menu déroulant s'il est activé */}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            {/* Liens du menu déroulant */}
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            {/* Section de connexion/inscription dans le menu déroulant */}
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Exporte le composant Navbar pour qu'il puisse être utilisé ailleurs dans l'application
export default Navbar;
