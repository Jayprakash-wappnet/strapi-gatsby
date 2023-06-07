import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>
            <Link to="/module/about">About</Link>
          </li>
          <li>
            <Link to="/module">Module</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
