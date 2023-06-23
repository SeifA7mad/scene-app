"use client";

import Image from "next/image";
import Link from "next/link";


export function StoreProfile() {
  // todo: access global state & hide it when not logged in
  // if (!isLoggedIn) {
  //   return null;
  // }

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <Image
            alt='avatar'
            width={20}
            height={20}
            src='/images/stock/photo-1534528741775-53994a69daeb.jpg'
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <Link href='/store'>Profile</Link>
        </li>
        <li>
          <Link href='/store'>Logout</Link>
        </li>
      </ul>
    </div>
  );
}
