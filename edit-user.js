import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [identityProof, setIdentityProof] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
    console.log("id >>>>.."  +searchParams.get("id"));
    const id= searchParams.get("id");

  useEffect(() => {
    
    console.log("Username=" + username);
    console.log("Password=" + password);
    console.log("Email=" + email);
    console.log("Firstname=" + firstName);
    console.log("LastName=" + lastName);
    console.log("Address=" + address);
    console.log("Mobile=" + mobile);
    console.log("identityNumber=" + identityNumber);
    console.log("identityProof=" + identityProof);
    console.log("Age=" + age);

    fetchUser();

  },[]);

  const fetchUser = async()=>{
    const response = await fetch(`http://localhost:3001/users/${id}`);
            
    const responseJSON = await response.json();

    console.log("user is",responseJSON);

    setUserName(responseJSON.username);
    setFirstName(responseJSON.first_name);
    setLastName(responseJSON.last_name);
    setEmail(responseJSON.email);
    setPassword(responseJSON.password);
  };
  return (
    <>
      <h1>I am NewUser</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          console.log("Username=" + username);
          console.log("Password=" + password);
          console.log("Email=" + email);
          console.log("Firstname=" + firstName);
          console.log("LastName=" + lastName);
          console.log("Address=" + address);
          console.log("Mobile=" + mobile);
          console.log("identityNumber=" + identityNumber);
          console.log("identityProof=" + identityProof);
          console.log("Age=" + age);

          const data = {
            //on submit data will be transfered to server in this format
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
            age: age,
            identity_proof_number: identityNumber,
            identity_proof_type: identityProof,
            mobile: mobile,
            address: address,
          };

          // Simple POST request with a JSON body using fetch
          
          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), //data to be send
          };

          const response = await fetch(
            `http://localhost:3001/users/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();

          console.log("data entered ", responseJSON);
          window.location.replace('http://localhost:3000/user-list');  ///redirect page to userlist at port 3000
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="on"
          value={username}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="on"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          autoComplete="on"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="first_name">First_name</label>
        <input
          id="first_name"
          name="first_name"
          type="text"
          autoComplete="on"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="last_name">Last_name</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          autoComplete="on"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          autoComplete="on"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          autoComplete="on"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="on"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="identityProofNumber">Identity Proof Number</label>
        <input
          id="identityProofNumber"
          name="identityProofNumber"
          type="text"
          autoComplete="on"
          value={identityNumber}
          onChange={(event) => {
            setIdentityNumber(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="identityProofType">Identity Proof Type</label>
        <input
          id="identityProofType"
          name="identityProofType"
          type="text"
          autoComplete="on"
          value={identityProof}
          onChange={(event) => {
            setIdentityProof(event.target.value);
          }}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditUser;