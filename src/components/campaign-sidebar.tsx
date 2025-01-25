export default function CampaignSidebar() {
  return (
    <section
      className={`group p-3 flex flex-col gap-4 items-center bg-white dark:bg-neutral-800/50 rounded-3xl w-[120px] hover:w-[300px] h-full overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <article
        className={`w-full max-w-[120px] aspect-square rounded-full bg-tabletop-off-white dark:bg-tabletop-black overflow-hidden`}
      ></article>

      <article
        className={`font-serif font-extrabold text-tabletop-green text-center`}
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
              width: `${(34 * 100) / 42}%`,
            }}
          ></div>
        </section>

        <section className={`font-serif font-medium`}>
          <span className={`text-sm text-tabletop-green`}>HP: </span>
          <span>34</span> / 42
        </section>
      </article>
    </section>
  );
}
