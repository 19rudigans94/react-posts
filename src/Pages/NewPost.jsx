import React, { useState } from 'react'
import PostForm from '../components/PostForm'

export default function NewPost() {
    const [setPosts] = useState([]);

    const createPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <PostForm create={createPost} />
    )
}

