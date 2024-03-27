import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@material-tailwind/react";

const HomeHeader = () => {
  return (
    <nav className="flex container m-4 justify-center">
      <ButtonGroup variant="gradient">
        <Button>International</Button>
        <Button>Leagues</Button>
        <Button>Domestic</Button>
        <Button>Women</Button>
      </ButtonGroup>
    </nav>
  );
};

export default HomeHeader;
