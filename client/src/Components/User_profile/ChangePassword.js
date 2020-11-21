export default function ChangePassword(props) {
  return (
    <div>
      <h4 class="mb-4 border-bottom pb-2">
        {" "}
        <span class="py-3 bg-light">Change password</span>
      </h4>
      <form class="w-100 m-0">
        <div class="row mb-4 mt-2">
          <div class="col">
            <span>Current password</span>
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              type="password"
              value="1234567"
              disabled
            />
          </div>
        </div>
        <div class="row my-4">
          <div className="col">
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>
        <button class="review-button w-100" type="submit">
          SAVE PASSWORD
        </button>
      </form>
    </div>
  );
}
