import React from 'react'
import Records from "./Records";
import useFetch from './useFetch';

function Home() {
  const { data: blogs } = useFetch("http://localhost:3000/records");

  return (
    <div className='Home'>
        {blogs && <Records blogs={blogs} />}
    </div>
  )
}

export default Home