"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// todo: add hovering content to show as dropdown
const navLinks = [
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Collections",
    href: "/app/collections",
  },
  {
    title: "About",
    href: "/about",
  },
];

export function AppNav() {
  const pathname = usePathname();
  return (
    <ul className='flex gap-x-8 text-xs font-bold '>
      {navLinks.map(link => {
        const isActive = pathname.startsWith(link.href);

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
