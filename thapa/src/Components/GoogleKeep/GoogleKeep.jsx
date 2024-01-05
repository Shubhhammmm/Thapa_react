import React, { useState } from "react";
import "./GoogleKeep.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const GoogleKeep = () => {

    const [addItem  , setAddItem] = useState([]);


    const addNote = (note) => {
      setAddItem((prevData) => {
        return [...prevData, note];
      });

      setAddItem([...addItem , note])
    };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />

      {addItem.map((val , i)=>{
        return <Note
            key  = {i}
            id = {i}
            title ={val.title}
            content = {val.content}
            deleteItem = {onDelete}
        />

      })}
      <Footer />
    </>
  );
};
export default GoogleKeep;
