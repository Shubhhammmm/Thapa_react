import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>This is Contact page</h1>
      <button onClick={goToHome}>Go to Home</button>
       <button onClick={()=>{
        navigate(-1)
       }} >go back</button>
    </>
  );
};

export default Contact;
