import { useEffect, useState } from "react";

const NewRoom = () => {
  const [name, setName] = useState("");
  const [pricePerDay, setPricePerday] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [bedDetails, setBedDetails] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [personCapacity, setPersonCapacity] = useState("");
  const [photo, setPhoto] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const[selectedAmenities,setSelectedAmenities] = useState([]);

  useEffect(() => {
    console.log("Name=" + name);
    console.log("Price per day=" + pricePerDay);
    console.log("Discounted price=" + discountedPrice);
    console.log("Bed Details=" + bedDetails);
    console.log("Amenities=" + amenities);
    console.log("Person Capacity=" + personCapacity);
    console.log("Photos =" + photo);
    console.log("Thumbnails=" + thumbnail);

    },[name,pricePerDay,discountedPrice,bedDetails,amenities,personCapacity,photo,thumbnail]);

  
  useEffect(()=>{

    fetchAmenities();

  },[]);

  const fetchAmenities = async()=>{
    const response = await fetch(`http://localhost:3001/amenties`);
            
    const responseJSON = await response.json();
    console.log("Amenities>>.", responseJSON );
    setAmenities(responseJSON);
  };


  return (
    <>
      <h1>I am New room</h1>
      <form
        onSubmit={async(event) => {
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
            descounted_price: discountedPrice,
            bed_details: bedDetails,
            amenties: selectedAmenities,
            person_capacity: personCapacity,
            Photos: photo,
            thumbnail: thumbnail
          };

          // Simple POST request with a JSON body using fetch
          
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), //data to be send
          };

          const response = await fetch(
            "http://localhost:3001/room",
            requestOptions
          );

          const responseJSON = await response.json();

          console.log("data entered ", responseJSON);

          window.location.replace('http://localhost:3000/room-list'); //to redirect data back to userlist from new-room
        
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
          type="text"
          autoComplete="on"
          value={pricePerDay}
          onChange={(event) => {
            setPricePerday(event.target.value);
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

      
        <label htmlfor="amenities">Choose Amenities:</label>

          <select name="amenities" id="amenities" multiple onChange={event=>{
            //console.log(event.target.options);
            var options = event.target.options;
            var value = [];
            var tempSelectedAmenities = [];
            for(var i=0, l = options.length; i<l; i++){

              console.log("option " +i, options[i].selected);

              if(options[i].selected){
                value.push(options[i].value);
                tempSelectedAmenities.push(amenities[i])
              }
            }
            setSelectedAmenities(tempSelectedAmenities);
            console.log("selected value =",value);
          }}>
            {amenities.map(amenity=>{
              return <option value={amenity._id}>{amenity.name}</option>
            })}
            
          </select>
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
          type="text"
          autoComplete="on"
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
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

        <label htmlFor="thumnail">Thumbnail</label>
        <input
          id="thumnail"
          name="thumnail"
          type="text"
          autoComplete="on"
          value={thumbnail}
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

export default NewRoom;
