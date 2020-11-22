import React from "react";
import { useState } from "react";
import { validateLength, validateEmail } from "../../validation";
import ReviewDetail from "./ReviewDetail";
import Pagination from ".././Pagination";
import { connect } from "react-redux";

function MovieReviews(props) {
  let { movie } = props;
  const displayReviewAmount = 5;

  const [reivewScore, setReviewScore] = useState(10);
  const [movieNewReviewErrors, setMovieNewReviewErrors] = useState({});
  const [displayReviews, setDisplayReview] = useState(
    movie.movieReviews.slice(0, displayReviewAmount)
  );
  const pages = Math.ceil(movie.movieReviews.length / displayReviewAmount);

  const handelDisplayReviews = (current_page) => {
    setDisplayReview(
      movie.movieReviews.slice(
        (current_page - 1) * displayReviewAmount,
        current_page * displayReviewAmount * 2
      )
    );
  };

  const resetReviewForm = () => {
    document.getElementById("new-review-form").reset();
    setMovieNewReviewErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let [name, email, title, content] = e.target;
    let name_error = validateLength(name.value, "Name", 3);
    let email_error = validateEmail(email.value);
    let title_error = validateLength(title.value, "Title", 3);
    let content_error = validateLength(content.value, "Content", 20);
    if (name_error || email_error || title_error || content_error) {
      setMovieNewReviewErrors({
        name_error,
        email_error,
        title_error,
        content_error,
      });
    } else {
      console.log("no error");
    }
  };
  return (
    <section class="py-5 mb-5 text-dark">
      <div class="container w-70">
        <div class="row">
          <div class="col-12">
            <div class="row align-items-center justify-content-center">
              <strong class="m-2" style={{ fontSize: "1.3em" }}>
                REVIEWS
              </strong>
              <div class=" m-2 col-12 col-md text-md-center">
                <div className="gt-stars">
                  {Array.from(Array(10)).map((_, i) => (
                    <i
                      className={`${
                        i + 1 <= movie.reviewsAvgScore ? "fas" : "far"
                      } fa-star`}
                    ></i>
                  ))}
                  <span className="ml-2">
                    <strong>Reviews({movie.movieReviews.length})</strong>
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-auto m-2">
                <div
                  class="rounded-0 review-button p-3"
                  data-toggle="collapse"
                  href="#reviewForm"
                  aria-expanded="true"
                  role="buttom"
                  onClick={() => resetReviewForm()}
                >
                  Write Review
                </div>
              </div>
            </div>

            {/* new revew */}
            <div class="collapse" id="reviewForm">
              <hr class="my-8" />

              {/* new review form */}
              <form onSubmit={handleSubmit} class="px-2" id="new-review-form">
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
                        class={`form-control form-control-sm rounded-0 new-review-input ${
                          movieNewReviewErrors.name_error && "is-invalid"
                        }`}
                        placeholder="Your Name *"
                      />
                      <span class="gt-focus-border"> </span>
                    </div>
                    {movieNewReviewErrors.name_error && (
                      <small class="error_message">
                        {movieNewReviewErrors.name_error}
                      </small>
                    )}
                  </div>

                  <div class="col-12 col-md-6 p-0 mb-3">
                    <div class="new-review-effect">
                      <input
                        class={`form-control form-control-sm rounded-0 new-review-input ${
                          movieNewReviewErrors.email_error && "is-invalid"
                        }`}
                        placeholder="Your Email *"
                      />
                      <span class="gt-focus-border"> </span>
                      {movieNewReviewErrors.email_error && (
                        <small class="error_message">
                          {movieNewReviewErrors.email_error}
                        </small>
                      )}
                    </div>
                  </div>

                  <div class="col-12 p-0 mb-3">
                    <div class="new-review-effect">
                      <input
                        class={`form-control form-control-sm rounded-0 new-review-input ${
                          movieNewReviewErrors.title_error && "is-invalid"
                        }`}
                        placeholder="Review Title *"
                      />
                      <span class="gt-focus-border"> </span>
                      {movieNewReviewErrors.title_error && (
                        <small class="error_message">
                          {movieNewReviewErrors.title_error}
                        </small>
                      )}
                    </div>
                  </div>
                  <div class="col-12 p-0 mb-3">
                    <div class="new-review-effect">
                      <textarea
                        class={`form-control form-control-sm rounded-0 new-review-input ${
                          movieNewReviewErrors.content_error && "is-invalid"
                        }`}
                        rows="5"
                        placeholder="Review Content *"
                      ></textarea>
                      <span class="gt-focus-border"> </span>
                      {movieNewReviewErrors.content_error && (
                        <small class="error_message">
                          {movieNewReviewErrors.content_error}
                        </small>
                      )}
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
            <div class="mt-5">
              {displayReviews.map((review) => (
                <ReviewDetail review={review} />
              ))}
            </div>

            {/* pagination */}
            {pages > 1 && (
              <div class="mt-5 border-top pt-2">
                <Pagination
                  pages={pages}
                  handleDisplay={handelDisplayReviews}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieInfoReducer.movie,
});

export default connect(mapStateToProps)(MovieReviews);
