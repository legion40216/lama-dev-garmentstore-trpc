type NavLink = {\n  label: string;\n  href: string;\n};\n\nexport const navLinks: NavLink[] = [];

export const footerLinks = [
  {
    title: "Categories",
    links: [
      { label: "homepage",          href: "/" },
      { label: "contact",           href: "/contact" },
      { label: "about us",          href: "/about" },
      { label: "terms of service",  href: "/terms" },
      { label: "privacy policy",    href: "/privacy" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "all products", href: "/products" },
      { label: "new arrivals", href: "/products/new" },
      { label: "best sellers", href: "/products/best-sellers" },
      { label: "sale items",   href: "/products/sale" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "about us", href: "/about" },
      { label: "contact",  href: "/contact" },
      { label: "blog",     href: "/blog" },
      { label: "careers",  href: "/careers" },
    ],
  },
];
