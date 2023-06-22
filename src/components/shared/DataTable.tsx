import { MdFilterListAlt } from "react-icons/md";

import Loader from "../ui/Loader";
import Pagination, { Props as PaginationProps } from "./Pagination";

export type DataColumns<T> = {
  [K in keyof T]: {
    key: string;
    title: string;
    dataIndex: K;
    render?: (item: T[K], data: T) => JSX.Element | string | undefined;
    filterOptions?: { value: string | null; title: string }[];
    onFilter?: (value: string | null, key: string) => void;
  };
}[keyof T];

interface Props<T> {
  columns: DataColumns<T>[];
  data: T[] | undefined;
  isLoading?: boolean;
  error?: Error;
  pagination?: PaginationProps;
}

export default function DataTable<T extends unknown>(props: Props<T>) {
  const renderHead = () => {
    return (
      <thead>
        <tr>
          {props.columns.map(column => (
            <th key={column.key}>
              <div className='flex items-center gap-x-2'>
                <span className='text-sm font-semibold'>{column.title}</span>
                {column.filterOptions && (
                  <div className='dropdown dropdown-right'>
                    <label tabIndex={0} className='cursor-pointer'>
                      <MdFilterListAlt />
                    </label>
                    <ul
                      tabIndex={0}
                      className='p-2 mt-2 shadow menu dropdown-content bg-base-100 rounded-box z-10'
                    >
                      <li key={"All"}>
                        <a onClick={() => column.onFilter?.(null, column.key)}>
                          All
                        </a>
                      </li>
                      {column.filterOptions.map(option => (
                        <li key={option.value}>
                          <a
                            onClick={() =>
                              column.onFilter?.(option.value, column.key)
                            }
                          >
                            {option.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {props.data?.map((item, index) => (
          <tr key={index}>
            {props.columns.map(column => (
              <td key={column.key}>
                {column.render ? (
                  column.render(item[column.dataIndex], item)
                ) : (
                  <> {item[column.dataIndex]} </>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  if (!!props.isLoading) return <Loader />;

  return (
    <div className='overflow-x-auto h-full flex flex-col justify-between'>
      <table className='table table-lg'>
        {/* head */}
        {renderHead()}
        {/* body */}
        {renderBody()}
      </table>
      <div className='self-end m-4'>
        {props.pagination && <Pagination {...props.pagination} />}
      </div>
    </div>
  );
}
