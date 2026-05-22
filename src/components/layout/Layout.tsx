import Header from "../navigation/Header";

import SubjectNavbar from "../navigation/SubjectNavbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* 
        Top header
      */}
      <Header />

      {/* 
        Desktop subject navigation

        Hidden on mobile internally
      */}
      <SubjectNavbar />

      {/* 
        Page content
      */}
      <main>
        {children}
      </main>

    </div>
  );
}