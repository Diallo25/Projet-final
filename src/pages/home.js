import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cardContext';
import heroImage from '../images/pexels-aj-ahamad-767001191-32168986.jpg';
import heroChaise from '../images/chaise.jpg';
import heroTable from '../images/table en bois.jpg';
import heroChambre from '../images/chambre.jpg';
import heroCuisine from '../images/cuisine.jpg';
import heroMeuble from '../images/meubleTV.jpg';
import '../Styles/orcaHome.css';
import Slider from "react-slick";

// Promotions - images haute qualité + messages ciblés
const promotions = [
  {
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    title: "Mobilier de salon -20%",
    description: "Transformez votre espace de vie avec notre collection salon en promotion exclusive.",
  },
  {
    img : heroChaise,
    title: "Chaises design -15%",
    description: "Alliez confort et élégance à votre salle à manger avec nos offres exceptionnelles.",
  },
  {
    img: heroTable,
    title: "Tables en bois massif",
    description: "Sublimez vos repas avec nos tables robustes et stylées, offre limitée.",
  },
];

// Catégories avec description concise
const categories = [
  { 
    name: 'Salon', 
    slug: 'salon', 
    image: heroMeuble,
    desc: "Canapés, fauteuils et meubles TV pour un salon convivial et chic."
  },
  { 
    name: 'Chambre', 
    slug: 'chambre', 
    image: heroChambre,
    desc: "Lits, armoires et accessoires pour un havre de paix élégant."
  },
  { 
    name: 'Cuisine', 
    slug: 'cuisine', 
    image: heroCuisine,
    desc: "Équipements modernes et pratiques pour une cuisine fonctionnelle et design."
  },
];

// Témoignages clients
const testimonials = [
  {
    name: "Sophie M.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "J’ai adoré la qualité et la rapidité de livraison. Mon salon n’a jamais été aussi élégant !",
  },
  {
    name: "Marc D.",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Service client au top, très à l’écoute et conseils précieux pour mes choix.",
  },
  {
    name: "Claire L.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Des meubles durables et élégants, parfaits pour mon appartement moderne.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: true,
  pauseOnHover: true,
};

const HomePageOrcaStyle = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="orca-home">

      {/* Navbar */}
      <header className="orca-navbar">
        <div className="orca-logo">ORCA</div>
        <nav>
          <ul className="orca-nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/products">Produits</Link></li>
            <li><Link to="/categories">Catégories</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart" className="cart-link">🛒 Panier ({totalItems})</Link></li>
            <li><Link to="/login" className="login-btn">Connexion</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <img src={heroImage} alt="Meubles haut de gamme" className="hero-img" />
        <div className="hero-text">
          <h1>Design & Élégance pour chaque intérieur</h1>
          <p>Découvrez notre nouvelle collection haut de gamme pour sublimer votre espace de vie.</p>
          <Link to="/products" className="cta-btn">Explorer la collection</Link>
        </div>
      </section>

      {/* Promotions */}
      <section className="promo-section">
        <h2>Promotions exclusives</h2>
        <Slider {...settings}>
          {promotions.map((promo, index) => (
            <div key={index} className="promo-card">
              <img src={promo.img} alt={promo.title} />
              <div className="promo-info">
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <button className="promo-btn">Voir l'offre</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Catégories */}
      <section className="categories-section">
        <h2>Explorez nos catégories</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <Link to={`/category/${cat.slug}`} key={cat.slug} className="category-card">
              <img src={cat.image} alt={cat.name} />
              <div className="category-content">
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="why-choose-us">
        <h2>Pourquoi choisir ORCA ?</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="icon">🏆</span>
            <h3>Qualité Premium</h3>
            <p>Des matériaux sélectionnés pour une durabilité et un confort incomparables.</p>
          </div>
          <div className="feature-item">
            <span className="icon">🚚</span>
            <h3>Livraison Rapide</h3>
            <p>Votre commande livrée directement chez vous, dans les meilleurs délais.</p>
          </div>
          <div className="feature-item">
            <span className="icon">📞</span>
            <h3>Support 7j/7</h3>
            <p>Une équipe dédiée pour répondre à toutes vos questions rapidement.</p>
          </div>
          <div className="feature-item">
            <span className="icon">💰</span>
            <h3>Meilleurs Prix</h3>
            <p>Des offres compétitives toute l'année, sans compromis sur la qualité.</p>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="testimonials-section">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonials-grid">
          {testimonials.map(({name, photo, text}, i) => (
            <div key={i} className="testimonial-card">
              <img src={photo} alt={name} className="testimonial-photo" />
              <p className="testimonial-text">"{text}"</p>
              <h4 className="testimonial-name">— {name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / Conseils déco */}
      <section className="blog-section">
        <h2>Conseils & Inspirations</h2>
        <p>Découvrez nos articles pour embellir et optimiser votre intérieur.</p>
        <Link to="/blog" className="blog-btn">Voir les articles</Link>
      </section>

      {/* Footer */}
      <footer className="orca-footer">
        <div className="footer-content">
          <div>
            <h3>ORCA Boutique</h3>
            <p>Votre partenaire mobilier haut de gamme.</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy">Politique de confidentialité</Link>
            <Link to="/terms">Conditions générales</Link>
            <Link to="/contact">Contactez-nous</Link>
          </div>
          <div className="social-media">
            <a href="#" aria-label="Facebook">📘</a>
<a href="#" aria-label="Instagram">📸</a>
<a href="#" aria-label="Twitter">🐦</a>
</div>
</div>
<p className="copyright">© {new Date().getFullYear()} Orca Boutique - Tous droits réservés</p>
</footer>
</div>
);
};

export default HomePageOrcaStyle;