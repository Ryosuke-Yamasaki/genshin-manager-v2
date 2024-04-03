import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/wiki/sidebar";

export default function WikiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-10 flex justify-center space-x-4">
      <Sidebar />
      <Separator orientation="vertical" />
      <div className="py-4">{children}</div>
    </div>
  );
}
