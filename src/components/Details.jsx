import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from "./useFetch";

function Details() {
  const { id } = useParams();
  const { data: blog } = useFetch("http://localhost:3000/records/" + id);
  const navigate = useNavigate();

  function delFunction() {
    fetch("http://localhost:3000/records/" + blog.id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }

  return (
    <div className='Details'>
      <div className="blog">
        <p className='author'>Written by: { blog && blog.author }</p>
        <p className='title'>{ blog && blog.title }</p>
        <p className='desc' id='desc-details'>{ blog && blog.text }</p>
        <Link className='del' onClick={delFunction}>🤔 Tash blog</Link>
      </div>
    </div>
  )
}

export default Details