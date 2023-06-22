"use client";

import { getCartItems } from "src/lib/service";
import { useCartStore } from "src/store/cart";
import useSWR from "swr";

import Loader from "../ui/Loader";
import { CartItem } from "./CartItem";

export function CartList() {
  const { items } = useCartStore();

  const { data, isLoading, error } = useSWR(
    {
      items,
    },
    ({ items }) => getCartItems(items.map(i => i.id)),
  );

  if (isLoading) return <Loader />;

  if (error) throw error;

  // todo: handle empty cart
  if (!data?.length) {
    //todo: add ui empty component
    return <p className="m-auto text-xl text-warning-content">Cart is empty</p>;
  }

  return (
    <ul className='flex flex-col gap-y-6 w-full overflow-x-hidden overflow-y-auto h-full'>
      {data?.map(item => {
        const cartItem = items.find(i => i.id === item._id);
        return (
          <CartItem
            key={item._id}
            product={item}
            quantity={cartItem?.quantity ?? 1}
            size={cartItem?.size ?? "m"}
          />
        );
      })}
    </ul>
  );
}
