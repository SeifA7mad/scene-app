import Link from "next/link";
// icons
import { ScCart } from "src/assets/ScIcons";

import { AppNav } from "./AppNav";
import { AppProfile } from "./AppProfile";
import { AppSearch } from "./AppSearch";
import { AppSideNav } from "./AppSideNav";

export function AppHeading() {
  return (
    <div className='w-full navbar bg-base-300 lg:px-4'>
      {/* Navbar start */}
      <div className='navbar-start'>
        <AppSideNav />
        <div className='flex-none hidden lg:block'>
          {/* Main navbar */}
          <AppNav />
        </div>
      </div>

      {/* Navbar center */}
      <div className='navbar-center'>
        <Link href='/app' className='btn btn-ghost normal-case text-xl'>
          Scene
        </Link>
      </div>
      {/* Navbar end */}
      <div className='navbar-end'>
        <AppSearch />
        <Link href='/app/cart' className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <ScCart />
            <span className='badge badge-sm indicator-item'>8</span>
          </div>
        </Link>
        <AppProfile />
      </div>
    </div>
  );
}
