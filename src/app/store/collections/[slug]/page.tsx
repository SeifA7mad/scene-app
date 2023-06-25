import ntcjs from "ntcjs"
import { BsFillGridFill } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import { CollectionSort } from "src/components/collections/CollectionSort";
import { CollectionsSubList } from "src/components/collections/CollectionsSubList";
import { SFilter } from "src/components/ui/SFilter";
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

  const colors = await getColors(collection._id, collection.subCategories?.map(sub => sub._id) ?? []);

  return (
    <section className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
      <div className='flex items-baseline justify-between border-b border-base-100 pb-6 pt-24'>
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
          <button
            type='button'
            className='text-neutral-content hover:text-neutral-focus  lg:hidden'
          >
            <span className='sr-only'>Filters</span>
            <HiFilter className='text-2xl' aria-hidden='true' />
          </button>
        </div>
      </div>

      <section aria-labelledby='products-heading' className='pb-24 pt-6'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
          {/* Filters sub-categories */}
          <form className='hidden lg:block'>
            <h3 className='sr-only'>Collections</h3>
            <CollectionsSubList collections={collection.subCategories} />

            <div className="divider"></div> 

            {/* filters */}
            <div>
              <SFilter
                title='Brand'
                options={[{ label: "Nike" }, { label: "Adidas" }]}
              />
              <SFilter title='Color' options={colors.map(color => ({
                label: ntcjs.name(color)[1],
              }))} />
            </div>
          </form>

          {/* Product grid */}
          <div className='lg:col-span-3'>
            {/* Your content */}
          </div>
        </div>
      </section>
    </section>
  );
}
