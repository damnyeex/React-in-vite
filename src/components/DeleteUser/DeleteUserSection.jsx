import { RiDeleteBack2Fill } from "react-icons/ri";
import React, { useState } from 'react';
import DeleteUser from "./DeleteUser";

function DeleteUserSection({ deleteUser, user , deleteActiveform, setDeleteActiveForm, editActiveform }) {
  
    const handleDeleteUserClick = () => {
      setDeleteActiveForm(user.id)
    }
  
    return (
      <section>
         <RiDeleteBack2Fill className="delete-icon" 
         onClick={handleDeleteUserClick}
         style={{ 
          pointerEvents: (deleteActiveform !== null && deleteActiveform !== user.id) || editActiveform !== null ? 'none' : 'auto', 
          opacity: (deleteActiveform !== null && deleteActiveform !== user.id) || editActiveform !== null ? 0.5 : 1 
          }}
         />
        {deleteActiveform === user.id && (
          <div className="active-form">
          <DeleteUser setShowDeleteUser={() => setDeleteActiveForm(null)} deleteUser={deleteUser} user={user}/>
          </div>
        )} 
      </section>
    );
  }




export default DeleteUserSection