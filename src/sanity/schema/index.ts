import { SchemaTypeDefinition } from 'sanity'

// documents
import category from './documents/category'
import customer from './documents/customer'
import location from './documents/location'
import order from './documents/order'
import product from './documents/product'
import promotion from './documents/promotion'
// objects
import address from './objects/address'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer, location, category, product, address, promotion, order],
}
