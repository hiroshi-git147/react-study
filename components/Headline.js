import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Headline(props) {
  console.log(props);
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
      <li>
        Get started by editing <code>src/pages/{props.pages}.js</code>.
      </li>
      <li>Save and see your changes instantly.</li>
    </ol>
  </div>
    
  );
}
