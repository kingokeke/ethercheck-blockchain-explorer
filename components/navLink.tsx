import Link from "next/link";
import NavLinkProps from "../models/navLink.model";
import styles from "../styles/navLink.module.scss";

const NavLink = ({ href, title }: NavLinkProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.navMenuItem}>{title}</a>
  </Link>
);

export default NavLink;
