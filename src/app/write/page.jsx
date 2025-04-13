'use client';

import Image from 'next/image'
import styles from './write.module.css'
import { useEffect, useState, } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { upload } from '@/utils/firebaseUpload';
import { apiUrls } from '@/constants/apiUrls';

const Write = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");

    const { status } = useSession()

    const router = useRouter();

    const uploadImage = async (image) => {
        try {
            const imgUrl = await upload(image);
            return imgUrl;
        } catch (error) {
            console.error("Upload Error: ", error)
        }
    };

    const uploadAndSet = async (image) => {
        const imgUrl = await uploadImage(image);
        setMedia(imgUrl);
    };

    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    const handleSubmit = async () => {
        try {
            const res = await fetch(`${apiUrls.posts}`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc: value,
                    img: media,
                    slug: slugify(title),
                    catSlug:"travel", // TODO: ADD CATEGORY OPTION
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res)
            if (!res.ok) throw new Error("Post failed");
        } catch (err) {
            console.error("Submit error", err);
        }
    }
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    useEffect(() => {
        if (file) {
            uploadAndSet(file);
        }
    }, [file])

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            {/* TODO: ADD CATEGORY OPTION */}
            <input type="text" placeholder='category' />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src={`/plus.png`} alt='' width={16} height={16} />
                </button>
                {
                    open && (<div className={styles.add}>
                        <input
                            type="file"
                            id='file'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: 'none' }}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor="file">
                                <Image src={`/image.png`} alt='' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src={`/external.png`} alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src={`/video.png`} alt='' width={16} height={16} />
                        </button>
                    </div>)
                }
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story...'
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default Write