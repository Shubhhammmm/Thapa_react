import React from "react";
import './JSXAttributes.css'


// .header{
//     text-align: center;
//     color: blue;
//     font-weight: bold;
//     text-shadow: 0px 2px  4px #ffe9c5;
//     margin: 40px;
//     font-family : 'Josefin Sans', sans-serif;


// }

const heading ={
    color : 'blue',
    textAlign : 'center',
    fontWeight : 'bold',
    textShadow : '0px 2px 4px #ffe9c5',
    margin : '40px',
    fontFamily : '"Josefin Sans" , sansSerif'
    
}



const JSXAttributes = () =>{ 

    const name = "Shubham"
    const img1 = "https://picsum.photos/251/300"
    const img2 = "https://picsum.photos/250/300"
    const img3 = "https://picsum.photos/254/300"
    const link = "www.facebook.com"


    return(
        <>
        <h2 style ={heading}  >  {`My Self  ${name}`}</h2>
        <div className = "img_div">
        <img src= {img1} alt='View' />
        
        <img src= {img2} alt='View' />
        <a href={link} target="_blank" >
        <img src= {img3} alt='View' />
        </a>
        </div>
        
        </>
    )
}

export default JSXAttributes;