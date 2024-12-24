import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/test");
  };

  useEffect(() => {
    router.prefetch("/test");
  }, [router]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Index</Link>
            </li>
            <li>
              <Link href={"/search"} prefetch={false}>
                Search
              </Link>
            </li>
            <li>
              <Link href={"/book/1"}>Book</Link>
            </li>
          </ul>
          <button onClick={handleClick}>{"Move to TEST"}</button>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
