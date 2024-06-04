import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Menu from "../../menu/Menu";
import "./admin.scss";

function Admin() {
  const [close, setClose] = useState(false);
  return (
    <div className={`admin ${close ? "admin__close" : ""}`}>
      <Sidebar />
      <div>
        <Menu setClose={setClose} />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
