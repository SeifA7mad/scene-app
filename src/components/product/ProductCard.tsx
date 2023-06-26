import Image from "next/image";
import Link from "next/link";
import { Product } from "src/lib/types";

import { SPrice } from "../ui/SPrice";
import { SProductColor } from "../ui/SProductColor";

interface Props {
  product: Product;
}

export function ProductCard(props: Props) {
  // todo: change image on hover
  return (
    <div key={props.product._id} className='group relative'>
      <div className='aspect-h-2 aspect-w-1 w-full overflow-hidden bg-base-200 lg:aspect-none group-hover:opacity-75 lg:h-[30rem] 2xl:h-[40rem] rounded-lg'>
        <Image
          src={props.product.images[0].asset.url}
          alt={props.product.name}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={400}
          height={680}
          blurDataURL={props.product.images[0].asset.metadata.blurHash}
          placeholder='blur'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-neutral hover:text-neutral-focus'>
            {/* todo: fix this link */}
            <Link href={"/store"}>
              <span aria-hidden='true' className='absolute inset-0' />
              {props.product.name}
            </Link>
          </h3>
          <div className='flex items-center gap-x-2 mt-1'>
            <p className='text-sm text-neutral-content'>
              {props.product.color.name}
            </p>
            <SProductColor color={props.product.color.code} />
          </div>
        </div>
        <div>
          <SPrice
            offer={props.product.offer}
            className='text-sm font-medium text-neutral'
            price={props.product.price}
          />
        </div>
      </div>
    </div>
  );
}
