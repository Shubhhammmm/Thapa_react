import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const newEntry = {  email , password };
    setAllEntry([...allEntry, newEntry]);
  };

  return (
    <>
      <form action="" onSubmit={submit} style={{textAlign : "center"}}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            // pattern=".+@globex\.com"
            // size="30"
            // required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button> Submit </button>
      </form>
      {allEntry.map((currElem, id) => 
         (
        <div key={id} style={{textAlign : "center"}}>
          <p>{currElem.email} </p>
          <p> {currElem.password} </p>
        </div>
        )
      )}
    </>
  );
};

export default Form;
