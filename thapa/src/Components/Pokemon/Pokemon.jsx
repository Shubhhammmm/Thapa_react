import React, { useEffect, useState } from "react";
import ComA from "./ComA";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();
  const[names  ,setNames] = useState();
  const[ moves , setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setNames(res.data.name)
      setMoves(res.data.moves.length)
    }
    getData();
  });

  return (
    <>
      <h1>You choose {num} value </h1>
      <h1> My name is {names} </h1>
      <h1> I have {moves} moves </h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value={"1"}>1</option>
        <option value={"25"}>25</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
      </select>
    </>
  );
};

export default Pokemon;
