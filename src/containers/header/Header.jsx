import React from 'react';
import './header.css';  // Importe la feuille de style pour ce composant
import people from '../../assets/people.png';  // Importe l'image des personnes depuis le dossier des actifs
import ai from '../../assets/ai.png';  // Importe l'image de l'IA depuis le dossier des actifs

// Définit le composant Header comme une fonction React
const Header = () => {
  return (
    // Div principale du composant avec une classe CSS spécifique et un identifiant
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        {/* Titre principal du composant avec une classe CSS spécifique */}
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        {/* Paragraphe d'introduction */}
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        {/* Formulaire d'inscription avec champ d'e-mail et bouton */}
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        {/* Section affichant l'image des personnes et le nombre de demandes d'accès */}
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>

      {/* Section pour afficher l'image de l'IA */}
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
}

// Exporte le composant Header pour qu'il puisse être utilisé ailleurs dans l'application
export default Header;
