
import React, { useState } from "react";

const Todolist22 = (props) => {

    const[line , setLine] = useState(false);

    const cutIt =()=>{
       setLine(true) 
    }

  return (
    <>  
        <span>
        <button onClick={cutIt} >Delete</button>
        <li style={{textDecoration : line ? "line-through" : "none"}} >{props.text} </li>
        </span>
        
      
      

        
    </>
  );
};

export default Todolist22;
