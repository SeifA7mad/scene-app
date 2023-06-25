import Image from "next/image";
import Link from "next/link";
import { getCategories } from "src/lib/service";

// todo: revalidate on-demand
export default async function Page() {
  const collections = await getCategories();

  return (
    <div className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-16 lg:max-w-none'>
        <h2 className='text-2xl font-bold text-gray-900'>Collections</h2>

        <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
          {collections.map(collection => (
            <div key={collection._id} className='group relative'>
              {/* todo: add fallback image */}
              <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                <Image
                  src={
                    collection.image?.asset.url ??
                    "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  }
                  alt={collection.slug.current}
                  className='h-full w-full object-cover object-center'
                  width={500}
                  height={500}
                  blurDataURL={
                    collection.image?.asset.metadata.blurHash ?? undefined
                  }
                  placeholder={collection.image ? "blur" : "empty"}
                />
              </div>
              <h3 className='mt-6 text-sm text-gray-500'>
                <Link
                  href={`/store/collections/${collection.slug.current}`}
                >
                  <span className='absolute inset-0' />
                  {collection.title}
                </Link>
              </h3>
              <p className='truncate text-base font-semibold text-gray-900'>
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
