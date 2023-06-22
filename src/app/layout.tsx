import "src/styles/global.css";

import { Metadata } from "next";

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='winter' lang='en'>
      <body>{children}</body>
    </html>
  );
}
