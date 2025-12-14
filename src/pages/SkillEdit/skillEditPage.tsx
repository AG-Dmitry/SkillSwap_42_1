import styles from "./skillEditPage.module.scss";
import { SidebarMenu } from "../ProfilePage/SidebarMenu";
import { SkillEditForm } from "./skillEditForm";

export const SkillEditPage = () => {
  return (
    <div className={styles.wrapper}>
      {/* левое меню */}
      <SidebarMenu />

      {/* личные данные */}
      <SkillEditForm />
    </div>
  );
};
