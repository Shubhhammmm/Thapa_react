import React, { useState } from "react";
import "./GoogleKeep.css";

const CreateNote = (props) => {

    const[expand  ,setExpand] = useState(false)

  const [note, setNote] = useState({
    title: " ",
    content: "",
  });

  const InputEvent = (e) => {
    // const value = e.target.value
    // const name = e.target.name

    const { value, name } = e.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: " ",
      content: "",
    });
  };

  return (
    <>
      <div className="main_note">
        <form>
       
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="title"
          /> 
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note..."
          ></textarea>
        </form>
        <button onClick={addEvent}> Add Notes </button>
      </div>
    </>
  );
};

export default CreateNote;
