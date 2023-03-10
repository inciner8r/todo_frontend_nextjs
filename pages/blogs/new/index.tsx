import React, { useState } from "react";

const NewBlog = () => {
  const [FormData, setFormData] = useState({ title: "", content: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" method="post">
        <label>Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
        <label>Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlog;
