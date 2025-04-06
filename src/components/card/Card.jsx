import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key, item}) => {
    return (
        <div className={styles.container} key={key} >
            <div className={styles.imgContainer}>
                <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <time className={styles.date}>11.02.2023 - </time>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={"/"}>
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc}</p>
                <Link href={"/"} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card