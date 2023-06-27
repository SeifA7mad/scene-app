import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  queryKey: string;
  single?: boolean;
}

export function useFilter(props: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const buildSearchQuery = (value: string, isNew?: boolean) => {
    const search = new URLSearchParams(searchParams.toString());

    if (props.single) {
      search.set(props.queryKey, value);
      return search.toString();
    }

    const currentValues = searchParams.getAll(props.queryKey);

    const newValues = new Set([...currentValues, value]);

    if (!isNew) {
      newValues.delete(value);
    }

    search.delete(props.queryKey);

    newValues.forEach(v => {
      search.append(props.queryKey, v);
    });

    return search.toString();
  };

  const handleFilter = (value: string, checked?: boolean) => {
    const search = buildSearchQuery(value, checked);

    router.push(`${pathname}?${search}` as any);
  };

  return {
    handleFilter,
    searchParams
  };
}
