import styles from './menuCategories.module.css'
import { categories } from "@/constants/constants";
import Link from "next/link";

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            {
                categories.map((cat, index) => (
                    <Link
                        key={index}
                        href={`/blog?cat=${cat.name.toLowerCase()}`}
                        className={`${styles.categoryItem} ${styles[cat.name.toLowerCase()]}`}
                    >
                        {cat.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default MenuCategories