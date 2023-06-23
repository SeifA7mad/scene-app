"use client";

import Image from "next/image";
import Link from "next/link";
import { BagItem as BagItemType } from "src/lib/types";
import { useCartStore } from "src/store/cart";

import { SPrice } from "../ui/SPrice";
import { SProductColor } from "../ui/SProductColor";

interface Props extends BagItemType {}

export function BagItem(props: Props) {
  const { removeFromCart, changeQuantity } = useCartStore();
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeQuantity({
      id: props.product._id,
      quantity: +e.target.value,
    });
  };

  const renderQuantityOptions = () => {
    const quantity = props.product.attributes.find(
      attr => attr.size === props.size,
    )?.quantity;
    if (!quantity) return null;

    return Array.from(Array(quantity).keys()).map(i => (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  return (
    <li key={props.product._id} className='flex gap-x-4 h-32'>
      <div className='h-full w-28 flex-shrink-0 overflow-hidden rounded-md border border-base-200'>
        <Image
          src={props.product.images[0].asset.url}
          alt={props.product.slug.current}
          className='h-full w-full object-scale-down object-center'
          width={200}
          height={200}
          blurDataURL={props.product.images[0].asset.metadata.blurHash}
          placeholder={"blur"}
        />
      </div>

      <div className='flex flex-auto flex-col gap-y-4'>
        <div className='flex flex-col gap-y-1'>
          <div className='flex justify-between text-base font-medium text-neutral w-full'>
            {/* todo: change this link to navigate to product slug */}
            <h3>
              <Link href={"/store"}>{props.product.name}</Link>
            </h3>
            <SPrice price={props.product.price} />
          </div>

          <div className='text-sm text-neutral-focus'>
            <p className='flex items-center gap-x-2'>
              Color: <SProductColor color={props.product.color} />{" "}
            </p>
            <p> Size: {props.size?.toLocaleUpperCase()} </p>
          </div>
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <select
            defaultValue={props.quantity}
            onChange={handleQuantityChange}
            className='select select-bordered select-sm w-16 max-w-xs text-neutral-content !outline-none'
          >
            <option disabled>Qty</option>
            {renderQuantityOptions()}
          </select>

          <div className='flex'>
            <button
              type='button'
              className='font-medium text-primary hover:text-secondary-focus'
              onClick={() => removeFromCart(props.product._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
