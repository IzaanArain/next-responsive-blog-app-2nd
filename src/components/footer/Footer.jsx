import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={`/logo2.png`} alt="logo" width={50} height={50} className={styles.logoImage}/>
          <h1 className={styles.logoText}>Izaan.Dev</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis asperiores fugit placeat maiores accusamus accusantium iure corrupti possimus pariatur unde nihil eveniet, reprehenderit delectus similique ex inventore quod qui. Quas cumque in numquam asperiores. Aspernatur repellat nesciunt odio placeat?
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="facebook" width={18} height={18} />
          <Image src={"/instagram.png"} alt="instagram" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="tiktok" width={18} height={18} />
          <Image src={"/youtube.png"} alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={`/`}>Home</Link>
          <Link href={`/`}>Blog</Link>
          <Link href={`/`}>About</Link>
          <Link href={`/`}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>tags</span>
          <Link href={`/`}>Style</Link>
          <Link href={`/`}>Fashion</Link>
          <Link href={`/`}>Coding</Link>
          <Link href={`/`}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={`/`}>Facebook</Link>
          <Link href={`/`}>Instagram</Link>
          <Link href={`/`}>Linkedin</Link>
          <Link href={`/`}>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer