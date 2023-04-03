import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Todo from "@/components/todo";
import Session from "@/provider/session";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  interface ResData {
    ID: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: null;
    Title: string;
    Content: string;
    Author_id: string;
  }

  // interface userInput {
  //   content: string;
  // }

  const [Token, setToken] = useState<string>("");
  const [TodoInput, setTodoInput] = useState<string>("");
  const [ResponseData, setResponseData] = useState<ResData[]>([]);
  const [TodoAdded, setTodoAdded] = useState<boolean>(false);

  const router = useRouter();

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postResponse = await axios
      .post(
        "http://localhost:8080/todo/new",
        { content: TodoInput },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setTodoInput("");
        setTodoAdded(TodoAdded ? false : true);
      });
  };

  const getTodos = async () => {
    const res = await axios.get("http://localhost:8080/todo/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
    });
    return res;
  };

  useEffect(() => {
    // Perform localStorage action
    const tokenStr = localStorage.getItem("jwt");

    if (tokenStr != null) {
      getTodos().then((res) => {
        setResponseData(res.data.data);
      });
    } else {
      router.push("/login");
    }
  }, [TodoAdded]);

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
        {ResponseData.map((todo: any) => (
          <div className="todo" key={todo.ID}>
            <Todo title={todo.Title} content={todo.Content} id={todo.ID}></Todo>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
