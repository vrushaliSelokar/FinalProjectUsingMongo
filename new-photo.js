import { useEffect, useState } from "react";

const NewPhoto = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  

  useEffect(() => {
    console.log("Name=" + name);
    console.log("Photo =" + photo);
  
    },[name,photo]);

  
  // useEffect(()=>{

  //   fetchAmenities();

  // },[]);

  // const fetchAmenities = async()=>{
  //   const response = await fetch(`http://localhost:3001/amenties`);
            
  //   const responseJSON = await response.json();
  //   console.log("Amenities>>.", responseJSON );
  //   setAmenities(responseJSON);
  // };


  return (
    <>
      <h1>I am New photo</h1>
      <form
        onSubmit={async(event) => {
          event.preventDefault();

          console.log("Name=" + name);
          console.log("Photo =" + photo);
          
          const data = {
            //on submit data will be transfered to server in this format
            name: name,
            photo:photo
            
          };

          // Simple POST request with a JSON body using fetch
          
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), //data to be send
          };

          const response = await fetch(
            "http://localhost:3001/photos",
            requestOptions
          );

          const responseJSON = await response.json();

          console.log("data entered ", responseJSON);

          window.location.replace('http://localhost:3000/photo-list'); //to redirect data back to userlist from new-room
        
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

        <label htmlFor="photo">Photo</label>
        {/* <input
          id="photo"
          name="photo"
          type="file"
          autoComplete="on"
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        /> */}
         <input type="file" name="avatar" id="file" accept=".jpef,.png, .jpg" 
            onChange={(e)=>{
              //const photoUpload = (e:any)=>{
                e.preventDefault();
                const reader = new FileReader();
                const file = e.target.files[0];
                console.log("reader",reader);
                console.log("File", file);
                if (reader !==undefined && file !== undefined){
                  reader.onloadend = () => {
                    // setFile(file);
                    // setSize(file.size);
                    // setName(file.name);
                    //setImagePreview(reader.result);
                    console.log(reader.result);
                    setPhoto(reader.result);
                    console.log("I am here");
                  }
                  reader.readAsDataURL(file);
                }
            }} />
        <br />
        <br />  

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewPhoto;
