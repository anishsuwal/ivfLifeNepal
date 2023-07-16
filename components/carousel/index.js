import { useState, useRef } from 'react';
import Image from "next/image"


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleSwipe = (event) => {
      const swipeThreshold = 50;
      const deltaX = event.deltaX;
  
      if (deltaX > swipeThreshold) {
        prevSlide();
      } else if (deltaX < -swipeThreshold) {
        nextSlide();
      }
    };
  
    return (
      <div className="relative">
        <div
          className="overflow-hidden"
          ref={carouselRef}
          onTouchStart={(e) => {
            const touchObject = e.changedTouches[0];
            const startX = touchObject.clientX;
            const startY = touchObject.clientY;
  
            const handleTouchMove = (event) => {
              const touchObject = event.changedTouches[0];
              const deltaX = touchObject.clientX - startX;
              const deltaY = touchObject.clientY - startY;
  
              if (Math.abs(deltaY) < Math.abs(deltaX)) {
                handleSwipe({ deltaX });
              }
  
              carouselRef.current.removeEventListener('touchmove', handleTouchMove);
            };
  
            carouselRef.current.addEventListener('touchmove', handleTouchMove);
          }}
        >
          <div
            className="carousel-container"
            style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
               <Image
                    key={index}
                    src={image.url}
                    alt={`Slide ${index}`}
                    className="carousel-slide"
                    width={500}
                    height={300}
                    />
                <p className="carousel-description">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Rest of the component code... */}
      </div>
    );
  };
  
  export default Carousel;