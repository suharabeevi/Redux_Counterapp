import { useState,useEffect } from "react"
import React  from 'react'
import axios from "axios"

function DataFetching() {
  
    const [post,setpost] = useState([])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          console.log(res);
          setpost(res.data)
      })
      .catch(Error=>{
        console.log(Error);
      })
    },[])
  return (
    <div>
      <ul>{
        post.map(post=><li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching
