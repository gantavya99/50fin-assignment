import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
const Table = () => {
  const [data, setData] = useState([]);
  const [text,setText] = useState("");
  const[newUser,setnewUser]=useState({
    firstName:"",
    email:"",
    phone:""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setData(response.data.users);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, []);
  {console.log(data);}

  const addUser=(e)=>{
       const {value,name} = e.target;
       setnewUser({...newUser,[name]:value});
  }
  
  const handleSubmit = () => {
    
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
  };



  return (
    <div>
        <input name="firstName" placeholder="Name" type="text" onChange={addUser} value={newUser.firstName} />
        <input name="email" placeholder="Email" type="email" onChange={addUser} value={newUser.email} />
        <input name="phone" placeholder="Phone Number" type="number" onChange={addUser} value={newUser.phone} />
        <label>Enter name: </label>
        <input className='searchBar' placeholder="Search here..." type="text" onChange={(e)=>setText(e.target.value)} /> 
        <button onClick={handleSubmit} className="btn">
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
                else if(val.firstName.toLowerCase().includes(text.toLowerCase())){
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
    </div>
  );
};

export default Table;
