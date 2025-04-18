import Menu from "@/components/menu/Menu";
import styles from "./post.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error("Failed")
        }

        return res.json()
    } catch (error) {
        console.error(error)
    }
}

const Post = async ({ params }) => {
    const {slug } = await params;

    const data = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user.image && (<div className={styles.userImageContainer}>
                            <Image src={data.user.image} alt="" fill className={styles.avatar} />
                        </div>)}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {data?.img && (<div className={styles.imageContainer}>
                    <Image src={data.img} alt="post image" fill className={styles.image} />
                </div>)}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={styles.comment}>
                        <Comments slug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Post