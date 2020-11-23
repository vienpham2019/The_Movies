export default function MovieTrailerModal() {
  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/H4chVzr6RLg",
      videoName: "The Hunchback of Notre Dame",
    },
    {
      videoUrl: "https://www.youtube.com/embed/JUEofxUjbpM",
      videoName:
        "The Hunchback of Notre Dame - 1996 Teaser Trailer (UK Version)",
    },
  ];

  return (
    <div
      className="modal fade"
      id="movieTrailerModal"
      tabindex="-1"
      aria-labelledby="movieTrailerModal"
      aria-hidden="true"
    >
      <div
        className="modal-dialog custom-scrollbar"
        style={{ minWidth: "90vw" }}
      >
        <div
          className="modal-content rounded-0"
          style={{ backgroundColor: "black" }}
        >
          <div className="modal-header border-0 m-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body m-0 d-flex bd-highlight flex-nowrap overflow-hidden">
            <div className="row w-100 mx-auto">
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                <div className="row">
                  <div className="mb-md-0 p-md-4 embed-responsive embed-responsive-21by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/JUEofxUjbpM"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <strong
                    className="text-white my-4 ml-4"
                    style={{ fontSize: "1.3em" }}
                  >
                    The Hunchback of Notre Dame - 1996 Teaser Trailer (UK
                    Version)
                  </strong>
                </div>
              </div>
              <div className="col-12 col-md-3 h-100 overflow-auto custom-scrollbar">
                <nav className="mb-10 mb-md-0">
                  <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    {Array.from(Array(9)).map((_) => (
                      <div className="movie border-bottom" role="button">
                        <div className="row">
                          <div className="mx-2 col-4">
                            <img
                              src="https://img.youtube.com/vi/H4chVzr6RLg/default.jpg"
                              className="movie__poster--image"
                              width={400}
                            />
                          </div>
                          <div className="col-7 p-0 p-2">
                            <span
                              className="text-dark text-white"
                              style={{ fontSize: "0.8em" }}
                            >
                              The Hunchback of Notre Dame - 1996 Teaser Trailer
                              (UK Version)
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
