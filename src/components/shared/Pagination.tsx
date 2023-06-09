interface Props {
  className?: string
  page: number
  onChangePage: (page: number) => void
  onNextPage: () => void
  onPreviousPage: () => void
  disableNext?: boolean
  disablePrevious?: boolean
}

export default function Pagination(props: Props) {
  return (
    <div className={`join ${props.className ?? ''}`}>
      <button
        type="button"
        className="join-item btn"
        onClick={props.onPreviousPage}
        disabled={props.disablePrevious}
      >
        «
      </button>
      <input
        type="text"
        className="join-item btn w-14"
        disabled={props.disableNext}
        value={props.page}
        min={1}
        onChange={(e) => props.onChangePage(+e.target.value)}
      />
      <button
        type="button"
        className="join-item btn"
        onClick={props.onNextPage}
        disabled={props.disableNext}
      >
        »
      </button>
    </div>
  )
}
