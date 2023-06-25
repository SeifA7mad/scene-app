import Link from "next/link";
import { Category } from "src/lib/types";

interface Props {
  collections: Category[];
}

export function CollectionsSubList(props: Props) {
  if (!props.collections?.length) return null;

  return (
    <ul
      role='list'
      className='space-y-4 pl-4 border-b border-base-100 pb-6 text-sm font-medium text-secondary hover:text-secondary-focus'
    >
      {props.collections.map(collection => (
        <li key={collection._id}>
          {/* todo: add link */}
          <Link href={`/store/collections/${collection.slug.current}`}>
            {collection.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
