import CategoryList from "@/components/categoryList/CategoryList";
import styles from "./page.module.css"
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";

export default async function Home({ searchParams }) {
  const { page = "1" } = await searchParams
  const pageNumber = parseInt(page);
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <section className={styles.content}>
        <CardList page={pageNumber}/>
        <Menu />
      </section>
    </div>
  );
}
