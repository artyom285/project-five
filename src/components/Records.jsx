import React from 'react'
import { Link } from 'react-router-dom'

function Records({blogs}) {
  return (
    <div className='Blogs'>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <p className="author">Written by: {blog.author}</p>
          <p className="title">{blog.title}</p>
          <p className="desc">{blog.text}</p>
          <Link to={`/details/${blog.id}`} className='more'>🚀 Review blog</Link>
        </div>
      ))}
    </div>
  )
}

export default Records