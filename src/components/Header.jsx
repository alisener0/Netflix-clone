import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix"
          className="max-w-[150px]"
        />
      </Link>
    </header>
  );
};

export default Header;
