import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const GroupList = ({ groups, deleteGroup, editGroup, addPost }) => {
  return (
    <div>
      {groups.map(group => (
        <div key={group.id} className="group">
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <p>{new Date(group.createdAt).toLocaleString()}</p>
          <button onClick={() => editGroup(group)}>Edit</button>
          <button onClick={() => deleteGroup(group.id)}>Delete</button>
          <h4>Posts</h4>
          <PostForm addPost={(post) => addPost(group.id, post)} />
          <PostList posts={group.posts} />
        </div>
      ))}
    </div>
  );
};

export default GroupList;