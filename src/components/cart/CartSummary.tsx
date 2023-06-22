'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { getCartItems } from "src/lib/service";
import { useCartStore } from "src/store/cart";
import useSWR from "swr";

import { SPrice } from "../ui/SPrice";

export function CartSummary() {
  const { items } = useCartStore();
  const router = useRouter();

  const { data } = useSWR(
    {
      items,
    },
    ({ items }) => getCartItems(items.map(i => i.id)),
  );

  const total = useMemo(
    () =>
      data?.reduce((acc, item) => {
        const cartItem = items.find(i => i.id === item._id);
        return acc + item.price * (cartItem?.quantity ?? 1);
      }, 0),
    [data, items],
  );

  return (
    <div className='border-t border-base-100 px-4 py-6 sm:px-6'>
      <div className='flex justify-between text-base font-medium text-neutral'>
        <p>Subtotal</p>
        <p><SPrice price={total ?? 0} /></p>
      </div>
      <p className='mt-0.5 text-sm text-neutral-content'>
        Shipping and taxes calculated at checkout.
      </p>
      <div className='mt-6'>
        {/* todo: change link */}
        <Link
          href='#'
          className='flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-base-100 shadow-sm hover:bg-primary-focus'
        >
          Checkout
        </Link>
      </div>
      <div className='mt-6 flex justify-center text-center text-sm text-neutral-content'>
        <p>
          or{" "}
          <button
            onClick={() => router.back()}
            type='button'
            className='font-medium text-primary hover:text-primary-focus'
          >
            Continue Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
}
