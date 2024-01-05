import React, { useState } from "react";

const arr = [
  {
    id: 1,
    name: "orange",
    price: 20,
    color: "saffron",
  },
  {
    id: 2,
    name: "mango",
    price: 200,
    color: "yellow",
  },
  {
    id: 3,
    name: "bannaa",
    price: 30,
    color: "green",
  },
];

const SearchFilter = () => {
  const [item, setIems] = useState("");
  console.log(item);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your search"
        style={{ width: "200px" }}
        onChange={(e) => setIems(e.target.value)}
      />
      {item &&
        arr
          .filter((e) => e.color.toLowerCase().includes(item.toLowerCase()))
          .map((e) => (
            <li>
              {" "}
              {e.name} {e.price}{" "}
            </li>
          ))}
    </>
  );
};

export default SearchFilter;
