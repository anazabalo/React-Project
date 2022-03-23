import { useState } from 'react';
import DataSlider from 'DataSlider.json';
//import BtnSlider from './BtnSlider'

const Slider = () => {
  return (
    <div className="containerSlider">
      {DataSlider.map((obj, index) => {
        return (
          <div>
            <img src={process.env.PUBLIC_URL + obj.image} alt="Slider Images" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
