import React, { useState, useEffect } from "react";
import './achievement.css';
import certificatesData from './certificatesData';
import SimpleImageSlider from 'react-simple-image-slider';

const Achievement = () => {

  const [sliderImages, setSliderImages] = useState([]);
  
  useEffect(() => {
    // Map over the data array and create a new array with the required format for SimpleImageSlider
    const formattedImages = certificatesData.map((item) => ({
      url: item.certImage,
      alt: item.name,
    }));
    // Step 3: Set the sliderImages state with the formatted data
    setSliderImages(formattedImages);
  }, []);

  return (
    <section id='achievement'>
        <h2>Certificates</h2>
        <div className='container achievement_container'>
          <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              // Your code when the slide changes
            }}
            autoPlayDelay={3}
          />
        </div>
    </section>
  )
}

export default Achievement