// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

const Todo = function (props) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <li
        key={props.id}
        style={{ textDecorationLine: checked ? "line-through" : "none" }}
      >
        {props.description} | {props.deadline}{" "}
        <input type="checkbox" onClick={() => setChecked(!checked)}></input>
      </li>
    </>
  );
};

export default Todo;
