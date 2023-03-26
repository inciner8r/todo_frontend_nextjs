import axios from "axios";
import React, { ButtonHTMLAttributes, useState } from "react";

const NewBlog = () => {
  const [post, setPost] = useState(null);
  const [FormData, setFormData] = useState({
    title: "",
    content: "",
    author_id: "3",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const postForm: any = (e: SubmitEvent) => {
    console.log("ok");
    e.preventDefault();
    axios.post("http://localhost:8080/todo/new", FormData).then((response) => {
      setFormData({ title: "", content: "", author_id: "3" });
    });
  };
  return (
    <div>
      <form onSubmit={postForm} method="post">
        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={FormData.title}
        />
        <label>Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handleChange}
          value={FormData.content}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlog;
