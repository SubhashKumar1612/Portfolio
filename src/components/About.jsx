import { useState } from "react";
import bannerImage from "../assets/sub2.png"
function About(){
    const [data,setdata]=useState({
        image:bannerImage,
        title:"Java & Mern Stack Developer",
        desc1:`As a skilled Java and Mern Stack Developer, I specialize in building robust backend systems and creating dynamic, responsive web interfaces using Java, Spring, JavaScript, React, and modern web technologies.`,
        desc2:`With expertise in Java, Spring Boot, and full-stack web development, I deliver high-performance applications, emphasizing scalability, security, and seamless user experiences. My proficiency in JavaScript, React, and modern frameworks allows me to craft intuitive and visually appealing web solutions.`,
        actionButton:{
            title:"Read More..",
            link:'/read more'
        }
    })
    return (
        <>
            <div id="about" className="main-container py-16">
                <h1 className="text-center pb-16 text-4xl underline font-bold">About Me</h1>
                <div className="flex items-center">
                <div className="w-full flex justify-center">
                    {/** image container */}
                    <img className=" w-fit" 
                    src={data.image} alt="Subhash kumar"></img>
                </div>
                <div className="w-full flex justify-center ">
                    {/** text container */}
                    <div className="space-y-5 w-2/3" >
                        <h1 className="text-5xl font-semibold">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p> {data.desc2} </p>
                        <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">{data.actionButton.title}</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default About;