import React from "react";
import SideBar from "./SideBar";



import "../scss/dashboard.scss";
import ExecutivesChart from "./ExecutivesChart";

function AdminHome() {
  return (
    <div className="dashboard-container">
      <SideBar />
      {/* <ProSidebar/> */}
      {/* <AdminTable /> */}
      <ExecutivesChart/>
    </div>
  );
}

export default AdminHome;
