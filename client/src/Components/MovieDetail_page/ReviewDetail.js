import { useState } from "react";

export default function ReviewDetail(props) {
  const [showText, setShowText] = useState(false);
  const { author, date, score, content } = props.review;
  return (
    <div class="review border py-4 px-2 bg-white shadow my-3">
      <div class="review-body">
        <div class="row">
          <div class="col-12 col-md-auto">
            <div class="py-5 pl-3">
              <span class="p-5 rounded-circle bg--light--gray">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>
          <div class="col-12 col-md">
            <div class="row mb-6">
              <div class="col-12">
                <div class="rating font-size-sm text-dark">
                  {Array.from(Array(10)).map((_, i) => (
                    <i
                      className={`${i + 1 <= score ? "fas" : "far"} fa-star `}
                    ></i>
                  ))}
                </div>
              </div>
              <div class="col-12 mb-3 mt-1">
                <span class="font-size-xs" style={{ fontSize: "0.9em" }}>
                  {author}, <time>{date}</time>
                </span>
              </div>
            </div>

            <p
              class={`text-gray-500 pl-3 pr-5 ${!showText && "over-flow-text"}`}
            >
              {content}
            </p>
            <p
              class="w-100 text-right px-5 text-secondary"
              onClick={() => setShowText(!showText)}
              role="button"
            >
              {content.length > 300 && (
                <strong>{showText ? "Show less" : "Read more"}</strong>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
