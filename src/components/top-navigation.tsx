"use client";

import { usePathname } from "next/navigation";

import { IconBell, IconPicnicTable } from "@tabler/icons-react";

export default function TopNavigation() {
  // Hooks
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-row items-center gap-4 transition-all duration-300 ease-in-out`}
    >
      {pathname.startsWith("/campaign") && (
        <section>
          <IconPicnicTable size={26} />
        </section>
      )}
      <section>
        <IconBell />
      </section>
    </nav>
  );
}
