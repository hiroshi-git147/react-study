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
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  // flgを切り替える
  const handleDisplay = useCallback(() => {
    setFlg((hiddenBtn) => !hiddenBtn);
  }, []);

  // テキスト入力の変更を管理
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // 配列に新しい項目を追加
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

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

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        {/* フッターコンポーネント */}
        <Footer />
      </div>
    </>
  );
}
