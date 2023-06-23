import { StoreCollections } from "src/components/store/StoreCollections";
import { getTobLevelCategories } from "src/lib/service";

// todo: revalidate on-demand
export default async function Page() {
  const collections = await getTobLevelCategories();

  return <StoreCollections collectionsList={{collections: collections}}  />;
}
