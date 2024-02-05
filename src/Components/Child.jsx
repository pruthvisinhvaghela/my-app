import React from "react";

const Child = ({ water }) => {
  return (
    <>
      <ol>
        <li>Boil {water} cups of water.</li>
        <li>
          {" "}
          Add {water} spoons of tea and {0.5 * water} spoons of spice.
        </li>
        <li>
          Add {0.5 * water}
          cups of milk to boil and sugar to taste.
        </li>
      </ol>
    </>
  );
};

export default Child;
