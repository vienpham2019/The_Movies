import { useState } from "react";
function Pagination(props) {
  const pages = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const handelCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="d-flex justify-content-end text-white">
      <div
        class={`pagination-item ${currentPage === 1 ? "d-none" : ""}`}
        role="button"
        onClick={() => handelCurrentPage(currentPage - 1)}
      >
        <span class="mx-auto">&laquo;</span>
      </div>
      <div
        class={`pagination-item ${
          currentPage === 1 ? "pagination-active" : ""
        }`}
        role="button"
        onClick={() => handelCurrentPage(1)}
      >
        <span class="mx-auto">1</span>
      </div>
      <div
        class={`pagination-item dropdown ${currentPage < 4 ? "d-none" : ""}`}
      >
        <span
          class="mx-auto dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ...
        </span>
        <div
          class={`dropdown-menu p-0 ${currentPage < 4 ? "d-none" : ""}`}
          aria-labelledby="dropdownMenuButton1"
          style={{
            maxWidth: "40px",
            minWidth: "90px",
            maxHeight: "150px",
            overflowX: "hidden",
          }}
        >
          {Array.from(Array(Math.abs(currentPage - 3)), (_, i) => i + 2).map(
            (page) => (
              <p
                className="m-0 border-bottom dropdown--item pl-3"
                role="button"
                onClick={() => handelCurrentPage(page)}
              >
                {page}
              </p>
            )
          )}
        </div>
      </div>

      {Array.from(
        Array(pages - 5 > 0 ? 3 : pages - 2 <= 0 ? 0 : pages - 2),
        (_, i) =>
          currentPage < 4
            ? i + 2
            : currentPage > pages - 3
            ? pages - 3 + i
            : i + currentPage - 1
      ).map((page) => (
        <div
          class={`pagination-item active ${
            currentPage === page ? "pagination-active" : ""
          }`}
          role="button"
          onClick={() => handelCurrentPage(page)}
        >
          <span class="mx-auto">{page}</span>
        </div>
      ))}
      <div
        class={`pagination-item dropdown ${
          currentPage <= pages - 3 && pages > 5 ? "" : "d-none"
        }`}
      >
        <span
          class="mx-auto dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          id="dropdownMenuButton2"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ...
        </span>
        <div
          class={`dropdown-menu p-0 ${
            currentPage <= pages - 3 ? "" : "d-none"
          }`}
          aria-labelledby="dropdownMenuButton2"
          style={{
            maxWidth: "40px",
            minWidth: "90px",
            maxHeight: "150px",
            overflowX: "hidden",
          }}
        >
          {Array.from(
            Array(Math.abs(pages - currentPage - 2)),
            (_, i) => currentPage + 2 + i
          ).map((page) => (
            <p
              className="m-0 border-bottom dropdown--item pl-3"
              role="button"
              onClick={() => handelCurrentPage(page)}
            >
              {page}
            </p>
          ))}
        </div>
      </div>
      <div
        class={`pagination-item ${
          pages === 1
            ? "d-none"
            : currentPage === pages
            ? "pagination-active"
            : ""
        }`}
        role="button"
        onClick={() => handelCurrentPage(pages)}
      >
        <span class="mx-auto">{pages}</span>
      </div>
      <div
        class={`pagination-item ${currentPage >= pages ? "d-none" : ""}`}
        role="button"
        onClick={() => handelCurrentPage(currentPage + 1)}
      >
        <span class="mx-auto">&raquo;</span>
      </div>
    </div>
  );
}

export default Pagination;
