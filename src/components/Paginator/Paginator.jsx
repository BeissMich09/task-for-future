import React, { useState } from "react";
import style from "./Paginator.module.css"
import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 50,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter(
          (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              className={cn(
                {
                  [style.selectedPage]: currentPage === page,
                },
                style.pageNumber
              )}
              key={page}
              onClick={(e) => {
                onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
