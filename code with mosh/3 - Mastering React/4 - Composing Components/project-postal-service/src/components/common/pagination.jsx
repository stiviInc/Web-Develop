import React from "react";
import _ from "lodash";

//Stateless Function Component
const Pagination = props => {
  const { itemsPerPage, totItems, currentPage, onPageChange } = props; //Destructuring props object...

  const totPages = Math.ceil(totItems / itemsPerPage);
  const pages = _.range(1, totPages + 1);

  if (totPages === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className="page-link"
                href="#"
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
