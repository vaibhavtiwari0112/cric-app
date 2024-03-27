import React from "react";
import HomeHeader from "../layouts/HomeHeader";
import { Outlet } from "react-router-dom";
import Cards from "../components/Cards";

const LiveScores = () => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export default LiveScores;
