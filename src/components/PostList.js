import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <p>{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;