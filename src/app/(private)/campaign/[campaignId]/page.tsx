import CampaignSidebar from "@/components/campaign-sidebar";

export default async function SingleCampaign({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const campaignId = (await params).campaignId;

  return (
    <div className={`flex h-full`}>
      <section className={`flex-1`}>Single Campaign: {campaignId}</section>
      <CampaignSidebar />
    </div>
  );
}
