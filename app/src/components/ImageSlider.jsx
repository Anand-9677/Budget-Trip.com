import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
    const images = [
        "https://images.unsplash.com/photo-1651509094074-e8acaeb84d8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1697729733902-f8c92710db07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1708171581376-00e6555a91f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670499709636-a19c3293f62c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513601934074-e86a49a01889?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1532568547949-a09f1afe4d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
    }

    const isMobile = useIsMobile();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsReady(true), 1000);
      return () => clearTimeout(timer);
    }, []);


    const settings = {
      dots: !isMobile,
      infinite: true,
      centerMode: true,
      centerPadding: isMobile ? "0px" : "240px",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToScroll: 1,
      beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
      <div className="w-full mx-auto h-[30vh] md:h-[85vh]">
          <Slider {...settings}>
              {images.map((img, index) => (
                  <div key={index} className="px-2">
                      <div className='h-full md:h-[82vh] flex items-center justify-center'>
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            draggable="false"
                            className={`mx-auto rounded-xl shadow-md transition-all duration-500 
                                ${index === currentSlide ? "w-[90%] scale-100" : "w-[80%] scale-90 opacity-80"}`}
                        />
                      </div>
                  </div>
              ))}
              <div className="px-2">
                    <div className="h-[25vh] md:h-[82vh] flex items-center justify-center"><h2 className="text-center w-full text-2xl md:text-4xl font-bold text-gray-700 mb-4 transition-all duration-500 md:w-1/2">
                            and many more AMAZING places...
                        </h2>
                    </div>
                </div>
          </Slider>
      </div>
  )
}

export default ImageSlider
