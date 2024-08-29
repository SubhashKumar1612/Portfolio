import { useState } from "react";
import bannerImage from "../assets/sub2.png"
function Achivement(){
    const [data,setdata]=useState({
        image:bannerImage,
        title:"5 Star Coder and IEEE Winner (Techno Touch)",
        desc1:`Accomplished 5-Star in Java on HackerRank, demonstrating exceptional problem-solving skills and proficiency in tackling complex coding challenges. `,
        desc2:`Winner in IEEE Techno Touch Coding Competition, an exclusive event at our college for students with advanced problem-solving skills, highlighting a competitive edge and technical expertise.`,
        actionButton:{
            title:"Read More..",
            link:'/read more'
        }
    })
    return (
        <>
            <div className="main-container py-16">
                <h1 className="text-center pb-16 text-4xl underline font-bold">Achivement</h1>
                <div className="flex items-center">
                <div className="w-full flex justify-center ">
                    {/** text container */}
                    <div className="space-y-5 w-2/3" >
                        <h1 className="text-5xl font-semibold">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p> {data.desc2} </p>
                        <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">{data.actionButton.title}</button>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    {/** image container */}
                    <img className=" w-fit" 
                    src={data.image} alt="Subhash kumar"></img>
                </div>
                </div>
            </div>
        </>
    )
}
export default Achivement;