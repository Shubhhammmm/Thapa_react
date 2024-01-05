import React from "react";

import Props from "./Props";





const Card = ({imgsrc , link , seriesName }) => {

  return (
    <>
       
      <div className="cards">
        <div className="card">
          <img src={imgsrc} alt="" className="card_img" />
          <div className="card__info">
            <span className="card__category"></span>
            <h3 className="card__title">{seriesName}  </h3>
            <a href={link} target="_blank" />
            <button>Watch Now</button>

          </div>
        </div>
      </div>
      <Props/>
      
      
    </>
  );
};

export default Card;
