import React from "react";
import { useParams } from "react-router-dom";

const marvelCards = [
  {
    title: "Iron Man",
    description: "A billionaire industrialist and genius inventor.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8fee9873092997.5bfe24ea95f50.png",
  },
  {
    title: "Captain America",
    description: "A super-soldier with unbreakable courage and a strong moral code.",
    image: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
  },
  {
    title: "Thor",
    description: "The god of thunder with unmatched strength and his powerful hammer, Mjolnir.",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
  },
  {
    title: "Black Widow",
    description: "A master spy and expert in hand-to-hand combat.",
    image: "https://m.media-amazon.com/images/I/414VvzdtyjL._SY445_SX342_.jpg"
  }
];

const Home = () => {
    const { id } = useParams();
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Marvel Heroes</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marvelCards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
