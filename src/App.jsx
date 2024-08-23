import React, { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyImput from "./components/UI/input/MyInput";
import "./App.css";


function App() {
  const [posts, setPosts] = useState([
    { id: 2, title: 'Post-2', body: 'Description-2' },
    { id: 6, title: 'Post-1', body: 'Description-6' },
    { id: 4, title: 'Post-3', body: 'Description-4' },
    { id: 1, title: 'Post-6', body: 'Description-1' },
    { id: 5, title: 'Post-5', body: 'Description-5' },
    { id: 3, title: 'Post-4', body: 'Description-3' },
  ]);

  const optionList = [
    { value: 'title', name: 'По названию' },
    { value: 'body', name: 'По описанию' },
  ];

  const [selectedSort, setSelectedSort] = useState('');
  const [serch, setSerch] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(serch.toLowerCase())
    );
  }, [serch, sortedPosts]);

  function createPost(newPost) {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  }

  function removePost(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  }

  function selectSort(sort) {
    setSelectedSort(sort);
  }

  return (
    <div className="App w-[80%] h-screen mx-auto bg-[#f5f5f5] p-3">
      <PostForm
        create={createPost} />
      <MySelect
        value={selectedSort}
        defaultValue="Сортировка"
        options={optionList}
        onChange={selectSort}
      />
      <MyImput
        type="text"
        placeholder="Поиск поста"
        value={serch}
        onInput={(e) => setSerch(e.target.value)}
      />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Мои посты" />
    </div>
  );
}

export default App;
