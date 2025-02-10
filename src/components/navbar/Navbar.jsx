import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <section className={styles.social}>
        <Image src={"/facebook.png"} alt="facebook"width={24} height={24}/>
        <Image src={"/instagram.png"} alt="instagram"width={24} height={24}/>
        <Image src={"/tiktok.png"} alt="tiktok"width={24} height={24}/>
        <Image src={"/youtube.png"} alt="youtube"width={24} height={24}/>
      </section>
      <section className={styles.logo}>IZAAN.DEV</section>
      <nav className={styles.links}>
        <ThemeToggle />
        <Link href={"/"} className={styles.link}>Contact</Link>
        <Link href={"/"} className={styles.link}>About</Link>
        <Link href={"/"} className={styles.link}>Home</Link>
        <AuthLinks />
      </nav>
    </header>
  )
}

export default Navbar