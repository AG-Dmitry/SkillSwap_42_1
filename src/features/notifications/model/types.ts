export interface INotification {
  id: string; //айди оповещения
  message: string; //основное сообщение
  details: string; //дополнительные детали (например, "Перейти в профиль...")
  type: "success" | "error" | "warning"; //тип сообщения
  date: string; //дата уведомлений
  action?: string; //действие, например, перейти
  isRead?: boolean; //тоглер переключения прочитанного уведомления
  from?: string; // от кого уведомление
  to?: string; // для кого уведомление
}

export interface INotificationItemProps {
  notification: INotification;
}

export interface IReadProps {
  //Временно notifications и setNotifications (в шапке тоже убрать потом!!!)
  notifications: INotification[];
  setNotifications: React.Dispatch<React.SetStateAction<INotification[]>>;
  onMarkAllRead?: () => void; //вызывается при пометке всех как прочитанных
  isOpen?: boolean; //пропс, чтобы знать, открыта панель или нет
}
