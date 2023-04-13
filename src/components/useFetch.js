import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setBlogs] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(error => console.log(error));
    }, [url]);

  return { data }
}

export default useFetch