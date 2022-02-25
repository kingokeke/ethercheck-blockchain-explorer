import Link from "next/link";
import NavLinkProps from "../../models/navLink.model";
import styles from "../../styles/header.module.scss";
import NavLink from "../navLink";
import SiteContainer from "./container";

const menuItems: NavLinkProps[] = [
  { href: "#", title: "Home" },
  { href: "#", title: "Block Explorer" },
  { href: "#", title: "Tokens" },
  { href: "#", title: "Resources" },
  { href: "#", title: "More" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <SiteContainer>
        <div className={styles.header__content}>
          <h1 className={styles.header__logo}>
            <Link href="/">
              <a>EtherCheck</a>
            </Link>
          </h1>
          <nav className={styles.header__navigation}>
            <ul className={styles.header__navigation_links}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.header__navigation_item}>
                  <NavLink href={item.href} title={item.title} />
                </li>
              ))}
              <li className={styles.header__navigation_item}>
                <a href="#" className={styles.header__signin}>
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </SiteContainer>
    </header>
  );
};

export default Header;
