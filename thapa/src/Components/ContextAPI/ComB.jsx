import React, { useContext } from "react";
import { FirstName } from "./ContextApi";

const ComB = () => {
  const [fName, lName] = useContext(FirstName);

  return (
    <div>
      <p>
        
        My Self {fName} {lName}
      </p>
    </div>
  );
};

export default ComB;
