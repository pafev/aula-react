import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link className={styles.link} href={"/"}>
          Home
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
