import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/400x300/?${props.name}`;

  return (
    <>
      <div
        style={{ margin: "30px 0", Padding: "5px 10px", borderRadius: "5px" }}
      >
        <img src={img} alt="img" />
      </div>
    </>
  );
};

export default SearchResult;
