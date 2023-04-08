import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout";
import LoginModal from "../components/models/LoginModal";
import RegisterModal from "../components/models/RegisterModal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
