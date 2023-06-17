"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DRAWER_ID = "cart-drawer";

export function AppCart() {
  const router = useRouter();

  const close = () => {
    router.back();
  };
  // todo: access global state to get cart items
  return (
    <div className='drawer drawer-end'>
      <input
        id={DRAWER_ID}
        defaultChecked
        disabled
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-side z-10'>
        <label
          onClick={close}
          htmlFor={DRAWER_ID}
          className='drawer-overlay'
        ></label>

        <motion.div
          initial={{ translateX: "100%" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.05 }}
          className='menu p-4 w-full lg:w-80 h-full bg-base-200 text-base-content'
        >
          {/* Sidebar content here */}
          <label onClick={close} htmlFor={DRAWER_ID} className='btn btn-ghost'>
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
        </motion.div>
      </div>
    </div>
  );
}
