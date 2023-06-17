import { AppCollections } from "src/components/app/AppCollections";
import { getCategories } from "src/lib/service";

// todo: revalidate on-demand
export default async function Page() {
  const collections = await getCategories();

  return <AppCollections collectionsList={{collections: collections}}  />;
}
