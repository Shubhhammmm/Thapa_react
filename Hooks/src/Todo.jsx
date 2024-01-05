import React, { useState } from 'react'



const Todo = () => {

    const myBio = [
        {
           id : 0 , myName : "Shubham" , age : 27,
        },
        {
            id : 1 , myName : "Shub" , age : 17,
         },
         {
            id : 3 , myName : "Shubha" , age : 37,
         },
    ]
    
    const [myArray , setMyArray] = useState(myBio)
    
    const clearArray = () =>{
        setMyArray([]);
    }

    const removeElem = (id)=>{
        const myNewArray = myArray.filter((currElem)=>{
             return currElem.id === id;
        })
        setMyArray( myNewArray )

    }

  return (
    <>
    {
        myArray.map((currElem , i)=>{
              return (
                <h1 key={i} > Name :{currElem.myName} & age:{currElem.age}
                <button onClick={() => removeElem(currElem.id)  }> Remove </button>
                </h1>

              )
        })
    }

    <button onClick={clearArray} >Clear</button>

      
    </>
  )
}

export default Todo
