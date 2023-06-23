"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getBagItems } from "src/lib/service";
import { useCartStore } from "src/store/cart";
import useSWR from "swr";

import { BagList } from "../bag/BagList";
import { BagSummary } from "../bag/BagSummary";

const DRAWER_ID = "cart-drawer";

export function StoreSideCart() {
  const router = useRouter();
  const { items } = useCartStore();

  const close = () => {
    router.back();
  };

  const { data, isLoading, error } = useSWR(
    items?.length
      ? {
          items,
        }
      : null,
    ({ items }) => getBagItems(items.map(i => i.id)),
  );

  if (error) throw new Error();

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
          <h1 className='text-lg font-medium text-neutral'> Shopping bag </h1>
          <BagList isLoading={isLoading} data={data} />
          <BagSummary data={data} />
        </motion.div>
      </div>
    </div>
  );
}
