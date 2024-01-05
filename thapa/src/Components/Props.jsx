import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";



const Props = () => {
  return  (
    <>{Sdata.map((e,i)=>{
             
      <Card seriesName={e.seriesName} imgsrc={e.imgsrc} link={e.link}
      key ={i} />
 })} 
 </>  
  )

 
};

export default Props;
