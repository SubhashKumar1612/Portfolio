import { useState } from "react";
import bannerImage from "../assets/sub2.png"
import Slideshow from "./Slideshow";

function Postion(){
    const [data,setdata]=useState({
        image:bannerImage,
        title:"Organized hackathon & Bharat Block Chain Yatra",
        title2:"Udaan |Cultural  Club ",
        desc1:`Organized a hackathon, fostering innovation and collaboration among participants. Served as a coordinator at Bharat Blockchain Yatra, managing event logistics and ensuring smooth operations throughout the blockchain-focused event.`,
        desc2:`The Cultural Society organizes events to celebrate and promote cultural diversity, 
holds festivals, performances, workshops, discussions and other activities to foster 
community involvement and appreciation .`,
        actionButton:{
            title:"Read More..",
            link:'/read more'
        }
    })
    return (
        <>
            <div className="main-container py-16">
                <h1 className="text-center pb-16 text-4xl underline font-bold">Postion & Responsibility</h1>
                <div className="flex items-center">
                <div className="w-full flex justify-center mx-4">
                     {/** Slideshow container */}
                <Slideshow />
                </div>
                <div className="w-full flex justify-center ">
                    {/** text container */}
                    <div className="space-y-5 w-2/3" >
                        <h1 className="text-5xl font-semibold">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <h1 className="text-5xl font-semibold">{data.title2}</h1>
                        <p> {data.desc2} </p>
                        <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">{data.actionButton.title}</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Postion;