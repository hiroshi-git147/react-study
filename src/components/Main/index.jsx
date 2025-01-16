import styles from "./Main.module.css";
import { Headline } from "../Headline";
import { Links } from "../Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline />

      <Links />
    </main>
  );
}
