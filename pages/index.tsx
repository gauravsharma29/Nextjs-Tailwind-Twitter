import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header label="Home" />
      <p>Content Area as a children</p>
    </>
  );
};

export default Home;
