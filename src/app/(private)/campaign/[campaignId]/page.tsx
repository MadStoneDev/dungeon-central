export default async function SingleCampaign({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const campaignId = (await params).campaignId;

  return <div>Single Campaign: {campaignId}</div>;
}
