import subImage from '../assets/sub.png';
import bannerImage from '../assets/profile1.svg';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function Banner() {
    const el=useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Java Programmer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100
        });
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <>
            <div  id='contact'
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                }}
                className="main-container flex items-center "
            >
                <div className="w-full flex items-center justify-center text-white m-10">
                    <div className="w-2/3 space-y-3 ml-10">
                        <h3 className="text-3xl font-semibold">Hi, I am</h3>
                        <h1 className="text-5xl font-bold">Subhash Kumar</h1>
                        <h2 className="text-3xl">A <span ref={el}></span></h2>
                        <p>
                        A developer who excels in problem-solving and teamwork. With a knack for crafting efficient software solutions, I'm dedicated to continuous learning and staying 
                        updated with the latest trends.Passionate about delivering high-quality work, I thrive in collaborative environments and embrace new challenges with enthusiasm.
                        </p>
                        <div className="icon-container flex space-x-4">
                        <a
                             href="https://www.facebook.com/yourprofile" // Replace with your Facebook profile URL
                             className="hover:animate-spin cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                             target="_blank"
                             rel="noopener noreferrer"
>
                             <i className="fa-brands text-2xl fa-facebook-f"></i>
                         </a>
                         <a
                             href="https://www.instagram.com/subhashraja143" // Instagram profile URL
                             className="hover:animate-spin cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                             target="_blank"
                             rel="noopener noreferrer"
                         >
                             <i className="fa-brands text-2xl fa-square-instagram"></i>
                         </a>
                         <a
                             href="mailto:subhashkumarr1612@gmail.com" // Email address
                             className="hover:animate-spin cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                         >
                             <i className="fa-solid text-2xl fa-envelope"></i>
                         </a>
                         <a
                             href="https://www.linkedin.com/in/subhash-kumar902181220" // LinkedIn profile URL
                             className="hover:animate-spin cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                             target="_blank"
                             rel="noopener noreferrer"
                         >
                             <i className="fa-brands text-2xl fa-linkedin"></i>
                         </a>
                         <a
                             href="https://github.com/SubhashKumar1612" // GitHub profile URL
                             className="hover:animate-spin cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                             target="_blank"
                             rel="noopener noreferrer"
                         >
                             <i className="fa-brands text-2xl fa-github"></i>
                         </a>
                         
                        </div>
                        <br />
                        <a
                            className=" mb-9 px-3 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
                            href="/contact"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <img
                        className="rounded-full my-2 shadow w-fit"
                        src={subImage}
                        alt="Subhash Kumar"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
