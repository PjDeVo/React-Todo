// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const ToDoList = props => {
  console.log(props);
  return (
    <div>
      {props.list.map(item => {
        return (
          <h1
            className={`toDo ${item.done ? "done" : ""}`}
            onClick={e => props.done(item.id)}
          >
            {item.toDo}
          </h1>
        );
      })}
    </div>
  );
};

export default ToDoList;
