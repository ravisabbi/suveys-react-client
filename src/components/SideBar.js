import React, { useState,useCallback } from "react";
import "../scss/sidebar.scss";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  //const [activeTab, setactiveTab] = useState(0)
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  console.log(window.location);
  let path = window.location.pathname;
  console.log(path === "/");
  console.log(path === "/executives");
  console.log(typeof path, "path");
  console.log(path === "/executives", "Ravi");
  const userName = localStorage.getItem("userName");
  const role = localStorage.getItem("role");

  const logOutUser = useCallback(() => {
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("id");
    navigate("/login", { replace: true });
  }, [navigate]);


  return (
    <div className="sidebar-container">
      <div className="profile-container">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1684933654~exp=1684934254~hmac=020a6a43b384e41da35a7a8c5470d59e700f24ea042d907d82889f7c2792e078"
          alt="profile"
          className="user-profile"
        />
        <h1 className="sidebar-text">{role === "ADMIN"? "Ravi Sabbi":"User"}</h1>
      </div>

      <div
        className={path === "/" ? "sidebar-item active-tab" : "sidebar-item"}
        onClick={() => {
          navigate("/");
        }}
      >
        <MdOutlineDashboardCustomize
          style={{ marginRight: "10px" }}
          className={(path === "/" ? "" : "sidebar-icon")}
        />
        <p
          className={
            path === "/" ? "sidebar-text active-tab-text" : "sidebar-text"
          }
        >
          DashBoard
        </p>
      </div>

      <div
        className={
          path === "/executives" || path== "/users" ? "sidebar-item active-tab" : "sidebar-item"
        }
        onClick={() => {
        {role === "ADMIN" ?navigate("/executives") :navigate("/users") }
           
        }}
      >
        <FaUsers
          style={{ marginRight: "10px" }}
          className={path === "/executives"|| path ==="/users" ? "" : "sidebar-icon"}
        />
        <p
          className={
            path === "/executives" ||path=== "/users"
              ? "sidebar-text active-tab-text"
              : "sidebar-text"
          }
        >
         {role === "ADMIN" ? "Executives":"Users"}
        </p>
      </div>

      <div className="sidebar-item">
        <AiOutlineLogout style={{cursor:"pointer"}} onClick={logOutUser} />
        <p className="sidebar-text" style={{cursor:"pointer"}} onClick={logOutUser} >Logout</p>
      </div>
    </div>
  );
}

export default SideBar;
