import { SchemaTypeDefinition } from 'sanity'

// schemas
import customer from './documents/customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer],
}
