import React from 'react';

const GroupList = ({ groups, deleteGroup, editGroup }) => {
  return (
    <div>
      {groups.map(group => (
        <div key={group.id} className="group">
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <p>{new Date(group.createdAt).toLocaleString()}</p>
          <button onClick={() => editGroup(group)}>Edit</button>
          <button onClick={() => deleteGroup(group.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default GroupList;