import { useEffect, useState } from "react";
export default function NotificationAlert(props) {
  const [progress_class, setProgressClass] = useState("");
  const { index, notification } = props;
  const { target, message, type } = notification;
  useEffect(() => {
    // const timeOutProgress = setTimeout(() => {
    //   setProgressClass("progress");
    // }, 1000);

    // const closeNotification = setTimeout(() => {
    //   let button = document.getElementById("close_notification_alert_" + index);
    //   if (button) button.click();
    // }, 3900);
    return () => {
      // clearTimeout(timeOutProgress);
      // clearTimeout(closeNotification);
    };
  }, []);

  return (
    <div
      className={`alert fade show alert-${type} alert-dismissible animate__animated animate__slideInRight`}
      role="alert"
    >
      {target} {message}
      <button
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        id={"close_notification_alert_" + index}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={`progress-bar bg-${type}`}>
        <div className="bar">
          <span id="progress" className={progress_class + " m-0"}></span>
        </div>
      </div>
    </div>
  );
}
