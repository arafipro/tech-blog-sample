export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl">{children}</div>;
}
