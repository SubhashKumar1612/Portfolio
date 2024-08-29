import { useState } from "react"
import about from '../components/About'
function Header(){
    const [brandName,setBrandName]=useState("Subhash Kumar");
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"#home",
            id:1,
        },
        {
            title:"About",
            link:"#about",
            id:2, 
        },
        {
            title:"Skills",
            link:"#skill",
            id:3,
        },
        {
            title:"Portfolio",
            link:"#portfolio",
            id:4,
        },{
            title:"Contact",
            link:"#contact",
            id:5,
        }
    ])
    const [actionButton, setActionButton] = useState({
        title: "Download CV",
        link: "https://drive.google.com/file/d/1bGJlFyYZ0OMPQylCl0xickGwp7WN-j8D/view?usp=drivesdk",
      });
    return (
    <>
       <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100 ">
            <div>{/** brand logo */}
                <h1 className="text-3xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-6">
                {
                    menuLinks.map(link=>(
                        <a key={link.id} href={link.link} className="hover:text-orange-600">{link.title}</a>
                    ))
                }
                {/* <a href="/about" className="hover:text-orange-600">About</a>
                <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
                <a href="/contact" className="hover:text-orange-600">Contact</a> */}
            </div>
            <a href={actionButton.link} className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl">
                   {actionButton.title}
                </a>
       </div>
    </>
  )
};
export default Header