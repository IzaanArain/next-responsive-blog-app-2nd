'use client';

import Image from 'next/image';
import styles from './comments.module.css'
import Link from 'next/link';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { apiUrls } from '@/constants/apiUrls';
import { useState } from 'react';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data
}

const Comments = ({ slug }) => {
    const { status } = useSession();

    const COMMENTS_API_ENDPOINT = `${apiUrls.comments}/?postSlug=${slug}`
    const { data, mutate, isLoading } = useSWR(COMMENTS_API_ENDPOINT, fetcher);

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        if (!desc.trim()) { return }
        await fetch(`${apiUrls.comments}`,
            {
                method: "POST",
                body: JSON.stringify({ desc, postSlug: slug })
            });
        mutate();
        setDesc("");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated"
                    ? (<div className={styles.write}>
                        <textarea
                            value={desc}
                            placeholder='Write a comment...'
                            className={styles.input}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button className={styles.button} onClick={handleSubmit}>Send</button>
                    </div>)
                    : (<Link href={`/login`}>Login to write comment</Link>)
            }
            <div className={styles.comments}>
                {isLoading ? '...loading' : data.map((com) => (
                    <div className={styles.comment} key={com.id}>
                        <div className={styles.user}>
                            {com.user?.image && (<Image
                                src={com.user.image}
                                alt='user image'
                                width={50}
                                height={50}
                                className={styles.image}
                            />)}
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{com.user.name}</span>
                                <span className={styles.date}>{com.createdAt.substring(0, 10)}</span>
                            </div>
                        </div>
                        <p className={styles.desc}>{com.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments