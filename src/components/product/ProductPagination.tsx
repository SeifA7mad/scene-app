import Link from "next/link";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export function ProductPagination() {
  return (
    <nav className='flex items-center justify-between border-t border-gray-200 bg-white'>
      <div className='flex-1 w-0 -m-[1px]'>
        <Link
          href='#'
          className='inline-flex gap-x-2 pt-4 items-center border-neutral-content font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2'
        >
          <HiOutlineArrowNarrowLeft className='text-lg' />
          Previous
        </Link>
      </div>
      <div className='hidden md:flex -mt-[1px] '>
        <Link
          href='#'
          className='inline-flex gap-x-2 pt-4 px-4 items-center border-neutral-content font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2'
        >
          {" "}
          1{" "}
        </Link>
        <Link
          href='#'
          className='inline-flex gap-x-2 pt-4 px-4 items-center border-primary font-medium text-sm text-primary border-t-2'
        >
          {" "}
          2{" "}
        </Link>
      </div>
      <div className='flex flex-1 w-0 -mt-[1px] justify-end'>
        <Link
          href='#'
          className='inline-flex gap-x-2 pt-4 items-center border-neutral-content font-medium text-sm text-neutral-content hover:text-neutral hover:border-t-2'
        >
          Next
          <HiOutlineArrowNarrowRight className='text-lg' />
        </Link>
      </div>
    </nav>
  );
}
