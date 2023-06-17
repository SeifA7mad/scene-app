import { groq } from "next-sanity";
import { cache } from "react";
import { client } from "src/sanity/lib/client";

import { Category } from "./types";

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
