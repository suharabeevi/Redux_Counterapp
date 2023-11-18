import { useState, useEffect } from "react";
import React from "react";
// import axios from "axios"
import { userContext, channelcontext } from "./App";

function DataFetching() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelcontext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context value {user},channel context value {channel}
                  </div>
                );
              }}
            </channelcontext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default DataFetching;

// function DataFetching() {

//     const [post,setpost] = useState({})
//     const [id,setid] =useState(1)
//     const [idfrombuttonclick,setidfrombuttonclick] =useState(1)

//     const handlesubmit =()=>{
//       setidfrombuttonclick(id)
//     }

//     useEffect(()=>{
//       axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
//       .then(res=>{
//           console.log(res);
//           setpost(res.data)
//       })
//       .catch(Error=>{
//         console.log(Error);
//       })
//     },[idfrombuttonclick])
//   return (
//     <div>

//       <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
//       <div>{post.title}</div>
//       <button type="button" onClick={handlesubmit}>Fetch Post</button>
//       {/* <ul>{
//         post.map(post=><li key={post.id}>{post.title}</li>)
//         }
//       </ul> */}
//     </div>
//   )
// }

// export default DataFetching
