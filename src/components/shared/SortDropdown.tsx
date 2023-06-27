"use client";

import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useFilter } from "src/hooks/useFilter";

export interface Props {
  queryKey: string;
  options: {
    label: string;
    value: string;
  }[];
}

export function SortDropdown(props: Props) {
  const { handleFilter } = useFilter({
    queryKey: props.queryKey,
    single: true,
  });

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
            <button type='button' onClick={() => handleFilter(option.value)}>{option.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
