import { useState, useEffect, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useSearchInput from "../hooks/useSearchInput";
import AddUserSection from "./AddUser/AddUserSection";
import EditUserSection from "./EditUser/EditUserSection";
import DeleteUserSection from "./DeleteUser/DeleteUserSection";


function useUserMenu() {
  const input = useSearchInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(() => {
  const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [editActiveform, setEditActiveForm] = useState(null); 
  const [deleteActiveform, setDeleteActiveForm] = useState(null); 

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    if(users.length === 0)
    fetchUsers();
  }, [fetchUsers, users.length]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  
  const addUser = (name) => {
    console.log("Adding user:", name);
    const newUser = { id: Date.now(), name };  
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      return updatedUsers; 
    });
  };
 

  const editUser = (updatedUser) => {
    setUsers((prevUsers) => {
      return prevUsers.map(user =>
        user.id === updatedUser.id ? { ...user, name: updatedUser.name } : user
      );
    });
    setEditActiveForm(null)
  };
    
  const deleteUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter(user =>
        user.id !== id
      )
    })
    setDeleteActiveForm(null)
  };


  

  function openModal() {
    setModal(true);
  }

  return {
    input,
    modal,
    setModal,
    loading,
    users,
    editActiveform,
    setEditActiveForm,
    deleteActiveform,
    setDeleteActiveForm,
    addUser,
    editUser,
    deleteUser,
    openModal
  }
}

function EffectSection() {
  const {
    input,
    modal,
    setModal,
    loading,
    users,
    editActiveform,
    setEditActiveForm,
    deleteActiveform,
    setDeleteActiveForm,
    addUser,
    editUser,
    deleteUser,
    openModal
  } = useUserMenu();

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal}>Открыть информацию</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit.</p>
        <Button onClick={() => setModal(false)}>Назад</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <label style={{ marginTop: '1rem' }}>Фильтр поиска</label>
          <input type="text" className="control" value={input.search} onChange={input.onСhange} />
          <div className="content">
            <ul className="users">
              {Array.isArray(users) && users
                .filter((user) => 
                  user.name && user.name.toLowerCase().includes(input.search.toLowerCase())
                )
                .map((user) => (
                  <li key={user.id}>{user.name}
                  <div className="icon-container">
                    <EditUserSection editUser={editUser} user={user} editActiveform={editActiveform} setEditActiveForm={setEditActiveForm} deleteActiveform={deleteActiveform}/>
                    <DeleteUserSection deleteUser={deleteUser} user={user} deleteActiveform={deleteActiveform} setDeleteActiveForm={setDeleteActiveForm} editActiveform={editActiveform}/>
                    </div>
                  </li>
                ))}
            </ul>
            <aside>
              <AddUserSection addUser={addUser} />
            </aside>
          </div>
        </>
      )}
    </section>
  );
}

export default EffectSection;