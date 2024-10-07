import React, { useState } from 'react';
import AddUser from './AddUser';
import Button from "../Button/Button";

function AddUserSection({ addUser }) {
  const [showAddUser, setShowAddUser] = useState(false)

  const handleAddUserClick = () => {
    setShowAddUser(true)
  }

  return (
    <section>
      <Button onClick={handleAddUserClick}>Перейти к добавлению пользователей</Button>
      {showAddUser && (<AddUser setShowAddUser={setShowAddUser} addUser={addUser}/>
      )} 
    </section>
  );
}

export default AddUserSection;