import { useState } from "react";

function Services() {
  const [data, setData] = useState([
    {
      id: 1,
      fa: "fa-solid fa-display",
      title: "Frontend Development",
      desc: ` Proficient in creating responsive and user-centric web interfaces using HTML, CSS, and JavaScript. Skilled in leveraging React.js for dynamic, high-performance applications and seamless user experiences.`,
      actionButton: {
        title: "Check",
        link: 'https://subhashpokedex.netlify.app/',
      }
    },
    {
      id: 2,
      fa: 'fa-solid fa-database',
      title: "Backend Development",
      desc: `Experienced in building robust server-side applications using Node.js and Express.js. Proficient in designing and managing databases with MongoDB and ensuring secure, scalable, and efficient data handling.`,
      actionButton: {
        title: "Check",
        link: 'https://github.com/SubhashKumar1612/foodComma-backend',
      }
    },
    {
      id: 3,
      fa: 'fa-brands fa-aws',
      title: "Full Stack Development",
      desc: ` Skilled in creating end-to-end web applications with expertise in both frontend and backend technologies. Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB for comprehensive solutions.`,
      actionButton: {
        title: "Check",
        link: 'https://github.com/SubhashKumar1612/Hostel-Management-System',
      }
    }
  ]);

  return (
    <>
      <div id='portfolio' className="main-container py-14">
        <h1 className="text-4xl font-bold text-center underline">My Services</h1>

        <div className="service-container flex mt-12 space-x-5 px-10">
          {data.map((item) => (
            <div
              key={item.id}  // Add a unique key prop here
              className="cursor-pointer hover:bg-gray-100 space-y-4 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1"
            >
              <i className={`${item.fa} text-5xl`}></i>  {/* Use className instead of class */}
              <h1 className="text-4xl">{item.title}</h1>
              <p>{item.desc}</p>
              <button
                 onClick={() => window.open(item.actionButton.link, '_blank')}
                className="px-3 py-2 bg-orange-500 rounded-full shadow-lg"
               >
               {item.actionButton.title}
               </button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
