import "src/styles/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scene e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='bumblebee' lang='en'>
      <body>{children}</body>
    </html>
  );
}
