import react, { useEffect, useState } from "react";
import styles from "./room-list.module.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function RoomList() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch('http://localhost:3001/room');
    const responseJSON = await response.json();
    console.log(responseJSON);
    setRoom(responseJSON);
  };
  return (
    <>
      <h1>I am RoomList</h1>
      <Link to="/new-room">New Room</Link> 
      <div >
      {/* <table style={{overflowX:"auto"}}> */}
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>NAME</th>
            <th>PRICE PER DAY</th>
            <th>DISCOUNTED PRICE</th>
            <th>BED DETAILS</th>
            <th>AMENITIES</th>
            <th>PERSON CAPACITY</th>
            <th>PHOTOS</th>
            <th>THUMBNAILS</th> 

            <th>Edit</th>
            <th>Delete</th>
         </tr>
        </thead>
        <tbody>
         {room && 
          room.map((room)=>{
          return(
            
              <tr>
                <td>{room._id}</td>
                <td>{room.name}</td>
                <td>{room.price_per_day}</td>
                <td>{room.descounted_price}</td>
                <td>{room.bed_details}</td>
                <td>{room.amenties}</td>
                <td>{room.person_capacity}</td>
                <td><img src={room.photos} width={100} height={100}/></td>
                <td>{room.thumbnail}</td>
                {/* <td>{user.created}</td>
                <td>{user.modified}</td> */}
                <td>
                  <Link to={`/edit-room?id=${room._id}`}>Edit Room</Link>
                </td>
                <td>
                <Button variant="primary" size="sm"
                    onClick={async()=>{
                    console.log(room._id);

                    const requestOptions = {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    };
          
                    const response = await fetch(
                    `http://localhost:3001/room/${room._id}`,
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

export default RoomList;
