import { GiWoodenCrate } from 'react-icons/gi'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { ORDER_STATUSES_LIST, PAYMENTMETHODS_LIST, SIZES_LIST } from 'src/lib/constants'

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
      readOnly: true,
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              type: 'reference',
              weak: true,
              to: [{ type: 'product' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'quantity',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: 'size',
              type: 'string',
              options: {
                list: SIZES_LIST,
              },
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
      readOnly: true,
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
      readOnly: true,
    }),
    defineField({
      name: 'promoCodeApplied',
      type: 'reference',
      weak: true,
      to: [{ type: 'promotion' }],
      readOnly: true,
    }),
    defineField({
      name: 'paymentMethod',
      type: 'string',
      options: {
        list: PAYMENTMETHODS_LIST,
      },
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
  ],
})
