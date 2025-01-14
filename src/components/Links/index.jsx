import Image from "next/image";
import styles from "./Links.module.css";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    className: styles.primary,
    description: "Deploy now",
    icon: "/vercel.svg",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    className: styles.secondary,
    description: "Read our docs",
  },
];

export function Links() {
  return (
    <div className={styles.ctas}>
      {ITEMS.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={item.className}
        >
          {item.icon && (
            <Image
              className={styles.logo}
              src={item.icon}
              alt="Vercel logomark"
              width={20}
              height={20}
              priority
            />
          )}
          {item.description}
        </a>
      ))}
    </div>
  );
}
