import React from "react";
import HomeHeader from "../layouts/HomeHeader";
import { Outlet } from "react-router-dom";

const Series = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  );
};

export default Series;
