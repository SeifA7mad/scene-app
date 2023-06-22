import { ScHamburger } from "src/assets/ScIcons";
import { getTobLevelCategories } from "src/lib/service";

import { FeaturedCollections } from "../collections/CollectionsFeatured";
import { CollectionsList } from "../collections/CollectionsList";

const DRAWER_ID = "side-nav-drawer";

export async function AppSideNav() {
  const collections = await getTobLevelCategories();
  
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
        <div className='menu p-4 w-full lg:w-80 bg-base-200 h-full overflow-y-auto'>
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
