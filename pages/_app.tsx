import { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { appCSS } from "../styles/styles";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Føniks</title>
      </Head>
      <Global styles={appCSS} />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
