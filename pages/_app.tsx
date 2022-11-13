import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Montserrat } from "@next/font/google";

const montserrat = Montserrat();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <Component className={montserrat.className} {...pageProps} />
    </>
  );
}
