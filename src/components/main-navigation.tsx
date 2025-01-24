"use client";

import { useState } from "react";

import {
  IconCampfire,
  IconMapRoute,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export default function MainNavigation() {
  // States
  const [activeItem, setActiveItem] = useState(0);
  const [showCampaigns, setShowCampaigns] = useState(false);

  // Functions
  const handleNavigation = (item: number) => {
    setActiveItem(item);
    setShowCampaigns(item === 1);
  };

  return (
    <nav
      className={`relative flex flex-row items-center gap-2 w-[115px] transition-all duration-300 ease-in-out`}
    >
      <section
        className={`px-1.5 py-2 flex flex-col items-center gap-4 bg-tabletop-green rounded-full text-white transition-all duration-300 ease-in-out z-50`}
      >
        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 ${
            activeItem === 0 ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => handleNavigation(0)}
        >
          <IconCampfire size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 ${
            activeItem === 1 ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => handleNavigation(1)}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 ${
            activeItem === 2 ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => handleNavigation(2)}
        >
          <IconUser size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 ${
            activeItem === 3 ? "bg-tabletop-green-dark" : ""
          } rounded-full transition-all duration-300 ease-in-out`}
          onClick={() => handleNavigation(3)}
        >
          <IconSettings size={26} />
        </button>
      </section>

      <section
        className={`absolute ${
          showCampaigns ? "left-[60px] max-h-[999px]" : "left-0 max-h-0"
        } px-1.5 py-2 flex flex-col items-center gap-4 bg-tabletop-black dark:bg-white rounded-full text-white transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>

        <button
          type="button"
          className={`grid place-content-center min-w-10 min-h-10 bg-tabletop-green-dark rounded-full`}
        >
          <IconMapRoute size={26} />
        </button>
      </section>
    </nav>
  );
}
