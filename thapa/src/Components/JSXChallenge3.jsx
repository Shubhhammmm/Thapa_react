import React from "react";

let currDate = new Date();
currDate = currDate.getHours();

let greeting = ' '
let stylingCss = { }

if(currDate >= 1 && currDate < 12){
  greeting = ("Good Morning")
  stylingCss.color = "green"
}
else if(currDate >= 12 && currDate < 16){
greeting = ('Good Afternoon')
stylingCss.color = "yellow"
}
else if(currDate >= 16 && currDate < 20){
  greeting =('Good Evening')
  stylingCss.color = "red"
}
else{
    greeting =('Good night')
    stylingCss.color = "black"
}

const JSXChallenge3 = () =>{

    return (
        <>
      <h1>Hey Brother,  <span style={stylingCss}>{greeting} </span>  </h1>
        </>
    )
}

export default JSXChallenge3
