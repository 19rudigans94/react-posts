import React, { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addPost(event) {
    event.preventDefault();
    if (post.title.trim() && post.body.trim()) {
      const new_post = {
        ...post,
        id: Date.now(),
      };
      create(new_post);
      setPost({ title: "", body: "" });
    }
  }

  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        className="border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        className="border p-2 rounded-md"
      />
      <button
        onClick={addPost}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Добавить
      </button>
    </form>
  );
};

export default PostForm;