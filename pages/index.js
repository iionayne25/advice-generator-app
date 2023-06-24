import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [id, setId] = useState(null);
  const [advice, setAdvice] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      const newId = data.slip.id;
      setId(newId);
      const newAdvice = data.slip.advice;
      setAdvice(newAdvice);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Advice Generator App</title>
        <meta
          name="description"
          content="Advice Generator App create by next.js"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="main">
        <div className="AdviceContainer">
          <div className="TextContainer">
            <p>ADVICE #{id}</p>
            <span>{advice}</span>
          </div>
          <div className="Divider">
            <Image
              src="/images/pattern-divider-mobile.svg"
              alt="divider mobile image"
              width={295}
              height={16}
              className="md:hidden"
            />
            <Image
              src="/images/pattern-divider-desktop.svg"
              alt="divider mobile image"
              width={350}
              height={16}
              className="hidden lg:block"
            />
          </div>
          <div className="RandomBtn" onClick={fetchData}>
            <Image
              src="/images/icon-dice.svg"
              alt="dice image"
              width={24}
              height={24}
            />
          </div>
        </div>
      </main>
    </>
  );
}
