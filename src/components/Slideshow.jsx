import React, { useState, useEffect } from 'react';

// Example image imports
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide5.jpg';
import img3 from '../assets/slide3.jpg';
import img4 from '../assets/slide4.jpg';
import img5 from '../assets/slide2.jpg';
import img6 from '../assets/slide6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt="Slideshow"
                    className="w-full h-80 object-cover"
                    loading="lazy" // Lazy loading for the image
                />
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                            currentIndex === index
                                ? 'bg-orange-500'
                                : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
