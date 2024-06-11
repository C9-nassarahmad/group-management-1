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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea 
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Update Group</button>
      <button type="button" onClick={cancelEdit} className="btn btn-secondary ml-2">Cancel</button>
    </form>
  );
};


export default GroupEdit;