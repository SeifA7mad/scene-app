import { AppCollections } from "src/components/app/AppCollections";
import { getTobLevelCategories } from "src/lib/service";

// todo: revalidate on-demand
export default async function Page() {
  const collections = await getTobLevelCategories();

  return <AppCollections collectionsList={{collections: collections}}  />;
}
