import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <h1 className="text-4xl font-bold">Посты не найдены</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post, index) =>
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id} />
        )}
      </div>
    </div>
  );
};

export default PostList;
