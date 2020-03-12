import React from "react";

const List = props => {
  console.log(props);
  return (
    <div>
      {props.list.map(item => {
        return <h1> {item}</h1>;
      })}
    </div>
  );
};

export default List;
