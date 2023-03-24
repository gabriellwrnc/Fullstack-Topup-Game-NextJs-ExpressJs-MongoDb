import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/homepage.css";
import "../styles/utilities.css";
import "../styles/detail.css";
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
