import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

//Stateless Functional Component

const Pagination = props => {
  const { itemsPerPage, totItems, currentPage, onPageChange } = props; //Arguments receibed in props...

  const totPages = Math.ceil(totItems / itemsPerPage);
  const pages = _.range(1, totPages + 1);
  if (totPages === 1) return null; //if the tot of pages is equals to 1 there is no need to display a pagination component, because everything will fit in 1 page...

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => {
          return (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
