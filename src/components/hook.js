import React, { useReducer, useState } from "react";

const initial = {
  n: 10
};

const reducer = (state, action) => {
  if (action.type === "add") {
    return { n: state.n + action.number };
  } else if (action.type === "multi") {
    return { n: state.n * 2 };
  } else {
    throw new Error("unknown type");
  }
};

export default function App() {
  const [name, setName] = useState({
    name: "xiaowang"
  });
  const [num, setNum] = useReducer(reducer, initial);
  const setAge = () => {
    setName((x) => {
      return {
        name: "xiaozhang",
        age: (x.age ?? 0) + 1
      };
    });
    setName((x) => {
      return {
        name: "xiaozhang",
        age: (x.age ?? 0) + 1
      };
    });
  };

  return (
    <>
      <h1>hook</h1>
      {name.name} - {name.age}
      <button onClick={setAge}>set age</button>
      <br />
      {num.n}
      <button
        onClick={() => {
          setNum({
            type: "add",
            number: 1
          });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setNum({
            type: "multi",
            number: 1
          });
        }}
      >
        multi
      </button>
    </>
  );
}
