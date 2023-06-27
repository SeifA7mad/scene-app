import { SIZES_LIST } from "src/lib/constants";
import { Category, Product } from "src/lib/types";

import { SFilter } from "../ui/SFilter";
import { CollectionsSubList } from "./CollectionsSubList";

export interface Props {
  className?: string;
  collections: Category[];
  colors: Product['color'][];
}

export function CollectionFilters(props: Props) {
  return (
    <form className={props.className}>
      <h3 className='sr-only'>Collections</h3>
      <CollectionsSubList collections={props.collections} />

      {/* filters */}
      <div>
        <SFilter
          title='Color'
          queryKey="colors"
          options={props.colors.map(color => ({
            label: color.name,
            value: color.code,
          }))}
        />
        <SFilter
          title='Size'
          queryKey="sizes"
          options={SIZES_LIST.map(size => ({
            label: size.title,
            value: size.value as string,
          }))}
        />
      </div>
    </form>
  );
}
