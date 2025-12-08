import React, { useEffect } from "react";
import styles from "./notificationPanel.module.scss";
import { NotificationItem } from "./NotificationItem";
import type { IReadProps } from "../../model/types";

const NotificationPanel: React.FC<IReadProps> = ({
  notifications,
  setNotifications,
  onMarkAllRead,
  isOpen,
}) => {
  //сохраняем состояние уведомлений, когда панель закрывается
  useEffect(() => {
    if (!isOpen) {
      //здесь можно вызывать api или сохранять в родительском стейт
      console.log(
        "Сохраняем текущее уведомление перед закрытием:",
        notifications,
      );
    }
  }, [isOpen, notifications]);

  //обработчик, который помечает все уведомления как прочитанные
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    onMarkAllRead?.(); //вызывает колбек из шапки, чтобы убрать карсную точку
  };

  //обработчик очистки просмотренных уведомлений
  const handleClearViewed = () => {
    setNotifications((prev) => prev.filter((n) => !n.isRead));
  };

  //берём только по 2 новых и 2 просмотренных
  const newSlice = notifications.filter((n) => !n.isRead).slice(0, 2);
  const viewedSlice = notifications.filter((n) => n.isRead);

  return (
    <div className={styles.panelContainer}>
      {/*новые */}
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Новые уведомления</h3>
        <a
          href="#0"
          className={styles.readEverything}
          onClick={handleMarkAllRead}
        >
          Прочитать все
        </a>
      </div>

      <div>
        {newSlice.length === 0 ? (
          <p className={styles.noNotifications}>Нет новых уведомлений</p>
        ) : (
          newSlice.map((n) => <NotificationItem key={n.id} notification={n} />)
        )}
      </div>

      {/*просмотренные */}
      <div className={styles.viewedCard}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Просмотренные</h3>

          <a
            href="#0"
            className={styles.readEverything}
            onClick={handleClearViewed}
          >
            Очистить
          </a>
        </div>

        <div>
          {viewedSlice.length === 0 ? (
            <p className={styles.noNotifications}>
              Нет просмотренных уведомлений
            </p>
          ) : (
            viewedSlice.map((n) => (
              <NotificationItem key={n.id} notification={n} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
