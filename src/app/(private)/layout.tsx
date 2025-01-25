import MainNavigation from "@/components/main-navigation";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex-grow p-3 flex flex-col-reverse md:flex-row items-center w-full h-dvh bg-tabletop-off-white dark:bg-tabletop-black overflow-hidden`}
    >
      <MainNavigation />
      <main className={`flex-1 w-full h-full overflow-y-auto`}>{children}</main>
    </div>
  );
}
