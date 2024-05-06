import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
