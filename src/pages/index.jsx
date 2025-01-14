import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  console.log(foo);

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* ヘッダーコンポーネント */}
        <Header />
        <h1>{foo}</h1>

        <button href="/about" onClick={handleClick}>
          ボタン
        </button>
        {/* メインコンポーネント */}
        <Main page="index" />

        {/* フッターコンポーネント */}
        <Footer />
      </div>
    </>
  );
}
