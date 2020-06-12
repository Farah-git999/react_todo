import React from "react";

function Student (props) {
  return(
    <div>
      <h1>Name of the student is {props.name}</h1>
      <h1>Class of the student is {props.class}</h1>
    </div>
  );
}

export default Student;
