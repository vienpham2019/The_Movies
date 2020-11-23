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

  const stopVideo = () => {
    let iframes = [...document.getElementsByClassName("movie_trailer_iframe")];
    for (let iframe of iframes) {
      let { src } = iframe;
      iframe.src = src;
    }
  };

  return (
    <div
      className="modal fade"
      id="movieTrailerModal"
      tabindex="-1"
      aria-labelledby="movieTrailerModal"
      aria-hidden="true"
    >
      <div
        className="modal-dialog custom-scrollbar border"
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
              onClick={() => stopVideo()}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body m-0">
            <div
              id="MovieTrailerModal"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                {videos.map((v, i) => (
                  <div class={`carousel-item p-5 ${i === 0 && "active"}`}>
                    <div class="embed-responsive embed-responsive-21by9">
                      <iframe
                        class="embed-responsive-item movie_trailer_iframe"
                        src={v.videoUrl}
                        allowFullScreen
                        title={v.title}
                        videoPause
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
              <ol class="carousel-indicators">
                {videos.map((_, i) => (
                  <li
                    data-target="#MovieTrailerModal"
                    data-slide-to={i}
                    class={`${i === 0 && "active"}`}
                    onClick={() => stopVideo()}
                  ></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
