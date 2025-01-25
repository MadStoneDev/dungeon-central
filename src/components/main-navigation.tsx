"use client";

import { useState } from "react";

import {
  IconCampfire,
  IconMapRoute,
  IconMoon,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function MainNavigation() {
  // Hooks
  const pathname = usePathname();
  const { setTheme } = useTheme();

  // Functions
  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname?.startsWith(path);
  };

  // States
  const [showCampaigns, setShowCampaigns] = useState(isActive("/campaign"));

  return (
    <nav
      className={`flex flex-row items-center gap-2 ${showCampaigns ? "md:w-[120px]" : "md:w-[60px]"} transition-all duration-300 ease-in-out`}
    >
      <section
        className={`px-1.5 py-2 flex flex-row md:flex-col items-center gap-4 bg-tabletop-green rounded-full text-white transition-all duration-300 ease-in-out z-50`}
      >
        <Link
          href={`/campfire`}
          className={`grid place-content-center min-w-10 min-h-10 ${
            isActive("/campfire") ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => setShowCampaigns(false)}
        >
          <IconCampfire size={26} />
        </Link>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 ${
            isActive("/campaign") ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => setShowCampaigns(!showCampaigns)}
        >
          <IconMapRoute size={26} />
        </button>

        <Link
          href={`/settings`}
          className={`grid place-content-center min-w-10 min-h-10 ${
            isActive("/settings") ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => setShowCampaigns(false)}
        >
          <IconSettings size={26} />
        </Link>

        <button
          type="button"
          className={`-mt-1 grid place-content-center min-w-8 min-h-8 rounded-full transition-all duration-300 ease-in-out`}
          onClick={() =>
            setTheme((theme) => (theme === "dark" ? "light" : "dark"))
          }
        >
          <IconSun size={26} className={`hidden dark:block`} />
          <IconMoon size={22} className={`block dark:hidden`} />
        </button>
      </section>

      <section
        className={`absolute top-1/2 -translate-y-1/2 ${
          showCampaigns
            ? "left-3 md:left-[72px] md:max-w-[120px] md:max-h-[999px]"
            : "-left-[100px] md:left-3 md:max-w-0 md:max-h-0"
        } px-1.5 py-2 flex flex-col items-center gap-4 bg-tabletop-black dark:bg-white rounded-full transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {Array.from({ length: 5 }).map((campaign, index) => {
          return (
            <Link
              key={`campaign-${index}`}
              href={`/campaign/campaign-${index}`}
              type="button"
              className={`grid place-content-center min-w-10 min-h-10 ${
                isActive(`/campaign/campaign-${index}`)
                  ? "bg-tabletop-off-white dark:bg-tabletop-black text-tabletop-black dark:text-tabletop-off-white"
                  : "text-white dark:text-tabletop-black"
              } rounded-full`}
            >
              <IconMapRoute size={26} />
            </Link>
          );
        })}
      </section>
    </nav>
  );
}
