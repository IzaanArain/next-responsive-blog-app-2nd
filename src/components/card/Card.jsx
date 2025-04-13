import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item }) => {
    return (
        <div className={styles.container}>
            {item.img && (<div className={styles.imgContainer}>
                <Image src={item.img} alt="" fill className={styles.image} />
            </div>)}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <time className={styles.date}>{item.createdAt.substring(0, 10)} - </time>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/post/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
                <Link href={`/post/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card