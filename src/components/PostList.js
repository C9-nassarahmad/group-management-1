import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
    {posts.map(post => (
      <div key={post.id} className="card mb-2">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.content}</p>
          <p className="card-text">
            <small className="text-muted">{new Date(post.createdAt).toLocaleString()}</small>
          </p>
        </div>
      </div>
    ))}
  </div>
);
};

export default PostList;