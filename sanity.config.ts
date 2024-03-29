/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

// plugins
import { dashboardTool } from "@sanity/dashboard";
import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// widgets
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import OrdersWidget from "src/sanity/widget/OrdersWidget";

// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  //edit schemas in './sanity/schema'
  schema,
  studio: {
    components: {},
  },
  plugins: [
    deskTool(),
    dashboardTool({
      widgets: [
        {
          name: "orders",
          component: OrdersWidget,
          layout: {
            width: "full",
          },
        },
        documentListWidget({
          types: ["product"],
          title: "Products",
          order: "_updatedAt desc",
          layout: {
            width: "full",
          },
        }),
        documentListWidget({
          types: ["customer"],
          title: "Customers",
          order: "_updatedAt desc",
          layout: {
            width: "full",
          },
        }),
      ],
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    table(),
  ],
});
