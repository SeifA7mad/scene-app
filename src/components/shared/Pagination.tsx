export interface Props {
  page: number;
  onChangePage: (page: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onChangeLimit?: (limit: number) => void;
  disable?: boolean;
}

export default function Pagination(props: Props) {
  return (
    <div className={`flex gap-x-4`} >
      {props.onChangeLimit && (
        <select onChange={(e) => props.onChangeLimit?.(+e.target.value)} className='select select-bordered'>
          <option disabled selected>
            Rows per page
          </option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      )}

      <div className={`join`}>
        <button
          type='button'
          className='join-item btn'
          onClick={props.onPreviousPage}
          disabled={props.page === 1}
        >
          «
        </button>
        <input
          type='text'
          className='join-item btn w-14'
          disabled={props.disable}
          value={props.page}
          min={1}
          onChange={e => props.onChangePage(+e.target.value)}
        />
        <button
          type='button'
          className='join-item btn'
          onClick={props.onNextPage}
          disabled={props.disable}
        >
          »
        </button>
      </div>
    </div>
  );
}
