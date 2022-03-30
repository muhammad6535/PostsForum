import React from "react";
import { useState } from "react";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");

  const handleForm = (e)  => {
    e.preventDefault();
    const post = {title,body,image: url,author};
    fetch("http://localhost:3000/posts",{
      method : "POST",
      headers :  {"Content-Type": "application/json"}, 
      body: JSON.stringify(post),
    }).then(() => {
      props.history.push("/")
    })
    console.log(title);
    console.log(body);
    console.log(url);
    console.log(author);
  }
  return (
    <section className="create-post">
      <h2>Add New Post</h2>
      <form action="" onSubmit={handleForm}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Image :</label>
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>Blog body :</label>
        <textarea
          required
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="admin">admin</option>
          <option value="codv">codv</option>
        </select>
        <button className="btn" type="submit">
          Add Blog
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
