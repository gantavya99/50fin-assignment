import React from "react";
import{useEffect} from "react";
import "./UserForm.css"
const UserForm = ({ newUser, addUser,closeModal,submit }) => {

useEffect(() => {
  document.body.style.overflow="hidden";

  return () => {
    document.body.style.overflow="scroll";
  }
}, [])


  return (
    <div className="modal-wrapper">
      <div className="modal-container">
      <input
        name="firstName"
        placeholder="Name"
        type="text"
        onChange={addUser}
        value={newUser.firstName}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={addUser}
        value={newUser.email}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        type="number"
        onChange={addUser}
        value={newUser.phone}
      />
       <div className="modal-actions">
          <button onClick={closeModal} className="modal-btn cancel">
            Cancel
          </button>
          <button onClick={submit} className="modal-btn submit">
            Add User
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default UserForm;
