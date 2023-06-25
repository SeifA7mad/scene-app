import { HiFilter } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { CollectionFilters } from "./CollectionFilters";
import { Props as CollectionFiltersProps } from "./CollectionFilters";

interface Props extends CollectionFiltersProps {}

const DRAWER_ID = "collection-side-filters";

export function CollectionSideFilters(props: Props) {
  return (
    <div className='drawer drawer-end'>
      <input id={DRAWER_ID} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor={DRAWER_ID}
          className='drawer-button text-neutral-content hover:text-neutral-focus cursor-pointer lg:hidden'
        >
          <span className='sr-only'>Filters</span>
          <HiFilter className='text-2xl' aria-hidden='true' />
        </label>
      </div>
      <div className='drawer-side z-10'>
        <label htmlFor={DRAWER_ID} className='drawer-overlay'></label>
        <div className='p-4 w-80 h-full bg-base-200 text-base-content overflow-y-auto flex flex-col gap-y-16'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-bold'> Filters</h2>
            <label htmlFor={DRAWER_ID} className="cursor-pointer">
              <MdOutlineClose className='text-2xl' />
            </label>
          </div>
          <CollectionFilters
            collections={props.collections}
            colors={props.colors}
          />
        </div>
      </div>
    </div>
  );
}
