import { MdShoppingBasket } from 'react-icons/md'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { SIZES_LIST } from 'src/lib/constants'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: MdShoppingBasket,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hidden',
      title: 'Hide?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      description: 'keywords for SEO',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required().unique().min(1).max(5),
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required().greaterThan(0),
    }),
    defineField({
      name: 'color',
      type: 'string',
      description: 'hex color code',
      validation: (rule) =>
        rule
          .required()
          .regex(new RegExp('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'))
          .error('must be hex color code'),
    }),
    defineField({
      name: 'totalQuantity',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required().greaterThan(-1),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'attributes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'quantity',
              type: 'number',
              initialValue: 1,
              validation: (rule) =>
                rule
                  .required()
                  .greaterThan(-1)
                  .custom((quantity, ctx) => {
                    const doc = ctx.document as unknown as {
                      attributes: { quantity: number }[]
                      totalQuantity: number
                    }

                    // if current quantity is greater then total quantity
                    // then return error
                    if (!quantity || quantity > doc.totalQuantity) {
                      return {
                        message: 'must not be greater then total quality',
                      }
                    }

                    // get the total quantity of all attributes
                    const totalAttributesQuantity = (<{ quantity: number }[]>(
                      doc.attributes
                    )).reduce(
                      (accumulator, currentValue) =>
                        currentValue.quantity + accumulator,
                      0
                    )

                    // if total quantity of all attributes is greater then total quantity
                    // then return error
                    if (totalAttributesQuantity > doc.totalQuantity) {
                      return {
                        message: 'quantity exceeded',
                      }
                    }

                    return true
                  }),
            }),
            defineField({
              name: 'size',
              type: 'string',
              options: {
                list: SIZES_LIST,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subscribers',
              type: 'array',
              of: [{ type: 'reference', to: { type: 'customer' } }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'offer',
      type: 'object',
      fields: [
        defineField({
          name: 'percentage',
          type: 'number',
          validation: (rule) =>
            rule.required().integer().greaterThan(0).lessThan(101),
        }),
        defineField({
          name: 'expiryDate',
          type: 'datetime',
          options: {
            dateFormat: 'yyyy-MM-DD',
          },
          validation: (rule) =>
            rule
              .required()
              .min(new Date().toISOString())
              .error("Can't assign older date"),
        }),
      ],
    }),
    defineField({
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table',
    }),
    defineField({
      name: 'subscribers',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'customer' } }],
    }),
    defineField({
      name: 'reviews',
      type: 'array',
      readOnly: true,
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'rating',
              type: 'number',
              validation: (rule) =>
                rule.required().integer().greaterThan(0).lessThan(6),
            }),
            defineField({
              name: 'comment',
              type: 'string',
              validation: (rule) => rule.required().max(1000),
            }),
            defineField({
              name: 'upVotes',
              type: 'number',
              initialValue: 0,
            }),
            defineField({
              name: 'downVotes',
              type: 'number',
              initialValue: 0,
            }),
            defineField({
              name: 'customer',
              type: 'reference',
              to: [{ type: 'customer' }],
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'questions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              readOnly: true,
              type: 'string',
              validation: (rule) => rule.required().max(1000),
            }),
            defineField({
              name: 'answers',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'string',
                  validation: (rule) => rule.required().max(1000),
                }),
              ]
            }),
          ],
        }),
      ],
    }),
  ],
})
