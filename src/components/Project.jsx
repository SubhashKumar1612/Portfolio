import React from 'react';

// Example image imports
import hotelManagementImage from '../assets/hms.png';
import pizzaDeliveryApp from '../assets/sub2.png';
import pokedexImage from '../assets/pokemon.png';

function Project() {
  const projects = [
    {
      id: 1,
      image: hotelManagementImage,
      title: "Hotel Management System",
      desc: "Developed student and admin login systems, including online out-pass and leave application approval, using Node.js, Express.js, MongoDB, HTML (HBS), CSS, and JS.",
      link: "https://github.com/SubhashKumar1612/Hostel-Management-System" // Add your link here
    },
    {
      id: 3,
      image: pokedexImage,
      title: "Pokedex",
      desc: "Explore the Pokémon universe on our website! Built with HTML5, CSS Flexbox, JavaScript, and React, we take extensive Pokémon data from the API and display it. Enjoy a comprehensive inventory, easy name search, and user-friendly interface.",
      link: "https://subhashpokedex.netlify.app/"
    }
  ];

  return (
    <>
    <div className="main-container py-14">
      <h1 className="text-4xl font-bold text-center underline">My Projects</h1>

      <div className="service-container flex mt-12 space-x-5 px-10">
        {projects.map((item) => (
          <div
            key={item.id}  // Add a unique key prop here
            className="cursor-pointer hover:bg-gray-100 space-y-4 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1"
          >
          <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
             {/* Use className instead of class */}
            <h1 className="text-4xl">{item.title}</h1>
            <p>{item.desc}</p>
            {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg"> {item.link ? "View Project" : "Check"}</button> */}
            <button
                 onClick={() => window.open(item.link, '_blank')}
                className="px-3 py-2 bg-orange-500 rounded-full shadow-lg"
               >
               {item.link ? "View Project" : "Check"}
               </button>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default Project;
