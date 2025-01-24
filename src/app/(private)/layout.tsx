import MainNavigation from "@/components/main-navigation";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex-grow p-3 flex flex-row items-center w-full h-dvh bg-tabletop-off-white dark:bg-tabletop-black`}
    >
      <MainNavigation />
      {children}
    </div>
  );
}
