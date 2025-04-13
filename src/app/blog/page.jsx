import CardList from "@/components/cardList/CardList";
import styles from "./blog.module.css";
import Menu from "@/components/menu/Menu";

const Blog = async ({ searchParams }) => {
  const { page = "1", cat = "" } = await searchParams
  const pageNumber = parseInt(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList  page={pageNumber} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default Blog;