import React from "react";

const Controller = ({ onClickHand }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickHand(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          onClickHand(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          onClickHand(2);
        }}
      >
        2
      </button>
      <button>3</button>
      <button>4</button>
    </div>
  );
};

export default Controller;
