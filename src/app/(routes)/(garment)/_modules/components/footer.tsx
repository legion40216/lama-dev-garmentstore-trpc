"use client";
import React from "react";
import { footerLinks } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// get the active routes
export function useNavRoutes() {
  const pathName = usePathname();

  return footerLinks.map((footerlink)=>({
    ...footerlink,
    links: footerlink.links.map((link) => ({
      ...link,
      active: pathName?.startsWith(link.href + "/") || pathName === link.href,
    }))
  }));
}

export default function Footer() {
  const routes = useNavRoutes();
  return (
    <footer
      className="bg-lama-accent text-lama-accent-foreground p-4 rounded-md
                  grid sm:grid-cols-4 gap-6 place-items-center 
                  md:place-items-start text-center"
    >
      <div className="space-y-4">
        <Link 
          className="flex items-center justify-center md:justify-start" 
          href="/"
        >
          <Image
            src="/assets/logo.png"
            alt="Garment Store Logo"
            width={36}
            height={36}
            className="size-6"
          />
          <span 
            className="hidden sm:block text-md font-medium tracking-wider
                     text-lama-primary"
          >
            Garment Store
          </span>
        </Link>

        <div className="space-y-1">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Garment Store.
          </p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </div>

      {routes.map(section => (
        <div key={section.title}>
          <h3 className="font-semibold mb-2 text-lama-primary">{section.title}</h3>
          <ul className="space-y-1">
            {section.links.map(link => (
              <li 
                key={link.href} 
                className={`text-sm hover:text-lama-primary 
                          ${link.active ? "text-lama-primary" : ""}
                          hover:underline capitalize
                          `}
                >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
