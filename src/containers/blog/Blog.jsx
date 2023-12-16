// Import de React pour créer des composants React
import React from 'react';

// Import du fichier de style CSS pour ce composant
import './blog.css';

// Import des images des blogs depuis le dossier 'imports'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

// Import du composant Article depuis le dossier spécifié
import Article from '../../components/article/Article';

// Définition du composant Blog en tant que composant fonctionnel
const Blog = () => {
  return (
    // Conteneur principal avec une classe CSS et un identifiant
    <div className='gpt3__blog section__padding' id='blog'>
      {/* En-tête du blog avec un titre stylisé */}
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      {/* Conteneur pour les articles de blog, divisé en deux groupes */}
      <div className='gpt3__blog-container'>
        {/* Premier groupe d'articles de blog */}
        <div className='gpt3__blog-container_groupA'>
          {/* Utilisation du composant Article avec des propriétés spécifiques */}
          <Article imgUrl={blog01} date='sep 26, 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
        </div>
        {/* Deuxième groupe d'articles de blog */}
        <div className='gpt3__blog-container_groupB'>
          {/* Utilisation du composant Article avec des propriétés spécifiques */}
          <Article imgUrl={blog02} date='sep 26, 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imgUrl={blog03} date='sep 26, 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imgUrl={blog04} date='sep 26, 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imgUrl={blog05} date='sep 26, 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
        </div>
      </div>
    </div>
  );
}

// Export du composant Blog pour pouvoir l'utiliser ailleurs
export default Blog;
