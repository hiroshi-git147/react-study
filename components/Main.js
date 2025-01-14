import styles from "@/styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

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
