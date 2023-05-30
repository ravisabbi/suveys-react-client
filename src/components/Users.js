import React from "react";
import SideBar from "./SideBar";

import UsersTable from "./UsersTable";
import "../scss/dashboard.scss";

function Users() {
  return (
    <div className="dashboard-container">
      <SideBar />
      {/* <ProSidebar/> */}
      <UsersTable />
    </div>
  );
}

export default Users;
