import Image from "next/image";
import styles from "./Headline.module.css";

export function Headline() {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h3>fresh coffee in the morning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          labore, sint cupiditate distinctio tempora reiciendis.
        </p>
        <a href="#" className={styles.btn}>
          get yours now
        </a>
      </div>
    </div>
  );
}
