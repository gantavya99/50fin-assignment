import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "./Table.css";
import UserForm from "../UserForm/UserForm";


const Table = () => {
  const [data, setData] = useState([]);
  const [text,setText] = useState("");
  const[showModal,setShowModal]=useState(false);
  const[newUser,setnewUser]=useState({
    firstName:"",
    email:"",
    phone:""
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/users");
          if (response.ok) {
            const data = await response.json();
            setData(data.users);
          } else {
            console.error("Error while fetching data:", response.status);
          }
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      };
      fetchData();
  })    
  {console.log(data);}



  const addUser=(e)=>{
       const {value,name} = e.target;
       setnewUser({...newUser,[name]:value});
  }


  //adding user to the list with basic validation checks
  const handleSubmit = () => {

    if (!newUser.firstName || !newUser.email || !newUser.phone) {
        toast.error("Please fill in all the fields.");
        return;
      }
    
    const newUserObj = {
      id: data.length + 1, 
      firstName: newUser.firstName,
      email: newUser.email,
      phone: newUser.phone
    };
  
    setData([...data, newUserObj]);
    // Reset the newUser state to empty values
    setnewUser({
      firstName: "",
      email: "",
      phone: ""
    });
    toast.success("New user added successfully");
    setShowModal(!showModal);
  };


  const modalHandler=()=>{
    setShowModal(!showModal);
  }


  return (
    <div>
        {showModal&&<UserForm submit={handleSubmit} addUser={addUser} newUser={newUser} closeModal={modalHandler}/>}
        <label>Enter name: </label>
        <input className='searchBar' placeholder="Search here..." type="text" onChange={(e)=>setText(e.target.value)} /> 
        <button onClick={modalHandler} className="btn">
            Add a record +
        </button>
        {console.log(text)}
      {data ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              
            </tr>
          </thead>

          <tbody>
            {data.filter((val)=>{
                if(text==""){
                    return val;
                }
                else if(val.firstName.toLowerCase().includes(text.toLowerCase())||val.email.toLowerCase().includes(text.toLowerCase())){
                    return val
                }
            }).map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
      <Toaster />
    </div>
  );
};

export default Table;
