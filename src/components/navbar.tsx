import Link from "next/link";
import styles from "@/styles/Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <Link className={styles.link} href={"/counter"}>Contador</Link>
            <Link className={styles.link} href={"/form"}>Formulário</Link>
            <Link className={styles.link} href={"/request"}>Requisição</Link>
        </ul>
    </nav>
  );
}

export default Navbar;