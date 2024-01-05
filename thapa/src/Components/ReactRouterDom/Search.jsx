import React, { useState } from 'react'
import SearchResult from './SearchResult'


const Search = () => {

    const [img ,setImg] = useState("")

    const inputEvent =(e)=>{
        setImg(e.target.value)
        console.log(e.target.value);
    }


  return (
    <> 
      <div style={{width : "50%" , height: "auto" ,margin : "0 , auto" ,textAlign : "center"}}>

      <input type='text' placeholder='Search Anything' onChange={inputEvent} 
        value= {img}
      />
       {img === "" ? null : <SearchResult name={img} /> }  
      </div>
    </>
  )
}

export default Search



// margin : 30px 0;
// Padding :5px 10px,
// border-radius : 5px,
// font-family : source-code-pro , menlo
