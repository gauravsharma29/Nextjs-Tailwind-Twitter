import type { NextPage } from "next";
import Header from "../components/Header";
import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
    </>
  );
};

export default Home;
