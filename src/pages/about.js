import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >

        {/* ヘッダーコンポーネント */}
        <Header />

        {/* メインコンポーネント */}
        <Main page = "about" />

        {/* フッターコンポーネント */}
        <Footer />
      </div>
    </div>
  );
}
