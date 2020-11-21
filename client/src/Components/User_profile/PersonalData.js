export default function PersonalData(props) {
  return (
    <div>
      <h4 class="mb-4 border-bottom pb-2">
        {" "}
        <span class="py-3 bg-light">Personal data</span>
      </h4>
      <form class="w-100 p-0">
        <div class="row mb-4">
          <div className="col">
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              placeholder="First Name *"
            />
          </div>
          <div className="col">
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              placeholder="Last name *"
            />
          </div>
        </div>
        <div class="row my-4">
          <div className="col">
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              placeholder="Your Email *"
            />
          </div>
        </div>
        <span style={{ fontSize: "0.8em" }}>DATE OF BIRTH</span>
        <div class="row mb-4 mt-2">
          <div className="col">
            <input
              class="form-control form-control-sm rounded-0 new-review-input"
              type="date"
              value="11/20/2020"
              min="1999-01-01"
              max="2030-01-01"
            />
          </div>
        </div>
        <div className="row mt-2 py-2">
          <span className="ml-4" style={{ fontSize: "0.9em" }}>
            GENDER
          </span>
        </div>
        <div className="row px-4 pt-2 pb-4 m-0">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input m-0"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="text-muted form-check-label" for="inlineRadio1">
              MALE
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input m-0"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="text-muted form-check-label" for="inlineRadio2">
              FEMALE
            </label>
          </div>
        </div>
        <button class="review-button w-100" type="submit">
          SAVE CHANGE
        </button>
      </form>
    </div>
  );
}
