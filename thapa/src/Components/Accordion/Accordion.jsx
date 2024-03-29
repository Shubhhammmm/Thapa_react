import React, { useState } from "react";
import { questions } from "./api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
      <h1>React Interview Questions & Answers</h1>
        {data.map((currElem) => {
          const { id } = currElem;
          return <MyAccordion key={id} {...currElem} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
