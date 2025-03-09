import styles from './menuPosts.module.css'
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/constants/constants";

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            {
                posts.slice(0, 4).map((post, index) => (
                    <Link href={"/"} className={styles.item} key={index}>
                        {
                            withImage && (
                                <div className={styles.imageContainer}>
                                    <Image src={post.image} alt="" fill className={styles.image} />
                                </div>
                            )
                        }
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                                {post.category}
                            </span>
                            <h3 className={styles.postTitle}>
                                {post.title}
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>{post.username}</span>
                                <span className={styles.date}> - {post.date}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default MenuPosts