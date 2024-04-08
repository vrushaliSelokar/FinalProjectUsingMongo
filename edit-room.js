import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditRoom = () => {
  const [name, setName] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [bedDetails, setBedDetails] = useState("");
  const [amenities, setAmenities] = useState("");
  const [personCapacity, setPersonCapacity] = useState("");
  const [photo, setPhoto] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
    console.log("id >>>>.."  +searchParams.get("id"));
    const id= searchParams.get("id");

  useEffect(() => {
    
    console.log("name=" + name);
    console.log("pricePerDay=" + pricePerDay);
    console.log("discountedPrice=" + discountedPrice);
    console.log("bedDetail=" + bedDetails);
    console.log("amenties=" + amenities);
    console.log("personCapacity=" + personCapacity);
    console.log("photos=" + photo);
    console.log("thumbnails=" + thumbnail);

    fetchRoom();

  },[]);

  const fetchRoom = async()=>{
    const response = await fetch(`http://localhost:3001/room/${id}`);
            
    const responseJSON = await response.json();

    console.log("room is",responseJSON);

    setName(responseJSON.name);
    setPricePerDay(responseJSON.pricePerDay);
    setDiscountedPrice(responseJSON.discountedPrice);
    setBedDetails(responseJSON.bedDetails);
    setAmenities(responseJSON.amenities);
    setPersonCapacity(responseJSON.personCapacity);
    setPhoto(responseJSON.photo);
    setThumbnail(responseJSON.thumbnail);
  };
  
  return (
    <>
      <h1>I am New Room(edit)</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          console.log("Name=" + name);
          console.log("Price per day=" + pricePerDay);
          console.log("Discounted price=" + discountedPrice);
          console.log("Bed Details=" + bedDetails);
          console.log("Amenities=" + amenities);
          console.log("Perspn Capacity=" + personCapacity);
          console.log("Photos =" + photo);
          console.log("Thumbnails=" + thumbnail);


          const data = {
            //on submit data will be transfered to server in this format
            name: name,
            price_per_day: pricePerDay,
            discounted_price: discountedPrice,
            bed_detail: bedDetails,
            amenties: amenities,
            person_capacity: personCapacity,
            Photo: photo,
            thumbnail: thumbnail
          };

          // Simple POST request with a JSON body using fetch
          
          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), //data to be send
          };

          const response = await fetch(
            `http://localhost:3001/room/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();

          console.log("data entered ", responseJSON);
          window.location.replace('http://localhost:3000/room-list');
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

        <label htmlFor="pricePerday">price_per_day</label>
        <input
          id="pricePerday"
          name="pricePerday"
          type="password"
          autoComplete="on"
          value={pricePerDay}
          onChange={(event) => {
            setPricePerDay(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="discountedPrice">Discounted Price</label>
        <input
          id="discountedPrice"
          name="discountedPrice"
          type="text"
          value={discountedPrice}
          autoComplete="on"
          onChange={(event) => {
            setDiscountedPrice(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="bedDetails">Bed Details</label>
        <input
          id="bedDetails"
          name="bedDetails"
          type="text"
          autoComplete="on"
          value={bedDetails}
          onChange={(event) => {
            setBedDetails(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="amenities">Amenities</label>
        <input
          id="amenities"
          name="amenities"
          type="text"
          autoComplete="on"
          value={amenities}
          onChange={(event) => {
            setAmenities(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="personCapacity">Person capacity</label>
        <input
          id="personCapacity"
          name="personCapacity"
          type="text"
          autoComplete="on"
          value={personCapacity}
          onChange={(event) => {
            setPersonCapacity(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="photo">Photo</label>
        <input
          id="photo"
          name="photo"
          type="file"
          autoComplete="on"
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <br />
        <br /> 

        <label htmlFor="thumnail">Thumbnail</label>
        <input
          id="thumnail"
          name="thumnail"
          type="text"
          autoComplete="on"
          value={photo}
          onChange={(event) => {
            setThumbnail(event.target.value);
          }}
        />
        <br />
        <br /> 


        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditRoom;