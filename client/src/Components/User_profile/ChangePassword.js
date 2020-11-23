export default function ChangePassword(props) {
  return (
    <div className="p-4">
      <h4 className="mb-4 border-bottom pb-2">
        {" "}
        <span className="py-3 bg-light">Change password</span>
      </h4>
      <form className="w-100 m-0">
        <div className="row mb-4 mt-2">
          <div className="col">
            <span>Current password</span>
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              type="password"
              value="1234567"
              disabled
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>
        <button className="review-button w-100" type="submit">
          SAVE PASSWORD
        </button>
      </form>
    </div>
  );
}
