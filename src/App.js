import React from "react";
import "./App.css";

const App = props => (
  <>
    <input
      type="checkbox"
      onChange={()=>props.handleClick(props.id)}
      checked={props.isDone}
    />

    <span className={props.isDone?"done":"list"}>{props.task}</span>
    <br />
  </>
);

export default App;
