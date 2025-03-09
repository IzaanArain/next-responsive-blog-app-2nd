import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <time className={styles.date}>11.02.2023 - </time>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href={"/"}>
                    <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corrupti.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque perferendis inventore ipsum provident quidem quia tenetur minus recusandae dolor.</p>
                <Link href={"/"} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card