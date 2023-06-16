import Link from "next/link";
// icons
import { ScHamburger,} from "src/assets/ScIcons";

import { AppCart } from "./AppCart";
import { AppNav } from "./AppNav";
import { AppProfile } from "./AppProfile";
import { AppSideNav } from "./AppSideNav";

const DRAWER_ID = "side-nav-drawer";

export function AppHeading() {
  return (
    <div className='w-full navbar bg-base-300 lg:px-4'>
      {/* Navbar start */}
      <div className='navbar-start'>
        <label
          htmlFor={DRAWER_ID}
          className='flex-none lg:hidden btn btn-square btn-ghost'
        >
          <ScHamburger />
        </label>
        <div className='flex-none hidden lg:block'>
          {/* Main navbar */}
          <AppNav />
        </div>
      </div>

      {/* Navbar center */}
      <div className='navbar-center'>
        <Link href="/app" className='btn btn-ghost normal-case text-xl'>
          Scene app
        </Link>
      </div>
      {/* Navbar end */}
      <div className='navbar-end'>
        <AppSideNav drawerId={DRAWER_ID} />
        <AppCart />
        <AppProfile />
      </div>
    </div>
  );
}
