import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const GroupList = ({ groups, deleteGroup, editGroup, addPost }) => {
  return (
    <div>
    {groups.map(group => (
      <div key={group.id} className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">{group.name}</h3>
          <p className="card-text">{group.description}</p>
          <p className="card-text">
            <small className="text-muted">{new Date(group.createdAt).toLocaleString()}</small>
          </p>
          <button onClick={() => editGroup(group)} className="btn btn-secondary mr-2">Edit</button>
          <button onClick={() => deleteGroup(group.id)} className="btn btn-danger">Delete</button>
          <h4 className="mt-4">Posts</h4>
          <PostForm addPost={(post) => addPost(group.id, post)} />
          <PostList posts={group.posts} />
        </div>
      </div>
    ))}
  </div>
);
};

export default GroupList;