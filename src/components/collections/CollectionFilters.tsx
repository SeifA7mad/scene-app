import { SIZES_LIST } from "src/lib/constants";
import { Category, Product } from "src/lib/types";

import { SFilter } from "../ui/SFilter";
import { CollectionsSubList } from "./CollectionsSubList";

export interface Props {
  className?: string;
  collections: Category[];
  colors: Product["color"][];
}

export const collectionsFilters = ["colors", "sizes"] as const;

export type collectionsFiltersType = (typeof collectionsFilters)[number];

export function CollectionFilters(props: Props) {
  const filters: {
    title: string;
    queryKey: collectionsFiltersType;
    options: { label: string; value: string }[];
  }[] = [
    {
      title: "Color",
      queryKey: "colors",
      options: props.colors.map(color => ({
        label: color.name,
        value: color.code,
      })),
    },
    {
      title: "Size",
      queryKey: "sizes",
      options: SIZES_LIST.map(size => ({
        label: size.title,
        value: size.value as string,
      })),
    },
  ];
  return (
    <form className={props.className}>
      <h3 className='sr-only'>Collections</h3>
      <CollectionsSubList collections={props.collections} />

      {/* filters */}
      <div>
        {
          filters.map(filter => (
            <SFilter
              key={filter.title}
              title={filter.title}
              queryKey={filter.queryKey}
              options={filter.options}
            />
          ))
        }
      </div>
    </form>
  );
}
