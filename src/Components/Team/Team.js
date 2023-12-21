// Team.js
import React from 'react';
import './Style.css'; // Import your CSS file
import Card from './Card'; // Import your Card component

const Team = () => {
  const cardItems = [
    {
      id: 1,
      image: 'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
      name: 'Mouhib',
      sentence: 'This is the first team member.',
    },
    {
      id: 2,
      image: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
      name: 'Khaled',
      sentence: 'This is the second team member.',
    },
    {
      id: 3,
      image: 'https://media.gettyimages.com/id/1388221635/photo/standing-tall-female-brown-eurasian-brown-grizzly-bear-and-cubs-in-forest-grand-teton-wyoming.jpg?s=612x612&w=gi&k=20&c=nLjN9Zws2YdDpwPrve7V4U3VaUmFXNlzjQ4r-_zYuVs=',
      name: 'Boss',
      sentence: 'This is the third team member.',
    },
    {
      id: 4,
      image: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/63281e7e115c6_ai4xiarsh1x41__700.jpg',
      name: 'Firas',
      sentence: 'This is the fourth team member.',
    },
  ];

  return (
    <div className="card-container">
      {cardItems.map((card) => (
        <Card key={card.id} image={card.image} name={card.name} sentence={card.sentence} />
      ))}
    </div>
  );
};

export default Team;
