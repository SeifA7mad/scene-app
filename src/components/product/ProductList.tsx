"use client";

import { useSearchParams } from "next/navigation";
import { getProducts } from "src/lib/service";
import useSWR from "swr";

import { SEmpty } from "../ui/SEmpty";
import { ProductCard } from "./ProductCard";
import { ProductCardSkelton } from "./ProductCardSkelton";

interface Props {
  categoryIds: string[];
}

export function ProductList(props: Props) {
  // todo: handle sort filter
  // todo: add infinite pagination
  const searchParams = useSearchParams();


  const { data, isLoading, error } = useSWR(
    {
      name: "products",
      categoryIds: props.categoryIds,
      filters: searchParams
    },
    ({ categoryIds, filters }) => getProducts(categoryIds, {
      colors: filters.getAll('colors'),
      sizes: filters.getAll('sizes')
    }),
  );

  if (error) throw new Error();

  if (isLoading) {
    return (
      <div className='mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkelton key={i} />
        ))}
      </div>
    );
  }

  if (!data?.length) return <SEmpty label='No products found' />;

  return (
    <div className='mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4'>
      {data.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
