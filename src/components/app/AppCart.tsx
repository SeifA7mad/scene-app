"use client";

import { ScCart } from "src/assets/ScIcons";

const DRAWER_ID = "cart-drawer";

export function AppCart() {
  // todo: access global state to show badge count
  return (
    <div className='drawer drawer-end w-auto'>
      <input id={DRAWER_ID} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        {/* Page content here */}
        <label htmlFor={DRAWER_ID} className='btn btn-ghost btn-circle '>
          <div className='indicator'>
            <ScCart />
            <span className='badge badge-sm indicator-item'>8</span>
          </div>
        </label>
      </div>
      <div className='drawer-side z-10'>
        <label htmlFor={DRAWER_ID} className='drawer-overlay'></label>

        <div className='menu p-4 w-full lg:w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <label htmlFor={DRAWER_ID} className='btn btn-ghost'>
            Close
          </label>
          <ul>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
