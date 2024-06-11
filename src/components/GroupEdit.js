import React, { useState } from 'react';

const GroupEdit = ({ group, updateGroup, cancelEdit }) => {
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const updatedGroup = { ...group, name, description };
      updateGroup(updatedGroup);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update Group</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
};

export default GroupEdit;