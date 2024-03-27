import React from "react";
import HomeHeader from "../layouts/HomeHeader";
import { Outlet } from "react-router-dom";

const Teams = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  );
};

export default Teams;