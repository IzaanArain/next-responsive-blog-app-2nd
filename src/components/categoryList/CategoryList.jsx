import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href={"/blog?cat=style"}
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={"/style.png"}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src={"/fashion.png"}
            alt="fashion"
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.food}`}>
          <Image
            src={"/food.png"}
            alt="food"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.travel}`}>
          <Image
            src={"/travel.png"}
            alt="travel"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.culture}`}>
          <Image
            src={"/culture.png"}
            alt="culture"
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.coding}`}>
          <Image
            src={"/coding.png"}
            alt="coding"
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </section>
  );
};

export default CategoryList;
