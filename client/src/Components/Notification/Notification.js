import { useSelector } from "react-redux";
import NotificationAlert from "./NotificationAlert";
import "./notification.css";
export default function Notification() {
  const { notifications } = useSelector((state) => state.notificationReducer);
  return (
    <div
      id="_alert-container-topright"
      className="_alert-container"
      style={{ marginTop: "70px", zIndex: "2" }}
    >
      {!!notifications.length &&
        notifications.map((n, id) => (
          <NotificationAlert key={id} notification={n} index={id} />
        ))}
    </div>
  );
}
