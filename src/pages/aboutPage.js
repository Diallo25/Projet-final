import React from 'react';
import '../Styles/aboutPage.css';

const teamMembers = [
  { id: 1, name: 'Amadou Diallo', role: 'Fondateur & Designer', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: 'Awa Fall', role: 'Responsable Marketing', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, name: 'Moussa Sy', role: 'Chef de Production', photo: 'https://randomuser.me/api/portraits/men/76.jpg' },
];

const AboutPage = () => {
  return (
    <main className="about-page">
      <h1>À propos de Orca Boutique</h1>
      <img 
        className="about-hero" 
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1350&q=80" 
        alt="Showroom de meubles" 
      />
      <section className="about-content">
        <p>
          Chez <strong>Orca Boutique</strong>, nous sommes passionnés par le design et l’élégance.
          Notre mission est de vous offrir des meubles de qualité qui sublimeront votre intérieur et vous apporteront confort et style.
        </p>
        <p>
          Depuis notre création, nous sélectionnons rigoureusement chaque pièce, en mettant l’accent sur le savoir-faire artisanal et les matériaux durables.
          Que vous cherchiez un canapé moderne, une table à manger ou une chaise design, vous trouverez chez nous des produits qui correspondent à vos goûts.
        </p>
        <p>
          Notre équipe est toujours à votre écoute pour vous conseiller et vous accompagner dans vos choix.
          Merci de faire confiance à Orca Boutique pour aménager votre espace de vie.
        </p>
      </section>

      <section className="team-section">
        <h2>Notre équipe</h2>
        <div className="team-list">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
