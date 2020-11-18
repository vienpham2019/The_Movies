import React from "react";
import { useState } from "react";

export default function MovieReviews(props) {
  const [reivewScore, setReviewScore] = useState(10);

  let { movie } = props;
  const handleSubmit = (e) => console.log(e.value);
  return (
    <section class="py-5 mt-5 mb-5 bg--light--gray text-dark">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row align-items-center justify-content-center">
              <strong style={{ fontSize: "1.3em" }}>REVIEWS</strong>
              <div class="col-12 col-md text-md-center">
                <div className="gt-stars">
                  {Array.from(Array(10)).map((_, i) => (
                    <i
                      className={`${
                        i + 1 <= movie.reivewScore ? "fas" : "far"
                      } fa-star`}
                    ></i>
                  ))}
                  <span className="ml-2">
                    <strong>Reviews({movie.movieReviews.length})</strong>
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-auto">
                <div
                  class="rounded-0 review-button p-2"
                  data-toggle="collapse"
                  href="#reviewForm"
                  aria-expanded="true"
                  role="buttom"
                >
                  Write Review
                </div>
              </div>
            </div>

            {/* new revew */}
            <div class="collapse show" id="reviewForm">
              <hr class="my-8" />

              {/* new review form */}
              <form onSubmit={handleSubmit}>
                <div class="row justify-content-between">
                  <div class="col-12 mb-6 text-center">
                    <p class="m-0 font-size-xs">Score:</p>
                    <div class="col-12 col-md text-md-center mb-4">
                      <div className="gt-stars">
                        {Array.from(Array(10)).map((_, i) => (
                          <i
                            className={`${
                              i + 1 <= reivewScore ? "fas" : "far"
                            } fa-star`}
                            style={{ fontSize: "1.4em" }}
                            role="button"
                            onClick={() => setReviewScore(i + 1)}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-5 p-0 mb-3">
                    <div class="new-review-effect">
                      <input
                        class="form-control form-control-sm rounded-0 new-review-input is-invalid"
                        placeholder="Your Name *"
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <span class="gt-focus-border" color-data="black">
                        {" "}
                        <i></i>{" "}
                      </span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 p-0 mb-3">
                    <div class="new-review-effect">
                      <input
                        class="form-control form-control-sm rounded-0 new-review-input"
                        placeholder="Your Email *"
                      />
                      <span class="gt-focus-border">
                        {" "}
                        <i></i>{" "}
                      </span>
                    </div>
                  </div>

                  <div class="col-12 p-0 mb-3">
                    <div class="new-review-effect">
                      <input
                        class="form-control form-control-sm rounded-0 new-review-input"
                        placeholder="Review Title *"
                      />
                      <span class="gt-focus-border">
                        {" "}
                        <i></i>{" "}
                      </span>
                    </div>
                  </div>
                  <div class="col-12 p-0 mb-3">
                    <div class="new-review-effect">
                      <textarea
                        class="form-control form-control-sm rounded-0 new-review-input"
                        rows="5"
                        placeholder="Review *"
                      ></textarea>
                      <span class="gt-focus-border">
                        {" "}
                        <i></i>{" "}
                      </span>
                    </div>
                  </div>
                  <div class="col-12 text-center p-0">
                    <button class="review-button w-100" type="submit">
                      Post Review
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* review */}
            <div class="mt-8"></div>

            {/* pagination */}
          </div>
        </div>
      </div>
    </section>
  );
}
