import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>This is About page</h1>
      <button onClick={goToContact}>Go to Contact</button>
      <button onClick={() => goBack()}>go back</button>
    </>
  );
};

export default About;
