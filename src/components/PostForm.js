import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString(),
      };
      addPost(newPost);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control"
          placeholder="Post Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea 
          className="form-control"
          placeholder="Content" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Post</button>
    </form>
  );
};

export default PostForm;