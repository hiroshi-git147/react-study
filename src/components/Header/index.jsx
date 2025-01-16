import Link from "next/link";
import style from "./Header.module.css";
import Image from "next/image";

const NAVLISTS = ["about", "menu", "products", "contact", "blogs"];

export function Header() {
  return (
    <header className={style.header}>
      <div>
        <a href="/" rel="noopener noreferrer">
          <Image
            className={style.logo}
            src="/images/logo.jpeg"
            alt="Vercel logomark"
            width={56}
            height={48}
            priority
          />
        </a>
      </div>

      <nav>
        <ul>
          <li className="navlists">
            {NAVLISTS.map((navlist) => (
              <Link
                href={`/${navlist}`}
                key={navlist}
                className={style.navlink}
              >
                {navlist}
              </Link>
            ))}
          </li>
        </ul>
      </nav>

      <div className={style.header_icons}>
        <div className="fas fa-search header_icons" id="search-btn"></div>
        <div className="fas fa-shopping-cart header_icons" id="cart-btn"></div>
        <div className="fas fa-bars header_icons" id="menu-btn"></div>
      </div>
    </header>
  );
}
