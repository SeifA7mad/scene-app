"use client";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { useQueryPagination } from "src/hooks/useQueryPagination";

interface Props {
  totalCount: number;
}

export function ProductPagination(props: Props) {
  const { numberOfPages, page, goToPage, nextPage, prevPage } = useQueryPagination({
    total: props.totalCount,
  });

  const pagesLimit = 10;
  const pagesStart = Math.max(1, page - Math.floor(pagesLimit / 2));

  const pages = Array.from(
    { length: Math.min(numberOfPages, pagesLimit) },
    (_, i) => (
      <button
        type="button"
        onClick={() => goToPage(pagesStart + i)}
        key={i}
        className={`inline-flex gap-x-2 pt-4 px-4 items-center border-neutral-content font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2
        ${
          page === pagesStart + i
            ? "text-primary border-t-2 border-primary "
            : ""
        }}`}
      >
        {pagesStart + i}
      </button>
    ),
  );

  return (
    <nav className='flex items-center justify-between border-t border-neutral-content bg-white'>
      <div className='flex flex-1 w-0 -mt-[1px]'>
        <button
          type="button"
          onClick={prevPage}
          disabled={page === 1}
          className='inline-flex gap-x-2 pt-4 items-center border-neutral font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2'
        >
          <HiOutlineArrowNarrowLeft className='text-lg' />
          Previous
        </button>
      </div>
      <div className='hidden md:flex -mt-[1px] '>{pages}</div>
      <div className='flex flex-1 w-0 -mt-[1px] justify-end'>
        <button
          type="button"
          disabled={page === numberOfPages}
          onClick={nextPage}
          className='inline-flex gap-x-2 pt-4 items-center border-neutral font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2'
        >
          Next
          <HiOutlineArrowNarrowRight className='text-lg' />
        </button>
      </div>
    </nav>
  );
}
