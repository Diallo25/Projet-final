import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../Data/products';
import heroCanape from '../images/canape.jpg'
import heroLit from '../images/lit.jpg'
import heroTable from '../images/table.jpg'
import heroChaise from '../images/chaise (2).jpg'
import heroRangement from '../images/rangement.jpg'
import '../Styles/categories.css';

const categories = [
  {
    name: 'Canapés',
    slug: 'canapes',
    image: heroCanape,
  },
  {
    name: 'Lits',
    slug: 'lits',
    image: heroLit,
  },
  {
    name: 'Tables',
    slug: 'tables',
    image: heroTable,
  },
  {
    name: 'Chaises',
    slug: 'chaises',
    image:heroChaise,
  },
  {
    name: 'Rangements',
    slug: 'rangement',
    image: heroRangement,
  },
];

const CategoriesPage = () => {
  const [search, setSearch] = useState('');

  // Filtrage des catégories selon la recherche
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  // Compter les produits par catégorie
  const getCountByCategory = (slug) =>
    products.filter((p) => p.category === slug).length;

  return (
    <div className="categories-page">
      <div className="banner">
        <h1>Explorez nos catégories</h1>
        <p>Choisissez des meubles adaptés à chaque pièce de votre maison</p>
      </div>

      <input
        type="text"
        placeholder="Rechercher une catégorie..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories-grid">
        {filteredCategories.map((cat) => (
          <div className="category-card" key={cat.slug}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{getCountByCategory(cat.slug)} produits</p>
            <Link to={`/categories/${cat.slug}`} className="view-btn">
              Voir les produits
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
