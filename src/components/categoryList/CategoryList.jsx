import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import { categories } from "@/constants/constants";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          categories.map((cat, index) => (
            <Link
              key={`${cat.name}-${index}`}
              href={`/blog?cat=${cat.name.toLowerCase()}`}
              className={`${styles.category} ${styles[cat.name.toLowerCase()]}`}
            >
              <Image
                src={cat.image}
                alt="style"
                width={32}
                height={32}
                className={styles.image}
              />
              {cat.name}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryList;
