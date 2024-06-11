import React, { useState } from 'react';

const GroupForm = ({ addGroup }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const newGroup = {
        id: Date.now(),
        name,
        description,
        createdAt: new Date().toISOString(),
      };
      addGroup(newGroup);
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
    <div className="form-group">
      <input 
        type="text" 
        className="form-control"
        placeholder="Group Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <textarea 
        className="form-control"
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary">Create Group</button>
  </form>
);
};


export default GroupForm;