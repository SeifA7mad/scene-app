import { TitledListValue } from 'sanity'

export const CITIES_LIST: TitledListValue<string>[] = [
  {
    title: 'Cairo',
    value: 'cairo',
  },
]

export const SIZES_LIST: TitledListValue<string>[] = [
  {
    title: 'S',
    value: 's',
  },
  {
    title: 'M',
    value: 'm',
  },
  {
    title: 'L',
    value: 'l',
  },
  {
    title: 'XL',
    value: 'xl',
  },
  {
    title: 'XXL',
    value: 'xxl',
  },
]

export const SEASONS_LIST: TitledListValue<string>[] = [
  {
    title: 'Summer',
    value: 'summer',
  },
  {
    title: 'Winter',
    value: 'winter',
  },
  {
    title: 'Spring',
    value: 'spring',
  },
  {
    title: 'Autumn',
    value: 'autumn',
  },
]

export const ORDER_STATUSES_LIST: TitledListValue<string>[] = [
  { title: 'Pending', value: 'pending' },
  { title: 'Processing', value: 'processing' },
  { title: 'Out for delivery', value: 'out_for_delivery' },
  { title: 'Delivered', value: 'delivered' },
  { title: 'Cancelled', value: 'cancelled' },
]


export const PAYMENTMETHODS_LIST: TitledListValue<string>[] = [
  { title: 'Cash on delivery', value: 'cash_on_delivery' },
  { title: 'Credit card', value: 'credit_card' },
  { title: 'Paypal', value: 'paypal' },
  { title: 'Fawry', value: 'fawry' },
  { title: 'Valu', value: 'valu' },
  { title: 'Vodafone cash', value: 'vodafone_cash' },
  { title: 'Paymob', value: 'paymob' },
]