import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "@/components/todo";
import Session from "@/provider/session";

const Todos = (props: any) => {
  const [Token, setToken] = useState<string>("");
  useEffect(() => {
    // Perform localStorage action
    const tokenStr = localStorage.getItem("jwt");

    if (tokenStr != null) {
      setToken(tokenStr);
    } else {
      console.log("no token");
    }
  }, [Token]);
  if (Token != null) {
    Session(Token);
  }
  //Session(Token);
  const todos = props["data"];
  return (
    <div className="todos-page flex flex-col items-center">
      <div className="title text-4xl font-extrabold m-6">Todos</div>
      <div className="todos w-3/5">
        {todos.map((todo: any) => (
          <div className="todo" key={todo.ID}>
            <Todo title={todo.Title} content={todo.Content} id={todo.ID}></Todo>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios("http://localhost:8080/todo/all");
  return {
    props: res.data,
  };
};
export default Todos;
