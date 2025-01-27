import CampaignSidebar from "@/components/campaign-sidebar";
import TopNavigation from "@/components/top-navigation";
import { IconMap, IconMapRoute, IconPicnicTable } from "@tabler/icons-react";

export default async function SingleCampaign({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const campaignId = (await params).campaignId;

  return (
    <div className={`flex h-full`}>
      {/* Main Window */}
      <section
        className={`pb-4 md:pb-0 pl-2 pr-2 md:pr-8 relative flex-1 flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* Header */}
        <TopNavigation />

        {/* Campaign Header */}
        <section
          className={`mb-4 p-2 flex items-center justify-between bg-tabletop-black/10 rounded-full`}
        >
          <h1 className={`flex items-center gap-2`}>
            <IconMapRoute /> {campaignId}
          </h1>

          <div>
            <IconPicnicTable size={26} />
          </div>
        </section>

        {/* Logger */}
        <section
          className={`flex-grow w-full border border-tabletop-black bg-white overflow-y-auto`}
        ></section>
      </section>

      {/* Right Sidebar */}
      <CampaignSidebar
        hp={32}
        hpMax={42}
        ac={16}
        prof={2}
        init={10}
        perc={10}
        speed={30}
        str={16}
        dex={12}
        con={10}
        int={8}
        cha={12}
        wis={14}
      />
    </div>
  );
}
