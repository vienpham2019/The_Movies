import { useState } from "react";
function Pagination(props) {
  const pages = 90;
  const [currentPage, setCurrentPage] = useState(1);
  const [beforeCurrent, setBeforeCurrent] = useState(1);
  const [afterCurrent, setAfterCurrent] = useState(4);

  const handelCurrentPage = (page) => {
    setCurrentPage(page);
    let b_c = page - 1 > 0 && page <= pages - 2 ? page - 1 : pages - 3;
    setBeforeCurrent(b_c);
    let a_c = page + 1 < pages && page >= 3 ? page + 1 : 4;
    setAfterCurrent(a_c);
  };

  return (
    <div className="d-flex justify-content-end text-white">
      <div
        className={`pagination-item ${currentPage === 1 ? "d-none" : ""}`}
        role="button"
        onClick={() => handelCurrentPage(currentPage - 1)}
      >
        <span className="mx-auto">&laquo;</span>
      </div>
      <div
        className={`pagination-item ${
          currentPage === 1 ? "pagination-active" : ""
        }`}
        role="button"
        onClick={() => handelCurrentPage(1)}
      >
        <span className="mx-auto">1</span>
      </div>
      <div
        className={`pagination-item dropdown ${
          currentPage < 4 || pages < 4 ? "d-none" : ""
        }`}
      >
        <span
          className="mx-auto dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ...
        </span>
        <div
          className={`dropdown-menu p-0 rounded-0 ${
            currentPage < 4 ? "d-none" : ""
          }`}
          aria-labelledby="dropdownMenuButton1"
          style={{
            maxWidth: "40px",
            minWidth: "90px",
            maxHeight: "150px",
            overflowX: "hidden",
          }}
        >
          {Array.from(Array(Math.abs(beforeCurrent - 2)), (_, i) => i + 2).map(
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
          className={`pagination-item active ${
            currentPage === page ? "pagination-active" : ""
          }`}
          role="button"
          onClick={() => handelCurrentPage(page)}
        >
          <span className="mx-auto">{page}</span>
        </div>
      ))}
      <div
        className={`pagination-item dropdown ${
          currentPage <= pages - 3 && pages > 5 ? "" : "d-none"
        }`}
      >
        <span
          className="mx-auto dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          id="dropdownMenuButton2"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ...
        </span>
        <div
          className={`dropdown-menu p-0 rounded-0${
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
            Array(Math.abs(pages - afterCurrent - 1)),
            (_, i) => afterCurrent + i + 1
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
        className={`pagination-item ${
          pages === 1
            ? "d-none"
            : currentPage === pages
            ? "pagination-active"
            : ""
        }`}
        role="button"
        onClick={() => handelCurrentPage(pages)}
      >
        <span className="mx-auto">{pages}</span>
      </div>
      <div
        className={`pagination-item ${currentPage >= pages ? "d-none" : ""}`}
        role="button"
        onClick={() => handelCurrentPage(currentPage + 1)}
      >
        <span className="mx-auto">&raquo;</span>
      </div>
    </div>
  );
}

export default Pagination;
