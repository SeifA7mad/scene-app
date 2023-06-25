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

export const getCategory = cache(async (slug: string) => {
  const query = groq`*[_type == 'category' &&  slug.current == $slug] | order(title asc)[0] {
    _id,
    title,
    slug,
    subCategories[]->
  }`;

  return await client.fetch<Category>(query, { slug });
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

export const getColors = cache(async (categoryId: string, subCategoriesIds: string[]) => {
  const query = groq`*[_type == "product" && category._ref == $categoryId || category._ref in $subCategoriesIds] {
    color
  }`;

  const products = await client.fetch<Product[]>(query, { categoryId, subCategoriesIds });

  return [...new Set(products.map((item) => item.color))];
});
