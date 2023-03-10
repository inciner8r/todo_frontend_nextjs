import React from "react";
import Blog from "../components/blog";
import axios from "axios";

const Blogs = (props: any) => {
  const todos = props["data"];
  return (
    <div className="blogs-page">
      oks
      {todos.map((todo: any) => (
        <div className="todo" key={todo.ID}>
          <div className="title">{todo.Title}</div>
          <div className="content">{todo.Content}</div>
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
