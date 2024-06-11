import "./App.css";
import React, { useState } from 'react';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit';
const App = () => {
  const [groups, setGroups] = useState([]);
  const [editingGroup, setEditingGroup] = useState(null);

  const addGroup = (group) => {
    setGroups([...groups, { ...group, posts: [] }]);
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter(group => group.id !== id));
  };

  const editGroup = (group) => {
    setEditingGroup(group);
  };

  const updateGroup = (updatedGroup) => {
    setGroups(groups.map(group => group.id === updatedGroup.id ? updatedGroup : group));
    setEditingGroup(null);
  };

  const cancelEdit = () => {
    setEditingGroup(null);
  };

  return (
    <div className="App">
      <h1>Group Management</h1>
      {editingGroup ? (
        <GroupEdit 
          group={editingGroup}
          updateGroup={updateGroup}
          cancelEdit={cancelEdit}
        />
      ) : (
        <GroupForm addGroup={addGroup} />
      )}
      <GroupList 
        groups={groups}
        deleteGroup={deleteGroup}
        editGroup={editGroup}
      />
    </div>
  );
};

export default App;
