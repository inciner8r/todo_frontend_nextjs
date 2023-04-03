import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Todo from "@/components/todo";
import Session from "@/provider/session";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Todos = (props: any) => {
  interface ResData {
    ID: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: null;
    Title: string;
    Content: string;
    Author_id: string;
  }

  const [Token, setToken] = useState<string>("");
  const [TodoInput, setTodoInput] = useState<string>("");
  const [ResponseData, setResponse] = useState<any>();
  const router = useRouter();

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postResponse = await axios
      .post("http://localhost:8080/todo/new", {})
      .then((res) => {
        localStorage.setItem("jwt", res.data["jwt"]);
        router.push("/todos");
      });
  };

  const getTodos = async () => {
    const res = await axios("http://localhost:8080/todo/all", {
      headers: {
        "Content-Type": "application/json",
        Token: Token,
      },
    }).then((res) => {
      setResponse(res.data);
      console.log(ResponseData);
    });
  };

  useEffect(() => {
    // Perform localStorage action
    const tokenStr = localStorage.getItem("jwt");

    if (tokenStr != null) {
      getTodos();
      setToken(tokenStr);
      console.log(props);
    } else {
      router.push("/login");
    }
  }, []);

  //Session(Token);
  const todos = props["data"];
  return (
    <div className="todos-page flex flex-col items-center w-2/3 mx-auto">
      <form className="add w-full mt-8" onSubmit={(e) => addTodo(e)}>
        <input
          className="border-solid border-2 border-black w-11/12 p-2"
          type="text"
          name=""
          id=""
          placeholder="Add To Do"
          value={TodoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="border-solid border-2 border-black rounded-full px-3 py-2 ml-2 hover:bg-gray-800 hover:text-slate-100"
          type="submit"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
      <div className="title text-4xl font-extrabold m-6">Todos</div>
      <div className="todos w-full">
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
  const res = await axios("http://localhost:8080/todo/all", {
    headers: {
      "Content-Type": "application/json",
      Token: "JWT fefege...",
    },
  });
  return {
    props: res.data,
  };
};
export default Todos;
