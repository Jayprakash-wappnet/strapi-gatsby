import * as React from "react";
import MyComponent from "../components/MyComponents";
import Strapi from "../components/Strapi";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <MyComponent myName="Bob" />
      <Strapi />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
