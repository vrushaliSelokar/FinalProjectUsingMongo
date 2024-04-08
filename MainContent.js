import react from "react";
import styles from "./main-content.module.css";
import ProductList from "../Pages/Product/product-list";
import UserList from "../Pages/User/user-list";
import RoomList from "../Pages/room/room-list";
import NewProduct from "../Pages/Product/new-product";
import NewRoom from "../Pages/room/new-room";
import EditProduct from "../Pages/Product/edit-product";
import EditRoom from "../Pages/room/edit-room";
import EditUser from "../Pages/User/edit-user";
import NewUser from "../Pages/User/new-user";
import Layout from '../Layout';
import { Route,Routes } from "react-router-dom";
import NewPhoto from "../Pages/photo/new-photo";
import EditPhoto from "../Pages/photo/edit-photo";
import PhotoList from "../Pages/photo/photo-list";

function MainContent(){
    return(
     <>
        <h1>I am MainContent</h1>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<UserList />} />
            <Route path="new-user" element={<NewUser/>} />
            <Route path="edit-user" element={<EditUser/>} />
            <Route path="user-list" element={<UserList/>} />
            

            <Route path="new-product" element={<NewProduct />} />
            <Route path="edit-product" element={<EditProduct />} /> 
            <Route path="product-list" element={<ProductList />} /> 

            <Route path="new-room" element={<NewRoom/>} />
            <Route path="edit-room" element={<EditRoom/>} /> 
            <Route path="room-list" element={<RoomList/>} /> 
           
            <Route path="new-photo" element={<NewPhoto/>} />
            <Route path="edit-photo" element={<EditPhoto/>} /> 
            <Route path="photo-list" element={<PhotoList/>} /> 
           
            </Route>

        </Routes>
     </>
    );
}

export default  MainContent;