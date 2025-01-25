"use client";

import { useState } from "react";

import {
  BicepsFlexed,
  Brain,
  Footprints,
  HeartPulse,
  MessageCircleHeart,
  Scale,
} from "lucide-react";

import {
  IconCircleChevronLeft,
  IconCircleChevronLeftFilled,
  IconDiamondFilled,
  IconEyeFilled,
  IconShieldFilled,
} from "@tabler/icons-react";

interface Stats {
  hp?: number;
  hpMax?: number;
  ac?: number;
  prof?: number;
  init?: number;
  perc?: number;
  speed?: number;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

export default function CampaignSidebar({
  hp,
  hpMax,
  ac,
  prof,
  init,
  perc,
  speed,
  str,
  dex,
  con,
  int,
  wis,
  cha,
}: Stats) {
  // States
  const [autohideBar, setAutohideBar] = useState(true);
  const [hoverSidebar, setHoverSidebar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Functions
  const toggleSidebar = () => {
    if (autohideBar) {
      openSidebar();
    } else {
      closeSidebar();
    }
  };

  const openSidebar = () => {
    setAutohideBar(false);

    setTimeout(() => {
      setShowOverlay(true);
    }, 300);
  };

  const closeSidebar = () => {
    setShowOverlay(false);

    setTimeout(() => {
      setAutohideBar(true);
    }, 300);
  };

  return (
    <section
      className={`${autohideBar ? (hoverSidebar ? "py-2 md:py-4 fixed top-0 bottom-0 right-0 translate-x-full md:translate-x-0" : "py-2 md:py-4 fixed top-0 bottom-0 right-0 translate-x-full md:translate-x-[90%]") : "py-2 md:py-0 fixed md:relative h-full top-0 md:top-auto right-0 md:right-auto"} z-50 transition-all duration-300 ease-in-out`}
    >
      {/* Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full ${autohideBar ? "hidden w-0 bg-transparent" : `w-full ${showOverlay && "bg-black/20"}`} z-0 transition-all duration-300 ease-in-out`}
        onClick={() => closeSidebar()}
      />

      {/* Show Toggle*/}
      <button
        className={`absolute top-1/2 left-0 -translate-x-[110%] grid place-content-center w-7 h-8`}
        onClick={() => toggleSidebar()}
      >
        <IconCircleChevronLeftFilled
          className={`${autohideBar ? "rotate-0" : "-rotate-180"} transition-all duration-300 ease-in-out`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`relative h-full`}
        onPointerEnter={() => setHoverSidebar(true)}
        onPointerLeave={() => setHoverSidebar(false)}
      >
        <aside
          className={`px-2 py-4 mr-2 ${autohideBar ? "mr-4" : "md:mr-0"} flex flex-col gap-4 items-center h-full bg-white dark:bg-neutral-700/75 rounded-3xl w-[300px] ${hoverSidebar ? "w-[300px]" : "md:w-[120px]"} transition-all duration-300 ease-in-out`}
        >
          {/* Avatar */}
          <article
            className={`w-full max-w-[90px] aspect-square border-[5px] border-tabletop-off-white rounded-full bg-tabletop-off-white dark:bg-tabletop-black overflow-hidden`}
          ></article>

          <article
            className={`w-full font-serif font-extrabold text-tabletop-green text-center overflow-hidden`}
            style={{
              lineHeight: "1.2",
            }}
          >
            Maugrim Dragonclaw
          </article>

          <article className={`mt-2 flex flex-col items-center gap-1 w-full`}>
            <section
              className={`relative h-3 w-full max-w-[150px] bg-tabletop-off-white rounded-full overflow-hidden border border-tabletop-black`}
            >
              <div
                className={`absolute top-0 left-0 bottom-0 bg-tabletop-green transition-all duration-300 ease-in-out`}
                style={{
                  width: hp && hpMax && `${(hp * 100) / hpMax}%`,
                }}
              ></div>
            </section>

            {hp && hpMax && (
              <section
                className={`flex items-center gap-2 font-serif font-medium`}
              >
                <span className={`text-sm text-tabletop-green`}>HP:</span>
                <p>
                  <span>{hp}</span> / {hpMax}
                </p>
              </section>
            )}
          </article>

          {/* Main Stats */}
          <article
            className={`mt-4 grid grid-cols-3 w-full max-w-[200px] font-serif text-xl font-bold transition-all duration-300 ease-in-out`}
          >
            {/* Armor Class */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Armor Class`}
            >
              <IconShieldFilled size={25} />
              <span>{ac}</span>
            </section>

            {/* Proficiency Bonus */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Initiative`}
            >
              <IconDiamondFilled size={26} />
              <span>{prof}</span>
            </section>

            {/* Passive Perception */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Passive Perception`}
            >
              <IconEyeFilled size={26} />
              {perc}
            </section>
          </article>

          {/* Stats */}
          <article
            className={`mt-4 grid ${hoverSidebar ? "grid-cols-6" : "grid-cols-6 md:grid-cols-2"} gap-y-4 w-full font-serif text-xl font-bold transition-all duration-300 ease-in-out`}
          >
            {/* Strength */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Strength`}
            >
              <BicepsFlexed />
              {str && (
                <span>
                  {str > 11 && `+`}
                  {Math.floor((str - 10) / 2)}
                </span>
              )}
            </section>

            {/* Dexterity */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Dexterity`}
            >
              <Footprints />
              {dex && (
                <span>
                  {dex > 11 && `+`}
                  {Math.floor((dex - 10) / 2)}
                </span>
              )}
            </section>

            {/* Constitution */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Constitution`}
            >
              <HeartPulse />
              {con && (
                <span>
                  {con > 11 && `+`}
                  {Math.floor((con - 10) / 2)}
                </span>
              )}
            </section>

            {/*  Intelligence */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Intelligence`}
            >
              <Brain />
              {int && (
                <span>
                  {int > 11 && `+`}
                  {Math.floor((int - 10) / 2)}
                </span>
              )}
            </section>

            {/* Wisdom */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Wisdom`}
            >
              <Scale />
              {wis && (
                <span>
                  {wis > 11 && `+`}
                  {Math.floor((wis - 10) / 2)}
                </span>
              )}
            </section>

            {/* Charisma */}
            <section
              className={`flex flex-col items-center gap-0 w-full`}
              title={`Charisma`}
            >
              <MessageCircleHeart />
              {cha && (
                <span>
                  {cha > 11 && `+`}
                  {Math.floor((cha - 10) / 2)}
                </span>
              )}
            </section>
          </article>
        </aside>
      </div>
    </section>
  );
}
