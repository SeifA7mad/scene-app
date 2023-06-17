import { groq } from "next-sanity";
import { cache } from "react";
import { client } from "src/sanity/lib/client";

import { Category } from "./types";

export const getCategories = cache(async () => {
  const query = groq`*[_type == 'category' && isTopLevel==true] | order(title desc)  {
    ...,
    subCategories[]->
  }`;

  return await client.fetch<Category[]>(query);
});
