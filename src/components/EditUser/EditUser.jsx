import { useState, useEffect } from "react"
import Button from '../Button/Button';

function EditUser({setShowEditUser, editUser, user}) {
 const [name, setName] = useState('')
 
 useEffect(() => {
    if(user) {
  setName(user.name);
  };
 }, [user]);

 const handleEditChange = (event) => {
    setName(event.target.value);
  }; 
  
  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (name) {
      editUser({...user, name});  
      setShowEditUser(false);  
    }
  };


return (
  <form className='edit-user-form' onSubmit={handleEditSubmit}>
    <h3>Редактировать пользователя</h3>
    <label htmlFor="name">Имя</label>
    <input
      type="text"
      placeholder="Введите имя"
      className='control'
      value={name}
      onChange={handleEditChange}
      
    />
    <Button type="submit">Добавить</Button>
    <Button type="button" onClick={() => setShowEditUser(false)}>Назад</Button>
  </form>
);
}


export default EditUser;