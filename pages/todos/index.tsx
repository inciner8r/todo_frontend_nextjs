import React from "react";
import axios from "axios";
import Todo from "../components/todo";

const Blogs = (props: any) => {
  const todos = props["data"];
  return (
    <div className="blogs-page">
      {todos.map((todo: any) => (
        <div className="todo" key={todo.ID}>
          <Todo title={todo.Title} content={todo.Content} id={todo.ID}></Todo>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios("http://localhost:8080/todo/all");
  return {
    props: res.data,
  };
};
export default Blogs;
