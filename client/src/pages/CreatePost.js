import React, { useEffect } from 'react';
import './CreatePost.css'
import { supabase } from '../client';
import {useRef} from 'react'

const CreatePost = () => {
    const formData = useRef(null)
    console.log("🚀 ~ file: CreatePost.js:8 ~ CreatePost ~ formData:", formData)
    // console.log("🚀 ~ file: CreatePost.js:15 ~ createPost ~ formData.title:", formData.current[0].value)
    const createPost  = async (event) =>{
        event.preventDefault();
        console.log(formData.current[0].value);
        let {data,error} = await supabase
      .from('Posts')
      .insert({title: formData.current[0].value, author: formData.current[1].value, description: formData.current[2].value})
      .select();
      console.error(error)
      console.log(data)
    }


    return (
        <div>
            <form ref={formData}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description">
                </textarea>
                <br/>
                <input onClick = {createPost} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost