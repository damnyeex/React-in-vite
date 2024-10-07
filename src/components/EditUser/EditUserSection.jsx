import { AiTwotoneEdit } from "react-icons/ai";
import React, { useState } from 'react';
import EditUser from "./EditUser";

function EditUserSection({ editUser, user, editActiveform, setEditActiveForm, deleteActiveform}) {
  
    const handleEditUserClick = () => {
      setEditActiveForm(user.id)
    }
  
    return (
      <section>
         <AiTwotoneEdit className="edit-icon" 
         onClick={handleEditUserClick}
         style={{ 
          pointerEvents: (editActiveform !== null && editActiveform !== user.id) || deleteActiveform !== null ? 'none' : 'auto', 
          opacity: (editActiveform !== null && editActiveform !== user.id) || deleteActiveform !== null ? 0.5 : 1  
        }}
         />
        {editActiveform === user.id && (
          <div className="active-form">
          <EditUser setShowEditUser={() => setEditActiveForm(null)} editUser={editUser} user={user}/>
          </div>
        )} 
      </section>
    );
  }




export default EditUserSection