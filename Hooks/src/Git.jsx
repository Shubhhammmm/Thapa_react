import React, { useEffect, useState } from "react";

const Git = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");

        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log("page is not loading", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {users.map((currElem, id) => {
        return <div key={id}>{currElem.login}</div>;
      })}
    </>
  );
};

export default Git;
