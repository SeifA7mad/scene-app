import { GiWoodenCrate } from 'react-icons/gi'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { ORDER_STATUSES_LIST, PAYMENTMETHODS_LIST } from 'src/lib/constants'

export default defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  icon: GiWoodenCrate,
  fields: [
    defineField({
      name: 'customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'product' }] })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'status',
      type: 'string',
      initialValue: ORDER_STATUSES_LIST[0].value,
      options: {
        list: ORDER_STATUSES_LIST,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'total',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'promoCodeApplied',
      type: 'reference',
      to: [{ type: 'promotion' }],
    }),
    defineField({
      name: 'paymentMethod',
      type: 'string',
      options: {
        list: PAYMENTMETHODS_LIST,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
