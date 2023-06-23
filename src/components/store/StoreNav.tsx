"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoutes } from "src/lib/types";

const navLinks: {
  title: string;
  href: AppRoutes;
}[] = [
  {
    title: "Shop",
    href: "/store",
  },
  {
    title: "Collections",
    href: "/store/collections",
  },
  {
    title: "About",
    href: "#",
  },
];

export function StoreNav() {
  const pathname = usePathname();
  return (
    <ul className='flex gap-x-8 text-xs font-bold'>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <li key={link.title}>
            <Link
              className={`cursor-pointer hover:text-accent ${
                isActive ? "text-accent" : ""
              }`}
              href={link.href}
            >
              {link.title.toLocaleUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
