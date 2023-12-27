// Team.js
import React from 'react';
import './Style.css'; // Import your CSS file
import Card from './Card'; // Import your Card component

const Team = () => {
  const cardItems = [
    {
      id: 1,
      image: '/TeamImages/team3.PNG',
      name: 'Mouhib Bouzamitta',
      sentence: 'Back-End developer',
    },
    {
      id: 2,
      image: '/TeamImages/team4.PNG',
      name: 'Khaled Dridi',
      sentence: 'Front-End developer.',
    },
    {
      id: 3,
      image: '/TeamImages/team1.PNG',
      name: 'Youssef EL Ouedi',
      sentence: 'Back/Front-End developer',
    },
    {
      id: 4,
      image: '/TeamImages/team2.PNG',
      name: 'Firas Mestiri',
      sentence: 'Front-End developer.',
    },
  ];

  return (
    <div className="card-special-container">
      {cardItems.map((card) => (
        <Card className="card" key={card.id} image={card.image} name={card.name} sentence={card.sentence} />
      ))}
    </div>
  );
};

export default Team;