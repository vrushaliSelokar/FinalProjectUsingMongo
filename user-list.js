import react, { useEffect, useState } from "react";
import styles from "./user-list.module.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch('http://localhost:3001/users');
    const responseJSON = await response.json();
    console.log(responseJSON);
    setUsers(responseJSON);
  };
  return (
    <>
      <h1>I am UserList</h1>
      <Link to="/new-user">New User</Link> 
      <div >
      {/* <table style={{overflowX:"auto"}}> */}
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age </th>
            <th>Mobile</th>
            <th>Address</th>
            <th>identity_proof_number</th>
            <th>identity_proof_type</th>
           
            <th>Edit</th>
            <th>Delete</th>
         </tr>
        </thead>
        <tbody>
         {users && 
          users.map((user)=>{
          return(
            
              <tr>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.identityNumber}</td>
                <td>{user.identityProof}</td>
                <td>{user.mobile}</td>
               
                <td>
                  <Link to={`/edit-user?id=${user._id}`}>Edit User</Link>
                </td>
                <td>
                <Button variant="primary" size="sm"
                    onClick={async()=>{
                    console.log(user._id);

                    const requestOptions = {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    };
          
                    const response = await fetch(
                    `http://localhost:3001/users/${user._id}`,
                      requestOptions
                    );
          
                      const responseJSON = await response.json();

                      console.log(responseJSON);
                      //setUsers(responseJSON);  //error:unexpected json input

                      loadData();///after deleting ,it will reload remaining data from backend
                  }}>Delete</Button>
                </td>
              </tr> 
           
           );
           })} 
           <tr></tr>
           </tbody>
          </Table>
      </div>
    </>
  );
}

export default UserList;
