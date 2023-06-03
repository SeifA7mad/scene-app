import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'address',
  type: 'object',
  fields: [
    defineField({
      name: 'location',
      type: 'reference',
      to: [{ type: 'location' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'line1',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'line2',
      type: 'string',
      validation: (rule) => rule.max(100),
    }),
  ],
})
