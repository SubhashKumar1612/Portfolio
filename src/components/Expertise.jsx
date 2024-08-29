import { useState } from 'react';
import bannerImage from '../assets/profile1.svg';

function Expertise(){
    const [skills, setSkills] = useState([
        { id: 1, name: "Core Java" },
        { id: 2, name: "Node Js" },
        { id: 3, name: "Express Js" },
        { id: 4, name: "MongoDB" },
        { id: 5, name: "React Js" },
        { id: 6, name: "HTML" },
        { id: 7, name: "CSS" },
        { id: 8, name: "JavaScript" },
        { id: 9, name: "C" },
        { id: 10, name: "hbs" },
        { id: 11, name: "Tailwind CSS" },
        { id: 12, name: "Git" },
        { id: 13, name: "GitHub" },
        { id: 14, name: "Netlify" },
        { id: 15, name: "VS Code" },
        { id: 16, name: "Eclipse" },
        { id: 17, name: "Postman" },
      ]);
    
    return (
        <>
            <div id='skill' className="my-14">
                <h1 className="text-4xl font-bold underline text-center">My Expertise</h1>
            </div>
            {/**box section */}
            <div 
            style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                }}
            className="box-container flex items-center py-16">
                <div className="flex justify-center">
                <div className="w-2/3 text-center">
                   <h1 className="text-4xl font-bold space-y-4  ">Technical Proficiencies</h1>
                   <p>Proficient in Java, C, JavaScript, ExpressJS, ReactJS, HTML, and CSS. Experienced with GitHub, Git, Figma, React, MongoDB, Handlebars, Windows, and Linux. Strong in Data Structures, Algorithms, and Object-Oriented Programming (OOP).</p>
                   <button className="text-2xl m-5 px-4 py-2 bg-orange-500 rounded-full shadow-lg">Hire Me</button>
                </div>
                </div>
                <div  className="flex justify-center">
                    <div className="flex  space-x-3  flex-wrap justify-center items-center ">
                    {
                        skills.map((skill)=>(
                            <p key={skill.id}
                            className="bg-gray-300 w-fit px-3 py-3 rounded-full text-center hover:bg-orange-600 cursor-pointer">
                    {skill.name}
                    </p>
                        ))
                    }
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expertise;