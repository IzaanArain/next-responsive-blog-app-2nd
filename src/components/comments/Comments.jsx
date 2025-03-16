import Image from 'next/image';
import styles from './comments.module.css'
import Link from 'next/link';
import { COMMENTS } from '@/constants';

const Comments = () => {
    const status = "authenticated"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated"
                    ? (<div className={styles.write}>
                        <textarea placeholder='Write a comment...' className={styles.input} />
                        <button className={styles.button}>Send</button>
                    </div>)
                    : (<Link href={`/login`}>Login to write comment</Link>)
            }
            <div className={styles.comments}>
                {
                    COMMENTS.map((com, index) => (
                        <div className={styles.comment} key={index}>
                            <div className={styles.user}>
                                <Image
                                    src={com.image}
                                    alt='user image'
                                    width={50}
                                    height={50}
                                    className={styles.image}
                                />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{com.username}</span>
                                    <span className={styles.date}>{com.date}</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{com.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments