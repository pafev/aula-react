import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kanit } from "next/font/google";

const font = Kanit({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
