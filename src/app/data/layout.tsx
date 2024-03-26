export default async function WikiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center py-4">{children}</div>;
}
