import React from 'react';
import PostTitle from '../post-title/post-title';
import PostForm from '../post-form/post-form';
import './post-block.css';

function PostBlock() {
  return (
    <div className="post-block">
      <PostTitle />
      <PostForm />
    </div>
  );
}

export default PostBlock;
