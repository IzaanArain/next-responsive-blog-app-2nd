'use client';

import { signIn, useSession } from 'next-auth/react'
import styles from './login.module.css'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {

    const { data, status } = useSession()

    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]); // Dependencies ensure this runs only when status updates

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }

    // if( status === "authenticated") {
    //     router.push("/")
    // }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn("google")}>
                    Sign in with Google
                </div>
                <div className={styles.socialButton}>Sign in with Github</div>
                <div className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    )
}

export default Login