import { MdCategory } from 'react-icons/md'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required().warning('Slug is required'),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'isTopLevel',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      type: 'string',
      description: 'description for SEO',
    }),
    defineField({
      name: 'subCategories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'category' }] })],
    }),
  ],
})
