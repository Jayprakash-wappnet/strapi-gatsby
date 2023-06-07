import { Link } from "gatsby";
import React from "react";

const about = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Link to="/">
        <button className="btn btn-danger">Back to Home</button>
      </Link>
    </div>
  );
};
export const Head = () => <title> About </title>;

export default about;
