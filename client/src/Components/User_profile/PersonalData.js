import { useSelector } from "react-redux";
import { useState } from "react";
export default function PersonalData(props) {
  let { user } = useSelector((state) => state.userReducer);
  const [userInfo, setUserInfo] = useState({ ...user });
  return (
    <div className="p-4">
      <h4 className="mb-4 border-bottom pb-2">
        {" "}
        <span className="py-3 bg-light">Personal data</span>
      </h4>
      <form className="w-100 p-0">
        <div className="row mb-4">
          <div className="col">
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              placeholder="First Name *"
              value={userInfo.first_name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, first_name: e.target.value })
              }
            />
          </div>
          <div className="col">
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              placeholder="Last name *"
              value={userInfo.last_name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, last_name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              placeholder="Your Email *"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
        </div>
        <span style={{ fontSize: "0.8em" }}>DATE OF BIRTH</span>
        <div className="row mb-4 mt-2">
          <div className="col">
            <input
              className="form-control form-control-sm rounded-0 new-review-input"
              type="date"
              value={userInfo.dob}
              min="1999-01-01"
              max="2030-01-01"
              onChange={(e) =>
                setUserInfo({ ...userInfo, dob: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row mt-2 py-2">
          <span className="ml-4" style={{ fontSize: "0.9em" }}>
            GENDER
          </span>
        </div>
        <div className="row px-4 pt-2 pb-4 m-0">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-0"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              checked={userInfo.genre && userInfo.genre === "Male"}
              onChange={(e) => setUserInfo({ ...userInfo, gender: "Male" })}
            />
            <label className="text-muted form-check-label" for="inlineRadio1">
              MALE
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-0"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              checked={userInfo.genre && userInfo.genre === "Female"}
              onChange={(e) => setUserInfo({ ...userInfo, gender: "Female" })}
            />
            <label className="text-muted form-check-label" for="inlineRadio2">
              FEMALE
            </label>
          </div>
        </div>
        <button className="review-button w-100" type="submit">
          SAVE CHANGE
        </button>
      </form>
    </div>
  );
}
