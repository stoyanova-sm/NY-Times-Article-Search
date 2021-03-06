// @flow
import React from 'react';
import { history } from '../../configs/configureStore';
import './Pagination.less';

const Pagination = (props: {
  number: number, totalElements: number, request: string, sort: string
}) => {
  const { number, totalElements, request, sort } = props;
  const currentPage = number + 1;
  const elements = Math.min(2000, totalElements);
  const totalPages = Math.ceil(elements / 10);

  const setPage = (page: number) => () => {
    if (currentPage === page) return;

    let displayPage = page;

    if (page < 1) displayPage = 1;
    if (page > totalPages) displayPage = totalPages;

    if(document.body) {  //eslint-disable-line
      document.body.scrollTop = 0; //eslint-disable-line
    }
    history.push(`/search?request=${encodeURIComponent(request)}&sort=${sort}&page=${displayPage}`);
  };

  const generatePageMapping = () => {
    let startPage;

    if (totalPages <= 5) {
      startPage = 1;
    } else if (currentPage <= 3) {
      startPage = 1;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
    } else {
      startPage = currentPage - 2;
    }
    return Array.from(new Array(Math.min(5, totalPages)), (key, value) => value + startPage);
  };

  const pages = generatePageMapping();

  return (
    <ul className="pagination">
      <li className="actionsWrapper">
        <ul className="paginationItems">
          <li className={`firstPage ${(currentPage === 1 || pages.length === 0) ? 'disable' : ''}`}>
            <button
              disabled={currentPage === 1}
              onClick={setPage(1)}
            >
              First
            </button>
          </li>
          <li className={`backPages ${(currentPage - 2 <= 1 || pages.length === 0) ? 'disable' : ''}`}>
            <button
              disabled={currentPage < 4}
              onClick={setPage(currentPage - 5)}
            >
              <i className="fa fa-angle-double-left" />
            </button>
          </li>
        </ul>
      </li>
      <li className="pagesWrapper">
        <ul className="paginationItems">
          {pages.map(pageNumber =>
              (<li
                key={pageNumber}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                <button onClick={setPage(pageNumber)}>{pageNumber}</button>
              </li>)
          )}
        </ul>
      </li>
      <li className="actionsWrapper">
        <ul className="paginationItems">
          <li className={`forwardPages ${(currentPage + 2 >= totalPages || pages.length === 0) ? 'disable' : ''}`}>
            <button
              disabled={currentPage > totalPages - 3}
              onClick={setPage(currentPage + 5)}
            >
              <i className="fa fa-angle-double-right" />
            </button>
          </li>
          <li className={`lastPage ${(currentPage === totalPages || pages.length === 0) ? 'disable' : ''}`}>
            <button
              disabled={currentPage === totalPages}
              onClick={setPage(totalPages)}
            >
                Last
              </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Pagination;
