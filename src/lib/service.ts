import { groq } from "next-sanity";
import { cache } from "react";
import { client } from "src/sanity/lib/client";

import { Category, Product } from "./types";

export const getTobLevelCategories = cache(async () => {
  const query = groq`*[_type == 'category' && isTopLevel==true] | order(title desc)  {
    _id,
    title,
    slug,
    subCategories[]->
  }`;

  return await client.fetch<Category[]>(query);
});

export const getCategories = cache(async () => {
  const query = groq`*[_type == 'category'] | order(title asc) {
    _id,
    title,
    slug,
    description,
    image {asset->{url, metadata{blurHash}}},
  }`;

  return await client.fetch<Category[]>(query);
});

export const getBagItems = cache(async (ids: string[]) => {
  const query = groq`*[_type == 'product' && _id in $ids] {
    _id,
     slug,
     name,
     price,
     color,
     totalQuantity,
     attributes,
     images[] {asset->{url, metadata{blurHash}}},
   }`;
  
  return await client.fetch<Product[]>(query, { ids });
});
