"use client";

import { Product } from "src/lib/types";
import { useCartStore } from "src/store/cart";

import { SEmpty } from "../ui/SEmpty";
import { BagItem } from "./BagItem";
import { BagItemSkelton } from "./BagItemSkelton";

interface Props {
  data?: Product[];
  isLoading?: boolean;
}

export function BagList(props: Props) {
  const { items } = useCartStore();

  // handle skelton loading
  if (props.isLoading) {
    return (
      <ul className='flex flex-col gap-y-6 w-full overflow-x-hidden overflow-y-auto h-full'>
        {[...Array(5)].map((_, i) => (
          <BagItemSkelton key={i} />
        ))}
      </ul>
    )
  }

  // handle empty cart
  if (!props.data?.length) {
    return <SEmpty label="Your bag is empty" />
  }

  return (
    <ul className='flex flex-col gap-y-6 w-full overflow-x-hidden overflow-y-auto h-full'>
      {props.data?.map(item => {
        const bagItem = items.find(i => i.id === item._id);
        return (
          <BagItem
            key={item._id}
            product={item}
            quantity={bagItem?.quantity ?? 1}
            size={bagItem?.size ?? "m"}
          />
        );
      })}
    </ul>
  );
}
