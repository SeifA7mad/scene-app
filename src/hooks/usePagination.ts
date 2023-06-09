import { useState } from 'react'

interface props {
  initialPage?: number
  total?: number
}

const LIMIT = 10

export const usePagination = ({ initialPage, total }: props = {}) => {
  const [page, setPage] = useState(initialPage ?? 1)

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () =>
    setPage((prev) => {
      if (prev === 1) return prev
      return prev - 1
    })
  const goToPage = (page: number) => {
    if (isNaN(page)) return
    setPage(page)
  }


  return {
    limit: LIMIT,
    page,
    nextPage,
    prevPage,
    goToPage,
    numberOfPages: total ? Math.ceil(total / LIMIT) : -1,
    offset: (page - 1) * LIMIT,
  }
}
