import Menu from "@/components/menu/Menu";
import styles from "./post.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const Post = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quo..</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src={`/p1.jpeg`} alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={`/p1.jpeg`} alt="post image" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam inventore animi non nostrum neque adipisci ipsa. Suscipit vero, maiores porro nihil et ipsam ab.
                        </p>
                        <h2>
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam inventore animi non nostrum neque adipisci ipsa. Suscipit vero, maiores porro nihil et ipsam ab, nesciunt quod magnam ut voluptatem ex nulla assumenda quia quos reiciendis a officia harum, aut molestias doloribus accusamus dicta fugiat molestiae. Id nobis maiores odio similique.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam inventore animi non nostrum neque adipisci ipsa. Suscipit vero, maiores porro nihil et ipsam ab, nesciunt quod magnam ut voluptatem ex nulla assumenda quia quos reiciendis a officia harum, aut molestias doloribus accusamus dicta fugiat molestiae. Id nobis maiores odio similique.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Post