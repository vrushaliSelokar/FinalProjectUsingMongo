import react from "react";
import styles from "./sidebar.module.css";
import SideBarItem from "./SideBarItem";
import { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

const MENU_ITEM = ["Users","Booking", "Photos","Room"];
function Sidebar() {
  // const [closeOtherItems,setCloseOtherItems] = useState();

  // const closeOtherItem =()=>{

  // };
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/user-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/booking-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Bookings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/room-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Rooms</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/photo-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Photos</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink> */}

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

      <div className='sideContent' style={{ width:"calc(100% - 150px)"}}>
            <Header></Header>
            <MainContent></MainContent>
      </div>

    </div>

    // <div className={styles["side-bar"]}>
    //   <aside>
    //     <nav>
    //     <ul className={styles["ul-aside"]}>
    //      <SideBarItem
    //      title={MENU_ITEM[0]}
    //      path="/user-list"
    //     ></SideBarItem>
    //      <SideBarItem
    //      title={MENU_ITEM[1]}
    //      path="/product-list"
    //      ></SideBarItem>
    //      <SideBarItem
    //      title={MENU_ITEM[2]}
    //      path="/cart-list" ></SideBarItem>
    //       {/* <li  className={styles["li-aside"]}>
    //         <a href="#news">Products</a>
    //       </li>
    //       <li className={styles["li-aside"]}>
    //         <a href="#contact">Carts</a>
    //       </li> */}

    //     </ul>
    //     </nav>
    //   </aside>
    // </div>
  );
}

export default Sidebar;
