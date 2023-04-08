import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LoginModal from "../components/models/LoginModal";
import RegisterModal from "../components/models/RegisterModal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
