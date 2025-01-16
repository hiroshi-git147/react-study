import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// index画面
export default function Home() {
  // flgをuseStateで管理し初期値:true
  const [flg, setFlg] = useState(true);

  const handleClick = useCallback(() => {
    // TODO
    console.log(flg);

    /**
     * true elementsの中身を表示
     * false elementsの中身を非表示
     */
    if (flg) {
      setFlg(false);
    } else {
      setFlg(true);
    }
  }, [flg]);

  const handleDisplay = useCallback(() => {
    setFlg((hiddenBtn) => !hiddenBtn);
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
        {/* メインコンポーネント */}
        <Main page="index" />
        <button href="/about" onClick={handleDisplay}>
          ボタン
        </button>
        {flg && <div>aaaaa</div>}

        {/* フッターコンポーネント */}
        <Footer />
      </div>
    </>
  );
}
