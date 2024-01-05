import React from "react";
import "./JSXChallenge4.css";

export const SlotM = (props) => {
  // let x = " &#x1F603; "
  // let y = " &#x1F603;"
  // let z =  " &#x1F603; "

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Not Matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};

const JSXChallenge4 = () => {
  return (
    <>
      <h1 className="heading_style">🎰 Welcome to Slot machine game 🎰</h1>

      <div className="slotM">
        <SlotM x="❤️" y="🎶" z="😜" />
        <hr />
        <SlotM x="😁" y="😁" z="😁" />
        <hr />

        <SlotM x=" &#x1F603;" y="🍕" z="🍕" />
        <SlotM x="🫠" y="🫠" z="🫠" />
        <hr />
      </div>
    </>
  );
};

export default JSXChallenge4;
