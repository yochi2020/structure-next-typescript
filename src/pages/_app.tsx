import type { AppProps } from "next/app";
import Router from "next/router";
import React from "react";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import "@/styles/globals.css";

nProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
