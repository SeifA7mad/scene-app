"use client";

import { BagList } from "src/components/bag/BagList";
import { BagSummary } from "src/components/bag/BagSummary";
import { getBagItems } from "src/lib/service";
import { useCartStore } from "src/store/cart";
import useSWR from "swr";

export default function Page() {
  const { items } = useCartStore();

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
    <div className='w-full md:w-1/2 h-full flex flex-col justify-between m-auto'>
      <h1 className='text-3xl font-bold text-neutral py-4'> Shopping bag </h1>
      <div className='h-96 grid place-items-center'>
        <BagList isLoading={isLoading} data={data} />
      </div>
      <BagSummary navigateToHome data={data} />
    </div>
  );
}
