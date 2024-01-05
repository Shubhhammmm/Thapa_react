import React, { useState } from "react";

const LikeDislike = () => {
  const [count, setCount] = useState(0);
  const [dislike, setDislike] = useState(0);
  const Likes = () => {
    setCount(count + 1);
  };

  const Dislike = () => {
    setDislike(dislike + 1);
  };

  return (
    <>
      <button onClick={Likes}> Likes ({count}) </button>
      <button onClick={Dislike}> Dislikes ({dislike}) </button>
    </>
  );
};

export default LikeDislike;
