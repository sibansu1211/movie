import React from 'react'
import "./fav.css";
import img2 from "./images/img2.jpg";
import img1 from "./images/img1.webp";

import img9 from "./images/img9.jpg";
import img5  from "./images/img5.jpg";
import img6  from "./images/img6.jpg";

const Fav = () => {
  return (
    <div>
         <div className='fav'> <h1>Favourites</h1></div>
    <div>
    <img  className='images'   src={img6} alt="movies"/>
        <img  className='images'   src={img1} alt="movies"/>
        <img  className='images'   src={img9} alt="movies"/>
        <img  className='images'   src={img2} alt="movies"/>
        <img  className='images'   src={img5} alt="movies"/>
        
    </div>


    </div>
   
  )
}

export default Fav