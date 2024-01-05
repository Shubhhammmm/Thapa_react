import axios from "axios";
import React, { useState } from "react";

const RazorPay = () => {
  const [data, setData] = useState();
  const [ifsc, setIfsc] = useState();

  const submitForm = () => {
    axios
      .get(`https://ifsc.razorpay.com/${ifsc}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  return (
    <>
      <div style={{width : "200px"}} >
        <input
          type="text"
          placeholder="Enter IFSC Code"
          onChange={(e) => setIfsc(e.target.value)}
        />
        <button onClick={submitForm}>Submit</button>
      </div>
      <p> {JSON.stringify(data)} </p>
    </>
  );
};

export default RazorPay;
