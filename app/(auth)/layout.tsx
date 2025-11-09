export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between p-2 gap-4 min-h-screen">
      {children}
      <div className="w-full bg-primary rounded-xl"></div>
    </div>
  );
}
