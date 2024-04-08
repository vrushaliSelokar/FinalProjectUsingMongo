import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditPhoto = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  //const [thumbnail, setThumbnail] = useState("");
  

  const searchParams = new URLSearchParams(document.location.search);
    console.log("id >>>>.."  +searchParams.get("id"));
    const id= searchParams.get("id");

  useEffect(() => {
    
    console.log("name=" + name);
    console.log("Photo=" + photo);
   
     fetchPhotos();

  },[]);

  const fetchPhotos = async()=>{
    const response = await fetch(`http://localhost:3001/photo/${id}`);
            
    const responseJSON = await response.json();

    console.log("photo is",responseJSON);

    setName(responseJSON.name);
    setPhoto(responseJSON.photo);
    
  };
  
  return (
    <>
      <h1>I am New Photo(edit)</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          console.log("Name=" + name);
          console.log("Photo=" + photo);

          const data = {
            //on submit data will be transfered to server in this format
            name: name,
            photo: photo,
           
          };

          // Simple POST request with a JSON body using fetch
          
          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), //data to be send
          };

          const response = await fetch(
            `http://localhost:3001/photos/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();

          console.log("data entered ", responseJSON);
          window.location.replace('http://localhost:3000/photo-list');
        }}
      >
       <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="on"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="file"
          autoComplete="on"
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditPhoto;