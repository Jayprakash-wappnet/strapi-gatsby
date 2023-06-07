import React from "react";
import { Link } from "gatsby";
const contactus = () => {
  return (
    <div>
      <h1>Contact us page </h1>
      <Link to="/">
        <button className="btn btn-danger">Back to Home</button>
      </Link>
    </div>
  );
};

export const Head = () => <title> Contact Us </title>;

export default contactus;
