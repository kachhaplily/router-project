import React from "react";
import './About.css';

const stones = [
  {
    name: "Time Stone",
    description: "Grants the ability to manipulate time, including moving through time, creating time loops, and changing events.",
    image: "https://wallpapers.com/images/high/time-stone-1080-x-1837-wallpaper-vxqdrmyb7mmosro1.webp"},
  {
    name: "Space Stone",
    description: "Allows the user to manipulate space, creating portals and moving objects across vast distances.",
    image: "https://en.celebrity.tn/wp-content/uploads/2022/02/What-Infinity-Stone-is-the-Tesseract.jpg",
  },
  {
    name: "Reality Stone",
    description: "Gives the user the power to manipulate matter and alter reality to their will.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd77O4u6k_HdmbPzQQ-9t40OYceWVs32CninelLGMerHAtpbPWvqKYJeBi9Q6ZmHUb5c&usqp=CAU",
  },
  {
    name: "Power Stone",
    description: "Provides enhanced strength and durability, with the power to destroy or conquer civilizations.",
    image: "https://wallpapers.com/images/featured-full/power-stone-aoykaegkjzekhqyr.jpg",
  },
  {
    name: "Mind Stone",
    description: "Allows the user to enhance their mental and psionic abilities, granting control over minds.",
    image: "https://static.wikia.nocookie.net/shaniverse/images/2/21/-mind-render.jpg",
  },
  {
    name: "Soul Stone",
    description: "Grants control over life and death, with the ability to manipulate souls and access the Soul World.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg-Dcu-kXZQxKBKB1zkbzsjClaxnBtQL3HBQ730pLH42ubguV13o7eHkT4TRNWmTh_PU&usqp=CAU",
  },
];

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10 text-center">The Infinity Stones</h1>
      <div className="space-y-16">
        {stones.map((stone, index) => (
          <div key={index} className="parallax-item group relative h-96 w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <img src={stone.image} alt={stone.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
              <h2 className="text-3xl font-bold mb-4">{stone.name}</h2>
              <p className="text-lg">{stone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
