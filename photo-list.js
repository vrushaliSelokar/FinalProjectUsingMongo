import react, { useEffect, useState } from "react";
import styles from "./photo-list.module.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function PhotoList() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch('http://localhost:3001/photos');
    const responseJSON = await response.json();
    console.log(responseJSON);
    setPhoto(responseJSON);
  };
  return (
    <>
      <h1>I am PhotoList</h1>
      <Link to="/new-photo">New Photo</Link> 
      <div >
      {/* <table style={{overflowX:"auto"}}> */}
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>NAME</th>
            <th>Photo</th>

            <th>Edit</th>
            <th>Delete</th>
         </tr>
        </thead>
        <tbody>
         {photo && 
          photo.map((photo)=>{
          return(
            
              <tr>
                <td>{photo._id}</td>
                <td>{photo.name}</td>
                   
                <td><img src={photo.photo} width={100} height={100}/></td>
               
                <td>
                  <Link to={`/edit-photo?id=${photo._id}`}>Edit Photo</Link>
                </td>
                <td>
                <Button variant="primary" size="sm"
                    onClick={async()=>{
                    console.log(photo._id);

                    const requestOptions = {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    };
          
                    const response = await fetch(
                    `http://localhost:3001/photos/${photo._id}`,
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

export default PhotoList;
