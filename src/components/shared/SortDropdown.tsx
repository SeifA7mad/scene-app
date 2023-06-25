import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export interface Props {
  options: {
    label: string;
    value: string;
  }[];
}

export function SortDropdown(props: Props) {
  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex={0}
        className='btn btn-link flex-nowrap text-sm font-medium text-neutral-content hover:text-neutral-focus p-0'
      >
        Sort <MdOutlineKeyboardArrowDown className='text-2xl' />
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
      >
        {props.options.map(option => (
          <li
            className={`px-4 py-2 text-sm font-medium text-neutral-content hover:text-neutral-focus 
            `}
            key={option.label}
          >
            {/* todo: fix this link */}
            <Link
              href={{
                query: `sort=${option.value}`,
              }}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
