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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Group Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea 
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default GroupForm;