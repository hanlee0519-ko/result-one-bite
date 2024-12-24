import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <nav>{"Global Navigation"}</nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
