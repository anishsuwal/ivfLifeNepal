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
      <section id="setup-id" className="scroll-my-[130px] md:scroll-my-[200px]">
      <div className="justify-center items-center  text-bold px-5 xl:m-32 mt-10 ">

          <div className="text-center">
              <p className="text-xl md:text-2xl font-semibold text-center text-green-600">Our IVF clinic setup.   </p>
          </div>
      <div className="relative text-xs lg:text-sm    mt-5 border-t p-5 shadow-2xl bg-white rounded-lg text-center ">
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
            className="carousel-container "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
                            <div key={index} className="carousel-slide">
                  <p className="carousel-description text-4xl font-bold p-2 text-left">{image.description}</p>


              <Image
                key={index}
                src={image.url}
                alt={`Slide ${index}`}
                className="carousel-slide"
                width={1660}
                height={650}                
              />
                            </div>


            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0  flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-[90px]"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-[90px]"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
      </div>
</section>
    );
  };
  
  export default Carousel;