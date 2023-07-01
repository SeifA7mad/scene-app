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

export const getColors = cache(async (categoryIds: string[]) => {
  const query = groq`*[_type == "product" && category._ref in $categoryIds] {
    color
  }`;

  const products = await client.fetch<Product[]>(query, { categoryIds });

  return [...new Set(products.map(item => item.color))];
});

export const getProducts = cache(
  async (
    categoryIds: string[],
    filters: {
      colors?: string[] | null;
      sizes?: string[] | null;
      sort?: string | null;
      offset: number;
      limit: number;
    },
  ) => {
    const query = groq`{
    "products": *[_type == "product" && category._ref in $categoryIds 
      && ($colors == null || color.code in $colors)
      && ($sizes == null || count((attributes[].size)[@ in $sizes]) > 0 )] [$offset...$limit] {
        _id,
        name,
        price,
        images[] {asset->{url, metadata{blurHash}}},
        color,
        attributes[],
        offer
      },
    "total": count(*[_type == "product" && category._ref in $categoryIds 
      && ($colors == null || color.code in $colors)
      && ($sizes == null || count((attributes[].size)[@ in $sizes]) > 0 )])
    }`;

    return client.fetch<{
      products: Product[];
      total: number;
    }>(query, {
      categoryIds,
      colors: filters.colors?.length ? filters.colors : null,
      sizes: filters.sizes?.length ? filters.sizes : null,
      offset: filters.offset,
      limit: filters.limit,
    });
  },
);
