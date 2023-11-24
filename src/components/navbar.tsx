import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link className={styles.link} href={"/useState"}>
          useState
        </Link>
        <Link className={styles.link} href={"/form"}>
          Formulário
        </Link>
        <Link className={styles.link} href={"/useEffect"}>
          useEffect
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
