import React from 'react';
import "./SliderComponenet.css"

const SliderComponent = (props) => {
  
    const fillStyle = {
      width: `${props.percent}%`,
    };
  
    return (
      <div className="slider-container">
        <div className="slider-background"></div>
        <div className="slider-fill" style={fillStyle}></div>
      </div>
    );
  };

export default SliderComponent;
