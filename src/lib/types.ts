import Link from "next/link";
import React from "react";

import {
  CITIES_LIST,
  ORDER_STATUSES_LIST,
  PAYMENTMETHODS_LIST,
  SEASONS_LIST,
  SIZES_LIST,
} from "./constants";

export interface SanitySlug {
  current: string;
  _type: "slug";
}

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface SanityRef {
  _ref: string;
  _type: string;
}

export interface SanityImage {
  asset: {
    url: string;
    metadata: {
      blurHash: string;
    };
  };
}

export interface Location extends SanityDocument {
  _type: "location";
  name: string;
  city: (typeof CITIES_LIST)[number]["value"];
  shippingCost: number;
}

export interface Address {
  location: Location;
  line1: string;
  line2?: string;
}

export interface Category extends SanityDocument {
  _type: "category";
  title: string;
  slug: SanitySlug;
  description: string;
  isTopLevel: boolean;
  subCategories: Category[];
  image?: SanityImage;
}

export interface Product extends SanityDocument {
  _type: "product";
  name: string;
  slug: SanitySlug;
  sku: string;
  hidden: boolean;
  description: any[];
  season: (typeof SEASONS_LIST)[number]["value"];
  merchantName?: string;
  category: Category;
  keywords: string[];
  price: number;
  soldQuantity: number;
  color: string;
  totalQuantity: number;
  images: SanityImage[];
  attributes: {
    quantity: number;
    size: (typeof SIZES_LIST)[number]["value"];
    subscribers: Customer[];
  }[];
  offer?: {
    percentage: number;
    expiryDate: Date;
  };
  sizeChart: any;
  subscribers: Customer[];
  reviews: {
    rating: number;
    comment: string;
    upVotes: number;
    downVotes: number;
    customer: Customer;
  }[];
  questions: {
    question: string;
    answers: string[];
  }[];
}

export interface Customer extends SanityDocument {
  _type: "customer";
  firstName: string;
  lastName: string;
  phone: string;
  address: Address[];
  account: {
    email: string;
    password?: string;
  };
  wishlist: Product[];
}

export interface Promotion extends SanityDocument {
  _type: "promotion";
  percentage: number;
  code: string;
  maxRedemptions: number;
  redeemed: number;
  customers?: Customer[];
}

export interface Order extends SanityDocument {
  _type: "order";
  customer: Customer;
  products: {
    product: Product;
    quantity: number;
    size: (typeof SIZES_LIST)[number]["value"];
  }[];
  address: Address;
  status: (typeof ORDER_STATUSES_LIST)[number]["value"];
  total: number;
  paymentMethod: (typeof PAYMENTMETHODS_LIST)[number]["value"];
  promoCodeApplied?: Promotion;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: Product["attributes"][number]["size"];
}

export type AppRoutes = React.ComponentProps<typeof Link>["href"];
