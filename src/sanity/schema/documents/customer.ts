import { defineType } from 'sanity'

export default defineType({
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
  ],
})
