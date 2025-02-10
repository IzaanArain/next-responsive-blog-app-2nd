import CategoryList from "@/components/categoryList/CategoryList";
import styles from "./page.module.css"
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <section className={styles.content}>
        <CardList />
        <Menu />
      </section>
    </div>
  );
}
