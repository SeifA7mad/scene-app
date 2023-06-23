import Link from "next/link";

import { BagBadge } from "../bag/BagBadge";
import { StoreNav } from "./StoreNav";
import { StoreProfile } from "./StoreProfile";
import { StoreSearch } from "./StoreSearch";
import { StoreSideNav } from "./StoreSideNav";

export function StoreHeading() {
  return (
    <div className='w-full navbar bg-base-300 lg:px-4'>
      {/* Navbar start */}
      <div className='navbar-start'>
        <StoreSideNav />
        <div className='flex-none hidden lg:block'>
          {/* Main navbar */}
          <StoreNav />
        </div>
      </div>

      {/* Navbar center */}
      <div className='navbar-center'>
        <Link href='/store' className='btn btn-ghost normal-case text-xl'>
          Scene
        </Link>
      </div>
      {/* Navbar end */}
      <div className='navbar-end'>
        <StoreSearch />
        <BagBadge />
        <StoreProfile />
      </div>
    </div>
  );
}
