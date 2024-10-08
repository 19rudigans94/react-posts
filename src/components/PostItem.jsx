import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, number, remove }) => {
  const navigate = useNavigate();
  const openPost = (post_id) => {
    navigate(`/OnePostPage/${post_id}`);
  }
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-300 last:border-b-0 ">
      <div className="flex items-center">
        <div className="w-12 mr-4">
          <p className="text-lg font-bold">{number}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>
      </div>
      <div>


        <MyButton
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mr-2"
          onClick={() => openPost(post.id)}
        >Открыть</MyButton>


        <MyButton
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md "
          onClick={() => remove(post.id)}>Удалить</MyButton>
      </div>
    </li>
  );
};

export default PostItem;

