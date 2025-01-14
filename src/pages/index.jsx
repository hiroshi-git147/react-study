import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

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

        <a href="/about" onClick={handleClick}>
          ボタン
        </a>
        {/* メインコンポーネント */}
        <Main page="index" />

        {/* フッターコンポーネント */}
        <Footer />
      </div>
    </>
  );
}
