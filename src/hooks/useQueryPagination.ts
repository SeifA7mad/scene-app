import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface props {
  total?: number;
}

export const LIMIT = 10;

export const useQueryPagination = (props: props = {}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? LIMIT);

  const buildSearchQuery = (page: number) => {
    const search = new URLSearchParams(searchParams.toString());
    search.set("page", String(page));
    return search.toString();
  };

  const nextPage = () => {
    router.push(`${pathname}?${buildSearchQuery(page + 1)}` as any);
  };
  const prevPage = () => {
    if (page === 1) return page;
    router.push(`${pathname}?${buildSearchQuery(page - 1)}` as any);
  };

  const goToPage = (page: number) => {
    router.push(`${pathname}?${buildSearchQuery(page)}` as any);
  };

  return {
    limit: limit,
    page,
    nextPage,
    prevPage,
    goToPage,
    numberOfPages: props.total ? Math.ceil(props.total / limit) : -1,
    offset: (page - 1) * limit,
  };
};
