import "./App.css";
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Post-1', body: 'Description-1' },
    { id: 2, title: 'Post-2', body: 'Description-2' },
    { id: 3, title: 'Post-3', body: 'Description-3' },
    { id: 4, title: 'Post-4', body: 'Description-4' },
    { id: 5, title: 'Post-5', body: 'Description-5' },
    { id: 6, title: 'Post-6', body: 'Description-6' },
  ])

  function createPost(new_post) {
    setPosts([...posts, new_post]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App w-[80%] h-screen mx-auto bg-[#f5f5f5] p-3">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title='Мои посты' />
    </div>
  );
}
export default App;