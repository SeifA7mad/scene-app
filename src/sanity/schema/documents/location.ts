import { MdLocationOn } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { CITIES_LIST } from 'src/lib/constants'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: MdLocationOn,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(50),
    }),
    defineField({
      name: 'city',
      type: 'string',
      options: {
        list: CITIES_LIST,
      },
      validation: (rule) => rule.required(),
      initialValue: CITIES_LIST[0].value
    }),
    defineField({
      name: 'shippingCost',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().greaterThan(-1),
    }),
  ],
})
