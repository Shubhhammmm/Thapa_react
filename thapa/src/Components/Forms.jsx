import React, { useState } from "react";
// import "./Forms.css"

const Forms = () => {
  const [name, setName] = useState(" ");
  const [fullname, setFullName] = useState(" ");

  const [identifier, setIdentifier] = useState(" ");
  const [identity, setIdentity] = useState(" ");

  const[email , setEmail] = useState(" ")
  const[verify , setVerification]  = useState(" ")

  const submitForm = (event) => {
    setName(event.target.value);
  };

  const onSubmits = (e) => {
    e.preventDefault();
    setFullName(name);
    setIdentity(identifier);
    setVerification(email)
  };

  const submitPassword = (e) => {
    setIdentifier(e.target.value);
  };

  const submitMail = (e) =>{
    setEmail(e.target.value)

  }

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullname} {identity}  {verify} </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={submitForm}
              value={name}
            />

            <br />

            <input
              type = "password"
              placeholder = "Enter Your Password"
              onChange = {submitPassword}
              value = {identifier}
            />

            <br/>
            <input
              type="mail"
              placeholder="Enter Your Mail"
              onChange={submitMail}
              value= {email}

         
            />


            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
