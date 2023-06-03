import { SchemaTypeDefinition } from 'sanity'

// documents
import customer from './documents/customer'
import location from './documents/location'
// objects
import address from './objects/address'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer, location, address],
}
