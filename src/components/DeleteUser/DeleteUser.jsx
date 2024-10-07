import { useState , useEffect} from "react"
import Button from '../Button/Button';

function DeleteUser({setShowDeleteUser, deleteUser, user}) {
 const [id, setId] = useState('')
 
 useEffect(() => {
    if(user) {
  setId(user.id);
  };
 }, [user]);
  
  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    if (id) {
      deleteUser(id);  
      setShowDeleteUser(false);  
    }
  };


return (
    <form className='delete-user-form' onSubmit={handleDeleteSubmit}>
    <h3>Удалить пользователя</h3>
    <Button type="submit">Удалить</Button>
    <Button type="button" onClick={() => setShowDeleteUser(false)}>Назад</Button>
    </form>
);
}


export default DeleteUser;



