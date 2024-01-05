import React from "react";

let add = (a, b) => {
  let sum = a + b;
  return sum;
};

let subtract = (a, b) => {
  let sub = a - b;
  return sub;
};

let multiply = (a, b) => {
  let mult = a * b;
  return mult;
};

let divide = (a, b) => {
  let divi = a / b;
  divi = divi.toFixed(2)
  return divi;
};

const Calculator = () => {
  return (
    <>
      <ul>
        <li>sum of two number is {add(40, 4)} </li>
        <li>Minus of two number is {subtract(40, 4)}</li>
        <li>multiply of two number is {multiply(4, 4)}</li>
        <li>Division of two number is {divide( 10 , 3)} </li>
      </ul>
    </>
  );
};

export default Calculator;
