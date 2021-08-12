import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../common/context";
import { store } from "../common/redux";

function inc() {
  return { type: "INCREMENT" };
}
function dec() {
  return { type: "DECREMENT" };
}

export default function Header() {
  const [count, setCount] = useState(0);
  const { username } = useContext(AppContext);
  var state = store.getState();
  useEffect(() => {
    console.log("具有副作用的操作");
  }, []);
  return (
    <div className="App">
      <h1>
        {count} {username}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update
      </button>
      <h1>{store.getState().counter}</h1>
      <button
        onClick={() => {
          store.dispatch(inc());
        }}
      >
        加123
      </button>
      <button
        onClick={() => {
          store.dispatch(dec());
        }}
      >
        减
      </button>
    </div>
  );
}
