"use client";

import { useSearchParams } from "next/navigation";
import { LIMIT } from "src/hooks/useQueryPagination";
import { getProducts } from "src/lib/service";
import useSWR from "swr";

import { collectionsFiltersType } from "../collections/CollectionFilters";
import { SEmpty } from "../ui/SEmpty";
import { ProductCard } from "./ProductCard";
import { ProductCardSkelton } from "./ProductCardSkelton";
import { ProductPagination } from "./ProductPagination";

interface Props {
  categoryIds: string[];
}

export function ProductList(props: Props) {
  // todo: handle sort filter
  // todo: add infinite pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? LIMIT);

  const { data, isLoading, error } = useSWR(
    {
      name: "products",
      categoryIds: props.categoryIds,
      filters: searchParams,
      page,
      limit,
    },
    ({ categoryIds, filters }) =>
      getProducts(categoryIds, {
        colors: filters.getAll("colors" as collectionsFiltersType),
        sizes: filters.getAll("sizes" as collectionsFiltersType),
        offset: (page - 1) * limit,
        limit,
      }),
  );

  if (error) throw new Error();

  if (isLoading) {
    return (
      <div className='mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4'>
        {Array.from({ length: 3 }).map((_, i) => (
          <ProductCardSkelton key={i} />
        ))}
      </div>
    );
  }

  if (!data?.total) return <SEmpty label='No products found' />;

  return (
    <section className="flex flex-col gap-y-10">
      <div className='mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4'>
        {data.products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ProductPagination totalCount={data.total} />
    </section>
  );
}
