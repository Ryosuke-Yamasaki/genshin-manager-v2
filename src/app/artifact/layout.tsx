export default async function ArtifacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen justify-center">{children}</div>;
}
