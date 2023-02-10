import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>🐯KUMAP🐯</title>
        <meta name="description" content="KUMAP" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* <script
          src={`https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=${process.env.NEXT_PUBLIC_SK_APIKEY}`}
        ></script> */}
      </Head>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </RecoilRoot>
  );
}
