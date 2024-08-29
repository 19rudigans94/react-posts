import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
  const renderPosts = () => (
    posts.map((post, index) => (
      <CSSTransition key={post.id} timeout={500} classNames="post">
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
        />
      </CSSTransition>
    ))
  );

  return (
    <TransitionGroup>
      {posts.length > 0 ? (
        <CSSTransition timeout={300} classNames="post-group">
          <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {renderPosts()}
            </div>
          </div>
        </CSSTransition>

      ) : (
        <CSSTransition timeout={300} classNames="post-group">
          <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <h1 className="text-4xl font-bold">Посты не найдены</h1>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default PostList;