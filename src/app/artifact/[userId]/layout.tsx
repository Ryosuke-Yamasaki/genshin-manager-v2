export default async function ArtifacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center py-4">{children}</div>;
}
