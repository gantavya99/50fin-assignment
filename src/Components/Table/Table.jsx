import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
const Table = () => {
  const [data, setData] = useState(null);
  const [text,setText] = useState("");
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
  {
    console.log(data);
  }
  return (
    <div>
        <label>Enter name: </label>
        <input className='searchBar' placeholder="Search here..." type="text" onChange={(e)=>setText(e.target.value)} /> 
        <button className="btn">
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
