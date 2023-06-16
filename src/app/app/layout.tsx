import "src/styles/global.css";

import { Metadata } from "next";
import { AppHeading } from "src/components/app/AppHeading";

export const metadata: Metadata = {
  title: "Scene e-commerce",
  viewport: "width=device-width, initial-scale=1",
  applicationName: "Scene e-commerce",
  themeColor: "#ffffff",
  description:
    "Scene e-commerce is an Egyptian clothing store. We sell Egyptian clothing and fashion.",
  keywords: [
    "Scene e-commerce",
    "clothing",
    "fashion",
    "ecommerce",
    "store",
    "shop",
    "Egypt",
    "Egyptian",
    "Egyptian clothing",
    "Egyptian fashion",
    "Egyptian ecommerce",
    "Egyptian store",
    "Egyptian shop",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <AppHeading />
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
