import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
  <div>
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
    <ol>
      {props.children}
      <li>Save and see your changes instantly.</li>
    </ol>
  </div>
    
  );
}
