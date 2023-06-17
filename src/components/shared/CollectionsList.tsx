import Link from "next/link";
import { Category } from "src/lib/types";

interface Props {
  collections: Category[];
}

export function CollectionsList(props: Props) {
  return props.collections.map(collection => (
    <div key={collection._id}>
      <p id={`${collection.title}-heading`} className='font-medium text-neutral'>
        {collection.title}
      </p>
      <ul
        role='list'
        aria-labelledby={`${collection.title}-heading`}
        className='mt-6 flex flex-col space-y-6 lg:mt-4 lg:space-y-4'
      >
        {collection.subCategories.map(item => (
          <li key={item.title} className='flow-root lg:flex'>
            <Link
              href={`/app/collections/${item.slug.current}`}
              className='-m-2 p-2 truncate text-neutral-content hover:text-neutral-focus'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
}
