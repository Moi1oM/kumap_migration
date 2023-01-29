import { Container, ImageCont } from "styles/index/style";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(12321);
  }, []);

  const [value, setValue] = useState("");
  const router = useRouter();
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Container>
        <input onChange={onChange}></input>
        <br />
        {/* <Link legacyBehavior href="/entrance/15"> */}
        <a onClick={() => router.push(`entrance/${value}`)}>
          Go to entrance/{value}.js
        </a>
        {/* </Link> */}
        <br />
        <a onClick={() => router.push(`facility/${value}`)}>
          Go to facility/{value}.js
        </a>
        <br />
        <a onClick={() => router.push("index")}>Go to googlemap</a>
        <br />
        <ImageCont src="https://demo.malgnlms.com/data/file/9cb1c1fa3b25fef4d2a9d9c7f5923780.jpg" />
      </Container>
    </>
  );
}
