import { MdOutlineMoneyOff } from 'react-icons/md'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  icon: MdOutlineMoneyOff,
  fields: [
    defineField({
      name: 'percentage',
      type: 'number',
      validation: (rule) =>
        rule.required().integer().greaterThan(0).lessThan(101),
    }),
    defineField({
      name: 'code',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customers',
      title: 'Allowed customers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'customer' }],
        }),
      ],
    }),
  ],
})
