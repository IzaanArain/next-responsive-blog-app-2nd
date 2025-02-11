import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, IZAAN.DEV here!</b> Discover my stories and creative ideas.
      </h1>
      <article className={styles.post}>
        <section className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="article image" fill className={styles.image} />
        </section>
        <section className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, nisi!</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
            dolore incidunt aperiam dolorem eaque nesciunt qui aspernatur dolorum soluta consectetur?</p>
          <button className={styles.button}>Read More</button>
        </section>
      </article>
    </section>
  )
}

export default Featured