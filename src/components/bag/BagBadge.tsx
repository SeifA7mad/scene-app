"use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useCartStore } from "src/store/cart";

export function BagBadge() {
  const { items } = useCartStore();

  return (
    <Link href='/store/bag' prefetch className='btn btn-ghost btn-circle'>
      <div className='indicator'>
        <FiShoppingBag className="text-xl" />
        <span className='badge badge-sm indicator-item'> {items.length} </span>
      </div>
    </Link>
  );
}
