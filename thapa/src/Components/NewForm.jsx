import React, { useState } from "react";
// import "./Forms.css"

const NewForm = () => {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const onSubmits = (e) => {
    e.preventDefault();
    alert("form Submitted");
  };

  const submitForm = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const { value, name } = e.target;

    setName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
      //   if (name === 'fname') {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email : preValue.email

      //     };
      //   } else if (name === 'lname') {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email : preValue.email
      //     };
      //   }
      //   else if (name === 'email') {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email : value,

      //     };
      //   }
    });
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {name.fname} {name.lname} {name.email}
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          name="fname"
          onChange={submitForm}
          value={name.fname}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Your FullName"
          name="lname"
          onChange={submitForm}
          value={name.lname}
        />
        <br />

        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={submitForm}
          value={name.email}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewForm;
