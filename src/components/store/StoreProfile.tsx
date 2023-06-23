import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

export function StoreProfile() {
  // todo: access global state & hide it when not logged in
  // if (!isLoggedIn) {
  //   return null;
  // }

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <AiOutlineUser className="text-2xl" />
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
