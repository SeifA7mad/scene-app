import ntcjs from "ntcjs";
import { SIZES_LIST } from "src/lib/constants";
import { Category } from "src/lib/types";

import { SFilter } from "../ui/SFilter";
import { CollectionsSubList } from "./CollectionsSubList";

export interface Props {
  className?: string;
  collections: Category[];
  colors: string[];
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
          options={props.colors.map(color => ({
            label: ntcjs.name(color)[1],
            value: color,
          }))}
        />
        <SFilter
          title='Size'
          options={SIZES_LIST.map(size => ({
            label: size.title,
            value: size.value as string,
          }))}
        />
      </div>
    </form>
  );
}
