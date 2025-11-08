export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between p-2 gap-4">
      {children}
      <div className="w-full h-[97vh] bg-primary rounded-xl"></div>
    </div>
  );
}
