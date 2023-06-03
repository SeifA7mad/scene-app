import { SchemaTypeDefinition } from 'sanity'

// documents
import category from './documents/category'
import customer from './documents/customer'
import location from './documents/location'
import product from './documents/product'
// objects
import address from './objects/address'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer, location, category, product, address,],
}
