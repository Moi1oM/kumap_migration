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
      </Head>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </RecoilRoot>
  );
}
