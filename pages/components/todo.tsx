import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
var ok = "underline";
const Todo = ({ title, id, content }: any) => {
  return (
    <div key={id}>
      <div className={"text-2xl" + " " + ok}>{title}</div>
      <div className="content ">{content}</div>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default Todo;
