import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the viewport to resize behavior
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='w-full'> {children}</div>;
}
