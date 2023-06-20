import Image from "next/image";
import Link from "next/link";
import { AppRoutes } from "src/lib/types";

const featured: {
  name: string;
  href: AppRoutes;
  imageSrc: string;
  imageAlt: string;
}[] = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
  },
  {
    name: "Basic Tees",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "Model wearing light heather gray t-shirt.",
  },
];

export function FeaturedCollections() {
  return (
    <div className='grid grid-cols-2 gap-x-4 lg:gap-x-8'>
      {featured.map(item => (
        <div key={item.name} className='group relative text-base sm:text-sm'>
          <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              className='object-cover object-center'
              width={280}
              height={350}
            />
          </div>
          <Link
            href={item.href}
            className='mt-6 block font-medium text-neutral'
          >
            <span className='absolute inset-0 z-10' aria-hidden='true' />
            {item.name}
          </Link>
          <p aria-hidden='true' className='mt-1'>
            Shop now
          </p>
        </div>
      ))}
    </div>
  );
}
