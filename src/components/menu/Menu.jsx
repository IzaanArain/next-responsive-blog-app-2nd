import styles from "./menu.module.css";
import MenuCategories from "./menuCategories/MenuCategories";
import MenuPosts from "./menuPosts/MenuPosts";

const Menu = () => {
  return (
    <aside className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h2 className={styles.title}>Most popular</h2>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h2 className={styles.title}>Editor's Pick</h2>
      <MenuPosts withImage={true} />
    </aside>
  )
}

export default Menu