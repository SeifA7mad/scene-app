import { ScHamburger } from "src/assets/ScIcons";
import { getCategories } from "src/lib/service";

import { CollectionsList } from "../shared/CollectionsList";
import { FeaturedCollections } from "../shared/FeaturedCollections";

const DRAWER_ID = "side-nav-drawer";

export async function AppSideNav() {
  const collections = await getCategories();
  
  return (
    <div className='drawer w-auto'>
      <input id={DRAWER_ID} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label
          htmlFor={DRAWER_ID}
          className='flex-none lg:hidden btn btn-square btn-ghost'
        >
          <ScHamburger />
        </label>
      </div>
      <div className='drawer-side z-10'>
        <label htmlFor={DRAWER_ID} className='drawer-overlay'></label>
        <div className='menu p-4 w-full lg:w-80 bg-base-200 h-full'>
          {/* Sidebar content here */}
          <div className='space-y-10 pb-8'>
            <label htmlFor={DRAWER_ID} className='btn btn-ghost w-full'>
              Close
            </label>
            <FeaturedCollections />
            <CollectionsList collections={collections} />
          </div>
        </div>
      </div>
    </div>
  );
}
