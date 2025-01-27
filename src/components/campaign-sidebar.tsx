"use client";

import { useEffect, useState } from "react";

import {
  BicepsFlexed,
  Brain,
  Footprints,
  HeartPulse,
  MessageCircleHeart,
  Scale,
} from "lucide-react";

import {
  IconBoltFilled,
  IconCircleChevronLeft,
  IconCircleChevronLeftFilled,
  IconDashboardFilled,
  IconDiamondFilled,
  IconEyeFilled,
  IconRun,
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
  const [autohideBar, setAutohideBar] = useState(false);
  const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);
  const [hoverSidebar, setHoverSidebar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  // Functions

  const openSidebar = () => {
    setShowSidebarOnMobile(true);

    setTimeout(() => {
      setShowOverlay(true);
    }, 300);
  };

  const closeSidebar = () => {
    setShowOverlay(false);

    setTimeout(() => {
      setShowSidebarOnMobile(false);
    }, 300);
  };

  const toggleSidebar = () => {
    if (showSidebarOnMobile) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  // Effects
  useEffect(() => {
    const autohideBar = localStorage.getItem("autohideBar");

    if (autohideBar) {
      setAutohideBar(autohideBar === "true");
    }
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem("autohideBar", autohideBar.toString());
    } else {
      setFirstLoad(false);
    }
  }, [autohideBar]);

  return (
    <section
      className={`fixed right-0 ${
        autohideBar
          ? hoverSidebar
            ? "md:py-4 top-0 bottom-0 right-0 md:translate-x-0"
            : "md:py-4 top-0 bottom-0 right-0 md:translate-x-[90%]"
          : "md:py-0 md:relative h-full top-0 md:top-auto md:right-auto"
      }
       ${
         showSidebarOnMobile
           ? "py-2 md:py-0 md:relative h-full top-0"
           : "py-2 translate-x-full md:translate-x-0"
       } z-50 transition-all duration-300 ease-in-out`}
    >
      {/* Overlay */}
      <div
        className={`block md:hidden fixed top-0 right-0 h-full ${
          showSidebarOnMobile
            ? `w-full ${showOverlay && "bg-black/20"}`
            : "hidden w-0 bg-transparent"
        } z-0 transition-all duration-300 ease-in-out`}
        onClick={() => closeSidebar()}
      />

      {/* Show Toggle - DESKTOP */}
      <button
        className={`absolute top-1/2 left-0 -translate-x-[110%] hidden md:grid place-content-center w-7 h-8`}
        onClick={() => setAutohideBar(!autohideBar)}
      >
        <IconCircleChevronLeftFilled
          className={`${
            autohideBar ? "rotate-0" : "-rotate-180"
          } transition-all duration-300 ease-in-out`}
        />
      </button>

      {/* Show Toggle - MOBILE */}
      <button
        className={`absolute top-1/2 left-0 -translate-x-[110%] grid md:hidden place-content-center w-7 h-8`}
        onClick={() => toggleSidebar()}
      >
        <IconCircleChevronLeftFilled
          className={`${
            showSidebarOnMobile ? "-rotate-180" : "rotate-0"
          } transition-all duration-300 ease-in-out`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`relative h-full`}
        onPointerEnter={() => setHoverSidebar(true)}
        onPointerLeave={() => setHoverSidebar(false)}
      >
        <aside
          className={`${
            autohideBar
              ? "shadow-xl shadow-tabletop-black/30"
              : "md:rounded-r-3xl"
          } h-full rounded-l-3xl overflow-hidden`}
        >
          <div
            className={`simple-scrollbar px-2 py-4 ${
              autohideBar ? "mr-0" : "md:mr-0"
            } flex flex-col gap-4 items-center h-full bg-white dark:bg-neutral-700/75 w-[300px] ${
              hoverSidebar ? "w-[300px]" : "md:w-[120px]"
            } overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out`}
          >
            {/* Avatar */}
            <article
              className={`w-[90px] h-[90px] min-h-[90px] border-[5px] border-tabletop-off-white rounded-full bg-tabletop-off-white dark:bg-tabletop-black overflow-hidden`}
            ></article>

            <article
              className={`w-full font-serif font-extrabold text-tabletop-green text-center`}
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
              className={`grid ${
                hoverSidebar ? "grid-cols-5" : "grid-cols-5 md:grid-cols-3"
              } w-full max-w-[230px] font-serif text-xl font-bold transition-all duration-300 ease-in-out`}
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

              {/* Initiative */}
              <section
                className={`${
                  !hoverSidebar && "md:hidden"
                } flex flex-col items-center gap-0 w-full`}
                title={`Passive Perception`}
              >
                <IconBoltFilled size={26} />
                {init}
              </section>

              {/* Speed */}
              <section
                className={`${
                  !hoverSidebar && "md:hidden"
                } flex flex-col items-center gap-0 w-full`}
                title={`Passive Perception`}
              >
                <IconDashboardFilled size={26} />
                {speed}
              </section>
            </article>

            {/* Separator */}
            <div
              className={`h-[1px] w-full bg-tabletop-black/20 rounded-full`}
            ></div>

            {/* Stats */}
            <article
              className={`grid ${
                hoverSidebar ? "grid-cols-6" : "grid-cols-6 md:grid-cols-2"
              } gap-y-4 w-full font-serif text-xl font-bold transition-all duration-300 ease-in-out`}
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

            {/* Separator */}
            <div
              className={`${
                !hoverSidebar && "md:hidden"
              } h-[1px] w-full bg-tabletop-black/20 rounded-full`}
            ></div>

            {/* Extra Info */}
            <article
              className={`${
                !hoverSidebar && "md:hidden"
              } px-2 grid grid-cols-1 md:grid-cols-2 gap-2 w-full font-light text-sm`}
            >
              {/* Strength */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Athletics</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>

              {/* Dexterity */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Acrobatics</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Sleight of Hand</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Stealth</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>

              {/* Constitution */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Saving Throw</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>

              {/*  Intelligence */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Arcana</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>History</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Investigation</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Nature</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Religion</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>

              {/* Wisdom */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Animal Handling</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Insight</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Medicine</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Perception</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Survival</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>

              {/* Charisma */}
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Deception</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Intimidation</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Performance</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
              <section
                className={`px-2 py-1 flex justify-between bg-tabletop-black/20 hover:bg-tabletop-black/10 dark:bg-tabletop-off-white/10 hover:dark:bg-tabletop-off-white/20 rounded-full transition-all duration-300 ease-in-out`}
              >
                <span>Persuasion</span>
                <span className={`font-serif font-bold`}>+2</span>
              </section>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}
