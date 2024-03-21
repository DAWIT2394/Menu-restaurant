import React, { useState } from 'react';
import '../css/slider.css'; // Import your CSS file

const Slider = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const handleNext = () => {
    const slider = document.querySelector('.slider');
    const sliderWidth = slider.clientWidth;
    const imagesCount = slider.children.length;
    const maxTranslateValue = (imagesCount - 1) * sliderWidth;

    if (translateValue <= -maxTranslateValue) {
      setTranslateValue(0);
    } else {
      setTranslateValue(translateValue - sliderWidth);
    }
  };

  const handlePrev = () => {
    const slider = document.querySelector('.slider');
    const sliderWidth = slider.clientWidth;
    const imagesCount = slider.children.length;
    const maxTranslateValue = (imagesCount -1) * sliderWidth;

    if (translateValue >= 0) {
      setTranslateValue(-maxTranslateValue);
    } else {
      setTranslateValue(translateValue + sliderWidth);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(${translateValue}px)` }}>
        <img src="https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        <img src="https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        <img src="https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        <img src="https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        <img src="https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />

           
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;
