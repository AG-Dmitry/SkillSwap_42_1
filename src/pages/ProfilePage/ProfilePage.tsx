import styles from "./profilePage.module.scss";
import { SidebarMenu } from "./SidebarMenu";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      {/* левое меню */}
      <SidebarMenu />

      {/* личные данные */}
      <ProfileForm />
    </div>
  );
};
