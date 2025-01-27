"use client";

import { usePathname } from "next/navigation";

import { IconBell, IconPicnicTable } from "@tabler/icons-react";

export default function TopNavigation() {
  // Hooks
  const pathname = usePathname();

  return (
    <nav
      className={`mb-4 flex flex-row items-center justify-between gap-4 w-full transition-all duration-300 ease-in-out`}
    >
      <section
        className={`flex flex-row items-center gap-4 font-serif uppercase font-bold`}
      >
        TableTop Central
      </section>

      <section className={`flex flex-row items-center gap-4`}>
        <article>
          <IconBell />
        </article>
      </section>
    </nav>
  );
}
