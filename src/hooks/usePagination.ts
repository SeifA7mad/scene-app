import { useState } from "react";

interface props {
  initialPage?: number;
  total?: number;
  limit?: number;
}

export const usePagination = (props: props = {}) => {
  const [page, setPage] = useState(props.initialPage ?? 1);
  const [limit, setLimit] = useState(props.limit ?? 10);

  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () =>
    setPage(prev => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  const goToPage = (page: number) => {
    if (isNaN(page)) return;
    setPage(page);
  };

  const changeLimit = (limit: number) => {
    if (isNaN(limit)) return;
    setLimit(limit);
  };

  const reset = () => {
    setPage(1);
    setLimit(props.limit ?? 10);
  };

  return {
    limit: limit,
    page,
    nextPage,
    prevPage,
    goToPage,
    reset,
    changeLimit,
    numberOfPages: props.total ? Math.ceil(props.total / limit) : -1,
    offset: (page - 1) * limit,
  };
};
