import React, { createContext } from "react";
import ComB from "./ComB";

const FirstName = createContext();

const ContextApi = () => {
  return (
    <>
      <FirstName.Provider value={["Shubham", "Shrivastava"]}>
        <ComB />
      </FirstName.Provider>
    </>
  );
};

export default ContextApi;
export { FirstName };
