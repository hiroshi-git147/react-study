import styles from "./Main.module.css";
import { Headline } from "../Headline";
import { Links } from "../Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline pages={props.page}>
        <li>
          Get started by editing <code>src/pages/{props.page}.js</code>.
        </li>
      </Headline>

    <Links />
    </main>
  );
}
