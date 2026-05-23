import Header from "../navigation/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Header */}
      <Header />

      {/* Page Content */}
      <main>
        {children}
      </main>

    </div>
  );
}