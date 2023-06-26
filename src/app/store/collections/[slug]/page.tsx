import { BsFillGridFill } from "react-icons/bs";
import { CollectionFilters } from "src/components/collections/CollectionFilters";
import { CollectionSideFilters } from "src/components/collections/CollectionSideFilters";
import { CollectionSort } from "src/components/collections/CollectionSort";
import { ProductList } from "src/components/product/ProductList";
import { getCategories, getCategory, getColors } from "src/lib/service";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map(category => ({
    slug: category.slug.current,
  }));
}

// todo: revalidate on-demand
export default async function Page(props: { params: { slug: string } }) {
  const collection = await getCategory(props.params.slug);

  const categoryIds = [
    collection._id,
    ...(collection.subCategories?.map(sub => sub._id) ?? []),
  ];

  const colors = await getColors(categoryIds);

  return (
    <section className='mx-auto w-full lg:px-8'>
      <div className='flex items-baseline justify-between border-b border-base-100 pb-6 pt-12'>
        <h1 className='text-4xl font-bold tracking-tight text-primary'>
          {collection.title}
        </h1>

        <div className='flex items-center gap-x-3'>
          {/* Sort */}
          <CollectionSort />

          <button
            type='button'
            className='text-neutral-content hover:text-neutral-focus'
          >
            <span className='sr-only'>View grid</span>
            <BsFillGridFill className='text-2xl' aria-hidden='true' />
          </button>
          <CollectionSideFilters
            collections={collection.subCategories}
            colors={colors}
          />
        </div>
      </div>

      <section aria-labelledby='products-heading' className='pb-24'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
          {/* Filters sub-categories */}
          <CollectionFilters
            collections={collection.subCategories}
            colors={colors}
            className='hidden lg:block'
          />

          {/* Product grid */}
          <div className='lg:col-span-3'>
            <ProductList categoryIds={categoryIds} />
          </div>
        </div>
      </section>
    </section>
  );
}
