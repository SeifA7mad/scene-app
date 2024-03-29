import { MdPermIdentity } from 'react-icons/md'
import { defineArrayMember,defineField, defineType } from 'sanity'

export default defineType({
  name: 'customer',
  type: 'document',
  title: 'Customer',
  icon: MdPermIdentity,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(50),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(50),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      validation: (rule) => rule.required().length(11),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [defineArrayMember({ type: 'address'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'account',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          validation: (rule) => rule.required().email(),
        },
        {
          name: 'password',
          type: 'string',
          validation: (rule) => rule.min(8).max(50),
        },
      ],
    }),
    defineField({
      name: 'wishlist',
      type: 'array',
      initialValue: [],
      hidden: true,
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'product' }] })],
    })
  ],
})
