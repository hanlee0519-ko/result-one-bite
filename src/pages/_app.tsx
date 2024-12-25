import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const applySearchLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {applySearchLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
