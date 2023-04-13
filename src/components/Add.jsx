import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function submitFunc(e) {
    e.preventDefault();

    const blog = {author, title, text}

    fetch("http://localhost:3000/records", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      navigate("/");
    })
  }

  return (
    <div className='Add'>
      <form onSubmit={submitFunc}>
        <input type="text" placeholder='Enter author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="text" placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder='Enter content' value={text} onChange={(e) => setText(e.target.value)} required></textarea>
        <button>😀 Submit record</button>
      </form>
    </div>
  )
}

export default Add