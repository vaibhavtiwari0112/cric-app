import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Cards from "../components/Cards";
import { matchListData } from "../assets/data/listdata";
import backgroundImage from "../assets/images/bg-2.webp";

const Home = () => {
  const [data, setData] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
  //   headers: {
  //     "X-RapidAPI-Key": "3ad9e12087msh2ee2f5dbded64e4p1889b8jsn8683edbdba37",
  //     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  //   },
  // };

  // const handlefetch = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   handlefetch();
  // }, []);

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -1 }}
      />
      <Outlet />
      <Cards data={matchListData} />
    </div>
  );
};

export default Home;
