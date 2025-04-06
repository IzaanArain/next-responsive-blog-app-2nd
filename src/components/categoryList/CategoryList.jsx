import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
      cache: "no-store"
    });
  
    if (!res.ok) {
      throw new Error("Failed")
    }
  
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          data?.map((cat, index) => (
            <Link
              key={cat.id}
              href={`/blog?cat=${cat.slug.toLowerCase()}`}
              className={`${styles.category} ${styles[cat.slug.toLowerCase()]}`}
            >
              {
                cat.img && (<Image
                  src={cat.img}
                  alt="style"
                  width={32}
                  height={32}
                  className={styles.image}
                />)
              }
              {cat.title}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryList;
