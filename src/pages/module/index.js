import { Link } from "gatsby";
import React from "react";

const index = () => {
  return (
    <div>
      <p>
        Index file in <b>src/pages/module</b>
      </p>
      <Link to="/">
        <button className="btn btn-danger">Back to Home</button>
      </Link>
    </div>
  );
};
export const Head = () => <title> Module </title>;

export default index;
