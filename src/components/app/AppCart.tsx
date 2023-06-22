"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { CartList } from "../cart/CartList";
import { CartSummary } from "../cart/CartSummary";

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
          className='flex flex-col justify-between p-4 w-full lg:w-[35rem] h-full bg-base-200 text-base-content gap-y-4'
        >
          {/* Sidebar content here */}
          <h1 className="text-lg font-medium text-neutral"> Shopping cart </h1>
          <CartList />
          <CartSummary />
        </motion.div>
      </div>
    </div>
  );
}
