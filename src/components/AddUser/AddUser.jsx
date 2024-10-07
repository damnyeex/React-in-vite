import React, { useState } from 'react';
import Button from '../Button/Button';

function AddUser({ setShowAddUser, addUser }) {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      addUser(name);  
      setShowAddUser(false);  
    }
  };

  return (
    <form className='adduserform' onSubmit={handleSubmit}>
      <h3>Добавить пользователя</h3>
      <label htmlFor="name">Имя</label>
      <input
        type="text"
        placeholder="Введите имя"
        className='control'
        value={name}
        onChange={handleChange}
      />
      <Button type="submit">Добавить</Button>
      <Button type="button" onClick={() => setShowAddUser(false)}>Назад</Button>
    </form>
  );
}

export default AddUser;