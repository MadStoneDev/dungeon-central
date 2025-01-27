import CampaignSidebar from "@/components/campaign-sidebar";
import TopNavigation from "@/components/top-navigation";

export default async function SingleCampaign({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const campaignId = (await params).campaignId;

  return (
    <div className={`flex h-full`}>
      {/* Main Window */}
      <section className={`relative flex-1`}>
        {/* Header */}
        <div className={`px-4 flex items-center justify-between`}>
          <h1 className={`font-serif text-lg md:text-xl font-black`}>
            Campaign: {campaignId}
          </h1>
          <TopNavigation />
        </div>
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
