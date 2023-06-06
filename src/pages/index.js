import * as React from "react";
import MyComponent from "../components/MyComponents";
import Strapi from "../components/Strapi";

const IndexPage = () => {
  return (
    <>
      <MyComponent myName="jp" />
      <Strapi />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
