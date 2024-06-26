// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "./slider-data";
// import "./Slider.scss";

// export default function Slider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = sliderData.length;

//   const autoScroll = true;
//   const slideIntervalRef = useRef(null);

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slideLength - 1 ? 0 : prevSlide + 1
//     );
//   }, [slideLength]);

//   const prevSlide = useCallback(() => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slideLength - 1 : prevSlide - 1
//     );
//   }, [slideLength]);

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       function auto() {
//         slideIntervalRef.current = setInterval(nextSlide, 5000);
//       }
//       auto();
//     }
//     return () => clearInterval(slideIntervalRef.current);
//   }, [autoScroll, nextSlide]);

//   return (
//     <div className="slider">
//       <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
//       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

//       {sliderData.map((slide, index) => {
//         const { image, heading, desc } = slide;

//         return (
//           <div
//             key={index}
//             className={index === currentSlide ? "slide current" : "slide"}
//           >
//             {index === currentSlide && (
//               <>
//                 <img src={image} alt="slide" />
//                 <div className="content">
//                   <h2>{heading}</h2>
//                   <p>{desc}</p>
//                   <hr />
//                   <a href="#product" className="--btn --btn-primary">
//                     Shop Now
//                   </a>
//                 </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import "./Slider.scss";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const slideIntervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideLength - 1 ? 0 : prevSlide + 1
    );
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideLength - 1 : prevSlide - 1
    );
  }, [slideLength]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      function auto() {
        slideIntervalRef.current = setInterval(nextSlide, 10000);
      }
      auto();
    }
    return () => clearInterval(slideIntervalRef.current);
  }, [autoScroll, nextSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        const translateX = index * 100 - currentSlide * 100;

        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            <img src={image} alt="slide" className="slide-image" />
            <div className="content">
              <h2>{heading}</h2>
              <p>{desc}</p>
              <hr />
              <a href="#product" className="--btn --btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
