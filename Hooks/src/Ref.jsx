import React, { useRef, useState } from "react";

const Ref = () =>{

    const luckyname = useRef(null)

    const[show , setShow] = useState(false); 

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;
        name === "" ? alert("Please fill the data") : setShow(true)
    }

     

    return (
        <>
        <form action="" onSubmit={submitForm} >
            <div>
                <label htmlFor="luckyname">Enter your lucky name</label>
                <input type="text" id="lucky name"  ref={luckyname} />
            </div>
            <button >Submit</button>
        </form>
        <p> {show ? `Your lucky name is ${luckyname.current.value}` : "" } </p>
        

        </>
    )
}

export default Ref;