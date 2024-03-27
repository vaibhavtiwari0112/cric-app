import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Importing the logo image

const Header = () => {
  const logoStyles = {
    height: "40px",
    marginRight: "8px",
    marginTop: "4px",
  };

  return (
    <header className="bg-gray-800 text-white fixed w-full z-10 top-0 py-1 px-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="items-center flex-row ">
          <img src={logo} alt="Cricket App Logo" style={logoStyles} />
          <span className="text-xl italic text-green-600 font-bold">
            CricApp
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/live-scores"
                className="header-link hover:border-b-2 hover:border-green-600"
              >
                Live Scores
              </Link>
            </li>
            <li>
              <Link
                to="/series"
                className="header-link hover:border-b-2 hover:border-green-600"
              >
                Series
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="header-link hover:border-b-2 hover:border-green-600"
              >
                Teams
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
