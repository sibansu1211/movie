import React from 'react';
import "./card.css"
import img2 from "./images/img2.jpg";
import img1 from "./images/img1.webp";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5  from "./images/img5.jpg";
import img6  from "./images/img6.jpg";
import img7  from "./images/img7.webp";
import img8  from "./images/img8.jpg";
import img9  from "./images/img9.jpg";
import img10  from "./images/img10.jpg";

const Card = () => {
  return (
    <div>
        <img  className='images'   src={img2} alt="movies"/>
        <img  className='images'   src={img1} alt="movies"/>
        <img  className='images'   src={img3} alt="movies"/>
        <img  className='images'   src={img4} alt="movies"/>
        <img  className='images'   src={img5} alt="movies"/>
        <img  className='images'   src={img6} alt="movies"/>
        <img  className='images'   src={img7} alt="movies"/>
        <img  className='images'   src={img8} alt="movies"/>
        <img  className='images'   src={img9} alt="movies"/>
        <img  className='images'   src={img10} alt="movies"/>



    </div>
  )
}

export default Card