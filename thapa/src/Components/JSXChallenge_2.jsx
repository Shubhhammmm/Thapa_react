import React from "react";

const JSXChallenge_2 = () => {

    

const today = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// const median = new Date();
// const time = median.getHours() +":"+median.getMinutes()+":"+median.getSeconds()



  return (
    <>
      <h1>My Self Shubham</h1>
      <p>{ `Todays's date is ${today} ` } </p>
      <p>{`Current Time is ${time}` }</p>
    </>
  );
};

export default JSXChallenge_2;
