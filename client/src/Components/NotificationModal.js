import { useSelector, useDispatch } from "react-redux";
import { A_set_notification } from "../reducer/Actions/notification_action";
export default function NotificationModal() {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notificationReducer);
  return (
    <div
      id="notificationModal"
      class="modal fade"
      data-backdrop="static"
      data-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Notifications</h5>
            <span
              className="close close-absolute"
              role="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(A_set_notification([]))}
            >
              <i class="fas fa-times"></i>
            </span>
          </div>
          <div class="modal-body h-100" style={{ overflowY: "auto" }}>
            {notifications.map((n, i) => (
              <div class="card shadow border-0 px-2 rounded-0" key={i}>
                <div class="row">
                  <div class="col-auto me-auto my-auto">
                    <img
                      src={n.image}
                      alt={n.message}
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div class="col h-auto">
                    <div class="card-body">
                      <p class="card-text">
                        <div class="d-flex bd-highlight">
                          <div class="p-2 w-100 bd-highlight">
                            <strong>{n.target}</strong>{" "}
                            <span class={`text-${n.type}`}>{n.message}</span>{" "}
                            <br />
                          </div>
                          <div class="p-2 flex-shrink-1 bd-highlight">
                            <small class="text-muted">{n.time}</small>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
