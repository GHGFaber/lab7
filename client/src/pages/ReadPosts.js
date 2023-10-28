import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = () => {
        // const formData = useRef(null)
        // console.log("🚀 ~ file: CreatePost.js:8 ~ CreatePost ~ formData:", formData)
        // // console.log("🚀 ~ file: CreatePost.js:15 ~ createPost ~ formData.title:", formData.current[0].value)
        const readPost  = async () =>{
          try{
            let {data} = await supabase
          .from('Posts')
          .select()
          setPosts(data)

          }
          catch(error){
            console.error(error)
          }
        }
    

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        readPost();
    }, []);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} key={index} title={post.title} author={post.author} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;